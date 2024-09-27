import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface LinkProps extends ComponentProps<'a'> {
    children: ReactNode;
    pageMode?: boolean;
}

export function SocialLink({pageMode, ...props}: LinkProps) {
    return (
        <a {...props} className={twMerge('flex items-center gap-2 px-6 py-[8px] ease-in-out duration-300 text-[14px] rounded-xl', pageMode ? 'hover:bg-[#78AAF0] bg-[#78AAF0] bg-opacity-15 text-[#78AAF0] hover:text-[#ffffff]' : 'hover:bg-[#52be81] bg-[#52be81] bg-opacity-10 text-[#55c385] hover:text-[#ffffff]' )}>
            {props.children}
        </a>
    );
}
