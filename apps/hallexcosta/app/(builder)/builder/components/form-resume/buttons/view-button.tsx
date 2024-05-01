'use client'

import { Button } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

export const ViewButton = () => {
  return (
    <Link href={'/cv/hallexcosta'} target="_blank" className="w-full">
      <Button color="green" className="w-full">
        Visualizar
      </Button>
    </Link>
  )
}
