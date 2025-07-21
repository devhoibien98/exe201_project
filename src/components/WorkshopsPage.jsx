import { useState } from "react";

const sampleWorkshops = [
  {
    id: 1,
    title: "Làm gốm truyền thống Bát Tràng",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=350&fit=crop",
    description:
      "Trải nghiệm nghệ thuật làm gốm cùng nghệ nhân làng Bát Tràng, tự tay tạo ra sản phẩm của riêng bạn.",
    location: "Bát Tràng, Hà Nội",
    date: "15/12/2024",
    time: "9:00 - 16:00",
    instructor: "Nguyễn Thị Mai",
    price: 850000,
    spots: 8,
    totalSpots: 12,
  },
  {
    id: 2,
    title: "Workshop dệt lụa Hà Đông",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=350&fit=crop",
    description:
      "Khám phá quy trình dệt lụa truyền thống, tự tay dệt khăn lụa cùng nghệ nhân.",
    location: "Hà Đông, Hà Nội",
    date: "22/12/2024",
    time: "10:00 - 17:00",
    instructor: "Trần Văn Hùng",
    price: 950000,
    spots: 5,
    totalSpots: 10,
  },
  {
    id: 3,
    title: "Lớp vẽ tranh Đông Hồ",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=350&fit=crop",
    description:
      "Tìm hiểu kỹ thuật vẽ tranh dân gian Đông Hồ, sáng tạo tác phẩm nghệ thuật của riêng bạn.",
    location: "Đông Hồ, Bắc Ninh",
    date: "05/01/2025",
    time: "8:30 - 15:30",
    instructor: "Lê Thị Lan",
    price: 750000,
    spots: 12,
    totalSpots: 15,
  },
];

export default function WorkshopsPage() {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [workshops, setWorkshops] = useState(sampleWorkshops);

  const filteredWorkshops = workshops.filter(
    (w) =>
      w.title.toLowerCase().includes(search.toLowerCase()) ||
      w.instructor.toLowerCase().includes(search.toLowerCase()) ||
      w.location.toLowerCase().includes(search.toLowerCase())
  );

  const handleRegister = (id) => {
    setWorkshops(
      workshops.map((w) =>
        w.id === id && w.spots > 0 ? { ...w, spots: w.spots - 1 } : w
      )
    );
  };

  return (
    <section className="section-padding bg-vietnamese-beige min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h1 className="heading-primary mb-2">Workshop & Sự kiện</h1>
          <p className="text-lg text-vietnamese-gray-dark">
            Tham gia các workshop, sự kiện trải nghiệm thủ công cùng nghệ nhân
            Việt Nam.
          </p>
        </div>
        {/* Tìm kiếm */}
        <div className="flex justify-end mb-8">
          <input
            type="text"
            placeholder="Tìm kiếm workshop, nghệ nhân, địa điểm..."
            className="px-4 py-2 rounded-lg border border-vietnamese-brown focus:ring-2 focus:ring-vietnamese-terracotta focus:outline-none min-w-[220px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* Danh sách workshop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorkshops.length === 0 && (
            <div className="col-span-full text-center text-vietnamese-brown text-lg py-12">
              Không tìm thấy workshop phù hợp.
            </div>
          )}
          {filteredWorkshops.map((w) => (
            <div
              key={w.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setModal(w)}
            >
              <img
                src={w.image}
                alt={w.title}
                className="h-48 w-full object-cover rounded-t-2xl mb-4"
              />
              <div className="px-6 pb-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-vietnamese-terracotta text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {w.date}
                  </span>
                  <span className="text-vietnamese-gray text-xs">
                    {w.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-vietnamese-brown mb-1 line-clamp-2">
                  {w.title}
                </h3>
                <p className="text-vietnamese-gray flex-1 mb-4 line-clamp-2">
                  {w.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm text-vietnamese-gray">
                    {w.instructor}
                  </span>
                  <span className="text-sm text-vietnamese-gold font-bold">
                    {w.price.toLocaleString()}₫
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Modal chi tiết workshop */}
        {modal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8 relative animate-fade-in">
              <button
                className="absolute top-4 right-4 text-vietnamese-brown hover:text-vietnamese-terracotta text-2xl font-bold"
                onClick={() => setModal(null)}
                aria-label="Đóng"
              >
                ×
              </button>
              <img
                src={modal.image}
                alt={modal.title}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-vietnamese-terracotta text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {modal.date}
                </span>
                <span className="text-vietnamese-gray text-xs">
                  {modal.location}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-vietnamese-brown mb-2">
                {modal.title}
              </h2>
              <div className="text-vietnamese-gray mb-2">
                {modal.instructor}
              </div>
              <div className="text-vietnamese-gray mb-2">{modal.time}</div>
              <div className="text-vietnamese-gold font-bold mb-2">
                {modal.price.toLocaleString()}₫
              </div>
              <div className="mb-4 text-vietnamese-gray">
                {modal.description}
              </div>
              <div className="mb-4 flex items-center gap-4">
                <span className="text-sm text-vietnamese-gray">
                  Còn lại:{" "}
                  <span className="font-bold text-vietnamese-brown">
                    {modal.spots}
                  </span>{" "}
                  / {modal.totalSpots}
                </span>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-vietnamese-terracotta h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${(modal.spots / modal.totalSpots) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <button
                className={`btn-primary w-full ${
                  modal.spots === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={modal.spots === 0}
                onClick={() => {
                  handleRegister(modal.id);
                  setModal({ ...modal, spots: modal.spots - 1 });
                }}
              >
                {modal.spots > 0 ? "Đăng ký tham gia" : "Đã hết chỗ"}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
