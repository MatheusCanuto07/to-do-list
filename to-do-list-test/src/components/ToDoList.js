import './ToDoList.css'
import { useState } from "react";
import api from "../service/api.js";

function ToDoList({ tasks, settasks }) {
  var dataAnterior = new Date();
  function handleDelete(id) {
    api.delete("/api/task/" + id, {})
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

    api
      .get("/api/task")
      .then((response) => settasks(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  function formatDate(date) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(date).toLocaleDateString('pt-BR', options);
  }

  function compareDate(date) {
    var data = formatDate(date);
    if(data !== dataAnterior){
      dataAnterior = data;
      return <h1>{dataAnterior}</h1>;
    } 
  }

  return (
    <>
      <div className='pai-container-task'>
        {tasks.map((task) => (
          <div> {compareDate(task.dataCriacao)}
          <div className="pai-task">
            <div className='pai-task-list'>
              <p className='txt-task' key={task.id}>{task.nome}</p>
              <p className='txt-task' key={task.id}>{formatDate(task.dataCriacao)}</p>
            </div>
            <div>
              <p className='btn-fechar' onClick={() => handleDelete(task.id)}>X</p> 
            </div>
          </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ToDoList