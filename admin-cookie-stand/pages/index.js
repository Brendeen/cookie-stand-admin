import { hourly_sales } from "../data";
import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CreateForm from "@/components/CreateForm";
import ReportTable from "@/components/ReportTable";

export default function Home() {

  const [allStands, setNewStands] = useState([]);


  function submitHandler(event) {
    event.preventDefault();
    // const hourly_sales = hourly_sales
    console.log(event.target.location.value);
    console.log(event.target.minCustomers.value);
    console.log(event.target.maxCustomers.value);
    console.log(event.target.avgCookies.value);
    // alert(event.target.location.value);

    const newStand = {
      location: event.target.location.value,
      // minCustomers: event.target.minCustomers.value,
      // maxCustomers: event.target.maxCustomers.value,
      // avgCookies: event.target.avgCookies.value,
      sales_per_hour: hourly_sales,
      total: hourly_sales.reduce((partialSum, a) => partialSum + a, 0),
    }

    setNewStands([...allStands, newStand]);
    console.log(allStands)
  }

  function getLatestStand() {
    if (allStands.length === 0) {
      return "Report Table Coming Soon..."
    }
    return allStands[allStands.length - 1].hourly_sales

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

        {/* Create form */}
        <CreateForm submitHandler={ submitHandler }/>
    

        {/* Table */}
        <ReportTable allStands={allStands}/>

      </main >

      <Footer allStands={ allStands }/>

    </>
  );
}
