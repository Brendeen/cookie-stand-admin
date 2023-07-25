import { hourly_sales } from "../data";
import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {

  const [newStands, setNewStands] = useState([]);



  function submitHandler(event) {
    event.preventDefault();
    // console.log(event.target.location.value);
    // console.log(event.target.minCustomers.value);
    // console.log(event.target.maxCustomers.value);
    // console.log(event.target.avgCookies.value);
    // alert(event.target.location.value);
    hourly_sales

    // const newStand
    
    setNewStands([...newStands, hourly_sales]);
    console.log(newStands)
  }

  function getLatestStand() {
    if (newStands.length === 0) {
      return "Report Table Coming Soon..."
    }
    return newStands[newStands.length - 1].hourly_sales

  }

  return (
    <>

      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      {/* Header (title) */}
      <Header />


      <main className="bg-white text-black p-9 text-3xl">
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

        {/* Table */}
        <div className="p-4" >
          <table className="w-full">
            <thead>
              <tr>
                <th className="border border-black p-2 text-lg">Location</th>
                <th className="border border-black p-2 text-lg">6am</th>
                <th className="border border-black p-2 text-lg">7am</th>
                <th className="border border-black p-2 text-lg">9am</th>
                <th className="border border-black p-2 text-lg">10am</th>
                <th className="border border-black p-2 text-lg">11am</th>
                <th className="border border-black p-2 text-lg">12am</th>
                <th className="border border-black p-2 text-lg">1am</th>
                <th className="border border-black p-2 text-lg">2am</th>
                <th className="border border-black p-2 text-lg">3am</th>
                <th className="border border-black p-2 text-lg">4am</th>
                <th className="border border-black p-2 text-lg">5am</th>
                <th className="border border-black p-2 text-lg">6am</th>
                <th className="border border-black p-2 text-lg">7am</th>
                <th className="border border-black p-2 text-lg">Totals</th>
              </tr>
            </thead>
            <tbody>
              {/* table data */}
            </tbody>
          </table>
        </div>

        {/* <p className="flex flex-col items-center p-9 space-y-8 text-2xl text-gray-600 pb-16">Report Table Coming Soon...</p> */}
      </main >

      <footer className="flex justify-between bg-green-500 p-8 text-3xl text-black bottom-0 fixed left-0 right-0">
        <p>{newStands.length} Locations World Wide</p>
      </footer>

    </>
  );
}
