import type { HTMLAttributes } from "react";

const ModalSubtitle = (props: HTMLAttributes<HTMLElement>) => {
    return (
        <h2 className="text-modalSubtitle font-semibold" {...props}>
            {props.children}
        </h2>
    )
}

export default ModalSubtitle;