/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, taste, photo } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount < 0) {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                  const reamaining = coffees.filter(coff => coff._id !== _id)
                  setCoffees(reamaining)
                }
              });
            }
          });
      }
    });
  };

  return (
    <div>
      {/* Card -1 */}
      <div className="flex justify-between items-center border bg-[#F5F4F1] rounded-2xl p-7">
        <img className="" src={photo} alt="" />
        <div className="text-xl font-raleway space-y-3">
          <p>Name: {name}</p>
          <p>Quantity: {quantity}</p>
          <p>Taste: {taste}</p>
        </div>
        <div className="join space-y-3 join-vertical">
          <Link to={`/coffeeDetails/${_id}`}>
            <button className="btn join-item bg-[#D2B48C] border-0">
              <i className="fa-solid text-white fa-eye"></i>
            </button>
          </Link>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn join-item bg-[#3C393B] border-0">
              <i className="fa-solid text-white  fa-pen"></i>
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn join-item bg-[#EA4744] hover:bg-red-600 border-0"
          >
            <i className="fa-solid text-white fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
