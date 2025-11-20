import { useEffect, useState } from 'react';
import { getPosts } from '../services/api';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(res => {
        setPosts(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-20 text-3xl">Loading posts...</div>;

  return (
    <div className="min-h-screen">
      <h1 className="text-5xl font-bold text-center my-12 text-blue-600">Ezra's Blog</h1>
      
      {posts.length === 0 ? (
        <p className="text-center text-2xl text-gray-500">No posts yet. Be the first!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {posts.map(post => (
            <div key={post._id} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              {post.image && (
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                <p className="text-sm text-gray-500">
                  By <strong>{post.author?.name || 'Anonymous'}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
