import React from "react";
import "./Task.css";

function Task({ value, key, remove }) {
  return (
		<div className="task">
			{value}
			{key}
			<button onClick={remove}>x</button>
		</div>
  );
}

export default Task;
