import React, { useEffect } from 'react';
import TaskItem from './TaskItem';
import TaskInput from './TaskInput';
import { useSelector } from 'react-redux';
import { clearAll } from '../store/features/todoSlice';
import { useDispatch } from 'react-redux';

const TaskList = () => {
  const taskData = useSelector((state) => state.todo.itemList);

  useEffect(()=>{
    localStorage.setItem("todoList", JSON.stringify(taskData))
  },[taskData])
  const dispatch = useDispatch()
  return (
    <div className='bg-zinc-900 p-6 w-full max-w-[400px] pt-0   '>
      <h1 className='text-red-700 text-2xl text-center font-bold pb-2'>TODO LIST</h1>
      <TaskInput />
      <div className='h-3/4 overflow-y-auto pr-2 pb-5'>

        {taskData?.map((item) => (
          <TaskItem key={item.id} item={item} />
        ))}
      </div>
      {taskData.length > 0 &&
        <div className='flex justify-center'>
          <button onClick={() => dispatch(clearAll())} className='bg-green-600 text-white px-6 mt-3  py-2 rounded-md'>Clear All</button>
        </div>
      }
    </div>
  );
};

export default TaskList;
