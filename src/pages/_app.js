import AppLayout from "@components/AppLayout";
import "../styles/global.css";
import { Provider } from "react-redux";
import store from "@components/states/store";

export default function MyApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
    // </Provider>
  );
}
