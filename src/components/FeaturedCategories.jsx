const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Ceramics",
      village: "Bát Tràng",
      description: "Traditional pottery and ceramics with intricate designs",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12a2 2 0 114 0 2 2 0 01-4 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Silk",
      village: "Hà Đông",
      description: "Luxurious handwoven silk fabrics and garments",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Đông Hồ Paintings",
      village: "Đông Hồ",
      description: "Traditional folk paintings with cultural significance",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
        </svg>
      ),
    },
    {
      id: 4,
      name: "Bamboo Crafts",
      village: "Tây Nguyên",
      description: "Eco-friendly bamboo products and furniture",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 5,
      name: "Lacquerware",
      village: "Hà Nội",
      description: "Beautiful lacquered wooden items and art",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 6,
      name: "Woodwork",
      village: "Huế",
      description: "Hand-carved wooden furniture and decorative items",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="products" className="section-padding bg-vietnamese-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            Explore Our{" "}
            <span className="text-accent">Handcrafted Collections</span>
          </h2>
          <p className="text-xl text-vietnamese-gray max-w-3xl mx-auto">
            Discover authentic Vietnamese handicrafts from renowned artisan
            villages, each piece telling a story of tradition and cultural
            heritage.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="card group">
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-vietnamese-brown-light to-vietnamese-cream relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-vietnamese-brown-light rounded-full flex items-center justify-center text-vietnamese-brown-dark shadow">
                  {category.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-vietnamese-brown-dark">
                    {category.name}
                  </h3>
                  <span className="text-sm text-vietnamese-brown font-medium">
                    {category.village}
                  </span>
                </div>

                <p className="text-vietnamese-gray mb-4 leading-relaxed">
                  {category.description}
                </p>

                <button className="w-full btn-primary text-lg">
                  Explore {category.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
