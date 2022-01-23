const AmountTable = (props) => {
  return (
    <table className="w-full">
      <thead className="text-left text-xl">
        <tr>
          <th className="w-1/2 p-1 border-2">RECETTES</th>
          <th className="w-1/2 p-1 border-2">DÉPENSES</th>
        </tr>
      </thead>
      <tbody>
        <>
          {datas.map(({ amount, description }, id) => (
            <tr
              key={id}
              className={`${
                id % 2 === 0 ? "bg-slate-100" : "bg-white"
              } w-full text-right text-lg`}
            >
              {amount > 0 ? (
                <>
                  <td className="w-1/2 p-1 border-x-2">
                    <p className="font-bold text-green-500">{amount} €</p>
                    <p>{description}</p>
                  </td>
                  <td className="w-1/2 p-1 border-x-2"></td>
                </>
              ) : (
                <>
                  <td className="w-1/2 p-1 border-x-2"></td>
                  <td className="w-1/2 p-1 border-x-2">
                    <p className="font-bold text-red-500">{amount} €</p>
                    <p>{description}</p>
                  </td>
                </>
              )}
            </tr>
          ))}
        </>
        <tr className="w-full text-xl">
          <td className="w-1/2 p-1 border-2">
            <div className="flex flex-row items-center justify-between">
              <p className="font-bold">TOTAL DES RECETTES</p>
              <TotalIncoming />
            </div>
          </td>
          <td className="w-1/2 p-1 border-2">
            <div className="flex flex-row items-center justify-between">
              <p className="font-bold">TOTAL DES DÉPENSES</p>
              <TotalOutgoin />
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot className="w-full border-2">
        <tr>
          <td colSpan="2" className="w-full p-1 border-2 ">
            <div className="flex flex-row items-center justify-between px-5 py-3 text-2xl">
              <p className="font-bold">RÉSULTATS</p>
              <TotalAmount />
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default AmountTable
