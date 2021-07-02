import axios from 'axios';

const serviceEndpoint = 'http://localhost:3030/bugs'

async function getAll(){
    const response = await axios.get(serviceEndpoint);
    const bugs = response.data;
    return bugs;
}

const bugApi = { getAll }

export default bugApi;