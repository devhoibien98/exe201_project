const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop&crop=face",
      quote:
        "The ceramic vase I received from Bát Tràng is absolutely stunning. The craftsmanship is incredible, and knowing it was made by a traditional artisan makes it even more special. I can't wait to order more!",
      product: "Ceramic Vase from Bát Tràng",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop&crop=face",
      quote:
        "I attended the silk weaving workshop in Hà Đông and it was an unforgettable experience. Learning directly from the master weaver and creating my own silk scarf was magical. The platform truly connects you with authentic Vietnamese culture.",
      product: "Silk Weaving Workshop",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "London, UK",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop&crop=face",
      quote:
        "The Đông Hồ painting I purchased is a beautiful piece of Vietnamese heritage. The colors and traditional motifs are exactly as described. It's now the centerpiece of my living room and always sparks conversations.",
      product: "Đông Hồ Folk Painting",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            What Our{" "}
            <span className="text-vietnamese-terracotta">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover why craft lovers and cultural enthusiasts choose our
            platform for authentic Vietnamese handicrafts and experiences.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-vietnamese-beige rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Rating */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 italic mb-6 leading-relaxed text-lg">
                "{testimonial.quote}"
              </blockquote>

              {/* Product */}
              <div className="mb-6">
                <span className="text-sm text-vietnamese-terracotta font-medium">
                  {testimonial.product}
                </span>
              </div>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full overflow-hidden mr-4">
                  <div className="w-full h-full bg-gradient-to-br from-vietnamese-terracotta/20 to-vietnamese-warm-orange/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-vietnamese-terracotta"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-vietnamese-brown">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-vietnamese-brown mb-2">
              2,500+
            </div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-vietnamese-brown mb-2">
              4.9/5
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-vietnamese-brown mb-2">
              150+
            </div>
            <div className="text-gray-600">Master Artisans</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-vietnamese-brown mb-2">
              98%
            </div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
