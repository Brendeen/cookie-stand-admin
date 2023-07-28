
export default function CreateForm({ submitHandler }) {
  return (

    <div className="flex justify-center bg-green-400/60 p-3 rounded-md flex-col">

          <div className="flex flex-col">
            <h2 className="text-center text-black text-4xl">Create Cookie Stand</h2>
          </div>

          <div>
            <form className="p-3" onSubmit={submitHandler}>
              <label className="text-black flex-shrink-0">Location</label>
              <input
                name="location"
                type="text"
                className="border border-black p-2 flex-grow"
              />

              <div className="flex space-x-3 mt-3">
                <div className="flex flex-col flex-grow">
                  <label className="text-black">Minimum Customers per Hour</label>
                  <input
                    name="minCustomers"
                    type="number"
                    className="border border-black p-2"
                  />
                </div>

                <div className="flex flex-col flex-grow">
                  <label className="text-black">Maximum Customers per Hour</label>
                  <input
                    name="maxCustomers"
                    type="number"
                    className="border border-black p-2"
                  />
                </div>

                <div className="flex flex-col flex-grow">
                  <label className="text-black">Average Cookies per Sale</label>
                  <input
                    name="avgCookies"
                    type="number"
                    className="border border-black p-2"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-black px-4 py-2 mt-3"
                >
                  Create
                </button>
              </div>

            </form>
          </div>
        </div>

  )
}