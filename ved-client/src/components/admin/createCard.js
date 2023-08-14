import NavBar from '../common/Navbar';
import Footer from '../common/Footer';

function NewCard() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <div className="flex-grow mt-16 px-4"> 
        <div className="w-full max-w-xs mx-auto"> 
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grid-product-title">
              Product Name
            </label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="grid-product-title" type="text" placeholder="Solid Tshirt" />
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grid-product-description">
              Product Description
            </label>
            <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24" id="grid-product-description" placeholder="Prod Description"></textarea>
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
          <div className="mb-4">
          <div>Item Image Link</div>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
          </div>
          <div className="mb-4">
            <div>Item Price</div>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
          </div>
          <div className="mb-4">
            <div>Item Affiliate Link</div>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
          </div>
          <div className="flex items-center justify-center"> 
            <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" type="submit" value="Submit"/>
          </div>
        </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default NewCard;
