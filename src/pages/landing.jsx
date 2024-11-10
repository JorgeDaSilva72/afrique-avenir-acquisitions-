import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import Pricing from "@/components/pricing";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 py-10 sm:gap-20 sm:py-20">
      <section className="relative h-screen w-full flex items-center justify-center bg-gray-800">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Hero.jpg"
            alt="Immobilier de rêve"
            className="w-full h-full object-cover opacity-80"
            role="img"
            aria-label="Vue inspirante pour bâtir l'Afrique de demain"
          />
        </div>

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Construisez l&apos;Afrique de Demain, Aujourd&apos;hui.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Afrique Avenir Acquisition : le carrefour des entrepreneurs et des
            investisseurs pour bâtir l&apos;Afrique de demain.
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center gap-6 sm:flex-row">
        <Link to={""}>
          <Button
            variant="secondary"
            size="xl"
            className="w-full px-6 py-3 text-sm sm:w-auto sm:text-lg"
            aria-label="Explorer les opportunités d'entreprises disponibles"
          >
            Explorer les Opportunités
          </Button>
        </Link>
        <Link to={""}>
          <Button
            variant="destructive"
            size="xl"
            className="w-full px-6 py-3 text-sm sm:w-auto sm:text-lg"
            aria-label="Publier une Entreprise à Vendre"
          >
            Publier une Entreprise à Vendre
          </Button>
        </Link>
      </section>

      <section className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Les entreprises qui nous font confiance
        </h2>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full py-10"
        >
          <CarouselContent className="flex items-center gap-5 sm:gap-20">
            {companies.map(({ name, id, path }) => (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
                <img
                  src={path}
                  alt={name}
                  className="object-contain h-9 sm:h-14"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 animate-fadeIn">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">Pour les acheteurs</CardTitle>
          </CardHeader>
          <CardContent>
            Explorez une variété d'entreprises disponibles à l'acquisition en
            Afrique. Trouvez des opportunités uniques qui correspondent à vos
            ambitions et participez à la croissance du continent.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-bold">Pour les vendeurs</CardTitle>
          </CardHeader>
          <CardContent>
            Publiez votre entreprise à vendre et attirez des investisseurs
            intéressés. Profitez de notre plateforme pour maximiser la
            visibilité et trouver les bons acheteurs.
          </CardContent>
        </Card>
      </section>

      <section className="">
        <Accordion type="multiple" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      {/* <Contact /> */}
    </main>
  );
};

export default LandingPage;
