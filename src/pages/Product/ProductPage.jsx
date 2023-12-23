import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./Productpage.module.css";
import { useEffect, useState } from "react";
import StarRating from "../../components/StarRating/StarRating";

function Productpage() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  const handleAddToWishlist = () => {};

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/product/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductData(...data.products);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  // Convert the string to a Date object
  const dateObject = new Date(productData.putdate);

  // Get the date in the format "YYYY-MM-DD"
  const extractedDate = dateObject.toISOString().substring(0, 10);

  return (
    <div className={styles.productcontainer}>
      <div className={styles.productpage}>
        <img className={styles.img} src={productData.image} />
        <section className={styles.content}>
          <h1 className={styles.category}>{productData.category}</h1>
          <h1 className={styles.name}>{productData.name}</h1>
          <h2>Available quantity: {productData.quantity}</h2>
          <div>{productData.description}</div>
          <div>Seller or Brand: {productData.name}</div>
          <div className={styles.reviews}></div>
          <hr />
          <p>{productData.price}$</p>
          <p className={styles.seller}></p>
        </section>
        <section className={styles.purchase}>
          <div className={styles.date}>Date of releasing: {extractedDate}</div>
          <Button text="Add to Wishlist" onClick={handleAddToWishlist} />
          <Button text="Add to cart" />
          <Button text="Buy Now" />
        </section>
      </div>
      <StarRating />
    </div>
  );
}

export default Productpage;
