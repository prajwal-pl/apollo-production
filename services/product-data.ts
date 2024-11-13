export const fetchProducts = async () => {
  try {
    const response = await fetch("http://192.168.43.152:3000/api/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    if (!data) {
      console.log("No data found");
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};
