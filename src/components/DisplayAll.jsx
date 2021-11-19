import DisplayComponent from './DisplayComponent';
import '../styles.css';
import InputComponent from './InputComponent';
import { Link } from 'react-router-dom';

export default function DisplayAll(props) {
	return (
		<>
			<div>
				<InputComponent handleSubmit={props.handleSubmit} />
				<Link to="/shortlisted">
					<button>Shortlisted</button>
				</Link>
				<Link to="/rejected">
					<button>Rejected</button>
				</Link>
			</div>
			<div>
				<DisplayComponent candidates={props.candidates} />
			</div>
		</>
	);
}
