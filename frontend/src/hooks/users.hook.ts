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
			await fetch('', {
        method: 'POST',
        headers: {
          // Authorization: `${import.meta.env.VITE_API_KEY}`
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      }).then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            console.log(text)
            throw new Error(text)
          })
        }

        return response.text().then(text => {
          
        })
      })
		} catch (error) {}
	},
	//
	logout: () => {},
}));
