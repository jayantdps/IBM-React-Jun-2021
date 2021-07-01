//TO BE FIXED
let currentBugId = 0;

function addNew(newBugName){
    const newBug = {
        id : ++currentBugId,
        name : newBugName,
        isClosed : false,
        createdAt : new Date()
    };
    const action = { type : 'BUG_ADD', payload : newBug};
    return action;
}
export default addNew;