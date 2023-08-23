function Card({ tittle}) {
	return (
		<div className="card">
			<div className="card__tittle">
				<h3 className="tittle">{tittle}</h3>
			</div>
			<div className="img__card">
				<img className="img" src="" alt="" />
			</div>
		</div>
	);
}

export default Card;
