import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4">
        {/* In-House Training Section */}
        <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 sm:p-8 mb-8 sm:mb-12">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-3 sm:mb-4">
              Butuh Solusi <span className="text-accent">Khusus</span> Untuk Perusahaan?
            </h3>
            <p className="text-primary-foreground/90 max-w-3xl mx-auto text-sm sm:text-base">
              Creativy menyediakan <strong>paket In-House Training Tim CS</strong> dengan materi dan pembahasan 
              yang custom sesuai kebutuhan perusahaan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="text-center">
              <div className="bg-accent/20 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <span className="text-lg sm:text-2xl">💎</span>
              </div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Privat & Mendalam</h4>
              <p className="text-xs sm:text-sm text-primary-foreground/80">
                Karena privat, jadi bisa bedah chat lebih mendalam
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/20 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <span className="text-lg sm:text-2xl">💎</span>
              </div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Kitab CS Custom</h4>
              <p className="text-xs sm:text-sm text-primary-foreground/80">
                Menyusun Kitab CS sesuai keadaan dan kebutuhan perusahaan
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/20 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <span className="text-lg sm:text-2xl">💎</span>
              </div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Konsultasi Khusus</h4>
              <p className="text-xs sm:text-sm text-primary-foreground/80">
                Mendapatkan saran dan masukan sesuai kondisi perusahaan
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-primary-foreground/90 mb-3 sm:mb-4 text-sm sm:text-base">
              <strong>Sesi privat lebih panjang:</strong> 09.00-16.00 WIB | Bisa offline + grup support
            </p>
            <Button 
              variant="accent" 
              size="lg"
              className="text-sm sm:text-lg px-6 sm:px-8 py-2 sm:py-3 h-auto"
              asChild
            >
              <a 
                href="https://wa.me/6281353025302?text=Hai%20kak%20Asfi%20saya%20mau%20konsultasi%20soal%20In%20House%20training%20CS%20dengan%20mas%20Bayu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                KONSULTASI IN-HOUSE TRAINING
              </a>
            </Button>
          </div>
        </Card>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="text-center">
            <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-accent" />
            <h4 className="font-semibold mb-2 text-sm sm:text-base">WhatsApp</h4>
            <p className="text-primary-foreground/80 text-sm sm:text-base">+62 813-5302-5302</p>
          </div>

          <div className="text-center">
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-accent" />
            <h4 className="font-semibold mb-2 text-sm sm:text-base">Lokasi</h4>
            <p className="text-primary-foreground/80 text-sm sm:text-base">Yogyakarta, Indonesia</p>
          </div>

          <div className="text-center">
            <Mail className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-accent" />
            <h4 className="font-semibold mb-2 text-sm sm:text-base">Workshop</h4>
            <p className="text-primary-foreground/80 text-sm sm:text-base">Kamis, 31 Juli 2025</p>
          </div>
        </div>

        {/* Company Info */}
        <div className="text-center border-t border-white/20 pt-6 sm:pt-8">
          <h4 className="text-lg sm:text-xl font-bold mb-2">POWERED BY:</h4>
          <p className="text-base sm:text-lg font-semibold text-accent mb-2">PT SOLUSI KREATIF BERKAH</p>
          <p className="text-primary-foreground/80 mb-3 sm:mb-4 text-sm sm:text-base">YOGYAKARTA, INDONESIA</p>
          <p className="text-xs sm:text-sm text-primary-foreground/60">
            COPYRIGHT © 2025 · ALL RIGHTS RESERVED
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
          <p className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
            Jangan biarkan kesempatan ini terlewat! 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              variant="cta" 
              size="lg"
              className="text-sm sm:text-lg px-6 sm:px-8 py-2 sm:py-3 h-auto"
              asChild
            >
              <a 
                href="https://wa.me/6281353025302?text=hai%20kak%20Asfi%20saya%20tertarik%20workshop%20Jagoan%20CS%20Yogyakarta%20bisa%20dibantu%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                DAFTAR WORKSHOP SEKARANG
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};