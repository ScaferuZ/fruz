import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="font-Lato">
      <header className="mb-12 md:mb-10">
        <Navbar />
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
