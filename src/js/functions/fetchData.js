const fetchData = async (url, headers) => {
  try {
    const response = await fetch(url, {
      headers,
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`HTTP status ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default fetchData;
