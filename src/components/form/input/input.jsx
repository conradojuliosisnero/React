import "./input.css";

function Input({labelName }) {
	return (
		<div className="input__contend">
			<label className="label__input">{labelName}</label>
			<input className="input" type="text"/>
		</div>
	);
}

export default Input;
