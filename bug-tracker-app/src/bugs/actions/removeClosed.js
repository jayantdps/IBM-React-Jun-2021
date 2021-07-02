import remove from "./remove";

function removeClosed(){
    return async function(dispatch, getState){
        const storeState = getState()
        const currentBugs = storeState.bugsState;
        const bugsToRemove = currentBugs.filter(bug => bug.isClosed);
        bugsToRemove.forEach(bugsToRemove => remove(bugsToRemove)(dispatch));
    }
}
export default removeClosed;