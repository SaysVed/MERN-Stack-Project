import image from './../../images/geek.png'

export default function Footer(){
    return(
        <>
            <footer className="bg-white shadow dark:bg-gray-900 bottom-0 left-0 right-0 " id="foot">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex " >
                    <div className="sm:flex sm:items-center sm:justify-evenly">

                        <div className="flex items-center mb-4 sm:mb-0">
                            <a href="https://google.com/"><img src={image} width="100px" alt="logo" id="footer-logo"></img></a>
                        </div >

                        <div>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="https://google.com/" className="mr-4 hover:underline md:mr-6 ">About</a>
                            </li>
                            <li>
                                <a href="https://google.com/" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="https://google.com/" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                            </li>
                            <li>
                                <a href="https://google.com/" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                        </div>
                        
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm sm:text-center color text-white"><a href="https://google.com/" rel="noreferrer" target="_blank" className="hover:underline">GeekSquad</a></span>

                </div>
            </footer>

        </>
    )
}
