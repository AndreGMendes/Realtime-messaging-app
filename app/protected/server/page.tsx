import { currentUser } from '@clerk/nextjs/server'

export default async function Page() {
  const user = await currentUser()

  console.log(`This is a server-side page :: Shows up in Server's Terminal`)

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>This is a server-side page</h1>
        <p className='mt-4'>You are logged in as {user?.firstName}</p>
      </div>
    </section>
  )
}
