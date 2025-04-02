"use server";

import axiosInstance from "@/lib/axiosInstance";

export const getProducts = async (payload: string) => {
  try {
    const { data } = await axiosInstance.get("/products", {
      params: payload,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
