const AvailableCoffee = () => {
  return (
    <div className="bg-[url(https://joynul2024.sirv.com/coffee-images/more/1.png)] bg-no-repeat bg-cover mt-20">
      <div className="container mx-auto">
        <div className="text-center space-y-3">
          <h4 className="font-raleway text-xl">--- Sip & Savor ---</h4>
          <h2 className="text-5xl">Our Popular Products</h2>
          <button className="btn bg-[#E3B577] border-[#331A15] hover:bg-transparent">
            Add Coffee <i className="fa-solid fa-mug-hot"></i>
          </button>
        </div>
        {/* available coffees */}
        <div></div>
      </div>
    </div>
  );
};

export default AvailableCoffee;
