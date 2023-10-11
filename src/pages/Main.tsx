import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import MainLayouts from "../layouts/MainLayouts";

const MainPage = () => {
  return (
    <MainLayouts header={<Header />} main={<Main />} footer={<Footer />} />
  );
};

export default MainPage;
