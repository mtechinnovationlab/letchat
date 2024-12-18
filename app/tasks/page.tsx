"use client"
import { useQuery } from 'convex/react'
import React from 'react'
import {api} from "../../convex/_generated/api"

const TasksPage = () => {
    const tasks=useQuery(api.tasks.getTask)
  return (
    <div className='p-10 flex flex-col gap-4'>
        <h1 className='text-5x1'>all task are her in real-time</h1>
        {tasks?.map((task)=>(
            <div key={task._id} className='flex gap-2'>
                <span>{task.text}</span>

                </div>
        ))}

      
    </div>
  );
};

export default TasksPage
