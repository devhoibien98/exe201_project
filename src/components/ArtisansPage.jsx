import { useState } from "react";

const sampleArtisans = [
  {
    id: 1,
    name: "Nguyễn Thị Mai",
    village: "Bát Tràng",
    craft: "Gốm sứ",
    experience: "25 năm",
    description:
      "Tôi học nghề gốm từ bà ngoại khi mới 8 tuổi. Mỗi sản phẩm là một phần tâm hồn làng nghề và tình yêu tổ tiên.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=face",
    featuredProducts: ["Bình gốm cổ", "Bộ ấm trà men rạn"],
    rating: 4.9,
    region: "Miền Bắc",
  },
  {
    id: 2,
    name: "Trần Văn Hùng",
    village: "Hà Đông",
    craft: "Dệt lụa",
    experience: "18 năm",
    description:
      "Dệt lụa là di sản gia đình. Tôi gửi gắm câu chuyện vào từng tấm vải, kết nối quá khứ và hiện tại.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&crop=face",
    featuredProducts: ["Khăn lụa tơ tằm", "Vải lụa hoa văn cổ"],
    rating: 4.8,
    region: "Miền Bắc",
  },
  {
    id: 3,
    name: "Lê Thị Lan",
    village: "Đông Hồ",
    craft: "Tranh dân gian",
    experience: "30 năm",
    description:
      "Tranh Đông Hồ lưu giữ tinh hoa văn hóa Việt. Mỗi nét vẽ là một câu chuyện truyền đời.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=face",
    featuredProducts: ["Tranh lợn đàn", "Tranh gà mẹ con"],
    rating: 5.0,
    region: "Miền Bắc",
  },
  {
    id: 4,
    name: "Y Hlinh",
    village: "Tây Nguyên",
    craft: "Đan tre",
    experience: "15 năm",
    description:
      "Tôi yêu thiên nhiên và muốn lan tỏa sản phẩm thân thiện môi trường từ tre nứa bản địa.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop&crop=face",
    featuredProducts: ["Giỏ tre", "Rổ đan tay"],
    rating: 4.7,
    region: "Miền Trung",
  },
  {
    id: 5,
    name: "Phạm Văn Sơn",
    village: "Hà Nội",
    craft: "Sơn mài",
    experience: "22 năm",
    description:
      "Sơn mài là nghệ thuật kết hợp truyền thống và sáng tạo. Tôi luôn tìm tòi nét mới trên nền di sản.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=300&h=300&fit=crop&crop=face",
    featuredProducts: ["Hộp sơn mài", "Tranh sơn mài"],
    rating: 4.9,
    region: "Miền Bắc",
  },
];

const crafts = [
  "Tất cả",
  ...Array.from(new Set(sampleArtisans.map((a) => a.craft))),
];
const regions = [
  "Tất cả",
  ...Array.from(new Set(sampleArtisans.map((a) => a.region))),
];

