import { type Doc, type APISpaceX } from "../types/api";

const apiUrl = import.meta.env.PUBLIC_SPACEX_API;


export const getLaunchBy = async ({ id }: { id: String }) => {
  const res = await fetch(`${apiUrl}${id}`);
  const launch = (await res.json()) as Doc;
  console.log(launch);
  return launch;
}

export const getLatestLaunches = async () => {
  const res = await fetch(`${apiUrl}query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 12,
      },
    }),
  });

  const { docs: launches } = (await res.json()) as APISpaceX;
  return launches;
}
