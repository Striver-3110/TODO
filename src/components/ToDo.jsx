import React, { useState } from 'react';
import { MdDeleteForever, MdEdit } from "react-icons/md";
import AddToDo from './AddToDo';

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Handle delete functionality
  const handleDelete = (indexToDelete) => {
    setTodos((prevTodos) => prevTodos.filter((_, index) => index !== indexToDelete));
  };

  // Handle edit button click
  const handleEdit = (index) => {
    setEditIndex(index);
  };

  // Save or add the todo (handled in AddToDo)
  const saveTodo = (updatedTodo) => {
    if (editIndex !== null) {
      setTodos((prevTodos) =>
        prevTodos.map((todo, index) =>
          index === editIndex ? { ...todo, title: updatedTodo } : todo
        )
      );
      setEditIndex(null);
    } else {
      setTodos((prevTodos) => [...prevTodos, { title: updatedTodo }]);
    }
  };

  return (
    <>
      <div className='w-11/12 mt-5 pt-5 flex flex-col gap-4 items-center justify-center'>
        <AddToDo
          todos={todos}
          setTodos={setTodos}
          editIndex={editIndex}
          editValue={editIndex !== null ? todos[editIndex].title : ""}
          saveTodo={saveTodo}
        />
        {todos.length > 0 ? (
          todos.map((elem, index) => (
            <div
              className='bg-[#bcf0c599] min-w-[32rem] border border-green-800 rounded-md h-10 flex items-center justify-between p-2 font-sans text-[#000000]'
              key={index}
            >
              <div className='flex'>
                <div className='ml-1 font-bold'>{index + 1}</div>
                <div className='title ml-4'>
  {elem.title.length > 20 ? `${elem.title.substring(0, 20)}...` : elem.title}
</div>

              </div>
              <div className='flex flex-row items-center gap-4 justify-self-end mr-4'>
                <button
                  type='button'
                  onClick={() => handleEdit(index)}
                  className='text-white p-1 rounded-full bg-[#1D3557] hover:bg-green-950'
                >
                  <MdEdit />
                </button>
                <button
                  type='button'
                  onClick={() => handleDelete(index)}
                  className='text-white bg-[#E63946] p-1 rounded-full'
                >
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          ))
        ) : (
          "Add a todo"
        )}
      </div>
    </>
  );
}

export default ToDo;
