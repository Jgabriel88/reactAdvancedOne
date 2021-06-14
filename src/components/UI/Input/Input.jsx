import { useRef } from 'react';
import classes from './Input.module.css';

const Input = (props) => {
	const inputRef = userREf();

	const activate = () => {
		inputRef.current.focus();
	};

	return (
		<div
			className={`${classes.control} ${
				props.isValid === false ? classes.invalid : ''
			}`}>
			<label htmlFor="email">{props.label} </label>
			<input
				type={props.type}
				id={props.invalid}
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur}
			/>
		</div>
	);
};

export default Input;
