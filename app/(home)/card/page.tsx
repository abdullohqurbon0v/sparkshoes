"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingCart, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  stock: number;
  brand: string;
  category: string;
  description: string;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Смартфон X1",
    price: 49.99,
    quantity: 2,
    image: "https://picsum.photos/400/400?random=1",
    stock: 10,
    brand: "TechPro",
    category: "Электроника",
    description: "Мощный смартфон с отличной камерой",
  },
  {
    id: 2,
    name: "Кроссовки Air",
    price: 79.99,
    quantity: 1,
    image: "https://picsum.photos/400/400?random=2",
    stock: 5,
    brand: "StepUp",
    category: "Обувь",
    description: "Удобные кроссовки для повседневной носки",
  },
];

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(
                1,
                Math.min(item.quantity + delta, item.stock)
              ),
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 font-sans">
      {/* Header */}
      <section className="bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-2xl">
            Корзина покупок
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-indigo-100 drop-shadow-md">
            Управляйте своими товарами перед заказом
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <ShoppingCart className="h-20 w-20 text-gray-400 mx-auto mb-6" />
            <h2 className="text-3xl font-semibold text-indigo-900 mb-4">
              Корзина пуста
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Добавьте товары из магазина, чтобы продолжить.
            </p>
            <Link href="/shop">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-10 py-3 text-lg font-semibold">
                В магазин
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-indigo-100">
                <h2 className="text-3xl font-bold text-indigo-900 mb-8 flex items-center">
                  <ShoppingCart className="h-8 w-8 text-teal-600 mr-3" />
                  Товары ({cartItems.length})
                </h2>
                <div className="space-y-8">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all shadow-md"
                    >
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          className="rounded-lg object-cover shadow-sm transition-transform hover:scale-105"
                          fill
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-indigo-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Бренд: {item.brand} | Категория: {item.category}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {item.description}
                        </p>
                        <p className="text-lg font-bold text-teal-600 mt-2">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500">
                          Цена за шт.: ${item.price.toFixed(2)} | В наличии:{" "}
                          {item.stock}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-white p-2 rounded-full shadow-inner border border-indigo-200">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity <= 1}
                            className="p-1 text-teal-600 hover:bg-teal-100"
                          >
                            <Minus className="h-5 w-5" />
                          </Button>
                          <span className="w-12 text-center font-semibold text-indigo-900">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, 1)}
                            disabled={item.quantity >= item.stock}
                            className="p-1 text-teal-600 hover:bg-teal-100"
                          >
                            <Plus className="h-5 w-5" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:bg-red-100 rounded-full p-2"
                        >
                          <Trash2 className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-indigo-100 sticky top-6">
                <h2 className="text-3xl font-bold text-indigo-900 mb-6">
                  Итог заказа
                </h2>
                <div className="space-y-6 text-lg">
                  <div className="flex justify-between text-gray-700">
                    <span>Подытог:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Доставка:</span>
                    <span className="text-teal-600 font-semibold">
                      Бесплатно
                    </span>
                  </div>
                  <div className="border-t border-indigo-200 pt-4 flex justify-between text-indigo-900 font-bold text-xl">
                    <span>Итого:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-8 bg-teal-600 hover:bg-teal-700 text-white rounded-full py-4 text-lg font-semibold transition-all"
                  onClick={() => alert("Оформление заказа в разработке!")}
                >
                  Оформить заказ
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
