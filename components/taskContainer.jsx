import React from "react";
import Task from "./Task";

function TaskContainer() {
  // Lista de tarefas fictícias
  const tarefas = [
    { title: "Estudar para um concurso", description: "Revisar as provas anteriores" },
    { title: "Fazer uma documentação", description: "Descrever o processo da execução do projeto" },
    { title: "Criar projeto", description: "Criar um projeto de acordo com o que o professor pediu" },
  ];

  return (
    <section style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}>
      <h2>Lista de Tarefas</h2>
      {tarefas.length === 0 ? (
        <p>Ainda não há tarefas. Adicione uma para começar!</p>
      ) : (
        <div>
          {/* Usando o componente Task para renderizar cada tarefa */}
          {tarefas.map((tarefa, index) => (
            <Task key={index} title={tarefa.title} description={tarefa.description} />
          ))}
        </div>
      )}
    </section>
  );
}

export default TaskContainer;

