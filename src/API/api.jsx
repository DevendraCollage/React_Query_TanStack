import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// To fetch the data
export const fetchPosts = (pageNumber) => {
  return API.get(`/posts?_start=${pageNumber}&_limit=3`);
};

// To fetch the individual data
export const fetchIndvPost = async (id) => {
  try {
    const res = await API.get(`/posts/${id}`);
    return res.status === 200 ? res.data : null; // Return null if status isn't 200
  } catch (error) {
    console.error("Error fetching individual post:", error);
    throw error;
  }
};

// Pagination
//! Here we place the Pagination code

// Delete the post
export const deletePost = (id) => {
  return API.delete(`/posts/${id}`);
};

// Update the post
export const updatePost = (id) => {
  // We are using partial update function patch
  return API.patch(`/posts/${id}`, { title: "I have Updated!" });
};

// Infinite Scrolling
export const fetchUsers = async ({ pageParam = 1 }) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users?per_page=10&page=${pageParam}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
