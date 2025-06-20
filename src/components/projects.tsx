import { twMerge } from "tailwind-merge";
import { ComponentProps } from "react";
import { motion } from "framer-motion";
import { TituloEstilizado } from "./titulo_estilizado";
import { FaGithub } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

interface ProjectsProps extends ComponentProps<'div'> {

  page_mode: boolean,

  projeto: {

    title: string,
    descricao: string
    foto: string,
    link: string,
    tecnologias: {
      nome: string,
      foto: string
    } []

  }
  
};

export function Projects( props: ProjectsProps ){

  const lg = useMediaQuery({ query: '(min-width: 768px)' })

  return (

    <div className={twMerge("flex flex-col sm:flex-row items-center justify-around rounded-lg")}>

      <div className="flex flex-col gap-16 2xl:gap-20 w-full sm:w-[60%] pr-3 sm:pr-0 pl-3 sm:pl-6 mt-12 mb-[10rem] sm:mb-0">

        { lg ? 
        
          <motion.img src={props.projeto.foto} alt={props.title} initial={{rotateX: 10, rotateY: 25, translateY: 0 }} whileHover={{ rotateX: 5, rotateY: -30, scale: 1.15, translateY: -10, }} transition={{ duration: 0.5}} className={`w-[41rem] 2xl:w-[57rem] h-[22rem] 2xl:h-[30rem] mb-10 rounded-3xl shadow-2xl hover:shadow-lg border-[1px] ${ props.page_mode ? "border-[#488392]" : "border-[#e5d8b5]" }`} />
        
        :
        
          <img src={props.projeto.foto} className={`w-full sm:w-[45rem] h-[17rem] sm:h-[2rem] rounded-3xl shadow-2xl hover:shadow-lg border-[1px] ${ props.page_mode ? "border-[#488392]" : "border-[#e5d8b5]" }`} />
        
        }

        <div className="flex flex-col items-center gap-3">
          <h1 className={twMerge("font-bold text-2xl", props.page_mode ? "text-[#488392]" : "text-gray-100")}>Tecnologias Usadas:</h1>
          <div className="grid grid-cols-4 sm:flex items-center gap-4">
            {props.projeto.tecnologias.map((projeto) => 
              <img src={projeto.foto} alt={projeto.nome} data-toggle="tooltip" data-placement="top" title={projeto.nome} className="w-8 h-8 transition ease-in-out hover:scale-110"></img>
            )}
          </div>
        </div>

      </div>
    
      
      <div className="flex flex-col gap-36 sm:gap-20 items-center w-full sm:w-[40%] sm:pr-24 h-screen sm:h-full">

        <TituloEstilizado page_mode={props.page_mode}>{props.projeto.title}</TituloEstilizado>

        <h2 className={twMerge("text-center font-mono px-12 sm:px-0", props.page_mode ? "text-slate-800" : "text-white")}>{props.projeto.descricao}</h2>

        <a href={props.projeto.link} target="_blank">
          <motion.button className={twMerge("transition duration-300 py-2 px-6 rounded-lg font-semibold shadow-[0px_2px_1px_2px_rgba(0,0,0,0.2)] hover:shadow-none shadow-slate-700 ", props.page_mode ? "bg-[#488392] hover:bg-[#75bacc] focus:bg-[#488392] text-white" : "bg-[#B0BEC5] hover:bg-[#e7e1d0] text-white hover:text-[#568692]")}>
            <div className="flex items-center gap-4">
              <h1>Visitar</h1>
              <FaGithub className="text-xl"></FaGithub>
            </div>
          </motion.button>
        </a>
        
      </div>

    </div>

  );

}