export default async function ProductDetails({params} : {
    params : Promise<{productId: string}>
}) {
    const productId = (await params).productId
  return (
    <div>Product details  {productId} </div>
  )
}