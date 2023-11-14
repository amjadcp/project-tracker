import User from "../models/User.js"

// users array of objects [{name, email, department, role}]
const addUsersService = async (users) => {
    users = await User.insertMany(users)
    return users
}

const getUsersService = async (page, limit) => {
    page = parseInt(page)
    limit = parseInt(limit)
    const users = await User.find().skip((page - 1) * limit).limit(limit)
    return users
}

const getUserService = async (id) => {
    const user = await User.findOne({ _id: id })
    return user
}

// data object {name, email, department, role}
const editUserService = async (id, data) => {
    const user = await User.findOneAndUpdate({ _id: id }, data, { new: true })
    return user
}

const deleteUserService = async (id, data) => {
    const user = await User.findOneAndDelete({ _id: id })
    return user
}

export {
    addUsersService,
    getUsersService,
    getUserService,
    editUserService,
    deleteUserService
}