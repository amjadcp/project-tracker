import Project from "../models/Project.js"

const addProjectService = async (name) => {
    const project = await Project.create({name})
    return project
}

const getProjectsService = async (page, limit) => {
    page = parseInt(page)
    limit = parseInt(limit)
    const projects = await Project.find().skip((page - 1) * limit).limit(limit)
    return projects
}

const getProjectService = async (id) => {
    const project = await Project.findOne({_id: id})
    return project
}

// data is an object {name}
const editProjectService = async (id, data) => {
    console.log(id, data);
    const project = await Project.findOneAndUpdate({_id: id}, data, {new: true})
    return project
}

const deleteProjectService = async (id) => {
    const project = await Project.findOneAndDelete({_id: id})
    return project
}

const assignTeamService = async ({projectId, team}) => {
    // team is an array of user ids
    const project = Project.findOneAndUpdate({_id: projectId}, {team}, {new: true})
    return project
}

export {
    addProjectService,
    getProjectsService,
    getProjectService,
    editProjectService,
    deleteProjectService,
    assignTeamService
}