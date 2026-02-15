import "./Results.css"
import Row from "./Row"

export default function Results({ results }) {
  return (
    <section id="result">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map(result => <Row key={result.year} result={result}/>)}
        </tbody>
      </table>
    </section>
  )
}
