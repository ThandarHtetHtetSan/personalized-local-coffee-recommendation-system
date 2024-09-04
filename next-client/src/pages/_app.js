import "@/styles/globals.css";
import { CoffeeProvider } from '@/contexts/CoffeeContext';

export default function App({ Component, pageProps }) {
  return (
    <CoffeeProvider>
      <Component {...pageProps} />
    </CoffeeProvider>
  )
}
