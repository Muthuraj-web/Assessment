export default function CardTemplate({ id, name, Image }) {
	return (
		<div
			style={{
				border: '2px solid black',
				borderRadius: '2%',
				margin: '0px 0px 25px 0px',
				backgroundColor: 'grey'
			}}
		>
			<img className="card-img" alt={name} src={Image}></img>
			<h5 className="card-name">{name}</h5>
		</div>
	);
}
