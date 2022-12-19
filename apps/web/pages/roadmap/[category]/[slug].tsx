import { marked } from "marked";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useState } from "react";
import Mermaid from "../../../components/Mermaid";
import Sidebar from "../../../components/Sidebar";
import { getRoadmapByName, getRoadmapNames } from "../../../lib/roadmaps-util";

const Roadmap = ({ roadmap, categoryName, roadmapName }: any) => {
  const [sidebarContent, setSidebarContent] = useState<
    { content: string; key: string } | undefined
  >();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const mermaidCallbackHandler = (name: string) => {
    setSidebarContent({
      content: roadmap.roadmapContent.find((where: any) => where.key === name)
        ?.content,
      key: name,
    });
    setSidebarOpen((previousSidebarOpen) => !previousSidebarOpen);
  };
  console.log(roadmap);
  return (
    <>
      <NextSeo
        title={`مسیر یادگیری ${roadmap.metadata.name} - مسیر`}
        description={`مسیر و راهنمای یادگیری ${roadmap.metadata.name}`}
      />
      <Sidebar
        open={sidebarOpen}
        onCloseSidebar={closeSidebar}
        content={sidebarContent?.content || ""}
      >
        <div className="text-gray-400 w-full flex justify-between items-center shrink-0">
          <p className="text-sm md:text-base">
            آیا میخواهید به توسعه این صفحه کمک کنید؟
          </p>
          <Link
            href={`https://github.com/kasraghoreyshi/maseer/tree/main/apps/web/data/roadmaps/${categoryName}/${roadmapName}/content/${sidebarContent?.key}.md`}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            ویرایش
          </Link>
        </div>
      </Sidebar>

      <div className="w-full max-w-4xl mx-auto p-4">
        <Link href={"/"} className="px-4 py-0.5 rounded-full bg-green-600">
          بازگشت
        </Link>
        <div className="flex items-center justify-between pt-4">
          <h1 className="text-2xl font-thin">
            مسیر یادگیری {roadmap.metadata.name}
          </h1>
          <img className="w-12 h-12" src={roadmap.metadata.icon} />
        </div>
        <p className="text-sm text-gray-300 mt-2">
          برای مشاهده جزئیات هر قدم، روی آن کافی است کلیک کنید.
        </p>
        <div className="my-4 h-0.5 w-full bg-gray-800"></div>
      </div>
      <div className="items-center justify-center flex h-full w-full">
        <Mermaid
          onCallback={mermaidCallbackHandler}
          chart={
            roadmap.content.replace("```mermaid", "").replace("```", "") +
            roadmap.roadmapContent
              .map(
                (roadmapContent: any) => `click ${roadmapContent.key} callback`
              )
              .join("\n")
          }
        />
      </div>
    </>
  );
};

export default Roadmap;

export async function getStaticPaths() {
  const roadmapWithCategories = await getRoadmapNames();
  const paths = [];
  for (const category in roadmapWithCategories) {
    if (Object.prototype.hasOwnProperty.call(roadmapWithCategories, category)) {
      const roadmaps = roadmapWithCategories[category];
      for (const roadmap of roadmaps) {
        paths.push({ params: { category, slug: roadmap } });
      }
    }
  }

  return {
    paths,
    fallback: "blocking",
  };
}

type ContextType = {
  params: {
    slug: string;
    category: string;
  };
};

export async function getStaticProps(context: ContextType) {
  const roadmapName: string = context?.params?.slug;
  const categoryName: string = context?.params?.category;
  const roadmap = await getRoadmapByName(categoryName, roadmapName);
  return {
    props: {
      roadmap: {
        content: roadmap.data.content,
        roadmapContent: roadmap.content.map((roadmapContent) => ({
          key: roadmapContent.key,
          content: marked.parse(roadmapContent.content),
        })),
        metadata: roadmap.data.data,
      },
      categoryName,
      roadmapName,
      revalidate: 60 * 60,
    },
  };
}
