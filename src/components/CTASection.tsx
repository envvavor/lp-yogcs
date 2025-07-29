import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, AlertCircle, TrendingUp } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Tidak Perlu <span className="text-accent">Menunda-Nunda</span>
          </h2>
          <p className="text-2xl text-primary-foreground/90 font-semibold">
            ACTION NOW!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Problem */}
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-8 h-8 text-accent mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Coba Bandingkan Kerugiannya...
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Jika leads di bisnis Anda tidak bisa dikonversi menjadi omset secara optimal. 
                  Akhirnya... <span className="font-bold text-accent">omset jalan di tempat</span> padahal 
                  budget marketing sudah diperbanyak.
                </p>
              </div>
            </div>

            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full"></div>
                <span>Lead masuk banyak, tapi closing rendah</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full"></div>
                <span>Budget iklan terus naik, omset stagnan</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full"></div>
                <span>Tim CS tidak sistematis & tidak terukur</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full"></div>
                <span>Potensi kehilangan jutaan rupiah setiap bulan</span>
              </div>
            </div>
          </Card>

          {/* Right Side - Solution */}
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
            <div className="flex items-start gap-4 mb-6">
              <TrendingUp className="w-8 h-8 text-accent mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  ...Dengan Manfaatnya
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Jika bisnis Anda berhasil menemukan pola CS yang optimal sehingga 
                  <span className="font-bold text-accent"> omset dan profit bisa naik</span> dengan 
                  lead yang sama.
                </p>
              </div>
            </div>

            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Closing rate meningkat 2x lipat atau lebih</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Budget marketing tetap, omset naik berlipat</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Sistem CS yang solid dan terukur</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>ROI berlipat ganda untuk jangka panjang</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Urgency Section */}
        <Card className="mt-16 bg-gradient-accent p-8 border-0 shadow-large max-w-4xl mx-auto">
          <div className="text-center">
            <Clock className="w-16 h-16 mx-auto mb-6 text-accent-foreground" />
            <h3 className="text-3xl font-bold text-accent-foreground mb-4">
              KHUSUS 10 PENDAFTAR TERCEPAT!
            </h3>
            <p className="text-xl text-accent-foreground/90 mb-6">
              Kesempatan terbatas - Jangan sampai kehabisan kuota!
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/20 rounded-lg p-4">
                <p className="font-bold text-accent-foreground">🟠 2 Tiket</p>
                <p className="text-accent-foreground/90">@Rp 450.000</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="font-bold text-accent-foreground">🟠 3 Tiket</p>
                <p className="text-accent-foreground/90">@Rp 400.000</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta" 
                size="lg"
                className="text-xl px-12 py-4 h-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-large"
                asChild
              >
                <a 
                  href="https://wa.me/6281353025302?text=hai%20kak%20Asfi%20saya%20tertarik%20workshop%20Jagoan%20CS%20Yogyakarta%20bisa%20dibantu%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DAFTAR OFFLINE SEKARANG
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-xl px-12 py-4 h-auto bg-white/10 border-white/30 text-accent-foreground hover:bg-white/20"
                asChild
              >
                <a 
                  href="https://wa.me/6281353025302?text=hai%20kak%20Asfi%20saya%20tertarik%20workshop%20Online%20Zoom%20Jagoan%20CS%20bisa%20dibantu%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DAFTAR ONLINE (Rp 300K)
                </a>
              </Button>
            </div>
          </div>
        </Card>

        {/* Final Message */}
        <div className="text-center mt-16">
          <h4 className="text-2xl font-bold text-primary-foreground mb-4">
            Investasi Sekali, Manfaatnya Selamanya!
          </h4>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Besar harapan kami, setelah ikut kelas ini brand Anda semakin besar dan bermanfaat.
          </p>
        </div>
      </div>
    </section>
  );
};