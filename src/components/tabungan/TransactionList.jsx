// src/components/tabungan/TransactionList.jsx
export default function TransactionList({ transactions }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="text-lg font-semibold mb-2">Daftar Tabungan</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-green-600 text-white">
            <th className="p-2">#</th>
            <th className="p-2">Judul</th>
            <th className="p-2">Nominal</th>
            <th className="p-2">Tanggal</th>
            <th className="p-2">Bukti</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((trx, index) => (
            <tr key={trx.id} className="border-t">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{trx.judul}</td>
              <td className="p-2">Rp {trx.nominal.toLocaleString()}</td>
              <td className="p-2">{new Date(trx.created_at).toLocaleDateString()}</td>
              <td className="p-2">
                {trx.bukti_url && (
                  <a href={trx.bukti_url} target="_blank" className="text-blue-600 underline">Lihat</a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
