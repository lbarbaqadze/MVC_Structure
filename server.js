import express from "express"
import dbconnect from './config/dbconnect.js'
import dotenv from "dotenv"
import errorHandler from './middleware/errorHandler.js'
import userRoutes from "./routes/userRoutes.js"

dotenv.config()

const server = express()
server.use(express.json())

server.use("/api", userRoutes)

server.use(errorHandler)

const startServer = async () => {
    try{
        const connection = await dbconnect.getConnection()
        connection.release()
        console.log("database connect")

        const PORT = process.env.PORT

        server.listen(PORT, () => {
            console.log(`server is running on ${PORT} port`)
        })

    }catch(error){
        console.error("database not connection", error.message)
        process.exit(1)
    }
}
startServer()