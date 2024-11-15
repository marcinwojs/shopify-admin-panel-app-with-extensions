import { json } from "@remix-run/node";
import type { HeadersFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { useAppBridge } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export async function loader() {
  return json({
    apiKey: process.env.SHOPIFY_API_KEY,
  });
}

type LoaderResponse = {
  apiKey: string;
};

export default function App() {
  const { apiKey } = useLoaderData<LoaderResponse>();
  const shopify = useAppBridge();
  const { t } = useTranslation();
  const startLoading = (url: string) => {
    if (window.location.pathname !== url) shopify.loading(true);
  };

  return (
    <AppProvider apiKey={apiKey}>
      <ui-nav-menu>
        <Link onClick={() => startLoading("/app")} to="/app" rel="home">
          {t("home")}
        </Link>
      </ui-nav-menu>
      <Outlet />
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
