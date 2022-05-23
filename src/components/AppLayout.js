import Meta from "./Meta";
import Header from "./header/Header";

export default function AppLayout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
    </>
  );
}
