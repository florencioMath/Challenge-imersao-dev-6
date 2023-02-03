import logo from '../assets/logo-imersao-dev6.png'

export function Header() {
  return (
    <div className='w-auto h-1/4 bg-blue-800 flex items-center justify-between p-8'>
      <img src={logo} className='w-1/3' />
      <h1>Header</h1>
    </div>
  )
}