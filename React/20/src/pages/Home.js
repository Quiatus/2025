import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  function navigateHandler() {
    navigate('/products')
  }

  return (
    <div>
      <h1>Home</h1>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </div>
  )
}
