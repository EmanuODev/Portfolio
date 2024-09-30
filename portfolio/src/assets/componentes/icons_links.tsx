import { ComponentProps, ReactNode } from "react";

interface LinkProps extends ComponentProps<'a'> {
    children: ReactNode;
}

export function IconsLink(props: LinkProps) {
    return (
        <a {...props} className="flex items-center gap-2 px-2 py-[8px] ease-in-out duration-300 text-[40px] hover:bg-[#568692] hover:bg-opacity-15  text-[#568692] hover:text-[#568692] rounded-xl">
            {props.children}
        </a>
    );
}
