import { useContext, useState, useEffect} from "react";
import { dataContext } from "../Context/DataContext";

import "./Products.css";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const { buyProducts} = useContext(dataContext);

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  },[])


  return data.map((product)=> {
    return (
      <div className= 'card' key={product.id}>
        <img src={product.img} alt= 'img-product-card' />
        <h3>{product.name}</h3>
        <h4>{product.price}$</h4>
      <button onClick={() => buyProducts(product)}>Buy</button>
      </div>
    );
  });
  
}

export default Products