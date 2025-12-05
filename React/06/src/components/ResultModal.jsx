export default function ResultModal({ result, ref, targetTime }) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>The target time was <strong>{targetTime}</strong> second{targetTime > 1 ? 's' : ''}.</p>
      <p>You stopped the timer with <strong>X seconds left.</strong></p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  )
}
