import { LogoutAction } from "@/actions/logoutAction";


const LogoutButton = () => {
  return (
    <button onClick={LogoutAction} className="border-2 py-1 rounded-xl font-bold">LOG OUT</button>
  )
}
export default LogoutButton