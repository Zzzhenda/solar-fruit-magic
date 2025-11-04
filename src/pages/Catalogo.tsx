import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const productos = [
  { id: "FR001", nombre: "Manzanas Fuji", precio: 1200, img: "/images/manzana.png" },
  { id: "FR002", nombre: "Naranjas Valencia", precio: 1000, img: "/images/Naranja.png" },
  { id: "FR003", nombre: "Plátanos Cavendish", precio: 800, img: "/images/Platano.png" },
  { id: "VR001", nombre: "Zanahorias Orgánicas", precio: 900, img: "/images/Carrotss-1.png" },
  { id: "VR002", nombre: "Espinacas Frescas", precio: 700, img: "/images/Espinaca.png" },
  { id: "PO001", nombre: "Miel Orgánica", precio: 5000, img: "/images/Miel.png" },
];

export default function Catalogo() {
  const handleAddToCart = (nombre: string) => {
    toast.success(`${nombre} agregado al carrito`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-accent">
          Nuestro Catálogo
        </h1>
        <p className="text-xl text-muted-foreground">
          Productos frescos, directo del campo a tu hogar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productos.map((producto) => (
          <Card 
            key={producto.id} 
            className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <CardHeader className="p-0">
              <img 
                src={producto.img} 
                alt={producto.nombre}
                className="w-full h-72 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-2xl mb-2">{producto.nombre}</CardTitle>
              <p className="text-2xl font-bold text-accent">
                ${producto.precio.toLocaleString('es-CL')} CLP / kg
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button 
                variant="warning" 
                className="w-full"
                onClick={() => handleAddToCart(producto.nombre)}
              >
                Agregar al Carrito
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
