import Image from 'next/image'

export default function Home() {
  return (
   <>
   <div className='bg-gray-300 h-screen pt-6 flex flex-col items-center justify-center'>
    <div className=' shadow-sm w-[70%] border border-black h-40 mx-auto bg-red-300'> </div>
    <div className=' shadow-sm w-[70%] border border-black h-40 mx-auto mt-10 bg-blue-600 '> </div>
    <div className=' shadow-sm w-[70%] border border-black h-40 mx-auto mt-10 bg-yellow-400'> </div>

   </div>
   
   </>
  )
}
