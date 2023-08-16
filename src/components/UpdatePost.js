import React, { useRef, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query';
import useUpdatePost from '../services/useUpdatePost';
import { useNavigate, useParams } from 'react-router-dom';


const UpdatePost = () => {
    const navigate = useNavigate();

    let { id } = useParams();

    const todoName = useRef();
    const queryClient = useQueryClient()

    const updatePost = useUpdatePost();

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();

        updatePost.mutate({
            todoId: id,
            todoName: todoName.current.value,
            isComplete: true,
        },
        {
            onSuccess: () => {
              queryClient.invalidateQueries(['posts']);
              navigate("/")
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

export default UpdatePost
