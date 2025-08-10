import { flex } from "../../classes";
import Container from "../../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getManagersList } from "../../api/managers";
import ManagersItem from "./ManagersItem";
import { useTranslation } from "react-i18next";
import "./style.css";

export default function ManagersView() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { managers, loading } = useSelector((state) => state.managers);

  useEffect(() => {
    dispatch(getManagersList());
  }, []);

  if (loading) {
    return (
      <Container className="py-20">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
        </div>
      </Container>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <Container className="py-12 md:py-20">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            {t("managers")}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("managers_description") ||
              "Meet our experienced leadership team dedicated to advancing railway transportation in Uzbekistan"}
          </p>
        </div>

        {/* Managers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {managers?.map((manager, index) => (
            <ManagersItem manager={manager} key={index} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {(!managers || managers.length === 0) && !loading && (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <i className="fas fa-users text-6xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {t("no_managers") || "No managers found"}
            </h3>
            <p className="text-gray-500">
              {t("no_managers_description") ||
                "Manager information will be available soon"}
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}
