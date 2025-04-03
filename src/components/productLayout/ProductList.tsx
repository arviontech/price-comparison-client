import ProductCard from "./ProductCard/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const products = [
  {
    title: "Coldrej Expert Rich Crème Hair Colour Natural Black (12*12) gm",
    brand: "Expert rich crème",
    variant: "Natural Black",
    price: "30.00",
  },
  {
    title: "Coldrej Expert Rich Crème Hair Color Burgundy 20.0 gm",
    brand: "Expert rich crème",
    variant: "Burgundy",
    price: "30.00",
  },
  {
    title: "Coldrej Expert Easy 5 Minute Shampoo Based Hair Colour",
    brand: "SHAMPOO HAIR COLOUR",
    variant: "",
    price: "30.00",
    originalPrice: "60.00",
  },
  {
    title: "Coldrej Expert Rich Crème Hair Colour Natural Black (12*12) gm",
    brand: "Expert rich crème",
    variant: "Natural Black",
    price: "30.00",
  },
  {
    title: "Coldrej Expert Rich Crème Hair Color Burgundy 20.0 gm",
    brand: "Expert rich crème",
    variant: "Burgundy",
    price: "30.00",
  },
  {
    title: "Coldrej Expert Easy 5 Minute Shampoo Based Hair Colour",
    brand: "SHAMPOO HAIR COLOUR",
    variant: "",
    price: "30.00",
    originalPrice: "60.00",
  },
];

const ProductList = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <select className="border rounded-md px-3 py-1 text-sm">
          <option>Default sorting</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <div className="flex justify-center items-center -ml-40 mt-[calc(100vh-600px)]">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default ProductList;
