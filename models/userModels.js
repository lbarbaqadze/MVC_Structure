import dbconnect from "../config/dbconnect.js"

export const userModel = {
    
    getAllUsers: async () => {
        const [rows] = await dbconnect.execute("SELECT * FROM users")
        return rows
    },

    findUserById: async (id) => {
        const [rows] = await dbconnect.execute(
            "SELECT * FROM users WHERE id = ?", [id]
        )
        return rows
    },

    existingUser: async (name, surname) => {
        const [rows] = await dbconnect.execute(
            "SELECT * FROM users WHERE name = ? AND surname = ?", [name, surname]
        )
        return rows
    },

    addUser: async (name, surname) => {
        const [result] = await dbconnect.execute(
            "INSERT INTO users (name, surname) VALUES (?, ?)", [name, surname]
        )
        return result
    },

    deleteUserById: async (id) => {
        const [result] = await dbconnect.execute(
            "DELETE FROM users WHERE id = ?", [id]
        )
        return result
    },

    updateUserById: async (name, surname, id) => {
        const [result] = await dbconnect.execute(
            "UPDATE users SET name = ?, surname = ? WHERE id = ?", [name, surname, id]
        )
        return result
    }

}