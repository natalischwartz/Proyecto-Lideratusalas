import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Services />
        <Testimonials />
        <Contact />   */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;