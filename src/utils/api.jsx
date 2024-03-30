export const fetchDataFromAPI = async () => {
  const address = "A two bedroom flat in Lagos";
  try {
    const response = await fetch("https://search-feature-eight.vercel.app/get_property/", {
      method: "POST",
      body: JSON.stringify({ "text": address }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
