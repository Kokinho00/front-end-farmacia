import { Link } from 'react-router-dom'
import remedio from '../../assets/remedio.png';

function Navbar() {
  return (
    <>
      <div className='w-full bg-quaseBranco text-white flex justify-center py-4'>
        <div className="container flex items-center justify-between text-lg">
          <div className="flex items-center gap-2">
            <img src={remedio} alt="" className='w-12 h-12' />
            <Link to='/home' className='text-2xl font-bold uppercase text-vermelho'>ULTRAFLAVIO</Link>
            <div className='h-full'>
              <Link to='/categorias' className='bg-slate-300 hover:bg-slate-700 hover:text-white  text-vermelho ml-6 py-2 px-4 rounded-l'>Categorias</Link>
              <Link to='/cadastrarCategorias'  className='bg-slate-300 hover:bg-slate-700 hover:text-white  text-vermelho ml-4 py-2 px-4 rounded-l'>Cadastrar</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
