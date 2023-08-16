import { useQuery, useMutation } from '@tanstack/react-query'
import axios from 'axios';

const postsData = async () => {
    const response = axios.get('http://localhost:8000/todos');
    const data = await response;
    return data.data.data;
    
}

const useGetPosts = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: postsData
    })
};

export default useGetPosts;
