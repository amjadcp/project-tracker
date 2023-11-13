import { generateAPIError } from "../../errors/apiError.js";
import {errorWrapper}  from "../../middleware/errorWrapper.js";
import { addUsersService } from "../../service/user.js";


const addUsers = errorWrapper(async(req, res, next)=>{
    // logic
    const users = await addUsersService(req.body.users)
    if (users.length > 0) {
        return res.status(200).json({
            success: true,
            data: users
        })
    }
    return next(generateAPIError('Users not added', 400))
})

export {
    addUsers
}