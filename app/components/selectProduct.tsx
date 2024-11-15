import React from "react";
import { BlockStack, Button } from "@shopify/polaris";
import { useTranslation } from "react-i18next";

type Props = {
  onSelect: () => void;
};

const SelectProduct = ({ onSelect }: Props) => {
  const { t } = useTranslation();

  async function selectProduct() {
    const products = await window.shopify.resourcePicker({
      multiple: true,
      filter: { variants: false },
      type: "product",
      action: "select",
    });

    if (!products) {
      return;
    }
    {
      onSelect();
    }
  }

  return (
    <BlockStack gap={"300"}>
      <Button onClick={selectProduct}>{t("selectProduct")}</Button>
    </BlockStack>
  );
};

export default SelectProduct;
