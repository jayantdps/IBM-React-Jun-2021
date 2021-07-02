import axios from 'axios'

function load(){
    axios
        .get('http://localhost:3030/bugs')
        .then(function(response){
            return response.data;
        })
        .then(function(bugs){
            console.table(bugs);
        });

    const action = { type : 'BUG_INIT', payload : [] }
    return action;

}

export default load;