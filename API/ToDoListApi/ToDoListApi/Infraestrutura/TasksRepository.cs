using ToDoListApi.Model;

namespace ToDoListApi.Infraestrutura
{
    public class TasksRepository : ITaskRepository
    {
        private readonly ConnectionContext _connectionContext = new();

        public void Add(TaskModel task)
        {
            _connectionContext.Add(task);
            _connectionContext.SaveChanges();
        }

        public void Delete(int id)
        {
            TaskModel task = Get(id);

            _connectionContext.Remove(task);
            _connectionContext.SaveChanges();
        }

        public List<TaskModel> GetAll()
        {
            return _connectionContext.Tasks.OrderByDescending(task => task.DataCriacao).ToList();
        }

        public TaskModel Get(int id)
        {
            return _connectionContext.Tasks.Where(task => task.Id == id).FirstOrDefault()
                ?? throw new Exception("Não existe task para o ID: " + id);
        }
    }
}
