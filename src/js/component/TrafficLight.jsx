import React, { useState } from "react";

import "../../styles/index.css";

//include images into your bundle

//create your first component

const TrafficLight = () => {
	const [apagadaRoja, setApagadaRoja] = useState(null);
	const [apagadaAmarilla, setApagadaAmarilla] = useState(null);
	const [apagadaVerde, setApagadaVerde] = useState(null);
	return (
		<div>
			<div className="barra" />
			<div className="semaforo">
				<div
					className={"luz roja " + apagadaRoja}
					onClick={() => {
						setApagadaRoja("encendida");
						setApagadaAmarilla(null);
						setApagadaVerde(null);
					}}
				/>
				<div
					className={"luz amarilla " + apagadaAmarilla}
					onClick={() => {
						setApagadaAmarilla("encendida");
						setApagadaRoja(null);
						setApagadaVerde(null);
					}}
				/>
				<div
					className={"luz verde " + apagadaVerde}
					onClick={() => {
						setApagadaVerde("encendida");
						setApagadaRoja(null);
						setApagadaAmarilla(null);
					}}
				/>
			</div>
		</div>
	);
};

export default TrafficLight;
