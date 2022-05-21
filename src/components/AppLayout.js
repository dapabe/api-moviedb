import Meta from "./Meta";
import NavBar from "./NavBar";

export default function AppLayout({ children }) {
  return (
    <>
      <Meta />
      <NavBar />
      <main>{children}</main>
    </>
  );
}
