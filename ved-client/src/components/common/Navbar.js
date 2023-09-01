const Navbar = () => {
    return (
        <>
        <div className="bg-black top-0 w-full h-16 flex justify-evenly items-center text-white shadow-sm font-mono fixed" role="navigation">        
            <div className="pl-8 ">
                <ul className="flex ">
                    <li className="p-4"> <a href="#" className="text-sky-400 ">Home</a></li>
                    <li className="p-4"><a href="#">About</a></li>
                    <li className="p-4"><a href="#">Shop</a></li>
                    <li className="p-4"><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
        </>
    );
}
export default Navbar;