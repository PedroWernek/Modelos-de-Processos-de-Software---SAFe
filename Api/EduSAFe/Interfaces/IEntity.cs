using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EduSAFe.Interfaces;

// apesar de, dentro do trabalho de quarta, eu ter recomendado a utilização de uma ientity para classes genéricas, não entendi o porquê dela ser utilizada aqui
public interface IEntity
{
    public int Id { get; set; }
}