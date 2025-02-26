import { Link } from "react-router-dom";
import Navber from "./Navber/Navber";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
  };

  return (
    <div>
      <Navber></Navber>
      <div className="mt-20 container mx-auto">
        <Link to="/">
          <button className="btn border-[#331A15]">
            <i className="fa-solid fa-arrow-left-long"></i> Back to home
          </button>
        </Link>
        <div className="bg-[#F4F3F0] py-16 px-28 rounded-2xl mt-10">
          <h2 className="text-center text-4xl font-bold">Add New Coffee</h2>
          <p className="text-center w-[900px] mx-auto my-4 font-raleway">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          {/* form Section */}
          <form onSubmit={handleAddCoffee} className="font-raleway">
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
                  placeholder="photo url"
                />
              </fieldset>
            </div>
            <button className="btn w-full bg-[#D2B48C] border-[#331A15] mt-5">
              Add Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
