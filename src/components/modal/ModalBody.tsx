
import type { HTMLAttributes } from "react";

const ModalBody = (props: HTMLAttributes<HTMLElement>) => {
    return (
        <div className="overflow-auto gap-4 border rounded-custom max-w-full max-h-full pt-4 pb-4 m-4 flex flex-col items-center" {...props}>
            {props.children}
        </div>
    )
}

export default ModalBody;