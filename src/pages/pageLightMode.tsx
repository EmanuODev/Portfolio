import { useState } from 'react';
import { Link } from '../components/nav_link';
import { SocialLink } from '../components/social_links';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineEmail, MdLibraryBooks, MdOutlineLightMode } from "react-icons/md";
import ProgrammerImgLight from "../../public/Programmer-pana (5).svg";
import ProgrammerImgDark from "../../public/Programmer-pana (7).svg";
import About_meLight from "../../public/About_me.svg";
import About_meDark from "../../public/About_me1.svg";
import { TypeAnimation } from 'react-type-animation';
import { IconsLink } from '../components/icons_links';
import { Skills } from '../components/skills';
import { Projects } from '../components/projects';
import curriculo from '../../public/curriculo.pdf'
import { Tittle } from '../components/tittle'
import { motion } from "framer-motion";
import { Habilidades } from '../components/habilidades';
import { FaDatabase } from "react-icons/fa6";
import { PiComputerTowerFill } from 'react-icons/pi';
import { RiComputerFill } from 'react-icons/ri';
import { TituloEstilizado } from '../components/titulo_estilizado';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { twMerge } from 'tailwind-merge';
import { useMediaQuery } from 'react-responsive';
import { TfiMenuAlt } from "react-icons/tfi";


type habilidadesType = {

  frontend: {
    nome: string,
    foto: string
  } [],

  backend: {
    nome: string,
    foto: string
  } [],

  outros: {
    nome: string,
    foto: string
  } []


}

type projetosType = {

  title: string,
  descricao: string
  foto: string,
  link: string,
  tecnologias: {
    nome: string,
    foto: string
  } []

}


