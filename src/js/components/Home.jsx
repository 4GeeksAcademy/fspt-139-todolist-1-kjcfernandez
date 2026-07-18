import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [tareas, setTareas] = useState([])
	const eliminarTarea = (index) => {
		const nuevasTareas = tareas.filter((_,i) => i !== index)
		setTareas(nuevasTareas)
	}
	// const esValido = inputValue.trim().length >= 3
	// console.log(esValido);

	return (
		<div className="page">
			<h1 className="title">To do</h1>
			<div className="card">
			<input
				className="input"
				type="text"
				placeholder="Enter your action..."
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				onKeyUp={e => {
					if (e.key === "Enter" && inputValue.trim().length > 0) {
						setTareas([...tareas, inputValue])
						setInputValue("")
					}
				}} />
			<ul className="list">
				{
					tareas.map((tarea, index) => {
						return (
							<li key={index} className="item">
								<span>{tarea}</span>
								<span
								className="delete-icon"
								onClick={() => eliminarTarea(index)}>
									x
								</span>
							</li>
						)
					})
				}
			</ul>
			{
				tareas.length > 0 &&
				<div className="footer">
					{tareas.length} item{tareas.length !== 1 ? "s" :""} left
				</div>
			}
			{/* {
				!esValido &&
				<p>El texto debe ser de al menos 3 caracteres</p>
			} */}
			</div>
		</div>
	);
};

export default Home;