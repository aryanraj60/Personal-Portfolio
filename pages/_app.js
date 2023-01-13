import "../styles/globals.css";
import Navbar from "../Components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
