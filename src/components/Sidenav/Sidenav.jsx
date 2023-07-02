// React
import { useState } from 'react'

// React Icons
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'

// Components
import SidenavItem from './SidenavItem'

const Sidenav = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden cursor-pointer' />
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <SidenavItem link='#main' stylePropsA='w-9/12 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' stylePropsSpan='pl-4' icon={AiOutlineHome} title='Home' />
            <SidenavItem link='#work' stylePropsA='w-9/12 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' stylePropsSpan='pl-4' icon={GrProjects} title='Trabalhos' />
            <SidenavItem link='#projects' stylePropsA='w-9/12 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' stylePropsSpan='pl-4' icon={AiOutlineProject} title='Projetos' />
            <SidenavItem link='#main' stylePropsA='w-9/12 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' stylePropsSpan='pl-4' icon={BsPerson} title='Resumo' />
            <SidenavItem link='#contact' stylePropsA='w-9/12 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' stylePropsSpan='pl-4' icon={AiOutlineMail} title='Contato' />
          </div>
        ) : (
          null
        )
      }

      <div className='md:block hidden fixed top-1/4 z-10'>
        <div className='flex flex-col'>
          <SidenavItem link='#main' stylePropsA='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' stylePropsSpan='' icon={AiOutlineHome} />
          <SidenavItem link='#work' stylePropsA='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' stylePropsSpan='' icon={GrProjects} />
          <SidenavItem link='#projects' stylePropsA='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' stylePropsSpan='' icon={AiOutlineProject} />
          <SidenavItem link='#main' stylePropsA='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' stylePropsSpan='' icon={BsPerson} />
          <SidenavItem link='#contact' stylePropsA='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' stylePropsSpan='' icon={AiOutlineMail} />
        </div>
      </div>
    </div>
  )
}

export default Sidenav