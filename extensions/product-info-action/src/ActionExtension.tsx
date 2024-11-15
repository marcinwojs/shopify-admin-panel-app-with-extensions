import React from "react";
import NewProductInfoModal from "./newProductInfoModal";
import { reactExtension, useApi } from "@shopify/ui-extensions-react/admin";
const TARGET = "admin.product-details.action.render";

export type FormErrors = {
  title: boolean;
  description: boolean;
};

export type Product = {
  id: string;
  title: string;
  featuredImage: { url: string };
};
export default reactExtension(TARGET, () => <App />);

export function App() {
  const { close, data, query, i18n } = useApi(TARGET);
  const { translate: t } = i18n;

  return <NewProductInfoModal t={t} onClose={close} />;
}
