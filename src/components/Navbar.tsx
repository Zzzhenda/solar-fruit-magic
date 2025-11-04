import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-primary-foreground hover:opacity-90 transition-opacity">
            <img src="/images/icono.png" alt="Fruto Solar" className="w-12 h-12" />
            <span className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Fruto Solar
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="success" size="sm" asChild>
              <Link to="/impacto">Impacto</Link>
            </Button>
            <Button variant="success" size="sm" asChild>
              <Link to="/catalogo">Catálogo</Link>
            </Button>
            <Button variant="success" size="sm" asChild>
              <Link to="/carrito">
                <ShoppingCart className="mr-1" />
                Carrito
              </Link>
            </Button>
            <Button variant="success" size="sm" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="success" size="sm" asChild>
              <Link to="/registro">Registro</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
