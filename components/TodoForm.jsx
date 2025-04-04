'use client';

import React from 'react';
import { createTask } from '@/lib/actions/actions';
import { useFormStatus, useFormState } from 'react-dom';

const initialState = {
  message: null
}

const SubmitBtn = () => { 
  const {pending} = useFormStatus(); 
  return (
    <button type="submit" className='btn btn-primary join-item'
    disabled={pending}>
    {pending ? "creating..." : "create task"}
  </button>
  )
}

const TodoForm = () => {
  const [state, formAction] = useFormState(createTask, initialState)
  return (
    <form action = {createTask}>
      {state.Message ? <p className="mb-2">{state.message}</p> : null}
      <div className='join w-full mb-8'>
        <input 
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required  
        />
        <SubmitBtn />
      </div>
    </form>
  )
}

export default TodoForm

