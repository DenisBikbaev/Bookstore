import Authorization from "../components/Autorization/Authorization";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainLayouts from "../layouts/MainLayouts";

const MainPage = () => {
  return (
    <MainLayouts
      header={<Header />}
      main={<Authorization />}
      footer={<Footer />}
    />
  );
};

export default MainPage;
