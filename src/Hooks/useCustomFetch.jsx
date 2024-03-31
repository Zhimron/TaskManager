import { useQuery } from "react-query";

const customFetch = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useCustomFetch = (url) => {
  return useQuery(["customFetch", url], () => customFetch(url));
};
