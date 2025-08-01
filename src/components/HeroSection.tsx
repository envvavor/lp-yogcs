import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, TrendingUp } from "lucide-react";
import DarkVeil from "../DarkVeil.tsx";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    setSectionVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen mt-11 sm:mt-0">
      {/* Responsive Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Mobile-optimized background */}
        <img
          src="/images/hero-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover sm:hidden"
        />
        {/* Desktop-optimized background */}
        <img
          src="/images/hero-bg.jpg"
          alt="Background"
          className="hidden sm:block w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div
        className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
          sectionVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 mt-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Belajar{" "}
                <span className="text-yellow-400">
                  Ngiklan dari Nol, Biar Bisnismu Makin Nanjak!
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 font-medium">
                Sekolah Advertiser{" "}
                <span className="text-yellow-400 font-bold">
                  for Beginners — kelas online
                </span>{" "}
                intensif khusus buat kamu yang pengen bisa ngiklan sendiri &
                dapet hasil nyata.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-white/20">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                  Di level begginer ini kita akan mempelajari:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-white/90 text-sm sm:text-base">
                  {[
                    "Iklan Click-to-WhatsApp",
                    "Instagram Ads", 
                    "Strategi Landing Page to WhatsApp",
                    "Facebook Ads Dasar",
                    "Analisis Hasil Iklan"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button
                  variant="cta"
                  size="lg"
                  className="text-white sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 shadow-lg"
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
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-r from-white to-green-500 rounded-full blur-lg opacity-50 animate-pulse-slow"></div>
                <img
                  src="/images/hero-image.png"
                  alt="Hero Visual"
                  className="relative w-full h-auto rounded-full border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};