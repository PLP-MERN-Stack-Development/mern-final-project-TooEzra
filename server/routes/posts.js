import express from 'express';
import { getPosts, createPost } from '../controllers/postController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// EVERYONE CAN READ POSTS — THIS IS CORRECT
router.get('/', getPosts);

// ONLY LOGGED IN CAN CREATE
router.post('/', protect, createPost);

export default router;
