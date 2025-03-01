import { auth } from "@/auth";
import ProfileBody from "./profileBody";
import ProfileHeader from "./profileHeader";
import { redirect } from "next/navigation";
import ProfileFooter from "./profileFooter";
import LogoutButton from "./logoutButton";

const ProfileForm = async () => {

    const session = await auth();
    console.log(session?.user)


    if (session?.user?.role === "ADMIN") {
      redirect("/staff/admin");
    }
    if (session?.user?.role === "PREPRESS") {
      redirect("/staff/prepress");
    }


  return (
    <div className="p-5 h-screen w-screen flex flex-col gap-2">
      <ProfileHeader email={session?.user?.email || ''} name={session?.user?.name || ''} image={session?.user?.image || ''} />
      <ProfileBody member={session?.user?.memberType} credit={session?.user?.credit}/>
      <ProfileFooter />
      <LogoutButton />
    </div>
  );
};
export default ProfileForm;
