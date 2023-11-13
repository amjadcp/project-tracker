import { generateAPIError } from "../../errors/apiError.js";
import {errorWrapper}  from "../../middleware/errorWrapper.js";
import { addProjectService, assignTeamService } from "../../service/project.js";


const addProject = errorWrapper(async(req, res, next)=>{
    // logic
    const project = await addProjectService(req.body.projectName)
    if (project) {
        return res.status(200).json({
            success: true,
            message: 'project added',
            data: project
        })
    }
    return next(generateAPIError('project not added', 400))
})

const assignTeam = errorWrapper(async(req, res, next)=>{
    // logic
    const project = await assignTeamService({
        projectId: req.body.projectId,
        team: req.body.team // array of user ids
    })
    if (project) {
        return res.status(200).json({
            success: true,
            message: 'team list updated',
            data: project
        })
    }
    return next(generateAPIError('team list not updated', 400))
})

export {
    addProject,
    assignTeam
}