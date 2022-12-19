import { NextSeo } from "next-seo";
import React from "react";
import Navbar from "../components/Navbar";
import RoadmapCard from "../components/RoadmapCard";
import {
  getAllRoadmapMetadatas,
  getCategoryByName,
  getCategoryNames,
} from "../lib/roadmaps-util";

export default function Web({ categoriesWithRoadmaps }: any) {
  return (
    <>
      <NextSeo
        title="مسیر - یار شما در یادگیری"
        description="مسیر به شما کمک می کند در یادگرفتن مهارت های مختلف در حوزه برنامه نویسی"
      />

      <div className="relative p-8 flex flex-col items-start justify-center max-w-5xl mx-auto">
        <div className="w-full h-1/4 rounded-full absolute top-0 right-0 bg-gradient-to-tr from-gray-800 to-gray-900 -z-10 opacity-30 blur-[70px]"></div>
        <Navbar />
        <div className="w-full h-[1px] bg-gray-800 my-6"></div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold max-w-3xl">
          داستان فعالیت در زمینه محبوبتتان از اینجا شروع می شود.
        </h1>
        <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-400">
          مسیر به شما کمک می کند در زمینه های مختلف، منابع آموزنده و مفید پیدا و
          استفاده کنید. سعی می شود منابع معرفی شده، به صورت رایگان باشند تا بدون
          پرداخت هزینه بتوانید مهارت محبوب خود را فرا بگیرید.
        </p>
        {categoriesWithRoadmaps.map(
          ({ categoryKey, category, roadmaps }: any) => {
            return (
              <React.Fragment key={categoryKey}>
                <div className="rounded-3xl mt-8 overflow-hidden w-full h-24 relative bg-gradient-to-l from-black to-transparent border border-gray-800 p-4 flex items-center justify-start">
                  <img
                    src={category.backgroundImage}
                    className="w-full h-full object-cover origin-center absolute top-0 right-0 opacity-60"
                  />
                  <h1 className="text-2xl lg:text-3xl font-semibold relative z-10">
                    {category.name}
                  </h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full mt-8 gap-8">
                  {Object.keys(roadmaps).map((roadmapKey: string) => {
                    const roadmap = roadmaps[roadmapKey];
                    return (
                      <RoadmapCard
                        key={roadmap.name}
                        category={categoryKey}
                        roadmap={roadmap}
                        roadmapKey={roadmapKey}
                      />
                    );
                  })}
                </div>
              </React.Fragment>
            );
          }
        )}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const categories = await getCategoryNames();
  const categoriesWithRoadmaps: {
    categoryKey: string;
    category: any;
    roadmaps: any;
  }[] = [];
  for (const category of categories) {
    const categoryData = await getCategoryByName(category);
    const roadmaps = await getAllRoadmapMetadatas(category);
    categoriesWithRoadmaps.push({
      categoryKey: category,
      category: categoryData.data.data,
      roadmaps,
    });
  }
  return { props: { categoriesWithRoadmaps }, revalidate: 60 * 60 };
};
