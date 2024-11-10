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
      {/* <section className="text-center ">
        <h1 className="flex flex-col items-center justify-center py-4 text-4xl font-extrabold tracking-tighter gradient-title sm:text-6xl lg:text-8xl">
          Construisez l&apos;Afrique de Demain, Aujourd&apos;hui.
        </h1>
        <p className="text-xs text-gray-300 sm:mt-4 sm:text-xl">
          Afrique Avenir Acquisition : le carrefour des entrepreneurs et des
          investisseurs pour bâtir l&apos;Afrique de demain.
        </p>
      </section> */}

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
        <div className="absolute inset-0 bg-black opacity-50"></div>

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

      {/* <section
        className="text-center bg-cover bg-center bg-no-repeat py-20 sm:py-40"
        style={{ backgroundImage: "url('/Hero.jpg')" }}
      >
        <h1 className="flex flex-col items-center justify-center py-4 text-4xl font-extrabold tracking-tighter text-white sm:text-6xl lg:text-8xl">
          Construisez l&apos;Afrique de Demain, Aujourd&apos;hui.
        </h1>
        <p className="mt-4 text-xs text-gray-200 sm:text-xl">
          Afrique Avenir Acquisition : le carrefour des entrepreneurs et des
          investisseurs pour bâtir l&apos;Afrique de demain.
        </p>
      </section> */}
      <div className="flex flex-col justify-center gap-6 sm:flex-row">
        <Link to={""}>
          <Button
            variant="secondary"
            size="xl"
            className="w-full px-6 py-3 text-sm sm:w-auto sm:text-lg"
          >
            Explorer les Opportunités
          </Button>
        </Link>
        <Link to={""}>
          <Button
            variant="destructive"
            size="xl"
            className="w-full px-6 py-3 text-sm sm:w-auto sm:text-lg"
          >
            Publier une Entreprise à Vendre
          </Button>
        </Link>
      </div>
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Les entreprises qui nous font confiance
        </h1>
        <Carousel
          plugins={[
            Autoplay({
              delay: 1000,
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
      </div>

      {/* <img
        src="/banner.jpeg"
        className="w-full h-auto max-h-[600px] object-contain"
      /> */}

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

      {/* <Pricing /> */}
      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {/* <Contact /> */}
    </main>
  );
};

export default LandingPage;
