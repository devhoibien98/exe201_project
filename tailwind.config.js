/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Màu chính - Đỏ Việt Nam
        "vietnamese-red": "#DC143C",
        "vietnamese-red-light": "#FF6B6B",
        "vietnamese-red-dark": "#B22222",

        // Màu vàng - Lúa chín
        "vietnamese-gold": "#FFD700",
        "vietnamese-gold-light": "#FFF8DC",
        "vietnamese-gold-dark": "#DAA520",

        // Màu xanh lá - Lá sen
        "vietnamese-green": "#228B22",
        "vietnamese-green-light": "#90EE90",
        "vietnamese-green-dark": "#006400",

        // Màu xanh dương - Biển Việt Nam
        "vietnamese-blue": "#1E90FF",
        "vietnamese-blue-light": "#87CEEB",
        "vietnamese-blue-dark": "#000080",

        // Màu nâu - Gỗ truyền thống
        "vietnamese-brown": "#8B4513",
        "vietnamese-brown-light": "#DEB887",
        "vietnamese-brown-dark": "#654321",

        // Màu trung tính
        "vietnamese-cream": "#FFF8DC",
        "vietnamese-beige": "#F5F5DC",
        "vietnamese-gray": "#696969",
        "vietnamese-gray-light": "#D3D3D3",
        "vietnamese-gray-dark": "#2F4F4F",
      },
      fontFamily: {
        vietnamese: ["Noto Sans", "sans-serif"],
        decorative: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        "gradient-vietnamese":
          "linear-gradient(135deg, #DC143C 0%, #FFD700 50%, #228B22 100%)",
        "gradient-warm":
          "linear-gradient(135deg, #FFD700 0%, #FF6B6B 50%, #DEB887 100%)",
        "gradient-cool":
          "linear-gradient(135deg, #1E90FF 0%, #90EE90 50%, #87CEEB 100%)",
      },
    },
  },
  plugins: [],
};
