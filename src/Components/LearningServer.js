const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = "AIzaSyDzOLF9W57BOnoohEeOfOhhCMNOUzn8ZbE"; 
const YT_BASE_URL = "https://www.googleapis.com/youtube/v3/search";

app.get("/api/videos/:topic", async (req, res) => {
  const topic = req.params.topic;

  try {
    const response = await axios.get(YT_BASE_URL, {
      params: {
        part: "snippet",
        q: topic,
        type: "video",
        maxResults: 1, 
        order: "viewCount",
        key: API_KEY,
      },
    });

    if (!response.data.items.length) {
      return res.status(404).json({ error: "No video found" });
    }

    const video = response.data.items[0];

    res.json({
      title: video.snippet.title,
      videoUrl: `https://www.youtube.com/embed/${video.id.videoId}`, 
      thumbnail: video.snippet.thumbnails.high.url,
      channel: video.snippet.channelTitle,
    });
  } catch (error) {
    console.error("Error fetching video:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch video" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
