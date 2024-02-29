import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockFindingData } from '../mockData/mockData';

const LandingPage = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState('');

  const onPartnersFrameClickWithSearch = useCallback(async () => {
    if (address.trim() !== '') {
      navigate("/Finding", { state: { address } });
      await new Promise((resolve) => setTimeout(resolve, 600));

      // Navigate to the Fetching page
      navigate("/Fetching");

      // Simulate more asynchronous actions
      await new Promise((resolve) => setTimeout(resolve, 600));

      // Navigate to the Seen page
      navigate("/Seen");
    } else {
      // Handle the case when there's no address
      // For now, just logging a message
      console.log('Please enter an address');
    }
  }, [address, navigate]);

  const handleInputChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="flex-1 bg-ghostwhite flex flex-col items-center justify-start pt-[100px] px-5 pb-[30px] box-border gap-[55px] max-w-full text-center text-31xl text-darkslateblue font-righteous mq750:gap-[87px] mq750:pt-[20px] mq750:pb-[15px] mq750:box-border">
      <div className="w-[950px] flex flex-col items-center justify-start gap-[14px] max-w-full">
        <h1 className="m-0 w-[100%] self-stretch h-[150px] relative text-inherit leading-[152.02%] font-normal font-inherit inline-block mq450:text-11xl mq450:leading-[46px] mq1050:text-21xl mq1050:leading-[61px] p-4">
          Empowering Informed Choices with Verified Real Estate Data
        </h1>
        <div className="w-[550px] h-[30px] relative text-xl leading-[182.02%] font-manrope text-black inline-block max-w-full mq450:text-base mq450:leading-[24px] p-2">
          Filter the noise. Get access to verified property listings and
          comprehensive real estate data.
        </div>
      </div>
      <div className="w-full max-w-[996px] h-[85px] flex flex-row items-center justify-between pt-3 pb-[11px] pr-3 pl-7 box-border sticky gap-[20px] top-[0] z-[99]   text-left text-xl text-black font-manrope">
        <div className="relative flex items-center justify-start w-full">
          <div className="relative flex w-full">
            <img
              className="absolute left-2 top-1/2 transform -translate-y-1/2 h-9 w-9"
              loading="eager"
              alt=""
              src="/Search.svg"
            />
            <input
              type="text"
              value={address}
              onChange={handleInputChange}
              placeholder="Show me 2 Bedroom flats in Surulere"
              className="w-full h-[60px] border-2 border-solid border-gray-300 rounded-md px-3 py-2 text-lg focus:outline-none focus:border-blue-500 transition duration-300 font-manrope text-xl text-gray-600 placeholder-opacity-75 pl-[50px]"
            />
            <button
              onClick={onPartnersFrameClickWithSearch}
              className="absolute right-0 h-full bg-lightseagreen text-white font-normal px-4 border-2 border-solid border-lightseagreen rounded-md cursor-pointer rounded-full flex items-center"
            >
              <span className="text-xl font-manrope">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
