import React from 'react'
import Navbar from './Navbar'

const DashboardLayout = ({ activeMenu, children }) => {
    return (
        <div className='min-h-screen bg-[#07170f] text-slate-100'>
            <Navbar activeMenu={activeMenu} />
            <main className='mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10'>
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout
