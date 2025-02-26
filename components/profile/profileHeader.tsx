import { auth , signOut} from "@/auth";
import Image from "next/image";
import { LogoutAction } from "@/actions/logoutAction";
import Link from 'next/link'


const ProfileHeader = async () => {
  const session = await auth();
  console.log(session)
  return (
        <div className="p-5 flex gap-5">
          <Image
            src={session?.user?.image || '/globe.svg'}
            width={50}
            height={50}
            alt=""
          />
          <div>

          <div className="flex gap-2">
            <div>Email:</div>
            <div>{session?.user?.email}</div>
          </div>
          <div className="flex gap-2">
            <div>Name:</div>
            <div>{session?.user?.name}</div>
          </div>
          </div>
          <button onClick={LogoutAction}>Log out</button>

        </div>)
  
}
export default ProfileHeader