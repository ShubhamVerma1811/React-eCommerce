import { Provider } from "react-redux";
import { store } from "../store/store";
import "../styles/index.css";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
