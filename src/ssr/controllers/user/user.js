import { generateAPIError } from "../../../errors/apiError.js";
import { errorWrapper } from "../../../middleware/errorWrapper.js";
import {
  addUsersService,
  getUsersService,
  getUserService,
  editUserService,
  deleteUserService,
} from "../../../service/user.js";

const addUsers = errorWrapper(async (req, res, next) => {
  const users = await addUsersService(req.body.users);
  if (users.length > 0) {
    return res.status(200).json({
      success: true,
      data: users,
    });
  }
  return next(generateAPIError("Users not added", 400));
});

const getUsers = errorWrapper(async (req, res, next) => {
  const users = await getUsersService(req.query.page, req.query.limit);
  if (users.length > 0) {
    return res.status(200).json({
      success: true,
      data: users,
    });
  }
  return next(generateAPIError("Users not found", 404));
});

const getUser = errorWrapper(async (req, res, next) => {
  const users = await getUserService(req.query.id);
  if (users.length > 0) {
    return res.status(200).json({
      success: true,
      data: users,
    });
  }
  return next(generateAPIError("Users not found", 404));
});

const editUser = errorWrapper(async (req, res, next) => {
  const user = await editUserService(req.query.id, req.body);
  if (user) {
    return res.status(200).json({
      success: true,
      data: user,
    });
  }
  return next(generateAPIError("Users not found", 404));
});

const deleteUser = errorWrapper(async (req, res, next) => {
  const user = await deleteUserService(req.query.id);
  if (user) {
    return res.status(200).json({
      success: true,
      data: user,
    });
  }
  return next(generateAPIError("Users not found", 404));
});

export { addUsers, getUsers, getUser, editUser, deleteUser };
