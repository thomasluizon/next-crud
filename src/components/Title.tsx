interface TitleProps {
	children: string;
}

const Title = (props: TitleProps) => {
	return (
		<div className="flex flex-col justify-center">
			<h2 className="p-4 text-2xl">{props.children}</h2>
			<hr className="border-2 border-purple-500" />
		</div>
	);
};

export default Title;
