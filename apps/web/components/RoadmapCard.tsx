import Link from "next/link";

interface IRoadmapCardProps {
  category: string;
  roadmapKey: string;
  roadmap: { icon: string; name: string };
}
const RoadmapCard = ({ category, roadmap, roadmapKey }: IRoadmapCardProps) => {
  return (
    <Link
      href={`/roadmap/${category}/${roadmapKey}`}
      className="rounded-2xl w-full h-full aspect-square border border-gray-700 relative overflow-hidden flex items-center justify-center flex-col hover:bg-white/10 transition-colors duration-300 ease-in-out"
    >
      <img
        className="w-3/4 h-3/4 absolute -left-8 top-1/2 -translate-y-1/2 opacity-10"
        src={roadmap.icon}
      />
      <h1 className="text-4xl font-thin">{roadmap.name}</h1>
    </Link>
  );
};

export default RoadmapCard;
