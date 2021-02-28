import axios from 'axios';
//import { LOCAL_BACKEND_URL } from '../constants/api.constants';

// CRUD

//Retrieve
export const getAllBlogPosts = async () => {
    return new Promise((resolve, reject) => {
        try {
            axios.get(LOCAL_BACKEND_URL + '/api/blog/find/all').then((res) => { //Replace LOCAL_BACKEND_URL with API endpoint URL
                resolve(res.data);
            }).catch((e) => { 
                reject(e.response);
            });
        } catch (err) {
            reject(err);
        };
    });
};

//Create
export const submitBlogPost = async (body) => {
    return new Promise((resolve, reject) => {
        try {
            axios.post(LOCAL_BACKEND_URL + '/api/blog/create', body).then((res) => {
                resolve(res.data);
            }).catch((e) => {
                reject(e.response);
            });
        } catch (err) {
            reject(err);
        };
    });
};

//Update
export const updateBlogPost = async (body) => {
    return new Promise((resolve, reject) => {
        try {
            axios.put(LOCAL_BACKEND_URL + '/api/blog/update', body).then((res) => {
                resolve(res.data);
            }).catch((e) => {
                reject(e.response);
            });
        } catch (err) {

        };
    });
};

//Delete
export const deleteBlogPost = async (_id) => {
    return new Promise((resolve, reject) => {
        try {
            axios.delete(LOCAL_BACKEND_URL + '/api/blog/delete/' + _id).then((res) => {
                resolve(res.data);
            }).catch((e) => {
                reject(e.response);
            });
        } catch (err) {
            reject(err);
        };
    });
};