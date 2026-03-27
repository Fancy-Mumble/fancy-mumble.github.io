import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { MediaShowcase } from "./components/MediaShowcase";
import { Downloads } from "./components/Downloads";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MediaShowcase />
        <Downloads />
      </main>
      <Footer />
    </>
  );
}
