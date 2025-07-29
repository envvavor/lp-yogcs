import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Users, BookOpen, MessageSquare, ChartBar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const BenefitsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const benefits = [
    {
      icon: Target,
      title: "Closing Rate Meningkat",
      description: "Tingkatkan persentase konversi lead menjadi pembeli dengan teknik closing yang terbukti efektif"
    },
    {
      icon: TrendingUp,
      title: "AOV (Average Order Value) Naik",
      description: "Pelajari teknik up-selling dan cross-selling untuk meningkatkan nilai rata-rata pembelian"
    },
    {
      icon: MessageSquare,
      title: "Penawaran Sulit Ditolak",
      description: "Strategi membuat penawaran yang menarik dan sulit untuk ditolak oleh calon customer"
    },
    {
      icon: Users,
      title: "Teknik Hypno Selling",
      description: "Meyakinkan calon customer dengan teknik psikologi penjualan yang powerful"
    },
    {
      icon: ChartBar,
      title: "Study Case Nyata",
      description: "Bedah kasus nyata bagaimana melobi prospek sulit agar mau transfer"
    },
    {
      icon: BookOpen,
      title: "Kitab CS Eksklusif",
      description: "Dapatkan 'Kitab CS' untuk memaksimalkan closing rate tim customer service Anda"
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Apa Saja Yang Akan Anda <span className="text-primary">Pelajari?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Workshop ini tidak hanya membahas teknik closing dan handling objection, 
            tapi juga <span className="font-semibold text-primary">membangun sistem CS online yang solid</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className={`p-4 sm:p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary ${sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-gradient-primary p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Detailed Materials */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 sm:p-8 border-2 border-primary/10">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Materi Workshop Lengkap</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-primary">Skill Development:</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Memoles Skill Closing CS/admin online</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Strategi membuat <strong>Penawaran yang Sulit Ditolak</strong></span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span><strong>Teknik Hypno Selling</strong> untuk meyakinkan calon customer</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Strategi <strong>Follow Up</strong> jitu dan terukur</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-primary">Advanced Techniques:</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span><strong>Membedah Study Case</strong> melobi prospek sulit agar transfer</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Rahasia jitu <strong>Teknik Up Selling dan Cross Selling</strong></span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Gunakan <strong>"Kitab CS"</strong> untuk memaksimalkan closing</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Membuat <strong>sistem tim CS online</strong> yang efektif</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};