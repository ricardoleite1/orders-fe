import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { IRestaurant } from "@/types/Restaurants";
import { env } from "@/config/env";
import { Button } from "../Button";

export async function Restaurants() {
  const { data: restaurants } = await axios.get(`${env.API_URL}/restaurants/category/3`);

  return (  
    <div className="text-black">
      <h2 className="text-2xl font-bold mb-8">Lista de restaurantes</h2>
        <Button className="block mb-4" href="new" text="+ Cadastrar novo restaurante"/>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        {restaurants.length ? restaurants.map((restaurant: IRestaurant) => (
          <div className="text-center bg-white rounded-md shadow-lg pb-2" key={restaurant.id}>
            <Image className="rounded-t-md w-full" width={300} height={200} alt="Foto de restaurante" src={"/images/lounge.jpg"} />
            <div className="p-3">
              <h3 className="text-md font-semibold my-2">{restaurant.name}</h3>
              <p>{restaurant.description}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <Button href={restaurant.id} text="Conferir"/>
          </div>
        )) : "Não há restaurantes cadastrados ainda."}
      </section>
    </div>
  );
}
