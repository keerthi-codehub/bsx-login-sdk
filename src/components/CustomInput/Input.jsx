import React, { ChangeEvent, useState } from 'react';
// import IconButton from '@mui/material/IconButton';
// import { Clear } from '@styled-icons/material-outlined';
// import InputAdornment from '@mui/material/InputAdornment';
import './input.css'; // Import the CSS file
// import VisibilityOffOutlinedIcon from '../../icons/icons-js-format/VisibilityOffOutlinedIcon';
// import VisibilityOutlinedIcon from '../../icons/icons-js-format/VisibilityOutlinedIcon';

export const CustomInput = React.forwardRef(
	(props, ref) => {
		const {
			type = 'text',
			placeholder = '',
			text = '',
			className = '',
			errors = false,
			errorMsg = '',
			label = '',
			register,
			filled = '',
			isRequired = false,
			editable = false,
			leftIcon,
			rightIcon,
			isClearable = false,
			variant = '',
			maxedWidth,
			endAdornment,
			...attributes
		} = props;

		const [showPassword, setShowPassword] = useState(false);

		const handleClickShowPassword = () => setShowPassword((show) => !show);

		const handleMouseDownPassword = (event) => {
			event.preventDefault();
		};

		const handleOnChange = (event) => {
			const { onChange } = props;
			if (onChange) {
				onChange(event);
			}
		};

		const clearValue = () => {
			const { onChange } = props;
			if (onChange) {
				onChange({ target: { value: '' } });
			}
		};

		const dataTestId = attributes['data-testid'];
		delete attributes['data-testid'];

		return (
			<div
				className='input-group-wrapper' styles={{width: maxedWidth? '100%': ''}}>
				<div
					className={`custom-input-container ${
						errors ? 'errors' : ''
					} ${editable ? 'editable' : ''}`}
					{...attributes}>
					<input
						autoComplete="off"
						data-testid={dataTestId}
						className={`StyledInput ${editable ? 'editable' : ''} ${
							errors ? 'errors' : ''
						} ${className}`}
						type={type === 'password' && showPassword ? 'text' : type}
						placeholder={placeholder}
						{...attributes}
						ref={ref}
						onChange={handleOnChange}
						required={isRequired}
						aria-label={label}
						id={`text-field-${label}`}
					/>
					{!editable && (
						<label
							className={`styled-label ${leftIcon ? 'leftIcon' : ''}`}
							htmlFor={`text-field-${label}`}>
							{label}
						</label>
					)}
				</div>

				<div className="styled-error-container">
					{isRequired && (
						<span className="required-text" role="alert">
							* Required
						</span>
					)}
					{errorMsg && (
						<span
							className="error-text"
							role="alert">
							{errorMsg.toString()}
						</span>
					)}
				</div>
			</div>
		);
	}
);

export default CustomInput;
