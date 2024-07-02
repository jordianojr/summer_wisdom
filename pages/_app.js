import '../public/styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
    console.log("App");
    return <Component {...pageProps} />;
}
