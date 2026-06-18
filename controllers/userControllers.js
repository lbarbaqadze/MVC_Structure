import catchAsync from "../utils/catchAsync.js"
import appError from "../utils/appError.js"
import { userModel } from "../models/userModels.js"

export const getUsers = catchAsync(async (req, res, next) => {
    
    const users = await userModel.getAllUsers()

    res.status(200).json({
        message: "data emerged success",
        data: { users}
    })
})

export const getUsersById = catchAsync(async (req, res, next) => {
    const { id } = req.params

    if(!id || isNaN(id)){
        return next(new appError("wrong id format"), 400)
    }

    const result = await userModel.findUserById(id)

    if(result.length === 0){
        return next(new appError("data does not exist"), 404)
    }

    res.status(200).json({
        message: "success",
        data: result[0]
    })

})

export const createUser = catchAsync(async (req, res, next) => {
    const { name, surname } = req.body

    const checkUser = await userModel.existingUser(name, surname)

    if(checkUser.length > 0){
        return next(new appError("data exist"), 409)
    }

    const addUsers = await userModel.addUser(name, surname)

    const newUser = {
        id: addUsers.insertId,
        name,
        surname
    }

    res.status(201).json({
        message: "created success", newUser
    })

})

export const deleteUser = catchAsync(async (req, res, next) => {
    const { id } = req.params

    if(!id || isNaN(id)){
        return next(new appError("wrong id format"), 400)
    }

    const deleteuser = await userModel.deleteUserById(id)

    if(deleteuser.affectedRows === 0){
        return next(new appError("data does not exist"), 404)
    }

    res.status(200).json({
        message: "delete success"
    })
})

export const updateUser = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const { name, surname } = req.body

    if(!id || isNaN(id)){
        return next(new appError("wrong id format"), 400)
    }

    const putUser = await userModel.updateUserById(name, surname, id)

    if(putUser.affectedRows === 0){
        return next(new appError("data does not exist"), 404)
    }

    res.status(200).json({
        message: "put success"
    })

})