import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/features/todoSlice';
import { v4 as uuidv4 } from 'uuid'; 

const TaskInput = () => {
  const [inpVal, setInpVal] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInpVal(e.target.value.toUpperCase());
  };

  //Adding task
  const handleAddItem = () => {
    if (inpVal.trim()) {
      const newTask = {
        id: uuidv4(),
        value: inpVal,
      };
      dispatch(addItem(newTask));
      setInpVal(''); 
    }else{
      alert("Please write any todo in the field")
    }
  };

  return (
    <div className='flex border border-white rounded-tr-2xl rounded-br-2xl mb-5'>
      <input
        type="text"
        placeholder="✍️ Add your item"
        value={inpVal}
        onChange={handleChange}
        className='w-80 px-4 py-2 outline-none bg-transparent  text-white'
      />
      <button onClick={handleAddItem} className='bg-white text-black md:px-6 px-3  border-none font-bold rounded-xl '>Add</button>
    </div>
  );
};

export default TaskInput;
