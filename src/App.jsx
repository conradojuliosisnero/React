import React from "react";
import Header from "./components/head/header";
import Form from "./components/form/form";
import Section_Card from "./components/section/section_card";

function App() {
	const equipos = [
		{ tittle: "UI Designer", color: "#2eaddb" },
		{ tittle: "UX Designer", color: "#22e2df" },
		{ tittle: "Projet Manajer", color: "#22e2b2" },
		{ tittle: "Developer Full Stack", color: "#80ed8e" },
		{ tittle: "Fronted Developer", color: "#bfed80" },
		{ tittle: "Backend Developer", color: "#edd580" },
	];

	return (
		<React.StrictMode>
			<Header />
			<Form />
			{/* imprimimos cada section con su respectivo color  */}
			{equipos.map((equipo) => <Section_Card data={equipo} key={equipo.tittle} /> )}
		</React.StrictMode>
	);
}

export default App;
