import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [fetchedProperties, setFetchedProperties] = useState([]);

  const onPartnersFrameClickWithSearch = useCallback(async () => {
    if (address.trim() !== '') {
      try {
        const response = await fetch("https://search-feature-eight.vercel.app/get_property/", {
          method: "POST",
          body: JSON.stringify({ "text": 'A new flat in lagos' }), // Use the address entered by the user
          headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Data from backend:', data);

          setFetchedProperties(data);
          // Navigate to the property listing page and pass fetched properties as state
          navigate("/PropertyListPage", { state: { fetchedProperties: data } });
        } else {
          console.error('Error fetching data:', response.statusText);
          // Handle the case when the response is not ok, e.g., display an error message to the user
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle any errors that occur during the fetch operation
      }
    } else {
      console.log('Please enter an address');
    }
  }, [address, navigate]);

  const handleInputChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[75vh]   bg-blue-50">
      <h1 className="text-3x1 font-righteous text-darkslateblue max-w-[100%] lg:max-w-[80%] text-center pb-10 ">
        Empowering Informed Choices with Verified Real Estate Data
      </h1>
      <div className="text-xl lg:text-2xl font-manrope text-black max-w-[100%] lg:max-w-[50%] text-center pb-6 mx-auto">
        Filter the noise. Get access to verified property listings and comprehensive real estate data.
      </div>
      <div className="w-full max-w-[996px] h-[85px] flex flex-row items-center justify-between pt-3 pb-[11px] pr-3 pl-7 box-border sticky gap-[20px] top-[0] z-[99]   text-left text-xl text-black font-manrope">
        <div className="relative flex items-center justify-start w-full">
          <div className="relative flex w-full">
            <img className="absolute left-2 top-1/2 transform -translate-y-1/2 h-9 w-9" loading="eager" alt="" src={process.env.PUBLIC_URL + "/Search.svg"} />
            <input type="text" value={address} onChange={handleInputChange} placeholder="Show me 2 Bedroom flats in Surulere" className="w-full h-[60px] border-2 border-solid border-gray-300 rounded-md px-3 py-2 text-lg focus:outline-none focus:border-blue-500 transition duration-300 font-manrope text-xl text-gray-600 placeholder-opacity-75 pl-[50px]" />
            <button onClick={onPartnersFrameClickWithSearch} className="absolute right-0 h-full bg-lightseagreen text-white font-normal px-4 border-2 border-solid border-lightseagreen rounded-md cursor-pointer rounded-full flex items-center">
              <span className="text-xl font-manrope">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
