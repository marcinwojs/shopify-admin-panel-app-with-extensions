import {
  AdminAction,
  Box,
  Button,
  TextArea,
  TextField,
} from "@shopify/ui-extensions-react/admin";
import React from "react";

type Props = {
  onClose: () => void;
  t: (translate: string) => string;
};
const NewProductInfoModal = ({ onClose, t }: Props) => {

  return (
    <AdminAction
      title={t("createIssue")}
      primaryAction={<Button>{t("create")}</Button>}
      secondaryAction={<Button onPress={onClose}>{t("cancel")}</Button>}
    >
      <TextField label={t("title")} />
      <Box paddingBlockStart="large">
        <TextArea maxLength={450} label={t("description")} />
      </Box>
    </AdminAction>
  );
};

export default NewProductInfoModal;
