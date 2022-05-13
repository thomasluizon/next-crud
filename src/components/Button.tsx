interface ButtonProps {
	children: any;
	onClick?: () => void;
	button: boolean;
}

const Button = (props: ButtonProps) => {
	return (
		<button
			type={props.button ? 'button' : 'submit'}
			onClick={props.onClick}
			className="bg-gradient-to-r from-blue-400 to-blue-700 text-white px-4 py-2 rounded-md"
		>
			{props.children}
		</button>
	);
};

export default Button;
