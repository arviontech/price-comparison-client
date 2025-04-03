import CategoryFilter from "../CategoryFilter/CategoryFilter";
import PriceFilter from "../PriceFilter/PriceFilter";

const SidebarFilters = () => {
  return (
    <aside className="w-64 pr-8 hidden md:block">
      <PriceFilter />
      <CategoryFilter />
    </aside>
  );
};

export default SidebarFilters;
