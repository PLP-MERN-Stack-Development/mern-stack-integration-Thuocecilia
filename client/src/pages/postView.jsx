import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostView = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const newComment = { user: "Current User", text: commentText };
    setPost({ ...post, comments: [...post.comments, newComment] });
    setCommentText("");
  };

  if (loading) return <p className="text-center mt-10">Loading post...</p>;
  if (!post) return <p className="text-center mt-10">Post not found</p>;

  return (
    <div className="ml-64 p-10 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 min-h-screen flex justify-center">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-3xl">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">{post.content}</p>
        <p className="text-sm text-gray-500 mb-6">
          By {post.author} | {post.date}
        </p>

        <h3 className="text-xl font-semibold mb-4">
          Comments ({post.comments.length})
        </h3>
        <ul className="space-y-3 mb-6">
          {post.comments.length > 0 ? (
            post.comments.map((c, idx) => (
              <li key={idx} className="bg-gray-100 p-3 rounded">
                <p className="font-semibold">{c.user}</p>
                <p>{c.text}</p>
              </li>
            ))
          ) : (
            <li>No comments yet.</li>
          )}
        </ul>

        <form
          onSubmit={handleCommentSubmit}
          className="flex flex-col space-y-3 mt-4"
        >
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          />
          <button
            type="submit"
            className="self-end bg-blue-700 text-white py-2 px-5 rounded-lg hover:bg-blue-800 transition font-semibold"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostView;
