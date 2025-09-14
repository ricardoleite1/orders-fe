import { Container } from "@/components/Container";
import { IRestaurant } from "@/types/Restaurants";
import Image from "next/image";
import { env } from "@/config/env";

interface RestaurantProps {
  params: { id: string };
}

export default async function Restaurant({ params }: RestaurantProps) {
  const {id} = params; 
  const res = await fetch(`${env.API_URL}/restaurants?id=${id}`);
  const restaurant: IRestaurant = await res.json();

  const resProducts = await fetch(`${env.API_URL}/products/restaurant/${id}`);
  const products: any = await resProducts.json();

  return (
    <>
      <Container className="flex flex-col gap-6 text-black">
        <section className="flex flex-col md:flex-row">
          <Image
            className="rounded-t-md lg:rounded-none lg:rounded-l-md"
            width={500}
            height={400}
            alt="Foto do restaurante"
            src={"/images/lounge.jpg"}
          />
          <div className="p-4 flex gap-6 flex-col items-baseline bg-white rounded-b-md lg:rounded-none lg:rounded-r-md lg:p-8">
            <h3 className="text-xl font-bold">{restaurant.name}</h3>
            <p>{restaurant.description ? restaurant.description : "Descrição não disponível"}</p>
            <p>{restaurant.address ? restaurant.address : "Endereço não disponível"}</p>
            <button className="border-none font-bold bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600 delay-50 transition-colors">Abrir no Maps</button>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold my-12">Comidas disponíveis</h3>
          {products.length === 0 && (<p>Este restaurante não possui comidas disponíveis no momento.</p>
          )}
          <div className="flex gap-12 flex-col md:flex-row">
            {products.map((product: any) => (
              <div key={product.id} className="flex gap-6 flex-col items-baseline">
                <Image
                  className="rounded-lg"
                  width={120}
                  height={60}
                  alt="Foto do prato"
                  src={product.imageUrl}
                />
                <h3 className="text-md font-bold text-1xl">{product.name}</h3>
                <p className="max-w-48">{product.description}</p>
                <p className="font-bold text-1xl text-blue-500">R$ {product.price.toFixed(2).replace('.', ',')}</p>
                <button className="border-none font-bold bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600 delay-50 transition-colors">Adicionar</button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold my-12">Mais restaurantes da mesma categoria</h3>
          <div className="flex gap-12 flex-col md:flex-row">
            <div className="flex gap-6 flex-col items-baseline">
              <h3 className="text-md font-bold">Nome do restaurante</h3>
              <p>Descrição do restaurante</p>
              <p>Endereço do restaurante</p>
              <button className="border-none font-bold bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600 delay-50 transition-colors">Conferir</button>
            </div>
            <div className="flex gap-6 flex-col items-baseline">
              <h3 className="text-md font-bold">Nome do restaurante</h3>
              <p>Descrição do restaurante</p>
              <p>Endereço do restaurante</p>
              <button className="border-none font-bold bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600 delay-50 transition-colors">Conferir</button>
            </div>
            <div className="flex gap-6 flex-col items-baseline">
              <h3 className="text-md font-bold">Nome do restaurante</h3>
              <p>Descrição do restaurante</p>
              <p>Endereço do restaurante</p>
              <button className="border-none font-bold bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600 delay-50 transition-colors">Conferir</button>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}