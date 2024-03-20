import { useMutation } from "react-query";

const customMutation = async (url,dataObj,method) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataObj),
    credentials: "include",
  });
  return await response.json();
};

export const useCustomMutation = (url, method) =>
  useMutation((dataObj) => customMutation(url, dataObj, method));

