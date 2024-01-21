import SectionTwoSVG from "./../assets/sectionTwoSVG.svg"

export default function SectionTwo() {
  return (
    <div className="bg-cover bg-opacity-0 h-screen bg-center max-h-60" style={{
      backgroundImage:
        `url(${SectionTwoSVG})`,
    }}>
      <div className='flex flex-col items-center h-[100%]  justify-center'>
        <div className='text-center text-[#b89509] font-semibold text-2xl sm:text-3xl'>NO ICO <span className="text-white">|</span> NO PREMINE <span className="text-white">|</span> ETHASH POW</div>
      </div>

    </div>
  )
}