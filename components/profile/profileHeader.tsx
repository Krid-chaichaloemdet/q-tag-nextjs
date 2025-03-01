import { auth } from "@/auth";
import Image from "next/image";
import { LogoutAction } from "@/actions/logoutAction";
import { redirect } from "next/navigation";

interface profileHeaderArrayProps {
  title: string;
  key: string;
}

interface UserData {
  name: string;
  email: string;
  image: string;
}

const ProfileHeader: React.FC<UserData> = async ({ email, image, name }) => {
  const profileHeaderArray: profileHeaderArrayProps[] = [
    { title: "Email", key: name || "--" },
    { title: "Name", key: email || "--" },
  ];

  return (
    <div className="px-5 py-5 flex gap-5 ">
      <div className="bg-[#F0F0F0] w-[70px] h-[50px] flex items-center justify-center rounded-full">
        <Image
        className="rounded-full"
          src={image || "/profile.svg"}
          width={70}
          height={70}
          alt="User Image"
        />
      </div>
      <div className="w-full">
        <table className=" w-[100%]">
          <tbody className="w-[100%]">
            {profileHeaderArray.map((data, index) => {
              return (
                <tr className=" " key={index}>
                  <td className=" ">{data.title} </td>
                  <td className="px-2">:</td>
                  <td>{data.key}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <button onClick={LogoutAction}>Log out</button> */}
    </div>
  );
};

export default ProfileHeader;
