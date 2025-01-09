import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function AddToDo({ editValue, saveTodo }) {
  const [newNote, setNewNote] = useState("");

  // Update input value when switching to edit mode
  useEffect(() => {
    setNewNote(editValue);
  }, [editValue]);

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.trim() === "") return; // Avoid adding empty todos
    saveTodo(newNote);
    setNewNote(""); // Clear the input after submission
  };

  return (
    <div className=''>
      <form className='flex' onSubmit={handleSubmit}>
        <div className='mb-5 flex gap-3 items-center'>
          <label
            htmlFor='note'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'
          >
            TODO:
          </label>
          <input
            type='text'
            id='note'
            value={newNote}
            onChange={handleChange}
            className='bg-[#E6F0E8] border border-gray-300 text-gray-900 text-sm rounded-lg dark:placeholder-black 
              p-1 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add ToDo'
            required
          />
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm w-full sm:w-auto p-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            {editValue ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

AddToDo.propTypes ={
    editValue: PropTypes.string.isRequired,
    saveTodo: PropTypes.func.isRequired
}

export default AddToDo;
