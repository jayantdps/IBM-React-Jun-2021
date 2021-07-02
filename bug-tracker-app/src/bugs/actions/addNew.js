import bugApi from "../services/bugApi";

async function addNew(newBugName){
    /* return async function(dispatch){
        const newBugData = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        };
        const newBug = await bugApi.save(newBugData);
        const action = { type : 'BUG_ADD', payload : newBug};
        dispatch(action);
    } */

    const newBugData = {
        id : 0,
        name : newBugName,
        isClosed : false,
        createdAt : new Date()
    };
    const newBug = await bugApi.save(newBugData);
    const action = { type : 'BUG_ADD', payload : newBug};
    return action;

}

export default addNew;