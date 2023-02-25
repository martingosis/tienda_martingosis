import Navbar from "./Components/Navbar/Navbar.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import ProductCard from "./Components/ProductCard/ProductCard.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import CardWidget from "./Components/CardWidget/CardWidget.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <CardWidget />
      <ItemListContainer greeting={"Hola como estas?"} />
      <ProductCard tittle={"producto un millon"} price={200} isRed={false} />
      <ProductCard tittle={"producto dos millones"} price={500} isRed={true} />
      <Footer />
    </div>
  );
}

export default App;
