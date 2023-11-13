import User from "../models/User.js"

// users array of objects [{name, email, department, role}]
const addUsersService = async (users) => {
    users = await User.insertMany(users)
    return users
}

export {
    addUsersService
}