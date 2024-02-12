import { useState } from "react";
import './ToDoCreater.css';
import ToDoList from "./ToDoList";
import api from "../service/api.js";

const ToDoCreater = () => {
  var [tasks, settasks] = useState([]);
  const [toDoName, settoDoName] = useState("");
  const [toDoDate, settoDoDate] = useState("");
  var [erroName, seterroName] = useState("");
  var [erroDate, seterroDate] = useState("");
  var [renderComponente, setrenderComponente] = useState(false);

  const handleName = (e) => {
    settoDoName(e.target.value);
  }
  const handleDate = (e) => {
    settoDoDate(e.target.value);
  }

  const validar = () => {
    let errorBool = false;
    seterroName("");
    seterroDate("");
    if (toDoName === "") {
      seterroName("Campo obrigatório!");
      errorBool = true;
    }
    console.log("Data do input " + toDoDate);
    const dataInput = new Date(toDoDate + 'T00:00:00-03:00');
    const dataAtual = new Date();
    console.log("Data do input " + dataInput);
    console.log("Data atual " + dataAtual);
    if (isNaN(dataInput)) {
      seterroDate("Campo obrigatório!");
      errorBool = true;
    }
    //Só dá uma data válida quando inseri uma data um dia maior
    //Consertar
    if (dataInput < new Date()) {
      seterroDate("Digite a data atual ou uma data futura");
      errorBool = true;
    }
    return errorBool;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validar()) {
      setrenderComponente(true);
      api.post("/api/task", {
        Id: null,
        Nome: toDoName,
        DataCriacao: toDoDate
      })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
      
      settasks([]);

      api
        .get("/api/task")
        .then((response) => settasks(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }
  };

  return (
    <div className="pai-form">
      <form className="form-todo">
        <h1 className="title-lembrete">TODO LIST</h1>
        <div className="pai-label-todo">
          <label className="lbl-nome">
            <input className="txt-Nome" onChange={handleName} type="text" name="toDoName" placeholder="Task" />
            <p className="ErroNome">{erroName !== "" ? erroName : ""}</p>
          </label>
          <label className="lbl-data">
            <input className="txt-Data" onChange={handleDate} type="date" name="toDoDate" placeholder="Day" />
            <p className="ErroNome">{erroDate !== "" ? erroDate : ""}</p>
          </label>
          <a onClick={handleSubmit} className="btn-enviar">ADD</a>
        </div>
      </form>
      {renderComponente && <ToDoList tasks={tasks} settasks={settasks} />}
    </div>
  )
}

export default ToDoCreater