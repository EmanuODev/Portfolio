import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";


interface SkillProps extends ComponentProps<'div'> {
  
  children: ReactNode;
  title: string;
  text: string;
  page_mode?: boolean;

};

export function Skills( props: SkillProps ){
  return (

    //w-[38rem] 2xl:w-[43rem] gap-10 flex justify-between items-center  transition-colors duration-300 shadow-lg rounded-lg border-solid cursor-default divide-x-2
    <div className={twMerge("relative overflow-hidden group flex h-[10rem] lg:h-[8rem] 2xl:h-[12rem] gap-x-2 w-full")}>

      <span className={twMerge("absolute inset-0 z-20 bg-gradient-to-r to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out opacity-30", props.page_mode ? "from-white via-white " : "from-[#48839286] via-[#48839286] ")} />
      
      <div className="p-1 w-[20%] 2xl:w-[12rem] h-full bg-slate-200 bg-opacity-60 rounded-l-2xl rounded-e-lg">
        <div className={twMerge("flex justify-center items-center rounded-l-2xl rounded-e-lg h-full w-full", props.page_mode ? " bg-slate-500" : "bg-gray-100")}>
          {props.children}
        </div>
      </div>

      <div className="p-1 w-[80%] 2xl:w-[37rem] h-full bg-slate-200 bg-opacity-60 rounded-e-2xl rounded-l-lg">
        <div className={twMerge("flex flex-col gap-1 lg:gap-2 z-10 py-[0.8rem] sm:py-[0.8rem] 2xl:py-6 px-4 2xl:px-8 h-full rounded-e-2xl rounded-l-lg", props.page_mode ? 'bg-[#488392] shadow-slate-400' : 'bg-slate-500 shadow-slate-800')}>
          <h1 className={twMerge("font-mono font-bold text-[1.3rem] lg:text-[1.45rem] 2xl:text-[1.7rem]", props.page_mode ? 'text-slate-200' : 'text-gray-100')}>
            {props.title}
          </h1>
          <h5 className={twMerge("font-serif text-[0.9rem] lg:text-[1rem] 2xl:text-[1.1em]", props.page_mode ? 'text-slate-200' : 'text-gray-100')}>
            {props.text}
          </h5>
        </div>
      </div>

    </div>
  );
}