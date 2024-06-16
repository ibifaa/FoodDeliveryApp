import "../index.css";
import heroImage from "../assets/png/heroImage.png";

function Hero() {
  return (
    <div className="hero flex items-center sm:flex-row flex-col w-[100%] h-[90vh] justify-between bg-[#FCC70C] sm:p-10 p-5">
      <div className="textSection sm:w-[50%] w-[100%]">
        <div>
          {" "}
          <h1 className="sm:text-[60px] text-[40px] sm:leading-[75px] leading-[45px] font-black ">
            People who <span className="text-[red]">love to eat</span> are the best
          </h1>
          <p className=" text-[20px] leading-[28px]">
            FoodBite is a one stop, restaurant where you can get the best of
            Nigerian reciept you not forget in a hurry.
          </p>


        <button className="bg-white text-red rounded-lg px-[20px] py-[5px] sm:text-left text-center my-[20px] text-[14px] text-[red] text-bold">Explore</button>
        </div>
</div>

        <div className="imageSection sm:w-[50%] w-[100%]"><img src={heroImage} className="w-[100%]" alt="hero food" /></div>
        
      
    </div>
  );
}

export default Hero;
