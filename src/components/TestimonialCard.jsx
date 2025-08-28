import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Quote } from "lucide-react";

const TestimonialCard = ({ name, image, content }) => {
  return (
    <Card className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
      <CardContent className="p-8 space-y-6">
        <div className="flex items-center justify-center">
          <Quote className="w-10 h-10 text-blue-500/30" />
        </div>
        
        <p className="text-slate-600 leading-relaxed text-center italic">
          "{content}"
        </p>
        
        <div className="flex flex-col items-center space-y-3">
          <Avatar className="w-16 h-16">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-semibold">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <h4 className="font-bold text-slate-800 text-lg">{name}</h4>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;