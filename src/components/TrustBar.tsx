import { Star, Award, Users, Shield, ThumbsUp } from "lucide-react";

const items = [
  {
    icon: <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-amber-500 fill-amber-500" />)}</div>,
    value: "5.0 / 5",
    label: "71 avis TripAdvisor",
  },
  {
    icon: <Award className="w-3.5 h-3.5 text-cambodia-red" />,
    value: "Certifiés",
    label: "Ministère du Tourisme",
  },
  {
    icon: <Users className="w-3.5 h-3.5 text-cambodia-red" />,
    value: "2 000+",
    label: "Voyageurs accompagnés",
  },
  {
    icon: <Shield className="w-3.5 h-3.5 text-cambodia-red" />,
    value: "15 ans",
    label: "D'expérience à Siem Reap",
  },
  {
    icon: <ThumbsUp className="w-3.5 h-3.5 text-cambodia-red" />,
    value: "100% privé",
    label: "Aucun groupe de masse",
  },
];

const TrustBar = () => (
  <div className="bg-white border-b border-border">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center overflow-x-auto scrollbar-hide">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 py-3 px-4 sm:px-6 flex-shrink-0 border-r border-border/60 last:border-r-0"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div className="leading-tight">
              <div className="font-sans text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">
                {item.value}
              </div>
              <div className="font-sans text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap font-light">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
