import SectionTwoSVG from "./../assets/sectionTwoSVG.svg"

export default function Jumbotron() {
  return (
    <section className="mb-6 bg-cover bg-opacity-0 h-screen bg-center max-h-72" style={{
      backgroundImage:
        `url(${SectionTwoSVG})`,
    }}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-[#b89509] md:text-5xl lg:text-6xl">Join the Dogether Community now!</h1>
        <p className="mb-8 text-base font-normal text-white lg:text-xl sm:px-16 lg:px-48">Grab a Wallet, and 100 DOGETH from our Faucet to get you started!</p>
        <div>
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#b89509] hover:bg-[#cb9800] ">
            Get started
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </section>

  )
}