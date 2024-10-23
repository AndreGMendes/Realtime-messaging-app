import StreamChat from '@/components/stream-chat'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'

export default async function Welcome() {
  const user = await currentUser()

  if (!user)
    return (
      <section className='py-24'>
        <div className='container'>
          <h1 className='font-serif text-3xl font-bold'>
            Please Sign in first.
          </h1>
        </div>
      </section>
    )

  const userData = {
    id: user.id,
    ...(user.fullName ? { name: user.fullName } : {}),
    ...(user.imageUrl ? { image: user.imageUrl } : {})
  }

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='font-serif text-3xl font-bold'>
          Welcome, {userData.name}
        </h1>
        <div className='mt-3 text-muted-foreground'>
          <p>
            This is a place where you can share your ideas in realtime with
            others.
          </p>
          <p className='mb-8'>Be kind and respectfull.</p>
          <i className='brightness-60 text-sm'>
            "We think too much and feel too little. More than machinery we need
            humanity. More than cleverness we need kindness and gentleness."
          </i>
          <span>
            <small className='ml-2 font-bold text-white text-xxs'>
              {' '}
              Charlie Chaplin, "The Great Dictator"
            </small>
          </span>
        </div>
        {/* <Image
          src='/media/images/charlie-chaplin-drawing.png' 
          width={88}
          height={88}
          alt='Picture of the author'
        /> */}
      </div>
    </section>
  )
}
