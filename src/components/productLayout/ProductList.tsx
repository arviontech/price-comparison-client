import ProductCard from "./ProductCard/ProductCard";

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
];

const ProductList = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm">
          <span className="text-gray-500">
            Chart &gt; Hair styling &gt; Hair Color
          </span>
          <button className="ml-4 text-blue-500">Clear all</button>
        </div>
        <select className="border rounded-md px-3 py-1 text-sm">
          <option>Default sorting</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
