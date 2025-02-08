import React, { useState } from "react";
import { Unlock, Lock, PlayCircle, Loader } from "lucide-react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";

const learningPaths = {
    "Cybersecurity": [
      { id: "1", label: "Introduction to Cybersecurity", dependencies: [] },
      { id: "2", label: "Network Security Basics", dependencies: ["1"] },
      { id: "3", label: "Penetration Testing", dependencies: ["2"] },
      { id: "4", label: "Web Security & OWASP Top 10", dependencies: ["3"] },
      { id: "5", label: "Digital Forensics", dependencies: ["4"] },
      { id: "6", label: "Malware Analysis", dependencies: ["5"] },
      { id: "7", label: "Incident Response & Threat Hunting", dependencies: ["6"] }
    ],
    
    "Machine Learning": [
      { id: "8", label: "ML Basics", dependencies: [] },
      { id: "9", label: "Supervised Learning", dependencies: ["8"] },
      { id: "10", label: "Unsupervised Learning", dependencies: ["9"] },
      { id: "11", label: "Feature Engineering & Data Preprocessing", dependencies: ["10"] },
      { id: "12", label: "Deep Learning Fundamentals", dependencies: ["11"] },
      { id: "13", label: "Reinforcement Learning", dependencies: ["12"] }
    ],
    
    "Deep Learning": [
      { id: "14", label: "Intro to Neural Networks", dependencies: [] },
      { id: "15", label: "CNNs & Image Recognition", dependencies: ["14"] },
      { id: "16", label: "RNNs & NLP", dependencies: ["15"] },
      { id: "17", label: "Transformers & Attention Mechanisms", dependencies: ["16"] },
      { id: "18", label: "GANs & Generative Models", dependencies: ["17"] },
      { id: "19", label: "Advanced Model Optimization", dependencies: ["18"] }
    ],
  
    "Cloud Engineering": [
      { id: "20", label: "Cloud Computing Basics", dependencies: [] },
      { id: "21", label: "AWS Fundamentals", dependencies: ["20"] },
      { id: "22", label: "Azure & GCP Overview", dependencies: ["21"] },
      { id: "23", label: "Cloud Security & Compliance", dependencies: ["22"] },
      { id: "24", label: "Serverless & Microservices", dependencies: ["23"] },
      { id: "25", label: "Kubernetes & Containerization", dependencies: ["24"] }
    ],
  
    "DevOps": [
      { id: "26", label: "Introduction to DevOps", dependencies: [] },
      { id: "27", label: "CI/CD Pipelines", dependencies: ["26"] },
      { id: "28", label: "Infrastructure as Code (Terraform, Ansible)", dependencies: ["27"] },
      { id: "29", label: "Monitoring & Logging (Prometheus, ELK Stack)", dependencies: ["28"] },
      { id: "30", label: "Kubernetes & Docker", dependencies: ["29"] }
    ],
  
    "Blockchain": [
      { id: "31", label: "Blockchain Fundamentals", dependencies: [] },
      { id: "32", label: "Smart Contracts & Ethereum", dependencies: ["31"] },
      { id: "33", label: "Decentralized Applications (DApps)", dependencies: ["32"] },
      { id: "34", label: "Consensus Mechanisms & Cryptography", dependencies: ["33"] }
    ],
  
    "Data Science": [
      { id: "35", label: "Introduction to Data Science", dependencies: [] },
      { id: "36", label: "Data Wrangling & Cleaning", dependencies: ["35"] },
      { id: "37", label: "Exploratory Data Analysis", dependencies: ["36"] },
      { id: "38", label: "Machine Learning for Data Science", dependencies: ["37"] },
      { id: "39", label: "Big Data & Hadoop", dependencies: ["38"] }
    ],
  
    "Web Development": [
      { id: "40", label: "HTML & CSS Basics", dependencies: [] },
      { id: "41", label: "JavaScript & ES6", dependencies: ["40"] },
      { id: "42", label: "Frontend Frameworks (React, Angular, Vue)", dependencies: ["41"] },
      { id: "43", label: "Backend Development (Node.js, Express)", dependencies: ["42"] },
      { id: "44", label: "Database Management (SQL & NoSQL)", dependencies: ["43"] },
      { id: "45", label: "Full-Stack Development", dependencies: ["44"] }
    ]
  };
  

