import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[650px] w-full overflow-hidden">
        <img 
          src="/images/hero_frutillas.jpg" 
          alt="Frutas frescas" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 py-8 rounded-2xl bg-black/30 backdrop-blur-sm max-w-3xl mx-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Luz. Fruta. Vida.
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Descubre productos frescos y naturales en Fruto Solar
            </p>
            <Button variant="warning" size="lg" asChild>
              <Link to="/catalogo">Ver Catálogo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img 
              src="/images/calidad.jpg" 
              alt="Calidad" 
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle className="text-2xl">Calidad Superior</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Productos frescos y naturales, cultivados con amor y dedicación.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="success" className="w-full" asChild>
                <Link to="/catalogo">Ver productos</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img 
              src="/images/sostenibilidad.png" 
              alt="Sostenibilidad" 
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle className="text-2xl">Sostenibilidad</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Comprometidos con prácticas agrícolas responsables y el cuidado del medio ambiente.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="success" className="w-full" asChild>
                <Link to="/impacto">Ver impacto</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img 
              src="/images/sostenibilidad.png" 
              alt="Comunidad" 
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle className="text-2xl">Apoyo a la Comunidad</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Trabajamos con agricultores locales para fortalecer la economía regional.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="success" className="w-full" asChild>
                <Link to="/impacto">Saber más</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
}
