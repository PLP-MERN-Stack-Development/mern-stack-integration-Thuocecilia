import express from "express";
const router = express.Router();

// Temporary mock data — you can later replace with MongoDB models
const posts = [
  {
    id: 1,
    username: "ceci_thuo",
    title: "Campus Vibes",
    content: "The weekend party was a whole movie 🎉 Dancehall hits never miss!",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    comments: [
      { user: "AlphaLady", text: "You looked stunning that night 🔥🔥" },
      { user: "Marty", text: "CampusConnect content loading!" },
    ],
  },
  {
    id: 2,
    username: "larry_dev",
    title: "Engineering Life",
    content: "Juggling code and concrete 😅 Civil meets tech!",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    comments: [
      { user: "Cece", text: "Haha relatable fr 😭" },
      { user: "BossLady", text: "Keep grinding bro 💪" },
    ],
  },
  {
    id: 3,
    username: "alpha_cecilia",
    title: "Glow Up Diaries ✨",
    content: "Operation Alpha Silhouette in full swing — no turning back!",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    comments: [
      { user: "Zee", text: "Alpha energy all through 🔥" },
      { user: "Nash", text: "The glow is real 🖤" },
    ],
  },
];

// GET all posts
router.get("/", (req, res) => {
  res.json(posts);
});

export default router;
