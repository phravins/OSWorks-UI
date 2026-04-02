import { useState } from "react";

const NAV = [
  { id: "home", label: "Home" },
  { id: "gst", label: "GST Suite" },
  { id: "payments", label: "UPI & Payments" },
  { id: "payroll", label: "HR & Payroll" },
  { id: "directory", label: "Directory" },
  { id: "community", label: "Community" },
];

const G = {
  green: "#2D6A4F",
  greenDark: "#1B4332",
  greenPale: "#EEF5F1",
  greenMid: "#B7E4C7",
  gold: "#C9933A",
  goldPale: "#FDF4E7",
  cream: "#FDFAF6",
  text: "#1C2B22",
  textMid: "#4A5E52",
  textSoft: "#8A9E92",
  border: "#DDE8E2",
  white: "#fff",
};

const pill = (label, bg, color) => (
  <span style={{ fontSize: 10, fontWeight: 700, background: bg, color, padding: "3px 10px", borderRadius: 20, whiteSpace: "nowrap" }}>
    {label}
  </span>
);

function Nav({ page, setPage }) {
  return (
    <nav style={{
      background: "rgba(253,250,246,0.97)",
      borderBottom: `1px solid ${G.border}`,
      padding: "0 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 58,
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <div onClick={() => setPage("home")} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
        <div style={{ width: 28, height: 28, background: G.green, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 700 }}>✦</div>
        <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "1.05rem", color: G.text }}>
          OSWorks<span style={{ color: G.green }}>.in</span>
        </span>
      </div>
      <div style={{ display: "flex", gap: 2 }}>
        {NAV.map(n => (
          <button key={n.id} onClick={() => setPage(n.id)} style={{
            padding: "6px 13px",
            borderRadius: 8,
            border: "none",
            background: page === n.id ? G.green : "none",
            color: page === n.id ? "#fff" : G.textMid,
            fontSize: 12.5,
            fontWeight: page === n.id ? 600 : 400,
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "all .15s",
          }}>{n.label}</button>
        ))}
      </div>
      <button style={{ padding: "7px 18px", background: G.gold, color: "#fff", border: "none", borderRadius: 8, fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
        Join Community
      </button>
    </nav>
  );
}

function Tag({ label, type = "green" }) {
  const map = {
    green: { bg: "#E8F5ED", color: "#2A6045" },
    blue: { bg: "#EAF2FF", color: "#1A5FAB" },
    gold: { bg: "#FFF4E5", color: "#9A5800" },
    purple: { bg: "#F3EBF9", color: "#6B27A0" },
    red: { bg: "#FFEBEB", color: "#C02B2B" },
  };
  const s = map[type] || map.green;
  return <span style={{ fontSize: 10.5, padding: "3px 10px", borderRadius: 20, fontWeight: 700, background: s.bg, color: s.color }}>{label}</span>;
}

function Card({ children, style = {} }) {
  return (
    <div style={{ background: G.white, border: `1px solid ${G.border}`, borderRadius: 14, padding: "1.25rem", ...style }}>
      {children}
    </div>
  );
}

function StatPill({ val, label }) {
  return (
    <div style={{ textAlign: "center", flex: 1 }}>
      <div style={{ fontFamily: "Georgia, serif", fontSize: "1.8rem", fontWeight: 700, color: G.green, letterSpacing: -1 }}>{val}</div>
      <div style={{ fontSize: 10.5, color: G.textSoft, textTransform: "uppercase", letterSpacing: 0.8, marginTop: 2, fontWeight: 500 }}>{label}</div>
    </div>
  );
}

// ── HOME ──
function Home({ setPage }) {
  return (
    <div>
      {/* Hero */}
      <div style={{ background: `linear-gradient(150deg, #EEF5F1 0%, #FDFAF6 55%, #FEF8F0 100%)`, padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: G.white, border: `1px solid ${G.border}`, color: G.green, padding: "5px 16px", borderRadius: 30, fontSize: 11, fontWeight: 700, marginBottom: "1.5rem", letterSpacing: 0.5 }}>
          <span style={{ width: 6, height: 6, background: G.green, borderRadius: "50%", display: "inline-block" }} />
          Built for India's 63 million SMBs
        </div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2.6rem", fontWeight: 700, color: G.text, letterSpacing: -1.5, lineHeight: 1.15, maxWidth: 580, margin: "0 auto 1rem" }}>
          Open source tools,<br /><span style={{ color: G.green }}>made accessible</span><br />for every business
        </h1>
        <p style={{ fontSize: 14, color: G.textMid, maxWidth: 440, margin: "0 auto 2rem", lineHeight: 1.75 }}>
          GST compliance, UPI payments, payroll — all free, self-hosted, and built for India.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <button onClick={() => setPage("directory")} style={{ padding: "11px 26px", background: G.green, color: "#fff", border: "none", borderRadius: 10, fontSize: 13.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Explore Solutions</button>
          <button onClick={() => setPage("gst")} style={{ padding: "11px 26px", background: G.white, color: G.text, border: `1.5px solid ${G.border}`, borderRadius: 10, fontSize: 13.5, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>GST Suite →</button>
        </div>
        <div style={{ display: "flex", maxWidth: 580, margin: "3.5rem auto 0", borderTop: `1px solid ${G.border}`, paddingTop: "2.5rem" }}>
          <StatPill val="63M+" label="Indian SMBs" />
          <StatPill val="120+" label="Tools reviewed" />
          <StatPill val="2,400+" label="Developers" />
          <StatPill val="8" label="India modules" />
        </div>
      </div>

      {/* India-first pillars */}
      <div style={{ background: G.white, borderTop: `1px solid ${G.border}`, borderBottom: `1px solid ${G.border}`, padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: 1.5, color: G.green, fontWeight: 700 }}>India-first modules</div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: G.text, marginTop: 4 }}>Built for how India does business</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
            {[
              { emoji: "🧾", title: "GST Suite", desc: "GSTR filing, e-invoicing IRN, 2A reconciliation, e-way bills, TDS — end to end.", page: "gst", tag: "🔥 Critical" },
              { emoji: "💳", title: "UPI & Payments", desc: "UPI QR on invoices, auto-reconciliation, Khata ledger, Razorpay/PhonePe plugins.", page: "payments", tag: "🔥 Critical" },
              { emoji: "👥", title: "HR & Payroll", desc: "PF, ESI, PT (state-wise), Form 16, gratuity, bonus — India-compliant from day 1.", page: "payroll", tag: "⚡ High value" },
            ].map(p => (
              <div key={p.page} onClick={() => setPage(p.page)} style={{ background: G.greenPale, borderRadius: 14, padding: "1.5rem", cursor: "pointer", border: `1px solid ${G.greenMid}`, transition: "all .2s" }}>
                <div style={{ fontSize: 28, marginBottom: "0.75rem" }}>{p.emoji}</div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 700, color: G.greenDark, marginBottom: 6 }}>{p.title}</div>
                <div style={{ fontSize: 12.5, color: G.textMid, lineHeight: 1.65, marginBottom: "0.85rem" }}>{p.desc}</div>
                <span style={{ fontSize: 10.5, background: G.white, color: G.green, padding: "3px 10px", borderRadius: 20, fontWeight: 700, border: `1px solid ${G.border}` }}>{p.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured tools */}
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
          <div>
            <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: 1.5, color: G.green, fontWeight: 700 }}>Featured this week</div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "1.35rem", fontWeight: 700, color: G.text, marginTop: 2 }}>Popular solutions</div>
          </div>
          <button onClick={() => setPage("directory")} style={{ padding: "7px 16px", background: G.white, border: `1.5px solid ${G.border}`, borderRadius: 8, fontSize: 12, color: G.textMid, cursor: "pointer", fontFamily: "inherit" }}>View all 120+ →</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
          {[
            { av: "ERP", bg: "#E8F5ED", color: "#2A6045", name: "ERPNext", sub: "Full ERP Suite", tags: [["✓ GST Ready","green"],["Free","green"],["हिंदी UI","blue"]], desc: "Complete ERP with GST e-invoicing, payroll, and inventory. #1 for Indian manufacturers." },
            { av: "CW", bg: "#F3EBF9", color: "#6B27A0", name: "Chatwoot", sub: "Customer Support", tags: [["Free","green"],["WhatsApp API","blue"],["Self-hosted","purple"]], desc: "Omnichannel support with WhatsApp Business. Ideal for D2C and local services." },
            { av: "GC", bg: "#FFEBEB", color: "#C02B2B", name: "GnuCash", sub: "Accounting", tags: [["✓ GST Ready","green"],["Free","green"],["हिंदी UI","blue"]], desc: "Lightweight desktop accounting with Indian GST plugins. Best for micro businesses." },
          ].map(t => (
            <Card key={t.name}>
              <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: "0.85rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: t.bg, color: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{t.av}</div>
                <div>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", fontWeight: 700, color: G.text }}>{t.name}</div>
                  <div style={{ fontSize: 11.5, color: G.textSoft }}>{t.sub}</div>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: "0.75rem" }}>
                {t.tags.map(([l, tp]) => <Tag key={l} label={l} type={tp} />)}
              </div>
              <div style={{ fontSize: 12.5, color: G.textMid, lineHeight: 1.65 }}>{t.desc}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── GST SUITE ──
function GSTSuite() {
  const [hsn, setHsn] = useState("");
  const [hsnResult, setHsnResult] = useState(null);
  const hsnDB = {
    "cotton": { code: "5208", rate: "5%", desc: "Woven fabrics of cotton" },
    "mobile": { code: "8517", rate: "18%", desc: "Telephone sets including smartphones" },
    "rice": { code: "1006", rate: "0%", desc: "Rice (unbranded)" },
    "software": { code: "9983", rate: "18%", desc: "IT & software services (SAC)" },
    "cement": { code: "2523", rate: "28%", desc: "Portland cement and clinker" },
  };
  const doHSN = () => {
    const key = hsn.toLowerCase().trim();
    const r = hsnDB[key];
    setHsnResult(r || { code: "—", rate: "—", desc: "Not found. Try: cotton, mobile, rice, software, cement" });
  };

  return (
    <div>
      <div style={{ background: `linear-gradient(135deg, ${G.greenPale}, ${G.cream})`, padding: "2.5rem 2rem 2rem", borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: 1.5, color: G.green, fontWeight: 700, marginBottom: 4 }}>India GST compliance</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "1.85rem", fontWeight: 700, color: G.text, letterSpacing: -0.5 }}>GST Suite</div>
          <div style={{ fontSize: 13.5, color: G.textMid, marginTop: 4 }}>End-to-end GST compliance tools for Indian SMBs — free and open source.</div>
        </div>
      </div>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "2rem" }}>

        {/* HSN Finder */}
        <div style={{ background: G.greenDark, borderRadius: 16, padding: "2rem", marginBottom: "1.5rem", color: "#fff" }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: 4 }}>🔍 HSN / SAC Code Finder</div>
          <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.65)", marginBottom: "1.25rem" }}>Describe your product and get HSN code + GST rate instantly</div>
          <div style={{ display: "flex", gap: 10 }}>
            <input value={hsn} onChange={e => setHsn(e.target.value)} onKeyDown={e => e.key === "Enter" && doHSN()} placeholder="e.g. cotton, mobile, rice, software…"
              style={{ flex: 1, padding: "10px 16px", borderRadius: 9, border: "1.5px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.1)", color: "#fff", fontSize: 13.5, fontFamily: "inherit", outline: "none" }} />
            <button onClick={doHSN} style={{ padding: "10px 22px", background: G.gold, border: "none", borderRadius: 9, fontSize: 13, fontWeight: 700, color: "#fff", cursor: "pointer", fontFamily: "inherit" }}>Search</button>
          </div>
          {hsnResult && (
            <div style={{ marginTop: "1.25rem", background: "rgba(255,255,255,0.12)", borderRadius: 10, padding: "1rem 1.25rem", display: "flex", gap: "2rem", alignItems: "center" }}>
              <div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: 0.8 }}>HSN Code</div><div style={{ fontFamily: "Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>{hsnResult.code}</div></div>
              <div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: 0.8 }}>GST Rate</div><div style={{ fontFamily: "Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: G.goldPale }}>{hsnResult.rate}</div></div>
              <div style={{ flex: 1 }}><div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: 0.8 }}>Description</div><div style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", marginTop: 2 }}>{hsnResult.desc}</div></div>
            </div>
          )}
        </div>

        {/* Module cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
          {[
            { icon: "📄", title: "GSTR-1 / 3B Export", desc: "One-click export of outward supply data in exact GST portal JSON/Excel format. Monthly & quarterly support.", tag: "Integration", effort: "Ready", effortBg: "#E8F5ED", effortColor: "#2A6045" },
            { icon: "⚡", title: "E-Invoice IRN Generator", desc: "Auto-generate Invoice Reference Numbers via NIC portal API for turnover above ₹5 Cr.", tag: "API Module", effort: "In Progress", effortBg: "#FFF4E5", effortColor: "#9A5800" },
            { icon: "🚛", title: "E-Way Bill Automation", desc: "Auto-generate e-way bills from sale orders above ₹50,000. No manual portal login needed.", tag: "Integration", effort: "Planned", effortBg: "#FFEBEB", effortColor: "#C02B2B" },
            { icon: "🔄", title: "GSTR-2A Reconciliation", desc: "Match your purchase invoices against GSTR-2A auto-populated data. Catch ITC mismatches early.", tag: "Analytics", effort: "Planned", effortBg: "#FFEBEB", effortColor: "#C02B2B" },
          ].map(m => (
            <Card key={m.title}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.6rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ fontSize: 20 }}>{m.icon}</span>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", fontWeight: 700, color: G.text }}>{m.title}</div>
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, background: m.effortBg, color: m.effortColor, padding: "3px 10px", borderRadius: 20, whiteSpace: "nowrap" }}>{m.effort}</span>
              </div>
              <div style={{ fontSize: 12.5, color: G.textMid, lineHeight: 1.65, marginBottom: "0.75rem" }}>{m.desc}</div>
              <Tag label={m.tag} type="green" />
            </Card>
          ))}
        </div>

        {/* TDS tracker */}
        <Card>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
            <div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 700, color: G.text }}>📊 TDS / TCS Tracker</div>
              <div style={{ fontSize: 12.5, color: G.textSoft, marginTop: 2 }}>Track deductions, generate Form 16A, auto-file 26Q</div>
            </div>
            <Tag label="Compliance" type="purple" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0.75rem" }}>
            {[
              { label: "TDS Deducted", val: "₹1,24,500", sub: "This quarter" },
              { label: "Pending Filing", val: "3", sub: "Challans due" },
              { label: "Form 16A Ready", val: "12", sub: "Contractors" },
              { label: "Next Due Date", val: "Jul 31", sub: "26Q filing" },
            ].map(s => (
              <div key={s.label} style={{ background: G.greenPale, borderRadius: 10, padding: "0.85rem 1rem" }}>
                <div style={{ fontSize: 10.5, color: G.textSoft, marginBottom: 3 }}>{s.label}</div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: G.greenDark }}>{s.val}</div>
                <div style={{ fontSize: 10.5, color: G.textSoft }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── UPI & PAYMENTS ──
function Payments() {
  const [amount, setAmount] = useState(5000);
  const upi = "osworks@upi";

  return (
    <div>
      <div style={{ background: `linear-gradient(135deg, #E8EAF6, ${G.cream})`, padding: "2.5rem 2rem 2rem", borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: 1.5, color: "#3949AB", fontWeight: 700, marginBottom: 4 }}>India payments</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "1.85rem", fontWeight: 700, color: G.text, letterSpacing: -0.5 }}>UPI & Payments</div>
          <div style={{ fontSize: 13.5, color: G.textMid, marginTop: 4 }}>Collect, reconcile, and track every rupee — automatically.</div>
        </div>
      </div>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "2rem" }}>

        {/* UPI Invoice preview */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
          <Card>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 700, color: G.text, marginBottom: "0.5rem" }}>💳 UPI QR on Invoice</div>
            <div style={{ fontSize: 12.5, color: G.textSoft, marginBottom: "1.25rem" }}>Customer scans → amount pre-filled → pays instantly</div>
            <div style={{ display: "flex", gap: 10, marginBottom: "1rem" }}>
              <span style={{ fontSize: 12.5, color: G.textMid, padding: "7px 0" }}>Invoice amount (₹)</span>
              <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))}
                style={{ flex: 1, padding: "7px 12px", border: `1.5px solid ${G.border}`, borderRadius: 8, fontSize: 13.5, fontFamily: "inherit", color: G.text, background: G.cream, outline: "none" }} />
            </div>
            <div style={{ background: G.greenPale, borderRadius: 12, padding: "1.25rem", textAlign: "center" }}>
              <div style={{ width: 80, height: 80, margin: "0 auto 0.75rem", background: G.white, borderRadius: 8, border: `1px solid ${G.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: G.textSoft }}>
                [QR Code]
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: G.greenDark }}>Pay ₹{amount.toLocaleString("en-IN")}</div>
              <div style={{ fontSize: 11, color: G.textSoft, marginTop: 3 }}>UPI ID: {upi}</div>
              <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: "0.75rem" }}>
                {["PhonePe", "GPay", "Paytm", "BHIM"].map(a => (
                  <span key={a} style={{ fontSize: 10, background: G.white, border: `1px solid ${G.border}`, borderRadius: 6, padding: "2px 7px", color: G.textMid }}>{a}</span>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 700, color: G.text, marginBottom: "0.5rem" }}>📒 Khata / Udhaari Ledger</div>
            <div style={{ fontSize: 12.5, color: G.textSoft, marginBottom: "1rem" }}>Digital credit book — track who owes what</div>
            {[
              { name: "Ramesh Traders", amount: "₹12,400", days: 18, status: "Overdue" },
              { name: "Patel Enterprises", amount: "₹6,200", days: 7, status: "Due soon" },
              { name: "Singh & Sons", amount: "₹3,800", days: 3, status: "New" },
              { name: "Kumar Retail", amount: "₹9,150", days: 25, status: "Overdue" },
            ].map(k => (
              <div key={k.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: `1px solid ${G.border}` }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: G.text }}>{k.name}</div>
                  <div style={{ fontSize: 11, color: G.textSoft }}>{k.days} days pending</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", fontWeight: 700, color: G.green }}>{k.amount}</div>
                  <span style={{ fontSize: 10, fontWeight: 700, background: k.status === "Overdue" ? "#FFEBEB" : k.status === "Due soon" ? "#FFF4E5" : "#E8F5ED", color: k.status === "Overdue" ? "#C02B2B" : k.status === "Due soon" ? "#9A5800" : "#2A6045", padding: "2px 8px", borderRadius: 20 }}>{k.status}</span>
                </div>
              </div>
            ))}
            <button style={{ width: "100%", marginTop: "0.85rem", padding: "8px", background: G.greenPale, border: `1px solid ${G.greenMid}`, borderRadius: 8, fontSize: 12.5, fontWeight: 600, color: G.green, cursor: "pointer", fontFamily: "inherit" }}>
              Send WhatsApp reminder →
            </button>
          </Card>
        </div>

        {/* Auto-reconciliation */}
        <Card>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
            <div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 700, color: G.text }}>🔄 UPI Auto-Reconciliation</div>
              <div style={{ fontSize: 12.5, color: G.textSoft, marginTop: 2 }}>Bank feed → auto-matched to open invoices</div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <Tag label="13 matched" type="green" />
              <Tag label="2 pending" type="gold" />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { upi: "9876543210@paytm", amount: "₹12,400", inv: "INV-2024-089", match: "Auto-matched", ok: true },
              { upi: "ramesh@phonepe", amount: "₹6,200", inv: "INV-2024-091", match: "Auto-matched", ok: true },
              { upi: "unknown@upi", amount: "₹3,200", inv: "—", match: "Review needed", ok: false },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.7rem 1rem", background: r.ok ? G.greenPale : "#FFF4E5", borderRadius: 10, border: `1px solid ${r.ok ? G.greenMid : "#F5E6CC"}` }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: r.ok ? G.green : G.gold, flexShrink: 0 }} />
                <div style={{ flex: 1, fontSize: 12.5, color: G.textMid }}>{r.upi}</div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", fontWeight: 700, color: G.greenDark }}>{r.amount}</div>
                <div style={{ fontSize: 11.5, color: G.textSoft }}>{r.inv}</div>
                <span style={{ fontSize: 10.5, fontWeight: 700, background: r.ok ? G.white : "#fff", color: r.ok ? G.green : G.gold, padding: "3px 10px", borderRadius: 20 }}>{r.match}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── HR & PAYROLL ──
function Payroll() {
  const [basic, setBasic] = useState(30000);
  const hra = Math.round(basic * 0.4);
  const pf = Math.round(basic * 0.12);
  const esi = basic <= 21000 ? Math.round(basic * 0.0075) : 0;
  const pt = basic > 15000 ? 200 : basic > 10000 ? 150 : 0;
  const gross = basic + hra;
  const net = gross - pf - esi - pt;

  const states = [
    { state: "Karnataka", slab: "₹200/mo", basis: "Salary > ₹15,000" },
    { state: "Maharashtra", slab: "₹200/mo", basis: "Salary > ₹10,000" },
    { state: "Tamil Nadu", slab: "₹208/mo", basis: "All employees" },
    { state: "Andhra Pradesh", slab: "₹200/mo", basis: "Salary > ₹15,000" },
    { state: "West Bengal", slab: "₹110/mo", basis: "Salary > ₹10,000" },
  ];

  return (
    <div>
      <div style={{ background: `linear-gradient(135deg, #F3E5F5, ${G.cream})`, padding: "2.5rem 2rem 2rem", borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: 1.5, color: "#7B1FA2", fontWeight: 700, marginBottom: 4 }}>India Labour law compliance</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "1.85rem", fontWeight: 700, color: G.text, letterSpacing: -0.5 }}>HR & Payroll India</div>
          <div style={{ fontSize: 13.5, color: G.textMid, marginTop: 4 }}>PF, ESI, PT, Form 16 — legally correct payroll for Indian SMBs.</div>
        </div>
      </div>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>

          {/* Salary Calculator */}
          <Card>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 700, color: G.text, marginBottom: 4 }}>🧮 Payroll Calculator</div>
            <div style={{ fontSize: 12, color: G.textSoft, marginBottom: "1.25rem" }}>Live India-compliant salary breakup</div>
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ fontSize: 12, color: G.textMid, marginBottom: 5 }}>Basic Salary (₹)</div>
              <input type="range" min={5000} max={100000} step={1000} value={basic} onChange={e => setBasic(Number(e.target.value))}
                style={{ width: "100%", accentColor: G.green }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: G.textSoft, marginTop: 2 }}>
                <span>₹5,000</span>
                <span style={{ fontWeight: 700, color: G.green }}>₹{basic.toLocaleString("en-IN")}</span>
                <span>₹1,00,000</span>
              </div>
            </div>
            {[
              { l: "Basic", v: basic, c: G.text },
              { l: "HRA (40%)", v: hra, c: G.textMid },
              { l: "Gross Total", v: gross, bold: true, c: G.greenDark },
              { l: "EPF (12% of basic)", v: -pf, c: "#C02B2B" },
              { l: `ESI${basic > 21000 ? " (exempt)" : " (0.75%)"}`, v: basic > 21000 ? 0 : -esi, c: basic > 21000 ? G.textSoft : "#C02B2B" },
              { l: "Professional Tax", v: -pt, c: "#C02B2B" },
            ].map(r => (
              <div key={r.l} style={{ display: "flex", justifyContent: "space-between", padding: "0.4rem 0", borderBottom: r.bold ? "none" : `1px solid ${G.border}` }}>
                <span style={{ fontSize: 12.5, color: r.c }}>{r.l}</span>
                <span style={{ fontSize: 12.5, fontWeight: r.bold ? 700 : 400, color: r.c }}>
                  {r.v >= 0 ? "" : "−"}₹{Math.abs(r.v).toLocaleString("en-IN")}
                </span>
              </div>
            ))}
            <div style={{ background: G.greenPale, borderRadius: 10, padding: "0.85rem 1rem", marginTop: "0.75rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: G.greenDark }}>Net Take-home</span>
              <span style={{ fontFamily: "Georgia, serif", fontSize: "1.35rem", fontWeight: 700, color: G.greenDark }}>₹{net.toLocaleString("en-IN")}</span>
            </div>
          </Card>

          {/* PT Slabs + Compliance */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Card>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 700, color: G.text, marginBottom: "0.85rem" }}>🗺️ Professional Tax — State-wise</div>
              {states.map(s => (
                <div key={s.state} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: `1px solid ${G.border}` }}>
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 600, color: G.text }}>{s.state}</div>
                    <div style={{ fontSize: 11, color: G.textSoft }}>{s.basis}</div>
                  </div>
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: "#7B1FA2" }}>{s.slab}</span>
                </div>
              ))}
            </Card>

            <Card>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: G.text, marginBottom: "0.85rem" }}>✅ Compliance Checklist</div>
              {[
                { item: "EPF Registration (EPFO)", done: true },
                { item: "ESI Registration (ESIC)", done: true },
                { item: "Shop & Establishment License", done: true },
                { item: "Professional Tax Enrollment", done: false },
                { item: "Minimum Wage Compliance", done: false },
                { item: "Form 16 issued to employees", done: false },
              ].map(c => (
                <div key={c.item} style={{ display: "flex", alignItems: "center", gap: 9, padding: "0.4rem 0" }}>
                  <span style={{ fontSize: 14, color: c.done ? G.green : G.border }}>{c.done ? "●" : "○"}</span>
                  <span style={{ fontSize: 12.5, color: c.done ? G.text : G.textSoft }}>{c.item}</span>
                </div>
              ))}
            </Card>
          </div>
        </div>

        {/* PF / ESI Summary */}
        <Card>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 700, color: G.text, marginBottom: "1rem" }}>📋 PF & ESI Monthly Summary</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0.75rem" }}>
            {[
              { label: "Employee PF (12%)", val: `₹${(basic * 0.12).toLocaleString("en-IN")}`, bg: "#E8F5ED", c: "#2A6045" },
              { label: "Employer PF (12%)", val: `₹${(basic * 0.12).toLocaleString("en-IN")}`, bg: "#E8F5ED", c: "#2A6045" },
              { label: "ESI (Employee 0.75%)", val: basic > 21000 ? "Exempt" : `₹${(basic * 0.0075).toFixed(0)}`, bg: "#F3EBF9", c: "#6B27A0" },
              { label: "ESI (Employer 3.25%)", val: basic > 21000 ? "Exempt" : `₹${(basic * 0.0325).toFixed(0)}`, bg: "#F3EBF9", c: "#6B27A0" },
            ].map(s => (
              <div key={s.label} style={{ background: s.bg, borderRadius: 10, padding: "0.85rem 1rem" }}>
                <div style={{ fontSize: 10.5, color: G.textSoft, marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: s.c }}>{s.val}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "1rem", padding: "0.75rem 1rem", background: G.goldPale, borderRadius: 10, border: `1px solid #F5E6CC`, fontSize: 12.5, color: G.gold }}>
            💡 ECR challan auto-generated for EPFO portal. Due date: 15th of every month.
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── DIRECTORY ──
function Directory() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "ERP & Accounting", "HR & Payroll", "Communication", "Analytics", "✓ GST Ready", "हिंदी UI"];
  const tools = [
    { av: "ERP", bg: "#E8F5ED", color: "#2A6045", name: "ERPNext", sub: "Full ERP Suite", tags: [["✓ GST Ready","green"],["Free","green"],["हिंदी UI","blue"]], desc: "Complete ERP with GST e-invoicing, payroll, inventory.", stars: "4.7", users: "1,200+", cat: "ERP & Accounting" },
    { av: "OD", bg: "#EAF2FF", color: "#1A5FAB", name: "Odoo", sub: "Modular Suite", tags: [["✓ GST Ready","green"],["Freemium","gold"],["Self-hosted","purple"]], desc: "Modular CRM, sales, accounting with Indian GST modules.", stars: "4.5", users: "800+", cat: "ERP & Accounting" },
    { av: "CW", bg: "#F3EBF9", color: "#6B27A0", name: "Chatwoot", sub: "Customer Support", tags: [["Free","green"],["WhatsApp API","blue"]], desc: "Omnichannel support with WhatsApp Business integration.", stars: "4.6", users: "650+", cat: "Communication" },
    { av: "MB", bg: "#FFF4E5", color: "#9A5800", name: "Metabase", sub: "Business Analytics", tags: [["Free","green"],["Self-hosted","purple"]], desc: "No-code BI — connect your billing DB and get dashboards.", stars: "4.4", users: "420+", cat: "Analytics" },
    { av: "BR", bg: "#E5F6F2", color: "#0E7A62", name: "Baserow", sub: "No-code Database", tags: [["Free","green"],["Self-hosted","purple"]], desc: "Replace Excel for inventory, order, supplier management.", stars: "4.3", users: "310+", cat: "Analytics" },
    { av: "GC", bg: "#FFEBEB", color: "#C02B2B", name: "GnuCash", sub: "Accounting", tags: [["✓ GST Ready","green"],["Free","green"],["हिंदी UI","blue"]], desc: "Lightweight accounting with Indian GST plugins.", stars: "4.1", users: "900+", cat: "ERP & Accounting" },
  ];
  const visible = filter === "All" ? tools : tools.filter(t =>
    t.cat === filter || t.tags.some(([l]) => l === filter)
  );

  return (
    <div>
      <div style={{ background: `linear-gradient(135deg, ${G.greenPale}, ${G.cream})`, padding: "2.5rem 2rem 2rem", borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: 1.5, color: G.green, fontWeight: 700, marginBottom: 4 }}>120+ tools reviewed</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "1.85rem", fontWeight: 700, color: G.text }}>Solutions Directory</div>
          <div style={{ display: "flex", gap: 8, marginTop: "1.25rem" }}>
            <input placeholder="Search — GST billing, payroll, WhatsApp…" style={{ flex: 1, padding: "9px 16px", border: `1.5px solid ${G.border}`, borderRadius: 9, fontSize: 13.5, fontFamily: "inherit", color: G.text, background: G.white, outline: "none" }} />
            <button style={{ padding: "9px 20px", background: G.green, border: "none", borderRadius: 9, color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Search</button>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "1.5rem 2rem 3rem" }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: "6px 14px", borderRadius: 20, border: `1.5px solid ${filter === f ? G.green : G.border}`, background: filter === f ? G.green : G.white, color: filter === f ? "#fff" : G.textMid, fontSize: 12.5, fontWeight: filter === f ? 600 : 400, cursor: "pointer", fontFamily: "inherit" }}>{f}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
          {visible.map(t => (
            <Card key={t.name}>
              <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: "0.75rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: t.bg, color: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{t.av}</div>
                <div>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", fontWeight: 700, color: G.text }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: G.textSoft }}>{t.sub}</div>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: "0.7rem" }}>
                {t.tags.map(([l, tp]) => <Tag key={l} label={l} type={tp} />)}
              </div>
              <div style={{ fontSize: 12.5, color: G.textMid, lineHeight: 1.65, marginBottom: "0.85rem" }}>{t.desc}</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${G.border}`, paddingTop: "0.75rem" }}>
                <span style={{ fontSize: 11.5, color: G.textSoft }}>⭐ {t.stars} · {t.users} Indian users</span>
                <button style={{ fontSize: 11.5, padding: "5px 14px", background: G.green, color: "#fff", border: "none", borderRadius: 7, cursor: "pointer", fontWeight: 600, fontFamily: "inherit" }}>View Guide</button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── COMMUNITY ──
function Community() {
  return (
    <div>
      <div style={{ background: `linear-gradient(135deg, ${G.greenPale}, ${G.cream})`, padding: "2.5rem 2rem 2rem", borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: 1.5, color: G.green, fontWeight: 700, marginBottom: 4 }}>2,400+ developers across India</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "1.85rem", fontWeight: 700, color: G.text }}>Developer Community</div>
        </div>
      </div>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "2rem" }}>
        <div style={{ background: G.goldPale, border: `1.5px solid #F5E6CC`, borderRadius: 10, padding: "0.85rem 1.25rem", marginBottom: "1.5rem", fontSize: 13, color: G.text, display: "flex", alignItems: "center", gap: 8 }}>
          🏆 Live bounty: Build UPI auto-reconciliation for ERPNext — <strong style={{ marginLeft: 4 }}>₹15,000 open</strong>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "1.5rem" }}>
          <div>
            <Card>
              <div style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.85rem", color: G.text }}>🏆 Top Contributors</div>
              {[
                { init: "AK", name: "Arjun Kumar", loc: "Bengaluru · GST Expert", pts: "2,840", bg: "#E8F5ED", c: "#2A6045" },
                { init: "PS", name: "Priya Shankar", loc: "Chennai · Translator", pts: "2,410", bg: "#EAF2FF", c: "#1A5FAB" },
                { init: "RV", name: "Rohit Verma", loc: "Pune · Plugin Builder", pts: "1,990", bg: "#F3EBF9", c: "#6B27A0" },
                { init: "NM", name: "Neha Mishra", loc: "Hyderabad · Odoo", pts: "1,760", bg: "#FFF4E5", c: "#9A5800" },
                { init: "SK", name: "Siddharth Kaur", loc: "Delhi · ERPNext", pts: "1,520", bg: "#FFEBEB", c: "#C02B2B" },
              ].map((u, i) => (
                <div key={u.name} style={{ display: "flex", alignItems: "center", gap: 9, padding: "0.65rem 0", borderBottom: `1px solid ${G.border}` }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: G.textSoft, width: 16 }}>{i + 1}</span>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: u.bg, color: u.c, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10.5, fontWeight: 700, flexShrink: 0 }}>{u.init}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 500, color: G.text }}>{u.name}</div>
                    <div style={{ fontSize: 10.5, color: G.textSoft }}>{u.loc}</div>
                  </div>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: 12.5, fontWeight: 700, color: G.green }}>{u.pts}</span>
                </div>
              ))}
            </Card>
          </div>
          <div>
            <div style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "1rem", color: G.text, marginBottom: "0.85rem" }}>Recent Activity</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { dot: G.green, text: "Arjun Kumar published a GST e-invoicing plugin for ERPNext v15", time: "2 hours ago · ERPNext · Bengaluru" },
                { dot: "#1A5FAB", text: "Priya Shankar completed Hindi translation for Chatwoot onboarding — 2,400 words", time: "5 hours ago · Chatwoot · Chennai" },
                { dot: G.gold, text: "Rohit Verma opened bounty: Razorpay reconciliation for Baserow — ₹8,000", time: "1 day ago · Baserow · Pune" },
                { dot: "#6B27A0", text: "Neha Mishra submitted case study: Odoo for a textile distributor in Surat", time: "2 days ago · Odoo · Hyderabad" },
                { dot: "#C02B2B", text: "Team VIT Chennai submitted: GST Invoice Generator with QR code", time: "3 days ago · Student Project" },
                { dot: G.green, text: "Megha Rathi added the first Marathi UI guide for GnuCash", time: "5 days ago · GnuCash · Nagpur" },
              ].map((a, i) => (
                <div key={i} style={{ background: G.white, border: `1px solid ${G.border}`, borderRadius: 11, padding: "0.85rem 1rem", display: "flex", gap: 10 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: a.dot, flexShrink: 0, marginTop: 5 }} />
                  <div>
                    <div style={{ fontSize: 12.5, color: G.textMid, lineHeight: 1.55 }}>{a.text}</div>
                    <div style={{ fontSize: 10.5, color: G.textSoft, marginTop: 3 }}>{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OSWorks() {
  const [page, setPage] = useState("home");
  const pages = { home: <Home setPage={setPage} />, gst: <GSTSuite />, payments: <Payments />, payroll: <Payroll />, directory: <Directory />, community: <Community /> };
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans','Segoe UI',sans-serif", background: G.cream, color: G.text, fontSize: 15, lineHeight: 1.6, minHeight: "100vh" }}>
      <Nav page={page} setPage={setPage} />
      {pages[page]}
      <footer style={{ background: G.white, borderTop: `1px solid ${G.border}`, textAlign: "center", padding: "2rem", fontSize: 12.5, color: G.textSoft }}>
        <strong style={{ color: G.text }}>OSWorks.in</strong> — Open source solutions for Indian small businesses &nbsp;·&nbsp; Built with Elixir + Phoenix
      </footer>
    </div>
  );
}