const LearningPath = () => {
    const [videoUrl, setVideoUrl] = useState("");
    const [thumbnailUrls, setThumbnailUrls] = useState({});
    const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedPath, setSelectedPath] = useState("Cybersecurity");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [completedTopics, setCompletedTopics] = useState(["1", "4", "7", "10"]);

  const isTopicAccessible = (topic) => {
    return topic.dependencies.every((dep) => completedTopics.includes(dep));
  };

  const fetchVideo = async (topic) => {
    if (!isTopicAccessible(topic)) return;
    setLoading(true);
  
    try {
      const response = await axios.get(
        `http://localhost:5000/api/videos/${topic.label}?language=tamil`
      );
      const videoLink = response.data.videoUrl;
      let videoId = "";
  
      if (videoLink.includes("youtube.com")) {
        videoId = new URL(videoLink).searchParams.get("v");
      }
  
      if (videoId) {
          setThumbnailUrls((prev) => ({
              ...prev,
              [topic.id]: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
            }));
        }
        
      setVideoUrl(videoLink);
      setSelectedTopic(topic);
      setShow(true);
    } catch (error) {
        console.error("Error fetching video:", error);
    } finally {
        setLoading(false);
    }
};
  

  const handleVideoCompletion = () => {
    if (selectedTopic && !completedTopics.includes(selectedTopic.id)) {
      setCompletedTopics([...completedTopics, selectedTopic.id]);
    }
    setShow(false);
  };

  return (
    <>
    <Dashboard/>
    <Container fluid className="bg-dark text-light min-vh-100 p-5">
      <h1 className="text-center font-weight-bold mb-4 text-warning">🚀 Learning Journey Map</h1>
      <p className="text-center text-muted mb-4">Select a path and unlock topics step by step!</p>
      
      <div className="d-flex justify-content-center mb-4">
        {Object.keys(learningPaths).map((path) => (
          <Button
            key={path}
            variant={selectedPath === path ? "warning" : "outline-warning"}
            className="mx-2"
            onClick={() => setSelectedPath(path)}
          >
            {path}
          </Button>
        ))}
      </div>

      <Row>
        {learningPaths[selectedPath].map((topic) => (
          <Col key={topic.id} md={4} className="mb-4">
            <Card
              className={`text-white text-center p-3 shadow-lg border-0 ${
                isTopicAccessible(topic) ? "bg-gradient bg-primary" : "bg-secondary opacity-50"
              }`}
              onClick={() => fetchVideo(topic)}
              style={{ cursor: isTopicAccessible(topic) ? "pointer" : "not-allowed" }}
              >
              {thumbnailUrls[topic.id] ? (
                <Card.Img
                variant="top"
                src={thumbnailUrls[topic.id]}
                  alt={topic.label}
                  className="rounded mt-3"
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                  />
                ) : (
                  <Card.Img
                  variant="top"
                  src="/icons/default.png"
                  alt={topic.label}
                  className="rounded-circle mx-auto d-block mt-3"
                  style={{ width: "80px", height: "80px" }}
                  />
                )}
              <Card.Body>
                <Card.Title>{topic.label}</Card.Title>
                {completedTopics.includes(topic.id) ? (
                  <Unlock className="text-success mt-2" size={24} />
                ) : (
                  <Lock className="text-light mt-2" size={24} />
                )}
                {isTopicAccessible(topic) && <PlayCircle className="text-white mt-2 w-8 h-8 mx-auto" />}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {show && (
        <div className="fixed-top d-flex align-items-center justify-content-center vh-100 bg-dark bg-opacity-75">
          <div className="bg-light p-4 rounded shadow-lg text-center" style={{ width: "600px" }}>
            <h3 className="mb-3">{selectedTopic.label}</h3>
            {loading ? (
              <Loader className="text-primary animate-spin" size={32} />
            ) : videoUrl ? (
              <iframe
              width="100%"
              height="315"
              src={videoUrl}
              title="Learning Video"
              allowFullScreen
              className="rounded-lg"
              onLoad={() => setTimeout(handleVideoCompletion, 10000)} 
              />
            ) : (
              <p className="text-muted">No video available</p>
            )}
            <Button variant="danger" onClick={handleVideoCompletion} className="mt-3">
              Close
            </Button>
          </div>
        </div>
      )}
    </Container>
  </>
  );
};

export default LearningPath;
