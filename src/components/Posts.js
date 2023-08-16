import React from 'react'
import useGetPosts from '../services/useGetPosts'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import useDeletePost from '../services/useDeletePost';


const Posts = () => {
    
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    // let { id } = useParams();

    const {data} = useGetPosts();
    const deletePost = useDeletePost()

    const handleDeleteCategory = (id) => {
        deletePost.mutate(
          { todoId: id },
          {
            onSuccess: () => {
              queryClient.invalidateQueries(['posts']);
              navigate("/");

            },
            onError: ({ response }) => {
              return Notification.error(response?.data?.error);
            },
          }
        );
      };
    return (
        <>
        {data?.map((post) => { 
            return (
            <div key={post._id} >
                {post.todoName}
                <Link to={`/edit/${post._id}`}>Edit</Link>
                <button onClick={() => {handleDeleteCategory(post._id)}}> | Delete</button>
            </div>
        )})}

        </>
    )
}

export default Posts
