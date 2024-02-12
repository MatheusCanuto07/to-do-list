using Microsoft.AspNetCore.Mvc;
using ToDoListApi.Model;

namespace ToDoListApi.Controllers
{
    [ApiController]
    [Route("api/task")]
    public class TaskController(ITaskRepository tasksRepository) : ControllerBase
    {
        private readonly ITaskRepository _tasksRepository = tasksRepository;

        [HttpPost]
        public ActionResult Add(TaskModel task)
        {
            try
            {
                _tasksRepository.Add(task);
                return Ok();
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

        [HttpDelete("{Id}")]
        public ActionResult Delete(int Id)
        {
            try
            {
                _tasksRepository.Delete(Id);
                return Ok();
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

        [HttpGet]
        public ActionResult<List<TaskModel>> GetAll()
        {
            try
            {
                List<TaskModel> tasks = _tasksRepository.GetAll();
                return Ok(tasks);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }
    }
}
