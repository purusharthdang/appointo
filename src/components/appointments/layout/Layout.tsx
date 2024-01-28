import React from 'react'
import './layout.css'
import { LayoutProps } from './layout.types'

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='layout'>{children}</div>
    )
}

export default Layout