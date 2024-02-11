import { useState } from "react";
import './ToDoCreater.css';
import ToDoList from "./ToDoList";

const ToDoCreater = () => {
  // const [listToDO, setlistToDo] = useState([
  //   {id : 1, nome: "Fazer almoço", date: "18/02/2024"},
  //   {id : 2, nome: "Estudar arquitetura de computadores", date: "25/02/2024"},
  //   {id : 3, nome: "Fazer teste prático dti", date: "11/02/2024"}
  // ]);
  // const [listToDO, setlistToDo] = useState([
  //   {date: "18/02/2024", tasks: [
  //     {nome: "Fazer almoço"},
  //     {nome: "Estudar arquiteura de computadores"}
  //   ]}
  //   {id : 1, nome: "Fazer almoço", date: "18/02/2024"},
  //   {id : 2, nome: "Estudar arquitetura de computadores", date: "25/02/2024"},
  //   {id : 3, nome: "Fazer teste prático dti", date: "11/02/2024"}
  // ]);


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

  const validar = () =>{
    let errorBool = false;
    seterroName("");
    seterroDate("");
    // Valida se o campo name não está vazio
    if(toDoName === ""){
      seterroName("Campo obrigatório!");
      errorBool = true;
    }
    // Valida se a data é anterior a data atual
    const dataInput = new Date(toDoDate);
    const dataAtual = new Date();
    if(isNaN(dataInput)){
      seterroDate("Campo obrigatório!");
      errorBool = true;
    }
    if(dataInput < dataAtual){
      seterroDate("Digite a data atual ou uma data futura");
      errorBool = true;
    }
    return errorBool;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!validar()){
      setrenderComponente(true);
    }
  };

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Novo lembrete</h1>
        <label>
          <span>Nome</span>
          <input onChange={handleName} type="text" name="toDoName" placeholder ="Nome do lembrete"/>
          <p className="ErroNome">{erroName !== "" ? erroName : ""}</p>
        </label>
        <label>
          <span>Data</span>
          <input onChange={handleDate} type="date" name="toDoDate" placeholder ="Data do lembrete"/>
          <p className="ErroNome">{erroDate !== "" ? erroDate : ""}</p>
        </label>
        <button>Enviar</button>
      </form>
      {renderComponente && <ToDoList listToDO={listToDO}/>}
    </div>
  )
}

export default ToDoCreater