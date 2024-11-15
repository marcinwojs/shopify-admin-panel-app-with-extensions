import {
  AdminBlock,
  Box,
  Text,
  reactExtension,
  useApi,
} from "@shopify/ui-extensions-react/admin";
import type { ReactElement } from "react";

const TARGET = "admin.product-details.block.render";

export default reactExtension(TARGET, () => {
  return (<App />) as ReactElement;
});

export const App = () => {
  const { navigation, data, i18n, query } = useApi(TARGET);
  const productId = data.selected[0].id;
  const { translate: t } = i18n;

  return (
    <AdminBlock title={t("name")}>
      <>
        <Box paddingBlockEnd="large">
          <Text fontWeight="bold">{t("noInfo")}</Text>
        </Box>
      </>
    </AdminBlock>
  );
};
