import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, AlertCircle, TrendingUp } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6">
            Tidak Perlu <span className="text-accent">Menunda-Nunda</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 font-semibold">
            ACTION NOW!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Left Side - Problem */}
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 sm:p-8">
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-3 sm:mb-4">
                  Coba Bandingkan Kerugiannya...
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed text-sm sm:text-base">
                  Jika leads di bisnis Anda tidak bisa dikonversi menjadi omset secara optimal. 
                  Akhirnya... <span className="font-bold text-accent">omset jalan di tempat</span> padahal 
                  budget marketing sudah diperbanyak.
                </p>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3 text-primary-foreground/80 text-sm sm:text-base">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-destructive rounded-full flex-shrink-0"></div>
                <span>Lead masuk banyak, tapi closing rendah</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-destructive rounded-full flex-shrink-0"></div>
                <span>Budget iklan terus naik, omset stagnan</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-destructive rounded-full flex-shrink-0"></div>
                <span>Tim CS tidak sistematis & tidak terukur</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-destructive rounded-full flex-shrink-0"></div>
                <span>Potensi kehilangan jutaan rupiah setiap bulan</span>
              </div>
            </div>
          </Card>

          {/* Right Side - Solution */}
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 sm:p-8">
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-3 sm:mb-4">
                  ...Dengan Manfaatnya
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed text-sm sm:text-base">
                  Jika bisnis Anda berhasil menemukan pola CS yang optimal sehingga 
                  <span className="font-bold text-accent"> omset dan profit bisa naik</span> dengan 
                  lead yang sama.
                </p>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3 text-primary-foreground/80 text-sm sm:text-base">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span>Closing rate meningkat 2x lipat atau lebih</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span>Budget marketing tetap, omset naik berlipat</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span>Sistem CS yang solid dan terukur</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span>ROI berlipat ganda untuk jangka panjang</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Final Message */}
        <div className="text-center mt-12 sm:mt-16">
          <h4 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-3 sm:mb-4">
            Investasi Sekali, Manfaatnya Selamanya!
          </h4>
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Besar harapan kami, setelah ikut kelas ini brand Anda semakin besar dan bermanfaat.
          </p>
        </div>
      </div>
    </section>
  );
};