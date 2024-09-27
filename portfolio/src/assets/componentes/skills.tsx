import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SkillProps extends ComponentProps<'div'> {

  title: string;
  status: string;
  text: string;
  children: ReactNode;
  pageMode?: boolean;

};

export function Skills( props: SkillProps ){
    return (
      <div className={twMerge("flex cursor-pointer mb-6 justify-between shadow-md px-5 w-[37rem] py-4 rounded-lg border-solid", props.pageMode ? 'bg-[#b7d5ff9f] shadow-slate-400' : 'bg-[#68a681f5] shadow-slate-800' )}>
        <div className="">
            <h1 className={twMerge("font-mono text-[18px] mb-[1px]", props.pageMode ? 'text-[#3a77cc]' : 'text-[#242626]' )}>{props.title}</h1>
            <h2 className={twMerge("font-serif text-[17px] mb-[6px]", props.pageMode ? 'text-[#3a77cc]' : 'text-[#242626]' )}>{props.status}</h2>
            <h5 className={twMerge("font-serif text-[15px]", props.pageMode ? 'text-[#3a77cc]' : 'text-[#242626]' )}>{props.text}</h5>
        </div>
        <div className={twMerge("mt-[6px] text-[25px]", props.className)}>
          {props.children}
        </div>
      </div>
    );
}