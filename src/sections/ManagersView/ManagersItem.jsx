import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ManagersItem({ manager, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "fadeInUp 0.6s ease-out forwards",
      }}
    >
      {/* Card Header with Image */}
      <div className="relative">
        <div className="h-64 md:h-96 overflow-hidden">
          <img
            src={manager?.image || "/default-manager.jpg"}
            alt={manager?.full_name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/400x300/1e40af/ffffff?text=Manager";
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Position Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {manager?.job || t("manager")}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 md:p-8">
        {/* Name */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          {manager?.full_name}
        </h3>

        {/* Contact Information */}
        <div className="space-y-3 mb-6">
          {manager?.phone && (
            <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <i className="fas fa-phone w-5 text-blue-500 mr-3"></i>
              <a href={`tel:${manager.phone}`} className="hover:underline">
                {manager.phone}
              </a>
            </div>
          )}

          <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <i className="fas fa-envelope w-5 text-blue-500 mr-3"></i>
            <a href="mailto:expression@info.uz" className="hover:underline">
              expression@info.uz
            </a>
          </div>

          <div className="flex items-center text-gray-600">
            <i className="fas fa-clock w-5 text-blue-500 mr-3"></i>
            <span>Dushanba 15:00 - 16:00</span>
          </div>
        </div>

        {/* Biography Section */}
        {manager?.about && (
          <div className="border-t border-gray-100 pt-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-between w-full text-left mb-4 group"
            >
              <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {t("biography") || "Qisqacha tarjimai hol"}
              </span>
              <i
                className={`fas fa-chevron-down text-blue-500 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              ></i>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {manager.about}
              </p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6 pt-6 border-t border-gray-100">
          <button className="flex-1 bg-blue-600 text-white  md:py-3 md:px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            <i className="fas fa-phone mr-2"></i>
            {t("call") || "Qo'ng'iroq"}
          </button>
          <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium">
            <i className="fas fa-envelope mr-2"></i>
            {t("email") || "Email"}
          </button>
        </div>
      </div>
    </div>
  );
}
