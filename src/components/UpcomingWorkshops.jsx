const UpcomingWorkshops = () => {
  const workshops = [
    {
      id: 1,
      title: "Traditional Pottery Making",
      location: "Bát Tràng Village, Hà Nội",
      date: "December 15, 2024",
      time: "9:00 AM - 4:00 PM",
      instructor: "Nguyễn Thị Mai",
      price: "$85",
      spots: 8,
      totalSpots: 12,
      description:
        "Learn the ancient art of Vietnamese pottery from a master artisan. Create your own ceramic piece using traditional techniques.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Silk Weaving Workshop",
      location: "Hà Đông District, Hà Nội",
      date: "December 22, 2024",
      time: "10:00 AM - 5:00 PM",
      instructor: "Trần Văn Hùng",
      price: "$95",
      spots: 5,
      totalSpots: 10,
      description:
        "Discover the intricate process of silk weaving and create your own silk scarf using traditional looms.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "Đông Hồ Painting Class",
      location: "Đông Hồ Village, Bắc Ninh",
      date: "January 5, 2025",
      time: "8:30 AM - 3:30 PM",
      instructor: "Lê Thị Lan",
      price: "$75",
      spots: 12,
      totalSpots: 15,
      description:
        "Create traditional Vietnamese folk paintings using age-old techniques and natural materials.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="workshops" className="section-padding bg-vietnamese-beige">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            Join Our{" "}
            <span className="text-vietnamese-terracotta">
              Hands-on Workshops
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience Vietnamese craftsmanship firsthand with our immersive
            workshops. Learn directly from master artisans in their traditional
            villages.
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Workshop Image */}
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Spots Available Badge */}
                <div className="absolute top-4 right-4 bg-vietnamese-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
                  {workshop.spots} spots left
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 text-vietnamese-brown px-3 py-1 rounded-full text-sm font-bold">
                  {workshop.price}
                </div>
              </div>

              {/* Workshop Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-vietnamese-brown mb-3">
                  {workshop.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {workshop.description}
                </p>

                {/* Workshop Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-vietnamese-terracotta"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {workshop.location}
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-vietnamese-terracotta"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {formatDate(workshop.date)}
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-vietnamese-terracotta"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {workshop.time}
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-vietnamese-terracotta"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Instructor: {workshop.instructor}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Spots Available</span>
                    <span>
                      {workshop.spots}/{workshop.totalSpots}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-vietnamese-terracotta h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${
                          (workshop.spots / workshop.totalSpots) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Register Button */}
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                    workshop.spots > 0
                      ? "bg-vietnamese-terracotta hover:bg-vietnamese-deep-red text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={workshop.spots === 0}
                >
                  {workshop.spots > 0 ? "Register Now" : "Fully Booked"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Workshops */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            View All Workshops
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingWorkshops;
