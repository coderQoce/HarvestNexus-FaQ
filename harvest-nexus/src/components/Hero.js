import React from "react";
import logo from "../images/faq.jpg";

export default function Hero() {
  return (
    <section className="hero-wrapper py-5">
      <div className="hero-section container p-5 text-start">
        <p className="text-uppercase text-secondary fw-bold small mb-2">FAQ</p>

        <h1 className="hero-title fw-bold text-dark mb-5">
          Let&apos;s talk about <br />
          <span className="text-green-deep">HarvestHub</span>
        </h1>

        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-4 mb-4 mb-md-0 slant-left">
            <p className="text-muted">
              We provide innovative solutions to help Farmers maximize efficiency,
              improve sustainability, and achieve higher yields. From smart technology to expert guidance, 
              we are here to transform the future of farming.
            </p>
          </div>

          <div className="col-md-4 text-center mb-4 mb-md-0 slant-image">
            <img
              src={logo}
              alt="Illustration"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "85%" }}
            />
          </div>

          <div className="col-md-4 slant-right">
            <p className="text-muted">
              We empower farmers by connecting them directly with buyers,
               providing access to reliable storage and logistics through a platform that ensures 
               fair returns for every harvest.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-wrapper {
          display: flex;
          justify-content: center;
        }

        .hero-section {
          background-color: #f0fdf4;
          border-radius: 1rem;
          max-width: 1200px;
        }

        .hero-title {
          font-size: 5rem;
          line-height: 1.1;
        }

        .text-green-deep {
          color: #166534;
        }

        .slant-left {
          transform: rotate(-3deg);
        }

        .slant-right {
          transform: rotate(3deg);
        }

        .slant-image img {
          transform: rotate(-5deg);
          transition: transform 0.3s ease;
        }

        .slant-image img:hover {
          transform: rotate(0deg) scale(1.05);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
