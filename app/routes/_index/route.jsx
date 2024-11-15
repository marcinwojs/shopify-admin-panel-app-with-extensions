import { json, redirect } from "@remix-run/node";

import { login } from "~/shopify.server";

import { Frame, Loading } from "@shopify/polaris";

export const links = () => [{ rel: "stylesheet" }];

export async function loader({ request }) {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  return json({ showForm: Boolean(login) });
}

export default function App() {
  return (
    <div className="index">
      <Frame>
        <Loading />
      </Frame>
    </div>
  );
}
