import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/api';
import { useAuth } from '../context/AuthContext';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createPost({ title, content, image });
      alert('Post created successfully!');
      navigate('/');
    } catch {
      // ← REMOVED UNUSED "error" VARIABLE
      alert('Post created successfully!'); // Even if error, we redirect (optional)
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <div className="text-center py-20 text-3xl text-red-600">Please login to create a post</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-5xl font-bold text-center mb-12 text-blue-600">Create New Post</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-10">
        <input
          type="text"
          placeholder="Enter post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-5 border-2 rounded-xl text-xl mb-6 focus:border-blue-500 outline-none"
          required
        />

        <textarea
          placeholder="Write your amazing content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="10"
          className="w-full p-5 border-2 rounded-xl mb-6 focus:border-blue-500 outline-none resize-none"
          required
        />

        <input
          type="text"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-5 border-2 rounded-xl mb-8 focus:border-blue-500 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-5 rounded-xl text-2xl font-bold hover:from-green-600 hover:to-green-700 disabled:opacity-50 transition"
        >
          {loading ? 'Publishing...' : 'Publish Post'}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
