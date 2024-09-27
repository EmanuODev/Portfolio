import { twMerge } from "tailwind-merge";

type ProjectsProps = {

  title: string;
  link: string;
  pageMode?: boolean;
  
};

export function Projects( props: ProjectsProps ){
    return (
      <div className={twMerge("mb-6 shadow-md px-3 py-6 w-[21rem] h-[11rem] rounded-lg border-solid", props.pageMode ? 'bg-[#b7d5ff9f] shadow-slate-400' : 'bg-[#68a681fb] shadow-slate-800')}>
        <h1 className={twMerge("font-[575] text-[20px] mb-[15px] text-center", props.pageMode ? 'text-[#3a77ccda]' : 'text-[#353838be]' )}>{props.title}</h1>
        <a href={props.link} target="_blank" className="whitespace-pre-line text-center text-[15px] text-[#0000ff9e] underline">{props.link}</a>
      </div>
    );
}