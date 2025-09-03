import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { IRestaurant } from "@/types/Restaurants";

export async function Restaurants() {
  const { data: restaurants } = await axios.get("http://localhost:3000/restaurants/category/3");

  return (  
    <div className="text-black">
      <h2 className="text-2xl font-bold mb-8">Lista de restaurantes</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        {restaurants.map((restaurant: IRestaurant) => (
          <div className="text-center bg-white rounded-md shadow-lg pb-2" key={restaurant.id}>
            <Image className="rounded-t-md w-full" width={300} height={200} alt="Foto de restaurante" src={"/images/lounge.jpg"} />
            <div className="p-3">
              <h3 className="text-md font-semibold my-2">{restaurant.name}</h3>
              <p>{restaurant.description}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <Link href={`/restaurant/${restaurant.id}`}>
              <button className="border-none font-bold bg-blue-500 text-white py-2 px-4 rounded cursor-pointer 
              hover:bg-blue-600 delay-50 transition-colors">Conferir</button>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
