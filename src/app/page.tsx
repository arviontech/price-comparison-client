/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { useGetProduct } from "@/hooks/Product/product.hook";
import { Search, ShoppingBag, Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isPending, isSuccess } = useGetProduct(searchQuery);

  useEffect(() => {
    if (isSuccess) {
      setSearchQuery("");
    }
  }, [isSuccess]);
  console.log(data);

  if (isPending) {
    return <div>Loading...</div>;
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    const valueProduct = e.target.searchProduct.value;
    setSearchQuery(valueProduct);
  };

  return (
    <main className="min-h-screen bg-background py-10">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Upgrade Your Shopping Game
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Compare prices from over 1000+ trusted retailers and save money on
              your purchases
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="">
                <form onSubmit={onSubmit} className="flex gap-2 w-full">
                  <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search for products..."
                      className="pl-10 h-12 border border-gray-400"
                      name="searchProduct"
                    />
                  </div>
                  <Button type="submit" size="lg" className="h-12">
                    Search Product
                  </Button>
                </form>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <span className="text-sm">1000+ Stores</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm">Daily Price Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-sm">Trusted by 1M+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {data.data?.length > 0 ? (
            <>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Search Results
              </h2>

              {/* Product Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.data?.map((product) => (
                  <Card
                    key={product._id}
                    className="overflow-hidden transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="relative h-64 w-full bg-gray-100">
                      {product.productImage.startsWith("data:") ? (
                        // Handle base64 images
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img
                            src={product.productImage}
                            alt={product.productTitle}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      ) : (
                        // Handle URL images
                        <Image
                          src={product.productImage}
                          alt={product.productTitle}
                          className="object-contain"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      )}
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {product.source}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg line-clamp-2 mb-2">
                        {product.productTitle}
                      </h3>
                      <div className="flex justify-between items-center mt-4">
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : searchQuery ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium">
                No products found matching "{searchQuery}"
              </h3>
              <p className="text-muted-foreground mt-2">
                Try a different search term or browse our featured products
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Featured Products Section */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Featured Products
                </h2>
                <Carousel className="w-full">
                  <CarouselContent>
                    {data?.data?.slice(0, 6)?.map((product) => (
                      <CarouselItem
                        key={product._id}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <Card className="overflow-hidden">
                          <div className="relative h-64 w-full bg-gray-100">
                            {product.productImage.startsWith("data:") ? (
                              // Handle base64 images
                              <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                  src={product.productImage}
                                  alt={product.productTitle}
                                  className="max-h-full max-w-full object-contain"
                                />
                              </div>
                            ) : (
                              // Handle URL images
                              <Image
                                src={product.productImage}
                                alt={product.productTitle}
                                className="object-contain"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            )}
                          </div>
                          <CardContent className="p-5">
                            <h3 className="font-semibold text-lg line-clamp-2 mb-2">
                              {product.productTitle}
                            </h3>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                {product.source}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
