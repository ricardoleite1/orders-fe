"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import imagem from "../../../public/images/lounge.jpg";

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
    <div>
      <h2 className="text-2xl font-bold mb-8">Lista de restaurantes</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant: IRestaurant) => (
          <div className="text-center bg-white p-2 rounded-sm shadow-md text-black" key={restaurant.id}>
            <Image width={300} height={200} alt="Foto de restaurante" src={imagem} />
            <h3 className="text-md font-semibold my-3">{restaurant.name}</h3>
            <p>{restaurant.description}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </section>
    </div>
  );
}
