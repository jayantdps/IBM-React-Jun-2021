function removeClosed(currentBugs /* TO BE FIXED */){
    const bugsToRetain = currentBugs.filter(bug => !bug.isClosed);
    const action = { type : 'BUG_INIT', payload : bugsToRetain};
    return action;
}
export default removeClosed;