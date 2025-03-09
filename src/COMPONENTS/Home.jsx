import AvailableCoffee from "./AvailableCoffee";
import Banner from "./Banner";
import CoffeeGalary from "./CoffeeGalary";
import Users from "./Users";

function Home() {
  return (
    <div>
        <Banner></Banner>
        <Users></Users>
        <AvailableCoffee></AvailableCoffee>
        <CoffeeGalary></CoffeeGalary>
    </div>
  );
}

export default Home;
