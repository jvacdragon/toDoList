const Form = () => {
    return (
        <form className="text-center my-20">
            <div className="grid grid-cols-1 gap-10  md:grid-cols-2 mx-6 my-12">
                <section className="inline-block">
                    <label>Task Name: </label>
                    <input type='text' ></input>
                </section>
                <section>
                    <label>Task Description (Optional): </label>
                    <input type='text' ></input>
                </section>
            </div>

            <button className="py-1 rounded-md bg-green-400/80">Add Task</button>
        </form>
    )
}

export default Form;