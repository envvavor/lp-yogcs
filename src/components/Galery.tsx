import { Fade } from "react-awesome-reveal";
import { ArrowRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Galery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Workshop Pelatihan",
      description: "Sesi pelatihan interaktif dengan peserta",
      category: "workshop"
    },
    {
      id: 2,
      title: "Seminar Nasional",
      description: "Pembicara ahli berbagi pengetahuan",
      category: "seminar"
    },
    {
      id: 3,
      title: "Networking Session",
      description: "Peserta saling berkenalan dan berkolaborasi",
      category: "networking"
    },
    {
      id: 4,
       title: "Workshop Pelatihan",
      description: "Sesi pelatihan interaktif dengan peserta",
      category: "workshop"
    },
    {
      id: 5,
       title: "Workshop Pelatihan",
      description: "Sesi pelatihan interaktif dengan peserta",
      category: "workshop"
    },
    {
      id: 6,
      title: "Team Building",
      description: "Aktivitas pengembangan tim",
      category: "workshop"
    }
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Fade direction="up" triggerOnce cascade damping={0.2}>
          <div className="text-center mb-14 sm:mb-18">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Galeri Kegiatan
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Dokumentasi momen berharga dari setiap kegiatan kami
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item) => (
            <Fade key={item.id} direction="up" triggerOnce delay={item.id * 100}>
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={`/images/img${item.id}.webp`}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-white rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                    <button className="mt-3 inline-flex items-center text-sm font-medium text-white hover:text-accent transition-colors">
                      Lihat Detail <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ZoomIn className="h-5 w-5 text-gray-800" />
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};