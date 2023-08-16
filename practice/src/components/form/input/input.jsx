import "./input.css";

function Input({ placeholder, labelName }) {
	return (
		<div className="input__contend">
			<label className="label__input">{labelName}</label>
			<input className="input" type="text" placeholder={placeholder}/>
		</div>
	);
}

export default Input;
