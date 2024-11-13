export const fetchProducts = async () => {
  try {
    const data = await fetch("http://192.168.43.152:3000/api/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
    if (!data) {
      console.log("No data found");
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};
