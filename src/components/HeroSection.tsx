import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Customer Service Training Workshop"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">

            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Workshop{" "}
              <span className="text-accent">JAGOAN CS ONLINE</span>
            </h1>

            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 font-medium">
              Tingkatkan <span className="text-accent font-bold">Closing Rate CS + AOV</span> hingga 2x lipat!
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
              <h3 className="text-lg font-semibold text-primary-foreground mb-4">Target Workshop:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-primary-foreground/90">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span>Closing Rate CS Meningkat</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span>Average Order Value Naik</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span>Omzet Bisnis Otomatis Meningkat</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span>Tim CS Lebih Efektif</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="cta" 
                size="lg"
                className="text-lg px-8 py-4 h-auto"
                asChild
              >
                <a 
                  href="https://wa.me/6281353025302?text=hai%20kak%20Asfi%20saya%20tertarik%20workshop%20Jagoan%20CS%20Yogyakarta%20bisa%20dibantu%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DAFTAR SEKARANG
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 h-auto bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20"
              >
                Lihat Detail
              </Button>
            </div>
          </div>

          {/* Right Column - Event Details Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="hero-visual width-full max-w-md border-b-4 rounded-full">
              <img src="/images/hero-image.png" alt="Hero Visual" className="border-b-4 rounded-full"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};