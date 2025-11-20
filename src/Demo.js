import React, { useState, useEffect, useRef } from "react";

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentPlatform, setCurrentPlatform] = useState("gpt");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isDemoComplete, setIsDemoComplete] = useState(false);

  const messagesEndRef = useRef(null);

  // Image paths for actual Porsche PTS colors
  const carImages = {
    guardsred: "/images/pts-911-in-Guardsred.png",
    lightergreen: "/images/pts-911-in-Lightergreen.png",
    acidgreen911: "/images/pts-911-in-Acidgreen.png",
    acidgreenTaycan: "/images/pts-taycan-in-Acidgreen.png",
    ipanemablue: "/images/pts-taycan-in-Ipanemabluemetallic.png",
    amazonasgruen: "/images/pts-taycan-in-Amazonasgruenmetallic.png",
    parliamentgrey: "/images/pts-macan-in-Parliamentgreymetallic.png",
  };

  const scenarios = [
    // Stage 1: Discovery on GPT
    {
      platform: "gpt",
      stage: 1,
      messages: [
        {
          type: "ai",
          text: "Hello! I'm your Porsche Paint to Sample Concierge. I can help you discover the perfect custom color for your Porsche. What brings you here today?",
        },
        {
          type: "user",
          text: "I'm interested in heritage colors for my 911. What makes them special?",
        },
      ],
    },
    {
      platform: "gpt",
      stage: 1,
      messages: [
        {
          type: "ai",
          text: "Great choice! Heritage colors are iconic shades from Porsche's history. Each tells a story. For example, Guards Red - the iconic racing red, or Lighter Green from the 70s. What era resonates with you?",
        },
        {
          type: "user",
          text: "I love classic racing colors - bold but timeless.",
        },
      ],
    },
    {
      platform: "gpt",
      stage: 1,
      messages: [
        {
          type: "ai",
          text: "Perfect! Based on your preference for classic racing heritage, here's an iconic color:",
          color: {
            name: "Guards Red",
            code: "Y39",
            desc: "The iconic Porsche racing red, synonymous with motorsport heritage since the 1960s",
            image: carImages.guardsred,
          },
        },
        {
          type: "user",
          text: "Guards Red looks amazing! How does it look in different lighting?",
        },
      ],
    },
    // Stage 2: Engagement on GPT
    {
      platform: "gpt",
      stage: 2,
      messages: [
        {
          type: "ai",
          text: "Guards Red is stunning! It shifts from deep burgundy in shade to brilliant red in direct sunlight. The metallic finish creates incredible depth on the 911's curves. Here's another option you might love:",
          color: {
            name: "Lighter Green",
            code: "227",
            desc: "A refreshing mint green that captures 1970s Porsche sophistication",
            image: carImages.lightergreen,
          },
        },
        {
          type: "user",
          text: "Both are beautiful! I think I prefer Guards Red. How do I proceed?",
        },
      ],
    },
    {
      platform: "gpt",
      stage: 2,
      messages: [
        {
          type: "ai",
          text: "Excellent choice! To complete your color selection and start configuring your Porsche, let's continue on Porsche's official platform where you'll get the full experience with visualizations, dealer integration, and build configuration. Ready to proceed?",
        },
        { type: "user", text: "Yes, let's do it!" },
      ],
    },
    // Stage 3: Handoff
    {
      platform: "transition",
      stage: 2,
      messages: [
        {
          type: "banner",
          text: "🔄 Transitioning to Porsche Platform with tracking ID: pts_gpt_abc123",
        },
      ],
    },
    // Stage 3: Conversion on Porsche Platform
    {
      platform: "porsche",
      stage: 3,
      messages: [
        {
          type: "ai",
          text: "Welcome to Porsche! I've loaded your color preferences from our conversation. Let's finalize your Guards Red selection. Would you like to see other bold PTS options?",
        },
        {
          type: "user",
          text: "Sure, show me something modern and electric",
        },
      ],
    },
    {
      platform: "porsche",
      stage: 3,
      messages: [
        {
          type: "ai",
          text: "Here's Acid Green on both the 911 and Taycan - perfect for making a bold, modern statement:",
          color: {
            name: "Acid Green",
            code: "2M8",
            desc: "Electric lime that represents Porsche's bold future",
            image: carImages.acidgreenTaycan,
          },
        },
        {
          type: "user",
          text: "Wow! But I'll stick with Guards Red for the 911. What interior works best?",
        },
      ],
    },
    {
      platform: "porsche",
      stage: 3,
      messages: [
        {
          type: "ai",
          text: "Perfect! For Guards Red, I recommend Bordeaux Red leather interior (classic complementary contrast) or Slate Grey (modern sophistication). Both create stunning combinations with 92%+ harmony scores.",
        },
        {
          type: "user",
          text: "Bordeaux Red sounds perfect. Let's finalize this!",
        },
      ],
    },
    {
      platform: "porsche",
      stage: 3,
      messages: [
        {
          type: "ai",
          text: "✅ Excellent! Your configuration:\n\n• 911 Carrera S Coupe\n• Guards Red (Y39) PTS\n• Bordeaux Red Full Leather\n• 20\" Carrera S Wheels\n\nI'm preparing your dealer handover with all preferences. Your local Porsche Centre will contact you within 24 hours to finalize your build!",
        },
        { type: "user", text: "Perfect, thank you!" },
      ],
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Auto-start demo
    const timer = setTimeout(() => {
      nextStep();
    }, 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const nextStep = async () => {
    if (currentStep >= scenarios.length) {
      setIsDemoComplete(true);
      return;
    }

    const scenario = scenarios[currentStep];

    // Update platform and stage
    if (scenario.platform !== "transition") {
      setCurrentPlatform(scenario.platform);
    }
    setCurrentStage(scenario.stage);

    // Add messages with delay
    for (let i = 0; i < scenario.messages.length; i++) {
      const message = scenario.messages[i];

      if (message.type === "ai" && message.type !== "banner") {
        setIsTyping(true);
        await sleep(1000);
        setIsTyping(false);
      }

      setMessages((prev) => [...prev, message]);

      if (i < scenario.messages.length - 1) {
        await sleep(800);
      }
    }

    setCurrentStep((prev) => prev + 1);
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setCurrentPlatform("gpt");
    setMessages([]);
    setCurrentStage(1);
    setIsDemoComplete(false);
    setTimeout(() => {
      nextStep();
    }, 500);
  };

  const renderMessage = (message, index) => {
    if (message.type === "banner") {
      return (
        <div key={index} className="transition-banner">
          <span className="handoff-icon">🔄</span>
          {message.text}
        </div>
      );
    }

    const avatar = message.type === "ai" ? "🤖" : "👤";

    return (
      <div key={index} className={`message ${message.type}`}>
        <div className={`avatar ${message.type}`}>{avatar}</div>
        <div className="message-content">
          {message.text}
          {message.color && (
            <div className="color-card">
              {message.color.image ? (
                <img
                  src={message.color.image}
                  alt={message.color.name}
                  className="car-image"
                  onError={(e) => {
                    // Fallback to color swatch if image fails to load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
              ) : null}
              <div
                className="color-swatch-fallback"
                style={{
                  display: "none",
                  background: message.color.hex || "#666",
                }}
              ></div>
              <div className="color-info">
                <h4>{message.color.name}</h4>
                {message.color.code && (
                  <div className="color-code">Code: {message.color.code}</div>
                )}
                <p>{message.color.desc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={styles.body}>
      <div style={styles.header}>
        <div className="flex items-center">
          <img src="logo512.png" alt="Logo" className="w-16 h-16" />
          <h1 style={styles.headerTitle}>Porsche PTS Concierge</h1>
        </div>
        <p style={styles.headerSubtitle}>Interactive User Experience Demo</p>
        <div style={{ marginTop: "12px" }}>
          <span
            className={`platform-badge ${
              currentPlatform === "gpt" ? "badge-gpt" : "badge-porsche"
            }`}
          >
            {currentPlatform === "gpt"
              ? "🔒 Custom GPT (OpenAI)"
              : "🔓 Porsche Platform"}
          </span>
        </div>
      </div>

      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-title">Heritage Discovery Journey</div>
          <div className="stage-indicator">
            <div
              className={`stage-dot ${currentStage >= 1 ? "active" : ""}`}
            ></div>
            <div
              className={`stage-dot ${currentStage >= 2 ? "active" : ""}`}
            ></div>
            <div
              className={`stage-dot ${currentStage >= 3 ? "active" : ""}`}
            ></div>
          </div>
        </div>

        <div className="messages">
          {messages.map((message, index) => renderMessage(message, index))}
          {isTyping && (
            <div className="message ai">
              <div className="avatar ai">🤖</div>
              <div className="message-content">
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="controls">
          <button
            className="btn-primary"
            onClick={isDemoComplete ? resetDemo : nextStep}
          >
            {isDemoComplete ? "Restart Demo" : "Next Step"}
          </button>
          <button className="btn-secondary" onClick={resetDemo}>
            Restart Demo
          </button>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          min-height: 100vh;
          color: #fff;
        }

        .platform-badge {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.875rem;
          margin: 5px;
          font-weight: 500;
        }

        .badge-gpt {
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.5);
          color: #60a5fa;
        }

        .badge-porsche {
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.5);
          color: #4ade80;
        }

        .chat-container {
          max-width: 800px;
          width: 100%;
          background: rgba(30, 41, 59, 0.5);
          border-radius: 20px;
          border: 1px solid rgba(148, 163, 184, 0.1);
          backdrop-filter: blur(10px);
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          margin: 0 auto;
        }

        .chat-header {
          padding: 20px;
          background: rgba(15, 23, 42, 0.6);
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .chat-title {
          font-size: 1.125rem;
          font-weight: 500;
        }

        .stage-indicator {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .stage-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(148, 163, 184, 0.3);
          transition: all 0.3s;
        }

        .stage-dot.active {
          background: #60a5fa;
          box-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
        }

        .messages {
          padding: 20px;
          min-height: 400px;
          max-height: 500px;
          overflow-y: auto;
        }

        .message {
          margin-bottom: 16px;
          display: flex;
          gap: 12px;
          opacity: 0;
          animation: fadeIn 0.5s forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .message.user {
          flex-direction: row-reverse;
        }

        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.125rem;
        }

        .avatar.ai {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
        }

        .avatar.user {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .message-content {
          max-width: 70%;
          padding: 12px 16px;
          border-radius: 16px;
          line-height: 1.5;
          white-space: pre-wrap;
        }

        .message.ai .message-content {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .message.user .message-content {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.2);
        }

        .color-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 12px;
          padding: 12px;
          background: rgba(15, 23, 42, 0.6);
          border-radius: 12px;
          border: 1px solid rgba(148, 163, 184, 0.1);
        }

        .car-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          object-fit: cover;
        }

        .color-swatch-fallback {
          width: 100%;
          height: 120px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

        .color-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .color-info h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .color-code {
          font-size: 0.75rem;
          color: rgba(148, 163, 184, 0.9);
          font-family: monospace;
          background: rgba(0, 0, 0, 0.3);
          padding: 2px 8px;
          border-radius: 4px;
          display: inline-block;
          width: fit-content;
        }

        .color-info p {
          font-size: 0.875rem;
          color: rgba(226, 232, 240, 0.9);
          line-height: 1.4;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 12px 16px;
        }

        .typing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(148, 163, 184, 0.5);
          animation: typing 1.4s infinite;
        }

        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-10px); }
        }

        .controls {
          padding: 20px;
          background: rgba(15, 23, 42, 0.6);
          border-top: 1px solid rgba(148, 163, 184, 0.1);
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        button {
          padding: 12px 24px;
          border-radius: 8px;
          border: none;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 0.875rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
        }

        .btn-secondary {
          background: rgba(148, 163, 184, 0.1);
          color: rgba(226, 232, 240, 0.9);
          border: 1px solid rgba(148, 163, 184, 0.2);
        }

        .btn-secondary:hover {
          background: rgba(148, 163, 184, 0.2);
        }

        .transition-banner {
          padding: 16px;
          margin: 16px 0;
          background: linear-gradient(90deg, rgba(139, 92, 246, 0.2) 0%, rgba(34, 197, 94, 0.2) 100%);
          border-radius: 12px;
          border: 1px solid rgba(139, 92, 246, 0.3);
          text-align: center;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .handoff-icon {
          font-size: 1.25rem;
        }

        @media (max-width: 768px) {
          .message-content {
            max-width: 85%;
          }

          .controls {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    color: "#fff",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  headerTitle: {
    fontSize: "2rem",
    fontWeight: "300",
    marginBottom: "10px",
  },
  headerSubtitle: {
    color: "rgba(148, 163, 184, 0.8)",
    marginTop: "8px",
  },
};

export default Demo;
