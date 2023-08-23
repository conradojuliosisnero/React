import "./section.css";
import Card from "./card/card";

function Section_Card(props) {

	const {tittle} = props.data
	const objColor = {
		backgroundColor: props.data.color
	};

	return (
		<section className="section__card" style={objColor}>
			<div className="section__tittle">
				<h2>{tittle}</h2>
			</div>
			<div className="card__container">
				<Card/>
			</div>
		</section>
	);
}

export default Section_Card;
