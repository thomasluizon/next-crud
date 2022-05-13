import User from '../core/User';
import { EditIcon, TrashIcon } from './icons';

interface TableProps {
	users: User[];
	userSelected?: (users: User) => void;
	userDeleted?: (users: User) => void;
}

const Table = (props: TableProps) => {
	return (
		<table className="w-full rounded-xl overflow-hidden">
			<thead className="text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800">
				<tr>
					<th className="text-left p-4">Id</th>
					<th className="text-left p-4">Name</th>
					<th className="text-left p-4">Age</th>
					<th className="p-4">Actions</th>
				</tr>
			</thead>
			<tbody>
				{props.users?.map((user, index) => {
					return (
						<tr
							key={user.id}
							className={index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
						>
							<td className="text-left p-4">{user.id}</td>
							<td className="text-left p-4">{user.name}</td>
							<td className="text-left p-4">{user.age}</td>
							<td className="p-4 flex justify-center gap-4">
								{props.userSelected ? (
									<button
										onClick={() => props.userSelected(user)}
										className="flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2"
									>
										{EditIcon}
									</button>
								) : (
									''
								)}

								{props.userDeleted ? (
									<button
										onClick={() => props.userDeleted(user)}
										className="flex justify-center items-center text-red-500 rounded-full hover:bg-purple-50 p-2"
									>
										{TrashIcon}
									</button>
								) : (
									''
								)}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
