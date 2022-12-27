const Form = () => {
    return (
        <form className="text-center">
            <div className="flex gap-10 md:grid md:grid-cols-2 mx-6 my-12">
                <section className="">
                    <label>Task Name: </label>
                    <input type='text' ></input>
                </section>
                <section>
                    <label>Task Description (Optional): </label>
                    <input type='text' ></input>
                </section>
            </div>

            <button className="mb-12 py-1 rounded-md bg-green-400/80">Add Task</button>
        </form>
    )
}

export default Form;