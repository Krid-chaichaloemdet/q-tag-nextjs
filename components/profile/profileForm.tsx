
import { auth } from '@/auth'

const ProfileForm = async() => {

    const session = await auth()

  return (
    <div>ProfileForm</div>
  )
}
export default ProfileForm