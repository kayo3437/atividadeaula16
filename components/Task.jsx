import React from "react";

function Task({ title, description }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "5px", padding: "10px", marginBottom: "10px" }}>
      <h3 style={{ margin: "0 0 5px 0" }}>{title}</h3>
      <p style={{ margin: "0", color: "#555" }}>{description}</p>
    </div>
  );
}

export default Task;
