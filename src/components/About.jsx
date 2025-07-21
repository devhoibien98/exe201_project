const About = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-vietnamese-cream to-white">
      <div className="container-custom">
        {/* Section: Giới thiệu tổng quan */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="heading-primary mb-4">
            Về dự án <span className="text-accent">Vietnamese Handicrafts</span>
          </h1>
          <p className="text-lg text-vietnamese-gray-dark mb-4 leading-relaxed">
            Vietnamese Handicrafts là nền tảng kết nối các làng nghề truyền
            thống Việt Nam với cộng đồng yêu thủ công trên toàn thế giới. Chúng
            tôi tôn vinh giá trị văn hóa, bảo tồn tinh hoa nghề truyền thống và
            tạo sinh kế bền vững cho nghệ nhân.
          </p>
        </div>

        {/* Section: Sứ mệnh, tầm nhìn, giá trị */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <h3 className="text-xl font-bold text-vietnamese-brown mb-2">
              Sứ mệnh
            </h3>
            <p className="text-vietnamese-gray">
              Kết nối, bảo tồn và phát triển nghề thủ công truyền thống Việt
              Nam, mang sản phẩm thủ công đến gần hơn với bạn bè quốc tế.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <h3 className="text-xl font-bold text-vietnamese-brown mb-2">
              Tầm nhìn
            </h3>
            <p className="text-vietnamese-gray">
              Trở thành nền tảng số hàng đầu về thủ công mỹ nghệ Việt Nam, lan
              tỏa giá trị văn hóa và sáng tạo ra cộng đồng toàn cầu.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <h3 className="text-xl font-bold text-vietnamese-brown mb-2">
              Giá trị cốt lõi
            </h3>
            <ul className="text-vietnamese-gray list-disc list-inside text-left mt-2">
              <li>Bảo tồn di sản</li>
              <li>Chính trực & minh bạch</li>
              <li>Đồng hành cùng nghệ nhân</li>
              <li>Đổi mới sáng tạo</li>
              <li>Lan tỏa cộng đồng</li>
            </ul>
          </div>
        </div>

        {/* Section: Timeline phát triển */}
        <div className="mb-16">
          <h2 className="heading-secondary text-center mb-8">
            Hành trình phát triển
          </h2>
          <div className="relative pl-8">
            <div className="border-l-4 border-vietnamese-terracotta absolute h-full left-2 top-0"></div>
            <div className="space-y-10">
              <div className="relative">
                <div className="absolute -left-6 top-0 w-6 h-6 bg-vietnamese-terracotta rounded-full border-4 border-white"></div>
                <div className="ml-8">
                  <h4 className="font-bold text-vietnamese-brown">
                    2022: Khởi nguồn ý tưởng
                  </h4>
                  <p className="text-vietnamese-gray">
                    Nhóm sáng lập bắt đầu nghiên cứu và kết nối các làng nghề
                    truyền thống.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-6 top-0 w-6 h-6 bg-vietnamese-gold rounded-full border-4 border-white"></div>
                <div className="ml-8">
                  <h4 className="font-bold text-vietnamese-brown">
                    2023: Ra mắt nền tảng
                  </h4>
                  <p className="text-vietnamese-gray">
                    Website Vietnamese Handicrafts chính thức hoạt động, thu hút
                    hàng trăm nghệ nhân tham gia.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-6 top-0 w-6 h-6 bg-vietnamese-green rounded-full border-4 border-white"></div>
                <div className="ml-8">
                  <h4 className="font-bold text-vietnamese-brown">
                    2024: Mở rộng quốc tế
                  </h4>
                  <p className="text-vietnamese-gray">
                    Sản phẩm thủ công Việt Nam được xuất khẩu và giới thiệu tại
                    nhiều sự kiện quốc tế.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Đội ngũ sáng lập */}
        <div className="mb-16">
          <h2 className="heading-secondary text-center mb-8">
            Đội ngũ sáng lập
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 bg-gradient-to-br from-vietnamese-terracotta/20 to-vietnamese-warm-orange/20 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-vietnamese-terracotta"
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
              <h4 className="font-semibold text-vietnamese-brown">
                Nguyễn Văn A
              </h4>
              <p className="text-vietnamese-gray">Founder & CEO</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 bg-gradient-to-br from-vietnamese-gold/20 to-vietnamese-green/20 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-vietnamese-gold-dark"
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
              <h4 className="font-semibold text-vietnamese-brown">
                Trần Thị B
              </h4>
              <p className="text-vietnamese-gray">Co-Founder & CTO</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 bg-gradient-to-br from-vietnamese-blue/20 to-vietnamese-cream/20 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-vietnamese-blue"
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
              <h4 className="font-semibold text-vietnamese-brown">Lê Văn C</h4>
              <p className="text-vietnamese-gray">Co-Founder & COO</p>
            </div>
          </div>
        </div>

        {/* Section: How it works & Visual (giữ nguyên phần cũ) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="heading-secondary">
              Preserving Traditions,{" "}
              <span className="text-accent">Empowering Artisans</span>
            </h2>
            <p className="text-lg text-vietnamese-gray-dark mb-6 leading-relaxed">
              Our mission is to bridge the gap between traditional Vietnamese
              artisans and global craft lovers. We connect you directly with
              skilled craftspeople from renowned villages like{" "}
              <span className="text-accent font-semibold">Bát Tràng</span> for
              ceramics,{" "}
              <span className="text-accent font-semibold">Hà Đông</span> for
              silk, and{" "}
              <span className="text-accent font-semibold">Đông Hồ</span> for
              traditional paintings.
            </p>
            <p className="text-lg text-vietnamese-gray-dark mb-8 leading-relaxed">
              Every purchase supports local communities and helps preserve
              centuries-old crafting techniques that are passed down through
              generations. Our platform ensures fair compensation for artisans
              while bringing authentic Vietnamese culture to your doorstep.
            </p>
            {/* How it works */}
            <div className="space-y-4">
              <h3 className="heading-accent">How It Works</h3>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-vietnamese-red to-vietnamese-red-dark text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1 shadow-md">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-vietnamese-brown-dark">
                    Discover
                  </h4>
                  <p className="text-vietnamese-gray">
                    Browse our curated collection of authentic Vietnamese
                    handicrafts
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-vietnamese-gold to-vietnamese-gold-dark text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1 shadow-md">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-vietnamese-brown-dark">
                    Connect
                  </h4>
                  <p className="text-vietnamese-gray">
                    Learn about the artisan's story and traditional techniques
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-vietnamese-green to-vietnamese-green-dark text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1 shadow-md">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-vietnamese-brown-dark">
                    Support
                  </h4>
                  <p className="text-vietnamese-gray">
                    Your purchase directly supports the artisan and their
                    community
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Visual */}
          <div className="relative">
            <div className="card-accent p-8">
              <div className="grid grid-cols-2 gap-4">
                {/* Ceramics */}
                <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-vietnamese-gray-light hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 bg-vietnamese-red/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-vietnamese-red"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12a2 2 0 114 0 2 2 0 01-4 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-vietnamese-brown-dark">
                    Ceramics
                  </h4>
                  <p className="text-sm text-vietnamese-gray">
                    Bát Tràng Village
                  </p>
                </div>
                {/* Silk */}
                <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-vietnamese-gray-light hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 bg-vietnamese-gold/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-vietnamese-gold-dark"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-vietnamese-brown-dark">
                    Silk
                  </h4>
                  <p className="text-sm text-vietnamese-gray">
                    Hà Đông District
                  </p>
                </div>
                {/* Paintings */}
                <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-vietnamese-gray-light hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 bg-vietnamese-green/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-vietnamese-green"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-vietnamese-brown-dark">
                    Paintings
                  </h4>
                  <p className="text-sm text-vietnamese-gray">
                    Đông Hồ Village
                  </p>
                </div>
                {/* Bamboo */}
                <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-vietnamese-gray-light hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 bg-vietnamese-blue/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-vietnamese-blue"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-vietnamese-brown-dark">
                    Bamboo
                  </h4>
                  <p className="text-sm text-vietnamese-gray">
                    Tây Nguyên Region
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-vietnamese-red/10 rounded-full blur-xl animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-vietnamese-gold/10 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
