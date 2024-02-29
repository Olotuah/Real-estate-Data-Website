import React, { useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { mockSeenData } from '../mockData/mockData';

const Seen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = location;
  const address = state ? state.address : mockSeenData.seenAddress;

  const onNavigateToNextPage = useCallback(() => {
    navigate('/PropertyListing');
  }, [navigate]);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    // Navigate to '/PropertyListing' after a delay (for demonstration purposes)
    const timeoutId = setTimeout(() => {
      onNavigateToNextPage();
    }, 1000); // Adjust the delay as needed

    return () => {
      document.body.classList.remove('overflow-hidden');
      clearTimeout(timeoutId);
    };
  }, [onNavigateToNextPage]);

  return (
    <div className="bg-gradient-to-br from-teal-500 to-teal-700 min-h-screen flex flex-col items-center justify-center p-10" style={{ background: 'rgb(55, 110, 115)' }}>
      <div className="RadarContainer w-24 h-30 rounded-full border-4 border-teal-700 animate-spin mb-4 mt-2"></div>
      <div className="text-xl text-white left-[-50px] font-manrope font-normal mt-[-90px] mb-4 relative" style={{ marginTop: state && state.isCitySearch ? '-90px' : '-78px', marginLeft: '30px' }}>
        {state && state.isCitySearch ? (
          <>
            Found properties in
            <span className="text-white font-normal"> {address}</span>
          </>
        ) : (
          <span className="text-white font-bold">{address}</span>
        )}
      </div>

      <div className="flex items-center">
        <img
          className="w-[350px] h-[your-desired-height] mx-auto"
          alt=""
          src="/vector-6.svg"
          style={{ marginTop: '-33px', marginLeft: '-23px', position: 'relative' }} // Adjust the styles for the vector icon
        />
        <img
          className="mr-2 w-6 h-6 overflow-hidden"
          alt=""
          src="/search1.svg"
          style={{ marginTop: '-63px', marginLeft: '-24px' }} // Adjust the styles for the search icon
        />
      </div>

      <img
        className="mx-auto rounded-full mt-2 roll-image"
        src="/componentlottiehttpsassets3lottiefilescomdatafileshjwoxtgnc5ya47tdatajson@2x.png"
        alt="Placeholder"
      />
      <hr className="border-t border-teal-700 my-2" />
      <p className="text-teal-700 text-white text-3xl font-manrope font-regular my-2">
        {state && state.isCitySearch ? 'Displaying properties...' : 'Putting it all together...'}
      </p>
    </div>
  );
};

export default Seen;

