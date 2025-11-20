import Post from '../models/Post.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate('author', 'name');
    res.json(posts); // ← Return array directly
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const post = await Post.create({
      title,
      content,
      image,
      author: req.user.id
    });
    const populated = await Post.findById(post._id).populate('author', 'name');
    res.status(201).json(populated);
  } catch (err) {
    res.status(500).json({ message: 'Create failed' });
  }
};
