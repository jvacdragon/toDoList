const Layout = (props) => {
    return (
        <section className="overflow-y-scroll shadow-2xl w-72 h-80 md:w-80 md:h-96 bg-white px-6 rounded-xl pb-6 mx-auto my-12 text-left">
            <h1 className="pt-4 relative">{props.title}</h1>
            
            <ul className="">
                <li className="bg-gray-300 rounded-md p-4 my-4 ">
                    <article className=" ">
                        <h2>Task Name</h2>
                        <hr className="w-20 my-2" />
                        {props.description && <p className="my-4">Task description</p>}
                    </article>
                    <div className="flex gap-4 text-center">
                        <button className="bg-red-500/60  rounded-md">Discard</button>
                        {props.next && <button className="bg-blue-400/60  rounded-md">{props.next}</button>}
                    </div>
                </li>

                <li className="bg-gray-300 rounded-md p-4 my-4 ">
                    <article className=" ">
                        <h2>Task Name</h2>
                        <hr className="w-20 my-2" />
                        {props.description && <p className="my-4">Task description</p>}
                    </article>
                    <div className="flex gap-4 text-center">
                        <button className="bg-red-500/60  rounded-md">Discard</button>
                        {props.next && <button className="bg-blue-400/60  rounded-md">{props.next}</button>}
                    </div>
                </li>

                <li className="bg-gray-300 rounded-md p-4 my-8 ">
                    <article className=" ">
                        <h2>Task Name</h2>
                        <hr className="w-20 my-2" />
                        {props.description && <p className="my-4">Task description</p>}
                    </article>
                    <div className="flex gap-4 text-center">
                        <button className="bg-red-500/60  rounded-md">Discard</button>
                        {props.next && <button className="bg-blue-400/60  rounded-md">{props.next}</button>}
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Layout;