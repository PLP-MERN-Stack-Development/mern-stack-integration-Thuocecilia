// src/pages/PostList.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

/*
  Tweak these values if you want to nudge things:
  - SIDEBAR_WIDTH: width reserved for your sidebar (px)
  - CARD_WIDTH: fixed card width (px)
  - GAP: gap between cards (px)
*/
const SIDEBAR_WIDTH = 220; // ~13.75rem (adjust to match your sidebar)
const CARD_WIDTH = 260;
const GAP = 12;

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts");
        setPosts(res.data || []);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
        // fallback sample posts if backend down
        setPosts([
          /* minimal fallback if you want */
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading posts...</p>;

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 p-6"
      style={{ paddingLeft: SIDEBAR_WIDTH + 16 }} // push content to the left but keep space for sidebar
    >
      <h2 className="text-2xl font-bold mb-6 text-center">All Posts</h2>

      {/* fixed-width two-column grid so cards never stretch */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(2, ${CARD_WIDTH}px)`,
          gap: `${GAP}px`,
          justifyContent: "start",
          maxWidth: `${CARD_WIDTH * 2 + GAP}px`,
        }}
      >
        {posts.slice(0, 6).map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition transform"
            style={{
              width: CARD_WIDTH,
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{ width: "100%", height: 144, objectFit: "cover" }}
            />
            <div style={{ padding: 12 }}>
              <h3
                className="font-semibold"
                style={{
                  margin: 0,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {post.title}
              </h3>
              <p
                style={{
                  color: "#4B5563",
                  fontSize: 13,
                  margin: "8px 0",
                  height: 36,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {post.content}
              </p>
              <p style={{ fontSize: 11, color: "#6B7280", margin: 0 }}>
                By {post.author || "Unknown"} • {post.comments?.length || 0} comments
              </p>

              <div style={{ marginTop: 8, display: "flex", gap: 12 }}>
                <Link
                  to={`/posts/${post.id}`}
                  style={{ fontSize: 13, color: "#2563EB", fontWeight: 600 }}
                >
                  Read more →
                </Link>
                <Link
                  to={`/post-form/${post.id}`} // Edit button added
                  style={{ fontSize: 13, color: "#D97706", fontWeight: 600 }}
                >
                  Edit ✎
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default PostList;
