import React, { useEffect, useState } from "react";
import { CustomInput } from "../CustomInput";
import "./floatingInput.module.css";

const FloatingInput = ({
  errors = false,
  label = "",
  onChange = (event) => event,
  register,
  isRequired = false,
  leftIcon,
  rightIcon,
  isClearable = false,
  variant = "",
  value = "",
  width,
  ...restProps
}) => {
  const [val, setVal] = useState(value);

  const handleChange = (event) => {
    setVal(event.target.value);
    onChange(event);
  };

  useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    // <div class="input-group">
	// 				<input
	// 					autoComplete="off"
	// 					// className={`StyledInput ${editable ? 'editable' : ''} ${
	// 					// 	errors ? 'errors' : ''
	// 					// } ${className}`}
	// 					// type={type === 'password' && showPassword ? 'text' : type}
	// 					type={type ?? 'text'}
	// 					placeholder={placeholder}
	// 					{...restProps}
	// 					ref={ref}
	// 					onChange={handleOnChange}
	// 					required={isRequired}
	// 					aria-label={label}
	// 					id={`text-field-${label}`}
	// 				/>
	// 				{!editable && (
	// 					<label
	// 						// className={`styled-label ${leftIcon ? 'leftIcon' : ''}`}
	// 						htmlFor={`text-field-${label}`}>
	// 						{label}
	// 					</label>
	// 				)}
    //   {/* <input type="text" required />
    //   <span class="highlight"></span>
    //   <span class="bar"></span>
    //   <label>Username</label> */}
    // </div>
    <div className='floating-input-container' style={{ width }}>
    	<CustomInput
    		leftIcon={leftIcon}
    		rightIcon={rightIcon}
    		isClearable={isClearable}
    		errors={errors}
    		isRequired={isRequired}
    		filled={!!val}
    		variant={variant}
    		register={register}
    		onChange={handleChange}
    		label={label}
    		value={val}
    		text={val}
    		{...restProps}
    	/>
 </div>
  );
};

export default FloatingInput;
