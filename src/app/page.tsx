import Image from 'next/image'
import HomeBooks from '@/views/homeBooks'
export default function Home() {
  return (
    <div> 
      {/* @ts-expect-error Server Component */}
      <HomeBooks /> </div>
  )
}
