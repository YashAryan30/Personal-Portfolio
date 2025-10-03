import { Col } from "react-bootstrap";

export const CertificationCard = ({ title, issuer, imgUrl, link }) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <div className="cert-card">
        <img src={imgUrl} alt={title} className="cert-image" />
        <div className="cert-overlay">
          <h4>{title}</h4>
          <span>{issuer}</span>
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              View Certificate
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
