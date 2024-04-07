import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

import { Month3Letter } from './pages/Month3Letter';
import { Login } from './pages/Login';
import { Home } from './pages/Home';

import { useUsers } from './hooks/users.hook';

function App() {
	const authToken = Cookies.get('token');

	const { loggedUser, validateAuthToken } = useUsers();

	if (authToken) {
		validateAuthToken({
			token: authToken,
		});
	}

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

	return (
		<>
			{loggedUser && authToken ? (
				<RouterProvider router={authenticatedUserRoutes} />
			) : (
				<RouterProvider router={noAuthUserRoutes} />
			)}
		</>
	);
}

export default App;
