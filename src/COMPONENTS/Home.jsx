import AvailableCoffee from "./AvailableCoffee";
import Banner from "./Banner";
import CoffeeGalary from "./Navber/CoffeeGalary";
import Navber from "./Navber/Navber";

function Home() {
  return (
    <div>
        <Navber></Navber>
        <Banner></Banner>
        <AvailableCoffee></AvailableCoffee>
        <CoffeeGalary></CoffeeGalary>
    </div>
  );
}

export default Home;
