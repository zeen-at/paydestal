import HeroImg from "../assets/hero_img.png";
import CustomButton from "../components/CustomButton";
import RightArrow from "../assets/icons/arrow_right_icon.png";

const Hero = () => {
  return (
    <section className="body_container gap-10 flexSpread">
        <div className="col_Layout ">
          <h1 className="header_typography">
            <p>The future of </p>
            <span className="text-[#F4B23E]">Payment </span>
            Processing
            <p>and Settlement</p>
          </h1>
          <div className=" info-text hidden md:block">
          <p>Revolutionizing financial transactions with a comprehensive suite of services</p>
          <p>ensuring seamless and secure payment solutions for diverse needs</p>
          </div>
          <div className="info-text text-center block md:hidden">
          <p>Revolutionising financial transactions with a comprehensive suite of services, ensuring seamless and secure payment solutions for diverse needs</p>
          </div>
          <div className="py-4 ">
            <CustomButton type={"button"} label="Get Started" icon={RightArrow}/>
          </div>
        </div>


        <div className="hidden md:block">

        <img
          src={HeroImg}
          alt="hero_img"
          width={588}
          height={565.96}
          className="images"
        />
        </div>
    </section>
  );
};

export default Hero;
