import { MetaData } from "next"
type Props = {
    params : Promise<{productId: string}>
}
// export const metadata = {
//   title: "Product ID",
//   description: "Product description"
// }

export const generateMetaData = async({params} : Props) : Promise<MetaData> => {
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