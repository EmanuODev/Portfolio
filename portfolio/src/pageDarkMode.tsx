import React from 'react';
import { Link } from './assets/componentes/nav_link';
import { SocialLink } from './assets/componentes/social_links';
import { FaGithub, FaInstagram, FaLinkedin, FaReact } from "react-icons/fa";
import { MdComputer, MdOutlineEmail, MdOutlineLightMode} from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';
import { IconsLink } from './assets/componentes/icons_links';
import { Skills } from './assets/componentes/skills';
import { Projects } from './assets/componentes/projects';
import { Hobbies } from './assets/componentes/hobbies';
import ProgrammerImg from "./assets/imagens/Programmer-pana (3).svg";
import { SiPhp } from 'react-icons/si';

export function DarkMode({ setPageMode }){

  return (
        <div className="h-full bg-[#242626f4]">
          <nav id="inicio" className="h-32 w-full flex justify-between px-12 items-center">
            <div>
              <ul className="flex gap-2">
                <li><Link pageMode={false} href="#inicio" >Início</Link></li>
                <li><Link pageMode={false} href="#habilidades" >Habilidades</Link></li>
                <li><Link pageMode={false} href="#projetos" >Projetos</Link></li>
                <li><Link pageMode={false} href="#sobre_mim" >Sobre mim</Link></li>
              </ul>
            </div>
            <div className='flex items-center gap-10'>
              <div>
                <ul className="flex gap-2">    
                  <li>
                    <SocialLink pageMode={false} href="https://github.com/EmafPlayer" target='_blank'>
                      <FaGithub/>
                      GitHub
                    </SocialLink>
                  </li>
                  <li>
                    <SocialLink pageMode={false} href="https://www.linkedin.com/in/emanuel-oliveira-9a8758302/" target='_blank'>
                      <FaLinkedin/>
                      Linkedin
                    </SocialLink>
                  </li>
                </ul>
              </div>
              <div>
              <button onClick={() => setPageMode(true)} className='p-3 hover:bg-[#52be81] rounded-full text-[30px] text-[#55c385cc] hover:text-[#ffffff]'><MdOutlineLightMode/></button>
              </div>
            </div>
          </nav>
          <main>
            <div className='flex w-full justify-center gap-14 items-center pb-[8rem]'>
              <div className='ml-[85px]'>
                <h1 className='font-mono text-[#55c385] text-[35px] mb-4'>Escrever código é fácil...<br></br>Difícil é fazê-lo rodar.</h1>
                <div className='font-thin text-[#6cdf9eee] text-[15px] mb-[50px]'>
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

            <div id="habilidades" className='flex justify-center gap-[90px] pb-28 ml-16 pr-[100px] items-center'>

              <ul>

              <li>
                  <Skills className='text-[#58C4DC]' pageMode={false} title='Front-end Development' status='Freelancing' text= 'Sou um desenvolvedor front-end, usando o framework react para aplicações web'> <FaReact/></Skills>
                </li>
                
                <li>
                  <Skills className='text-[#6781BB]' pageMode={false} title='Back-end Development' status='Freelancing' text= 'Também sou um desenvolvedor back-end, usando o php para aplicações web'><SiPhp/></Skills>
                </li>
                
                <li>
                  <Skills className='text-[#4e5250]' pageMode={false} title='C' status='Experient' text= 'C foi a minha primeira linguagem. Ela merece ter um espacinho pra ela. I love C ♡'><MdComputer/></Skills>
                </li>

              </ul>
              
              <div>
                
                <h1 className='text-[#55c385] text-[35px] mb-[10px] font-mono'>Oi, me chamo Emanuel Oliveira ツ</h1>
                
                <h2 className='text-[#55c385] text-[15px] pl-[2px] mb-7 font-mono'>Eu gosto muito de programação e sou apaixonado por matemática.</h2>
                
                <ul className='text-[#55c385] list-disc pl-9'>
                  <li className='text-[12px] mb-3 font-mono'>Atualmente, faço Ciência da Computação na UNIVASF (Universidade Federal do Vale do São Francisco).</li>
                  <li className='text-[12px] mb-3 font-mono'>Meu hobbie favorito é jogar vôlei. Amo muito jogar vôlei.</li>
                  <li className='text-[12px] mb-14 font-mono'>Estou sempre disposto a aprender novas tecnologias e linguagens de programação.</li>
                </ul>

              </div>

            </div>
            
            <div id='projetos' className='mb-24'>

              <h1 className='ml-[6rem] mb-[50px] font-semibold text-[22px] text-[#55c385]'>Meus Projetos</h1>

              <ul className='flex gap-8 ml-[10rem]'>
                  <li><Projects pageMode={false} title='Exemplo 1' link='https://github.com/EmafPlayer/EmafPlayer' ></Projects></li>
                  <li><Projects pageMode={false} title='Exemplo 2' link='https://github.com/EmafPlayer/Projeto-POO' ></Projects></li>
                  <li><Projects pageMode={false} title='Exemplo 3' link='https://github.com/EmafPlayer/Programacao-WEB' ></Projects></li>
              </ul>

            </div>

            <div id='sobre_mim' className='pb-28'>

              <h1 className='ml-[6rem] mb-[50px] font-semibold text-[22px] text-[#55c385] font'>Interesses</h1>

              <ul className='flex gap-8 ml-[8rem] justify-center mb-6'>
                <Hobbies pageMode={false} >Escutar Música</Hobbies>
                <Hobbies pageMode={false} >Vôlei</Hobbies>
                <Hobbies pageMode={false} >Matemática</Hobbies>
                <Hobbies pageMode={false} >Basquete</Hobbies>
              </ul>

              <ul className='flex gap-8 ml-[8rem] justify-center'>
                <Hobbies pageMode={false} >Jogos</Hobbies>
                <Hobbies pageMode={false} >Comer</Hobbies>
                <Hobbies pageMode={false} >Programação</Hobbies>
                <Hobbies pageMode={false} >Estudar</Hobbies>
              </ul>

            </div>

          </main>
        </div>
      );
}