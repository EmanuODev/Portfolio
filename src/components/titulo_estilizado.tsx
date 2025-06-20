import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface Props extends ComponentProps<"h1"> {
    page_mode: boolean
}

export function TituloEstilizado( props: Props ) {
    return (
        <motion.h1 initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} className={twMerge("w-max text-[1.5rem] px-6 font-bold border-2 cursor-default mb-12 lg:mb-0", props.page_mode ? "border-r-8 border-b-8 text-[#488392] border-[#B0BEC5]  bg-zinc-50" : "border-r-8 border-b-8 text-gray-100 border-[#FFEDD5] border-opacity-60 bg-slate-500")}>{props.children}</motion.h1>
    )
}