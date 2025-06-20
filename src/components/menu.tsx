import { ComponentProps, ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
import { ButtonMenu } from "./button_menu";
import { motion } from "framer-motion";


interface MenuProps extends ComponentProps <'ul'> {

    options: {
        url: string,
        title: string,
        icon: ReactNode,
    } [],
    setModal: Function,
    pageMode: boolean

}

export function Menu ( props: MenuProps ) {


    return (
        <motion.div exit={ { scale: 0 } } className="fixed w-full z-30">
            <motion.div animate={ { scale: [0, 1] } } className={`flex items-center justify-between py-3 px-12 ${props.pageMode ? "bg-[#568692]" : "bg-slate-500"}`}>
                <h1 className="text-2xl text-white font-outfit">Menu</h1>
                <ButtonMenu pageMode={true} className="py-2 px-2 text-[1.4rem]" setModal={props.setModal} status={false}><IoMdClose /></ButtonMenu>
            </motion.div>
            <motion.ul animate={ { translateY: [-100, 20, -10, 0] } } className="w-full">
                {props.options.map((option) => 
                    <a className="w-full" href={option.url}>
                        <li className={`w-full flex items-center justify-center py-3 text-white font-outfit gap-x-3 ${props.pageMode ? "bg-[#568692]" : "bg-slate-500"}`}>
                            <h1 className="text-[1.3rem]">{option.icon}</h1>
                            <h1>{option.title}</h1>
                        </li>
                    </a>
                )}
            </motion.ul>
        </motion.div>
    )

}