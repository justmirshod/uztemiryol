import { Link } from "react-router-dom";
import { flex } from "../../classes";
import Container from "../Container";
import Logo from "../Logo";
import SubHeaderItem from "./SubHeaderItem";
import { useTranslation } from "react-i18next";

const activeLang = localStorage.getItem("i18nextLng") || "uz";

export default function SubHeader() {
  const { t } = useTranslation();

  const siteRoutes = [
    {
      title: t("about_us"),
      routes: [
        {
          name: t("history"),
          link: `/${activeLang}/history`,
        },
        {
          name: t("about_company"),
          link: `/${activeLang}/about_us`,
        },
        {
          name: t("managers"),
          link: `/${activeLang}/managers`,
        },
        {
          name: t("dev_strategy"),
          link: `/${activeLang}/development_strategy`,
        },
        {
          name: t("statistics"),
          link: `/${activeLang}/statistics`,
        },
        // {
        //   name: t("vacancies"),
        //   link: `/${activeLang}/vacancies`,
        // },
        {
          name: t("citizen_appeal"),
          link: `/${activeLang}/citizen_appeal`,
        },
        {
          name: t("online_reception"),
          link: `/${activeLang}/online_reception`,
        },
        {
          name: t("contact"),
          link: `/${activeLang}/communications`,
        },
      ],
    },
    {
      title: t("media_center"),
      routes: [
        {
          name: t("news"),
          link: `/${activeLang}/blog/news`,
        },
        {
          name: t("tenders"),
          link: `/${activeLang}/blog/tenders`,
        },
        {
          name: t("galery"),
          link: `/${activeLang}/photos`,
        },
        {
          name: t("videos"),
          link: `https://youtube.com`,
        },
        {
          name: t("ads"),
          link: `/${activeLang}/blog/announcements`,
        },
      ],
    },
    {
      title: t("map"),
      routes: [],
      link: `/${activeLang}/map`,
    },
    {
      title: t("scheduleIndex"),
      routes: [
        {
          name: t("schedule"),
          link: `https://eticket.railway.uz/${activeLang}/pages/schedule`,
        },
      ],
    },
    {
      title: t("ticket_sell"),
      routes: [],
      link: `https://eticket.railway.uz`,
    },
    // {
    //   title: t("services"),
    //   routes: [
    //     {
    //       name: t("trains"),
    //       link: `/${activeLang}/trains`,
    //     },
    //     {
    //       name: t("ad_services"),
    //       link: `/${activeLang}/ad_services`,
    //     },
    //     {
    //       name: t("state_services"),
    //       link: `https://my.gov.uz`,
    //     },
    //     {
    //       name: t("how_to_buy_ticket"),
    //       link: `https://chipta.railway.uz/${activeLang}/pages/how-tu-buy`,
    //     },
    //     {
    //       name: t("how_to_return_ticket"),
    //       link: `https://chipta.railway.uz/${activeLang}/pages/how-tu-return`,
    //     },
    //   ],
    // },
    {
      title: t("laws"),
      routes: [
        {
          name: t("railway_transportation_law"),
          link: `/${activeLang}/railway_transportation_law`,
        },
        {
          name: t("commands"),
          link: `/${activeLang}/commands`,
        },
        {
          name: t("decisions"),
          link: `/${activeLang}/decisions`,
        },
        {
          name: t("laws_of_republic"),
          link: `/${activeLang}/laws_of_republic`,
        },
      ],
    },
    {
      title: t("corporate_governance"),
      routes: [
        {
          name: t("society_charter"),
          link: `/${activeLang}/society_charter`,
        },
        {
          name: t("bussines_plan"),
          link: `/${activeLang}/bussines_plan`,
        },
        {
          name: t("supervisory_board"),
          link: `/${activeLang}/supervisory_board`,
        },
        {
          name: t("reports"),
          link: `/${activeLang}/reports`,
        },
        {
          name: t("inspection"),
          link: `/${activeLang}/inspection`,
        },
        {
          name: t("internal_audit"),
          link: `/${activeLang}/internal_audit`,
        },
        {
          name: t("internal_docs"),
          link: `/${activeLang}/internal_documents`,
        },
        {
          name: t("external_audit"),
          link: `/${activeLang}/external_audit_conclusion`,
        },
      ],
    },
  ];
  return (
    <div className={`${flex.alignCenter} justify-between mt-4 py-1`}>
      <Logo className="hidden w-[53px] h-[96px]" />
      {siteRoutes.map((route, index) => (
        <SubHeaderItem route={route} key={index} />
      ))}
    </div>
  );
}
