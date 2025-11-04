import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Impacto() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-accent">
          Nuestro Impacto
        </h1>
        <p className="text-xl text-muted-foreground">
          Compromiso con la sostenibilidad y el medio ambiente
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="bg-card/90 backdrop-blur-sm border-accent/20 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-accent">Agricultura Sostenible</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              En Fruto Solar, implementamos prácticas agrícolas que respetan el medio ambiente. 
              Utilizamos métodos orgánicos y sostenibles que preservan la biodiversidad y cuidan 
              nuestros recursos naturales para las futuras generaciones.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-card/90 backdrop-blur-sm border-accent/20 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-accent">Energía Solar</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              Nuestra operación está impulsada por energía solar limpia. Hemos instalado paneles 
              solares en todas nuestras instalaciones, reduciendo significativamente nuestra huella 
              de carbono y demostrando nuestro compromiso con un futuro más verde.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-card/90 backdrop-blur-sm border-accent/20 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-accent">Apoyo Local</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              Trabajamos directamente con agricultores locales, asegurando precios justos y 
              fortaleciendo la economía de nuestra comunidad. Cada compra que realizas ayuda a 
              sostener familias y tradiciones agrícolas locales.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-card/90 backdrop-blur-sm border-accent/20 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-accent">Reducción de Desperdicios</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              Implementamos un sistema de gestión de residuos que minimiza el desperdicio. 
              Los productos que no cumplen con nuestros estándares estéticos se destinan a 
              bancos de alimentos locales, asegurando que ningún alimento se desperdicie.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
