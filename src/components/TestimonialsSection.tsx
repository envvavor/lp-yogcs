import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const TestimonialsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const testimonials = [
    {
      name: "Novi Bayu",
      company: "Founder Kampung Marketer",
      content: "Saya dengan Tim Manajemen dan Leader sudah belajar di Creativy. Sangat Bermanfaat Bagi Temen-temen CS di Kampung Marketer",
      rating: 5
    },
    {
      name: "Ekalaya",
      company: "Konveksi Outer Wanita",
      content: "Mengikuti Workshop CS Ini Langsung Closing 5. Terima kasih mas Bayu atas materinya.",
      rating: 5,
    },
    {
      name: "Bay",
      company: "Kampung Inggris Pare Kediri",
      content: "Jagoan CS Ini sangat worth it, sangat bagus sekali untuk meningkatkan Closing CS. Calon customer menanyakan kursus, bagaimana CS bisa cepat tanggap.",
      rating: 5
    }
  ];

  const results = [
    {
      metric: "80%",
      label: "CLOSING RATE",
      description: "Pencapaian maksimal peserta workshop",
      color: "success"
    },
    {
      metric: "22%",
      label: "CLOSING RATE",
      description: "Rata-rata peningkatan peserta",
      color: "primary"
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Apa Kata <span className="text-primary">Peserta Workshop?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimoni nyata dari peserta yang telah merasakan manfaat workshop Jagoan CS
          </p>
        </div>

        {/* Results Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {results.map((result, index) => (
            <Card key={index} className={`p-6 sm:p-8 text-center bg-gradient-to-br ${
              result.color === 'success' 
                ? 'from-success/10 to-success/20 border-success/30' 
                : 'from-primary/10 to-primary/20 border-primary/30'
            } hover:shadow-large transition-all duration-300`}>
              <div className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 ${
                result.color === 'success' ? 'text-success' : 'text-primary'
              }`}>
                {result.metric}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{result.label}</h3>
              <p className="text-muted-foreground text-sm sm:text-base">{result.description}</p>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`p-4 sm:p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 relative ${sectionVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`} style={{ animationDelay: `${index * 200}ms` }}>
              <Quote className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 text-primary/20" />

              <div className="flex mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-4 sm:mb-6 italic leading-relaxed text-sm sm:text-base">
                "{testimonial.content}"
              </p>

              <div className="border-t pt-3 sm:pt-4">
                <h4 className="font-semibold text-primary text-sm sm:text-base">{testimonial.name}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Brand Logos Section */}
        <Card className="bg-gradient-to-r from-secondary/50 to-accent/5 p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
            BRAND Yang Pernah Kirim Tim Untuk Ikut Kelas
          </h3>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
              Berbagai perusahaan dan brand ternama telah mempercayakan pelatihan CS mereka kepada kami
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center">
              <div className="bg-white/50 rounded-lg p-3 sm:p-4 h-16 sm:h-20 flex items-center justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Pertamina_Logo.svg" 
                  alt="Pertamina" 
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-logo.png';
                    e.currentTarget.alt = 'Pertamina placeholder';
                  }}
                />
              </div>

              <div className="bg-white/50 rounded-lg p-3 sm:p-4 h-16 sm:h-20 flex items-center justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Indosat_Ooredoo.svg/2560px-Indosat_Ooredoo.svg.png" 
                  alt="Indosat" 
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-logo.png';
                    e.currentTarget.alt = 'Indosat placeholder';
                  }}
                />
              </div>

              <div className="bg-white/50 rounded-lg p-3 sm:p-4 h-16 sm:h-20 flex items-center justify-center">
                <img 
                  src="https://pasmira.co.id/wp-content/uploads/2018/08/logo-pasdihati.png"
                  alt="Pasmira" 
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-logo.png';
                    e.currentTarget.alt = 'Pasmira placeholder';
                  }}
                />
              </div>

              <div className="bg-white/50 rounded-lg p-3 sm:p-4 h-16 sm:h-20 flex items-center justify-center">
                <img 
                  src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/ROI-60042.png" 
                  alt="Rodalink" 
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-logo.png';
                    e.currentTarget.alt = 'Rodalink placeholder';
                  }}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};