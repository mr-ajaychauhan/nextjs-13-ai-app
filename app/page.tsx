import Link from "next/link";


export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">The Best App</h1>
        <p className='text-2xl text-white/60 mb-4'>This is best App ever for tracking your mood.</p>
        <div>
          <Link href='/login'>
            <button className='bg-blue-600 rounded-lg py-2 px-4 text-xl'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
