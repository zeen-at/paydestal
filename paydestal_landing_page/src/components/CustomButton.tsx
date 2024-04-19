
interface Props {
    type: "button" | "submit" | "reset";
    label: string;
    icon?: string;
    handleClick?: () => void;
}

const CustomButton = ({type, label,icon, handleClick}: Props) => {
  return (
    <>
        <button type={type} onClick={handleClick} className="buttons flex items-center gap-3  ">
            {label} 

            {icon && (
                <img src={icon} alt="icon"  className="images rounded-full w-2 h-3"/>
            )}
        </button>
    </>
  )
}

export default CustomButton;