import StreamChat from '@/components/stream-chat'
import { currentUser } from '@clerk/nextjs/server'

export default async function Chat() {
  const user = await currentUser()

  if (!user) return null

  const userData = {
    id: user.id,
    ...(user.fullName ? { name: user.fullName } : {}),
    ...(user.imageUrl ? { image: user.imageUrl } : {})
  }

  return <StreamChat userData={userData} />
}