import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Heart, Shield, Star, Users, BookOpen, Award, Globe, ArrowRight,
  CheckCircle, ChevronRight, ChevronDown, Mail, Phone, MapPin,
  Clock, Sun, Leaf, Feather, Wind, Flame, Menu, X, Gift,
  Lock, Search, Activity, Layers, FileText, BarChart2, Briefcase
} from 'lucide-react';
import './styles.css';

const LEONARD = "https://base44.app/api/apps/69d42975b7b1794c3dc01661/files/mp/public/69d42975b7b1794c3dc01661/74db28267_file_30.jpg";

const I = {
  hero1:    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85',
  heroA:    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&q=80',
  heroB:    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80',
  about1:   'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=900&q=80',
  healing:  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80',
  prayer:   'https://images.unsplash.com/photo-1510325081338-c5d95dfa1b39?w=900&q=80',
  nature:   'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80',
  herbal:   'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=900&q=80',
  community:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80',
  sound:    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900&q=80',
  retreat:  'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=900&q=80',
  energy:   'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
  t1:       'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  t2:       'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  t3:       'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80',
  prog1:    'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=800&q=80',
  prog2:    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
  prog3:    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
  prog4:    'https://images.unsplash.com/photo-1510325081338-c5d95dfa1b39?w=800&q=80',
  res1:     'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=700&q=80',
  res2:     'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=700&q=80',
  res3:     'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=700&q=80',
  trust:    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
};

/* ═══════════════════════════════════════════
   MEGA-MENU STRUCTURE
═══════════════════════════════════════════ */
const NAV_STRUCTURE = [
  {
    label: 'About',
    href: '/about',
    children: {
      items: [
        { icon: <Heart />, label: 'Our Ministry', desc: 'Mission, vision, and calling', href: '/about' },
        { icon: <Users />, label: 'Leonard M. Diana', desc: 'Founder & minister', href: '/about#founder' },
        { icon: <Shield />, label: '508(c)(1)(a) Status', desc: 'Ministry charter & governance', href: '/ministry' },
        { icon: <Globe />, label: 'Impact & Testimonies', desc: 'Lives touched by healing', href: '/about#impact' },
      ],
      cols: 2,
      featured: { label: 'Ministry Foundation', title: 'Sacred healing for all people', desc: 'A 508(c)(1)(a) Spiritual Healing Ministry and Private Holistic Association — faith-governed, open to all.', href: '/about' },
    },
  },
  {
    label: 'Ministry',
    href: '/ministry',
    children: {
      items: [
        { icon: <FileText />, label: 'Ministry Charter', desc: 'Governance & founding values', href: '/ministry' },
        { icon: <Lock />, label: 'Private Association', desc: 'PHA structure & member rights', href: '/ministry#pha' },
        { icon: <Shield />, label: '508(c)(1)(a) Explained', desc: 'Our legal & spiritual foundation', href: '/ministry#status' },
        { icon: <Award />, label: 'Ethical Standards', desc: 'Practitioner & ministry code', href: '/ministry#ethics' },
      ],
      cols: 2,
    },
  },
  {
    label: 'Healing Services',
    href: '/healing',
    children: {
      items: [
        { icon: <Feather />, label: 'Spiritual Healing & Prayer', desc: 'Intercessory & restorative prayer', href: '/healing' },
        { icon: <Sun />, label: 'Energy & Body Wellness', desc: 'Somatic & energetic healing', href: '/healing' },
        { icon: <Leaf />, label: 'Herbal & Natural Medicine', desc: 'Plant-based healing protocols', href: '/healing' },
        { icon: <Wind />, label: 'Sound & Vibrational Therapy', desc: 'Frequency & sacred sound', href: '/healing' },
        { icon: <Users />, label: 'Healing Circles', desc: 'Community group healing', href: '/healing' },
        { icon: <Flame />, label: 'Deliverance Ministry', desc: 'Freedom & spiritual restoration', href: '/healing' },
      ],
      cols: 3,
    },
  },
  {
    label: 'Covenant',
    href: '/membership',
    children: {
      items: [
        { icon: <Layers />, label: 'How It Works', desc: 'Understanding the covenant', href: '/membership' },
        { icon: <Award />, label: 'Covenant Levels', desc: 'Seeker, Member, Guardian', href: '/membership#levels' },
        { icon: <CheckCircle />, label: 'Enter Now', desc: 'Join the community', href: '/membership/apply' },
        { icon: <Heart />, label: 'Member Rights', desc: 'PHA protections & benefits', href: '/ministry#pha' },
      ],
      cols: 2,
    },
  },
  { label: 'Programs', href: '/programs' },
  { label: 'Resources', href: '/resources' },
  {
    label: 'Trust Center',
    href: '/trust-center',
    children: {
      items: [
        { icon: <FileText />, label: 'Ministry Charter', desc: 'Founding document', href: '/trust-center' },
        { icon: <Lock />, label: 'Privacy & Consent', desc: 'Sacred confidentiality', href: '/trust-center#privacy' },
        { icon: <Shield />, label: '508(c)(1)(a) Records', desc: 'Tax-exempt documentation', href: '/trust-center#status' },
        { icon: <Heart />, label: 'Prayer Covenant', desc: 'How we honor requests', href: '/trust-center#prayer' },
      ],
      cols: 2,
    },
  },
];

