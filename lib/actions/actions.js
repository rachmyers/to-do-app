// 'use server';
// import React from 'react';
// import prisma from '@/utils/db';
// //import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { resolve } from 'styled-jsx/css';

// import {  useState, useEffect } from 'react';

// // export default function ClientSideFetch() {
// //   const [data, setData] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetch('/api/hello')
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setData(data);
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading) return <p>Loading...</p>;

// //   return (
// //     <div>
// //       <h1>Data from API</h1>
// //       <pre>{JSON.stringify(data, null, 2)}</pre>
// //     </div>
// //   );
// // }


// // export const createTask = async ( formData) => {
// //     await new Promise((resolve) => setTimeout(resolve, 2000));  
// //     const content = formData.get('content');

// //     try {
// //         await prisma.task.create({
// //             data: {
// //               content
// //             }
// //           });
// //           revalidatePath("/todo-list");

// //           return{message: 'Success!'}

// //     } catch(error) {
// //         return{message: 'Error!'}
// //     }


// // }







// export const deleteTask = async (formData) => {
//     const id = formData.get('id');
//     await prisma.task.delete({
//         where: {id}
//     });
//     //revalidatePath("/todo-list");
// }

// export const getTask = async (id) => {
//     return await prisma.task.findUnique({
//         where: {id}
//     })
// }

// export const editTask = async (formData) => {
//     const id= formData.get('id');
//     const content = formData.get('content');
//     const completed = formData.get('completed');

//     await prisma.task.update({
//         where: {id},
//         data: {
//             content,
//             completed: completed === "on"
//         }
//     }); 
//   //  redirect("/todo-list");
// }