'use client'

import {Tooltip} from 'react-tooltip'
import {useEffect, useState} from 'react'

export const Tooltips = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, []);
  
  return (
    <>
      {isMounted && <Tooltip id="default" />}
    </>
  )
}