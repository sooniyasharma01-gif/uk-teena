import "./Rates.css";
import useScrollReveal from "../hooks/useScrollReveal";
import g8Img from "../assets/GalleryImg/g8.jpeg";

const rates = [
  { duration: "1 Hour", price: "£130" },
  { duration: "90 Minutes", price: "£180" },
  { duration: "2 Hours", price: "£220", tag: "★ preferred first date minimum", preferred: true },
  { duration: "3 Hours", price: "£320" },
  { duration: "4 Hours", price: "£420" },
  { duration: "5 Hours", price: "£550" },
  { duration: "Overnight — 8 Hours", price: "£820" },
];

const testimonials = [
  { text: "Truly unforgettable. Worth every penny.", by: "J.M., London" },
  { text: "The most natural, effortless evening I've had in years.", by: "S.P., London" },
  { text: "Elegant, warm, and completely genuine.", by: "R.A., Manchester" },
  { text: "Exceeded every expectation. Absolutely wonderful.", by: "D.K., Dubai" },
  { text: "Impeccable discretion and stunning presence.", by: "M.R., Edinburgh" },
  { text: "Time just disappeared. Highly recommend.", by: "T.H., Birmingham" },
];

function TestimonialTicker() {
  const items = [...testimonials, ...testimonials];
  return (
    <div className="rates-ticker">
      <div className="rates-ticker-track">
        {items.map((t, i) => (
          <span key={i} className="rates-ticker-item">
            <em>"{t.text}"</em> — {t.by}
            <span className="rates-ticker-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Rates() {
  const hero     = useScrollReveal();
  const deposit  = useScrollReveal();
  const ratesList = useScrollReveal();
  const included = useScrollReveal();
  const notes    = useScrollReveal();
  const couples  = useScrollReveal();

  return (
    <div className="rates-page">

      {/* PROFILE IMAGE */}
      <div className="rates-profile-img">
        <img src={g8Img} alt="Teena" />
        <div className="rates-profile-overlay">
          <span>teenauk.com</span>
        </div>
      </div>

      {/* HERO */}
      <div className="rates-hero reveal" ref={hero}>
        <h2>Rates & Booking</h2>
        <div className="rates-hero-line">
          <span /><em>The Girlfriend Experience</em><span />
        </div>
        <p className="rates-intro">
          As a low volume provider I prioritize longer dates — especially those
          that include cocktails, dinner, or a little adventure on the town.
        </p>
      </div>

      {/* DEPOSIT */}
      <div className="deposit-card reveal" ref={deposit}>
        <p className="deposit-card-title">Booking & Deposit</p>
        <div className="deposit-row">
          <span className="deposit-icon">💳</span>
          <span>A <strong>£70 deposit</strong> is due via <strong>UPI / Indian Bank Transfer</strong> at the time of booking — this goes towards your total. The remainder is due in <strong>cash, discreetly upon meeting.</strong></span>
        </div>
        <div className="deposit-row">
          <span className="deposit-icon">⏰</span>
          <span>Cancellations made less than <strong>24 hours</strong> before the scheduled time forfeit the deposit.</span>
        </div>
        <div className="deposit-row">
          <span className="deposit-icon">✦</span>
          <span>In the rare event I must cancel, your deposit will be fully refunded. <em>(20% retained for dates 5 hours or more.)</em></span>
        </div>
        <div className="deposit-notice">
          <p className="deposit-notice-title">Important — Payment to Indian Account</p>
          <p>I'm currently in the <strong>UK on a student visa</strong>, which means I'm unable to accept payments into a UK bank account. All payments must be made to my <strong>Indian bank account</strong> — this is a legal requirement for my visa situation and I appreciate your understanding.</p>
          <p className="deposit-notice-footer">This arrangement has worked smoothly with every client. You are in safe hands — I take my reputation seriously and every transaction is handled with complete honesty.</p>
        </div>
      </div>

      {/* RATES */}
      <div className="rates-section-label reveal" ref={ratesList}>
        <h3>Investment</h3>
        <p>Incall · Outcall</p>
      </div>

      <div className="rates-list reveal" ref={ratesList}>
        {rates.map((r) => (
          <div key={r.duration} className={`rate-row${r.preferred ? " preferred" : ""}`}>
            <div className="rate-duration">
              {r.duration}
              {r.tag && <span className="rate-tag">{r.tag}</span>}
            </div>
            <div className={`rate-price${r.small ? " small" : ""}`}>{r.price}</div>
          </div>
        ))}
      </div>

      <TestimonialTicker />

      {/* WHAT'S INCLUDED */}
      <div className="included-section reveal" ref={included}>
        <p className="included-eyebrow">Every booking includes</p>
        <div className="included-grid">
          {[
            { icon: "💬", text: "Genuine conversation & real connection" },
            { icon: "✨", text: "Elegant, well-presented company" },
            { icon: "🔒", text: "Complete discretion & privacy" },
            { icon: "🕰️", text: "Unhurried, fully present time" },
            { icon: "🌹", text: "Warmth, care & personal attention" },
            { icon: "🥂", text: "An experience worth remembering" },
          ].map((item) => (
            <div className="included-item" key={item.text}>
              <span>{item.icon}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* NOTES */}
      <div className="rates-notes reveal" ref={notes}>
        <div className="rates-note">
          🍷 Dates of <strong>3 hours or more</strong> require outside time — drinks, dinner, an event, or an adventure.
        </div>
        <div className="rates-note">
          ✈️ <strong>FMTY</strong> — Fly Me To You. 3 hour minimum with airfare & hotel covered by you.
        </div>
      </div>

      {/* COUPLES */}
      <div className="couples-box reveal" ref={couples}>
        <h4>Are there two of you?</h4>
        <p>For couples, simply add <strong>£200</strong> to any rate above.</p>
      </div>

    </div>
  );
}
