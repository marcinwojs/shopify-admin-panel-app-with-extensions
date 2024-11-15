import type { HTMLFormMethod } from "@remix-run/router";

export const makeRestCall = async (
  { route, method }: { route: string; method: HTMLFormMethod },
  callBody?: any,
) => {
  let res: Response;

  if (method === "get" || method == "GET") {
    res = await fetch(route);
  } else {
    res = await fetch(route, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...callBody, method }),
    });
  }

  return res.json();
};
