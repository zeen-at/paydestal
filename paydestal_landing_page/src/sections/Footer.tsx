import logo from '../assets/logo.png'
import Ig from "../assets/icons/ig.png";
import Fb from "../assets/icons/fb.png";
import Twitter from "../assets/icons/twitter.png";
import FooterLinks, { IFooterLinks } from '../components/Footer';
import Office from "../assets/icons/location.png";
import Mail from "../assets/icons/mail.png";
import Phone from "../assets/icons/call.png";

const footerdetails = [
  {
    header: "Company",
    link1: "About Us",
    link2: "Developer",
    link3: "FAQ"
  },
  {
    header: "Legal",
    link1: "Support Policy",
    link2: "Privacy Policy",
    link3: "Terms & Conditions"
  },
  {
    header: "Our Office",
    link1: " 6 Alhaji Bakinson Street, Ikeja, Lagos Nigeria",
    link2: " support@paydestal.com",
    link3: " +234 80 9990 0045",
    icon1: Office,
    icon2: Mail,
    icon3: Phone
  },

]

const Footer = () => {
  return (
    <section className='body_container '>
      


      <div className='flex flex-col lg:flex-row gap-4 '>
       
          <div className='col_Layout w-full md:w-1/3'>
            <img src={logo} alt="logo" />
            <p className='info-text py-2'>A modern, technology payment processing and settlement built for you and your business.</p>
            <div className='justifyFlex gap-4'>
            <img src={Ig} alt="right arrow"/> 
            <img src={Twitter} alt="right arrow"/> 
            <img src={Fb} alt="right arrow"/> 

            </div>
          </div>
          <div className='flex flex-col gap-8 lg:flex-row justify-start lg:gap-16'>

          {footerdetails.map(({link1, link2, link3, header, icon1, icon2, icon3}: IFooterLinks) => (
            <div key={header}>
              <FooterLinks header={header} link1={link1} link2={link2} link3={link3} icon1={icon1} icon2={icon2} icon3={icon3} />

            </div>
          ))}
          </div>

          
      </div>
    </section>
  )
}

export default Footer