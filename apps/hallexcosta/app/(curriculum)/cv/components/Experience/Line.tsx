import {FC, ReactNode} from "react";

interface LineProps  {
    withDot?: boolean
    activityTime?: string
    children: ReactNode
}
export const Line = ({children, activityTime, withDot = false}: LineProps) => {
    withDot = withDot === null || withDot === true ? true : false
    return (
        <div className="flex items-center justify-between">
            <p className="text-xs text-black font-normal ">
                {withDot ? '● ' : ''}{children}
            </p>
            {activityTime && (<strong className="activity-time text-xs font-bold">{activityTime}</strong>)}
        </div>
    )
}