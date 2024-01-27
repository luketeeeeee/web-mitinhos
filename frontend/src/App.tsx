import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Month3Letter } from './pages/Month3Letter';

function App() {
	const routes = createBrowserRouter([
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
