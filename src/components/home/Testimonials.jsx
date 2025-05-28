import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/utils.js";

const Testimonials = () => {

  return (
    // check globals.css for the background image class
    <div className="relative min-h-[600px] w-full">
      <div
        className="absolute inset-0 backgroundImgTestimonials bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl">
        <h2 className="mb-12 text-3xl font-bold text-center text-background">
          what they say
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 place-items-center">
            {testimonials?.length > 0 ? (
                testimonials.slice(0, 3).map((testimonial, index) => (
                    <Card key={index} className="w-full max-w-sm h-auto">
                        <CardContent className="h-full pt-6 flex flex-col justify-between">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-16 h-16 overflow-hidden rounded-full relative">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                <p className="text-center text-muted-foreground">
                                    {testimonial.content}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <p>No testimonials available.</p>
            )}

        </div>
      </div>
    </div>
  );
};

export default Testimonials;
