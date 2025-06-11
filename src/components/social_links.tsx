import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface LinkProps extends ComponentProps<'a'> {
    children: ReactNode;
    pageMode?: boolean;
}

export function SocialLink({pageMode, ...props}: LinkProps) {
    return (
        <a {...props} className={twMerge('flex items-center gap-2 px-5 lg:px-6 py-[12px] lg:py-[8px] ease-in-out duration-300 text-[20px] lg:text-[14px] rounded-xl transition hover:scale-125', pageMode ? 'hover:bg-[#568692] bg-[#568692] bg-opacity-15 text-[#568692] hover:text-[#ffffff]' : 'hover:bg-slate-500 bg-slate-500 bg-opacity-10 text-gray-100' )}>
            {props.children}
        </a>
    );
}
