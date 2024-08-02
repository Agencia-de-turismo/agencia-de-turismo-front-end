import gsap from 'gsap'
import React, { useEffect } from 'react'

export const ToursDestacados = () => {
    let imagenParis = "https://s3-alpha-sig.figma.com/img/ac96/cbaa/ea917390e5b5d1f24fd28cac40ff8bab?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JT30Y3rfhiB4rUZ8cwAy8aNw9DxkSpRgJgWdiCfKo28OA3Cjh5rlqHl93kg7kdQc2s54YaQIgmvwNepn9dDxJtJfh3KzMz7m6pxT2AknAr7ZGDD3vugA9lQPMgT7oJrSvAF9~vzO1eI2QwqRRtIZY1yzTPVEcCRo45n61FHUzk5hstOpyNv53WFESPZtLUY7zpZTTCU6xSLxTha-a0aJIMDS-mKJduveQGX8v-M3kbbCDd8Cz~sguk7HibJeR-lRuJVS52lu-M-fl0h9BQcSxjMshHW21p88OuEpgGzQGLbtZifsL6uoj3So1Yd9FQ63wifxWcOt9nmyP~f8Wexxgw__"
    let imagenBrazil = "https://s3-alpha-sig.figma.com/img/bd87/0961/23a1539947b3bc995c200b392484e951?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=op8eVIQuIfmvax-MgSBMRFQK7VL7ypgnhSSIKzqwrq-hSuzIqpr5LcDaswU~-CPtJUm91XTL8DyAeDWhBVhmBpJHm4lzMcYg19qmAPlrtBtmMpHM864L-CbRLTvLlQaAOa9hePw0Zvk8Twek-o2Y-acrqqXPEMpSxtWr0RBUe4KZNMctrVH8IsooVJ9A2e5SqWOzZy0N51kniVWR0rj~ikRLmbFk83dbk07VxLly4gct6ReRIzifBZbiPvfmnLZOgYzcrl6kMyUxmbqcoWtI2ooWUZORh2NpFRW6Mx8MSWamGtXumH98gKDxsfr~MspB8dNet5scGWufQFwGUuughA__"
    let imagenJapon = "https://s3-alpha-sig.figma.com/img/4188/5b18/d4468a50fd944bede987774d0cd1fb56?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jwthosd39EyIPOtOrjnlCRyGKLVBf0B3JJmG67wGRvFEBUNnByn5HDxmX5asCM4~45SNBRThBRsjhJyVQarzT5l93ofXxJVdMg3TU36gfXS4zEjqGVVrrk7p7zkEXluBjiGNbkhWTfXvwWP8H-MZwZTjB4cH8585147Jaigxl5N6zIzBUNZUywcFThi-YrHqE8kC~AjmoLifhX4dyt5dR0mjbCFdPIfstM-3RfOXfIIjfxGN096tGTTMDpte8YfZ-KTC60qYgk8D4fEvoVjKDx2yIv9DhaxGMeFWcRPLkwNI84HzeS3NjaNCWujuMpYbif~dI1OvUQcG-8JvvnosBw__"
    let imagenLondres = "https://s3-alpha-sig.figma.com/img/1117/7ce8/e6a7c9d160b18ec9865a43cc655507da?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=coXx0knAoiKvbg9kTQx8ZfhPOHkb9bDiG93k0A4vsHFoI7m2DWrg0cBHK1e-COsWGgd1l0dcOV6WbB-HfPEyRnj8XCgz1s5AIduIx0zh5f8owBZeLEgzrpVCnBecAvJ2YWjHNUeSWdS2gIg41xQ~DV8ZjC0XQlk7Cnv4ORoac-K-1ikxeF8GfvgIPUxi4GmMewxSpC3aJ0sZYQXM0L97sIkwmh6sWFZbPuDYuqhHmkcAK2~8~PNnENTl~morZU5QMXW2OQDrc88Rv-sxNQ~mC19R8Px-633Iue4k40H8mRhBZRg7kDGtz25f09z-P4qbTNDfT6P~kt2gpqlXlwEDgw__"
    let imagen_por_defecto = "https://via.placeholder.com/300"
    const El = gsap.timeline()


    useEffect(()=> {
		El.from(".ElemTour", {
			opacity: 0,
			translateY: "-3rem",
			duration: 2
		})
		

	},[])


    return (
        <div className='ElemTour'>
            <p className=' font-bold text-[1.5rem] flex justify-center text-[#6347F9]'> Tour Destacados!</p>
            <h2 className="text-[2rem] font-bold flex justify-center">Lugares hermosos alrededor del mundo</h2>
            <div className=" mx-auto py-[3rem]   max-w-[1200px] flex justify-center h-[60vh]">
                <div className="grid grid-cols-3 h-[28vh] gap-[1rem]">
                    <div className="relative">
                        <div className='absolute top-[19rem] left-4'>

                            <b className='text-white text-[2rem]'>Paris</b>

                            <p className='text-white'>Inicia desde $8</p>
                        </div>
                        <div className='absolute transition-all cursor-pointer ease-in-out hover:scale-110 .5s top-[1rem] right-3 text-[#6347F9] bg-white p-2 rounded-lg font-bold'>
                            8 Paquetes
                        </div>
                        <img src={`${imagenParis || imagen_por_defecto}`} alt="Imagen 1" className="   w-[17rem] rounded-lg  h-auto" />
                    </div>
                    <div className=" grid grid-rows-2 ">
                        <div className='relative'>
                            <div className='absolute top-[6rem] left-4'>

                                <b className='text-white text-[2rem]'>Brazil</b>

                                <p className='text-white '>Inicia desde $8</p>
                            </div>
                            <div className='absolute transition-all cursor-pointer ease-in-out hover:scale-110 .5s top-[1rem] right-3 text-[#6347F9]  font-bold bg-white p-2 rounded-lg'>
                                8 Paquetes
                            </div>
                            <img src={`${imagenBrazil || imagen_por_defecto}`} alt="Imagen 2" className="   w-[17rem] rounded-lg  h-auto" />
                        </div>
                        <div className='relative'>
                            <div className='absolute top-[6rem] left-4'>

                                <b className='text-white text-[2rem]'>Japon</b>

                                <p className='text-white '>Inicia desde $8</p>
                            </div>
                            <div className='absolute transition-all cursor-pointer ease-in-out hover:scale-110 .5s top-[1rem] right-3 text-[#6347F9]  font-bold bg-white p-2 rounded-lg'>
                                8 Paquetes
                            </div>
                            <img src={`${imagenJapon || imagen_por_defecto}`} alt="Imagen 3" className="    w-[17rem] rounded-lg  h-auto" />
                        </div>
                    </div>
                    <div className="relative">
                        <div className='absolute top-[19rem] left-4'>

                            <b className='text-white text-[2rem]'>Londres</b>

                            <p className='text-white '>Inicia desde $8</p>
                        </div>
                        <div className='absolute top-[1rem] transition-all cursor-pointer ease-in-out hover:scale-110 .5s right-3 text-[#6347F9]  font-bold bg-white p-2 rounded-lg'>
                            8 Paquetes
                        </div>
                        <img src={`${imagenLondres || imagen_por_defecto}`} alt="Imagen 4" className="   w-[17rem] rounded-lg h-auto" />
                    </div>
                </div>
            </div>
        </div>

    )
}
