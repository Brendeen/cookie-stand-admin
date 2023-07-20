import Head from "next/head";

export default function Home() {
  return (
    <>

      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between bg-green-500 p-8 text-5xl text-black">
        <h1>Cookie Stand Admin</h1>
      </header>

      <main className="bg-white text-black p-9 text-3xl">
        <div className="flex justify-center bg-green-400/60 p-3 rounded-md flex-col">

          <div className="flex flex-col">
            <h2 className="text-center text-black text-4xl">Create Cookie Stand</h2>
          </div>

          <div>
            <form className="p-3">

              <label className="text-black flex-shrink-0">Location</label>
              <input
                name="Location"
                className="border border-black p-2 flex-grow"
              />

            </form>
          </div>

          <div className="p-4">
            <form className="flex space-x-3 p-3">

              <div className="flex flex-col">
                <label className="text-black">Minimum Customers per Hour</label>
                <input
                  name="minCustomers"
                  type="number"
                  className="border border-black p-2"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-black">Maximum Customers per Hour</label>
                <input
                  name="maxCustomers"
                  type="number"
                  className="border border-black p-2"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-black">Average Cookies per Sale</label>
                <input
                  name="avgCookies"
                  type="number"
                  className="border border-black p-2"
                />
              </div>

              <button
                type="submit"
                className="bg-green-600 text-black px-4 py-2 text"
              >
                Create
              </button>
            </form>
          </div>

      </div>

      <p className="flex flex-col items-center p-9 space-y-8 text-2xl text-gray-600 pb-16">Report Table Coming Soon...</p>
    </main >

      <footer className="flex justify-between bg-green-500 p-8 text-3xl text-black bottom-0 fixed left-0 right-0">
        <p>©Brenden Moore 2023</p>
      </footer>

    </>
  );
}
