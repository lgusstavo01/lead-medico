import {Carousel} from "./components/Carousel";
import { Conquistas } from "./components/Conquistas";

import { Duvidas } from "./components/Duvidas";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { Methody } from "./components/Methody";
import { Testimmonials } from "./components/Testimonials";

export function App() {
  return (
    <div>
      <Hero />
      <Info />
      <Duvidas />
      <Conquistas />
      <Methody />
      <Carousel />
      <Testimmonials/>
    </div>
  );
}
