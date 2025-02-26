import { auth } from "@/auth";
import Image from "next/image";
import { LogoutAction } from "@/actions/logoutAction";
import { redirect } from "next/navigation";

const ProfileHeader = async () => {
  const session = await auth();

  if (session?.user?.role === "ADMIN") {
    redirect('/staff/admin'); 
  }
  if (session?.user?.role === "PREPRESS") {
    redirect('/staff/prepress'); 
  }

  

  return (
    <div className="p-5 flex gap-5">
      <Image
        src={session?.user?.image || "/globe.svg"}
        width={50}
        height={50}
        alt="User Image"
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
        <div className="flex gap-2">
          <div>Role:</div>
          <div>{session?.user?.role}</div>
        </div>
      </div>
      <button onClick={LogoutAction}>Log out</button>
    </div>
  );
};

export default ProfileHeader;
