import { useState } from "react";

const samplePosts = [
  {
    id: 1,
    title: "Nghệ thuật gốm Bát Tràng: Di sản 600 năm",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=350&fit=crop",
    excerpt:
      "Khám phá lịch sử và kỹ thuật làm gốm truyền thống tại làng Bát Tràng nổi tiếng.",
    content:
      "Bát Tràng là làng nghề gốm lâu đời nhất Việt Nam, nổi tiếng với các sản phẩm gốm sứ tinh xảo, đa dạng về kiểu dáng và hoa văn. Nghệ nhân nơi đây vẫn giữ gìn và phát triển các kỹ thuật nung, tạo hình, trang trí truyền thống...",
    author: "Cultural Heritage Team",
    date: "10/12/2024",
    category: "Di sản văn hóa",
    likes: 124,
    comments: [
      {
        id: 1,
        author: "Nguyễn Văn B",
        text: "Bài viết rất hay, mình rất thích gốm Bát Tràng!",
      },
    ],
  },
  {
    id: 2,
    title: "Dệt lụa Hà Đông: Sợi tơ truyền thống",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=350&fit=crop",
    excerpt:
      "Tìm hiểu quy trình sản xuất lụa tơ tằm và giá trị văn hóa của làng lụa Hà Đông.",
    content:
      "Lụa Hà Đông nổi tiếng bởi sự mềm mại, óng ả và bền đẹp. Nghệ nhân dệt lụa không chỉ giữ gìn kỹ thuật truyền thống mà còn sáng tạo ra nhiều mẫu mã mới phù hợp thị hiếu hiện đại...",
    author: "Artisan Stories",
    date: "08/12/2024",
    category: "Nghệ nhân",
    likes: 89,
    comments: [],
  },
  {
    id: 3,
    title: "Tranh Đông Hồ: Lưu giữ tinh hoa dân gian",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=350&fit=crop",
    excerpt:
      "Khám phá ý nghĩa và kỹ thuật làm tranh dân gian Đông Hồ nổi tiếng.",
    content:
      "Tranh Đông Hồ là biểu tượng của nghệ thuật dân gian Việt Nam, phản ánh đời sống, phong tục và triết lý nhân sinh qua từng nét vẽ, màu sắc tự nhiên...",
    author: "Cultural Heritage Team",
    date: "05/12/2024",
    category: "Di sản văn hóa",
    likes: 156,
    comments: [],
  },
];

const categories = [
  "Tất cả",
  ...Array.from(new Set(samplePosts.map((p) => p.category))),
];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Tất cả");
  const [modal, setModal] = useState(null);
  const [posts, setPosts] = useState(samplePosts);
  const [commentText, setCommentText] = useState("");

  const filteredPosts = posts.filter((p) => {
    const matchCategory = filter === "Tất cả" || p.category === filter;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleAddComment = (postId) => {
    if (!commentText.trim()) return;
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: Date.now(),
                  author: "Bạn",
                  text: commentText,
                },
              ],
            }
          : post
      )
    );
    setCommentText("");
  };

  return (
    <section className="section-padding bg-vietnamese-beige min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h1 className="heading-primary mb-2">Blog & Câu chuyện văn hóa</h1>
          <p className="text-lg text-vietnamese-gray-dark">
            Khám phá các bài viết về làng nghề, nghệ nhân, di sản và văn hóa
            Việt Nam.
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
            placeholder="Tìm kiếm bài viết hoặc tác giả..."
            className="px-4 py-2 rounded-lg border border-vietnamese-brown focus:ring-2 focus:ring-vietnamese-terracotta focus:outline-none min-w-[220px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* Danh sách bài viết */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length === 0 && (
            <div className="col-span-full text-center text-vietnamese-brown text-lg py-12">
              Không tìm thấy bài viết phù hợp.
            </div>
          )}
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setModal(post)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover rounded-t-2xl mb-4"
              />
              <div className="px-6 pb-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-vietnamese-terracotta text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-vietnamese-gray text-xs">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-vietnamese-brown mb-1 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-vietnamese-gray flex-1 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm text-vietnamese-gray">
                    {post.author}
                  </span>
                  <button
                    className="flex items-center gap-1 text-vietnamese-terracotta hover:underline"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(post.id);
                    }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {post.likes}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Modal chi tiết bài viết */}
        {modal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative animate-fade-in">
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
                  {modal.category}
                </span>
                <span className="text-vietnamese-gray text-xs">
                  {modal.date}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-vietnamese-brown mb-2">
                {modal.title}
              </h2>
              <div className="text-vietnamese-gray mb-4">{modal.author}</div>
              <div className="text-vietnamese-gray mb-6 whitespace-pre-line">
                {modal.content}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <button
                  className="flex items-center gap-1 text-vietnamese-terracotta hover:underline"
                  onClick={() => handleLike(modal.id)}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {modal.likes}
                </button>
                <button
                  className="flex items-center gap-1 text-vietnamese-brown hover:underline"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M15 8a3 3 0 00-2.83 2H7a3 3 0 100 6h5a3 3 0 100-6zm-8 3a1 1 0 011-1h5a1 1 0 110 2H8a1 1 0 01-1-1zm8 3a1 1 0 01-1 1H7a1 1 0 110-2h5a1 1 0 011 1z" />
                  </svg>
                  Chia sẻ
                </button>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-vietnamese-brown mb-2">
                  Bình luận
                </h4>
                <div className="space-y-3 mb-3">
                  {modal.comments.map((c) => (
                    <div
                      key={c.id}
                      className="bg-vietnamese-cream rounded-lg p-3"
                    >
                      <span className="font-semibold text-vietnamese-brown">
                        {c.author}:
                      </span>{" "}
                      {c.text}
                    </div>
                  ))}
                  {modal.comments.length === 0 && (
                    <div className="text-vietnamese-gray">
                      Chưa có bình luận.
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 rounded-lg border border-vietnamese-brown focus:ring-2 focus:ring-vietnamese-terracotta focus:outline-none"
                    placeholder="Viết bình luận..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                  <button
                    className="btn-primary"
                    onClick={() => {
                      handleAddComment(modal.id);
                    }}
                  >
                    Gửi
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
