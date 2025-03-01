
interface totalPriceArrayProps {
  title: string;
  price: number;
}

const TotalPrice = () => {

const totalPriceArray:totalPriceArrayProps[] = [
  { title: 'Subtotal' , price: 0},
  { title: 'Delivery', price: 0},
  { title: 'Vat(7%)', price: 0},
  { title: 'Total Price', price: 0},
  
]
  return (
    <div>
        <label className="text-[#000000] font-bold" htmlFor="">Order summary</label>
       
            {
              totalPriceArray.map((data, index)=> {
                return(
                  <div className="grid grid-cols-2" key={index}> 
                    <div className="text-[#000000] text-opacity-60">{data.title}</div>
                    <div className="flex gap-1">
                      <div>฿</div>
                      <div>{data.price}</div>
                    </div>
                  </div>
                )
              })
            }
    </div>
  )
}
export default TotalPrice