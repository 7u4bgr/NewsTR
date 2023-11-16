import axios from "axios";
const instants=axios.create({
    baseURL:"https://api.collectapi.com",
    headers:{
        Authorization:"apikey 7GWIuDxmXcgx9bWEdyaSCS:6hCjo5dEfXyZRJratT4Zfd"
    }
})
export default instants;