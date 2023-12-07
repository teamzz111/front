import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
  }, [router.pathname]);

  return (
    <Provider store={store}>
      <div>
        <Toaster />
      </div>

      <QueryClientProvider client={queryClient}>
        {typeof window !== "undefined" && (
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        )}
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
