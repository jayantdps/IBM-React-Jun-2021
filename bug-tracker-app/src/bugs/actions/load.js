//import axios from 'axios'

import bugApi from '../services/bugApi';

/* function getLocalBugs(){
    console.log('returning data');
    return [
        { id : 1, name : 'Bug - 1', isClosed : false, createdAt : new Date()},
        { id : 2, name : 'Bug - 2', isClosed : false, createdAt : new Date()},
        { id : 3, name : 'Bug - 3', isClosed : false, createdAt : new Date()},
    ]
} */

function load(){
    return async function(dispatch){
        /* axios
            .get('http://localhost:3030/bugs')
            .then(function(response){
                return response.data;
            })
            .then(function(bugs){
                console.log('returning data');
                const action = { type : 'BUG_INIT', payload : bugs }
                dispatch(action);
            }); */
        const bugs = await bugApi.getAll()
        const action = { type : 'BUG_INIT', payload : bugs }
        dispatch(action);
    };
}

export default load;