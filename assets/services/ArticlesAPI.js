import axios from "axios";

function findAll() {
    return axios
        .get("https://localhost:8000/api/articles")
        .then(response => response.data['hydra:member']);
}

function create(article) {
    return axios.post("http://localhost:8000/api/articles", article);
}

export default {
    findAll,
    create
}