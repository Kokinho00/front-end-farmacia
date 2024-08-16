import { Link } from 'react-router-dom'
import remedio from '../../assets/remedio.png';

function Navbar() {
  return (
    <>
      <div className='w-full bg-quaseBranco text-white flex justify-center py-4'>
        <div className="container flex items-center justify-between text-lg">
          <div className="flex items-center gap-2">
            <img src={remedio} alt="" className='w-12 h-12' />
            <Link to='/home' className='text-2xl font-bold uppercase text-vermelho'>FARMACIA FLAVINHO</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