/* ═══════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const loc = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => { setMobileOpen(false); setMobileExpanded(null); }, [loc]);

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="nav-brand">
            <div className="nav-emblem">
              <div className="nav-emblem-ring">
                <span className="nav-emblem-inner">✦</span>
              </div>
            </div>
            <div className="nav-wordmark">
              <span className="nav-wordmark-primary">Infinite Health</span>
              <span className="nav-wordmark-secondary">&amp; Well-being Ministry</span>
            </div>
          </Link>

          <ul className="nav-menu">
            {NAV_STRUCTURE.map(item => (
              <li key={item.label} className="nav-item">
                {item.children ? (
                  <>
                    <button className={`nav-link${loc.pathname.startsWith(item.href) ? ' active' : ''}`}>
                      {item.label}
                      <svg className="nav-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 6l4 4 4-4" />
                      </svg>
                    </button>
                    <div className="nav-dropdown">
                      {item.children.featured && (
                        <div style={{ padding: '4px 4px 0' }}>
                          <Link to={item.children.featured.href} className="dropdown-featured">
                            <div className="dropdown-featured-label">Featured</div>
                            <div className="dropdown-featured-title">{item.children.featured.title}</div>
                            <div className="dropdown-featured-desc">{item.children.featured.desc}</div>
                            <div className="dropdown-featured-cta">Read more <ChevronRight size={12} /></div>
                          </Link>
                          <div style={{ height: 6 }} />
                        </div>
                      )}
                      <div className={`dropdown-grid cols-${item.children.cols || 2}`}>
                        {item.children.items.map(child => (
                          <Link to={child.href} key={child.label} className="dropdown-item">
                            <div className="dropdown-item-icon">{child.icon}</div>
                            <div className="dropdown-item-text">
                              <span className="dropdown-item-label">{child.label}</span>
                              <span className="dropdown-item-desc">{child.desc}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={item.href} className={`nav-link${loc.pathname === item.href ? ' active' : ''}`}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button className="nav-search-btn" aria-label="Search"><Search size={16} /></button>
            <Link to="/membership/apply" className="btn btn-am btn-sm">Enter Covenant</Link>
          </div>

          <button className={`nav-hamburger${mobileOpen ? ' open' : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {NAV_STRUCTURE.map(item => (
          <div className="mobile-nav-group" key={item.label}>
            {item.children ? (
              <>
                <button className="mobile-nav-link" onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}>
                  {item.label}
                  <ChevronDown size={18} style={{ transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', opacity: 0.5 }} />
                </button>
                {mobileExpanded === item.label && (
                  <div className="mobile-sub-links">
                    {item.children.items.map(child => <Link to={child.href} key={child.label} className="mobile-sub-link">{child.label}</Link>)}
                  </div>
                )}
              </>
            ) : (
              <Link to={item.href} className="mobile-nav-link">{item.label}</Link>
            )}
          </div>
        ))}
        <div className="mobile-menu-footer">
          <Link to="/donate" className="btn btn-ghost btn-lg" style={{ justifyContent: 'center' }}>
            <Gift size={16} /> Support the Ministry
          </Link>
          <Link to="/membership/apply" className="btn btn-am btn-lg" style={{ justifyContent: 'center' }}>
            Enter the Covenant <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand-logo">
              <div className="nav-emblem-ring" style={{ width: 40, height: 40, borderRadius: '50%' }}>
                <span className="nav-emblem-inner" style={{ fontSize: 15 }}>✦</span>
              </div>
              <div>
                <div className="footer-brand-name">Infinite Health &amp; Well-being</div>
                <div className="footer-brand-sub">508(c)(1)(a) Spiritual Healing Ministry</div>
              </div>
            </div>
            <p className="footer-about">
              A sacred 508(c)(1)(a) Spiritual Healing Ministry and Private Holistic Association — offering integrative healing for body, mind, and spirit through faith, nature, and covenant community.
            </p>
            <div className="footer-socials">
              {[{ l: 'X', h: '#' }, { l: 'f', h: '#' }, { l: '▶', h: '#' }, { l: '📷', h: '#' }].map(s => (
                <a key={s.l} href={s.h} className="footer-social-btn">{s.l}</a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h5>Ministry</h5>
            <ul>
              {[['Our Story', '/about'], ['Leonard M. Diana', '/about'], ['Ministry Charter', '/ministry'], ['508(c)(1)(a) Status', '/ministry'], ['Governance', '/trust-center']].map(([l, h]) => <li key={l}><Link to={h}>{l}</Link></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Healing Services</h5>
            <ul>
              {[['Spiritual Healing', '/healing'], ['Energy & Body Wellness', '/healing'], ['Herbal Medicine', '/healing'], ['Sound Therapy', '/healing'], ['Healing Circles', '/healing'], ['Retreats', '/programs']].map(([l, h]) => <li key={l}><Link to={h}>{l}</Link></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Community</h5>
            <ul>
              {[['Enter Covenant', '/membership'], ['Programs', '/programs'], ['Resources', '/resources'], ['Prayer Requests', '/contact'], ['Donate', '/donate'], ['Contact', '/contact']].map(([l, h]) => <li key={l}><Link to={h}>{l}</Link></li>)}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Infinite Health &amp; Well-being. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Use', 'Member Covenant'].map(l => <a href="#" key={l}>{l}</a>)}
          </div>
          <div className="footer-cert-row">
            <Shield size={13} />
            <span>508(c)(1)(a) Spiritual Healing Ministry · Private Holistic Association</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Layout({ children }) {
  return <><Navbar /><main>{children}</main><Footer /></>;
}

/* ═══════════════════════════════════════════
   PAGE HERO
═══════════════════════════════════════════ */
function PageHero({ img, label, title, titleEm, sub }) {
  return (
    <div className="page-hero">
      {img && <div className="page-hero-bg" style={{ backgroundImage: `url(${img})` }} />}
      <div className="page-hero-overlay" />
      <div className="container">
        <div className="page-hero-content">
          <span className="label label-light">{label}</span>
          <div className="divider"><div className="divider-line" /><div className="divider-dot" /></div>
          <h1>{title}{titleEm && <><br /><em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg,#b990d4,#7e4da3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{titleEm}</em></>}</h1>
          {sub && <p>{sub}</p>}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   HOME
═══════════════════════════════════════════ */
function Home() {
  const [donateAmt, setDonateAmt] = useState('$33');

  return (
    <Layout>
      {/* HERO */}
      <section className="hero">
        <div className="hero-media">
          <img src={I.hero1} alt="Sacred healing" loading="eager" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-shimmer" />

        <div className="hero-aside">
          <img src={I.heroA} alt="" className="hero-aside-img" />
          <img src={I.heroB} alt="" className="hero-aside-img" />
        </div>

        <div className="hero-content">
          <div className="hero-label-row">
            <div className="hero-pill">
              <div className="hero-pill-dot" />
              <span>508(c)(1)(a) Spiritual Healing Ministry · Private Holistic Association</span>
            </div>
            <div className="hero-label-line" />
          </div>

          <h1 className="hero-headline">
            <span className="line-break">Infinite</span>
            <em>Health</em> <span style={{ fontStyle: 'normal' }}>&amp;</span>
            <span className="line-break"><em>Well-being</em></span>
          </h1>

          <p className="hero-verse">
            "I came that they may have life, and have it abundantly."
            <cite>— John 10:10</cite>
          </p>

          <div className="hero-cta-row">
            <Link to="/healing" className="btn btn-am btn-lg">
              Explore Healing Services <ArrowRight size={18} />
            </Link>
            <Link to="/membership" className="btn btn-ghost btn-lg">
              Enter the Covenant
            </Link>
          </div>

          <div className="hero-metrics">
            {[
              { val: '7',   sup: '+',  label: 'Years of Ministry' },
              { val: '500', sup: '+',  label: 'Lives Healed' },
              { val: '12',  sup: '+',  label: 'Healing Modalities' },
              { val: '100', sup: '%',  label: 'Faith-Governed' },
            ].map((m, i) => (
              <React.Fragment key={m.label}>
                {i > 0 && <div className="hero-metrics-divider" />}
                <div className="hero-metric">
                  <div className="hero-metric-value">{m.val}<span>{m.sup}</span></div>
                  <div className="hero-metric-label">{m.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="hero-scroll-cue">
          <div className="scroll-line" />
          <span className="scroll-text">Scroll</span>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-inner" aria-hidden>
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {['Spiritual Healing', 'Prayer Ministry', 'Herbal Medicine', 'Sound Therapy', 'Energy Wellness', 'Healing Circles', 'Guided Retreats', 'Deliverance Ministry', 'Community Covenant', '508(c)(1)(a) Ministry'].map(t => (
                <span className="marquee-item" key={t}><span className="marquee-dot" />{t}</span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="section-xs">
        <div className="container">
          <div className="stats-row">
            {[
              { val: '500', sup: '+', label: 'Lives Touched' },
              { val: '7',   sup: '+', label: 'Years of Ministry' },
              { val: '12',  sup: '+', label: 'Healing Modalities' },
              { val: '100', sup: '%', label: 'Faith-Governed' },
            ].map(s => (
              <div className="stat-cell" key={s.label}>
                <div className="stat-value">{s.val}<sup>{s.sup}</sup></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SPLIT */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div style={{ position: 'relative' }}>
              <div className="img-composition">
                <img src={LEONARD} alt="Leonard M. Diana — Ministry Founder" className="img-composition-main" />
                <img src={I.prayer} alt="Prayer ministry" className="img-composition-accent" />
                <div className="img-composition-badge">
                  <div className="img-composition-badge-num">7+</div>
                  <div className="img-composition-badge-text">Years of<br />Ministry</div>
                </div>
              </div>
            </div>
            <div className="content-block">
              <span className="label">Our Founder</span>
              <div className="divider"><div className="divider-line" /><div className="divider-dot" /></div>
              <h2>Leonard M. Diana.<br /><em style={{ fontStyle: 'italic' }}>A Sacred Calling.</em></h2>
              <p>Leonard M. Diana founded Infinite Health &amp; Well-being as a <strong>completely separate sacred entity</strong> from his financial advisory work — a ministry governed by faith, covenant, and genuine care for the whole person.</p>
              <p>As the formal Ambassador of the Alignable Alliance of Hartford, CT, Leonard has spent years serving his community with the conviction that every person deserves access to healing — spirit, mind, and body. This ministry is the expression of that calling.</p>
              <div className="scripture-block">
                <p className="scripture-text">"Beloved, I pray that you may prosper in all things and be in health, just as your soul prospers."</p>
                <cite className="scripture-ref">— 3 John 1:2</cite>
              </div>
              <div className="feature-list">
                {[
                  { icon: <Feather size={18} />, cls: '', title: 'Spirit First', desc: 'All healing flows from and returns to faith — we are a ministry before we are a practice.' },
                  { icon: <Shield size={18} />, cls: '', title: 'Sacred Governance', desc: '508(c)(1)(a) status ensures every operation is spiritually and legally governed with integrity.' },
                  { icon: <Leaf size={18} />, cls: 'sage', title: 'Wholly Separate', desc: 'This ministry has zero crossover with wealth advisory work — it is a sacred space, period.' },
                ].map(f => (
                  <div className="feature-item" key={f.title}>
                    <div className={`feature-icon${f.cls ? ' ' + f.cls : ''}`}>{f.icon}</div>
                    <div className="feature-text"><h4>{f.title}</h4><p>{f.desc}</p></div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 36 }}>
                <Link to="/about" className="btn btn-dark">Our Full Story <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PMA NOTICE */}
      <section className="section-xs section-dark">
        <div className="container">
          <div className="pma-notice">
            <div className="pma-icon"><Lock size={20} /></div>
            <div>
              <h4 style={{ color: 'white' }}>Private Holistic Association — Member Access</h4>
              <p>Infinite Health &amp; Well-being operates as both a 508(c)(1)(a) Spiritual Healing Ministry and a Private Holistic Association (PHA). Full healing services, sacred programs, and practitioner access are available exclusively to members who have accepted our Member Covenant Agreement. Membership is free to begin — enter the covenant below.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HEALING SERVICES BENTO */}
      <section className="section section-ivory">
        <div className="container">
          <div className="section-head centered">
            <span className="label">Healing Services</span>
            <div className="divider center"><div className="divider-line" /><div className="divider-dot" /><div className="divider-line" /></div>
            <h2>Sacred, Integrative<br />Healing Pathways</h2>
            <p>Twelve healing modalities honoring the whole person — spirit, mind, and body — available to all covenant members.</p>
          </div>

          <div className="bento-grid">
            <Link to="/healing" className="bento-card col-span-7">
              <img src={I.prayer} alt="Spiritual Healing" className="bento-card-img short" />
              <div className="bento-card-body">
                <div className="bento-card-icon"><Feather /></div>
                <h3>Spiritual Healing &amp; Prayer</h3>
                <p>One-on-one and group prayer ministry — intercessory healing, prophetic encouragement, and spiritual restoration for every season of life. The cornerstone of everything we offer.</p>
                <div className="bento-arrow">Explore Service <ChevronRight size={14} /></div>
              </div>
            </Link>
            <Link to="/healing" className="bento-card col-span-5">
              <img src={I.herbal} alt="Herbal Medicine" className="bento-card-img short" />
              <div className="bento-card-body">
                <div className="bento-card-icon sage"><Leaf /></div>
                <h3>Herbal &amp; Natural Medicine</h3>
                <p>Plant-based healing wisdom — herbal protocols, nutritional guidance, and natural remedies rooted in traditional and integrative medicine.</p>
                <div className="bento-arrow">Explore Service <ChevronRight size={14} /></div>
              </div>
            </Link>

            <Link to="/healing" className="bento-card col-span-4 dark">
              <div className="bento-card-body">
                <div className="bento-card-icon"><Sun /></div>
                <h3>Energy &amp; Body Wellness</h3>
                <p>Reiki, breathwork, somatic healing, and body-based practices that release stored trauma and restore the body's natural balance.</p>
                <div className="bento-arrow">Explore Service <ChevronRight size={14} /></div>
              </div>
            </Link>
            <Link to="/healing" className="bento-card col-span-4">
              <img src={I.sound} alt="Sound Therapy" className="bento-card-img" />
              <div className="bento-card-body">
                <div className="bento-card-icon"><Wind /></div>
                <h3>Sound &amp; Vibrational Therapy</h3>
                <p>Frequency healing, sacred sound ceremonies, and vibrational tools that harmonize the nervous system and open channels of deep rest.</p>
                <div className="bento-arrow">Explore Service <ChevronRight size={14} /></div>
              </div>
            </Link>
            <Link to="/healing" className="bento-card col-span-4 accent">
              <div className="bento-card-body">
                <div className="bento-card-icon"><Users /></div>
                <h3>Community Healing Circles</h3>
                <p>Facilitated group healing experiences where members witness, share, and support each other's journey in a held, sacred container.</p>
                <div className="bento-arrow">Explore Service <ChevronRight size={14} /></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* RETREAT BANNER */}
      <section className="section-xs">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-bg" style={{ backgroundImage: `url(${I.retreat})` }} />
            <div className="cta-banner-glow" />
            <div className="cta-banner-content">
              <div className="cta-banner-text">
                <span className="label label-light">Annual Sacred Event</span>
                <div className="divider"><div className="divider-line" /><div className="divider-dot" /></div>
                <h2 style={{ color: 'white', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}>
                  Healing &amp; Wholeness Retreat 2026
                </h2>
                <p>Three days of prayer ministry, integrative healing workshops, nature immersion, and sacred community. Our most powerful annual gathering — Hartford, CT.</p>
                <Link to="/programs" className="btn btn-am" style={{ marginTop: 28, display: 'inline-flex' }}>
                  Reserve Your Place <ArrowRight size={16} />
                </Link>
              </div>
              <div style={{ flexShrink: 0 }}>
                <img src={I.nature} alt="Retreat" style={{ width: 300, height: 200, objectFit: 'cover', borderRadius: 20, opacity: 0.72 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVENANT / MEMBERSHIP */}
      <section className="section">
        <div className="container">
          <div className="section-head centered">
            <span className="label">The Covenant</span>
            <div className="divider center"><div className="divider-line" /><div className="divider-dot" /><div className="divider-line" /></div>
            <h2>Enter the Covenant<br />Community</h2>
            <p>Membership in our Private Holistic Association is free to begin. Three covenant levels — each deepening access to healing, community, and sacred resources.</p>
          </div>
          <div className="membership-deck">
            {[
              { tier: 'Seeker', name: 'Seeker', price: 'Free', period: 'always · open to all', desc: 'Begin your journey. Community resources and open ministry events.', features: ['Community Forum Access', 'Monthly Ministry Newsletter', 'Open Healing Events', 'Prayer Request Portal', 'Sacred Resource Library'], featured: false },
              { tier: 'Covenant', name: 'Member', price: '$33', period: '/ month · cancel anytime', badge: 'Most Chosen', desc: 'Full PHA membership — access to all healing services and sacred programs.', features: ['All Seeker Benefits', 'Healing Service Access', '4 Group Sessions / Month', 'Practitioner Booking', 'Member Sacred Library', 'Community Healing Circles', 'Retreat Discounts 30%'], featured: true },
              { tier: 'Guardian', name: 'Covenant Guardian', price: '$77', period: '/ month · cancel anytime', desc: '1-on-1 ministry, spiritual mentoring, and annual retreat included.', features: ['All Member Benefits', 'Monthly 1-on-1 Ministry', 'Spiritual Mentoring', 'Priority Practitioner Access', 'Annual Retreat Included', 'Governance Participation', 'Direct Access to Leonard'], featured: false },
            ].map(p => (
              <div className={`plan-card${p.featured ? ' featured' : ''}`} key={p.name}>
                {p.badge && <div className="plan-badge">{p.badge}</div>}
                <div className="plan-tier">{p.tier}</div>
                <div className="plan-name">{p.name}</div>
                <p className="plan-desc">{p.desc}</p>
                <div className="plan-price">{p.price}</div>
                <div className="plan-price-period">{p.period}</div>
                <div className="plan-divider" />
                <ul className="plan-features">
                  {p.features.map(f => <li className="plan-feature" key={f}><CheckCircle size={15} className="plan-feature-icon" />{f}</li>)}
                </ul>
                <Link to="/membership/apply" className={`btn ${p.featured ? 'btn-am' : 'btn-outline-am'} btn-lg`} style={{ width: '100%', justifyContent: 'center' }}>
                  Enter Covenant <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section section-ivory">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <span className="label">Ministry Team</span>
              <div className="divider"><div className="divider-line" /><div className="divider-dot" /></div>
              <h2>Sacred Practitioners.<br /><em style={{ fontStyle: 'italic' }}>Genuine Calling.</em></h2>
            </div>
            <Link to="/healing" className="btn btn-outline-am">Meet All Practitioners <ChevronRight size={14} /></Link>
          </div>
          <div className="team-grid">
            {[
              { img: LEONARD, name: 'Leonard M. Diana', role: 'Founder & Senior Minister', bio: 'Spiritual healer, holistic practitioner, and Alignable Alliance Ambassador of Hartford, CT. Founded this ministry from a sacred calling.' },
              { img: I.t1, name: 'Dr. Amara Johnson', role: 'Integrative Healing Practitioner', bio: 'Certified integrative health practitioner specializing in trauma-informed healing and energy-based wellness protocols.' },
              { img: I.t2, name: 'Marcus Williams', role: 'Prayer & Deliverance Minister', bio: 'Ordained minister specializing in intercessory prayer, deliverance ministry, and spiritual restoration for community members.' },
              { img: I.t3, name: 'Sarah Chen', role: 'Herbal Medicine & Nutrition', bio: 'Traditional herbalist and integrative nutritionist combining centuries-old plant wisdom with modern wellness science.' },
            ].map(p => (
              <Link to="/healing" className="team-card" key={p.name}>
                <div className="team-card-img-wrap">
                  <img src={p.img} alt={p.name} className="team-card-img" />
                  <div className="team-card-overlay" />
                  <div className="team-verified"><CheckCircle size={11} /> Ministry Approved</div>
                </div>
                <div className="team-card-body">
                  <div className="team-card-name">{p.name}</div>
                  <div className="team-card-role">{p.role}</div>
                  <p className="team-card-bio">{p.bio}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIES */}
      <section className="section">
        <div className="container">
          <div className="section-head centered">
            <span className="label">Testimonies</span>
            <div className="divider center"><div className="divider-line" /><div className="divider-dot" /><div className="divider-line" /></div>
            <h2>Lives Transformed</h2>
            <p>Authentic voices from the covenant community.</p>
          </div>
          <div className="testimonial-grid">
            {[
              { text: 'I came broken and desperate. This ministry gave me a sacred space to be truly healed — spirit, mind, and body. The prayer ministry work changed something deep inside me that no doctor could touch.', name: 'Amara J.', role: 'Covenant Member', img: I.t1, scripture: 'Psalm 147:3' },
              { text: 'The herbal protocols and energy work gave me back my body. I\'d been exhausted for years. Three months into membership I felt like a completely different person. This is real healing.', name: 'Marcus W.', role: 'Seeker → Covenant Guardian', img: I.t2, scripture: 'Isaiah 53:5' },
              { text: 'The healing circles changed how I experience community. For the first time I felt truly held by people walking the same road. I can\'t imagine my life without this covenant family.', name: 'Sarah C.', role: 'Covenant Member', img: I.t3, scripture: 'James 5:16' },
            ].map(t => (
              <div className="testimonial-card" key={t.name}>
                <div className="t-stars">
                  {[...Array(5)].map((_, i) => <svg key={i} viewBox="0 0 20 20"><path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.92 5.33L10 13.17l-4.78 2.55.92-5.33L2.27 6.62l5.34-.78z"/></svg>)}
                </div>
                <div className="t-mark">"</div>
                <p className="t-text">{t.text}</p>
                <div className="t-scripture">{t.scripture}</div>
                <div className="t-author">
                  <img src={t.img} alt={t.name} className="t-avatar" />
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE BANNER */}
      <section className="section-xs section-dark">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-bg" />
            <div className="cta-banner-glow" />
            <div className="cta-banner-content">
              <div className="cta-banner-text">
                <span className="label label-light">Support the Ministry</span>
                <div className="divider"><div className="divider-line" /><div className="divider-dot" /></div>
                <h2 style={{ color: 'white' }}>Sow into the Harvest</h2>
                <p>Your gift funds scholarship memberships, free community healing events, and the Ministry's outreach across Hartford and beyond. 100% mission-directed.</p>
                <div className="donate-amounts">
                  {['$11', '$33', '$77', '$111', 'Custom'].map(a => (
                    <button key={a} className={`donate-pill${donateAmt === a ? ' selected' : ''}`} onClick={() => setDonateAmt(a)}>{a}</button>
                  ))}
                </div>
              </div>
              <div className="cta-banner-actions">
                <Link to="/donate" className="btn btn-am btn-lg">
                  <Gift size={18} /> Give {donateAmt !== 'Custom' ? donateAmt : 'Now'}
                </Link>
                <Link to="/about" className="btn btn-ghost btn-lg" style={{ justifyContent: 'center' }}>
                  How We Steward Gifts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ═══════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════ */
function About() {
  return (
    <Layout>
      <PageHero img={I.community} label="Our Story" title="A Ministry Born" titleEm="from Calling." sub="Infinite Health & Well-being is not a business. It is a sacred response to a divine mandate — to heal, restore, and serve every person who comes through our doors." />
      <section className="section">
        <div className="container">
          <div className="split split-2-3">
            <div className="img-composition">
              <img src={LEONARD} alt="Leonard M. Diana" className="img-composition-main" />
            </div>
            <div className="content-block">
              <span className="label">Leonard M. Diana</span>
              <div className="divider"><div className="divider-line" /><div className="divider-dot" /></div>
              <h2>Minister · Holistic Practitioner · Community Ambassador</h2>
              <p>Leonard M. Diana founded Infinite Health &amp; Well-being as a <strong>wholly separate entity</strong> from his financial advisory work — a sacred, spiritually-governed space where healing comes first and commerce has no place.</p>
              <p>His calling grew out of years of witnessing community members in Hartford, CT suffer from conditions that conventional medicine addressed incompletely — and from a deep faith conviction that God intends wholeness for every person.</p>
              <p>As the formal Ambassador of the Alignable Alliance of Hartford CT, Leonard bridges faith, health, and community in a way that is rare: deeply rooted in scripture, informed by integrative science, and governed with the integrity of a 508(c)(1)(a) Ministry.</p>
              <div className="scripture-block">
                <p className="scripture-text">"Beloved, I pray that you may prosper in all things and be in health, just as your soul prospers."</p>
                <cite className="scripture-ref">— 3 John 1:2</cite>
              </div>
              <div style={{ marginTop: 24 }}>
                <Link to="/contact" className="btn btn-am btn-lg">Connect with Leonard <ArrowRight size={15} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <div className="section-head centered">
            <span className="label">Our Foundation</span>
            <div className="divider center"><div className="divider-line" /><div className="divider-dot" /><div className="divider-line" /></div>
            <h2>Ministry Charter &amp; Sacred Values</h2>
            <p>Every decision, program, and covenant relationship is filtered through these sacred commitments.</p>
          </div>
          <div className="trust-grid">
            {[
              { icon: <Feather />, title: 'Faith First', desc: 'All healing flows from and returns to faith. We are a ministry before we are a practice.', meta: 'Core Conviction' },
              { icon: <Shield />, title: 'Sacred Privacy', desc: 'As a Private Holistic Association, your healing journey is protected by member covenant.', meta: 'PHA Protected' },
              { icon: <Heart />, title: 'Whole Person Care', desc: 'We never separate spirit from mind from body. Every offering honors the complete sacred human.', meta: 'Integrative Standard' },
              { icon: <Users />, title: 'Covenant Community', desc: 'Healing happens in relationship. Our community is a sacred held container — not a marketplace.', meta: 'Community First' },
              { icon: <Globe />, title: 'Wholly Separate', desc: 'This ministry is entirely separate from any commercial or financial advisory entity. Period.', meta: 'Legal Separation' },
              { icon: <Award />, title: '508(c)(1)(a) Governed', desc: 'Every operation is conducted within our legally recognized Spiritual Healing Ministry framework.', meta: 'Faith Governance' },
            ].map(v => (
              <Link to="/trust-center" className="trust-item" key={v.title}>
                <div className="trust-item-icon">{v.icon}</div>
                <div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                  <div className="trust-meta"><CheckCircle size={11} />{v.meta}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ═══════════════════════════════════════════
   HEALING SERVICES
═══════════════════════════════════════════ */
function Healing() {
  return (
    <Layout>
      <PageHero img={I.healing} label="Healing Services" title="Sacred Integrative" titleEm="Care." sub="Twelve healing modalities available to all covenant members — offered through our 508(c)(1)(a) Ministry and Private Holistic Association." />
      <section className="section">
        <div className="container">
          {[
            { img: I.prayer, tag: 'Ministry Core', title: 'Spiritual Healing & Prayer', desc: 'Individual prayer ministry, intercessory healing sessions, prophetic encouragement, and spiritual restoration — the cornerstone of everything we offer. Available 1-on-1 and in small groups.' },
            { img: I.healing, tag: 'Energy & Body', title: 'Energy & Body Wellness', desc: 'Reiki, breathwork, somatic healing, and body-based practices that release stored trauma and restore the body\'s natural energetic balance. Practiced by certified ministry practitioners.' },
            { img: I.herbal, tag: 'Natural Medicine', title: 'Herbal & Natural Medicine', desc: 'Traditional and integrative herbal protocols, nutritional guidance, and plant-based remedies — rooted in centuries of healing wisdom and aligned with integrative medicine standards.' },
            { img: I.sound, tag: 'Vibrational Healing', title: 'Sound & Vibrational Therapy', desc: 'Frequency healing, sacred sound ceremonies, tuning fork therapy, and vibrational tools that restore harmony to the nervous system and open channels of deep rest and restoration.' },
            { img: I.community, tag: 'Community', title: 'Community Healing Circles', desc: 'Monthly group healing sessions where members share their journey, witness each other\'s healing, and receive collective ministry in a safe, moderated, covenant-held container.' },
            { img: I.retreat, tag: 'Immersive Experiences', title: 'Guided Healing Retreats', desc: 'Multi-day retreat experiences combining prayer, nature immersion, integrative healing practices, and community for deep, lasting transformation. Annual and seasonal offerings.' },
          ].map(p => (
            <Link to="/healing" className="program-row" key={p.title}>
              <img src={p.img} alt={p.title} className="program-row-img" />
              <div className="program-row-body">
                <span className="program-type">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="program-meta">
                  <span><CheckCircle size={14} />Covenant Members Only</span>
                  <span><Shield size={14} />PHA Protected</span>
                  <span><Heart size={14} />Faith-Governed</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

/* ═══════════════════════════════════════════
   MINISTRY PAGE
═══════════════════════════════════════════ */
function Ministry() {
  return (
    <Layout>
      <PageHero img={I.prayer} label="Our Ministry" title="508(c)(1)(a) Spiritual" titleEm="Healing Ministry." sub="A faith-governed, legally recognized Spiritual Healing Ministry and Private Holistic Association — distinct from any commercial entity." />
      <section className="section">
        <div className="container">
          <div className="split split-3-2">
            <div className="content-block">
              <span className="label">What is a 508(c)(1)(a)?</span>
              <div className="divider"><div className="divider-line" /><div className="divider-dot" /></div>
              <h2>A Legally Distinct<br /><em style={{ fontStyle: 'italic' }}>Sacred Entity</em></h2>
              <p>A 508(c)(1)(a) organization is a Mandatory Exception church or ministry under the Internal Revenue Code — automatically tax-exempt without requiring a 501(c)(3) application. It operates under the Free Exercise Clause of the First Amendment.</p>
              <p>This designation allows Infinite Health &amp; Well-being to operate as a genuine faith-based healing ministry — not a commercial healthcare business. This is fundamental to understanding what we are and what we offer.</p>
              <p>Our Private Holistic Association (PHA) structure further protects members under private contract law, allowing access to healing modalities within the sacred covenant of the Association.</p>
              <div className="feature-list">
                {[
                  { icon: <Shield size={18} />, cls: '', title: 'Legally Separate', desc: 'Entirely distinct from An Infinite Abundance Wealth Advisory. Zero commercial crossover.' },
                  { icon: <Lock size={18} />, cls: '', title: 'Member-Protected', desc: 'PHA membership agreement governs all services under private contract law.' },
                  { icon: <Feather size={18} />, cls: 'sage', title: 'Faith-Governed', desc: 'All operations guided by scripture, prayer, and the Ministry Charter.' },
                ].map(f => (
                  <div className="feature-item" key={f.title}>
                    <div className={`feature-icon${f.cls ? ' ' + f.cls : ''}`}>{f.icon}</div>
                    <div className="feature-text"><h4>{f.title}</h4><p>{f.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={I.nature} alt="Ministry" style={{ width: '100%', borderRadius: 24, aspectRatio: '3/4', objectFit: 'cover', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ═══════════════════════════════════════════
   MEMBERSHIP / COVENANT
═══════════════════════════════════════════ */
function Membership() {
  const loc = useLocation();
  if (loc.pathname.includes('/apply')) return <MembershipApply />;
  return (
    <Layout>
      <PageHero img={I.community} label="The Covenant" title="Enter the Covenant" titleEm="Community." sub="PHA membership is the gateway to all healing services. Free to begin. Governed by sacred covenant, not commercial terms." />
      <section className="section">
        <div className="container">
          <div className="membership-deck">
            {[
              { tier: 'Seeker', name: 'Seeker', price: 'Free', period: 'always · open to all', desc: 'Enter the covenant. Access community resources and open ministry events.', features: ['Community Forum Access', 'Monthly Ministry Newsletter', 'Open Healing Events', 'Prayer Request Portal', 'Sacred Resource Library'], featured: false },
              { tier: 'Covenant', name: 'Member', price: '$33', period: '/ month · cancel anytime', badge: 'Most Chosen', desc: 'Full PHA membership with access to all healing services and programs.', features: ['All Seeker Benefits', 'Healing Service Access', '4 Group Sessions / Month', 'Practitioner Booking', 'Member Sacred Library', 'Community Healing Circles', 'Retreat Discounts 30%'], featured: true },
              { tier: 'Guardian', name: 'Covenant Guardian', price: '$77', period: '/ month · cancel anytime', desc: 'Deep covenant — 1-on-1 ministry and annual retreat included.', features: ['All Member Benefits', 'Monthly 1-on-1 Ministry', 'Spiritual Mentoring', 'Priority Practitioner Access', 'Annual Retreat Included', 'Governance Participation', 'Direct Access to Leonard'], featured: false },
            ].map(p => (
              <div className={`plan-card${p.featured ? ' featured' : ''}`} key={p.name}>
                {p.badge && <div className="plan-badge">{p.badge}</div>}
                <div className="plan-tier">{p.tier}</div>
                <div className="plan-name">{p.name}</div>
                <p className="plan-desc">{p.desc}</p>
                <div className="plan-price">{p.price}</div>
                <div className="plan-price-period">{p.period}</div>
                <div className="plan-divider" />
                <ul className="plan-features">
                  {p.features.map(f => <li className="plan-feature" key={f}><CheckCircle size={15} className="plan-feature-icon" />{f}</li>)}
                </ul>
                <Link to="/membership/apply" className={`btn ${p.featured ? 'btn-am' : 'btn-outline-am'} btn-lg`} style={{ width: '100%', justifyContent: 'center' }}>
                  Enter Covenant <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function MembershipApply() {
  return (
    <Layout>
      <PageHero img={I.community} label="Enter the Covenant" title="Your Journey" titleEm="Begins Here." sub="Complete this short form and a member of our ministry team will welcome you within 24 hours." />
      <section className="section section-dark">
        <div className="container">
          <div className="contact-wrap">
            <div className="contact-side">
              <span className="label label-light">Covenant Application</span>
              <div className="divider"><div className="divider-line" /><div className="divider-dot" /></div>
              <h2>We're Honored<br />You're Here</h2>
              <p>This is a sacred space. Entering the covenant means joining a community committed to wholeness — spirit, mind, and body.</p>
              {[
                { icon: <CheckCircle size={18} />, t: 'Same-Day Access', d: 'Community forum and sacred resource library immediately' },
                { icon: <Lock size={18} />, t: 'Fully Confidential', d: 'All covenant matters held in sacred privacy' },
                { icon: <Heart size={18} />, t: 'No Pressure', d: 'Seeker membership is free — no commitment required' },
              ].map(i => (
                <div className="contact-detail-item" key={i.t}>
                  <div className="contact-detail-icon">{i.icon}</div>
                  <div className="contact-detail-text"><h5>{i.t}</h5><p>{i.d}</p></div>
                </div>
              ))}
            </div>
            <div className="contact-card">
              <h3>Covenant Application</h3>
              <p>No commitment required for the free Seeker level.</p>
              <div className="form-row2">
                <div className="field"><label>First Name</label><input type="text" placeholder="Your name" /></div>
                <div className="field"><label>Last Name</label><input type="text" placeholder="Last name" /></div>
              </div>
              <div className="field"><label>Email Address</label><input type="email" placeholder="your@email.com" /></div>
              <div className="field"><label>Covenant Level</label>
                <select>
                  <option>Seeker (Free)</option>
                  <option>Member ($33/month)</option>
                  <option>Covenant Guardian ($77/month)</option>
                </select>
              </div>
              <div className="field"><label>What Brings You Here</label>
                <select>
                  <option>Spiritual Healing & Prayer</option>
                  <option>Holistic Health & Wellness</option>
                  <option>Community & Connection</option>
                  <option>Herbal & Natural Healing</option>
                  <option>Guidance & Discernment</option>
                  <option>All of the Above</option>
                </select>
              </div>
              <div className="field"><label>Share Your Heart</label><textarea placeholder="Tell us a little about what you're seeking..." /></div>
              <button className="btn btn-am btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                Submit Application <ArrowRight size={16} />
              </button>
              <p style={{ fontSize: 12, color: 'var(--text-faint)', textAlign: 'center', marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <Lock size={12} /> All covenant applications held in sacred confidence
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ═══════════════════════════════════════════
   PROGRAMS
═══════════════════════════════════════════ */
function Programs() {
  return (
    <Layout>
      <PageHero img={I.prog1} label="Programs & Events" title="Experiences That" titleEm="Transform Lives." sub="Immersive healing programs, sacred events, and structured spiritual growth tracks for every season of your journey." />
      <section className="section">
        <div className="container">
          {[
            { img: I.prog1, tag: 'Annual Sacred Event', title: 'Healing & Wholeness Retreat 2026', desc: 'Three days of prayer ministry, integrative healing workshops, nature immersion, sound healing, and sacred community. Our most powerful annual gathering — Hartford, CT area.', date: 'Oct 2026 (TBD)', dur: '3 Days', spots: 'Limited — 40 covenant members' },
            { img: I.prog2, tag: 'Ongoing Program', title: 'The 90-Day Wholeness Journey', desc: 'Leonard\'s signature 90-day guided program — integrating spiritual formation, holistic healing practices, and community accountability for deep, lasting transformation across all dimensions of life.', date: 'Starts monthly', dur: '90 Days', spots: 'Open enrollment' },
            { img: I.prog3, tag: 'Workshop Series', title: 'Herbal Medicine & Natural Healing Series', desc: 'A 6-week live workshop series covering plant medicine foundations, herbal protocols, nutritional healing, and integrative wellness practices — guided by certified ministry practitioners.', date: 'Rolling start', dur: '6 Weeks', spots: '20 per cohort' },
            { img: I.prog4, tag: 'Learning Track', title: 'Spirit, Mind & Body Foundations', desc: 'A self-paced learning track covering the biblical and holistic foundations of complete wholeness — spiritual formation, emotional health, physical wellness, and community covenant.', date: 'Self-paced', dur: '8 Modules', spots: 'Unlimited access' },
          ].map(p => (
            <Link to="/programs" className="program-row" key={p.title}>
              <img src={p.img} alt={p.title} className="program-row-img" />
              <div className="program-row-body">
                <span className="program-type">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="program-meta">
                  <span><Clock size={14} />{p.date}</span>
                  <span><BookOpen size={14} />{p.dur}</span>
                  <span><Users size={14} />{p.spots}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

/* ═══════════════════════════════════════════
   RESOURCES
═══════════════════════════════════════════ */
function Resources() {
  return (
    <Layout>
      <PageHero img={I.nature} label="Resources" title="Sacred Teachings" titleEm="& Resources." sub="Scripture, healing guides, devotionals, and educational materials — freely available to all who seek." />
      <section className="section">
        <div className="container">
          <div className="article-grid">
            {[
              { img: I.res1, tag: 'Scripture & Healing', title: 'What the Bible Says About Divine Health', desc: 'A curated scriptural foundation for healing — exploring what God\'s word says about wholeness, restoration, and the ministry of healing.', time: '8 min read' },
              { img: I.res2, tag: 'Herbal Wisdom', title: 'Five Foundational Herbs for Natural Healing', desc: 'An introduction to plant-based healing: five foundational herbs, their applications, and how they support the body\'s God-given healing capacity.', time: '6 min read' },
              { img: I.res3, tag: 'Sound Healing', title: 'The Science and Spirit of Sound Therapy', desc: 'How frequency and vibration affect the body at a cellular level — and why sacred sound has been used in healing traditions across millennia.', time: '7 min read' },
              { img: I.prayer, tag: 'Prayer Ministry', title: 'How to Receive Healing Prayer: A Practical Guide', desc: 'What to expect in a prayer ministry session, how to prepare your heart, and how to steward healing after the session is over.', time: '9 min read' },
              { img: I.community, tag: 'Covenant Community', title: 'Why Healing Requires Community', desc: 'The science and scripture behind communal healing — why isolation prolongs suffering and covenant community accelerates wholeness.', time: '6 min read' },
              { img: I.energy, tag: 'Energy Wellness', title: 'Understanding Trauma-Stored in the Body', desc: 'How unprocessed trauma manifests physically, and the somatic and spiritual practices that safely release it and restore bodily peace.', time: '10 min read' },
            ].map(a => (
              <Link to="/resources" className="article-card" key={a.title}>
                <div className="article-img-wrap"><img src={a.img} alt={a.title} className="article-img" /></div>
                <div className="article-body">
                  <span className="article-tag">{a.tag}</span>
                  <h4>{a.title}</h4>
                  <p>{a.desc}</p>
                  <div className="article-foot">
                    <span><Clock size={12} />{a.time}</span>
                    <span style={{ color: 'var(--am-500)', fontWeight: 600, fontSize: 12 }}>Read Article <ChevronRight size={12} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ═══════════════════════════════════════════
   TRUST CENTER
═══════════════════════════════════════════ */
function TrustCenter() {
  return (
    <Layout>
      <PageHero img={I.trust} label="Trust Center" title="Governed with" titleEm="Sacred Transparency." sub="Every policy, record, and governance document — open to all covenant members. Trust is not claimed; it is demonstrated through faithfulness." />
      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <span className="label">Ministry Governance</span>
            <div className="divider"><div className="divider-line" /><div className="divider-dot" /></div>
            <h2>Our Commitment to Sacred Accountability</h2>
            <p>We operate within a faith-first governance framework that prioritizes member safety, spiritual integrity, and complete transparency at every level of the ministry.</p>
          </div>
          <div className="trust-grid">
            {[
              { icon: <FileText />, title: 'Ministry Charter & Manifesto', desc: 'Our founding document — values, governance structure, decision-making processes, and covenant member rights.', meta: 'Reviewed Annually' },
              { icon: <Shield />, title: '508(c)(1)(a) Documentation', desc: 'Full documentation of our Spiritual Healing Ministry legal status and its implications for members, practitioners, and donors.', meta: 'Legally Current' },
              { icon: <Lock />, title: 'Privacy & Sacred Confidentiality', desc: 'A plain-language policy explaining exactly how covenant member information is held, protected, and never shared.', meta: 'Covenant Protected' },
              { icon: <Heart />, title: 'PHA Member Rights', desc: 'A complete summary of your rights as a Private Holistic Association member under our covenant agreement and private contract law.', meta: 'Member First' },
              { icon: <Award />, title: 'Practitioner Ethics Code', desc: 'The full standards, verification requirements, and ethical code governing every practitioner admitted to our ministry network.', meta: 'Reviewed Quarterly' },
              { icon: <Users />, title: 'Grievance & Pastoral Care Process', desc: 'A clear, safe, confidential process for any member to raise concerns, request pastoral support, or seek ministry review.', meta: '24h Response SLA' },
            ].map(t => (
              <Link to="/trust-center" className="trust-item" key={t.title}>
                <div className="trust-item-icon">{t.icon}</div>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                  <div className="trust-meta"><CheckCircle size={11} />{t.meta}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ═══════════════════════════════════════════
   DONATE
═══════════════════════════════════════════ */
function Donate() {
  const [amt, setAmt] = useState('$33');
  return (
    <Layout>
      <PageHero img={I.community} label="Support the Ministry" title="Sow into the" titleEm="Harvest." sub="Your gift supports free healing services, scholarship memberships, and the Ministry's reach into Hartford and beyond." />
      <section className="section">
        <div className="container">
          <div className="contact-wrap" style={{ gridTemplateColumns: '1fr 1.4fr' }}>
            <div className="content-block">
              <span className="label">Your Impact</span>
              <div className="divider"><div className="divider-line" /><div className="divider-dot" /></div>
              <h2>Where Your Gift Goes</h2>
              <div className="feature-list">
                {[
                  { icon: <Award size={18} />, cls: '', title: 'Scholarship Memberships', d: '$11 provides one month of Seeker membership to a Hartford community member who cannot afford it.' },
                  { icon: <Users size={18} />, cls: '', title: 'Free Healing Events', d: '$33 sponsors a free community healing circle reaching up to 20 local residents.' },
                  { icon: <BookOpen size={18} />, cls: 'sage', title: 'Ministry Resources', d: '$77 funds the creation of a new healing guide or sacred educational resource.' },
                  { icon: <Globe size={18} />, cls: 'sage', title: 'Outreach Expansion', d: '$111 supports a full month of community outreach programs beyond Hartford.' },
                ].map(i => (
                  <div className="feature-item" key={i.title}>
                    <div className={`feature-icon${i.cls ? ' ' + i.cls : ''}`}>{i.icon}</div>
                    <div className="feature-text"><h4>{i.title}</h4><p>{i.d}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="contact-card">
              <h3>Make a Sacred Gift</h3>
              <p>Every gift — regardless of size — creates ripples of healing in our community.</p>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 10 }}>Select Amount</label>
                <div className="donate-amounts" style={{ marginTop: 0 }}>
                  {['$11', '$33', '$77', '$111', 'Custom'].map(a => (
                    <button key={a} className={`donate-pill${amt === a ? ' selected' : ''}`} onClick={() => setAmt(a)} style={{ background: amt === a ? 'linear-gradient(135deg,var(--am-400),var(--am-700))' : 'rgba(126,77,163,0.06)', border: amt === a ? 'none' : '1.5px solid var(--border-dark)', color: amt === a ? 'white' : 'var(--am-600)' }}>{a}</button>
                  ))}
                </div>
              </div>
              <div className="form-row2">
                <div className="field"><label>First Name</label><input type="text" placeholder="Jane" /></div>
                <div className="field"><label>Last Name</label><input type="text" placeholder="Smith" /></div>
              </div>
              <div className="field"><label>Email</label><input type="email" placeholder="jane@example.com" /></div>
              <div className="field"><label>Dedication (Optional)</label><input type="text" placeholder="In honor / memory of..." /></div>
              <button className="btn btn-am btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                <Gift size={18} /> Complete Sacred Gift
              </button>
              <p style={{ fontSize: 12, color: 'var(--text-faint)', textAlign: 'center', marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <Shield size={12} /> Secure · Tax-deductible under 508(c)(1)(a) · 100% mission-directed
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ═══════════════════════════════════════════
   CONTACT
═══════════════════════════════════════════ */
function Contact() {
  return (
    <Layout>
      <section className="section section-dark" style={{ paddingTop: 'calc(var(--nav-height) + 80px)' }}>
        <div className="container">
          <div className="contact-wrap">
            <div className="contact-side">
              <span className="label label-light">Reach Out</span>
              <div className="divider"><div className="divider-line" /><div className="divider-dot" /></div>
              <h2>We're Here to<br /><em style={{ fontStyle: 'italic' }}>Serve You</em></h2>
              <p>Whether you need prayer, have questions about covenant membership, or want to connect with a healing practitioner — we are here and we care about your journey.</p>
              {[
                { icon: <Mail size={18} />, t: 'Email the Ministry', d: 'ministry@infinitehealthwellbeing.org' },
                { icon: <Phone size={18} />, t: 'Call Us', d: 'Hartford, CT — by appointment' },
                { icon: <MapPin size={18} />, t: 'Location', d: 'Hartford, CT — serving locally and online' },
                { icon: <Heart size={18} />, t: 'Prayer Requests', d: 'Every request prayed over — anytime' },
              ].map(d => (
                <div className="contact-detail-item" key={d.t}>
                  <div className="contact-detail-icon">{d.icon}</div>
                  <div className="contact-detail-text"><h5>{d.t}</h5><p>{d.d}</p></div>
                </div>
              ))}
            </div>
            <div className="contact-card">
              <h3>Send a Message</h3>
              <p>A member of our ministry team will respond personally within one business day.</p>
              <div className="form-row2">
                <div className="field"><label>First Name</label><input type="text" placeholder="Jane" /></div>
                <div className="field"><label>Last Name</label><input type="text" placeholder="Smith" /></div>
              </div>
              <div className="field"><label>Email Address</label><input type="email" placeholder="jane@example.com" /></div>
              <div className="field"><label>Type of Request</label>
                <select>
                  <option>General Inquiry</option>
                  <option>Prayer Request</option>
                  <option>Covenant / Membership</option>
                  <option>Healing Service Booking</option>
                  <option>Retreat Information</option>
                  <option>Ministry Partnership</option>
                  <option>Donation / Stewardship</option>
                </select>
              </div>
              <div className="field"><label>Your Message</label><textarea placeholder="Share what's on your heart..." /></div>
              <button className="btn btn-am btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message <ArrowRight size={16} />
              </button>
              <p style={{ fontSize: 12, color: 'var(--text-faint)', textAlign: 'center', marginTop: 14 }}>
                All communications held in sacred confidence under our Ministry Covenant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ═══════════════════════════════════════════
   APP ROUTER
═══════════════════════════════════════════ */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                  element={<Home />} />
        <Route path="/about"             element={<About />} />
        <Route path="/ministry"          element={<Ministry />} />
        <Route path="/healing"           element={<Healing />} />
        <Route path="/membership"        element={<Membership />} />
        <Route path="/membership/:slug"  element={<Membership />} />
        <Route path="/programs"          element={<Programs />} />
        <Route path="/programs/:slug"    element={<Programs />} />
        <Route path="/resources"         element={<Resources />} />
        <Route path="/resources/:slug"   element={<Resources />} />
        <Route path="/trust-center"      element={<TrustCenter />} />
        <Route path="/trust-center/:slug" element={<TrustCenter />} />
        <Route path="/donate"            element={<Donate />} />
        <Route path="/contact"           element={<Contact />} />
        <Route path="*"                  element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
