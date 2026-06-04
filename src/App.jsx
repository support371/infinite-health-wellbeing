import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Heart, Shield, Star, Users, BookOpen, Award, Globe, ArrowRight,
  CheckCircle, ChevronRight, Mail, Phone, MapPin, Clock, Sun,
  Leaf, Feather, Wind, Droplets, Flame, Menu, X, Gift, Lock
} from 'lucide-react';
import './styles.css';

const LEONARD_IMG = "https://base44.app/api/apps/69d42975b7b1794c3dc01661/files/mp/public/69d42975b7b1794c3dc01661/74db28267_file_30.jpg";

const I = {
  hero1:    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80',
  heroA:    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&q=80',
  heroB:    'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900&q=80',
  about1:   'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=900&q=80',
  healing:  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80',
  prayer:   'https://images.unsplash.com/photo-1510325081338-c5d95dfa1b39?w=900&q=80',
  nature:   'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80',
  herbal:   'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=900&q=80',
  community:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80',
  sound:    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900&q=80',
  retreat:  'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=900&q=80',
  t1:       'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  t2:       'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  t3:       'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80',
};

/* ═══════════════════════════════════
   NAVBAR
═══════════════════════════════════ */
const NAV_LINKS = [
  { to: '/',           label: 'Home' },
  { to: '/about',      label: 'About' },
  { to: '/ministry',   label: 'Ministry' },
  { to: '/healing',    label: 'Healing Services' },
  { to: '/membership', label: 'Covenant' },
  { to: '/resources',  label: 'Resources' },
  { to: '/contact',    label: 'Contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => setOpen(false), [loc]);

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="nav-brand">
            <div className="nav-emblem">
              <span className="nav-emblem-glyph">✦</span>
            </div>
            <div className="nav-wordmark">
              <span className="nav-wordmark-primary">Infinite Health</span>
              <span className="nav-wordmark-secondary">& Well-being Ministry</span>
            </div>
          </Link>

          <ul className="nav-links">
            {NAV_LINKS.slice(1).map(l => (
              <li key={l.to}>
                <Link to={l.to} className={`nav-link${loc.pathname === l.to ? ' active' : ''}`}>{l.label}</Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <Link to="/membership" className="btn btn-outline-sacred btn-sm">Enter Covenant</Link>
          </div>

          <button className={`nav-hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV_LINKS.map(l => (
          <Link key={l.to} to={l.to} className="mobile-nav-link">{l.label}</Link>
        ))}
        <div className="mobile-menu-footer">
          <Link to="/membership" className="btn btn-sacred btn-lg" style={{ justifyContent: 'center' }}>
            Enter the Covenant <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════
   FOOTER
═══════════════════════════════════ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <div className="nav-emblem" style={{ width: 40, height: 40 }}>
                <span className="nav-emblem-glyph" style={{ fontSize: 15 }}>✦</span>
              </div>
              <div>
                <div className="footer-brand-name">Infinite Health &amp; Well-being</div>
                <div className="footer-brand-sub">508(c)(1)(a) Spiritual Healing Ministry</div>
              </div>
            </div>
            <p className="footer-about">
              A sacred 508(c)(1)(a) Spiritual Healing Ministry and Private Holistic Association — offering integrative healing for body, mind, and spirit through faith, nature, and community.
            </p>
            <div className="footer-socials">
              {[{ l: 'X', h: '#' }, { l: 'f', h: '#' }, { l: '▶', h: '#' }, { l: '📷', h: '#' }].map(s => (
                <a key={s.l} href={s.h} className="footer-social">{s.l}</a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h5>Ministry</h5>
            <ul>
              {[['Our Mission', '/about'], ['Leadership', '/about'], ['Ministry Charter', '/ministry'], ['508(c)(1)(a) Status', '/ministry'], ['Governance', '/ministry']].map(([l, h]) => (
                <li key={l}><Link to={h}>{l}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Healing Services</h5>
            <ul>
              {[['Spiritual Healing', '/healing'], ['Energy Wellness', '/healing'], ['Herbal & Natural', '/healing'], ['Sound Therapy', '/healing'], ['Guided Retreats', '/healing']].map(([l, h]) => (
                <li key={l}><Link to={h}>{l}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Community</h5>
            <ul>
              {[['Enter Covenant', '/membership'], ['Resources', '/resources'], ['Prayer Requests', '/contact'], ['Donate', '/donate'], ['Contact', '/contact']].map(([l, h]) => (
                <li key={l}><Link to={h}>{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Infinite Health &amp; Well-being. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Use', 'Member Agreement'].map(l => (
              <a href="#" key={l}>{l}</a>
            ))}
          </div>
          <div className="footer-exempt">
            <Shield size={12} />
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

/* ═══════════════════════════════════
   PAGE HERO COMPONENT
═══════════════════════════════════ */
function PageHero({ img, label, title, sub }) {
  return (
    <div className="page-hero">
      {img && <div className="page-hero-bg" style={{ backgroundImage: `url(${img})` }} />}
      <div className="page-hero-overlay" />
      <div className="container">
        <div className="page-hero-content">
          <span className="label-sacred label-light">{label}</span>
          <div className="ornament"><div className="ornament-line" /><div className="ornament-gem" /></div>
          <h1>{title}</h1>
          {sub && <p>{sub}</p>}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════ */
function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-shimmer" />

        <div className="hero-image-cluster">
          <img src={I.heroA} alt="" className="hero-cluster-img" />
          <img src={I.healing} alt="" className="hero-cluster-img" />
        </div>

        <div className="hero-content">
          <div className="hero-ministry-badge">
            <div className="hero-ministry-dot" />
            <span>508(c)(1)(a) Spiritual Healing Ministry · Private Holistic Association</span>
          </div>

          <h1 className="hero-headline">
            Infinite <em>Health</em><br />
            &amp; <em>Well-being</em>
          </h1>

          <p className="hero-verse">
            "I came that they may have life, and have it abundantly."
            <cite>— John 10:10</cite>
          </p>

          <div className="hero-cta-row">
            <Link to="/healing" className="btn btn-sacred btn-lg">
              Explore Healing Services <ArrowRight size={18} />
            </Link>
            <Link to="/membership" className="btn btn-ghost-light btn-lg">
              Enter the Covenant
            </Link>
          </div>

          <div className="hero-pillars">
            {[
              { val: '7', sup: '+', label: 'Years of Ministry' },
              { val: '500', sup: '+', label: 'Lives Touched' },
              { val: '12', sup: '+', label: 'Healing Modalities' },
            ].map((p, i) => (
              <React.Fragment key={p.label}>
                {i > 0 && <div className="hero-pillar-divider" />}
                <div className="hero-pillar">
                  <div className="hero-pillar-val">{p.val}<span>{p.sup}</span></div>
                  <div className="hero-pillar-label">{p.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* PMA NOTICE */}
      <section className="section-xs section-sacred">
        <div className="container">
          <div className="pma-notice">
            <div className="pma-icon"><Lock size={20} /></div>
            <div>
              <h4>Private Holistic Association — Member Access</h4>
              <p>Infinite Health &amp; Well-being operates as a Private Holistic Association (PHA) and a 508(c)(1)(a) Spiritual Healing Ministry. Full healing services, sacred programs, and practitioner access are available exclusively to members who have accepted our Member Covenant Agreement. Membership is free to join.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MINISTRY PILLARS */}
      <section className="section">
        <div className="container">
          <div className="sec-head centered">
            <span className="label-sacred">Our Sacred Pillars</span>
            <div className="ornament center"><div className="ornament-line" /><div className="ornament-gem" /><div className="ornament-line" /></div>
            <h2>A Ministry of the Whole Person</h2>
            <p>We honor the sacred wholeness of every human being — spirit, mind, body, and community. Every offering flows from this conviction.</p>
          </div>
          <div className="pillars-grid">
            {[
              { icon: <Feather size={24} />, title: 'Spirit', desc: 'Sacred healing rooted in faith, prayer, and spiritual renewal that anchors all other healing.' },
              { icon: <Heart size={24} />, title: 'Mind', desc: 'Integrative mental and emotional wellness — releasing trauma, restoring clarity, cultivating peace.' },
              { icon: <Leaf size={24} />, title: 'Body', desc: 'Natural, holistic care honoring the body as sacred — through herbs, movement, nutrition, and energy work.' },
              { icon: <Users size={24} />, title: 'Community', desc: 'Sacred community where healing is witnessed, supported, and multiplied through covenant relationship.' },
              { icon: <Sun size={24} />, title: 'Purpose', desc: 'Aligning each member with their divine calling — the full expression of their God-given potential.' },
            ].map(p => (
              <div className="pillar-cell" key={p.title}>
                <div className="pillar-icon">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SPLIT */}
      <section className="section section-cream">
        <div className="container">
          <div className="split split-2-3">
            <div className="founder-frame">
              <img src={LEONARD_IMG} alt="Leonard M. Diana — Ministry Founder" className="founder-img" />
              <div className="founder-glow" />
              <div className="founder-scroll">
                <div className="founder-scroll-num">7+</div>
                <div className="founder-scroll-text">Years of<br />Ministry</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <span className="label-sacred">Our Founder</span>
              <div className="ornament"><div className="ornament-line" /><div className="ornament-gem" /></div>
              <h2>Leonard M. Diana</h2>
              <h4 style={{ color: 'var(--amethyst-600)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                Minister · Holistic Practitioner · Community Ambassador
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.82 }}>
                Leonard M. Diana is a minister, holistic health advocate, and community servant who founded Infinite Health &amp; Well-being on the sacred conviction that every person deserves access to healing — spirit, mind, and body.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.82 }}>
                As the formal Ambassador of the Alignable Alliance of Hartford, CT, Leonard has spent years building bridges between faith communities, holistic practitioners, and the people who need them most. His ministry is an expression of calling — not commerce.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.82 }}>
                Infinite Health &amp; Well-being is intentionally kept <em>separate</em> from his wealth advisory work — this is a sacred space, governed by covenant, open to all who seek it.
              </p>
              <div style={{ marginTop: 12 }}>
                <Link to="/about" className="btn btn-sacred">Our Story <ArrowRight size={15} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEALING SERVICES */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
            <div className="sec-head" style={{ marginBottom: 0 }}>
              <span className="label-sacred">Healing Services</span>
              <div className="ornament"><div className="ornament-line" /><div className="ornament-gem" /></div>
              <h2>Sacred, Integrative<br /><em style={{ fontStyle: 'italic' }}>Healing Pathways</em></h2>
            </div>
            <Link to="/healing" className="btn btn-outline-sacred">All Services <ChevronRight size={14} /></Link>
          </div>
          <div className="ministry-grid">
            {[
              { img: I.prayer, icon: <Feather size={20} />, iconClass: '', title: 'Spiritual Healing & Prayer', desc: 'One-on-one and group prayer ministry — intercessory healing, prophetic encouragement, and spiritual restoration for every season of life.', tag: 'Ministry Core' },
              { img: I.healing, icon: <Sun size={20} />, iconClass: 'sage', title: 'Energy & Body Wellness', desc: 'Integrative energy work, breathwork, and body-based healing practices that release stored tension and restore the body\'s natural balance.', tag: 'Holistic Care' },
              { img: I.herbal, icon: <Leaf size={20} />, iconClass: 'sage', title: 'Herbal & Natural Medicine', desc: 'Plant-based healing wisdom — herbal protocols, nutritional guidance, and natural remedies rooted in traditional and integrative medicine.', tag: 'Natural Healing' },
              { img: I.sound, icon: <Wind size={20} />, iconClass: '', title: 'Sound & Vibrational Therapy', desc: 'Sacred sound ceremonies, frequency healing, and vibrational tools that harmonize the nervous system and open channels of deep rest.', tag: 'Sacred Practice' },
              { img: I.community, icon: <Users size={20} />, iconClass: '', title: 'Community Healing Circles', desc: 'Facilitated group healing experiences where members witness, share, and support each other\'s journey in a held, sacred container.', tag: 'Community' },
              { img: I.retreat, icon: <Heart size={20} />, iconClass: 'sage', title: 'Guided Healing Retreats', desc: 'Immersive multi-day retreat experiences combining prayer, nature, integrative practices, and community for deep transformation.', tag: 'Retreats' },
            ].map(s => (
              <Link to="/healing" className="ministry-card" key={s.title}>
                <img src={s.img} alt={s.title} className="ministry-card-img" />
                <div className="ministry-card-body">
                  <div className={`ministry-card-icon${s.iconClass ? ' ' + s.iconClass : ''}`}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="card-link">Explore <ChevronRight size={12} /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COVENANT / MEMBERSHIP */}
      <section className="section section-mist">
        <div className="container">
          <div className="sec-head centered">
            <span className="label-sacred">The Covenant</span>
            <div className="ornament center"><div className="ornament-line" /><div className="ornament-gem" /><div className="ornament-line" /></div>
            <h2>Enter the Covenant Community</h2>
            <p>Membership in our Private Holistic Association is free to begin. We offer three covenant levels — each deepening access to healing, community, and sacred resources.</p>
          </div>
          <div className="covenant-grid">
            {[
              {
                tier: 'Seeker', name: 'Seeker', price: 'Free', period: 'always · open to all',
                desc: 'Begin your journey. Access to community resources and open ministry events.',
                features: ['Community Forum', 'Monthly Newsletter', 'Open Healing Events', 'Prayer Request Portal', 'Resource Library Access'],
                featured: false,
              },
              {
                tier: 'Covenant', name: 'Member', price: '$33', period: '/ month · cancel anytime',
                badge: 'Most Chosen',
                desc: 'Full PHA membership with access to all healing services and sacred programs.',
                features: ['All Seeker Benefits', 'Healing Service Access', '4 Group Sessions / Month', 'Practitioner Booking', 'Member Sacred Library', 'Community Healing Circles', 'Retreat Discounts 30%'],
                featured: true,
              },
              {
                tier: 'Guardian', name: 'Covenant Guardian', price: '$77', period: '/ month · cancel anytime',
                desc: 'Deep covenant access — 1-on-1 ministry, spiritual mentoring, and annual retreats.',
                features: ['All Member Benefits', 'Monthly 1-on-1 Ministry', 'Spiritual Mentoring', 'Priority Practitioner Access', 'Annual Retreat Included', 'Governance Participation', 'Direct Access to Leonard'],
                featured: false,
              },
            ].map(c => (
              <div className={`covenant-card${c.featured ? ' featured' : ''}`} key={c.name}>
                {c.badge && <div className="covenant-badge">{c.badge}</div>}
                <div className="covenant-tier">{c.tier}</div>
                <div className="covenant-name">{c.name}</div>
                <p className="covenant-desc">{c.desc}</p>
                <div className="covenant-price">{c.price}</div>
                <div className="covenant-period">{c.period}</div>
                <div className="covenant-divider" />
                <ul className="covenant-features">
                  {c.features.map(f => (
                    <li className="covenant-feature" key={f}><CheckCircle size={14} />{f}</li>
                  ))}
                </ul>
                <Link to="/membership" className={`btn ${c.featured ? 'btn-sacred' : 'btn-outline-sacred'} btn-lg`} style={{ width: '100%', justifyContent: 'center' }}>
                  Enter Covenant <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIES */}
      <section className="section">
        <div className="container">
          <div className="sec-head centered">
            <span className="label-sacred">Testimonies</span>
            <div className="ornament center"><div className="ornament-line" /><div className="ornament-gem" /><div className="ornament-line" /></div>
            <h2>What Members Say</h2>
          </div>
          <div className="testimonial-grid-3">
            {[
              { text: 'I came broken and desperate. This ministry gave me a sacred space to be healed — spirit, mind, and body. The prayer ministry work changed something deep inside me that doctors couldn\'t touch.', name: 'Amara J.', role: 'Covenant Member', img: I.t1, ref: 'Psalm 147:3' },
              { text: 'The herbal protocols and energy work gave me back my body. I\'d been exhausted for years. Three months into membership I felt like a completely different person. This is real.', name: 'Marcus W.', role: 'Seeker → Guardian', img: I.t2, ref: 'Isaiah 53:5' },
              { text: 'The healing circles changed how I experience community. For the first time in my life I felt truly held by people who were walking the same road. I can\'t imagine my life without this.', name: 'Sarah C.', role: 'Covenant Member', img: I.t3, ref: 'James 5:16' },
            ].map(t => (
              <div className="testimony-card" key={t.name}>
                <div className="testimony-mark">"</div>
                <p className="testimony-text">{t.text}</p>
                <div className="testimony-scripture">{t.ref}</div>
                <div className="testimony-author">
                  <img src={t.img} alt={t.name} className="testimony-avatar" />
                  <div>
                    <div className="testimony-name">{t.name}</div>
                    <div className="testimony-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-xs">
        <div className="container">
          <div className="cta-sacred">
            <div className="cta-sacred-bg" style={{ backgroundImage: `url(${I.nature})` }} />
            <div className="cta-sacred-glow" />
            <div className="cta-sacred-content">
              <span className="label-sacred" style={{ color: 'var(--amethyst-300)' }}>Healing Is Available Now</span>
              <div className="ornament"><div className="ornament-line" /><div className="ornament-gem" /></div>
              <h2>Your Healing Journey<br />Begins with One Step</h2>
              <p>You don't have to figure it out alone. Enter the covenant, connect with a practitioner, and let the community hold you while you heal. Free to begin, always.</p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link to="/membership" className="btn btn-sacred btn-lg">Enter the Covenant <ArrowRight size={16} /></Link>
                <Link to="/contact" className="btn btn-ghost-light btn-lg">Request Prayer</Link>
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
      <PageHero img={I.about1} label="Our Story" title="A Ministry Born from Calling" sub="Infinite Health & Well-being is not a business — it is a sacred response to a divine mandate to heal, restore, and serve." />
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="founder-frame" style={{ maxWidth: 420 }}>
              <img src={LEONARD_IMG} alt="Leonard M. Diana" className="founder-img" style={{ aspectRatio: '3/4' }} />
              <div className="founder-glow" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <span className="label-sacred">Leonard M. Diana</span>
              <div className="ornament"><div className="ornament-line" /><div className="ornament-gem" /></div>
              <h2>Minister · Holistic Practitioner · Community Ambassador</h2>
              <p style={{ color: 'var(--text-muted)' }}>
                Leonard M. Diana founded Infinite Health &amp; Well-being as a <strong>wholly separate entity</strong> from his financial advisory work — a sacred, spiritually-governed space where healing comes first and commerce has no place.
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                His calling grew out of years of witnessing community members in Hartford, CT suffer from conditions that conventional medicine addressed incompletely — and from a deep faith conviction that God intends wholeness for every person.
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                As Ambassador of the Alignable Alliance of Hartford CT, Leonard bridges faith, health, and community in a way that is rare: deeply rooted in scripture, informed by integrative science, and governed with the integrity of a 508(c)(1)(a) Ministry.
              </p>
              <blockquote style={{ borderLeft: '3px solid var(--amethyst-300)', paddingLeft: 20, fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--amethyst-600)', lineHeight: 1.7, margin: '8px 0' }}>
                "Beloved, I pray that you may prosper in all things and be in health, just as your soul prospers."
                <footer style={{ fontSize: '0.85rem', marginTop: 6, fontStyle: 'normal', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-light)' }}>— 3 John 1:2</footer>
              </blockquote>
              <Link to="/contact" className="btn btn-sacred" style={{ marginTop: 8 }}>Connect with Leonard <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sacred">
        <div className="container">
          <div className="sec-head centered">
            <span className="label-sacred" style={{ color: 'var(--amethyst-300)' }}>Our Foundation</span>
            <div className="ornament center"><div className="ornament-line" /><div className="ornament-gem" /><div className="ornament-line" /></div>
            <h2>Ministry Charter &amp; Values</h2>
            <p>Every decision, every program, every covenant relationship is filtered through these sacred commitments.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { icon: <Feather size={22} />, title: 'Faith First', desc: 'All healing flows from and returns to faith. We are a ministry before we are a practice.' },
              { icon: <Shield size={22} />, title: 'Sacred Privacy', desc: 'As a Private Holistic Association, your healing journey is protected by member covenant — not public commercial law.' },
              { icon: <Heart size={22} />, title: 'Whole Person Care', desc: 'We never separate spirit from mind from body. Every offering honors the complete sacred human.' },
              { icon: <Users size={22} />, title: 'Covenant Community', desc: 'Healing happens in relationship. Our community is a held, moderated, sacred container — not a marketplace.' },
            ].map(v => (
              <div key={v.title} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(185,144,212,0.15)', borderRadius: 16, padding: '28px 24px' }}>
                <div style={{ width: 46, height: 46, background: 'rgba(185,144,212,0.12)', border: '1px solid rgba(185,144,212,0.20)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--amethyst-300)', marginBottom: 16 }}>{v.icon}</div>
                <h4 style={{ color: 'white', marginBottom: 8 }}>{v.title}</h4>
                <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.48)', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
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
      <PageHero img={I.healing} label="Healing Services" title="Sacred Integrative Care" sub="Twelve healing modalities offered through our 508(c)(1)(a) Ministry and Private Holistic Association — available to all covenant members." />
      <section className="section">
        <div className="container">
          <div className="ministry-grid">
            {[
              { img: I.prayer, icon: <Feather size={20} />, title: 'Spiritual Healing & Prayer', desc: 'Individual prayer ministry, intercessory healing sessions, prophetic encouragement, and spiritual restoration — the cornerstone of everything we offer.' },
              { img: I.healing, icon: <Sun size={20} />, iconClass: 'sage', title: 'Energy & Body Wellness', desc: 'Reiki, breathwork, somatic healing, and body-based practices that release stored trauma and restore the body\'s natural energetic balance.' },
              { img: I.herbal, icon: <Leaf size={20} />, iconClass: 'sage', title: 'Herbal & Natural Medicine', desc: 'Traditional and integrative herbal protocols, nutritional guidance, and plant-based remedies — rooted in centuries of healing wisdom.' },
              { img: I.sound, icon: <Wind size={20} />, title: 'Sound & Vibrational Therapy', desc: 'Frequency healing, sacred sound ceremonies, tuning fork therapy, and vibrational tools that restore harmony to the nervous system.' },
              { img: I.community, icon: <Users size={20} />, title: 'Community Healing Circles', desc: 'Monthly group healing sessions where members share their journey, witness each other\'s healing, and receive collective ministry.' },
              { img: I.nature, icon: <Droplets size={20} />, iconClass: 'sage', title: 'Nature & Elemental Healing', desc: 'Forest bathing, earth-grounding practices, water therapy, and elemental healing that reconnects you to the sacred rhythms of creation.' },
              { img: I.about1, icon: <Heart size={20} />, title: 'Emotional & Trauma Healing', desc: 'Safe, faith-informed support for processing grief, trauma, anxiety, and emotional wounds — combining spiritual care with integrative therapeutic approaches.' },
              { img: I.retreat, icon: <Star size={20} />, iconClass: 'sage', title: 'Guided Healing Retreats', desc: 'Immersive multi-day retreats combining prayer, nature immersion, integrative healing practices, and community for deep, lasting transformation.' },
              { img: I.prayer, icon: <Flame size={20} />, title: 'Deliverance & Freedom Ministry', desc: 'Biblically-grounded deliverance ministry — facilitating freedom from spiritual bondage, generational patterns, and energetic strongholds.' },
            ].map(s => (
              <Link to="/healing" className="ministry-card" key={s.title}>
                <img src={s.img} alt={s.title} className="ministry-card-img" />
                <div className="ministry-card-body">
                  <div className={`ministry-card-icon${s.iconClass ? ' ' + s.iconClass : ''}`}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="card-link">Learn More <ChevronRight size={12} /></div>
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
   MINISTRY PAGE
═══════════════════════════════════════════ */
function Ministry() {
  return (
    <Layout>
      <PageHero img={I.prayer} label="Our Ministry" title="508(c)(1)(a) Spiritual Healing Ministry" sub="A faith-governed, legally recognized Spiritual Healing Ministry and Private Holistic Association — distinct from any commercial entity." />
      <section className="section">
        <div className="container">
          <div className="split split-3-2">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <span className="label-sacred">What is a 508(c)(1)(a)?</span>
              <div className="ornament"><div className="ornament-line" /><div className="ornament-gem" /></div>
              <h2>A Legally Distinct<br /><em style={{ fontStyle: 'italic' }}>Sacred Entity</em></h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.82 }}>A 508(c)(1)(a) organization is a Mandatory Exception church or ministry under the Internal Revenue Code — meaning it is automatically tax-exempt without requiring a 501(c)(3) application. It operates under the Free Exercise Clause of the First Amendment.</p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.82 }}>This designation allows Infinite Health &amp; Well-being to operate as a genuine faith-based healing ministry — not a commercial healthcare business. This is critical to understanding what we are and what we offer.</p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.82 }}>Our Private Holistic Association (PHA) structure further protects members under private contract law, allowing access to healing modalities within the sacred covenant of the Association.</p>
              {[
                { icon: <Shield size={16} />, t: 'Legally Separate', d: 'Entirely separate from An Infinite Abundance Wealth Advisory. No crossover.' },
                { icon: <Lock size={16} />, t: 'Member-Protected', d: 'PHA membership agreement governs all services under private contract law.' },
                { icon: <Feather size={16} />, t: 'Faith-Governed', d: 'All operations guided by scripture, prayer, and the Ministry Charter.' },
              ].map(i => (
                <div key={i.t} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 18px', background: 'var(--amethyst-50)', border: '1px solid var(--amethyst-100)', borderRadius: 12 }}>
                  <div style={{ width: 34, height: 34, background: 'var(--amethyst-100)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--amethyst-600)', flexShrink: 0 }}>{i.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 3 }}>{i.t}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>{i.d}</div>
                  </div>
                </div>
              ))}
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
  return (
    <Layout>
      <PageHero img={I.community} label="The Covenant" title="Enter the Covenant Community" sub="PHA membership is the gateway to all healing services. Free to begin. Governed by sacred covenant, not commercial terms." />
      <section className="section">
        <div className="container">
          <div className="covenant-grid">
            {[
              { tier: 'Seeker', name: 'Seeker', price: 'Free', period: 'always · open to all', desc: 'Enter the covenant. Access community resources and open ministry events.', features: ['Community Forum Access', 'Monthly Ministry Newsletter', 'Open Healing Events', 'Prayer Request Portal', 'Sacred Resource Library'], featured: false },
              { tier: 'Covenant', name: 'Member', price: '$33', period: '/ month', badge: 'Most Chosen', desc: 'Full PHA membership with access to all healing services and programs.', features: ['All Seeker Benefits', 'Healing Service Access', '4 Group Sessions / Month', 'Practitioner Booking', 'Member Sacred Library', 'Community Healing Circles', 'Retreat Discounts 30%'], featured: true },
              { tier: 'Guardian', name: 'Covenant Guardian', price: '$77', period: '/ month', desc: 'Deep covenant with 1-on-1 ministry and annual retreat included.', features: ['All Member Benefits', 'Monthly 1-on-1 Ministry', 'Spiritual Mentoring', 'Priority Practitioner Access', 'Annual Retreat Included', 'Governance Participation', 'Direct Access to Leonard'], featured: false },
            ].map(c => (
              <div className={`covenant-card${c.featured ? ' featured' : ''}`} key={c.name}>
                {c.badge && <div className="covenant-badge">{c.badge}</div>}
                <div className="covenant-tier">{c.tier}</div>
                <div className="covenant-name">{c.name}</div>
                <p className="covenant-desc">{c.desc}</p>
                <div className="covenant-price">{c.price}</div>
                <div className="covenant-period">{c.period}</div>
                <div className="covenant-divider" />
                <ul className="covenant-features">
                  {c.features.map(f => (<li className="covenant-feature" key={f}><CheckCircle size={14} />{f}</li>))}
                </ul>
                <Link to="/contact" className={`btn ${c.featured ? 'btn-sacred' : 'btn-outline-sacred'} btn-lg`} style={{ width: '100%', justifyContent: 'center' }}>
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

/* ═══════════════════════════════════════════
   RESOURCES
═══════════════════════════════════════════ */
function Resources() {
  return (
    <Layout>
      <PageHero img={I.nature} label="Resources" title="Sacred Teachings & Resources" sub="Scripture, healing guides, devotionals, and educational materials — freely available to all who seek." />
      <section className="section">
        <div className="container">
          <div className="ministry-grid">
            {[
              { img: I.prayer, icon: <BookOpen size={20} />, title: 'Scripture & Healing', desc: 'A curated collection of scriptural foundations for healing — exploring what the Bible teaches about wholeness, restoration, and divine health.' },
              { img: I.herbal, icon: <Leaf size={20} />, iconClass: 'sage', title: 'Herbal Wisdom Library', desc: 'Educational guides on traditional plant medicine, herbal protocols, and natural remedies drawn from centuries of healing tradition.' },
              { img: I.healing, icon: <Sun size={20} />, title: 'Integrative Practices', desc: 'Guided breathwork recordings, energy practices, and somatic exercises — tools for daily self-care and deep healing work.' },
              { img: I.community, icon: <Users size={20} />, title: 'Community Teachings', desc: 'Leonard\'s teachings on sacred community, covenant relationships, and how healing multiplies in the context of genuine fellowship.' },
              { img: I.retreat, icon: <Heart size={20} />, iconClass: 'sage', title: 'Retreat Resources', desc: 'Preparation guides, reflection prompts, and post-retreat integration tools to extend the depth of healing retreat experiences.' },
              { img: I.sound, icon: <Wind size={20} />, title: 'Sound & Frequency', desc: 'Educational resources on vibrational healing, sacred sound therapy, and how frequency affects the human body and energy field.' },
            ].map(r => (
              <Link to="/resources" className="ministry-card" key={r.title}>
                <img src={r.img} alt={r.title} className="ministry-card-img" />
                <div className="ministry-card-body">
                  <div className={`ministry-card-icon${r.iconClass ? ' ' + r.iconClass : ''}`}>{r.icon}</div>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                  <div className="card-link">Access Resource <ChevronRight size={12} /></div>
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
   CONTACT
═══════════════════════════════════════════ */
function Contact() {
  return (
    <Layout>
      <section className="section section-sacred" style={{ paddingTop: 'calc(var(--nav-height) + 72px)' }}>
        <div className="container">
          <div className="contact-wrap">
            <div className="contact-side">
              <span className="label-sacred" style={{ color: 'var(--amethyst-300)' }}>Reach Out</span>
              <div className="ornament"><div className="ornament-line" /><div className="ornament-gem" /></div>
              <h2>We're Here<br /><em style={{ fontStyle: 'italic' }}>to Serve You</em></h2>
              <p>Whether you need prayer, have questions about membership, or want to connect with a healing practitioner — we are here and we care about your journey.</p>
              {[
                { icon: <Mail size={17} />, t: 'Email Ministry', d: 'ministry@infinitehealthwellbeing.org' },
                { icon: <Phone size={17} />, t: 'Call Us', d: 'Hartford, CT — by appointment' },
                { icon: <MapPin size={17} />, t: 'Location', d: 'Hartford, CT — serving community locally and online' },
                { icon: <Heart size={17} />, t: 'Prayer Requests', d: 'Submit anytime — we pray over every request received' },
              ].map(d => (
                <div className="contact-detail" key={d.t}>
                  <div className="contact-icon">{d.icon}</div>
                  <div>
                    <h5>{d.t}</h5>
                    <p>{d.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-form-card">
              <h3>Connect with the Ministry</h3>
              <p>Send a message, prayer request, or covenant inquiry — we respond to every message personally.</p>
              <div className="form-row2">
                <div className="field"><label>First Name</label><input type="text" placeholder="Your name" /></div>
                <div className="field"><label>Last Name</label><input type="text" placeholder="Last name" /></div>
              </div>
              <div className="field"><label>Email Address</label><input type="email" placeholder="your@email.com" /></div>
              <div className="field"><label>Type of Request</label>
                <select>
                  <option>General Inquiry</option>
                  <option>Prayer Request</option>
                  <option>Membership / Covenant</option>
                  <option>Healing Service Booking</option>
                  <option>Retreat Information</option>
                  <option>Ministry Partnership</option>
                </select>
              </div>
              <div className="field"><label>Your Message</label><textarea placeholder="Share what's on your heart..." /></div>
              <button className="btn btn-sacred btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message <ArrowRight size={15} />
              </button>
              <p style={{ fontSize: 12, color: 'var(--text-light)', textAlign: 'center', marginTop: 14 }}>
                All communications are held in sacred confidence under our Ministry Covenant.
              </p>
            </div>
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
      <PageHero img={I.community} label="Support the Ministry" title="Sow into the Harvest" sub="Your gift supports free healing services, scholarship memberships, and the Ministry's reach into Hartford and beyond." />
      <section className="section">
        <div className="container" style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="contact-form-card">
            <h3 style={{ textAlign: 'center' }}>Make a Sacred Gift</h3>
            <p style={{ textAlign: 'center' }}>100% of all gifts go directly to healing ministry operations, scholarship memberships, and community outreach.</p>
            <div style={{ marginBottom: 22 }}>
              <div className="field">
                <label>Select Amount</label>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
                  {['$11', '$33', '$77', '$111', 'Other'].map(a => (
                    <button key={a} onClick={() => setAmt(a)}
                      style={{ padding: '9px 22px', borderRadius: 9999, fontSize: 14, fontWeight: 700, border: amt === a ? 'none' : '1.5px solid var(--border-dark)', background: amt === a ? 'linear-gradient(135deg,var(--amethyst-500),var(--amethyst-700))' : 'transparent', color: amt === a ? 'white' : 'var(--amethyst-600)', cursor: 'pointer', transition: 'all 180ms', fontFamily: 'inherit' }}>
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="form-row2">
              <div className="field"><label>First Name</label><input type="text" placeholder="Jane" /></div>
              <div className="field"><label>Last Name</label><input type="text" placeholder="Smith" /></div>
            </div>
            <div className="field"><label>Email</label><input type="email" placeholder="jane@example.com" /></div>
            <div className="field"><label>Dedication (Optional)</label><input type="text" placeholder="In honor / memory of..." /></div>
            <button className="btn btn-sacred btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
              <Gift size={16} /> Sow {amt !== 'Other' ? amt : 'Your Gift'}
            </button>
            <p style={{ fontSize: 12, color: 'var(--text-light)', textAlign: 'center', marginTop: 14 }}>
              <Shield size={12} style={{ display: 'inline', marginRight: 4 }} />
              Secure · Tax-deductible under 508(c)(1)(a) · Gift acknowledgment provided
            </p>
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
        <Route path="/"           element={<Home />} />
        <Route path="/about"      element={<About />} />
        <Route path="/ministry"   element={<Ministry />} />
        <Route path="/healing"    element={<Healing />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/resources"  element={<Resources />} />
        <Route path="/donate"     element={<Donate />} />
        <Route path="/contact"    element={<Contact />} />
        <Route path="*"           element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
