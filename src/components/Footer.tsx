import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Book, MessageCircleWarningIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* In-House Training Section */}
        <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 lg:mb-12">
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-foreground mb-2 sm:mb-3 lg:mb-4">
              Butuh Solusi <span className="text-accent">Khusus</span> Untuk Perusahaan?
            </h3>
            <p className="text-primary-foreground/90 max-w-3xl mx-auto text-xs sm:text-sm lg:text-base">
              Creativy menyediakan <strong>paket In-House Training Tim CS</strong> dengan materi dan pembahasan 
              yang custom sesuai kebutuhan perusahaan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
            {[
              { 
                icon: <MessageCircle className="text-primary-foreground" />,
                title: "Privat & Mendalam",
                desc: "Karena privat, jadi bisa bedah chat lebih mendalam"
              },
              { 
                icon: <Book className="text-primary-foreground" />,
                title: "Kitab CS Custom",
                desc: "Menyusun Kitab CS sesuai keadaan dan kebutuhan perusahaan"
              },
              { 
                icon: <MessageCircleWarningIcon className="text-primary-foreground" />,
                title: "Konsultasi Khusus",
                desc: "Mendapatkan saran dan masukan sesuai kondisi perusahaan"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-2 sm:p-3">
                <div className="bg-accent/20 p-2 sm:p-3 lg:p-4 rounded-full w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">{item.title}</h4>
                <p className="text-primary-foreground/80 text-xs sm:text-sm leading-tight sm:leading-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-primary-foreground/90 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">
              <strong>Sesi privat lebih panjang:</strong> 09.00-16.00 WIB | Bisa offline + grup support
            </p>
            <Button 
              variant="accent" 
              size="lg"
              className="text-xs sm:text-sm lg:text-base px-4 sm:px-6 lg:px-8 py-1 sm:py-2 lg:py-3 h-auto w-full sm:w-auto"
              asChild
            >
              <a 
                href="https://wa.me/6281353025302?text=Hai%20kak%20Asfi%20saya%20mau%20konsultasi%20soal%20In%20House%20training%20CS%20dengan%20mas%20Bayu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1 sm:mr-2" />
                KONSULTASI IN-HOUSE TRAINING
              </a>
            </Button>
          </div>
        </Card>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
          {[
            {
              icon: <MessageCircle className="text-accent" />,
              title: "WhatsApp",
              text: "+62 813-5302-5302"
            },
            {
              icon: <MapPin className="text-accent" />,
              title: "Lokasi",
              text: "Yogyakarta, Indonesia"
            },
            {
              icon: <Mail className="text-accent" />,
              title: "Workshop",
              text: "Kamis, 31 Juli 2025"
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-2 sm:p-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mx-auto mb-2 sm:mb-3 lg:mb-4">
                {item.icon}
              </div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">{item.title}</h4>
              <p className="text-primary-foreground/80 text-xs sm:text-sm lg:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="text-center border-t border-white/20 pt-4 sm:pt-6 lg:pt-8">
          <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">POWERED BY:</h4>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-accent mb-1 sm:mb-2">
            PT SOLUSI KREATIF BERKAH
          </p>
          <p className="text-primary-foreground/80 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">
            YOGYAKARTA, INDONESIA
          </p>
          <p className="text-xs text-primary-foreground/60">
            COPYRIGHT © 2025 · ALL RIGHTS RESERVED
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-white/20">
          <div className="flex justify-center">
            <img 
              src="/images/logo.png" 
              alt="Company Logo" 
              className="w-16 sm:w-20 md:w-24 lg:w-32 shadow-inner shadow-stone-900 rounded-lg p-1 sm:p-2"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};