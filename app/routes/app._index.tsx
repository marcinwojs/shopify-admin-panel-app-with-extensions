import { useLoaderData } from "@remix-run/react";
import { authenticate } from "~/shopify.server";
import React from "react";
import MainView from "~/components/views/mainView";

export async function loader({ request }) {
  const { session } = await authenticate.admin(request);

  return {
    session,
  };
}

const Index = () => {
  const loaderData = useLoaderData();

  return <MainView />;
};

export default Index;
