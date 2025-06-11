import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface LinkProps extends ComponentProps<'a'> {
    children: ReactNode,
    page_mode: boolean
}

export function IconsLink(props: LinkProps) {
    return (
        <a {...props} className={twMerge("flex items-center gap-2 px-2 py-[8px] transition ease-in-out delay-150 duration-300 hover:scale-110 text-[2.3rem] hover:bg-opacity-15 rounded-xl", props.page_mode ? "hover:bg-[#568692] text-[#568692] hover:text-[#568692]" : "hover:bg-[#e5d8b5] text-[#f7eaea] hover:text-[#f7eaea]")}>
            {props.children}
        </a>
    );
}
