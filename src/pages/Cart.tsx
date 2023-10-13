import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainLayouts from "../layouts/MainLayouts";

const MainPage = () => {
  return (
    <MainLayouts header={<Header />} main={<Cart />} footer={<Footer />} />
  );
};

export default MainPage;
