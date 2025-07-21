const FeaturedArtisans = () => {
  const artisans = [
    {
      id: 1,
      name: "Nguyễn Thị Mai",
      village: "Bát Tràng",
      craft: "Ceramics",
      experience: "25 years",
      story:
        "I learned pottery from my grandmother when I was just 8 years old. Each piece I create carries the spirit of our village and the love of our ancestors.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=face",
      products: 45,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Trần Văn Hùng",
      village: "Hà Đông",
      craft: "Silk Weaving",
      experience: "18 years",
      story:
        "Silk weaving is not just a craft, it's our family's legacy. I weave stories into every fabric, connecting past and present.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&crop=face",
      products: 32,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Lê Thị Lan",
      village: "Đông Hồ",
      craft: "Folk Paintings",
      experience: "30 years",
      story:
        "Our paintings preserve the wisdom of Vietnamese culture. Each stroke tells a story that has been passed down for generations.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=face",
      products: 28,
      rating: 5.0,
    },
  ];

  return (
    <section id="artisans" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            Meet Our{" "}
            <span className="text-vietnamese-terracotta">Master Artisans</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Behind every handcrafted piece is a skilled artisan with decades of
            experience. Discover the stories and traditions that make each
            creation unique.
          </p>
        </div>

        {/* Artisans Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {artisans.map((artisan) => (
            <div
              key={artisan.id}
              className="bg-vietnamese-beige rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Artisan Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-vietnamese-terracotta/20 to-vietnamese-warm-orange/20 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-vietnamese-terracotta"
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

                {/* Experience Badge */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-vietnamese-terracotta text-white px-4 py-1 rounded-full text-sm font-medium">
                  {artisan.experience}
                </div>
              </div>

              {/* Artisan Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-vietnamese-brown mb-2">
                  {artisan.name}
                </h3>
                <p className="text-vietnamese-terracotta font-medium mb-1">
                  {artisan.craft}
                </p>
                <p className="text-gray-600 text-sm">
                  {artisan.village} Village
                </p>
              </div>

              {/* Story */}
              <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                "{artisan.story}"
              </blockquote>

              {/* Stats */}
              <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-vietnamese-brown">
                    {artisan.products}
                  </div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-vietnamese-brown mr-1">
                      {artisan.rating}
                    </span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(artisan.rating)
                              ? "fill-current"
                              : "fill-gray-300"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full btn-secondary">View Profile</button>
            </div>
          ))}
        </div>

        {/* View All Artisans */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            Meet All Artisans
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtisans;
