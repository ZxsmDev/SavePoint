import Navbar from "../components/Navbar.jsx";
import Search from "../components/Search.jsx";
import Footer from "../components/Footer.jsx";

export default function Games() {
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="flex flex-col">
          <Search />
          <Footer />
        </div>
      </div>
    </>
  );
}
