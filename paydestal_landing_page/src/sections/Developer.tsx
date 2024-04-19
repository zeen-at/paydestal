import Solution from "../assets/solutions.png";
import CustomButton from "../components/CustomButton";
import RightArrow from "../assets/icons/arrow_right_icon.png";


const Developer = () => {
  return (
    <section className="body_container md:gap-32 flexSpread  ">
      <div className="hidden md:block w-4/12">
        <img
          src={Solution}
          alt="solution_img"
          className="images"
        />
      </div>

      <div className="col_Layout gap-4 items-start text-start md:w-6/12">
        <h3 className="header_typography hidden md:block leading-normal text-3xl">
            <p> Create tailored  payment </p>
            <p> solutions  using our thoroughly  </p>
            <p> documented APIs  </p>

        </h3>
        <h3 className="header_typography leading-normal text-3xl block md:hidden">
            <p> Create tailored  payment 
             solutions  using our thoroughly  
            documented APIs  </p>

        </h3>
        <div className="info-text py-2">
        <p>The in-depth and clear documentation of our APIs,  enables you to create,</p>
        <p>from simple projects to intricate financial products catering to lots of customers. </p>
        <p>Got any ideas? it's time create.</p>
        </div>
      <CustomButton type="button" label="Explore  our  API " icon={RightArrow} />
      </div>
    </section>
  );
};

export default Developer;
