import React from "react";
import Header from "./components/Header";
import TaskContainer from "./components/taskContainer";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Cabeçalho */}
      <Header />

      {/* Seção de Tarefas */}
      <main style={{ marginTop: "20px" }}>
        <TaskContainer />
      </main>
    </div>
  );
}

export default App;
