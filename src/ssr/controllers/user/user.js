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
  await addUsersService([req.body]);
  return res.redirect("/user")
});

const getUsers = errorWrapper(async (req, res, next) => {
  const users = await getUsersService(req.query.page || 1, req.query.limit || 30);
  console.log(users);
    return res.render("user/user.hbs", {
      users: users,
    })
});

const getUser = errorWrapper(async (req, res, next) => {
  const user = await getUserService(req.params.id);
  if (user) {
    return res.render("user/user-details.hbs", {user: user})
  }
  return next(generateAPIError("User not found", 404));
});

const editUser = errorWrapper(async (req, res, next) => {
  const user = await editUserService(req.params.id, {name: req.query.name, email: req.query.email, department: req.query.department, role: req.query.role});
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
