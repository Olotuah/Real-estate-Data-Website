import React from 'react';
import { useNavigate } from 'react-router-dom';

const ComparisonRow = ({ label, values, background }) => (
  <div className={`grid grid-cols-1 md:grid-cols-3 mr-2 gap-1 ${background ? 'p-1 bg-customLightGray' : ''}`}>
    <div className="col-span-1 md:col-span-1 lg:col-span-1 flex items-center ml-10">
      <div className={`label pl-2 ${background ? 'bg-customLightGray' : ''}`}>{label}</div>
    </div>
    <div className="col-span-2 md:col-span-2 lg:col-span-2 p-2">
      <div className={`grid grid-cols-3 gap-4 md:ml-0 lg:ml-0 ${background ? 'bg-customLightGray' : ''}`}>
        {values.map((value, index) => (
          <div key={index} className="flex items-center justify-center">
            {typeof value === 'object' && value.type === 'img' ? (
              <div className="flex">
                <img
                  src={value.props.src}
                  alt={value.props.alt}
                  className="w-[80%] max-w-[280px] h-auto rounded-md mr-2"
                />
                <img src="/slider.png" alt="slider" className="w-2 h-12 mt-6" />
                <img src="/cancel.png" alt="cancel" className="w-4 h-4" />
              </div>
            ) : (
              value
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);


const ComparisonPage = () => {
  const navigate = useNavigate(); // Initialize navigate from useNavigate

  const handleBackClick = () => {
    navigate(-1); // Navigate back one step when clicked
  };

 
return (
   <>
    <div className= "bg-white h-screen">
    <div className="flex items-center ml-10 mt-9">
    <div className="ml-10">
          <button onClick={handleBackClick} className="text-sm text-gray-500 font-manrope mr-4">&lt; Back</button> {/* Back button */}
    </div>
          <h2 className="text-2xl font-manrope font-semibold ml-9">Compare Properties</h2> {/* Text: Compare Properties */}
          <div></div> {/* This is a placeholder for the less than icon */}
        </div>
        <div className="container mx-auto mt-12 pl-4 pr-4 md:pl-20 md:pr-20 max-w-[90%]">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <ComparisonRow
        label="Property"
        values={[
          <img key="property1" src="Rectangle 5552.png" alt="Property 1" className="main-image" style={{ borderRadius: '12px', marginRight: '10px' }} />,
          <img key="property2" src="Rectangle 5552.png" alt="Property 2" className="main-image" style={{ borderRadius: '12px', marginRight: '10px' }} />,
          <img key="property3" src="Rectangle 5552.png" alt="Property 3" className="main-image" style={{ borderRadius: '12px' }} />
        ]}
        background={false}
      />

      <ComparisonRow
        label="Platform"
        values={["PropertyPro", "Spleet", "PropertyPro"]}
        background={false}
      />
      <ComparisonRow
        label="Price"
        values={["₦950,000", "₦450,000", "₦209,847"]}
        background="#F1F4F7"
      />
      <ComparisonRow
        label="Bedroom"
        values={["3", "4", "2"]}
        background={false}
      />
      <ComparisonRow
        label="Bathroom"
        values={["2", "2", "4"]}
        background="#F1F4F7"
      />
      <ComparisonRow
        label="Furnished"
        values={["Yes", "Semi", "No"]}
        background={false}
      />
      <ComparisonRow
        label="Energy-Efficient"
        values={["Yes", "No", "No"]}
        background="#F1F4F7"
      />
      <ComparisonRow
        label="Prepaid Meter"
        values={["No", "Yes", "Yes"]}
        background={false}
      />
      <ComparisonRow
        label="Utilities"
        values={[
          <div key="pair1" className="image-pair flex items-center">
            <img src="/Wifi.png" alt="wifi" className="mr-2" />
            <img src="/p.png" alt="parking" />
          </div>,
          <div key="pair2" className="image-pair flex items-center">
            <img src="/Wifi.png" alt="wifi" className="mr-2"/>
            <img src="/p.png" alt="parking" />
          </div>,
          <div key="pair3" className="image-pair flex items-center">
            <img src="/Wifi.png" alt="wifi" className="mr-2"/>
            <img src="/p.png" alt="parking" />
          </div>
        ]}
        background="#F1F4F7"
      />
      <ComparisonRow
        label=""
        values={[
          <button className="button" style={{ backgroundColor: '#12AF9B', border: '1px solid #12AF9B', borderRadius: '10px', padding: '5px 20px', width: '100px', height: '40px' }}>Proceed</button>,
          <button className="button" style={{ backgroundColor: '#12AF9B', border: '1px solid #12AF9B', borderRadius: '10px', padding: '5px 20px', width: '100px', height: '40px' }}>Proceed</button>,
          <button className="button" style={{ backgroundColor: '#12AF9B', border: '1px solid #12AF9B', borderRadius: '10px', padding: '5px 20px', width: '100px', height: '40px' }}>Proceed</button>
        ]}
        background={false}
      />
    </div>
  </div>
  </div>
  </>
);

};

export default ComparisonPage;




