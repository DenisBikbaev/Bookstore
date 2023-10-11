import Favorites from "../components/Favorites/Favorites";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainLayouts from "../layouts/MainLayouts";

const MainPage = () => {
  return (
    <MainLayouts header={<Header />} main={<Favorites />} footer={<Footer />} />
  );
};

export default MainPage;
