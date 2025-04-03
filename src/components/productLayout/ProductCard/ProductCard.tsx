// components/products/ProductCard.tsx

type ProductCardProps = {
  title: string;
  brand?: string;
  price: string;
  soldCount?: number;
  isPopular?: boolean;
};

const ProductCard = ({
  title,
  brand,
  price,
  soldCount,
  isPopular = false,
}: ProductCardProps) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
      {isPopular && (
        <div className="bg-red-50 text-red-600 text-xs font-medium px-2 py-1 rounded-full inline-block mb-2">
          Popular
        </div>
      )}

      <div className="flex flex-col gap-3">
        {/* Product Image Placeholder */}
        <div className="bg-gray-100 w-full h-40 rounded-md"></div>

        <div>
          {brand && <p className="text-sm text-gray-500 mb-1">{brand}</p>}
          <h3 className="font-medium text-gray-900 line-clamp-2">{title}</h3>

          <div className="mt-2 flex items-center justify-between">
            <div>
              <span className="font-bold text-lg">₹{price}</span>
            </div>
            {soldCount && (
              <span className="text-xs text-gray-500">{soldCount} sold</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
