export const cartCountVal = async (setCartcount) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/cart-count/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    console.log("sd", response);
    setCartcount(response.cart_count);
    if (response.ok) {
      console.log("called");
    } else if (response.status === 404) {
      console.error("Food item not found");
    } else {
      console.error("Failed to add item to cart");
    }
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
};
