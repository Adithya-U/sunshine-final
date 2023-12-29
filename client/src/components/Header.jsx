import { Link } from 'react-router-dom';
import logo1 from './logo1.png'
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <img src={logo1} width={180} height={100} alt="logo" />  
            {/*<span className='text-slate-500'>Sunshine</span>
            <span className='text-slate-700'>Builders</span>*/}
          </h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>


        </ul>
      </div>
    </header>
  );
}