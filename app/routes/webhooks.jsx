import { authenticate } from "~/shopify.server";
import db from "../db.server";

export const action = async ({ request }) => {
  const { topic, shop, session, admin } = await authenticate.webhook(request);

  switch (topic) {
    case "APP_UNINSTALLED":
      if (session && admin) {
        // add delete firebase data after uninstall
        await db.session.deleteMany({ where: { shop } });
      }
      break;
    case "APP_SUBSCRIPTIONS_UPDATE":
      break;
    case "CUSTOMERS_DATA_REQUEST":
      console.log("CUSTOMERS_DATA_REQUEST");
      break;
    case "CUSTOMERS_REDACT":
      console.log("CUSTOMERS_REDACT");
      break;
    case "SHOP_REDACT":
      console.log("SHOP_REDACT");
      break;
    default:
      throw new Response("Unhandled webhook topic", { status: 404 });
  }

  return new Response();
};
