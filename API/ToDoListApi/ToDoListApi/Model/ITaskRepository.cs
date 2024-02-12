namespace ToDoListApi.Model
{
    public interface ITaskRepository
    {
        void Add(TaskModel task);

        List<TaskModel> GetAll();

        void Delete(int id);
    }
}
