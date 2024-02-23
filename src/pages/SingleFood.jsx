import React from "react";
import "../css/SingleFood.css";
// import img from '../assets/bread.png'
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
// import { Link, useParams } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop.jsx";

const SingleFood = ({
  meal,
  onAdd,
  onRemove,
  quantity,
  singleFood,
  closeSingleFoodModal,
  // handleSingleShow,
}) => {
  // console.log(meal);
  return (
    <div className="singlefood-container">
      <ScrollToTop />
      {singleFood && (
        <>
          <div className="bg-color"></div>
          <div className="singlefood">
            <AiOutlineClose
              className="go-back"
              onClick={() => closeSingleFoodModal()}
            />
            <img src={meal.image} alt="" />
            <h3>{meal.title}</h3>
            <p>{meal.description}</p>
            <div className="price">
              <p>₦{meal.price}</p>
              <p>10-20 Mins</p>
              <p>10pcs Avail</p>
            </div>
            <div className="action">
              <div className="quantity">
                {quantity.map((x) => {
                  if (x.id == meal.id) {
                    return (
                      <>
                        {x.quantity ? (
                          <>
                            <AiFillMinusSquare
                              className="icon"
                              onClick={() => onRemove(meal)}
                            />
                            <p>{x.quantity}</p>
                            <AiFillPlusSquare
                              className="icon"
                              onClick={() => onAdd(meal)}
                            />
                          </>
                        ) : (
                          " "
                        )}
                      </>
                    );
                  }
                })}
              </div>
              <button onClick={() => onAdd(meal)}>Add to cart</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleFood;
