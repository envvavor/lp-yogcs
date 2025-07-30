import { Card } from "@/components/ui/card";
import { Users, TrendingUp, MessageCircle, Target, Briefcase, HeartHandshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const TargetAudienceSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const audiences = [
    {
      icon: Briefcase,
      title: "Pembisnis",
      description: "Yang ingin memperbaiki Closing Rate tim CS untuk meningkatkan konversi lead WA menjadi penjualan"
    },
    {
      icon: TrendingUp,
      title: "Brand/Perusahaan",
      description: "Yang tidak ingin menaikkan budget iklan, tapi tetap ingin omset maksimal dengan budget tetap"
    },
    {
      icon: MessageCircle,
      title: "Tim Customer Service",
      description: "Yang nilai rata-rata pembeliannya masih rendah dan kesulitan menghadapi penolakan"
    },
    {
      icon: Target,
      title: "Bisnis Online",
      description: "Yang lead calon pembelinya dilayani online terutama melalui WhatsApp"
    },
    {
      icon: Users,
      title: "Owner Bisnis",
      description: "Yang ingin menambah CS/Admin Online tapi tidak tahu bagaimana melatihnya dengan efektif"
    },
    {
      icon: HeartHandshake,
      title: "Manajemen",
      description: "Yang merasa tim CS kurang semangat, kurang skill, dan perlu upgrade performance"
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-primary">Cocok Untuk</span> Siapa Kelas Ini?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Workshop ini dirancang khusus untuk berbagai profil bisnis yang ingin 
            <span className="font-semibold text-primary"> meningkatkan performa CS online</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {audiences.map((audience, index) => (
            <Card key={index} className={`p-4 sm:p-6 h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group ${sectionVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'}`} style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex flex-col h-full">
                <div className="bg-gradient-primary p-2 sm:p-3 rounded-lg w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <audience.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-primary">{audience.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{audience.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Problems Section */}
        <Card className="bg-gradient-to-r from-warning/10 to-accent/10 p-6 sm:p-8 border-2 border-warning/20">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Masalah Yang Sering Dihadapi:</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-warning">Sebelum Workshop:</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-destructive flex-shrink-0">•</span>
                  <span>Closing rate masih rendah, belum sesuai harapan</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-destructive flex-shrink-0">•</span>
                  <span>Banyak lead masuk tapi konversi rendah</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-destructive flex-shrink-0">•</span>
                  <span>Tim CS bingung cara follow up yang efektif</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-destructive flex-shrink-0">•</span>
                  <span>Omset jalan di tempat meski budget marketing naik</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-success">Setelah Workshop:</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-success flex-shrink-0">•</span>
                  <span>Closing rate meningkat signifikan</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-success flex-shrink-0">•</span>
                  <span>Lead yang sama menghasilkan omset lebih besar</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-success flex-shrink-0">•</span>
                  <span>Tim CS lebih percaya diri dan sistematis</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-success flex-shrink-0">•</span>
                  <span>Budget marketing tetap, omset naik</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};