export function LightMode(  ){

  const [page_mode, setPageMode] = useState(true);

  const [count, setCount] = useState(0);
  const [direcao, setDirecao] = useState(1);

  const sm = useMediaQuery({ query: '(min-width: 640px)' })
  const lg = useMediaQuery({ query: '(min-width: 768px)' })

  const habilidades: habilidadesType = {
    frontend: [
      { nome: "Html", foto: "assets/fotos_skills_frontend/HTML.svg" },
      { nome: "CSS", foto: "assets/fotos_skills_frontend/CSS.svg" },
      { nome: "Tailwind", foto: "assets/fotos_skills_frontend/TailwindCSS.svg" },
      { nome: "JavaScript", foto: "assets/fotos_skills_frontend/JavaScript.svg" },
      { nome: "TypeScript", foto: "assets/fotos_skills_frontend/TypeScript.svg" },
      { nome: "React", foto: "assets/fotos_skills_frontend/React.svg" }
    ],
    backend: [
      { nome: "c", foto: "assets/fotos_skills_backend/C.svg" },
      { nome: "PHP", foto: "assets/fotos_skills_backend/PHP.svg" },
      { nome: "Laravel", foto: "assets/fotos_skills_backend/Laravel.svg" },
      { nome: "Java", foto: "assets/fotos_skills_backend/Java.svg" },
      { nome: "Spring", foto: "assets/fotos_skills_backend/Spring.svg" },
      { nome: "Python", foto: "assets/fotos_skills_backend/Python.svg"}
    ],
    outros: [
      { nome: "MySQL", foto: "assets/fotos_skills_outros/MySQL.svg" },
      { nome: "Docker", foto: "assets/fotos_skills_outros/Docker.svg" }
    ]
  };
  
  const projetos: projetosType[] = [
    { 
      title: 'Gerenciador de Imóveis', 
      descricao: 'Um WebApp para gerenciamento de imóveis, permitindo que proprietários cadastrem e publiquem informações sobre seus imóveis de forma prática e eficiente.',  
      foto: 'assets/fotos_projetos/foto_imovel.png',
      link: 'https://github.com/EmafPlayer/Gerenciador-Imoveis',
      tecnologias: [habilidades.frontend[0], habilidades.frontend[1], habilidades.frontend[2], habilidades.frontend[4], habilidades.frontend[5], habilidades.backend[1], habilidades.backend[2], habilidades.outros[0], habilidades.outros[1]]
    },
    { 
      title: 'EO Esporte', 
      descricao: 'Aplicação web sobre o Campeonato Brasileiro Série A, com atualizações em tempo real de jogos, tabela e informações dos clubes. Backend em Laravel e frontend em React.',  
      foto: 'assets/fotos_projetos/foto_esportes.png',
      link: 'https://github.com/EmafPlayer/EO_Esporte',
      tecnologias: [habilidades.frontend[0], habilidades.frontend[1], habilidades.frontend[2], habilidades.frontend[4], habilidades.frontend[5], habilidades.backend[1], habilidades.backend[2], habilidades.outros[0]]
    },
    { 
      title: 'Meu Portfolio', 
      descricao: 'Site pessoal desenvolvido em React, para exibir minhas habilidades, hobbies e informações pessoais.', 
      foto: 'assets/fotos_projetos/foto_portfolio.png',
      link: 'https://github.com/EmafPlayer/Portfolio',
      tecnologias: [habilidades.frontend[0], habilidades.frontend[1], habilidades.frontend[2], habilidades.frontend[4], habilidades.frontend[5]]
    },
    { 
      title: 'Academic HUB', 
      descricao: 'Webapp de gerenciamento educacional desenvolvido por um grupo de alunos da minha faculdade, incluindo eu. Contribuí ativamente em todas as áreas do projeto, tanto no backend quanto no frontend. A aplicação possui funcionalidades como matrícula de alunos e cadastro de cursos, utilizando Laravel no backend e React no frontend.',  
      foto: 'assets/fotos_projetos/foto_academic.png',
      link: 'https://github.com/EmafPlayer/academic_hub',
      tecnologias: [habilidades.frontend[0], habilidades.frontend[1], habilidades.frontend[2], habilidades.frontend[4], habilidades.frontend[5], habilidades.backend[1], habilidades.backend[2], habilidades.outros[0]]
    },
    {
      title: '8 Puzzle', 
      descricao: 'Este projeto implementa a resolução do quebra-cabeça de 8 peças (8-Puzzle) utilizando o algoritmo de Busca Gulosa com a heurística da distância de Manhattan. O objetivo é encontrar o menor caminho do estado inicial até o estado objetivo.',  
      foto: 'assets/fotos_projetos/foto_puzzle.png',
      link: 'https://github.com/EmafPlayer/8-Puzzle',
      tecnologias: [habilidades.frontend[0], habilidades.frontend[1], habilidades.frontend[2], habilidades.frontend[4], habilidades.frontend[5], habilidades.backend[5]]
    },
    {
      title: 'Sistema de Gerenciamento de Ações de Extensão', 
      descricao: 'Este projeto é parte da disciplina de Programação Orientada a Objetos (POO) da Universidade Federal do Vale do São Francisco (Univasf). O objetivo é implementar um módulo central de um Sistema de Gerenciamento de Ações de Extensão, destinado ao envio e à avaliação de projetos de Extensão da Univasf. O foco principal é o desenvolvimento do núcleo do sistema, contemplando sua arquitetura e modelagem básica. Aplicação foi feita utilizando Java.',  
      foto: 'assets/fotos_projetos/foto_poo.png',
      link: 'https://github.com/EmafPlayer/Projeto-POO',
      tecnologias: [habilidades.backend[3]]
    }
  ]
  
  function proxPagina () {
    if(count < projetos.length - 1){
      setCount(count + 1)
      setDirecao(1)
    }
  }
  
  function antPagina () {
    if(count > 0){
      setCount(count - 1)
      setDirecao(-1)
    }
  }
  
  return (
    <div className={twMerge("h-full overflow-hidden", page_mode ? "bg-[#A69279] bg-opacity-[0.4] " : "bg-[#2A3C45]")}>
      <section id="inicio" className='w-full min-h-screen flex flex-col snap-center'>
        <nav className="h-28 2xl:h-32 w-full flex justify-between py-4 lg:py-0 px-6 lg:px-12 items-center">
          { lg ?

            <ul className="flex gap-2">
              <li><Link pageMode={page_mode} href="#inicio" >Início</Link></li>
              <li><Link pageMode={page_mode} href="#projetos" >Projetos</Link></li>
              <li><Link pageMode={page_mode} href="#sobre_mim" >Sobre mim</Link></li>
              <li><Link pageMode={page_mode} href="#habilidades" >Habilidades</Link></li>
            </ul>

          :
            
            <button className='py-3 px-3 rounded-lg bg-[#568692] text-white'>
              <TfiMenuAlt />
            </button>

          }
          <div className='flex items-center gap-4 lg:gap-10'>
            <div>
              <ul className="flex gap-6">    
                <li>
                  <SocialLink pageMode={page_mode} href="https://github.com/EmafPlayer" target='_blank'>
                    <FaGithub/>
                      {lg && 'GitHub'}
                  </SocialLink>
                </li>
                <li>
                  <SocialLink pageMode={page_mode} href="https://www.linkedin.com/in/emanuel-oliveira-9a8758302/" target='_blank'>
                    <FaLinkedin/>
                      {lg && 'Linkedin'}
                  </SocialLink>
                </li>
              </ul>
            </div>
            <div>
              <button onClick={() => setPageMode(!page_mode)} className={twMerge('p-3 rounded-full text-[30px] transition duration-150 delay-100 hover:scale-110', page_mode ? "hover:bg-[#568692] text-[#568692] hover:text-[#FFFFFF]" : "hover:bg-slate-500 text-[#FFFFFF]")}>{page_mode ? <MdOutlineDarkMode/> : <MdOutlineLightMode/>}</button>
            </div>
          </div>
        </nav>

        <div className='flex flex-col lg:flex-row w-full justify-center lg:gap-6 2xl:gap-20 items-center 2xl:pt-8 h-full'>

          <motion.div initial={{ opacity: 0, x: -350 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className='flex flex-col items-center lg:items-start my-8 sm:py-0'>
            <h1 className={twMerge('font-outfit text-[2.5rem] lg:text-[3.5em] mb-4 text-center', page_mode ? "text-[#568692] " :  "text-[#FFFFFF]")}>Olá! Eu me chamo <br></br> Emanuel Oliveira.</h1>
            <div className={twMerge('font-thin text-[1em] mb-[4em]', page_mode ? "text-[#568692] " :  "text-[#FFFFFF]")}>
              <TypeAnimation sequence={[ 'Desenvolvedor Web, Full-Stack', 2000, 'Desenvolvedor Web, Back-end', 2000, 'Desenvolvedor Web, Front-end', 2000 ]} wrapper="span" speed={20} repeat={Infinity}/>
            </div>
            <ul className="flex gap-2 sm:pl-5 pb-20">    
              <li>
                <IconsLink page_mode={page_mode} href="https://www.linkedin.com/in/emanuel-oliveira-9a8758302/" target='_blank'>
                  <FaLinkedin/>
                </IconsLink>
              </li>
              <li>
                <IconsLink page_mode={page_mode} href="https://github.com/EmafPlayer" target='_blank'>
                  <FaGithub/>
                </IconsLink>
              </li>
              <li>
                <IconsLink page_mode={page_mode} href="https://www.instagram.com/_emanuelfoliveira" target='_blank'>
                  <FaInstagram/>
                </IconsLink>
              </li>
              <li>
                <IconsLink page_mode={page_mode} href="mailto:emanuelfoliveira05@gmail.com" target='_blank'>
                  <MdOutlineEmail/>
                </IconsLink>
              </li>
            </ul>
            <a href={curriculo} target='_blank' className={twMerge('w-64 py-4 flex items-center justify-center gap-4 rounded-lg transition ease-in-out duration-200 hover:scale-110', page_mode ? "bg-[#568692] " :  "bg-slate-500")}>
              <h1 className={twMerge('font-kanit font-semibold text-[1.2rem]', page_mode ? "text-white" :  "text-gray-100")}>Visualizar Currículo</h1>
              <MdLibraryBooks className={twMerge('text-[1.7em]', page_mode ? "text-white" :  "text-gray-100")}/>
            </a>
          </motion.div>

          {sm && 
            <motion.div initial={{ opacity: 0, x: 350 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <img src={page_mode? ProgrammerImgLight : ProgrammerImgDark} alt="Eu sou um Programador" className='h-[27rem] sm:h-[35rem] w-full sm:w-[40rem] '/>
            </motion.div>
          }

        </div>
      </section>


      {/* -------- PROJETOS --------- */}

      <section id='projetos' className='min-h-screen w-full snap-center'>

        <Tittle page_mode={page_mode} className='pt-8 w-full'>Meus Projetos</Tittle>

        {lg ? 
        
          <motion.div className='h-full w-full sm:px-10 flex flex-1 items-center justify-between sm:mt-8' initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{duration: 0.7}}>

            {count > 0 && <button onClick={antPagina}><IoIosArrowDropleftCircle className={twMerge("text-[2.8rem]", page_mode ? "text-[#488392]" : "text-[#B0BEC5]")}/></button>}

            <motion.div key={count} initial={{ opacity: 0, x: direcao === 1 ? 30 : -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4}}>
              <Projects page_mode={page_mode} projeto={projetos[count]} ></Projects>
            </motion.div>
            
            {count < projetos.length - 1 && <button onClick={proxPagina}><IoIosArrowDroprightCircle className={twMerge("text-[2.8rem]", page_mode ? "text-[#488392]" : "text-[#B0BEC5]")}/></button>}
          
          </motion.div>
        
        :
        
          <motion.div className='h-full w-full sm:px-10 flex flex-col flex-1 items-center justify-between sm:mt-8' initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{duration: 0.3}}>

            <motion.div key={count} initial={{ opacity: 0, x: direcao === 1 ? 30 : -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4}}>
              <Projects page_mode={page_mode} projeto={projetos[count]} ></Projects>
            </motion.div>
            
            <div className='flex items-center w-full justify-evenly mt-[6rem] mb-[8rem]'>

              {count > 0 && <button onClick={antPagina}><IoIosArrowDropleftCircle className={twMerge("text-[2.8rem]", page_mode ? "text-[#488392]" : "text-[#B0BEC5]")}/></button>}
              {count < projetos.length - 1 && <button onClick={proxPagina}><IoIosArrowDroprightCircle className={twMerge("text-[2.8rem]", page_mode ? "text-[#488392]" : "text-[#B0BEC5]")}/></button>}

            </div>
          
          </motion.div>  

        }


      </section>

      {/* ------- SOBRE MIM ------- */}

      <section id="sobre_mim" className='w-full h-screen flex flex-col snap-center	'>

        <Tittle page_mode={page_mode} className='pt-8 2xl:pt-12'>Sobre Mim</Tittle>

        <div className='flex justify-center 2xl:gap-12 items-center h-full w-full px-4 2xl:px-0'>

          <motion.ul initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6}} className='flex flex-col gap-y-12'>

            <li>
              <Skills page_mode={page_mode} title='Desenvolvedor Front-end' text= 'Crio interfaces modernas, focadas em usabilidade e experiência do usuário'><RiComputerFill className={twMerge('text-[3.5rem]', page_mode ? "text-white" : "text-[#568692]")}/></Skills>
            </li>
            
            <li>
              <Skills page_mode={page_mode} title='Desenvolvedor Back-end' text= 'Desenvolvo soluções robustas para garantir a funcionalidade e segurança de aplicações'><PiComputerTowerFill className={twMerge('text-[4rem]', page_mode ? "text-white" : "text-[#568692]")}/></Skills>
            </li>
            
            <li>
              <Skills page_mode={page_mode} title='Banco de Dados' text= 'Tenho conhecimentos em Banco de Dados, incluindo a normalização e a criação de estruturas a partir de modelos (ER).'><FaDatabase className={twMerge('text-[3rem]', page_mode ? "text-white" : "text-[#568692]")}/></Skills>
            </li>

          </motion.ul>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1}}>
            <img src={page_mode ? About_meLight : About_meDark} alt="Sobre mim" className='h-[26rem] 2xl:h-[30rem] w-[38rem] 2xl:w-[50rem] translate-x-10'/>
          </motion.div>

        </div>


      </section>

      <section id='habilidades' className='h-screen w-full snap-center	'>

        <Tittle page_mode={page_mode} className='pt-8 2xl:pt-12'>Habilidades</Tittle>

        <div className='mt-20 px-20 gap-y-14 flex flex-col w-full'>

          <div className='flex items-center justify-between w-full'> 
            <div>
              <Habilidades page_mode={page_mode} habilidades={habilidades["frontend"]}></Habilidades>
            </div>
            <TituloEstilizado page_mode={page_mode}>Frontend</TituloEstilizado>
          </div>

          <div className='flex items-center justify-between w-full'>
            <div>
              <Habilidades page_mode={page_mode} habilidades={habilidades["backend"]}></Habilidades>
            </div>
            <TituloEstilizado page_mode={page_mode}>Backend</TituloEstilizado>
          </div>

          <div className='flex items-center justify-between w-full'>
            <div>
              <Habilidades page_mode={page_mode} habilidades={habilidades['outros']}></Habilidades>
            </div>
            <TituloEstilizado page_mode={page_mode}>Outros</TituloEstilizado>
          </div>


        </div>


      </section>
          
      

      {/* <section id='habilidades' className='pb-28'>

        <Tittle page_mode={page_mode}>Interesses</Tittle>

        <ul className='flex gap-8 ml-[8rem] justify-center mb-6'>
          <Hobbies pageMode={true} >Escutar Música</Hobbies>
          <Hobbies pageMode={true} >Vôlei</Hobbies>
          <Hobbies pageMode={true} >Matemática</Hobbies>
          <Hobbies pageMode={true} >Basquete</Hobbies>
        </ul>

        <ul className='flex gap-8 ml-[8rem] justify-center'>
          <Hobbies pageMode={true} >Jogos</Hobbies>
          <Hobbies pageMode={true} >Jiu-Jitsu</Hobbies>
          <Hobbies pageMode={true} >Programação</Hobbies>
          <Hobbies pageMode={true} >Estudar</Hobbies>
        </ul>

      </section> */}

    </div>
  );
}