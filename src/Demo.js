import React, { useState, useEffect, useRef } from "react";

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentPlatform, setCurrentPlatform] = useState("gpt");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isDemoComplete, setIsDemoComplete] = useState(false);
  const messagesEndRef = useRef(null);

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
          text: "Great choice! Heritage colors are iconic shades from Porsche's history. Each tells a story. For example, Rubystar from the 90s or Irish Green from the 70s. What era resonates with you?",
        },
        {
          type: "user",
          text: "I love 90s Porsche aesthetics - bold but timeless.",
        },
      ],
    },
    {
      platform: "gpt",
      stage: 1,
      messages: [
        {
          type: "ai",
          text: "Perfect! Based on your 90s preference, here are some iconic heritage colors:",
          color: {
            name: "Rubystar Neo",
            hex: "#8B0000",
            desc: "Deep metallic red from the 964 era",
          },
        },
        {
          type: "user",
          text: "Rubystar looks amazing! How does it look in different lighting?",
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
          text: "Rubystar is stunning! It shifts from deep burgundy in shade to brilliant red in direct sunlight. The metallic finish creates incredible depth on the 911's curves.",
        },
        {
          type: "user",
          text: "This is exactly what I want. How do I proceed?",
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
          text: "Welcome to Porsche! I've loaded your color preferences from our conversation. Let's finalize your Rubystar selection. Would you like to see it on different 911 configurations?",
        },
        {
          type: "user",
          text: "Yes, show me Rubystar on 911 GTS Coupe vs Cabriolet",
        },
      ],
    },
    {
      platform: "porsche",
      stage: 3,
      messages: [
        {
          type: "ai",
          text: "Here's Rubystar on both variants. The Coupe emphasizes the metallic depth with its sleek roofline, while the Cabriolet shows more color variation with the top down. Both are stunning choices!",
        },
        {
          type: "user",
          text: "I'll go with the GTS Coupe. What interior works best?",
        },
      ],
    },
    {
      platform: "porsche",
      stage: 3,
      messages: [
        {
          type: "ai",
          text: "Perfect! For Rubystar, I recommend Bordeaux Red leather interior (classic complementary contrast) or Slate Grey (modern sophistication). Both create stunning combinations with 92%+ harmony scores.",
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
          text: "✅ Excellent! Your configuration:\n\n• 911 GTS Coupe\n• Rubystar Neo (PTS)\n• Bordeaux Red Full Leather\n• Gloss Black Wheels\n\nI'm preparing your dealer handover with all preferences. Your local Porsche Centre will contact you within 24 hours to finalize your build!",
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
              <div
                className="color-swatch"
                style={{ background: message.color.hex }}
              ></div>
              <div className="color-info">
                <h4>{message.color.name}</h4>
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
        <h1 style={styles.headerTitle}>🏎️ Porsche PTS Concierge</h1>
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
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 12px;
          margin-top: 12px;
          padding: 12px;
          background: rgba(15, 23, 42, 0.6);
          border-radius: 12px;
          border: 1px solid rgba(148, 163, 184, 0.1);
        }

        .color-swatch {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

        .color-info h4 {
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .color-info p {
          font-size: 0.75rem;
          color: rgba(148, 163, 184, 0.8);
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
