import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { getDirectories } from "./get-directories";

export const getAllCategoriesMetadatas = async (category: string) => {
  const categories = await getCategoryNames();
  const data: { [key in string]: any } = {};
  for (const category of categories) {
    const categoryData = await getCategoryByName(category);
    data[category] = categoryData.data.data;
  }
  return data;
};

export const getAllRoadmapMetadatas = async (category: string) => {
  const roadmaps = await getRoadmapNamesInCategory(category);
  const data: { [key in string]: any } = {};
  for (const roadmap of Object.values(roadmaps).flat()) {
    const roadmapData = await getRoadmapByName(category, roadmap);
    data[roadmap] = roadmapData.data.data;
  }
  return data;
};

export const getCategoryNames = () => {
  return getDirectories(path.resolve(`./data/roadmaps`));
};

export const getRoadmapNames = async () => {
  const categories = await getCategoryNames();
  const roadmaps: { [key in string]: any } = {};
  for (const category of categories) {
    roadmaps[category] = await getDirectories(
      path.resolve(`./data/roadmaps/${category}`)
    );
  }
  return roadmaps;
};

export const getRoadmapNamesInCategory = async (category: string) => {
  return getDirectories(path.resolve(`./data/roadmaps/${category}`));
};

export const getRoadmapContent = async (category: string, name: string) => {
  const contentFolderExists = await fs.existsSync(
    path.resolve(`./data/roadmaps/${category}/${name}/content`)
  );
  if (!contentFolderExists) return [];
  let contentFiles = await fs.readdirSync(
    path.resolve(`./data/roadmaps/${category}/${name}/content`),
    { withFileTypes: true }
  );
  const contentFileNames = contentFiles
    .filter((item) => !item.isDirectory())
    .map((item) => item.name);
  const result = [];
  for (const contentFileName of contentFileNames) {
    const contentFile = await fs.readFileSync(
      path.resolve(
        `./data/roadmaps/${category}/${name}/content/${contentFileName}`
      )
    );
    result.push({
      key: contentFileName.split(".md")[0],
      ...matter(contentFile),
    });
  }
  return result;
};

export const getRoadmapByName = async (category: string, name: string) => {
  const roadmapFile = await fs.readFileSync(
    path.resolve(`./data/roadmaps/${category}/${name}/readme.md`)
  );
  const roadmapContentFiles = await getRoadmapContent(category, name);
  return { data: matter(roadmapFile), content: roadmapContentFiles };
};

export const getCategoryByName = async (category: string) => {
  const categoryFile = await fs.readFileSync(
    path.resolve(`./data/roadmaps/${category}/readme.md`)
  );
  return { data: matter(categoryFile) };
};
