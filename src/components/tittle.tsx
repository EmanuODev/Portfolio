import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TittleProps extends ComponentProps<'h1'> {
    children: string,
    page_mode: boolean
}

export function Tittle ( {...props}: TittleProps ) {
    return (
        <h1 className={twMerge('text-center sm:text-start sm:ml-[6rem] font-outfit font-bold text-[2.8em] shadow-inherit', props.page_mode ? "text-[#568692]" : " text-[#B0BEC5]", props.className)}>{props.children}</h1>
    )
}