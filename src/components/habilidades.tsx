import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface SkillProps extends ComponentProps<'div'> {

  page_mode?: boolean;
  habilidades: {
    foto: string,
    nome: string 
  } []

};

export function Habilidades( props: SkillProps ){
    return (
      <ul className={twMerge('w-full flex gap-x-9 text-center', props.className)}>
        {props.habilidades.map((habilidade) => 
          <motion.li key={habilidade.nome} initial={{ opacity: 0, scale: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={ { scale: 1.2 } } className={twMerge("flex flex-col items-center justify-evenly h-[8rem] 2xl:h-[11rem] w-[8rem] 2xl:w-[9rem] rounded-xl shadow-div", props.page_mode ? "bg-[#488392]" : "bg-slate-500 ")}>
              <img src={habilidade.foto} alt={habilidade.nome} className='w-[4rem] 2xl:w-[5rem]'/>
              <h1 className={twMerge('font-outfit font-semibold text-[1.1rem]', props.page_mode ? "text-white" : "text-white")}>{habilidade.nome}</h1>
          </motion.li>
        )}
      </ul>
    );
}