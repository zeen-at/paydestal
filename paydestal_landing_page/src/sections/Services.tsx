import ServiceCards from "../components/ServiceCards";
import Transfer from "../assets/icons/transfer_icon.png"
import Bank from "../assets/icons/bank_icon.png"
import Card from "../assets/icons/card_icon.png"
import Payment from "../assets/icons/payment_icon.png";
import { CardProps } from "../components/ServiceCards";


const services = [ 
  {
    icon: Transfer,
    title: "Pay-Out Transfers",
    subtext: "Our smooth withdrawal process allows you to initiate withdrawals with just a few clicks. Plus real-time tracking and reporting to monitor withdrawal activity and ensure timely disbursal of funds."
  },
  {
    icon: Bank,
    title: "Bank Transfer",
    subtext: "Our Bank Transfer Payments service is a provides you with a hassle-free and secure way to receive payment. Navigate your transactions and enjoy the simplicity of swift bank transfers."
  },
  {
    icon: Payment,
    title: "USSD Payments",
    subtext: "Our USSD Payments service ensures that your financial transactions are always within reach. Stay in control of your transactions and embrace a new era of effortless financial interactions."
  },
  {
    icon: Card,
    title: "Card Payments",
    subtext: "Our secure and efficient platform ensures that your funds are collected promptly and securely, allowing you to focus on growing your business without worrying about payment hassles."
  },
]

const Services = () => {
  return (
    <section className="body_container gap-4 lg:flexSpread">
      <div className="col_Layout text-start gap-2 w-full lg:w-2/5">
        <p className="hidden lg:block font-[600]">Our Services</p>
        <h1 className="header_typography text-xl lg:text-4xl">
          <span>Simple. </span>
          <span className="text-[#F4B23E]">Transparent. </span>
          <span>Secure.</span>
        </h1>
        <div className="info-text">
          <p>
            With customisable features and real-time reporting, managing your
            business has never been easier. Trust our expertise to optimise your
            payment process and enhance your business efficiency.
          </p>
          <p className="info-text">
            All your business financial needs are covered with a full range of
            our services.
          </p>
        </div>
        
      </div>
      <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-8 lg:p-8">
       {
        services.map(({subtext, icon, title}: CardProps) => (

          <div key={title}>
          <ServiceCards 
          title={title} 
          icon={icon} 
          subtext={subtext} 
          />
          </div>
        ))
       }
       
        
       
      </div>
    </section>
  );
};

export default Services;
