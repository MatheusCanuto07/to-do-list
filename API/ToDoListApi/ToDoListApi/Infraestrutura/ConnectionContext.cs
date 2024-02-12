using Microsoft.EntityFrameworkCore;
using ToDoListApi.Model;

namespace ToDoListApi.Infraestrutura
{
    public class ConnectionContext : DbContext
    {
        public DbSet<TaskModel> Tasks { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string stringConexao = "Server=localhost;Port=3306;Database=db_todolist;User Id=root;Password=DtiDigital@2024;";

            optionsBuilder.UseMySql(connectionString: stringConexao, serverVersion: ServerVersion.AutoDetect(stringConexao));
        } 
    }
}
