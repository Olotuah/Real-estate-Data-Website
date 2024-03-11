import React, { useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { mockFetchingData } from '../mockData/mockData';

const Fetching = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = location;
  const address = state?.address || mockFetchingData.fetchingAddress;

  const onNavigateToSeen = useCallback(() => {
    navigate('/Seen');
  }, [navigate]);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-teal-500 to-teal-700 min-h-screen flex flex-col items-center justify-center p-10" style={{ background: 'rgb(55, 110, 115)' }}>
      <div className="RadarContainer w-24 h-30 rounded-full border-4 border-teal-700 animate-spin mb-4 mt-2"></div>
      <div className="text-xl text-white left-[-20px] font-manrope font-normal mt-[-90px] mb-4 relative">
         <span style={{ color: '#12AF9B' }}></span>  <span style={{ color: '#fff' }}>{address}</span>
      </div>

      <div className="flex items-center">
        <img
          className="w-[314px] h-[your-desired-height] mx-auto"
          alt=""
          src="./vector-6.svg"
          style={{ marginTop: '-44px', marginLeft: '77px', position: 'relative' }} // Adjust the styles for the vector icon
        />
        <img
          className="mr-20 w-6 h-20 overflow-hidden"
          alt=""
          src="./search1.svg"
          style={{ marginTop: '-70px', marginLeft: '-25px' }} // Adjust the styles for the search icon
        />
      </div>

      <img
        className="mx-auto rounded-full mt-2 roll-image"
         
        src={process.env.PUBLIC_URL + "/componentlottiehttpsassets3lottiefilescomdatafileshjwoxtgnc5ya47tdatajson@2x.png"}
        alt="Placeholder"
      />
      <p className="text-teal-700 text-white text-3xl font-manrope font-regular my-2">
        {state && state.isCitySearch ? 'Fetching properties from various cities...' : 'Fetching data...'}
      </p>
      <hr className="border-t border-teal-700 my-2" />
    </div>
  );
};

export default Fetching;
