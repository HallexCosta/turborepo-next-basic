import {FC, ReactNode} from "react";

interface LineProps  {
    withDot?: boolean
    activityTime?: string
    children: ReactNode
}
export const Line = ({children, activityTime, withDot = false}: LineProps) => {
    const dot = withDot === null || withDot === true ? '•' : ''
    return (
        <div className="flex items-center justify-between">
            <p className="text-xs text-black font-normal">
                {dot} {children}
            </p>
        </div>
    )
}