import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Users, BookOpen, MessageSquare, ChartBar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Lightbulb } from "lucide-react";
import {
  CreditCard,
  Globe,
  LayoutDashboard,
  MousePointerClick,
  ShieldCheck,
  BarChart3,
  SlidersHorizontal,
  MessageCircle,
  Send,
  ClipboardList,
  DollarSign,
} from "lucide-react";

export const BenefitsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const benefits = [
    {
      icon: Globe,
      title: "Akun Bisnis & Fanspage",
      description: "Panduan lengkap membuat akun bisnis, akun iklan, dan fanspage untuk kebutuhan kampanye."
    },
    {
      icon: CreditCard,
      title: "Persiapan Pembayaran Iklan",
      description: "Menyiapkan metode pembayaran yang tepat dan aman untuk iklan Meta Ads."
    },
    {
      icon: LayoutDashboard,
      title: "Teknis Landing Page",
      description: "Belajar struktur dan elemen penting dalam pembuatan landing page yang efektif."
    },
    {
      icon: MousePointerClick,
      title: "Pemasangan Pixel & Event",
      description: "Langkah-langkah memasang Pixel dan Event untuk tracking performa iklan secara akurat."
    },
    {
      icon: ShieldCheck,
      title: "Verifikasi Domain",
      description: "Tutorial verifikasi domain di Business Manager agar iklan berjalan optimal."
    },
    {
      icon: BarChart3,
      title: "Anatomi Meta Ads",
      description: "Mengenal struktur dasar Meta Ads dan bagaimana iklan bekerja dalam platform Meta."
    },
    {
      icon: SlidersHorizontal,
      title: "Advantage vs Manual",
      description: "Perbandingan fitur Advantage dan Manual dalam pengaturan iklan Meta Ads."
    },
    {
      icon: Send,
      title: "Iklan Sales - CTWA",
      description: "Cara setting iklan sales menggunakan metode Click to WhatsApp (CTWA)."
    },
    {
      icon: MessageCircle,
      title: "Iklan Traffic - IG Ads",
      description: "Panduan setting iklan traffic untuk Instagram guna menjangkau lebih banyak audience."
    },
    {
      icon: ClipboardList,
      title: "Iklan Sales - Landing Page",
      description: "Teknik menjalankan iklan sales dengan mengarahkan ke landing page."
    },
    {
      icon: DollarSign,
      title: "Evaluasi Performa Iklan",
      description: "Cara menganalisis hasil iklan CTWA, IG Ads, dan Landing Page untuk optimasi."
    },
    {
      icon: TrendingUp,
      title: "Scaling Budget Iklan",
      description: "Strategi menaikkan budget iklan secara efektif tanpa merusak performa."
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Detailed Materials */}
        <Card className="bg-gradient-to-r from-warning/10 to-accent/10 p-6 sm:p-8 border-2 border-warning/20 mb-20">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            
            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                <Lightbulb className="w-6 h-6 text-accent" />
                Sekolah Advertiser for Beginners
                <Lightbulb className="w-6 h-6 text-accent" />
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                Capek ngiklan tapi boncos terus? Atau belum pernah berani ngiklan karena takut salah langkah?
              </p>
            </div>

            {/* Content */}
            <div className="text-gray-800 dark:text-gray-200 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              <p className="mb-4">
                Ikuti <span className="font-semibold text-accent">pelatihan online selama 6x pertemuan</span> via Zoom, dengan total <strong>18 jam</strong> belajar bersama mentor yang sudah berpengalaman.
              </p>
              <p>
                Kelas ini didesain <span className="text-primary font-semibold">untuk kamu yang masih nol pengalaman</span>, tapi punya keinginan kuat untuk menjadi advertiser yang handal.
              </p>
            </div>
          </div>
        </Card>
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Materi yang <span className="text-primary">Dipelajari?</span>
          </h2>
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
      </div>
    </section>
  );
};