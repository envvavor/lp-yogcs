import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden mt-11 sm:mt-0">
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
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
              Belajar{" "}
              <span className="text-accent">Ngiklan dari Nol, Biar Bisnismu Makin Nanjak!</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 font-medium">
              Sekolah Advertiser <span className="text-accent font-bold">for Beginners — kelas online</span> intensif khusus buat kamu yang pengen bisa ngiklan sendiri & dapet hasil nyata.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-white/20">
              <h3 className="text-base sm:text-lg font-semibold text-primary-foreground mb-3 sm:mb-4">Di level begginer ini kita akan mempelajari:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-primary-foreground/90 text-sm sm:text-base">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <span>Iklan Click-to-WhatsApp</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <span>Instagram Ads</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <span>Strategi Landing Page to WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button 
                variant="cta" 
                size="lg"
                className="text-primary-foreground sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto"
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
              {/* <Button 
                variant="outline" 
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20"
              >
                Lihat Detail
              </Button> */}
            </div>
          </div>

          {/* Right Column - Event Details Card */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="hero-visual w-full max-w-sm sm:max-w-md border-b-4 rounded-full">
              <img src="/images/hero-image.png" alt="Hero Visual" className="w-full h-auto border-b-4 rounded-full"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};