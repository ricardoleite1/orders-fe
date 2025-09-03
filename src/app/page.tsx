import { Restaurants } from "@/components/Restaurants";

export default function Home() {
  return (
    <>
      <div className="text-black my-6 lg:mt-0 lg:mb-12 flex gap-2 flex-col">
        <h1 className="text-3xl font-bold">Bem-vindo ao Orders App</h1>
        <p className="text-lg">O seu app da gastronomia</p>
      </div>
      <Restaurants />
    </>
  );
}
