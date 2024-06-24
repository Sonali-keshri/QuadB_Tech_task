import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemList: JSON.parse(localStorage.getItem('todoList')) || [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.itemList.push(action.payload); 
    },
    deleteItem: (state, action) => {
      state.itemList = state.itemList.filter(item => item.id !== action.payload);
    },
    editItem: (state, action) => {
      const { id, newValue } = action.payload;
      const existingItem = state.itemList.find(item => item.id === id);
      if (existingItem) {
        existingItem.value = newValue;
      }
    },
    clearAll : (state)=>{
      state.itemList = []
    }
  },
});

export const { addItem, deleteItem, editItem,clearAll } = todoSlice.actions;

export default todoSlice.reducer;
