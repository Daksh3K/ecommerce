import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "./components/ProductCard";

function Dashboard() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const getProducts = async () => {
      let response = await axios.get("http://localhost:3002/products");
      let productArray = response.data;
      let products = productArray.map((data) => (
        <ProductCard props={data} key={data.productid} />
      ));
      setProducts(products);
    }
    getProducts().catch(error => {console.log(error)})
  }, []);

  return <div>{products}</div>;
}

export default Dashboard;
