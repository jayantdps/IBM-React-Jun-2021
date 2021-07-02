let initialState = [
    {id : 1, name : 'Expense Management', desc: 'Nisi ea amet ea qui qui id aliqua deserunt excepteur esse quis. Dolore exercitation irure deserunt nostrud et anim. Id excepteur ad minim mollit velit proident amet sunt nulla magna mollit minim cupidatat. Duis Lorem dolor aute et minim eu amet laborum esse ea.'},
    {id : 2, name : 'Payroll System', desc: 'Nisi ea amet ea qui qui id aliqua deserunt excepteur esse quis. Dolore exercitation irure deserunt nostrud et anim. Id excepteur ad minim mollit velit proident amet sunt nulla magna mollit minim cupidatat. Duis Lorem dolor aute et minim eu amet laborum esse ea.'},
    {id : 3, name : 'Bug Tracker', desc: 'Nisi ea amet ea qui qui id aliqua deserunt excepteur esse quis. Dolore exercitation irure deserunt nostrud et anim. Id excepteur ad minim mollit velit proident amet sunt nulla magna mollit minim cupidatat. Duis Lorem dolor aute et minim eu amet laborum esse ea.'},
]
function projectsReducer(currentState=initialState, action){
    if (action.type === 'PROJECT_INIT') return initialState;
    if (action.type === 'PROJECT_ADD') return [...currentState, action.payload]
    return currentState;
}

export default projectsReducer;