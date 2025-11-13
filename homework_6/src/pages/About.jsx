import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">About This Project</h1>
        <p className="about-subtitle">
          A React-based web application exploring the Rick and Morty universe through 
          modern web development practices and API integration.
        </p>
      </div>

      <div className="about-features">
        <div className="about-feature">
          <h3>🎯 Project Goals</h3>
          <p>
            Master React fundamentals, learn state management, understand API integration, 
            and build responsive user interfaces with modern development workflows.
          </p>
        </div>
        
        <div className="about-feature">
          <h3>💡 Learning Focus</h3>
          <p>
            Component architecture, React Router navigation, async operations, 
            error handling, and creating reusable UI components with proper styling.
          </p>
        </div>
        
        <div className="about-feature">
          <h3>🚀 Key Features</h3>
          <p>
            Character browsing, detailed profiles, search functionality, 
            responsive design, and seamless navigation between different views.
          </p>
        </div>
      </div>

      <div className="about-content">
        <h2>Technology Stack</h2>
        <div className="about-stack">
          <span className="tech-tag">React</span>
          <span className="tech-tag">React Router</span>
          <span className="tech-tag">JavaScript ES6+</span>
          <span className="tech-tag">CSS3</span>
          <span className="tech-tag">HTML5</span>
          <span className="tech-tag">REST API</span>
        </div>
        <p className="about-description">
          This application demonstrates practical implementation of modern web technologies, 
          focusing on clean code architecture, user experience, and performance optimization 
          while working with external data sources.
        </p>
      </div>

      <div className="about-contacts">
        <h2>Get In Touch</h2>
        <div className="contact-links">
          <a href="mailto:developer@example.com" className="contact-link">
            <span className="contact-icon">📧</span>
            <span className="contact-label">Email</span>
            <span>developer@example.com</span>
          </a>
          <a href="https://github.com/developer" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-icon">💻</span>
            <span className="contact-label">GitHub</span>
            <span>github.com/developer</span>
          </a>
          <a href="https://t.me/developer" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-icon">📱</span>
            <span className="contact-label">Telegram</span>
            <span>@Bibo_005</span>
          </a>
        </div>
      </div>
    </div>
  );
}