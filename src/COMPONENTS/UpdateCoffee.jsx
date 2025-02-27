import { Link, useLoaderData } from "react-router-dom";
import Navber from "./Navber/Navber";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newUpdateCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // console.log(newUpdateCoffee);
    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUpdateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Coffee updated Successfuly",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div>
      <Navber></Navber>
      <div className="mt-20 container mx-auto">
        <Link to="/">
          <button className="btn border-[#331A15] hover:bg-[#D2B48C]">
            <i className="fa-solid fa-arrow-left-long"></i> Back to home
          </button>
        </Link>
        <div className="bg-[#F4F3F0] py-16 px-28 rounded-2xl mt-10">
          <h2 className="text-center text-4xl font-bold">
            Update Existing Coffee Details
          </h2>
          <p className="text-center w-[900px] mx-auto my-4 font-raleway">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          {/* form Section */}
          <form onSubmit={handleUpdateCoffee} className="font-raleway">
            {/* coffee name and quantity row */}
            <div className="flex justify-between gap-6">
              <fieldset className="w-1/2 fieldset">
                <label className="fieldset-label text-xl font-medium">
                  Coffee Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="input w-full"
                  defaultValue={name}
                  placeholder="coffee name"
                />
              </fieldset>
              <fieldset className="w-1/2 fieldset">
                <label className="fieldset-label text-xl font-medium">
                  Quantity
                </label>
                <input
                  name="quantity"
                  type="text"
                  className="input w-full"
                  defaultValue={quantity}
                  placeholder="quantity"
                />
              </fieldset>
            </div>
            {/* Supplier and Taste row */}
            <div className="flex justify-between gap-6">
              <fieldset className="w-1/2 fieldset">
                <label className="fieldset-label text-xl font-medium">
                  Supplier
                </label>
                <input
                  name="supplier"
                  type="text"
                  className="input w-full"
                  defaultValue={supplier}
                  placeholder="supplier"
                />
              </fieldset>
              <fieldset className="w-1/2 fieldset">
                <label className="fieldset-label text-xl font-medium">
                  Taste
                </label>
                <input
                  name="taste"
                  type="text"
                  className="input w-full"
                  defaultValue={taste}
                  placeholder="taste"
                />
              </fieldset>
            </div>
            {/* Category and Details row */}
            <div className="flex justify-between gap-6">
              <fieldset className="w-1/2 fieldset">
                <label className="fieldset-label text-xl font-medium">
                  Category
                </label>
                <input
                  name="category"
                  type="text"
                  className="input w-full"
                  defaultValue={category}
                  placeholder="category"
                />
              </fieldset>
              <fieldset className="w-1/2 fieldset">
                <label className="fieldset-label text-xl font-medium">
                  Details
                </label>
                <input
                  name="details"
                  type="text"
                  className="input w-full"
                  defaultValue={details}
                  placeholder="details"
                />
              </fieldset>
            </div>
            {/* Photo Url row */}
            <div className="flex justify-between gap-6">
              <fieldset className="w-full fieldset">
                <label className="fieldset-label text-xl font-medium">
                  Photo Url
                </label>
                <input
                  name="photo"
                  type="text"
                  className="input w-full"
                  defaultValue={photo}
                  placeholder="photo url"
                />
              </fieldset>
            </div>
            <button className="btn w-full hover:bg-[#b39369] bg-[#D2B48C] border-[#331A15] mt-5">
              Update Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
