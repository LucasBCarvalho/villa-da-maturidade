import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

export default function Home() {
  return(
    <main>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </main>
  )
}