 
const mockFindingData = {
  location: 'Surulere',
  propertyType: '2 Bedroom flat',
};

// Mock data for the fetching page
const mockFetchingData = {
  fetchingStatus: 'Fetching data...',
  fetchingAddress: '123 Adeniyi Jones Avenue, Ikeja',
};

// Mock data for the seen page
const mockSeenData = {
  seenStatus: 'Property Found!',
  seenAddress: '123 Adeniyi Jones Avenue, Ikeja',
};

const mockPropertyListings = [
  {
    id: 1,
    address: '123 Adeniyi Jones Avenue, Ikeja',
    keywords: ['Adeniyi Jones', 'Ikeja', '2 Bedroom flat', 'Available'],
    type: '2 Bedroom flat',
    price: 'N350,000',
    status: 'Available',
    description: 'A spacious 2-bedroom flat in a prime location with great amenities.',
    bedrooms: 2,
    bathrooms: 2,
    views: 120,
    fromPropertyPro: true,
    verified: true,
    images: [
      'Rectangle 5552.png', // Placeholder image URL for property-image1
      'Rectangle 5552 (1).png', // Placeholder image URL for property-image2
      'Rectangle 5552 (2).png', // Placeholder image URL for property-image3
    ],
  },
  {
    id: 2,
    address: '456 Herbert Macaulay Way, Yaba',
    keywords: ['Herbert Macaulay', 'Yaba', '3 Bedroom duplex', 'Under Contract'],
    type: '3 Bedroom duplex',
    price: '$450,000',
    status: 'Under Contract',
    description: 'Luxurious 3-bedroom duplex with modern design and top-notch facilities.',
    bedrooms: 3,
    bathrooms: 3,
    views: 220,
    fromPropertyPro: false,
    verified: false,
    images: [
      'Rectangle 5552 (1).png', // Placeholder image URL for property-image4
      'https://via.placeholder.com/150', // Placeholder image URL for property-image5
      'https://via.placeholder.com/150', // Placeholder image URL for property-image6
    ],
  },
  {
    id: 3,
    address: '156 Afyyj Jones Avenue, Ikeja',
    keywords: ['Afyyj Jones', 'Ikeja', '2 Bedroom flat', 'Available'],
    type: '2 Bedroom flat',
    price: '$250,000',
    status: 'Available',
    description: 'A spacious 2-bedroom flat in a prime location with great amenities.',
    bedrooms: 2,
    bathrooms: 2,
    views: 150,
    fromPropertyPro: true,
    verified: true,
    images: [
      'Rectangle 5552 (5).png', // Placeholder image URL for property-image7
      'https://via.placeholder.com/150', // Placeholder image URL for property-image8
      'https://via.placeholder.com/150', // Placeholder image URL for property-image9
    ],
  },
  {
    id: 6,
    address: '789 Maryland Mall, Maryland',
    keywords: ['Maryland Mall', 'Maryland', '1 Bedroom studio', 'For Sale'],
    type: '1 Bedroom studio',
    price: '$180,000',
    status: 'For Sale',
    description: 'Cozy 1-bedroom studio with a beautiful view and modern amenities.',
    bedrooms: 1,
    bathrooms: 1,
    views: 80,
    fromPropertyPro: false,
    verified: true,
    images: [
      'Rectangle 5552 (6).png', // Placeholder image URL for property-image10
      'https://via.placeholder.com/150', // Placeholder image URL for property-image11
      'https://via.placeholder.com/150', // Placeholder image URL for property-image12
    ],
  },
  {
    id: 7,
    address: '567 Allen Avenue, Ikeja',
    keywords: ['Allen Avenue', 'Ikeja', '4 Bedroom duplex', 'Available'],
    type: '4 Bedroom duplex',
    price: '$600,000',
    status: 'Available',
    description: 'Spacious 4-bedroom duplex with a large backyard and modern interior.',
    bedrooms: 4,
    bathrooms: 3,
    views: 150,
    fromPropertyPro: true,
    verified: false,
    images: [
      'Rectangle 5552 (3).png', // Placeholder image URL for property-image13
      'https://via.placeholder.com/150', // Placeholder image URL for property-image14
      'https://via.placeholder.com/150', // Placeholder image URL for property-image15
    ],
  },
  {
    id: 8,
    address: '234 Victoria Island, Lagos',
    keywords: ['Victoria Island', 'Lagos', '3 Bedroom apartment', 'Under Contract'],
    type: '3 Bedroom apartment',
    price: '$400,000',
    status: 'Under Contract',
    description: 'Modern 3-bedroom apartment with stunning views of the city skyline.',
    bedrooms: 3,
    bathrooms: 2,
    views: 200,
    fromPropertyPro: false,
    verified: true,
    images: [
      'Rectangle 5552 (4).png', // Placeholder image URL for property-image16
      'https://via.placeholder.com/150', // Placeholder image URL for property-image17
      'https://via.placeholder.com/150', // Placeholder image URL for property-image18
    ],
  },
  {
    id: 9,
    address: '890 Lekki Phase 1, Lekki',
    keywords: ['Lekki Phase 1', 'Lekki', '2 Bedroom flat', 'Available'],
    type: '2 Bedroom flat',
    price: '$250,000',
    status: 'Available',
    description: 'A modern 2-bedroom flat in the heart of Lekki Phase 1 with great amenities.',
    bedrooms: 2,
    bathrooms: 2,
    views: 120,
    fromPropertyPro: true,
    verified: false,
    images: [
      'Rectangle 5552 (1).png', // Placeholder image URL for property-image19
      'https://via.placeholder.com/150', // Placeholder image URL for property-image20
      'https://via.placeholder.com/150', // Placeholder image URL for property-image21
    ],
  },
  {
    id: 10,
    address: '987 Festac Town, Festac',
    keywords: ['Festac Town', 'Festac', '5 Bedroom mansion', 'For Sale'],
    type: '5 Bedroom mansion',
    price: '$1,200,000',
    status: 'For Sale',
    description: 'Luxurious 5-bedroom mansion with a spacious garden and private pool.',
    bedrooms: 5,
    bathrooms: 5,
    views: 300,
    fromPropertyPro: false,
    verified: true,
    images: [
      'Rectangle 5552 (1).png', // Placeholder image URL for property-image22
      'https://via.placeholder.com/150', // Placeholder image URL for property-image23
      'https://via.placeholder.com/150', // Placeholder image URL for property-image24
    ],
  },
  {
    id: 11,
    address: '765 Ajah, Ajah',
    keywords: ['Ajah', 'Ajah', '2 Bedroom flat', 'Under Contract'],
    type: '2 Bedroom flat',
    price: '$300,000',
    status: 'Under Contract',
    description: 'Stylish 2-bedroom flat with modern design and great community features.',
    bedrooms: 2,
    bathrooms: 2,
    views: 180,
    fromPropertyPro: true,
    verified: true,
    images: [
      'Rectangle 5552 (7).png', // Placeholder image URL for property-image25
      'https://via.placeholder.com/150', // Placeholder image URL for property-image26
      'https://via.placeholder.com/150', // Placeholder image URL for property-image27
    ],
  },
  {
    id: 12,
    address: '543 Gbagada, Gbagada',
    keywords: ['Gbagada', 'Gbagada', '3 Bedroom apartment', 'Available'],
    type: '3 Bedroom apartment',
    price: '$350,000',
    status: 'Available',
    description: 'Contemporary 3-bedroom apartment with top-notch finishes and stunning views.',
    bedrooms: 3,
    bathrooms: 2,
    views: 160,
    fromPropertyPro: false,
    verified: false,
    images: [
      'Rectangle 5552 (6).png', // Placeholder image URL for property-image28
      'https://via.placeholder.com/150', // Placeholder image URL for property-image29
      'https://via.placeholder.com/150', // Placeholder image URL for property-image30
    ],
  },
  {
    id: 13,
    address: '876 Ojodu, Ojodu',
    keywords: ['Ojodu', 'Ojodu', '4 Bedroom duplex', 'For Sale'],
    type: '4 Bedroom duplex',
    price: '$500,000',
    status: 'For Sale',
    description: 'Spacious 4-bedroom duplex with a large compound and modern interior.',
    bedrooms: 4,
    bathrooms: 3,
    views: 220,
    fromPropertyPro: true,
    verified: true,
    images: [
      'Rectangle 5552 (4).png', // Placeholder image URL for property-image31
      'https://via.placeholder.com/150', // Placeholder image URL for property-image32
      'https://via.placeholder.com/150', // Placeholder image URL for property-image33
    ],
  },
  {
    id: 14,
    address: '654 Ikorodu, Ikorodu',
    keywords: ['Ikorodu', 'Ikorodu', '2 Bedroom flat', 'Available'],
    type: '2 Bedroom flat',
    price: '$200,000',
    status: 'Available',
    description: 'Affordable 2-bedroom flat with comfortable living spaces and great amenities.',
    bedrooms: 2,
    bathrooms: 2,
    views: 90,
    fromPropertyPro: false,
    verified: false,
    images: [
      'Rectangle 5552 (3).png', // Placeholder image URL for property-image34
      'https://via.placeholder.com/150', // Placeholder image URL for property-image35
      'https://via.placeholder.com/150', // Placeholder image URL for property-image36
    ],
  },
  {
    id: 15,
    address: '432 Ajao Estate, Isolo',
    keywords: ['Ajao Estate', 'Isolo', '3 Bedroom apartment', 'Under Contract'],
    type: '3 Bedroom apartment',
    price: '$280,000',
    status: 'Under Contract',
    description: 'Modern 3-bedroom apartment with a touch of elegance and great community features.',
    bedrooms: 3,
    bathrooms: 2,
    views: 150,
    fromPropertyPro: true,
    verified: false,
    images: [
      'Rectangle 5552 (5).png', // Placeholder image URL for property-image37
      'https://via.placeholder.com/150', // Placeholder image URL for property-image38
      'https://via.placeholder.com/150', // Placeholder image URL for property-image39
    ],
  },
  {
    id: 16,
    address: '987 Badore, Badore',
    keywords: ['Badore', 'Badore', '5 Bedroom mansion', 'Available'],
    type: '5 Bedroom mansion',
    price: '$1,500,000',
    status: 'Available',
    description: 'Luxurious 5-bedroom mansion with a spacious garden, private pool, and top-notch amenities.',
    bedrooms: 5,
    bathrooms: 5,
    views: 280,
    fromPropertyPro: false,
    verified: true,
    images: [
      'Rectangle 5552 (2).png', // Placeholder image URL for property-image40
      'https://via.placeholder.com/150', // Placeholder image URL for property-image41
      'https://via.placeholder.com/150', // Placeholder image URL for property-image42
    ],
  },
  // Add more property listings as needed
];

export { mockPropertyListings, mockFindingData, mockFetchingData, mockSeenData };

