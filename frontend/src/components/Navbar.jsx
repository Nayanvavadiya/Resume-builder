import { LogOut } from 'lucide-react'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Navbar = () => {
    const navigate = useNavigate()
    const { user, clearUser } = useContext(UserContext)

    const handleLogout = () => {
        localStorage.clear()
        clearUser()
        navigate('/')
    }

    const name = user?.name || 'Alex Kim'
    const initial = name.charAt(0).toUpperCase()

    return (
        <div className='sticky top-0 z-50 border-b border-white/10 bg-[#07170f]/95 backdrop-blur-xl'>
            <div className='mx-auto flex h-[82px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[96px] sm:px-8 lg:px-10'>
                <Link to='/' className='flex items-center gap-3 sm:gap-4'>
                    <div className='flex h-11 w-11 items-center justify-center rounded-md bg-gradient-to-br from-[#70d987] to-[#f0c84d] text-xl font-black text-[#07170f] shadow-lg shadow-green-500/10 sm:h-12 sm:w-12'>
                        R
                    </div>

                    <span className='text-xl font-black uppercase tracking-[0.34em] text-white sm:text-2xl'>
                        Resu<span className='text-[#40df8a]'>mint</span>
                    </span>
                </Link>

                <div className='flex items-center gap-3'>
                    <div className='hidden items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2.5 text-white sm:flex'>
                        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#6edb85] to-[#edc64f] text-base font-black text-[#07170f]'>
                            {initial}
                        </div>

                        <span className='max-w-[160px] truncate text-sm font-bold text-slate-200 sm:text-base'>
                            {name}
                        </span>
                    </div>

                    <button
                        type='button'
                        onClick={handleLogout}
                        className='flex h-11 items-center justify-center gap-2 rounded-md border border-[#2c875d] px-3 text-sm font-bold text-slate-100 transition-colors hover:bg-[#163d2b] sm:px-5'
                    >
                        <LogOut size={18} />
                        <span className='hidden sm:inline'>Logout</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
