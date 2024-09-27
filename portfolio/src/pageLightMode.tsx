import React from 'react';
import { Link } from './assets/componentes/nav_link';
import { SocialLink } from './assets/componentes/social_links';
import { FaGithub, FaLinkedin, FaInstagram, FaReact } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineEmail, MdComputer } from "react-icons/md";
import { SiPhp } from "react-icons/si";
import ProgrammerImg from "./assets/imagens/Programmer-pana.svg";
import { TypeAnimation } from 'react-type-animation';
import { IconsLink } from './assets/componentes/icons_links';
import { Skills } from './assets/componentes/skills';
import { Projects } from './assets/componentes/projects';
import { Hobbies } from './assets/componentes/hobbies';

export function LightMode({ setPageMode }){
    return (
        <div className="h-full bg-[#f9f7f0] bg-opacity-10">
          <nav id="inicio" className="h-32 w-full flex justify-between px-12 items-center">
            <div>
              <ul className="flex gap-2">
                <li><Link pageMode={true} href="#inicio" >Início</Link></li>
                <li><Link pageMode={true} href="#habilidades" >Habilidades</Link></li>
                <li><Link pageMode={true} href="#projetos" >Projetos</Link></li>
                <li><Link pageMode={true} href="#sobre_mim" >Sobre mim</Link></li>
              </ul>
            </div>
            <div className='flex items-center gap-10'>
              <div>
                <ul className="flex gap-2">    
                  <li>
                    <SocialLink pageMode={true} href="https://github.com/EmafPlayer" target='_blank'>
                      <FaGithub/>
                      GitHub
                    </SocialLink>
                  </li>
                  <li>
                    <SocialLink pageMode={true} href="https://www.linkedin.com/in/emanuel-oliveira-9a8758302/" target='_blank'>
                      <FaLinkedin/>
                      Linkedin
                    </SocialLink>
                  </li>
                </ul>
              </div>
              <div>
                <button onClick={() => setPageMode(false)} className='p-3 hover:bg-[#78AAF0] rounded-full text-[30px] text-[#789EF0] hover:text-[#ffffff]'><MdOutlineDarkMode/></button>
              </div>
            </div>
          </nav>
          <main>
            <div className='flex w-full justify-center gap-14 items-center pb-[8rem]'>
              <div className='ml-[85px]'>
                <h1 className='font-mono text-[#789EF0] text-[35px] mb-4'>Escrever código é fácil...<br></br>Difícil é fazê-lo rodar.</h1>
                <div className='font-thin text-[#789EF0] text-[15px] mb-[50px]'>
                <TypeAnimation sequence={[ 'Desenvolvedor Web, Full-Stack', 2000, 'Desenvolvedor Web, Back-end', 2000, 'Desenvolvedor Web, Front-end', 2000 ]} wrapper="span" speed={20} repeat={Infinity}/>
                </div>
                <div>
                  <ul className="flex gap-2 pl-5">    
                    <li>
                      <IconsLink href="https://www.linkedin.com/in/emanuel-oliveira-9a8758302/" target='_blank'>
                        <FaLinkedin/>
                      </IconsLink>
                    </li>
                    <li>
                      <IconsLink href="https://github.com/EmafPlayer" target='_blank'>
                        <FaGithub/>
                      </IconsLink>
                    </li>
                    <li>
                      <IconsLink href="https://www.instagram.com/_emanuelfoliveira" target='_blank'>
                        <FaInstagram/>
                      </IconsLink>
                    </li>
                    <li>
                      <IconsLink href="mailto:emanuelfoliveira05@gmail.com" target='_blank'>
                        <MdOutlineEmail/>
                      </IconsLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <img src={ProgrammerImg} alt="Eu sou um Programador" className='h-[35rem] w-[40rem]'/>
              </div>
            </div>

            <div id="habilidades" className='flex justify-center gap-[90px] pb-28 ml-16 items-center'>

              <ul className='mr-10'>

                <li>
                  <Skills className='text-[#58C4DC]' pageMode={true} title='Front-end Development' status='Freelancing' text= 'Sou um desenvolvedor front-end, usando o framework react para aplicações web'> <FaReact/></Skills>
                </li>
                
                <li>
                  <Skills className='text-[#6781BB]' pageMode={true} title='Back-end Development' status='Freelancing' text= 'Também sou um desenvolvedor back-end, usando o php para aplicações web'><SiPhp/></Skills>
                </li>
                
                <li>
                  <Skills className='text-[#a495a6]' pageMode={true} title='C' status='Experient' text= 'C foi a minha primeira linguagem. Ela merece ter um espacinho pra ela. I love C ♡'><MdComputer/></Skills>
                </li>

              </ul>
              
              <div>
                
                <h1 className='text-[#789EF0] text-[35px] mb-[10px] font-mono'>Oi, me chamo Emanuel Oliveira ツ</h1>
                
                <h2 className='text-[#789EF0] text-[15px] pl-[2px] mb-7 font-mono'>Eu gosto muito de programação e sou apaixonado por matemática.</h2>
                
                <ul className='text-[#789EF0] list-disc pl-9'>
                  <li className='text-[12px] mb-3 font-mono'>Atualmente, faço Ciência da Computação na UNIVASF (Universidade Federal do Vale do São Francisco).</li>
                  <li className='text-[12px] mb-3 font-mono'>Meu hobbie favorito é jogar vôlei. Amo muito jogar vôlei.</li>
                  <li className='text-[12px] mb-14 font-mono'>Estou sempre disposto a aprender novas tecnologias e linguagens de programação.</li>
                </ul>

              </div>

            </div>
            
            <div id='projetos' className='mb-24'>

              <h1 className='ml-[6rem] mb-[50px] font-semibold text-[25px] text-[#789EF0]'>Meus Projetos</h1>

              <ul className='flex gap-8 ml-[10rem]'>
                  <li><Projects pageMode={true} title='Portfolio' link='https://github.com/EmafPlayer' ></Projects></li>
                  <li><Projects pageMode={true} title='Academic Hub' link='https://github.com/EmafPlayer/academic_hub' ></Projects></li>
                  <li><Projects pageMode={true} title='Sistema de Gerenciamento de Ações de Extensão' link='https://github.com/EmafPlayer/Projeto-POO' ></Projects></li>
              </ul>

            </div>

            <div id='sobre_mim' className='pb-28'>

              <h1 className='ml-[6rem] mb-[50px] font-semibold text-[25px] text-[#789EF0] font'>Interesses</h1>

              <ul className='flex gap-8 ml-[8rem] justify-center mb-6'>
                <Hobbies pageMode={true} >Escutar Música</Hobbies>
                <Hobbies pageMode={true} >Vôlei</Hobbies>
                <Hobbies pageMode={true} >Matemática</Hobbies>
                <Hobbies pageMode={true} >Basquete</Hobbies>
              </ul>

              <ul className='flex gap-8 ml-[8rem] justify-center'>
                <Hobbies pageMode={true} >Jogos</Hobbies>
                <Hobbies pageMode={true} >Comer</Hobbies>
                <Hobbies pageMode={true} >Programação</Hobbies>
                <Hobbies pageMode={true} >Estudar</Hobbies>
              </ul>

            </div>

          </main>
        </div>
      );
}