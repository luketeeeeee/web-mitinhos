import { create } from 'zustand';
import { UserType } from '../types';

type useUsersProps = {
	loggedUser: UserType;
	login: (userData: { username: string; password: string }) => void;
	logout: () => void;
};

export const useUsers = create<useUsersProps>((set) => ({
	loggedUser: {
		username: '',
		token: '',
	},
	//
	login: async (userData) => {
		try {
			// request
		} catch (error) {}
	},
	//
	logout: () => {},
}));
