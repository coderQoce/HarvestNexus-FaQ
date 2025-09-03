import React, { useState } from "react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Harvest Nexus?",
      answer:
        "Harvest Nexus is a platform that connects farmers, buyers, and stakeholders to streamline agricultural processes and improve transparency.",
    },
    {
      question: "How do I create an account?",
      answer:
        "Click on the sign-up button at the top of the page, fill in your details, and verify your email to start using Harvest Nexus.",
    },
    {
      question: "Is Harvest Nexus free to use?",
      answer:
        "Yes! Harvest Nexus offers free access to core features. Some advanced features may require a subscription.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We use advanced encryption and follow strict data protection policies to ensure your information remains safe and private.",
    },
    {
      question: "Can I access Harvest Nexus on mobile?",
      answer:
        "Yes, our platform is fully responsive and works seamlessly on mobile devices, tablets, and desktops.",
    },
    {
      question: "How do I get support?",
      answer:
        "You can reach out via our Contact page or use the in-app support chat for quick assistance.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-5">
      <div className="container">
        <div className="faq-card p-5 rounded-4 shadow-lg">
        
          <h2 className="fw-bold text-white mb-4">FAQ</h2>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-3">
                
                <div
                  className={`faq-item py-3 d-flex justify-content-between align-items-center ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleFaq(index)}
                  style={{ cursor: "pointer" }}
                >
                  <span className="text-white fw-semibold">{faq.question}</span>
                  <span
                    className={`arrow text-white ${
                      activeIndex === index ? "rotate" : ""
                    }`}
                  >
                    ↓
                  </span>
                </div>

             
                <div
                  className={`faq-answer-wrapper ${
                    activeIndex === index ? "open" : ""
                  }`}
                >
                  <p className="faq-answer text-white">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <style jsx>{`
        .faq-card {
          background: #166534;
        }

        .faq-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          transition: color 0.3s ease;
        }

        .faq-item:hover {
          color: #bbf7d0; 
        }

        .arrow {
          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }

        .arrow.rotate {
          transform: rotate(180deg);
        }

       
        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease, opacity 0.5s ease;
          opacity: 0;
        }

        .faq-answer-wrapper.open {
          max-height: 200px;
          opacity: 1;
          animation: fadeSlide 0.5s ease;
        }

        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-answer {
          margin: 0;
          padding: 0.5rem 0 1rem 0;
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
}
