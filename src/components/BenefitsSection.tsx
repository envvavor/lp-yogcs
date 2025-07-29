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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apa Saja Yang Akan Anda <span className="text-primary">Pelajari?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Workshop ini tidak hanya membahas teknik closing dan handling objection, 
            tapi juga <span className="font-semibold text-primary">membangun sistem CS online yang solid</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className={`p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary ${sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-primary p-3 rounded-lg">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Detailed Materials */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 border-2 border-primary/10">
          <h3 className="text-2xl font-bold text-center mb-8">Materi Workshop Lengkap</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-4 text-primary">Skill Development:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span>Memoles Skill Closing CS/admin online</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span>Strategi membuat <strong>Penawaran yang Sulit Ditolak</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span><strong>Teknik Hypno Selling</strong> untuk meyakinkan calon customer</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span>Strategi <strong>Follow Up</strong> jitu dan terukur</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4 text-primary">Advanced Techniques:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span><strong>Membedah Study Case</strong> melobi prospek sulit agar transfer</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span>Rahasia jitu <strong>Teknik Up Selling dan Cross Selling</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span>Gunakan <strong>"Kitab CS"</strong> untuk memaksimalkan closing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
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