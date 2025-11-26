import mailIcon from '../assets/img/icons/mail.png'
import phoneIcon from '../assets/img/icons/phone.png'
import addressIcon from '../assets/img/icons/address.png'
import facebookIcon from '../assets/img/icons/facebook.png'
import instagramIcon from '../assets/img/icons/instagram.png'
import twitterIcon from '../assets/img/icons/twitter.png'
import linkedinIcon from '../assets/img/icons/linkedin.png'

const Contact = () => {
  return (
    <section className="contact-wrapper">
      <h1 className="contact-title">
        Get In <span className="bg-gradient-to-r from-[#00AEEF] via-[#4A78F0] to-[#9B3DFF] bg-clip-text text-transparent">Touch</span>
      </h1>

      <p className="contact-subtitle">
        Have questions about our projects? Want to collaborate? We'd love to
        hear from you.
      </p>

      <div className="contact-grid">
        {/* Left: Form */}
        <div className="contact-card form-card">
          <h2>Send us a Message</h2>

          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Tell us more..."
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message <i className="fa-regular fa-paper-plane"></i>
            </button>
          </form>
        </div>

        {/* Right: Contact info */}
        <div>
          <div className="contact-card info-card">
            <h2>Contact Information</h2>

            <div className="info-item">
              <div className="info-icon email">
                <img src={mailIcon} alt="Email" />
              </div>
              <div>
                <h3>Email</h3>
                <p>
                  info@temirat.kz<br />
                  support@temirat.kz
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon phone">
                <img src={phoneIcon} alt="Phone" />
              </div>
              <div>
                <h3>Phone</h3>
                <p>
                  +7 (XXX) XXX-XX-XX<br />
                  Mon–Fri, 9am–6pm
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon office">
                <img src={addressIcon} alt="Address" />
              </div>
              <div>
                <h3>Office</h3>
                <p>
                  Almaty, Kazakhstan<br />
                  Coming soon: exact address
                </p>
              </div>
            </div>
          </div>

          <div className="contact-card follow-card">
            <h2>Follow Us</h2>
            <p>Stay updated with our latest projects and innovations</p>

            <div className="social-row">
              <a href="#" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact





