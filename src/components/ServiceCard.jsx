import React from "react";
import { 
  Headphones, 
  Shield, 
  Cloud, 
  Users, 
  Monitor,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const iconMap = {
  HeadphonesIcon: Headphones,
  ShieldIcon: Shield,
  CloudIcon: Cloud,
  UsersIcon: Users,
  MonitorIcon: Monitor,
};

const colorMap = {
  blue: "from-blue-500 to-blue-600",
  emerald: "from-emerald-500 to-emerald-600", 
  cyan: "from-cyan-500 to-cyan-600",
  indigo: "from-indigo-500 to-indigo-600",
  violet: "from-violet-500 to-violet-600",
};

const ServiceCard = ({ icon, title, description, color }) => {
  const Icon = iconMap[icon] || Users;
  const gradientColor = colorMap[color] || colorMap.blue;

  return (
    <Card className="group bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
      <CardContent className="p-8 text-center space-y-6">
        <div className={`w-16 h-16 bg-gradient-to-br ${gradientColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>

        <Button 
          variant="ghost" 
          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold transition-all duration-300 group-hover:translate-x-1"
        >
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;