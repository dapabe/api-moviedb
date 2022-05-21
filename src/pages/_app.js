import AppLayout from "@components/AppLayout";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
