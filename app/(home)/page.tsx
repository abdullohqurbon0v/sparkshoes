import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: string;
  rating: string;
  image: string;
}

interface Review {
  name: string;
  text: string;
  rating: number;
}

const products: Product[] = Array(12)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    name: `Товар ${i + 1}`,
    price: (Math.random() * 100 + 20).toFixed(2),
    rating: (Math.random() * 2 + 3).toFixed(1),
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxTRsZ7m7uCHVqkKYBJ8itAUL1f_9i3MTOA&s`,
  }));

const reviews: Review[] = [
  { name: "Анна", text: "Отличный магазин, быстрая доставка!", rating: 5 },
  { name: "Игорь", text: "Качество товаров на высоте", rating: 4 },
  { name: "Мария", text: "Хороший выбор и цены", rating: 5 },
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <section className="relative bg-gradient-to-br from-sky-900 to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            SparkShoes — Ваш Мир Покупок
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Откройте для себя лучшие предложения и стильные товары
          </p>
          <Button className="bg-teal-400 text-indigo-900 hover:bg-teal-300 text-lg py-6 px-12 rounded-full shadow-lg transition-all">
            Начать покупки
          </Button>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-indigo-900 mb-12 text-center">
            Топ Товары
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product: Product) => (
              <Card
                key={product.id}
                className="border-none shadow-md hover:shadow-xl transition-all rounded-xl overflow-hidden bg-gray-50"
              >
                <CardContent className="p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover rounded-lg"
                    width={400}
                    height={400}
                  />
                </CardContent>
                <CardHeader className="px-4 pt-0">
                  <CardTitle className="text-indigo-800 text-lg font-semibold">
                    {product.name}
                  </CardTitle>
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
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-indigo-900 mb-12 text-center">
            Что Говорят Наши Клиенты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review: Review, index: number) => (
              <Card
                key={index}
                className="border-none shadow-lg bg-white rounded-xl p-6"
              >
                <CardContent className="p-0">
                  <p className="text-gray-700 italic mb-4">{review.text}</p>
                  <div className="flex items-center">
                    {Array(review.rating)
                      .fill(null)
                      .map((_, i: number) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-amber-400 fill-current"
                        />
                      ))}
                  </div>
                </CardContent>
                <CardFooter className="p-0 mt-4">
                  <p className="text-indigo-800 font-semibold">{review.name}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">
                StoreBlue
              </h3>
              <p className="text-sm text-indigo-200">
                Современный шопинг для всех
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Меню</h3>
              <ul className="space-y-3 text-sm text-indigo-200">
                <li>
                  <Link
                    href="/"
                    className="hover:text-teal-300 transition-colors"
                  >
                    Главная
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="hover:text-teal-300 transition-colors"
                  >
                    Магазин
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-teal-300 transition-colors"
                  >
                    О нас
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-teal-300 transition-colors"
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Связь</h3>
              <ul className="space-y-3 text-sm text-indigo-200">
                <li>Email: info@SparkShoes.com</li>
                <li>Телефон: + 998 91 600 83 00</li>
                <li>Адрес: ул. Примерная, 123</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Подписка</h3>
              <p className="text-sm text-indigo-200 mb-4">
                Будьте в курсе новинок
              </p>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="p-3 rounded-l-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <Button className="rounded-l-none bg-teal-400 hover:bg-teal-500 text-indigo-900 ">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-indigo-300 border-t border-indigo-800 pt-6">
            © 2025 SparkShoes. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
