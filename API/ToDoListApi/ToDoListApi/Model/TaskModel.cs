using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ToDoListApi.Model
{
    [Table("Tasks")]
    public class TaskModel(int? Id, string Nome, DateTime DataCriacao)
    {
        [Key]
        public int? Id { get; set; } = Id;
        public required string Nome { get; set; } = Nome;
        public required DateTime DataCriacao { get; set; } = DataCriacao;
    }
}
