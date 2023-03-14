import { useEffect, useRef, useState, React } from 'react' 
import { motion } from 'framer-motion'
import image1 from '../../assets/comercial1.png'
import image2 from '../../assets/comercial2.png'
import image3 from '../../assets/comercial3.png'

const images = [image1, image2, image3, image2, image3, image1]

const ComSlide = () => {

    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() =>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, [])


  return (
    <div className='mt-44 w-full m-0-auto   flex-column  align-center justify-center bg-zinc-900'>
    <div className='w-full m-0-auto  flex  align-center justify-center bg-zinc-900 pt-10'>
    </div>
        <div className='p-10 sm:pl-40 sm:pr-40 pb-20 w-full justify-center align-center m-0-auto text-center '>
        <p className='text-white text-justify sm:text-start font-light text-lg tracking-wider'>Clássicas na proteção dos comerciantes, sejam para rua ou shopping, a porta de enrolar para comercio é essencial dos pequenos á grandes projetos. Para o comerciante, lojista ou até proprietário que pretende valorizar seu imóvel para locação, a porta de aço de enrolar é certeza de praticidade, pouco espaço e segurança. Para poder garantir ao cliente modelos de portas de aço automáticas e portas de aço manuais fortes, trabalhamos com chapas de grande espessura e com as melhores travas e cadeados do mercado, porque é só trabalhando com uma matéria-prima excelente que se consegue ser sinônimo de resistência.
        </p>
        </div>
        <div className='flex align-center justify-center'>
        <motion.div ref={carousel} className='cursor-grab overflow-hidden max-w-[1200px]' whileTap={{cursor: "grabbing"}}>
            <motion.div 
            className='flex'
            drag="x"
            dragConstraints={{ right:0, left: -width}}
            initial={{ x: 100 }}
            animate={{ x:0 }}
            trasition={{ duration: 0.8 }}
            >
                {images.map(image =>(
                    <motion.div className='min-h-[100px] min-w-[340px] sm:min-w-[400px] p-[14px] sm:min-w-[400px] p-[14px]' key={image}>
                        <img className='w-full h-[90%] rounded-xl pointer-events-none' src={image} alt='Texto alt' />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
        </div>
    </div>
  )
}

export default ComSlide
