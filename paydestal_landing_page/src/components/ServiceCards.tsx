export interface CardProps {
  title: string;
  icon: string;
  subtext: string;
}

const ServiceCards = ({title, icon, subtext}: CardProps) => {
  return (
    <div className=" gap-4 col_Layout lg:py-4 lg:px-6 rounded-md border-b-2 border-b-[#1B442A]">
      <img src={icon} alt={title} className="images"  />
      <h2 className="header_typography font-[700] text-xl">{title}</h2>
      <p className="info-text py-2 leading-[28px] text-sm">{subtext}</p>
    </div>
  );
};

export default ServiceCards;
