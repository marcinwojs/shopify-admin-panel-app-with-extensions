import { Layout, Page } from "@shopify/polaris";
import SelectProduct from "~/components/selectProduct";

const MainView = () => {
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <SelectProduct onSelect={console.log} />
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default MainView;
