import CardTemplate from './CardTemplate';
import { Link } from 'react-router-dom';

export default function DisplayComponent({ candidates }) {
	return (
		<div className="row">
			{candidates.map((each) => (
				<Link className="row-item" key={each.id} to={`/${each.id}`}>
					<CardTemplate {...each} />
				</Link>
			))}
		</div>
	);
}
