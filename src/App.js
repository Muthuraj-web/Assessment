import { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import DisplayAll from './components/DisplayAll';
import DisplayByID from './components/DisplayByID';
import DisplayShortlisted from './components/DisplayShorlisted';
import DisplayRejected from './components/DisplayRejected';
import './styles.css';

const URL =
	'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json';

async function getCandidates() {
	const candidates = await (await axios.get(URL)).data;
	candidates.forEach((element) => {
		element.shortisted = false;
		element.rejected = false;
	});
	return candidates;
}

export default function App() {
	const [candidates, setCandidates] = useState([]);
	const [filterName, setFilterName] = useState('');

	const shortlist = (id) => {
		let newCandidates = [...candidates];
		newCandidates.forEach((each) => {
			if (each.id === id) {
				each.shortlisted = true;
				each.rejected = false;
			}
		});
		setCandidates(newCandidates);
		setFilterName('');
	};

	const reject = (id) => {
		let newCandidates = [...candidates];
		newCandidates.forEach((each) => {
			if (each.id === id) {
				each.shortlisted = false;
				each.rejected = true;
			}
		});
		setCandidates(newCandidates);
		setFilterName('');
	};

	useEffect(() => {
		getCandidates()
			.then((candidates) => {
				setCandidates([...candidates]);
				setFilterName('');
			})
			.catch((error) => setError(error.message));
	}, []);

	const filteredCandidates = useMemo(() => {
		const pattern = new RegExp(filterName, 'i');
		return candidates.filter(({ name }) => Boolean(name.match(pattern)));
	}, [filterName, candidates]);

	return (
		<Routes>
			<Route
				path="/shortlisted"
				element={
					<DisplayShortlisted
						candidates={filteredCandidates}
						handleSubmit={setFilterName}
					/>
				}
			/>
			<Route
				path="/rejected"
				element={
					<DisplayRejected
						candidates={filteredCandidates}
						handleSubmit={setFilterName}
					/>
				}
			/>
			<Route
				path="/:id"
				element={
					<DisplayByID
						candidates={filteredCandidates}
						shortlist={shortlist}
						reject={reject}
					/>
				}
			/>
			<Route
				path="/"
				element={
					<DisplayAll
						candidates={filteredCandidates}
						handleSubmit={setFilterName}
					/>
				}
			/>
		</Routes>
	);
}
