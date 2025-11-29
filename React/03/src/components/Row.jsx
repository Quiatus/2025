import { formatter } from "../util/investment"

export default function Row({result}) {
  console.log(result)
  return (
    <tr>
      <td>{result.year}</td>
      <td>{formatter.format(result.valueEndOfYear)}</td>
      <td>{formatter.format(result.interest)}</td>
      <td>{formatter.format(result.valueEndOfYear-result.investedValue)}</td>
      <td>{formatter.format(result.investedValue)}</td>
    </tr>
  )
}
