import axios from 'axios';

export async function home(setData){
    await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setData(response.data))
        .catch(err => console.log(err.message));
}

export async function post(postId, setData){
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => setData(response.data))
        .catch(err => console.log(err.message));
}