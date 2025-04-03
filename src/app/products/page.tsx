import ProductList from "@/components/productLayout/ProductList";
import SidebarFilters from "@/components/productLayout/SidebarFilter/SideBarFilter";
import Container from "@/components/Shared/container/Container";
import React from "react";

const Products = () => {
  return (
    <div className=" py-28">
      <Container>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <SidebarFilters />
          </div>
          <div className="col-span-9">
            <ProductList />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
