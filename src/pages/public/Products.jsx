import { useState } from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { toast } from "react-toastify";

const CATEGORIES = ["All", "Design", "Development", "Marketing", "Analytics"];

const PRODUCTS = [
  { id: 1, name: "UI Component Kit", category: "Design", price: 49, rating: 4.8, reviews: 128, badge: "Popular" },
  { id: 2, name: "API Starter Kit", category: "Development", price: 79, rating: 4.9, reviews: 89, badge: "New" },
  { id: 3, name: "Admin Dashboard Pro", category: "Development", price: 99, rating: 4.7, reviews: 204 },
  { id: 4, name: "Marketing Templates", category: "Marketing", price: 39, rating: 4.6, reviews: 156 },
  { id: 5, name: "Analytics Suite", category: "Analytics", price: 129, rating: 4.9, reviews: 67, badge: "Hot" },
  { id: 6, name: "Icon Pack Premium", category: "Design", price: 29, rating: 4.5, reviews: 312 },
  { id: 7, name: "Email Templates", category: "Marketing", price: 59, rating: 4.7, reviews: 93 },
  { id: 8, name: "Data Visualization Kit", category: "Analytics", price: 89, rating: 4.8, reviews: 41, badge: "New" },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);

  const filtered = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const addToCart = (name) => {
    toast.success(`${name} added to cart!`);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 border-b border-theme" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 tracking-tight">
            Our <span style={{ color: "var(--accent)" }}>Products</span>
          </h1>
          <p className="text-secondary text-lg max-w-xl mx-auto">
            Premium tools and templates to supercharge your workflow.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150"
                style={
                  activeCategory === cat
                    ? { backgroundColor: "var(--accent)", color: "#fff" }
                    : { backgroundColor: "var(--bg-secondary)", color: "var(--text-secondary)", border: "1px solid var(--border-color)" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl border border-theme overflow-hidden group hover:shadow-theme-lg transition-all duration-200"
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                {/* Product Image placeholder */}
                <div
                  className="h-40 relative flex items-center justify-center"
                  style={{ backgroundColor: "var(--accent-light)" }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl"
                    style={{ backgroundColor: "var(--accent)", color: "#fff" }}
                  >
                    {product.name[0]}
                  </div>
                  {product.badge && (
                    <span
                      className="absolute top-3 left-3 px-2 py-0.5 text-xs font-semibold rounded-full text-white"
                      style={{ backgroundColor: "var(--accent)" }}
                    >
                      {product.badge}
                    </span>
                  )}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm transition-all"
                  >
                    <Heart
                      size={15}
                      fill={wishlist.includes(product.id) ? "red" : "none"}
                      stroke={wishlist.includes(product.id) ? "red" : "currentColor"}
                      className="text-slate-500"
                    />
                  </button>
                </div>

                <div className="p-4">
                  <span className="text-xs font-medium text-accent mb-1 block">{product.category}</span>
                  <h3 className="font-semibold text-primary text-sm mb-2 leading-tight">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star size={12} fill="var(--accent)" style={{ color: "var(--accent)" }} />
                    <span className="text-xs font-medium text-primary">{product.rating}</span>
                    <span className="text-xs text-muted">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">${product.price}</span>
                    <button
                      onClick={() => addToCart(product.name)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all hover:scale-105"
                      style={{ backgroundColor: "var(--accent)" }}
                    >
                      <ShoppingCart size={12} /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
