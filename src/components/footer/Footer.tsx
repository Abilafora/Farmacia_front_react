import { LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Farmacia da Abi -Tudo oque vc precisa| Copyright: {data}
                        </p>
                    <p className='text-lg'>Gostou do meu site, quer entrar em contato ? </p>
                    <div className='flex gap-2'>
                    <a href="https://www.linkedin.com/in/abiqueila-souza/" target="_blank">
                      <LinkedinLogo size={48} weight='bold' />
                    </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer