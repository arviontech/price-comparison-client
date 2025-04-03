"use server";

import axiosInstance from "@/lib/axiosInstance";

export const getProducts = async (searchQuery?: string) => {
  try {
    const { data } = await axiosInstance.get("/products", {
      params: { searchTerm: searchQuery }, // Properly structured params
    });

    return data || [];
  } catch (error) {
    console.error("Error fetching products:", error);

    return [];
  }
};
