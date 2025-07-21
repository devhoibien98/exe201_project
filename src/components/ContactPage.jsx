import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError("Email không hợp lệ.");
      return;
    }
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section className="section-padding bg-white min-h-screen">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        {/* Thông tin liên hệ & bản đồ */}
        <div>
          <h1 className="heading-primary mb-4">Liên hệ với chúng tôi</h1>
          <p className="text-lg text-vietnamese-gray-dark mb-6">
            Nếu bạn có bất kỳ câu hỏi, góp ý hoặc muốn hợp tác, hãy liên hệ với
            chúng tôi qua form hoặc các kênh bên dưới.
          </p>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-bold text-vietnamese-brown">Email:</span>
              <a
                href="mailto:contact@vietnamesehandicrafts.com"
                className="text-vietnamese-terracotta hover:underline"
              >
                contact@vietnamesehandicrafts.com
              </a>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-bold text-vietnamese-brown">
                Điện thoại:
              </span>
              <a
                href="tel:+84987654321"
                className="text-vietnamese-terracotta hover:underline"
              >
                +84 987 654 321
              </a>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-bold text-vietnamese-brown">Địa chỉ:</span>
              <span>123 Đường Làng Nghề, Hà Nội, Việt Nam</span>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-vietnamese-brown hover:text-vietnamese-terracotta text-2xl"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                href="#"
                className="text-vietnamese-brown hover:text-vietnamese-terracotta text-2xl"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-vietnamese-brown hover:text-vietnamese-terracotta text-2xl"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          {/* Bản đồ nhúng Google Maps */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-vietnamese-brown">
            <iframe
              title="Bản đồ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.005708963897!2d105.8519933154027!3d21.03178439307395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8c1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2zMTIzIMSQxrDhu51uZyBMw6FuZyBOZ2jhu4cgLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1680000000000!5m2!1svi!2s"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Form liên hệ */}
        <form
          className="bg-vietnamese-cream rounded-2xl shadow-xl p-8"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-vietnamese-brown mb-6">
            Gửi tin nhắn
          </h2>
          {error && (
            <div className="mb-4 text-red-600 font-medium">{error}</div>
          )}
          {success && (
            <div className="mb-4 text-green-600 font-medium">
              Gửi thành công! Chúng tôi sẽ phản hồi sớm nhất.
            </div>
          )}
          <div className="mb-4">
            <label className="block mb-1 font-medium text-vietnamese-brown">
              Họ và tên
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 rounded-lg border border-vietnamese-brown focus:ring-2 focus:ring-vietnamese-terracotta focus:outline-none"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-vietnamese-brown">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg border border-vietnamese-brown focus:ring-2 focus:ring-vietnamese-terracotta focus:outline-none"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-medium text-vietnamese-brown">
              Nội dung
            </label>
            <textarea
              name="message"
              rows="5"
              className="w-full px-4 py-2 rounded-lg border border-vietnamese-brown focus:ring-2 focus:ring-vietnamese-terracotta focus:outline-none"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-primary w-full text-lg">
            Gửi liên hệ
          </button>
        </form>
      </div>
    </section>
  );
}
