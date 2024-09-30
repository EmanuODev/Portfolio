import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface LinkProps extends ComponentProps<'a'> {
    children: ReactNode;
    pageMode?: boolean;
}

export function SocialLink({pageMode, ...props}: LinkProps) {
    return (
        <a {...props} className={twMerge('flex items-center gap-2 px-6 py-[8px] ease-in-out duration-300 text-[14px] rounded-xl', pageMode ? 'hover:bg-[#568692] bg-[#568692] bg-opacity-15 text-[#568692] hover:text-[#ffffff]' : 'hover:bg-[#F2E2BE] bg-[#F2E2BE] bg-opacity-10 text-[#F2E2BE] hover:text-[#ffffff]' )}>
            {props.children}
        </a>
    );
}
