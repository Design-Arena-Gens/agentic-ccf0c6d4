type Section = {
  id: string;
  title: string;
  tagline?: string;
  description?: string;
  items?: {
    title: string;
    details: string[];
  }[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

const servicePillars = [
  {
    title: "Performance Intelligence",
    details: [
      "AI-enhanced media buying, predictive bid adjustments, multi-channel attribution dashboards.",
      "Weekly optimization sprints using marketing mix modeling and LTV-based cohorts."
    ]
  },
  {
    title: "Content Automation Studio",
    details: [
      "Generative AI workflows for social, email, and SEO content; human-in-the-loop QA.",
      "Brand voice engine trained on client data, rigorous fact-checking and compliance guardrails."
    ]
  },
  {
    title: "Lifecycle Personalization",
    details: [
      "Behavioral segmentation, chatbot conversion funnels, personalized retargeting sequences.",
      "Integrates CDP data into AI-driven journeys, monitors uplift with causal inference tests."
    ]
  }
];

const sections: Section[] = [
  {
    id: "market-scan",
    title: "Landscape & Category Positioning",
    tagline: "Map the opportunity, define a wedge",
    items: [
      {
        title: "Macro Trends & TAM",
        details: [
          "Global marketing AI spend expected to reach $107B by 2028 (20% CAGR); fastest growth in SMB ecommerce, SaaS, and B2B service verticals.",
          "Fragmented agency market: top 10 hold <12% share; clients dissatisfied with generic automation, opening space for deep specialization."
        ]
      },
      {
        title: "Competitor Archetypes",
        details: [
          "AI-first boutique shops focus on experimentation but lack process maturity and compliance assurances.",
          "Legacy agencies bolt AI onto media retainers; slow, expensive, limited transparency.",
          "Platforms (Jasper, Copy.ai, HubSpot) enable DIY marketers but lack bespoke strategy and integration."
        ]
      },
      {
        title: "Positioning Thesis",
        details: [
          "Specialize in AI-powered growth loops for product-led SaaS and high-ticket B2B funnels.",
          "Differentiate on measurable revenue impact, explainable AI workflows, and compliance-grade governance."
        ]
      }
    ]
  },
  {
    id: "service-architecture",
    title: "Service Architecture",
    tagline: "Productize outcomes, not hours",
    items: [
      {
        title: "Core Pillars",
        details: servicePillars.map((pillar) => pillar.title)
      },
      {
        title: "Delivery Models",
        details: [
          "Strategic Retainers: $6k-$18k/mo, includes growth operating system, analytics, experimentation roadmap.",
          "Campaign Sprints: 4-6 weeks, $8k-$25k fixed scope, ideal for demand gen campaigns, product launches.",
          "Advisory Pods: fractional CMO + AI strategist team for venture-backed startups needing rapid instrumentation."
        ]
      },
      {
        title: "Proof Assets",
        details: [
          "AI audit template evaluating data readiness, tooling stack, experimentation cadence.",
          "Case study library demonstrating revenue lift, CAC reductions, and faster content throughput."
        ]
      }
    ]
  },
  {
    id: "tooling",
    title: "Tooling Stack & IP",
    tagline: "Blend proprietary accelerators with enterprise-grade vendors",
    items: [
      {
        title: "Data & Analytics Spine",
        details: [
          "Data warehouse: BigQuery or Snowflake; reverse ETL via Hightouch for activation.",
          "Attribution & MMM: Northbeam, Rockerbox, or custom Bayesian models in Python; Airflow for automation.",
          "Visualization: Looker Studio for clients, internal Mode dashboards for analysts."
        ]
      },
      {
        title: "AI Production Layer",
        details: [
          "Content: GPT-4o, Claude, and open-source LLMs orchestrated with LangChain or LlamaIndex; safeguard with automated fact-check prompts and brand style rules.",
          "Vision & creative: Midjourney for ideation, Runway for video; integrate via template library.",
          "Agents: Build lead-qualifying chatbots with Vercel AI SDK + Supabase, connect to CRM (HubSpot, Salesforce)."
        ]
      },
      {
        title: "Process IP",
        details: [
          "Marketing Operations Playbook documenting discovery cadences, experimentation rituals, QA checklists.",
          "Reusable prompts, persona models, and evaluation rubrics stored in internal knowledge base (Notion + Git)."
        ]
      }
    ]
  },
  {
    id: "go-to-market",
    title: "Go-To-Market Motions",
    tagline: "Acquire first 10 lighthouse clients within 120 days",
    items: [
      {
        title: "Demand Generation",
        details: [
          "Publish research-backed flagship asset: “AI Growth Benchmarks for Product-Led SaaS 2024” using scraped data + surveys.",
          "Host monthly live teardown webinars evaluating AI maturity of volunteer brands; repurpose into short-form clips.",
          "Launch AI audit lead magnet with diagnostic score + tailored recommendations; gate behind email."
        ]
      },
      {
        title: "Outbound Engine",
        details: [
          "60-account ABM list sourced from Crunchbase and BuiltWith signals (CDP usage, hiring patterns).",
          "Multichannel cadence: warm intro requests, personalized Loom breakdown with AI-driven opportunity map, LinkedIn thought leadership, targeted retargeting ads.",
          "Leverage founder network and VC platform partners for warm referrals; offer co-marketing workshops."
        ]
      },
      {
        title: "Partnerships & PR",
        details: [
          "Certify as partner for HubSpot, Klaviyo, Webflow, and emerging AI model providers.",
          "Submit expert commentary to industry newsletters (Marketing Brew, Demand Curve) and podcasts.",
          "Sponsor niche community events (RevGenius, Wizard of Ops) with live AI stack demos."
        ]
      }
    ],
    table: {
      headers: ["Milestone", "Target Date", "Success Metric"],
      rows: [
        ["Launch research report + site", "Day 30", "1,500 downloads, 10 SQLs"],
        ["First 3 paid retainers", "Day 60", "$25k Monthly Recurring Revenue"],
        ["Repeatable outbound pipeline", "Day 90", "5 SQLs/month, 20% close rate"],
        ["Thought leadership flywheel", "Day 120", "8 speaking invites, 5 co-marketing deals"]
      ]
    }
  },
  {
    id: "operations",
    title: "Operating Model",
    tagline: "Build lean core team with specialized contractors",
    items: [
      {
        title: "Org Design (Year 1)",
        details: [
          "Founders: Growth strategist + AI solutions architect joint leadership.",
          "Core hires: Performance lead, lifecycle marketer, data engineer (fractional), project producer.",
          "Bench: vetted creative technologists, prompt engineers, copy strategists on retainer marketplace."
        ]
      },
      {
        title: "Processes & SOPs",
        details: [
          "Client onboarding ritual: data access checklist, baseline benchmark report, OKR alignment workshop.",
          "Weekly growth council sync with clients covering KPI scorecard, experiments backlog, blockers.",
          "Quality assurance gates for AI outputs: automated guardrails + human review rubric."
        ]
      },
      {
        title: "Financial Model",
        details: [
          "Target 65% gross margin with blended bench; allocate 12% revenue to R&D and proprietary tooling.",
          "Marketing spend 8-10% of topline reinvested into events, content, and paid media for lead gen.",
          "Retainer contracts 6-12 months with performance-linked accelerators (bonus for hitting CAC or pipeline goals)."
        ]
      }
    ]
  },
  {
    id: "compliance",
    title: "Risk, Compliance & Ethics",
    tagline: "Win enterprise trust through governance maturity",
    items: [
      {
        title: "Data Protection",
        details: [
          "Adopt SOC 2-aligned controls; document data retention and deletion policies for client sources.",
          "Use secure prompt management and redact PII before LLM calls; integrate with client-owned API keys where possible."
        ]
      },
      {
        title: "Responsible AI",
        details: [
          "Implement bias testing for audience segmentation, maintain transparency logs for automated decisions.",
          "Create AI usage disclosure templates and approval workflows for regulated industries."
        ]
      },
      {
        title: "Legal Framework",
        details: [
          "Engage legal counsel to draft MSA with IP clauses covering model fine-tunes and generated assets.",
          "Secure professional liability insurance covering AI automation risks."
        ]
      }
    ]
  },
  {
    id: "roadmap",
    title: "90-Day Execution Roadmap",
    tagline: "Aggressive but achievable sprint plan",
    items: [
      {
        title: "Phase 1 — Foundation (Days 1-30)",
        details: [
          "Finalize positioning, offers, pricing; build brand site with case-style narratives and pillar pages.",
          "Produce benchmark report using research automation, survey 50 target companies, analyze with GPT summarization.",
          "Assemble tool stack, set up analytics sandbox, document first version of AI governance playbook."
        ]
      },
      {
        title: "Phase 2 — Acquisition (Days 31-60)",
        details: [
          "Launch report and audit funnel; run paid amplification on LinkedIn/Twitter targeting PLG SaaS leaders.",
          "Kick off outbound ABM with 30 personalized plays, track in CRM with pipeline dashboards.",
          "Secure first 3 case-study pilots; over-invest in outcomes to create social proof."
        ]
      },
      {
        title: "Phase 3 — Scale (Days 61-90)",
        details: [
          "Productize best-performing workflows into packaged services with onboarding kits.",
          "Hire or contract specialist roles to increase delivery bandwidth; implement utilization tracking.",
          "Codify insights in quarterly thought-leadership cadence, negotiate joint offerings with tech partners."
        ]
      }
    ]
  },
  {
    id: "metrics",
    title: "North-Star Metrics & Measurement",
    tagline: "Operate like a revenue team",
    items: [
      {
        title: "Acquisition",
        details: [
          "SQLs by source, cost per SQL, outbound reply rate, audit-to-proposal conversion."
        ]
      },
      {
        title: "Delivery",
        details: [
          "Client pipeline contribution, CAC reduction %, content velocity uplift, experiment win rate."
        ]
      },
      {
        title: "Operational Health",
        details: [
          "Gross margin, delivery utilization, NPS/CSAT, AI QA pass rate, innovation backlog throughput."
        ]
      }
    ],
    table: {
      headers: ["Metric", "Target (Quarter 1)", "Instrumentation"],
      rows: [
        ["Monthly Recurring Revenue", "$60k", "Stripe + SaaSOptics"],
        ["Average Retainer Margin", "65%+", "Harvest + Notion finance dashboard"],
        ["Content Production Velocity", "3x baseline", "Content ops tracker + GPT eval scripts"],
        ["Experiment Win Rate", "30%", "Growth board (Airtable) + Looker Studio"],
        ["Client NPS", "45+", "Typeform + Zapier automation"]
      ]
    }
  }
];

const quickLinks = sections.map(({ id, title }) => ({
  id,
  title
}));

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <h1>AI Digital Marketing Agency Launch Blueprint</h1>
        <p>
          Battle-tested playbook to launch and scale a specialized AI growth
          agency. Includes market analysis, productized services, tooling stack,
          acquisition engines, operating model, and metrics to hit first-year
          revenue goals.
        </p>
        <div className="hero-grid">
          <div className="hero-card">
            <div className="hero-card-title">Target ICP</div>
            <strong>Series A-B SaaS &amp; high-ticket B2B</strong>
            <p>
              Buying teams facing plateaued growth, fragmented data, appetite
              for AI experimentation with governance.
            </p>
          </div>
          <div className="hero-card">
            <div className="hero-card-title">Revenue Ambition</div>
            <strong>$1M ARR in 12 months</strong>
            <p>Blend of strategic retainers, sprints, and advisory pods.</p>
          </div>
          <div className="hero-card">
            <div className="hero-card-title">Strategic Edge</div>
            <strong>Explainable automation</strong>
            <p>
              Transparently connect AI workflows to revenue impact with robust
              telemetry and compliance.
            </p>
          </div>
        </div>
      </section>

      <nav className="section">
        <h2>Implementation Navigator</h2>
        <p>
          Jump to the area you are designing right now. Treat each section as a
          mini-sprint: absorb insights, assign owners, and execute within your
          operating rhythm.
        </p>
        <div className="quick-links">
          {quickLinks.map((link) => (
            <a key={link.id} className="pill" href={`#${link.id}`}>
              {link.title}
            </a>
          ))}
        </div>
      </nav>

      {sections.map((section) => (
        <section key={section.id} id={section.id} className="section">
          <h2>{section.title}</h2>
          {section.tagline ? <p className="pill">{section.tagline}</p> : null}
          {section.description ? <p>{section.description}</p> : null}

          <div className="grid grid-2">
            {section.items?.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <ul className="list">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {section.table ? (
            <table className="table">
              <thead>
                <tr>
                  {section.table.headers.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.table.rows.map((row, idx) => (
                  <tr key={idx}>
                    {row.map((cell) => (
                      <td key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </section>
      ))}

      <section className="section">
        <h2>Financial Snapshot</h2>
        <p>
          Anchor capital allocation decisions in a conservative-but-ambitious
          forecast. Revisit quarterly and adjust based on pipeline velocity and
          service margins.
        </p>
        <div className="metric-grid">
          <div className="metric">
            <span>Year 1 Target Revenue</span>
            <strong>$1.2M</strong>
            <p>Requires 8 retainers @ $12.5k/mo + quarterly accelerators.</p>
          </div>
          <div className="metric">
            <span>Average Client Tenure</span>
            <strong>9 months</strong>
            <p>Maintain via QBR innovation roadmap and ROI storytelling.</p>
          </div>
          <div className="metric">
            <span>R&amp;D Investment</span>
            <strong>12%</strong>
            <p>Fuel internal AI labs, prototype new automation playbooks.</p>
          </div>
          <div className="metric">
            <span>EBITDA Goal</span>
            <strong>25%</strong>
            <p>Achievable by Q4 with lean staffing and playbook reuse.</p>
          </div>
        </div>
        <div className="note">
          Build a rolling cash-flow forecast with 6-month runway buffer. Tie
          contractor spend to confirmed backlog; avoid over-hiring until
          utilization consistently exceeds 75%.
        </div>
      </section>

      <footer className="footer">
        Crafted for founders building AI-native growth agencies. Execute, learn,
        and iterate every 30 days.
      </footer>
    </main>
  );
}
