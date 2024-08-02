import { Link } from "react-router-dom";
import { ToursDestacados } from "./Childs_homePage/ToursDestacados";
import { PaquetesPop } from "./Childs_homePage/PaquetesPop";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";


// gsap.registerPlugin(useGSAP);

export const HomePage = () => {
	const reF = useRef()

	const Header = gsap.timeline()
	const Nav_elements = gsap.timeline()

	useEffect(()=> {
		Header.from(".elemento", {
			opacity: 0,
			translateY: "-3rem",
			duration: 2
		})
		Nav_elements.from(".nav_elements", {
			opacity: 0,
			translatex: "3rem",
			duration: 3
		})

	},[])




	// imagen

	// const ImagenHombreMochila = "https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
	const hombre_viajero = "https://s3-alpha-sig.figma.com/img/6a77/72a4/2b2a46d6416136fe3f7b5e2aa0439d9f?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qrxto2SjyspQCxgeAL-dJVnRdRp5I-90gVDfPQG7YqVAUBl5D8DGHOdnfr6JoYhMpebzpYkn52EtQ8hciysrv2FZfG3~-6eOstmQr0SsdvJJjYIEaHYeIlun89P1-HbRgBCESPU5O4e4kFUY29CqterFm2~B0NkG~-RadYoqzMyJMXNruFr2FVnd2XWz0kAnW7Yo9aQVegWcDlzt-B72tSTVQNld8bhcv6kMmYNfyTv~CQlXgffrlXxD0MakAD2UWgBC1oJSEyFxJ64JAMoG7DsJ8S6VTMFMLsevX8jd8r~FIUOP8BT2JA3z5HYSY8RhLZvHUfx8vCFnJpm3KL9IWA__"

	return (
		<>
			<nav className="bg-[#fff] p-4 nav_elements">
				<div className=" mx-auto flex justify-between items-center  max-w-[1200px]">
					<div className="text-black text-[1.5rem] font-bold ">
						MiSitio
					</div>
					<div className="space-x-4">
						<a href="#" className="text-black hover:text-[#6347F9]  font-bold  px-3 py-2 rounded-md text-sm ">Inicio</a>
						<a href="#" className="text-black hover:text-[#6347F9]  font-bold  px-3 py-2 rounded-md text-sm ">Servicios</a>
						<a href="#" className="text-black hover:text-[#6347F9]  font-bold  px-3 py-2 rounded-md text-sm ">Acerca de</a>
						<a href="#" className="text-black hover:text-[#6347F9]  font-bold  px-3 py-2 rounded-md text-sm ">Contacto</a>
					</div>
					<div className="space-x-4">

						<Link
							to={'/auth/login'}
							className='py-2 px-4 text-[#6347F9] transition-all ease-in-out .5s  
							border border-[#6347F9] hover:bg-[#6347F9] hover:text-white font-medium rounded-md'>
							Login
						</Link>

						<Link
							to={'/auth/register'}
							className='py-2 px-4 text-[#6347F9] transition-all ease-in-out .5s 
							border border-[#6347F9] hover:bg-[#6347F9] hover:text-white  font-medium rounded-md'>
							Register
						</Link>
					</div>
				</div>
			</nav>
			<main className=" flex   ">
				<section className=" grid grid-cols-2 grid-rows-1 justify-between 
				gap-[11rem] items-center mx-auto max-w-[1200px] h-[74vh] px-[1rem]">

					<div className="elemento flex flex-col text-left  items-center w-full max-w-[405px] gap-3">
						<h2 className="text-[2rem] font-bold">¡Descubre el Mundo con Nosotros!</h2>
						<p className="opacity-[53%]">Transformamos tus sueños de viaje en realidad. Ofrecemos experiencias personalizadas y únicas para cada tipo de viajero. Desde aventuras exóticas hasta escapadas relajantes, nuestro equipo de expertos se encarga de todos los detalles para que solo te preocupes por disfrutar. Explora, sueña y viaja con nosotros.</p>
						<div className=" flex justify-start w-full">

							<button className="p-3 text-white rounded-lg bg-[#6347F9] 
							transition-all ease-in-out hover:scale-110 .5s hover:bg-[#725dea]">
								Comienza Ahora
							</button>
						</div>
					</div>
					<div className="flex items-center">

						<img ref={reF} className="elemento h-auto w-[50rem]  " src={hombre_viajero} alt="" />
					</div>
				</section>
			</main>
			<ToursDestacados/>
			<PaquetesPop/>
		</>
	);
};
