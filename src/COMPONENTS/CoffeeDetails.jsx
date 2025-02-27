import { Link, useLoaderData } from "react-router-dom";
import Navber from "./Navber/Navber";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  const { name, quantity, supplier, category, details, taste, photo } = coffee;

  return (
    <div>
      <Navber></Navber>
      <div className="container mx-auto mt-20">
        <Link to="/">
          <button className="btn border-[#331A15] hover:bg-[#D2B48C]">
            <i className="fa-solid fa-arrow-left-long"></i> Back to home
          </button>
        </Link>
        <div className="flex justify-center mt-10 rounded-2xl border py-20 items-center gap-6 bg-[#F4F3F0]">
          <img src={photo} alt="" />
          <div className="font-raleway space-y-1">
            <h3 className="text-3xl font-extrabold">Niceties</h3>
            <p>Name: {name}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
            <p>Category: {category}</p>
            <p>Taste: {taste}</p>
            <p>Details: {details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
