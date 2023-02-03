import { Link } from 'react-router-dom'
import logo from '../assets/logo-imersao-dev6.png'

export function Header() {
  return (
    <div className='w-auto h-[10vh] bg-blue-800 flex items-center justify-between p-8'>
      <Link to={'/'}>
        <img src={logo} className='w-1/3' />
      </Link>
      <h1>Header</h1>
    </div>
  )
}