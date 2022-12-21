import classNames from "classnames";
import Link from "next/link";

interface IRoadmapCardProps {
  category: string;
  roadmapKey: string;
  roadmap: { icon: string; name: string; isComingSoon?: boolean };
}

const className =
  "rounded-2xl w-full h-full aspect-square bg-gray-800/20 border border-gray-800 relative overflow-hidden flex items-center justify-center flex-col hover:bg-gray-800/80 transition-colors duration-300 ease-in-out";

const RoadmapCard = ({ category, roadmap, roadmapKey }: IRoadmapCardProps) => {
  const children = (
    <>
      {roadmap.isComingSoon && (
        <div className="absolute top-0 right-0 p-2 bg-yellow-700 rounded-bl-lg">
          <p>به زودی</p>
        </div>
      )}
      <img
        className={classNames(
          "w-full h-full top-0 right-0 absolute blur-sm",
          roadmap.isComingSoon ? "opacity-5" : "opacity-10"
        )}
        src={roadmap.icon}
      />
      <h1
        className={classNames(
          "text-2xl md:text-3xl lg:text-4xl font-thin",
          roadmap.isComingSoon && "opacity-50"
        )}
      >
        {roadmap.name}
      </h1>
    </>
  );
  return roadmap.isComingSoon ? (
    <div className={className}>{children}</div>
  ) : (
    <Link href={`/roadmap/${category}/${roadmapKey}`} passHref>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default RoadmapCard;
