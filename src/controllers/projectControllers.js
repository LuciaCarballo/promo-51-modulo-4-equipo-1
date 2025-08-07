const project = require('../models/projectModels');

async function listProjects (req, res){
    const projectList = await project.getAll();
    res.json({
            success: true, result: projectList
    })
}

//añadir datos 

module.exports = {ListProjects}