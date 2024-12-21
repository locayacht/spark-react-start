import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 animate-gradient-move">
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to Your Next Project
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
          Build something amazing with modern web technologies and beautiful design
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;