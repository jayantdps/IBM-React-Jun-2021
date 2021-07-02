import remove from "./remove";

function removeClosed(currentBugs /* TO BE FIXED */){
    return async function(dispatch){
        const bugsToRemove = currentBugs.filter(bug => bug.isClosed);
        bugsToRemove.forEach(bugsToRemove => remove(bugsToRemove)(dispatch));
    }
}
export default removeClosed;