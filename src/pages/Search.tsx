import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import MainLayouts from "../layouts/MainLayouts";

const SearchPage = () => {
  return (
    <MainLayouts header={<Header />} main={<Search />} footer={<Footer />} />
  );
};

export default SearchPage;
