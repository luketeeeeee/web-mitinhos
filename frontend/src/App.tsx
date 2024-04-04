import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

import { Home } from './pages/Home';
import { Month3Letter } from './pages/Month3Letter';

function App() {
	const authToken = Cookies.get('token');

	const routes = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/feliz-90-dias',
			element: <Month3Letter />,
		},
	]);

	return (
		<>
			{/* adicionar rotas de autenticação de usuário */}
			<RouterProvider router={routes} />
		</>
	);
}

export default App;
