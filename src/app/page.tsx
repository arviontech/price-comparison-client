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
import { Search, ShoppingBag, Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const trendingProducts = [
    {
      id: 1,
      name: "MacBook Pro M3",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
      priceRange: "$1,299 - $2,299",
      stores: 8,
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      image:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500",
      priceRange: "$348 - $399",
      stores: 12,
    },
    {
      id: 3,
      name: "iPhone 15 Pro",
      image:
        "https://images.unsplash.com/photo-1696446702239-e76522425e3f?w=500",
      priceRange: "$999 - $1,199",
      stores: 15,
    },
  ];

  const categories = [
    { name: "Electronics", icon: "💻" },
    { name: "Fashion", icon: "👕" },
    { name: "Home & Garden", icon: "🏡" },
    { name: "Sports", icon: "⚽" },
    { name: "Beauty", icon: "💄" },
    { name: "Books", icon: "📚" },
  ];
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Find the Best Deals Across All Stores
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Compare prices from over 1000+ trusted retailers and save money on
              your purchases
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search for products..."
                    className="pl-10 h-12"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button size="lg" className="h-12">
                  Compare Prices
                </Button>
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

      {/* Categories Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="text-4xl mb-3">{category.icon}</span>
                  <h3 className="font-medium">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Trending Products
          </h2>
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {trendingProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="mx-2">
                    <CardContent className="p-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <h3 className="font-medium mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        Price Range: {product.priceRange}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Available at {product.stores} stores
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </main>
  );
};

export default Home;
