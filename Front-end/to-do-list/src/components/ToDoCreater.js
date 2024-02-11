const ToDoCreater = () => {
  return (
    <div>
      <form>
        <h1>Novo lembrete</h1>
        <label>
          <span>Nome</span>
          <input type="text" name="toDoName" placeholder ="Nome do lembrete"/>
        </label>
        <label>
          <span>Data</span>
          <input type="date" name="toDoDate" placeholder ="Data do lembrete"/>
        </label>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default ToDoCreater