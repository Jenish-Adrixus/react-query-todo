import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const editCategory = ({
    todoId,
    todoName,
    isComplete,
}) => {
  return axios.put(`http://localhost:8000/todos/${todoId}`, { todoName,
  isComplete});
};


const useUpdatePost = () => {
  return useMutation(({
    todoId,
    todoName,
    isComplete,
}) => editCategory({
    todoId,
    todoName,
    isComplete,
}));
};

export default useUpdatePost;
