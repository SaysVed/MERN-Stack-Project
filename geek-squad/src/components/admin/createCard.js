
function NewCard(){
    return(
        <>
            <div class="w-full max-w-xs">
                <form>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-ful px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-product-title">
                                Product Title
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-product-title" type="text" placeholder="Solid Tshirt" />
                            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="w-ful px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-product-title">
                                Product Description
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded h-24 min-h-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-product-description" type="textarea" placeholder="Prod Description" />
                            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div>
                            <input type="text" />
                            <div>image link</div>
                        </div>
                        <div>
                            <input type="text" />
                            <div>affiliate link</div>
                        </div>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
                </div>
        </>
    )
}
export default NewCard;