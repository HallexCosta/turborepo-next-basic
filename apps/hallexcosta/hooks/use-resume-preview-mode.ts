import {useState} from "react";

export const useResumePreviewMode = () => {
    const themes = {
        builderResume: 'bg-gray-800',
        previewResume: 'bg-white'
    }
    const [showPreviewMode, setShowPreviewMode] = useState(false)
    const [theme, setTheme] = useState(themes.builderResume)

    const enablePreviewMode = () => {
        setShowPreviewMode(true)
        setTheme(themes.previewResume)
        console.log('disabled preview mode')
        console.log(theme)
        // setTimeout(() => setShowPreviewMode(false), 4000)
    }
    const disablePreviewMode = () => {
        console.log('disabled preview mode')
        setShowPreviewMode(false)
        setTheme(themes.builderResume)
        console.log(theme)
    }

    return {
        theme,
        enablePreviewMode,
        disablePreviewMode,
        showPreviewMode
    }
}