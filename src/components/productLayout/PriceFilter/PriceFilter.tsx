import { Slider } from "@/components/ui/slider";

export const PriceFilter = () => {
  return (
    <div className="mb-8">
      <h3 className="font-medium mb-4">Filter by Price</h3>
      <Slider
        defaultValue={[0, 10000]}
        max={10000}
        step={100}
        className="my-6"
      />
      <div className="flex justify-between text-sm text-gray-600">
        <span>$0</span>
        <span>$10000</span>
      </div>
    </div>
  );
};

export default PriceFilter;
