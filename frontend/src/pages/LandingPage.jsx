import React, { useContext, useState } from 'react'
import { ArrowRight, LayoutTemplate, Menu, X, Zap, Download, ShieldCheck, Star } from 'lucide-react'
import { landingPageStyles } from '../assets/dummystyle'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { ProfileInfoCard } from '../components/Cards'

const LandingPage = () => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleCTA = () => {
    if (!user) {
      navigate('/login')
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className={landingPageStyles.container}>
      <header className={landingPageStyles.header}>
        <div className={landingPageStyles.headerContainer}>
          <div className={landingPageStyles.logoContainer}>
            <div className={landingPageStyles.logoIcon}>
              <LayoutTemplate className={landingPageStyles.logoIconInner} />
            </div>
            <span className={landingPageStyles.logoText}>Resumint</span>
          </div>

          <nav className={landingPageStyles.navLinks}>
            <a href="#features" className={landingPageStyles.navLink}>Features</a>
            <a href="#templates" className={landingPageStyles.navLink}>Templates</a>
            <a href="#pricing" className={landingPageStyles.navLink}>Pricing</a>
          </nav>

          <div className={landingPageStyles.headerActions}>
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button className={landingPageStyles.desktopAuthButton} onClick={() => navigate('/login')}>
                Get Started
              </button>
            )}
          </div>

          <button className={landingPageStyles.mobileMenuButton} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} className={landingPageStyles.mobileMenuIcon} /> : <Menu size={24} className={landingPageStyles.mobileMenuIcon} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className={landingPageStyles.mobileMenu}>
            <div className={landingPageStyles.mobileMenuContainer}>
              <a href="#features" className={landingPageStyles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#templates" className={landingPageStyles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>Templates</a>
              <a href="#pricing" className={landingPageStyles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              {user ? (
                <button className={landingPageStyles.mobileDashboardButton} onClick={() => { navigate('/dashboard'); setMobileMenuOpen(false) }}>
                  Dashboard
                </button>
              ) : (
                <button className={landingPageStyles.mobileAuthButton} onClick={() => { navigate('/login'); setMobileMenuOpen(false) }}>
                  Get Started
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      <main className={landingPageStyles.main}>
        <section className={landingPageStyles.heroSection}>
          <div className={landingPageStyles.heroGrid}>
            <div className={landingPageStyles.heroLeft}>
              <div className={landingPageStyles.heroBadge}>Resume Builder</div>
              <h1 className={landingPageStyles.heroTitle}>
                Resumes that <span className={landingPageStyles.heroTitleAccent}>get you hired.</span>
              </h1>
              <p className={landingPageStyles.heroDescription}>
                Design a standout resume with expertly crafted, ATS-optimized templates — tailored to your career and ready in minutes.
              </p>

              <div className={landingPageStyles.ctaButtons}>
                <button className={landingPageStyles.primaryButton} onClick={handleCTA}>
                  Start Building
                  <ArrowRight size={18} />
                </button>
                <button className={landingPageStyles.secondaryButton} onClick={handleCTA}>
                  View Templates
                </button>
              </div>

              <div className={landingPageStyles.statsContainer}>
                {[
                  { value: '50K+', label: 'Resumes built' },
                  { value: '4.9', label: 'Avg rating' },
                  { value: '5 min', label: 'to finish' }
                ].map((stat, index) => (
                  <div key={index} className={landingPageStyles.statItem}>
                    <div className={landingPageStyles.statValue}>{stat.value}</div>
                    <div className={landingPageStyles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={landingPageStyles.heroPreviewCard}>
              <div className={landingPageStyles.previewTopBar}>
                <span className={landingPageStyles.previewDot}></span>
                <span className={landingPageStyles.previewDot}></span>
                <span className={landingPageStyles.previewDot}></span>
              </div>

              <div className={landingPageStyles.previewHeader}>
                <div className={landingPageStyles.previewAvatar}>AK</div>
                <div>
                  <div className={landingPageStyles.previewName}>Alex Kim</div>
                  <div className={landingPageStyles.previewRole}>Product Designer</div>
                </div>
              </div>

              <div className={landingPageStyles.previewContent}>
                <div className={`${landingPageStyles.previewLine} ${landingPageStyles.previewLineLong}`} />
                <div className={`${landingPageStyles.previewLine} ${landingPageStyles.previewLineMedium}`} />
                <div className={`${landingPageStyles.previewLine} ${landingPageStyles.previewLineShort}`} />
              </div>

              <div className={landingPageStyles.skillChips}>
                {['React', 'Node', 'Figma', 'SQL'].map((skill) => (
                  <span key={skill} className={landingPageStyles.skillChip}>{skill}</span>
                ))}
              </div>

              <div className={landingPageStyles.previewFooter}>
                <ShieldCheck size={16} />
                <span>ATS Approved</span>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className={landingPageStyles.featuresSection}>
          <div className={landingPageStyles.featuresContainer}>
            <div className={landingPageStyles.featuresHeader}>
              <h2 className={landingPageStyles.sectionIntro}>Built to make you <br/><span className={landingPageStyles.featuresTitle}>unmissable.</span></h2>
              <p className={landingPageStyles.featuresDescription}>Everything you need to create a resume that stands out from the stack.</p>
            </div>

            <div className={landingPageStyles.featuresGrid}>
              {[
                {
                  icon: <Zap className={landingPageStyles.featureIcon} />,
                  title: 'Lightning Fast',
                  description: 'Build a polished, professional resume in under five minutes with our guided flow.',
                  style: landingPageStyles.featureCardViolet
                },
                {
                  icon: <LayoutTemplate className={landingPageStyles.featureIcon} />,
                  title: 'Pro Templates',
                  description: 'Recruiter-approved, ATS-friendly layouts crafted for every industry and role.',
                  style: landingPageStyles.featureCardFuchsia
                },
                {
                  icon: <Download className={landingPageStyles.featureIcon} />,
                  title: 'Instant Export',
                  description: 'Download pixel-perfect PDFs instantly — formatting stays flawless everywhere.',
                  style: landingPageStyles.featureCardOrange
                }
              ].map((feature, index) => (
                <div key={index} className={landingPageStyles.featureCard}>
                  <div className={`${landingPageStyles.featureCardGlow} ${feature.style}`} />
                  <div className={landingPageStyles.featureCardContent}>
                    <div className={landingPageStyles.featureIconWrapper}>{feature.icon}</div>
                    <h3 className={landingPageStyles.featureTitle}>{feature.title}</h3>
                    <p className={landingPageStyles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={landingPageStyles.testimonialSection}>
          <div className={landingPageStyles.testimonialCard}>
            <div className={landingPageStyles.testimonialRating}>
              <div className={landingPageStyles.testimonialRatingBadge}>
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="fill-yellow-400 text-yellow-400 w-5 h-5" />
                ))}
              </div>
              <span className={landingPageStyles.testimonialRatingText}>Loved by 50,000+ professionals worldwide</span>
            </div>
            <p className={landingPageStyles.testimonialQuote}>
              "I rebuilt my resume in one evening and had three interviews the next week. <span className="text-green-400">This is the tool I wish I had years ago.</span>"
            </p>
          </div>
        </section>

        <section id="pricing" className={landingPageStyles.ctaSection}>
          <div className={landingPageStyles.ctaContainer}>
            <div className={landingPageStyles.ctaCard}>
              <div className={landingPageStyles.ctaCardBg}></div>
              <div className={landingPageStyles.ctaContent}>
                <div>
                  <h2 className={landingPageStyles.ctaTitle}>Your next role starts <span className="text-green-400">here.</span></h2>
                  <p className={landingPageStyles.ctaDescription}>Join thousands of professionals who landed their dream job with Resumint.</p>
                </div>
                <button className={landingPageStyles.ctaButton} onClick={handleCTA}>
                  Build Your Resume
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={landingPageStyles.footer}>
        <div className={landingPageStyles.footerContainer}>
          <p className={landingPageStyles.footerText}>© 2026 Resumint — Crafted for careers that matter.</p>
        </div>
      </footer>

    </div>
  )
}

export default LandingPage
