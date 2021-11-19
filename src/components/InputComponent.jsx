import { useState } from 'react';

export default function InputComponent({ handleSubmit }) {
	const [value, setValue] = useState('');

	const handleChange = (e) => setValue(e.currentTarget.value);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		handleSubmit(value);
	};

	return (
		<form onSubmit={onSubmitHandler} style={{ display: 'inline' }}>
			<input
				value={value}
				onChange={(e) => {
					handleChange(e);
				}}
			/>
			<button type="submit">Submit</button>
		</form>
	);
}
