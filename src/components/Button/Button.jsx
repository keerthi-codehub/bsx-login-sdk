
import React, { forwardRef} from 'react';
// import { DotSpinner } from '../DotSpinner';
import styles from './Button.module.css';

// interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
// 	className?: string;
// 	label?: ReactNode;
// 	appearance?: 'primary' | 'secondary';
// 	size?: 'small' | 'large';
// 	tag?: ElementType;
// 	type?: 'submit' | 'button' | 'reset';
// 	disabled?: boolean;
// 	loading?: boolean;
// 	visible?: boolean;
// 	outbound?: boolean;
// 	onClick?: () => void;
// 	children?: ReactNode;
// }

export const Button = forwardRef(
	(props, ref) => {
		const {
			className,
			label,
			tag: Tag = 'button',
			loading = false,
			size = 'large',
			appearance = 'primary',
			onClick,
			outbound,
			visible,
			children,
			...attributes
		} = props;

		const buttonClasses = [
			styles.button,
			styles[appearance],
			styles[size],
			className,
		].join(' ');

		return (
			<Tag
				ref={ref}
				className={buttonClasses}
				{...attributes}
				onClick={onClick}>
				{!loading && children}
				{!loading && label}
				{/* {loading && <DotSpinner />} */}
			</Tag>
		);
	}
);

Button.displayName = 'Button';
