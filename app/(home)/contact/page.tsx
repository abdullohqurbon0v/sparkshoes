"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      {/* Header */}
      <section className="bg-gradient-to-r from-sky-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl">
            Свяжитесь с нами
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-indigo-100">
            Мы готовы ответить на ваши вопросы
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-indigo-100">
            <h2 className="text-3xl font-bold text-sky-600 mb-6">
              Отправьте нам сообщение
            </h2>
            {isSubmitted && (
              <div className="mb-4 p-4 bg-teal-100 text-teal-800 rounded-lg">
                Спасибо! Ваше сообщение успешно отправлено.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Ваше имя
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Введите ваше имя"
                  className="w-full border-indigo-200 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Введите ваш email"
                  className="w-full border-indigo-200 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Напишите ваше сообщение"
                  className="w-full border-indigo-200 focus:ring-teal-500 min-h-[150px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full py-3 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Отправить
              </Button>
            </form>
          </div>
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-sky-600 mb-6">
                Контактная информация
              </h2>
              <div className="space-y-6 text-gray-600">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-teal-500 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p>sparkshoes@storeblue.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-teal-500 mr-3" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p>+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-teal-500 mr-3" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p>г. Москва, ул. Примерная, д. 10</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100">
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">
                Найдите нас на карте
              </h3>
              <div className="relative h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.256614413698!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzcnMDIuMyJF!5e0!3m2!1sru!2sru!4v1630000000000!5m2!1sru!2sru"
                  className="absolute inset-0 w-full h-full rounded-xl"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
