import About from "./pages/about";
import Home from "./pages/home";
import Sport from "./pages/sport";
import Economy from "./pages/economy";
import Business from "./pages/business";
import Politics from "./pages/politics";
import Science from "./pages/science";
import Health from "./pages/health";
import Culture from "./pages/culture";
import Tourism from "./pages/tourism";
import NotFound from "./pages/notFound";
const routeItem = (id, title, path, component) => {
  return {
    id,
    title,
    path,
    component,
  };
};

const routes = {
  home: routeItem(1, 'home', "/", Home),
  sport: routeItem(1, 'sport', "/sport", Sport),
  economy: routeItem(1, 'economy', "/economy", Economy),
  business: routeItem(1, 'business', "/business", Business),
  politics: routeItem(1, 'politics', "/politics", Politics),
  science: routeItem(1, 'science', "/science", Science),
  health: routeItem(1, 'health', "/health", Health),
  culture: routeItem(1, 'culture', "/culture", Culture),
  tourism: routeItem(1, 'tourism', "/tourism", Tourism),
  about: routeItem(2, 'about', "/about", About),
  notFound: routeItem(3, 'notFound', "*", NotFound),
  

};

const routeArr = Object.values(routes);

export { routes, routeArr };
