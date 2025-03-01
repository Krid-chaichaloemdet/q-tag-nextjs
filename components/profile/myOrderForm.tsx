import Image from "next/image"
import Link from "next/link"

const MyOrderForm = () => {
  return (
    <div className="w-[100%] h-[100%] ">
        <div className="flex justify-between py-2 px-2 items-center">
            <button className="flex gap-2">
                <Image alt="back arrow icon" width={20} height={20} src={'/profile/backIcon.svg'}/>
                <div>My Order</div>
            </button>
            <Link href={'/user/createOrder'} className="flex gap-2 border-[1px] rounded-md border-black  px-1 py-1">
            <Image alt="add new order icon" width={20} height={20} src={'/profile/addnewordericon.svg'}/>
                <div>Add new order</div>
            </Link>
        </div>
    </div>
  )
}
export default MyOrderForm