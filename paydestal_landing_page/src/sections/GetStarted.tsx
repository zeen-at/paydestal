import RightArrow from "../assets/icons/arrow_right_icon.png"
const GetStarted = () => {
  return (
    <section className="bodyContainer flex justify-center">
        <div className=' bg-[#1B442A] w-full  md:w-2/3 items-center rounded-[50px] py-12 px-6 col_Layout'>
        <h1 className='header_typography text-white text-5xl'>Ready to get started?</h1>
        <p className='info-text py-4 text-white font-[100]'>It only takes a few minutes to register your FREE  account.</p>
        <button type="button" className='buttons bg-[#F4B23E] flex items-center gap-2 hover:bg-[#FFFFFF] hover:border-[#ffffff]'> 
        <p>Get Started </p>
        <img src={RightArrow} alt="right arrow" className="images" width={7}/> 
        </button>
      </div>
    </section>
  )
}

export default GetStarted;