import { Metadata } from "next"
type Props = {
    params : Promise<{productId: string}>
}
// export const metadata = {
//   title: "Product ID",
//   description: "Product description"
// }

export const generateMetadata = async({params} : Props) : Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `Product ${id}`
  }
}

export default async function ProductDetails({params} : Props) {
    const productId = (await params).productId
  return (
    <div>Product details  {productId} </div>
  )
}