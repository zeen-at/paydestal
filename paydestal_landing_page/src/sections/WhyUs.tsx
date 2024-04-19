import Paydestal from "../assets/paydestal.png";
import Check from "../assets/icons/check_icon.png";
import Certified from "../assets/icons/certified_icon.png"


const qualities = [ 
    "Effortless  electronic payments ",
    "Swiftly move funds between accounts",
    "Simplify your payments with USSD service",
    "Cross-border settlement service",
    "Transactions to external accounts  or beneficiaries"
]

const WhyUs = () => {
  return (
   
    <section className="body_container justify-between flexSpread  ">
       
        <div className="col_Layout gap-2 ">
            <img src={Certified} alt="certified_icon" className="images" />
            <p>Why Choose Us</p>
          <h3 className="header_typography leading-normal text-3xl">
            <span>Discover </span>
            <span className="text-[#F4B23E]">Endless Possibilities </span>
            
            <p>with Paydestal</p>
          </h3>
         
          <div className="py-4  ">
            {
                qualities.map((item) => (
                    <div className=" flexSpread gap-3 info-text py-2 text-left">

                        <img src={Check} alt="check_icon" width={30} height={30} className="images" />
    
                        <p>{item}</p>
                    </div>
                ))
            }
          </div>
        </div>


        <div className="hidden md:block">

        <img
          src={Paydestal}
          alt="hero_img"
          width={588}
          height={565.96}
          className="images"
        />
        </div>
    </section>
  );
};

export default WhyUs;
