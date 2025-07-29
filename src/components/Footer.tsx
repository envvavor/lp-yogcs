import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        {/* In-House Training Section */}
        <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Butuh Solusi <span className="text-accent">Khusus</span> Untuk Perusahaan?
            </h3>
            <p className="text-primary-foreground/90 max-w-3xl mx-auto">
              Creativy menyediakan <strong>paket In-House Training Tim CS</strong> dengan materi dan pembahasan 
              yang custom sesuai kebutuhan perusahaan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <h4 className="font-semibold mb-2">Privat & Mendalam</h4>
              <p className="text-sm text-primary-foreground/80">
                Karena privat, jadi bisa bedah chat lebih mendalam
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <h4 className="font-semibold mb-2">Kitab CS Custom</h4>
              <p className="text-sm text-primary-foreground/80">
                Menyusun Kitab CS sesuai keadaan dan kebutuhan perusahaan
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <h4 className="font-semibold mb-2">Konsultasi Khusus</h4>
              <p className="text-sm text-primary-foreground/80">
                Mendapatkan saran dan masukan sesuai kondisi perusahaan
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-primary-foreground/90 mb-4">
              <strong>Sesi privat lebih panjang:</strong> 09.00-16.00 WIB | Bisa offline + grup support
            </p>
            <Button 
              variant="accent" 
              size="lg"
              className="text-lg px-8 py-3 h-auto"
              asChild
            >
              <a 
                href="https://wa.me/6281353025302?text=Hai%20kak%20Asfi%20saya%20mau%20konsultasi%20soal%20In%20House%20training%20CS%20dengan%20mas%20Bayu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                KONSULTASI IN-HOUSE TRAINING
              </a>
            </Button>
          </div>
        </Card>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <MessageCircle className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h4 className="font-semibold mb-2">WhatsApp</h4>
            <p className="text-primary-foreground/80">+62 813-5302-5302</p>
          </div>

          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h4 className="font-semibold mb-2">Lokasi</h4>
            <p className="text-primary-foreground/80">Yogyakarta, Indonesia</p>
          </div>

          <div className="text-center">
            <Mail className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h4 className="font-semibold mb-2">Workshop</h4>
            <p className="text-primary-foreground/80">Kamis, 31 Juli 2025</p>
          </div>
        </div>

        {/* Company Info */}
        <div className="text-center border-t border-white/20 pt-8">
          <h4 className="text-xl font-bold mb-2">POWERED BY:</h4>
          <p className="text-lg font-semibold text-accent mb-2">PT SOLUSI KREATIF BERKAH</p>
          <p className="text-primary-foreground/80 mb-4">YOGYAKARTA, INDONESIA</p>
          <p className="text-sm text-primary-foreground/60">
            COPYRIGHT © 2025 · ALL RIGHTS RESERVED
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-xl font-semibold mb-6">
            Jangan biarkan kesempatan ini terlewat! 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="lg"
              className="text-lg px-8 py-3 h-auto"
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