export default function ArtisansPage() {
  const [search, setSearch] = useState("");
  const [craftFilter, setCraftFilter] = useState("Tất cả");
  const [regionFilter, setRegionFilter] = useState("Tất cả");
  const [modal, setModal] = useState(null);

  const filteredArtisans = sampleArtisans.filter((a) => {
    const matchCraft = craftFilter === "Tất cả" || a.craft === craftFilter;
    const matchRegion = regionFilter === "Tất cả" || a.region === regionFilter;
    const matchSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.village.toLowerCase().includes(search.toLowerCase());
    return matchCraft && matchRegion && matchSearch;
  });

  return (
    <section className="section-padding bg-white min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h1 className="heading-primary mb-2">Nghệ nhân tiêu biểu</h1>
          <p className="text-lg text-vietnamese-gray-dark">
            Gặp gỡ các nghệ nhân tài hoa, gìn giữ và phát triển nghề truyền
            thống Việt Nam.
          </p>
        </div>
        {/* Bộ lọc và tìm kiếm */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
          <div className="flex gap-2 flex-wrap">
            {crafts.map((c) => (
              <button
                key={c}
                className={`px-4 py-2 rounded-full border font-medium transition-all duration-200 ${
                  craftFilter === c
                    ? "bg-vietnamese-brown text-white border-vietnamese-brown"
                    : "bg-yellow-100 text-vietnamese-brown border-vietnamese-brown hover:bg-yellow-300"
                }`}
                onClick={() => setCraftFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            {regions.map((r) => (
              <button
                key={r}
                className={`px-4 py-2 rounded-full border font-medium transition-all duration-200 ${
                  regionFilter === r
                    ? "bg-vietnamese-brown text-white border-vietnamese-brown"
                    : "bg-yellow-100 text-vietnamese-brown border-vietnamese-brown hover:bg-yellow-300"
                }`}
                onClick={() => setRegionFilter(r)}
              >
                {r}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Tìm kiếm nghệ nhân hoặc làng nghề..."
            className="px-4 py-2 rounded-lg border border-vietnamese-brown focus:ring-2 focus:ring-vietnamese-terracotta focus:outline-none min-w-[220px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* Danh sách nghệ nhân */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtisans.length === 0 && (
            <div className="col-span-full text-center text-vietnamese-brown text-lg py-12">
              Không tìm thấy nghệ nhân phù hợp.
            </div>
          )}
          {filteredArtisans.map((artisan) => (
            <div
              key={artisan.id}
              className="bg-vietnamese-beige rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div
                className="relative mb-6 cursor-pointer group"
                onClick={() => setModal(artisan)}
              >
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-vietnamese-terracotta text-white px-4 py-1 rounded-full text-sm font-medium">
                  {artisan.experience}
                </div>
              </div>
              <div className="text-center mb-4">
                <h3
                  className="text-2xl font-semibold text-vietnamese-brown mb-1 cursor-pointer hover:text-vietnamese-terracotta"
                  onClick={() => setModal(artisan)}
                >
                  {artisan.name}
                </h3>
                <p className="text-vietnamese-terracotta font-medium mb-1">
                  {artisan.craft}
                </p>
                <p className="text-gray-600 text-sm">
                  {artisan.village} - {artisan.region}
                </p>
              </div>
              <blockquote className="text-gray-700 italic mb-4 leading-relaxed flex-1">
                "{artisan.description}"
              </blockquote>
              <div className="flex items-center justify-between mt-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-vietnamese-brown">
                    {artisan.rating}
                  </div>
                  <div className="text-sm text-gray-600">Đánh giá</div>
                </div>
                <button
                  className="btn-secondary"
                  onClick={() => setModal(artisan)}
                >
                  Xem profile
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Modal chi tiết nghệ nhân */}
        {modal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in">
              <button
                className="absolute top-4 right-4 text-vietnamese-brown hover:text-vietnamese-terracotta text-2xl font-bold"
                onClick={() => setModal(null)}
                aria-label="Đóng"
              >
                ×
              </button>
              <img
                src={modal.image}
                alt={modal.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-vietnamese-brown mb-2 text-center">
                {modal.name}
              </h2>
              <div className="text-center text-vietnamese-terracotta mb-1">
                {modal.craft}
              </div>
              <div className="text-center text-vietnamese-gray mb-2">
                {modal.village} - {modal.region}
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-vietnamese-gold font-bold">
                  {modal.rating}★
                </span>
                <span className="text-vietnamese-gray text-sm">
                  | {modal.experience}
                </span>
              </div>
              <p className="text-vietnamese-gray mb-4 text-center">
                {modal.description}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-vietnamese-brown mb-2">
                  Sản phẩm tiêu biểu
                </h4>
                <ul className="list-disc list-inside text-vietnamese-gray">
                  {modal.featuredProducts.map((prod, idx) => (
                    <li key={idx}>{prod}</li>
                  ))}
                </ul>
              </div>
              <button className="btn-primary w-full">
                Xem sản phẩm của nghệ nhân
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
