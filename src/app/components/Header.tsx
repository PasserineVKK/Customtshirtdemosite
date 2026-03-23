import { Link, useLocation } from "react-router";
import { ShoppingCart, Heart, Search, Menu, User } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  useEffect(()=>{
    const nav = navRef.current;
    if (!nav) return;

    const links = nav.querySelectorAll('a');
    links.forEach((link)=>{
        if (location.pathname === link.getAttribute('href')){
          link.classList.add('text-orange-600', 'font-bold')
        } else {
          link.classList.remove('text-orange-600', 'font-bold')
        }
    })
  },[
    location.pathname
  ])
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">TF</span>
            </div>
            <span className="font-bold text-xl">TeeForge</span>
          </Link>

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="hover:text-orange-600 transition-colors"
           >
              Sản phẩm
            </Link>
            <Link to="/designer" className="hover:text-orange-600 transition-colors focus:text-orange-600">
              Thiết kế
            </Link>
            <Link to="/lookbook" className="hover:text-orange-600 transition-colors focus:text-orange-600">
              Lookbook
            </Link>
            <Link to="/contact" className="hover:text-orange-600 transition-colors focus:text-orange-600">
              Liên hệ
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden md:block">
              <Search className="w-5 h-5" />
            </button>
            
            <Link to="/wishlist" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden md:block">
              <User className="w-5 h-5" />
            </button>

            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/products"
                className="hover:text-orange-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sản phẩm
              </Link>
              <Link
                to="/designer"
                className="hover:text-orange-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Thiết kế
              </Link>
              <Link
                to="/lookbook"
                className="hover:text-orange-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Lookbook
              </Link>
              <Link
                to="/contact"
                className="hover:text-orange-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Liên hệ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
