import FRAME14 from "../../../public/Frame 14.png";

export const LoginPage = () => {
	return (
		<div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#EFEFEF' }}>
			<div className="container mx-auto my-8 rounded-lg shadow-md w-full min-h-screen">
				<div className="grid grid-cols-1 md:grid-cols-3 w-full h-full">
					<div className="md:col-span-1 flex-col justify-center p-8 bg-white min-h-screen">
						<div className="bg-white p-8 rounded w-full max-w-md">
							<h2 className="text-3xl fw-bold text-center font-bold mb-6">Inicia sesión</h2>
							<button className="w-full py-2 px-4 rounded-lg mb-6 border-solid border-2 border-neutral-950 hover:-translate-y-1 hover:scale-110 duration-300">
								Iniciar sesión con tu cuenta
							</button>
							<form className="space-y-4">
								<div>
									<label className="block text-neutral-950 font-bold mb-2">Correo</label>
									<input
										type="email"
										className="w-full px-4 py-2 border rounded-lg border-2 border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
										placeholder="example@gmail.com"
									/>
								</div>
								<div>
									<label className="block text-neutral-950 font-bold mb-2">Contraseña</label>
									<input
										type="password"
										className="w-full px-4 py-2 border rounded-lg border-2 border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
										placeholder="Contraseña"
									/>
								</div>
								<div className="text-left">
									<a href="#" className="text-blue-500 hover:underline">¿Olvidaste tu contraseña?</a>
								</div>
								<button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg border-2 hover:-translate-y-1 hover:scale-110 duration-300">
									Ingresar
								</button>
							</form>
							<div className="flex items-center my-4">
								<div className="flex-grow border-t border-gray-300"></div>
								<span className="mx-4 text-gray-500">O</span>
								<div className="flex-grow border-t border-gray-300"></div>
							</div>
							<button className="w-full bg-gray-200 text-neutral-950 text-left font-bold py-3 px-4 rounded-lg mb-2 flex items-center hover:-translate-y-1 hover:scale-110 duration-300">
								<img width="30" height="30" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" className="mr-2" />
								Google
							</button>
							<button className="w-full bg-gray-200 text-neutral-950 text-left font-bold py-3 px-4 rounded-lg mb-4 flex items-center hover:-translate-y-1 hover:scale-110 duration-300">
								<img width="30" height="30" src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os" className="mr-2" />
								Apple
							</button>
							<div className="text-left">
								<p className="text-neutral-950">
									¿No tienes cuenta? <a href="#" className="text-blue-500 hover:underline">Regístrate</a>
								</p>
								<p className="text-neutral-950">
									¿Olvidaste tu contraseña? <a href="#" className="text-blue-500 hover:underline">Recupérala aquí</a>
								</p>
							</div>
						</div>
					</div>
					<div className="md:col-span-2 flex items-center justify-center">
						<img src={FRAME14} alt="Frame 14" className="w-full h-full object-cover" />
					</div>
				</div>
			</div>
		</div>
	);
};
