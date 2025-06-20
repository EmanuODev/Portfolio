import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonMenuProps extends ComponentProps <'button'> {

    setModal: Function,
    children: ReactNode,
    status: boolean,
    pageMode: boolean

}

export function ButtonMenu ( props: ButtonMenuProps ) {


    return (
        <button onClick={() => props.setModal(props.status)} className={twMerge(`py-3 px-3 rounded-lg ${props.status ? `text-white ${props.pageMode ? "bg-[#568692]" : "bg-slate-500"}` : "bg-white text-[#568692]"}`, props.className)}>
            {props.children}
        </button>
    )

}