import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import User from '../core/User';
import { FormEvent, useEffect, useState } from 'react';
import { getUsers, addUser, deleteUser, updateUser } from '../backend/firebase';

export default function Home() {
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [user, setUser] = useState<User>(User.empty());
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		getAll();
	}, []);

	function getAll() {
		getUsers().then(res => setUsers(res));
	}

	const userSelected = (nowUser: User) => {
		setUser(nowUser);
		setIsEditing(true);
	};

	const userDeleted = (nowUser: User) => {
		deleteUser(nowUser.id);
	};

	const handleSubmit = (type: string, nowUser?: User, e?: FormEvent) => {
		e?.preventDefault();
		setIsEditing(false);

		if (type === 'submit') {
			if (nowUser.id) {
				updateUser(nowUser.name, nowUser.age, nowUser.id);
			} else {
				addUser(nowUser.name, nowUser.age);
			}

			getAll();
		}
	};

	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
			<Layout title="Next-crud">
				{isEditing ? (
					<Form handleSubmit={handleSubmit} user={user} />
				) : (
					<>
						<div className="mb-4 flex justify-end">
							<Button
								button
								onClick={() => {
									setIsEditing(true);
									setUser(User.empty());
								}}
							>
								New user
							</Button>
						</div>
						<Table
							users={users}
							userSelected={userSelected}
							userDeleted={userDeleted}
						></Table>
					</>
				)}
			</Layout>
		</div>
	);
}
