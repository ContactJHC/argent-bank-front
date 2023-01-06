




















export default function TransactionHeader({title, balance, legend}) {
  console.log('composant chargé', title, balance, legend)
  return (
    <div>
        <div id="header-title">{title}</div>
        <div id="header-balance">{balance}</div>
        <div id="header-legend">{legend}</div>
    </div>
  )
}

