import { Link } from "react-router-dom";

export const HomePage = () => {
	return (
		<div className='flex items-center justify-center gap-4 flex-col w-full h-screen'>
			<h1 className='text-6xl font-bold'>Home Page</h1>

			<div className='flex items-center gap-4'>
				<Link
					to={'/auth/login'}
					className='py-2 px-4 bg-black text-white font-medium rounded-md'>
					Ir al Login
				</Link>

				<Link
					to={'/auth/register'}
					className='py-2 px-4 bg-black text-white font-medium rounded-md'>
					Ir al Register	
				</Link>
			</div>
		</div>
	);
};
