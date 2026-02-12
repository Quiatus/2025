import { useParams } from "react-router-dom"
import { DUMMY_PRODUCTS } from "./Products"

export default function ProductDetail() {
  const params = useParams()

  const {title} = DUMMY_PRODUCTS.find(item => params.id === item.id)
  
  return (
    <>
      <h1>{title}</h1>
      <p>Product id: {params.id}</p>
    </>
  )
}
