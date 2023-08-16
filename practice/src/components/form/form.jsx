import "./form.css";
import Input from "./input/input";
import SelectInput from "./input/selectInput";
import Button from "./button/button";
import BannerForm from "./banner";

function Form({ placeholder, labelName }) {
	const evento = (e) => {
		e.preventDefault();
	};

	return (
		<section className="section__form">
			<form className="form__contend" onSubmit={evento}>
				<div className="inputs__contend">
					<div className="form__tittle">
						<h2>Form Tittle</h2>
					</div>
					<Input labelName="Name" placeholder="Name" />
					<Input labelName="User Name" placeholder="User Name" />
					<Input labelName="Phone Number" placeholder="Phone Number" />
					<SelectInput />
					<Button />
				</div>
				<div className="bannerform">
					<BannerForm />
				</div>
			</form>
		</section>
	);
}

export default Form;
