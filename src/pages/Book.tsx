import BookDetail from "../components/BookDetail/BookDetail";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainLayouts from "../layouts/MainLayouts";

const MainPage = () => {
  return (
    <MainLayouts
      header={<Header />}
      main={<BookDetail />}
      footer={<Footer />}
    />
  );
};

export default MainPage;
