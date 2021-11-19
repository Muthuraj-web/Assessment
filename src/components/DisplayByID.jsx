import { Link, useParams } from 'react-router-dom';
import CardTemplate from './CardTemplate';

export default function DisplayByID({ candidates, shortlist, reject }) {
	const { id } = useParams();
	const candidate = candidates.find((each) => each.id === id);

	return (
		<>
			<div className="row">
				<CardTemplate {...candidate} />
			</div>
			<div className="row" style={{ justifyContent: 'center' }}>
				<Link
					to="/"
					onClick={() => {
						shortlist(id);
					}}
				>
					<button
						style={{ backgroundColor: 'green' }}
						lassName="row-item-button"
					>
						shortlist
					</button>
				</Link>
				<Link
					to="/"
					onClick={() => {
						reject(id);
					}}
				>
					<button
						style={{ backgroundColor: 'tomato' }}
						lassName="row-item-button"
					>
						Reject
					</button>
				</Link>
			</div>
		</>
	);
}
