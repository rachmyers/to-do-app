'use server';
import React from 'react';
import prisma from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { resolve } from 'styled-jsx/css';

export const createTask = async ( formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));  
    const content = formData.get('content');

    try {
        await prisma.task.create({
            data: {
              content
            }
          });
          revalidatePath("/todo-list");

          return{message: 'Success!'}

    } catch(error) {
        return{message: 'Error!'}
    }


}

export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
}

export const deleteTask = async (formData) => {
    const id = formData.get('id');
    await prisma.task.delete({
        where: {id}
    });
    revalidatePath("/todo-list");
}

export const getTask = async (id) => {
    return await prisma.task.findUnique({
        where: {id}
    })
}

export const editTask = async (formData) => {
    const id= formData.get('id');
    const content = formData.get('content');
    const completed = formData.get('completed');

    await prisma.task.update({
        where: {id},
        data: {
            content,
            completed: completed === "on"
        }
    }); 
    redirect("/todo-list");
}