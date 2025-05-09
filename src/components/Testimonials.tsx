
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials: any[] = [
    {
      name: "Khushi Vijay",
      role: "Founder",
      company: "TechSpark Solutions",
      content: "Working with the team was smooth and impressive. They understood our brand and delivered exactly what we needed.",
      rating: 5,
      image: "https://i.pinimg.com/736x/f0/0d/42/f00d422a9c76527659c73b754cfff5be.jpg",
    },
     {
      name: "Amrit Seth",
      role: "Co-Founder",
      company: "TechSpark Solutions",
      content: "Working with the team was smooth and impressive. They understood our brand and delivered exactly what we needed.",
      rating: 5,
      image: "https://i.pinimg.com/736x/e3/ce/90/e3ce90e267acb2bdbda5de0ee19b2f2d.jpg",
    },
  ];

  return (
    <section id="testimonials" className="section-container bg-muted/30">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-2">About Our Client</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          TechSpark Solutions is a growing IT company focused on digital transformation for small businesses. Their goal is to create simple yet powerful tech tools for startups.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-0">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg italic">&ldquo;{testimonial.content}&rdquo;</p>
            </CardHeader>
            <CardFooter className="pt-6">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}{testimonial.company.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
