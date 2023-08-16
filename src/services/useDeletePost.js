import { useMutation } from '@tanstack/react-query';

import axios from 'axios';

const deletePost = async (todoId) => {
  return axios.delete(`http://localhost:8000/todos/${todoId}`);
};


const useDeletePost = () => {
  return useMutation(({ todoId }) => deletePost(todoId));
};

export default useDeletePost;
