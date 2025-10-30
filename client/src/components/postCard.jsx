export default function PostCard({ post }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-400/20 transition">
      <h3 className="text-xl font-semibold mb-2 text-blue-400">{post.title}</h3>
      <p className="text-gray-400 text-sm mb-3">by {post.author}</p>
      <span className="bg-blue-500 text-xs px-3 py-1 rounded-full">{post.category}</span>
    </div>
  );
}
