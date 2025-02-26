const Banner = () => {
  return (
    <div>
      <div className="flex bg-[url(https://joynul2024.sirv.com/coffee-images/more/3.png)] bg-no-repeat bg-cover py-[288px] bg-center object-cover">
        <div className="flex-1"></div>
        <div className="flex-1 text-white space-y-4">
          <h2 className="text-5xl">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="font-raleway w-[724px]">
            It coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn bg-[#E3B577] border-0 hover:bg-transparent hover:text-white hover:border">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-[#ECEAE3] py-12">
        <div className="container mx-auto flex justify-between gap-10">
          {/* box-1 */}
          <div className="space-y-3">
            <img
              src="https://joynul2024.sirv.com/coffee-images/icons/1.png"
              alt=""
            />
            <h4 className="text-4xl">Awesome Aroma</h4>
            <p className="font-raleway">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          {/* box-2 */}
          <div className="space-y-3">
            <img
              src="https://joynul2024.sirv.com/coffee-images/icons/2.png"
              alt=""
            />
            <h4 className="text-4xl">High Quality</h4>
            <p className="font-raleway">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          {/* box-3 */}
          <div className="space-y-3">
            <img
              src="https://joynul2024.sirv.com/coffee-images/icons/3.png"
              alt=""
            />
            <h4 className="text-4xl">Pure Grades</h4>
            <p className="font-raleway">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          {/* box-4 */}
          <div className="space-y-3">
            <img
              src="https://joynul2024.sirv.com/coffee-images/icons/4.png"
              alt=""
            />
            <h4 className="text-4xl">Proper Roasting</h4>
            <p className="font-raleway">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
