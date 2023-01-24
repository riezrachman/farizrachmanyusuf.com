import React from "react";
import { useRouter } from "next/router";
import Firebase from "firebaseConfig";
import { Analytics, getAnalytics, logEvent } from "firebase/analytics";

export const TrackingContext = React.createContext<Analytics | null>(null);

const TrackingContextProvider = (props: { children: React.ReactNode }) => {
  const router = useRouter();
  const [tracking, setTracking] = React.useState<Analytics | null>(null);

  React.useEffect(() => {
    const analytics = getAnalytics(Firebase.app);
    setTracking(analytics);

    const handleRouteChange = (url: string) => {
      if (!tracking) {
        return;
      }

      logEvent(tracking, "page_view", {
        page_location: url,
        page_title: document?.title,
      });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tracking]);

  return (
    <TrackingContext.Provider value={tracking}>
      {props.children}
    </TrackingContext.Provider>
  );
};

export default TrackingContextProvider;
