function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                        Seja Bem Vinde à Famarcia da Abi!
                        </h2>
                    
                        <p>Vamos procurar pelo que precisa ! </p>
                    <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Todos nossos produtos
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl flex flex-col items-center">
                        <img
                            src="https://ik.imagekit.io/2zvbvzaqt/Acne%20treatment-amico.png?updatedAt=1744812483586"
                            alt="Imagem da Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
