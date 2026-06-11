export default function CertModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div
      id="cert-modal"
      className="cert-modal"
      style={{ display: 'flex' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <span className="cert-modal-close" onClick={onClose}>&times;</span>
      <img
        className="cert-modal-content"
        src="/assets/images/Certificado-React-Benjamin-Braner.jpg"
        alt="React Certificate"
      />
    </div>
  )
}
