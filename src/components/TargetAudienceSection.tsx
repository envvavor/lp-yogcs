import { Card } from "@/components/ui/card";
import { Users, TrendingUp, MessageCircle, Target, Briefcase, HeartHandshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  FileText,
  FileSpreadsheet,
  Calculator,
  Video,
  PlayCircle,
  RefreshCcw,
  GraduationCap,
  Users2,
  CalendarClock,
} from "lucide-react";

export const TargetAudienceSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const audiences = [
      {
      icon: FileText,
      title: "Soft File Materi",
      description: "Materi pelatihan dalam format PDF atau dokumen digital yang bisa dipelajari kapan saja."
    },
    {
      icon: FileSpreadsheet,
      title: "Template Laporan Harian",
      description: "Template siap pakai untuk memudahkan monitoring performa harian tim CS."
    },
    {
      icon: Calculator,
      title: "File Kalkulator Bisnis",
      description: "Tools perhitungan sederhana untuk bantu analisa profit, ROAS, dan efisiensi iklan."
    },
    {
      icon: Video,
      title: "Video Tutorial",
      description: "Video penjelasan teknis untuk setiap langkah penting dalam iklan dan closing."
    },
    {
      icon: PlayCircle,
      title: "Rekaman Kelas",
      description: "Akses ulang rekaman setiap sesi belajar jika kamu ketinggalan atau ingin review materi."
    },
    {
      icon: RefreshCcw,
      title: "Free Reseat",
      description: "Kesempatan mengikuti kelas ulang tanpa biaya tambahan jika belum memahami materi."
    },
    {
      icon: GraduationCap,
      title: "Pengajar Berpengalaman",
      description: "Mentor yang sudah terbukti sukses menjalankan strategi iklan dan closing."
    },
    {
      icon: Users2,
      title: "Group Support",
      description: "Bergabung dalam komunitas belajar interaktif bersama peserta dan mentor."
    },
    {
      icon: CalendarClock,
      title: "Webinar Berkala",
      description: "Update ilmu dan strategi terbaru lewat sesi webinar eksklusif setiap periode tertentu."
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-primary">Fasilitas</span> Yang DIdapatkan?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Kelas advertiser for beginner 
            <span className="font-semibold text-primary"> menyediakan berikut untuk para siswa nya</span>
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

        {/* Key Problems Section
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
        </Card> */}
      </div>
    </section>
  );
};