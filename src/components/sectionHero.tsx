import heroImg from '../assets/herosection.png'

export default function SectionHero() {
  return (
    <div className="bg-cover h-screen bg-center" style={{
      backgroundImage:
        `url(${heroImg})`,
    }}>
      <div className='flex flex-col items-center h-[100%]  justify-center'>
        <div className='font-Sora mb-6 text-4xl sm:text-8xl md:text-9xl'>DOGETHER</div>
        <div className='text-base sm:text-3xl'>WOW EVM 🔸 MUCH DOGE 🔸 VERY CRYPTO</div>
      </div>

    </div>
  )
}


