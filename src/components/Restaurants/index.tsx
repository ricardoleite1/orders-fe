"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
interface IRestaurant {
  id: number;
  name: string;
  description: string;
  category: number;
}

export function Restaurants() {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  async function fetchRestaurants() {
    const { data } = await axios.get("http://localhost:3000/restaurants/category/3");
    setRestaurants(data);
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="text-black">
      <h2 className="text-2xl font-bold mb-8">Lista de restaurantes</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant: IRestaurant) => (
          <div className="text-center bg-white rounded-md shadow-lg" key={restaurant.id}>
            <Image className="rounded-t-md w-full" width={300} height={200} alt="Foto de restaurante" src={"/images/lounge.jpg"} />
            <div className="p-3">
              <h3 className="text-md font-semibold my-2">{restaurant.name}</h3>
              <p>{restaurant.description}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
