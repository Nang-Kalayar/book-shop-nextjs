import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>Admin Layout
        {children}
    </div>
  )
}
