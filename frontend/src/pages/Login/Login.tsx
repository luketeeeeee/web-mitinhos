import ricosLogin from '../../assets/ricos-login.png';
import tontonLogin from '../../assets/tonton-login.png';

export const Login = () => {
	return (
		<div className="flex h-full w-full bg-purple-100 px-8 py-16 font-poppins">
			<header className="flex h-40 w-full flex-col">
				<div className="flex w-full justify-between">
					<img src={ricosLogin} alt="Millena" className="object-none" />
					<img src={tontonLogin} alt="Lucas" className="object-none" />
				</div>

				<h1 className="mt-[-40px] w-56 self-center text-center text-5xl font-extrabold text-mainFont">
					web mitinhos
				</h1>
			</header>
		</div>
	);
};
