import { useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Bình gốm Bát Tràng",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    description:
      "Bình gốm thủ công truyền thống, họa tiết tinh xảo, men bóng đẹp.",
    price: 850000,
    category: "Gốm sứ",
    artisan: "Nguyễn Thị Mai",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Khăn lụa Hà Đông",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    description: "Khăn lụa tơ tằm tự nhiên, dệt tay, mềm mại và sang trọng.",
    price: 1200000,
    category: "Lụa",
    artisan: "Trần Văn Hùng",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Tranh Đông Hồ - Lợn đàn",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    description: "Tranh dân gian Đông Hồ, chất liệu giấy dó, màu tự nhiên.",
    price: 650000,
    category: "Tranh dân gian",
    artisan: "Lê Thị Lan",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Giỏ tre Tây Nguyên",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop",
    description: "Giỏ tre đan thủ công, bền đẹp, thân thiện môi trường.",
    price: 350000,
    category: "Tre đan",
    artisan: "Y Hlinh",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Bộ sơn mài Hà Nội",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=400&fit=crop",
    description: "Bộ hộp sơn mài cao cấp, hoa văn truyền thống, bóng đẹp.",
    price: 2100000,
    category: "Sơn mài",
    artisan: "Phạm Văn Sơn",
    rating: 4.9,
  },
];

const categories = [
  "Tất cả",
  ...Array.from(new Set(sampleProducts.map((p) => p.category))),
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Tất cả");
  const [modal, setModal] = useState(null);

  const filteredProducts = sampleProducts.filter((p) => {
    const matchCategory = filter === "Tất cả" || p.category === filter;
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.artisan.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section className="section-padding bg-vietnamese-cream min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h1 className="heading-primary mb-2">Sản phẩm thủ công</h1>
          <p className="text-lg text-vietnamese-gray-dark">
            Khám phá các sản phẩm thủ công mỹ nghệ Việt Nam, chọn lọc từ các
            làng nghề truyền thống.
          </p>
        </div>
        {/* Bộ lọc và tìm kiếm */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full border font-medium transition-all duration-200 ${
                  filter === cat
                    ? "bg-vietnamese-brown text-white border-vietnamese-brown"
                    : "bg-yellow-100 text-vietnamese-brown border-vietnamese-brown hover:bg-yellow-300"
                }`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm hoặc nghệ nhân..."
            className="px-4 py-2 rounded-lg border border-vietnamese-brown focus:ring-2 focus:ring-vietnamese-terracotta focus:outline-none min-w-[220px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* Danh sách sản phẩm */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center text-vietnamese-brown text-lg py-12">
              Không tìm thấy sản phẩm phù hợp.
            </div>
          )}
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col"
            >
              <div
                className="h-48 w-full rounded-lg overflow-hidden mb-4 cursor-pointer group relative"
                onClick={() => setModal(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-vietnamese-terracotta text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                  {product.category}
                </div>
              </div>
              <h3
                className="text-xl font-bold text-vietnamese-brown mb-1 cursor-pointer hover:text-vietnamese-terracotta"
                onClick={() => setModal(product)}
              >
                {product.name}
              </h3>
              <div className="text-sm text-vietnamese-gray mb-2">
                Nghệ nhân:{" "}
                <span className="font-medium">{product.artisan}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-vietnamese-gold font-bold">
                  {product.rating}★
                </span>
                <span className="text-vietnamese-gray text-sm">
                  | {product.price.toLocaleString()}₫
                </span>
              </div>
              <p className="text-vietnamese-gray flex-1 mb-4 line-clamp-2">
                {product.description}
              </p>
              <button
                className="btn-primary w-full mt-auto"
                onClick={() => setModal(product)}
              >
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>
        {/* Modal chi tiết sản phẩm */}
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
                className="w-48 h-48 object-cover rounded-lg mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-vietnamese-brown mb-2 text-center">
                {modal.name}
              </h2>
              <div className="text-center text-vietnamese-gray mb-2">
                Nghệ nhân: <span className="font-medium">{modal.artisan}</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-vietnamese-gold font-bold">
                  {modal.rating}★
                </span>
                <span className="text-vietnamese-gray text-sm">
                  | {modal.price.toLocaleString()}₫
                </span>
              </div>
              <p className="text-vietnamese-gray mb-4 text-center">
                {modal.description}
              </p>
              <button className="btn-secondary w-full">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
