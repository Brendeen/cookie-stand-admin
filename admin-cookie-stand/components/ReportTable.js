
export default function ReportTable({ allStands }) {
  return (
    
    <div className="p-4" >
          <table className="w-full">
            <thead>
              <tr>
                <th className="border border-black p-2 text-lg">Location</th>
                <th className="border border-black p-2 text-lg">6am</th>
                <th className="border border-black p-2 text-lg">7am</th>
                <th className="border border-black p-2 text-lg">8am</th>
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

              {allStands.map((stand, index) => (
                <tr key={index}>
                  <td className="border border-black p-2 text-lg">{stand.location}</td>
                  {stand.sales_per_hour.map((sale, saleIndex) => (
                    <td key={saleIndex} className="border border-black p-2 text-lg">
                      {sale}
                    </td>
                  ))}
                  <td className="border border-black p-2 text-lg">{stand.total}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

  )
}

