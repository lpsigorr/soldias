import { Router, useRouter } from "./context/RouterContext";
import { CartProvider } from "./context/CartContext";
import GlobalStyles from "./styles/GlobalStyles";
import Nav from "./components/Nav";
import CartDrawer from "./components/CartDrawer";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Drops from "./pages/Drops";
import DropDetail from "./pages/DropDetail";
import Doctrine from "./pages/Doctrine";
import Lookbook from "./pages/Lookbook";
import Community from "./pages/Community";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policies from "./pages/Policies";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  const { path } = useRouter();

  if (path === "/")                    return <Home />;
  if (path === "/shop")                return <Shop />;
  if (path.startsWith("/product/"))    return <ProductDetail id={path.replace("/product/", "")} />;
  if (path === "/drops")               return <Drops />;
  if (path.startsWith("/drops/"))      return <DropDetail slug={path.replace("/drops/", "")} />;
  if (path === "/doctrine")            return <Doctrine />;
  if (path === "/lookbook")            return <Lookbook />;
  if (path === "/community")           return <Community />;
  if (path === "/about")               return <About />;
  if (path === "/contact")             return <Contact />;
  if (path === "/policies")            return <Policies />;
  return <NotFound />;
}

export default function App() {
  return (
    <Router>
      <CartProvider>
        <GlobalStyles />
        <Nav />
        <CartDrawer />
        <AppRoutes />
      </CartProvider>
    </Router>
  );
}