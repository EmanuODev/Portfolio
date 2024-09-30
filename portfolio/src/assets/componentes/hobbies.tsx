import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface HobbiesProps extends ComponentProps <'h1'> {
    pageMode?: boolean;
}

export function Hobbies( {pageMode, ...props}: HobbiesProps ){
    return (
        <div className={twMerge("cursor-pointer h-[2.3em] w-[20rem] text-center pt-[5px] border shadow-md", pageMode ? 'bg-[#568692]' : 'bg-[#52be81e7] border-[#59645e]' )}>
            <h1 className="text-[#FFFFFF]">{props.children}</h1>
        </div>
    );
}