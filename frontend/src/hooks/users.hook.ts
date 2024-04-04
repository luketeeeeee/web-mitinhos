import { create } from 'zustand';
import Cookies from 'js-cookie';
import { UserType } from '../types';

type useUsersProps = {
	loggedUser: UserType;
	validateAuthToken: (token: string) => void;
	login: (userData: { username: string; password: string }) => void;
	logout: () => void;
};

export const useUsers = create<useUsersProps>((set) => ({
	loggedUser: {
		username: '',
		token: '',
	},
	//
	validateAuthToken: async (token) => {
		await fetch(``, {});
	},
	//
	login: async (userData) => {
		await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
			method: 'POST',
			headers: {
				// Authorization: `${import.meta.env.VITE_API_KEY}`
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		}).then((response) => {
			if (!response.ok) {
				return response.text().then((text) => {
					console.log(text);
					throw new Error(text);
				});
			}

			return response.text().then((text) => {
				console.log(text);
			});
		});
	},
	//
	logout: () => {},
}));
