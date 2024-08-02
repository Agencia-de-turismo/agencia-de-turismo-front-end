import gsap from 'gsap';
import React, { useEffect } from 'react'
import { FaStar } from "react-icons/fa";
export const PaquetesPop = () => {
    let imagen_por_defecto = "https://via.placeholder.com/300"
    let imagen_piscina = "https://s3-alpha-sig.figma.com/img/ea88/1ccb/8c6fb689801b9f2ea019a97d11115e3b?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sk0QSE3iBIqXquTeDaIZ8pglBX97vLZ1O5ALI46~pde5sloMUFAwxxHcc1a0PPSLmGqEf9EmEVQg4BZUzRMR8bqAcQLZIsOPLP7zip0iCj4DMBirjnR8aNFatrPota1TSTvh6KwbS-XNbeZcH~AS3qE37STu3zVqnyVqlOBSYXuItB3Jrqtdlpn8A7AOazAjQ6A2n~PbAH7tFfj-XQfLkLm8ObkEL3HsOPHGv7-v9g6Pe4hse1SD8DOoSy82-eVhIPjfeAa~twv0AGiTK1qtPLxSXmjjh81e7PonOS2D~yGecxWJ-SIjsgAhphkBBSmTZfHvDlOd1a-84aLV29~EDw__"

    const El = gsap.timeline()


    useEffect(()=> {
		El.from(".El", {
			opacity: 0,
			translateY: "-3rem",
			duration: 2
		})
		

	},[])



    return (


        <section className='El h-[30vh] pt-[5rem] '>

            <p className='font-bold text-[1.5rem]     flex justify-center text-[#6347F9]'>Paquetes Populares</p>
            <h2 className="text-[2rem] font-bold flex justify-center pb-[2rem]">Consulta nuestros paquetes</h2>
            <section className='flex gap-2 rounded-lg max-w-[1200px] justify-between mx-auto py-[3rem]'>
                <div className='flex flex-col '>
                    <img className='h-auto w-[300px]' src={imagen_piscina || imagen_por_defecto} alt="" />
                    <div className='flex gap-[2rem] items-center max-w-[321px]'>

                        <p>Disfrute del lugar de belleza en la ciudad de Grecia</p>
                    </div>
                    <div className='flex gap-[2rem] items-center max-w-[321px] justify-center'>

                        <div className='flex items-center gap-3'>

                            <FaStar className='text-[#EBBB14] ' />
                            <p> 4.8</p>
                        </div>
                        <p>2.5k vistas</p>
                        <button className='bg-[#6347F9] text-white p-2 rounded-lg w-[6rem] transition-all ease-in-out hover:scale-110 .5s '> $4300</button>
                    </div>
                </div>
                <div className='flex flex-col '>
                    <img className='h-auto w-[300px]' src={imagen_piscina || imagen_por_defecto} alt="" />

                    <div className='flex gap-[2rem] items-center max-w-[321px]'>

                        <p>Disfrute del lugar de belleza en la ciudad de Grecia</p>
                    </div>
                    <div className='flex gap-[2rem] items-center max-w-[321px] justify-center'>

                        <div className='flex items-center gap-3'>

                            <FaStar className='text-[#EBBB14] ' />
                            <p> 4.8</p>
                        </div>
                        <p>2.5k vistas</p>
                        <button className='bg-[#6347F9] text-white p-2 rounded-lg w-[6rem] transition-all ease-in-out hover:scale-110 .5s '> $4300</button>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <img className='h-auto w-[300px]' src={imagen_piscina || imagen_por_defecto} alt="" />
                    <div className='flex gap-[2rem] items-center max-w-[321px]'>


                        <p>Disfrute del lugar de belleza en la ciudad de Grecia</p>
                    </div>
                    <div className='flex gap-[2rem] items-center max-w-[321px] justify-center'>
                        <div className='flex items-center gap-3'>

                            <FaStar className='text-[#EBBB14] ' />
                            <p> 4.8</p>
                        </div>
                        <p>2.5k vistas</p>
                        <button className='bg-[#6347F9] text-white p-2 rounded-lg w-[6rem] transition-all ease-in-out hover:scale-110 .5s '> $4300</button>
                    </div>
                </div>
            </section>
        </section>


    )
}
