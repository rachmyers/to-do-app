import React from 'react'
import prisma from '@/utils/db'

const getAllTasks = async () => {
  await prisma.task.create({
    data: {
      content: 'buy milk'
    },
  }) 
//   await prisma.task.update({
//     where: {
//       id: '18803885-c0cd-478e-b951-c41bdbc5a1e9'
//     },
//     data: {
//       content: 'buy milk completed'
//     }
// })

// await prisma.task.delete({
//   where: {
//     id: '18803885-c0cd-478e-b951-c41bdbc5a1e9'
//   }
// })

  const allTasks = prisma.task.findMany();
  return allTasks;

}

const Prisma = async () => {
  const tasks = await getAllTasks();
  return (
    <div>
      <h1 className="text-7xl">Tasks</h1>
      {tasks?.map((task) => (
        <h1 key={task.id} className="text-xl py-2">{task.content}</h1>    
      ))}
    </div>
  )
}

export default Prisma