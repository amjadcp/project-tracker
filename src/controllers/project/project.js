import { generateAPIError } from "../../errors/apiError.js";
import { errorWrapper } from "../../middleware/errorWrapper.js";
import {
  addProjectService,
  getProjectsService,
  getProjectService,
  editProjectService,
  assignTeamService,
  deleteProjectService,
} from "../../service/project.js";

const addProject = errorWrapper(async (req, res, next) => {
  const project = await addProjectService(req.body.projectName);
  if (project) {
    return res.status(200).json({
      success: true,
      message: "project added",
      data: project,
    });
  }
  return next(generateAPIError("project not added", 400));
});

const getProjects = errorWrapper(async (req, res, next) => {
  const projects = await getProjectsService(req.query.page, req.query.limit);
  if (projects) {
    return res.status(200).json({
      success: true,
      message: "project fetched",
      data: projects,
    });
  }
  return next(generateAPIError("project not found", 404));
});

const getProject = errorWrapper(async (req, res, next) => {
  const project = await getProjectService(req.query.id);
  if (project) {
    return res.status(200).json({
      success: true,
      message: "project fetched",
      data: project,
    });
  }
  return next(generateAPIError("project not found", 404));
});

const editProject = errorWrapper(async (req, res, next) => {
    const project = await editProjectService(req.query.id, req.body);
    if (project) {
      return res.status(200).json({
        success: true,
        message: "project edited",
        data: project,
      });
    }
    return next(generateAPIError("project not found", 404));
  });

  const deleteProject = errorWrapper(async (req, res, next) => {
    const project = await deleteProjectService(req.query.id, req.body);
    if (project) {
      return res.status(200).json({
        success: true,
        message: "project edited",
        data: project,
      });
    }
    return next(generateAPIError("project not found", 404));
  });

const assignTeam = errorWrapper(async (req, res, next) => {
  const project = await assignTeamService({
    projectId: req.body.projectId,
    team: req.body.team, // array of user ids
  });
  if (project) {
    return res.status(200).json({
      success: true,
      message: "team list updated",
      data: project,
    });
  }
  return next(generateAPIError("team list not updated", 400));
});

export { addProject, getProjects, getProject, editProject, deleteProject, assignTeam };
