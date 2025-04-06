import { useEffect, useState } from "react";
import { auth, database } from "../firebase";
import { ref, get } from "firebase/database";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [apiData, setApiData] = useState([]);
  const API_URL = "https://fakestoreapi.com/products"; // ✅ Replace with your API

  useEffect(() => {
    if (auth.currentUser) {
      const userRef = ref(database, "users/" + auth.currentUser.uid);
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          setUserData(snapshot.val());
        }
      });
    }

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => console.error("Error fetching API:", error));
  }, []);

  return (
    <div className="home-container">
      <h2>Welcome, {userData?.name || "Guest"}!</h2>
      <p>Email: {userData?.email}</p>

      <h3>Latest Products</h3>
      <div className="products-grid">
        {apiData.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p className="price">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
