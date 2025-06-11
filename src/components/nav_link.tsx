import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface LinkProps extends ComponentProps<'a'> {
    pageMode?: boolean;
}

export function Link({ pageMode, ...props}: LinkProps){
    return(
        <a {...props} className={twMerge('font-semibold px-14 pt-[14px] pb-[24px] hover:underline underline-offset-[12px] ease-in-out duration-300 text-[18px] rounded-md ', pageMode ? 'hover:bg-[#568692] text-[#568692] hover:text-[#ffffff]' : 'hover:bg-slate-500 text-gray-100' ) } >
            {props.children}
        </a>
    )
}