import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, editItem } from '../store/features/todoSlice';
import { FaRegCheckCircle } from "react-icons/fa";
import { MdRadioButtonUnchecked } from "react-icons/md";

const TaskItem = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.value);
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  };

  // Handling the edit button to make changes in in the present task
  const handleEdit = () => {
    if (isEditing && editValue.trim()) {
      dispatch(editItem({ id: item.id, newValue: editValue }));
    }
    setIsEditing(!isEditing);
  };
  const handleCheck = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className='flex items-center justify-between p-2 text-black bg-gray-200 mt-3 rounded-lg' >
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value.toUpperCase())}
          className='text-black px-2 outline-none bg-transparent'
        />
      ) : (
        <div className='flex items-center gap-2 '>
          <p onClick={handleCheck} className='text-green-700 text-xl cursor-pointer'>{isChecked ? <FaRegCheckCircle /> : <MdRadioButtonUnchecked />}</p>
          <p className={`${isChecked && "line-through text-blue-700"} text-lg font-semibold flex flex-wrap`}>{item.value}</p></div>
      )}
      <div>
        <button onClick={handleEdit}>{isEditing ? '📄' : '📝'}</button>
        <button onClick={handleDelete} style={{ marginLeft: '10px' }}>❌</button>
      </div>
    </div>
  );
};

export default TaskItem;
