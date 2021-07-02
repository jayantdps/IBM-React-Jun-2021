const projectActionCreators = {
    load(){
        const action = { type : 'PROJECT_INIT' };
        return action;
    },
    addNew(projectName, projectDesc){
        const newProject = { id : 0, name : projectName, desc : projectDesc };
        const action = { type : 'PROJECT_ADD', payload : newProject };
        return action;
    }
}

export default projectActionCreators;