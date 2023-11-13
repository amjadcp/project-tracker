import Project from "../models/Project.js"

const addProjectService = async (name) => {
    const project = await Project.create({name})
    return project
}

const assignTeamService = async ({projectId, team}) => {
    // team is an array of user ids
    const project = Project.findOneAndUpdate({_id: projectId}, {team}, {new: true})
    return project
}

export {
    addProjectService,
    assignTeamService
}