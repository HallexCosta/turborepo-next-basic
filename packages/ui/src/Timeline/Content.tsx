import { ReactNode } from "react"

interface ContentProps {
    children?: ReactNode
}

export function Content({children}: ContentProps) {
    return <div className="mb-6 ml-4 mt-2">
        {children}
    </div>
}