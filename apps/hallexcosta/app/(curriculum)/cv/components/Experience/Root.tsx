import {twMerge} from "tailwind-merge";

export const Root = ({children, className = ''}) => {
    return (
        <div className={twMerge('', className)}>
            {children}
        </div>
    )
}