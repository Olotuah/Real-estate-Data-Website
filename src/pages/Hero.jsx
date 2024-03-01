import InnerFrame from "../components/InnerFrame";

const Hero = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start gap-[1px] tracking-[normal] text-center text-31xl text-darkslateblue font-righteous ">
      <InnerFrame />
      <div className="w-[584px] flex flex-row flex-wrap items-center justify-start py-0 px-5 box-border gap-[7px] max-w-full">
        <h1 className="m-0 flex-1 relative text-inherit leading-[152.02%] font-normal font-inherit inline-block min-w-[311px] max-w-full mq450:text-11xl mq450:leading-[46px] mq1050:text-21xl mq1050:leading-[61px]">
          Ecosystem Patners
        </h1>
        <img
          className="h-10 w-[59px] relative object-cover"
          loading="eager"
          alt=""
          src="/imageremovebgpreview-53-1@2x.svg"
        />
      </div>
      <main className="flex flex-col items-start justify-start pt-0 px-5 box-border">
  <div className="w-full lg:max-w-[1481px] pb-[100px] lg:pb-[10px] mx-auto">
    <img
      className="w-full h-auto object-cover rounded-[50px]"
      alt=""
      src="/image-95@2x.png"
    />
  </div>
</main>

      <div className="self-stretch h-[-19373px] flex flex-row items-start justify-end py-0 pr-[48932px] pl-0 box-border lg:pr-[24466px] lg:box-border mq450:pr-5 mq450:box-border mq750:pr-[12233px] mq750:box-border">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/category.svg"
        />
      </div>
    </div>
  );
};

export default Hero;

 
 

 