import { useMutation } from '@tanstack/react-query'
import axios from 'axios';

const createPost = async (todoName) => { 
    const response = axios.post("http://localhost:8000/todos", {
        todoName
    });
    return response;
    
}

const useCreatePost = () => {
    const mutation = useMutation(variables => createPost(variables.todoName));
  
    return mutation;

  };
  

export default useCreatePost;
  
