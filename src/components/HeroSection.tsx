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
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" />
              Angkatan #35 - Yogyakarta
            </div>

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
            <Card className="bg-white/95 backdrop-blur-sm p-8 max-w-md w-full shadow-large border-0">
              <div className="text-center mb-6">
                <div className="bg-gradient-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  SPECIAL PROMO
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Jadwal Workshop</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Kamis, 31 Juli 2025</p>
                    <p className="text-sm text-muted-foreground">Angkatan #35</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">13.00 - 17.30 WIB</p>
                    <p className="text-sm text-muted-foreground">4.5 Jam Intensif</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Yogyakarta</p>
                    <p className="text-sm text-muted-foreground">Lokasi akan dikonfirmasi</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Terbatas 50 Peserta</p>
                    <p className="text-sm text-muted-foreground">Kelas kecil untuk hasil maksimal</p>
                  </div>
                </div>
              </div>

              <div className="text-center border-t pt-6">
                <p className="text-sm text-muted-foreground mb-2">Investasi Normal</p>
                <p className="text-lg line-through text-muted-foreground">Rp 990.000</p>
                <p className="text-3xl font-bold text-primary mb-4">Rp 500.000</p>
                
                <div className="bg-accent/10 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-accent-foreground">KHUSUS 10 PENDAFTAR TERCEPAT:</p>
                  <p className="text-xs text-muted-foreground">🟠 2 tiket: @Rp 450rb</p>
                  <p className="text-xs text-muted-foreground">🟠 3 tiket: @Rp 400rb</p>
                </div>

                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  className="w-full text-lg py-3 h-auto"
                  asChild
                >
                  <a 
                    href="https://wa.me/6281353025302?text=hai%20kak%20Asfi%20saya%20tertarik%20workshop%20Jagoan%20CS%20Yogyakarta%20bisa%20dibantu%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GABUNG SEKARANG
                  </a>
                </Button>

                <p className="text-xs text-muted-foreground mt-3">
                  Atau join online via Zoom - Rp 300.000
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};