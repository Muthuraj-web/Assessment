import DisplayAll from './DisplayAll';

export default function DisplayShortlisted({ candidates, handleSubmit }) {
	candidates = candidates.filter((each) => each.rejected);
	return <DisplayAll candidates={candidates} handleSubmit={handleSubmit} />;
}
