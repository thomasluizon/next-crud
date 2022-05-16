import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	doc,
	deleteDoc,
	updateDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import User from '../core/User';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	storageBucket: 'next-crud-3c065.appspot.com',
	messagingSenderId: '935264711367',
	appId: '1:935264711367:web:be8a93905e805ddecac4e2',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const userColletionRef = collection(db, 'users');

export const getUsers = async () => {
	const data = await getDocs(userColletionRef);

	return data.docs.map(doc => {
		const properties = doc.data();
		return new User(properties.name, properties.age, doc.id);
	});
};

export const addUser = async (name: string, age: number) => {
	const user = await addDoc(userColletionRef, { name, age });
	console.log(user);
};

export const deleteUser = async (id: string) => {
	const userDoc = doc(db, 'users', id);
	await deleteDoc(userDoc);
};

export const updateUser = async (name: string, age: number, id: string) => {
	const userDoc = doc(db, 'users', id);
	await updateDoc(userDoc, {
		name,
		age,
	});
};
