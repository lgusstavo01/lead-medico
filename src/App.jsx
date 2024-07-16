import { Carousel } from "./components/Carousel";
import { Conquistas } from "./components/Conquistas";
import { Duvidas } from "./components/Duvidas";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { Methody } from "./components/Methody";
import { Testimmonials } from "./components/Testimonials";
import { Form } from "./components/Form";
import { Faq } from './components/Faq'

export function App() {
  return (
    <div>
      <Hero />
      <Info />
      <Duvidas />
      <Conquistas />
      <Methody />
      <Carousel />
      <Testimmonials />
      <About />
      <Form />
      {/* <Faq /> */}
    </div>
  );
}
