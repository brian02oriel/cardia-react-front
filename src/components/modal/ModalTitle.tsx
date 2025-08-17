import type { HTMLAttributes } from "react";

const ModalTitle = (props: HTMLAttributes<HTMLElement>) => {
    return (
        <h2 className="text-modalTitle font-bold" {...props}>
            {props.children}
        </h2>
    )
}

export default ModalTitle;