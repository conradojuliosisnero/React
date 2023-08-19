import "./selec.css";

function SelectInput({ options }) {
	const equipos = [
		"UI/ designer",
		"UX/ designer",
		"Projet Manajer",
		"Developer Full Stack",
		"Fronted Developer",
		"Backend Developer",
	];

	equipos.map((equipo, index) => {
		return <option></option>;
	});

	return (
		<div className="input__contend">
			<label htmlFor="" className="label__input">
				Select your Ocupation
			</label>
			<select name="" id="" className="select__input">
				{equipos.map( (equipo, index) => <option>{equipo}</option>)}
			</select>
		</div>
	);
}

export default SelectInput;
