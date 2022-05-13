import { FormEvent, useState } from 'react';
import User from '../core/User';
import Button from './Button';

interface FormProps {
	user: User;
	handleSubmit?: (type: string, user?: User, event?: FormEvent) => void;
}

export default function Form(props: FormProps) {
	const [name, setName] = useState(props.user?.name ?? '');
	const [age, setAge] = useState(props.user?.age ?? 0);
	const id = props.user?.id;

	return (
		<form
			onSubmit={e => props.handleSubmit('submit', new User(name, age, id), e)}
			className="flex flex-col gap-4 justify-between"
		>
			{id ? (
				<div className="flex flex-col gap-4">
					<label htmlFor="id">Id</label>
					<input
						type="text"
						id="id"
						className="border border-purple-500 rounded-lg focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white"
						value={id}
						readOnly
					/>
				</div>
			) : (
				false
			)}
			<div className="flex flex-col gap-4">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					className="border border-purple-500 rounded-lg focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-4">
				<label htmlFor="age">Age</label>
				<input
					type="number"
					id="age"
					value={age}
					onChange={e => setAge(+e.target.value)}
					className="border border-purple-500 rounded-lg focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white"
				/>
			</div>
			<div className="flex mt-4 justify-between">
				<Button button={false}>{id ? 'Change' : 'Save'}</Button>
				<Button button onClick={() => props.handleSubmit('cancel')}>
					Cancelar
				</Button>
			</div>
		</form>
	);
}
