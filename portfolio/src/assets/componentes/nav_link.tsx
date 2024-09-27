import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface LinkProps extends ComponentProps<'a'> {
    pageMode?: boolean;
}

export function Link({ pageMode, ...props}: LinkProps){
    return(
        <a {...props} className={twMerge('scroll-smooth font-medium px-14 pt-[14px] pb-[24px] hover:underline underline-offset-[12px] ease-in-out duration-300 text-[18px] rounded-md', pageMode ? 'hover:bg-[#78AAF0] text-[#789EF0] hover:text-[#ffffff]' : 'hover:bg-[#52be81] text-[#55c385] hover:text-[#ffffff]' ) } >
            {props.children}
        </a>
    )
}