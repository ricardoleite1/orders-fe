import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Restaurants } from "@/components/Restaurants";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Restaurants />
      </Container>
      <Footer />
    </>

  );
}
