import React, { useRef, useState } from 'react'
import useCreatePost from '../services/useCreatePost';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';


const CreatePost = () => {

    const navigate = useNavigate();
    const todoName = useRef();
    const queryClient = useQueryClient()
    const CreatePost = useCreatePost();

    const handleSubmit = (e) => {
        e.preventDefault();

        CreatePost.mutate({
            todoName: todoName.current.value,
        },
        {
            onSuccess: () => {
              queryClient.invalidateQueries(['posts']);
              navigate("/");
            },
            onError: ({ response }) => {
              return Notification.error(response?.data?.error);
            },
        })

    }

    console.log(todoName)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>todo Name</label>
                <input placeholder='Todo Name' ref={todoName}/>

                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default CreatePost
