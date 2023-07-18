


const CardItem = ({item_name, item_category, item_description, link, image}) => {
    return(
        <>
            
            <ul className="p-4 text-lg leading-6">
                <li>
                <img src={image} id="imaage"></img>
                    <a href={link} target="_blank" className="hover:bg-blue-500 hover:shadow-md group rounded-md bg-black shadow-xl">
                        <div>
                            <dl className="grid sm:block items-center">
                            
                                <dt className="sr-only">Title</dt>
                                <dd className="font-semibold text-slate-900">{item_name}</dd>
                            </dl>
                        </div>
                        <dl className="grid sm:block items-center">
                            <div>           
                                <dt className="sr-only">Category</dt>
                                <dd className="group-hover:text-blue-500">{item_category}</dd>
                            </div>
                        </dl>
                        <dl className="grid sm:block items-center">
                            <div>
                                <dt className="sr-only"> Item Description</dt>
                                <dd className="group-hover:text-blue-500">{item_description}</dd>
                            </div>
                        </dl>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default CardItem;