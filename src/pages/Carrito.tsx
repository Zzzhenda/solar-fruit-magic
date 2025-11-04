import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function Carrito() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-2xl mx-auto bg-card/95 backdrop-blur-sm shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <ShoppingCart className="w-16 h-16 text-accent" />
          </div>
          <CardTitle className="text-3xl font-bold">Carrito de Compras</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-xl text-muted-foreground">
            Tu carrito está vacío
          </p>
          <p className="text-base text-muted-foreground">
            ¡Descubre nuestros productos frescos y comienza a llenar tu carrito!
          </p>
          <Button variant="success" size="lg" asChild>
            <a href="/catalogo">Ir al Catálogo</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
