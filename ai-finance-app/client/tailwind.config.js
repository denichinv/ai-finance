export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        // 🎯 Core palette
        primary: "#84cc16",
        "primary-hover": "#65a30d",

        danger: "#ef4444",
        "danger-hover": "#dc2626",

        // 🎯 UI system
        background: "#f3f4f6",
        surface: "#ffffff",

        text: "#111827",
        muted: "#6b7280",

        border: "#e5e7eb",
        sidebar: "#111827",
        "sidebar-hover": "#1f2937",
      },

      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
      },

      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 6px rgba(0,0,0,0.08)",
      },

      transitionDuration: {
        200: "200ms",
      },
    },
  },

  plugins: [],
};
