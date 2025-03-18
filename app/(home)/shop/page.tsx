"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, ShoppingCart, Filter } from "lucide-react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Product {
  id: number;
  name: string;
  price: string;
  rating: string;
  image: string;
  category: string;
}

const products: Product[] = Array(20)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    name: `Товар ${i + 1}`,
    price: (Math.random() * 200 + 20).toFixed(2),
    rating: (Math.random() * 2 + 3).toFixed(1),
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxTRsZ7m7uCHVqkKYBJ8itAUL1f_9i3MTOA&s`,
    category: ["Электроника", "Одежда", "Обувь", "Аксессуары"][
      Math.floor(Math.random() * 4)
    ],
  }));

const ShopPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"price" | "rating" | "name">("name");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const itemsPerPage = 12;

  const filteredProducts = products
    .filter(
      (product) =>
        categoryFilter === "all" || product.category === categoryFilter
    )
    .sort((a, b) => {
      if (sortBy === "price") return Number(a.price) - Number(b.price);
      if (sortBy === "rating") return Number(b.rating) - Number(a.rating);
      return a.name.localeCompare(b.name);
    });
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
            Магазин StoreBlue
          </h1>
          <p className="text-xl mt-4 text-indigo-200">
            Найдите идеальный товар для себя
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <aside className="md:w-1/4 mt-32">
            <div className="bg-white p-6 rounded-xl shadow-md sticky top-4">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center">
                <Filter className="h-6 w-6 mr-2 text-teal-500" />
                Фильтры
              </h2>
              <div className="space-y-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Категория
                  </label>
                  <Select
                    value={categoryFilter}
                    onValueChange={setCategoryFilter}
                  >
                    <SelectTrigger className="w-full border-indigo-200">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все категории</SelectItem>
                      <SelectItem value="Электроника">Электроника</SelectItem>
                      <SelectItem value="Одежда">Одежда</SelectItem>
                      <SelectItem value="Обувь">Обувь</SelectItem>
                      <SelectItem value="Аксессуары">Аксессуары</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сортировать по
                  </label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full border-indigo-200">
                      <SelectValue placeholder="Сортировка" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Название</SelectItem>
                      <SelectItem value="price">Цена</SelectItem>
                      <SelectItem value="rating">Рейтинг</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedProducts.map((product: Product) => (
                <Card
                  key={product.id}
                  className="border-none shadow-md hover:shadow-xl transition-all rounded-xl overflow-hidden bg-gray-50"
                >
                  <CardContent className="p-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-lg"
                      width={400}
                      height={400}
                    />
                  </CardContent>
                  <CardHeader className="px-4 pt-0">
                    <CardTitle className="text-indigo-800 text-lg font-semibold">
                      {product.name}
                    </CardTitle>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </CardHeader>
                  <CardFooter className="px-4 pb-4 flex justify-between items-center">
                    <div>
                      <p className="text-xl font-bold text-teal-600">
                        ${product.price}
                      </p>
                      <div className="flex items-center mt-1">
                        <Star className="h-5 w-5 text-amber-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-teal-500 hover:bg-teal-100 rounded-full p-2"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
              >
                Назад
              </Button>
              <span className="text-indigo-900 font-medium">
                Страница {currentPage} из {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
              >
                Вперед
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
