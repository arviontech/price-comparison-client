/* eslint-disable @typescript-eslint/no-explicit-any */
import { getProducts } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

export const useGetProduct = (searchQuery?: string) => {
  return useQuery<any, Error, any, string[]>({
    queryKey: ["products", searchQuery || ""],
    queryFn: async () => await getProducts(searchQuery),
  });
};
