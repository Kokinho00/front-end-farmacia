import home from '../../assets/home.jpg';

function Home() {
    return (
        <>
            <div className="container bg-white flex">
                <div className='container grid grid-cols-2 text-white flex-grow'>
                    <div className="container flex py-10 flex-grow">
                        <h2 className='text-5xl font-bold text-vermelho ml-11 mt-64 w-'>Ultraflavio. Tá no coração da gente</h2>
                    </div>
                    <img src={home} alt="" className='w-auto h-auto mt-11 ml-14' />
                    <div className="flex justify-center">
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;