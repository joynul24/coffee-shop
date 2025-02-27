import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const AvailableCoffee = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="bg-[url(https://joynul2024.sirv.com/coffee-images/more/1.png)] bg-no-repeat bg-cover mt-20">
      <div className="container mx-auto">
        <div className="text-center space-y-3">
          <h4 className="font-raleway text-xl">--- Sip & Savor ---</h4>
          <h2 className="text-5xl">Our Popular Products</h2>
        </div>
        <div className="flex justify-center mt-10 gap-6">
          {/* Add Coffee button */}
          <Link to="/addCoffee">
            <button className="btn bg-[#E3B577] border-[#331A15] hover:bg-transparent">
              Add Coffee <i className="fa-solid fa-mug-hot"></i>
            </button>
          </Link>
          {/* Update Coffee button */}
          {/* <Link to="/updateCoffee">
            <button className="btn bg-[#E3B577] border-[#331A15] hover:bg-transparent">
              Update Coffee <i className="fa-solid fa-mug-hot"></i>
            </button>
          </Link> */}
        </div>
        {/* available loadedCoffees */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-15 gap-6">
          {loadedCoffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableCoffee;
