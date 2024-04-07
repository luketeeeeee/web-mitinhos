import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginUserSchemaType, loginUserSchema } from './Login.helpers';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import ricosLogin from '../../assets/ricos-login.png';
import tontonLogin from '../../assets/tonton-login.png';
import { useUsers } from '@/hooks/users.hook';

export const Login = () => {
	const { login } = useUsers();

	const loginForm = useForm<LoginUserSchemaType>({
		resolver: zodResolver(loginUserSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<LoginUserSchemaType> = async (data) => {
		await login(data);
	};

	return (
		<div className="flex h-full w-full flex-col gap-32 bg-purple-100 px-8 py-16 font-poppins text-mainFont">
			<header className="flex h-40 w-full flex-col">
				<div className="flex w-full gap-24">
					<img src={ricosLogin} alt="Millena" className="object-none" />
					<img src={tontonLogin} alt="Lucas" className="object-none" />
				</div>

				<h1 className="mt-[-40px] w-56 self-center text-center text-5xl font-extrabold">
					web mitinhos
				</h1>
			</header>

			<main>
				<Form {...loginForm}>
					<form
						onSubmit={loginForm.handleSubmit(onSubmit)}
						className="flex flex-col gap-3"
					>
						<FormField
							control={loginForm.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="ml-2 text-2xl font-medium">
										nome:
									</FormLabel>
									<FormControl>
										<Input {...field} className="h-11 bg-mainForm text-lg" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={loginForm.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="ml-2 text-2xl font-medium">
										senha:
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											className="h-11 bg-mainForm text-lg"
											type="password"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button
							type="submit"
							className="mt-6 h-14 rounded-2xl bg-gradient-to-r from-purpleMillena via-millenaToLucas via-60% to-blueLucas text-2xl drop-shadow-lg"
						>
							login
						</Button>
					</form>
				</Form>
			</main>

			<footer className="flex flex-col items-center font-medium">
				<p>te amo millena</p>
				<div className="flex gap-1 [&>*:nth-child(even)]:text-blueLucas [&>*:nth-child(odd)]:text-purpleMillena">
					<p>#amor</p>
					<p>#linda</p>
					<p>#perfeita</p>
					<p>#teamo</p>
				</div>
			</footer>
		</div>
	);
};
