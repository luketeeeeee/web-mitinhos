import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

import { Month3Letter } from './pages/Month3Letter';
import { Login } from './pages/Login';
import { Home } from './pages/Home';

import { useUsers } from './hooks/users.hook';

function App() {
	const authToken = Cookies.get('token');

	const { loggedUser, validateAuthToken } = useUsers();

	useEffect(() => {
		validateAuthToken({
			token: authToken,
		});
	}, []);

	const authenticatedUserRoutes = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/feliz-90-dias',
			element: <Month3Letter />,
		},
	]);

	const noAuthUserRoutes = createBrowserRouter([
		{
			path: '/',
			element: <Login />,
		},
	]);

	// const routes = createBrowserRouter([
	// 	{
	// 		path: '/',
	// 		element: <Home />,
	// 	},
	// 	{
	// 		path: '/feliz-90-dias',
	// 		element: <Month3Letter />,
	// 	},
	// ]);

	return (
		<>
			{loggedUser.token ? (
				<RouterProvider router={authenticatedUserRoutes} />
			) : (
				<RouterProvider router={noAuthUserRoutes} />
			)}
		</>
	);
}

export default App;
