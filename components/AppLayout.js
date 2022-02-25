import Meta from "./Meta";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function AppLayout({ children }) {
  return (
    <>
      <Meta />
      <NavBar />
      <main>{children}</main>;
      <Footer />
    </>
  );
}
