import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [inputId, setInputId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`https://fakestoreapi.com/products/${id %21 +1}`)
        .then(res => setProduct(res.data))
        .catch(err => setProduct(null));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputId.trim()) {
      navigate(`/products/${inputId}`);
      setInputId("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={inputId}
          onChange={e => setInputId(e.target.value)}
        />
        <button type="submit">Get Product</button>
      </form>
 { product? (
        <>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p><b>${product.price}</b></p>
          <img src={product.image} alt={product.title} width="200" />
        </>
  ) : (<p>loading</p>)
}    
    </div>
  );
}

export default ProductDetail;
