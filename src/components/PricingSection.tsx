import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, Video, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const PricingSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Berapa <span className="text-primary">Investasi</span> Workshop Ini?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Investasi sekali, manfaatnya bisa dipakai selamanya untuk bisnis Anda!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Offline Workshop */}
          <Card className={`p-6 sm:p-8 relative overflow-hidden border-2 border-primary/20 hover:shadow-large transition-all duration-300 ${sectionVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'}`}>
            <div className="absolute top-0 right-0 bg-gradient-accent text-accent-foreground px-3 sm:px-4 py-1 sm:py-2 rounded-bl-lg font-bold text-xs sm:text-sm">
              REKOMENDASI
            </div>
            
            <div className="text-center mb-4 sm:mb-6">
              <div className="bg-gradient-primary p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Workshop Offline</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Yogyakarta - Kamis, 31 Juli 2025</p>
            </div>

            <div className="text-center mb-4 sm:mb-6">
              <div className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Harga Normal</div>
              <div className="text-lg sm:text-2xl line-through text-muted-foreground mb-1 sm:mb-2">Rp 990.000</div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">Rp 500.000</div>
              
              <div className="bg-warning/10 border border-warning/30 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <p className="font-semibold text-warning text-xs sm:text-sm mb-1 sm:mb-2">KHUSUS 10 PENDAFTAR TERCEPAT:</p>
                <div className="space-y-1 text-xs sm:text-sm">
                  <p>🟠 <strong>2 tiket:</strong> @Rp 450.000</p>
                  <p>🟠 <strong>3 tiket:</strong> @Rp 400.000</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Workshop intensif 4.5 jam (13.00-17.30 WIB)</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Bertemu langsung dengan trainer berpengalaman</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Interaksi langsung & networking</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Mendapat "Kitab CS" eksklusif</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Study case mendalam & personal</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Terbatas 50 peserta (kelas kecil)</span>
              </div>
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              className="w-full text-base sm:text-lg py-2 sm:py-3 h-auto"
              asChild
            >
              <a 
                href="https://wa.me/6281353025302?text=hai%20kak%20Asfi%20saya%20tertarik%20workshop%20Jagoan%20CS%20Yogyakarta%20bisa%20dibantu%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                DAFTAR OFFLINE
              </a>
            </Button>
          </Card>

          {/* Online Workshop */}
          <Card className={`p-6 sm:p-8 relative overflow-hidden hover:shadow-medium transition-all duration-300 ${sectionVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'}`} style={{ animationDelay: '200ms' }}>
            <div className="text-center mb-4 sm:mb-6">
              <div className="bg-gradient-primary p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Video className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Workshop Online</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Via Zoom - Kamis, 31 Juli 2025</p>
            </div>

            <div className="text-center mb-4 sm:mb-6">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">Rp 300.000</div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-2 sm:p-3">
                <p className="text-xs sm:text-sm text-primary font-medium">Tidak bisa ke venue? Join online!</p>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Workshop intensif 4.5 jam via Zoom</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Ikut dari mana saja (fleksibel)</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Materi workshop yang sama</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Sesi tanya jawab interaktif</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Rekaman workshop untuk review</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Lebih hemat waktu & biaya transportasi</span>
              </div>
            </div>

            <Button 
              variant="outline" 
              size="lg" 
              className="w-full text-base sm:text-lg py-2 sm:py-3 h-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a 
                href="https://wa.me/6281353025302?text=hai%20kak%20Asfi%20saya%20tertarik%20workshop%20Online%20Zoom%20Jagoan%20CS%20bisa%20dibantu%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                DAFTAR ONLINE
              </a>
            </Button>
          </Card>
        </div>

        {/* Value Comparison */}
        <Card className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Bandingkan Nilai Investasi</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 sm:p-6 mb-3 sm:mb-4">
                <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-destructive">❌ Tanpa Workshop</h4>
                <ul className="text-xs sm:text-sm space-y-2 text-left">
                  <li>• Closing rate rendah terus-menerus</li>
                  <li>• Budget marketing naik, omset stagnan</li>
                  <li>• Lead terbuang sia-sia</li>
                  <li>• Tim CS tidak sistematis</li>
                  <li>• Potensi kerugian jutaan rupiah/bulan</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-success/10 border border-success/30 rounded-lg p-4 sm:p-6 mb-3 sm:mb-4">
                <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-success">✅ Dengan Workshop</h4>
                <ul className="text-xs sm:text-sm space-y-2 text-left">
                  <li>• Closing rate meningkat signifikan</li>
                  <li>• Budget tetap, omset naik berlipat</li>
                  <li>• Setiap lead jadi lebih bernilai</li>
                  <li>• Sistem CS yang solid dan terukur</li>
                  <li>• ROI berlipat ganda untuk jangka panjang</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <p className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4">
              🎯 Investasi sekali, manfaatnya selamanya!
            </p>
            <p className="text-muted-foreground text-sm sm:text-base">
              Bayangkan jika closing rate Anda naik hanya 10% saja, berapa tambahan omset yang akan Anda dapatkan?
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};