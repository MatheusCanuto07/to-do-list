function ToDoList({listToDO}) {
  return (
    <div>
      {listToDO.map((task) => (
          <p key={task.id}>{task.nome + " " + task.date}</p>
      ))}
    </div>
  )
}

export default ToDoList