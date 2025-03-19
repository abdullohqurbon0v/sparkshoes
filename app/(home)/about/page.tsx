"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      <section className="bg-gradient-to-r from-sky-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl">
            О нас
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-indigo-100">
            Узнайте больше о StoreBlue и нашей миссии
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-indigo-900 mb-4">
                Наша история
              </h2>
              <p className="text-gray-600 leading-relaxed">
                StoreBlue был основан в 2020 году с целью предоставить клиентам
                доступ к качественным товарам по разумным ценам. Мы начинали как
                небольшой онлайн-магазин и выросли в полноценную платформу,
                предлагающую широкий ассортимент электроники, одежды, обуви и
                аксессуаров. Наша миссия — сделать шопинг удобным, приятным и
                доступным для каждого.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Мы гордимся тем, что сотрудничаем с лучшими брендами и
                поддерживаем высокий уровень обслуживания клиентов. Каждый день
                мы работаем над тем, чтобы улучшать ваш опыт покупок!
              </p>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="https://picsum.photos/600/400?random=1"
                alt="Наша команда"
                className="rounded-2xl object-cover shadow-lg"
                fill
              />
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-12 bg-white rounded-2xl shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">
              Наша миссия
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Мы стремимся создавать пространство, где каждый может найти то,
              что ему нужно, не переплачивая и не теряя времени. Качество,
              доступность и удовлетворение клиентов — это то, что движет нами
              вперед.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">
            Наша команда
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Abdulloh Qurbonov",
                role: "Frontend Developer",
                img: "https://picsum.photos/400/400?random=2",
              },
              {
                name: "Iskandar",
                role: "Backend developer",
                img: "https://picsum.photos/400/400?random=3",
              },
              {
                name: "Malika",
                role: "Dizayner",
                img: "https://picsum.photos/400/400?random=4",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.img}
                    alt={member.name}
                    className="rounded-full object-cover"
                    fill
                  />
                </div>
                <h3 className="text-xl font-semibold text-indigo-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">
            Свяжитесь с нами
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-600">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-teal-500 mr-2" />
              <span>support@storeblue.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-teal-500 mr-2" />
              <span>+998 91 600 83 00</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-teal-500 mr-2" />
              <span>г. Ташкени </span>
            </div>
          </div>
          <Button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-3">
            Написать нам
          </Button>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
