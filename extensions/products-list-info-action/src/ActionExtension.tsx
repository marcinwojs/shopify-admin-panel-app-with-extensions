import { reactExtension, useApi } from "@shopify/ui-extensions-react/admin";
import NewProductInfoModal from "../../product-info-action/src/newProductInfoModal";

const TARGET = "admin.product-index.selection-action.render";
export type FormErrors = {
  title: boolean;
  description: boolean;
};
export default reactExtension(TARGET, () => <App />);

function App() {
  const { close, data, query, i18n } = useApi(TARGET);
  const { translate: t } = i18n;


  return <NewProductInfoModal t={t} onClose={close} />;
}
