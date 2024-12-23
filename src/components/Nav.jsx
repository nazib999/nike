import {headerLogo} from '../assets/images'
import {navLinks} from '../contants'
import { hamburger } from '../assets/icons'


const Nav = () => {
  return (

    <header className='absolute z-10 padding-x py-8 w-full'>
      <nav className='flex justify-between items-center max-container'>
      <a href="#">
      <img src={headerLogo} alt="logo" width={130} height={29}  />
    </a>
    <ul className='flex items-center justify-center flex-1 gap-16 max-lg:hidden'>
      {navLinks.map(item=>
      <li key={item.label}>
       <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{item.label}</a>
      </li>)}
    </ul>
    <div>
      <img src={hamburger} className='hidden max-lg:block' width={25} height={25} alt="" />
    </div>
      </nav>
    </header>
  )
}

export default Nav