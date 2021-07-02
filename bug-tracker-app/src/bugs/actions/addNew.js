import bugApi from "../services/bugApi";

function addNew(newBugName){
    return async function(dispatch){
        const newBugData = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        };
        const newBug = await bugApi.save(newBugData);
        const action = { type : 'BUG_ADD', payload : newBug};
        dispatch(action);
    }
}

export default addNew;