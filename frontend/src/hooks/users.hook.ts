import { create } from 'zustand';
// import Cookies from 'js-cookie';
import { UserType } from '../types';

type useUsersProps = {
	loggedUser: UserType;
	validateAuthToken: ({ token }: { token: string | undefined }) => void;
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
		await fetch(`${import.meta.env.VITE_API_URL}/users/validate-jwt`, {
			method: 'POST',
			headers: {
				// Authorization: `${import.meta.env.VITE_API_KEY}`
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(token),
		}).then((response) => {
			if (!response.ok) {
				return response.json().then((res) => {
					set({ loggedUser: { username: '', token: '' } });
					console.log(res.message);
				});
			}
		});
	},
	//
	login: async (userData) => {
		await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		}).then((response) => {
			if (!response.ok) {
				return response.json().then((res) => {
					console.log(res);
				});
			}

			return response.json().then((res) => {
				console.log(res);
			});
		});
	},
	//
	logout: () => {},
}));
