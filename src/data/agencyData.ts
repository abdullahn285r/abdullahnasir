import { ServiceItem, PricingPackage, CaseStudy, FaqItem } from '../types';

export const AGENCY_INFO = {
  name: "A.N Marketing Agency",
  founder: "Abdullah Nasir",
  founderRole: "Founder & Lead Marketing Strategist",
  tagline: "We Build Digital Presence. We Drive Business Growth.",
  heroHeadline: "Turn Your Digital Presence Into Measurable Business Growth.",
  heroSubheadline: "Complete digital marketing solutions designed to generate more leads, increase sales, build stronger brands, and create a powerful online presence.",
  positioning: "Affordable Full-Service Digital Marketing Agency",
  primaryPromise: "More Leads · More Sales · Stronger Brand · Better Online Presence",
  emailPlaceholder: "contact@anmarketingagency.com",
  phonePlaceholder: "+92 300 0000000",
  whatsappPlaceholder: "+92 300 0000000",
  location: "Worldwide Service (HQ: Pakistan)",
};

export const VALUE_STRIP_ITEMS = [
  { label: "Full-Service Digital Marketing", description: "All core disciplines under one strategic roof" },
  { label: "Worldwide Clients", description: "B2B & B2C strategies tailored to global markets" },
  { label: "Customized Strategies", description: "No copy-paste formulas; built for your business model" },
  { label: "Transparent Reporting", description: "Clear monthly metrics on spend, traffic, and sales" },
  { label: "Dedicated Support", description: "Direct communication with responsible strategists" },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "social-media",
    name: "Social Media Marketing",
    category: "organic",
    shortDescription: "Strategic content creation, community engagement, and brand building to turn social media users into loyal customers.",
    longDescription: "We craft targeted social media campaigns tailored to your specific audience. From high-converting feed posts and carousels to interactive stories and reels, we build brand credibility, foster genuine community interactions, and drive consistent traffic back to your sales funnel.",
    keyBenefits: [
      "Consistent, on-brand visual and textual identity",
      "Proactive audience engagement and community management",
      "Strategic hashtag and organic discovery distribution",
      "Actionable monthly audience growth and sentiment analysis"
    ],
    deliverables: [
      "Monthly Content Calendar (Graphics + Copywriting)",
      "Reels & Short-form video planning",
      "Community interaction & comment monitoring",
      "Profile bio & link hierarchy optimization"
    ],
    channelsOrTech: ["Instagram", "Facebook", "LinkedIn", "TikTok", "X / Twitter"],
    iconName: "Share2"
  },
  {
    id: "complete-seo",
    name: "Complete SEO",
    category: "organic",
    shortDescription: "End-to-end search engine optimization to capture high-intent searchers and build sustainable organic traffic.",
    longDescription: "Our comprehensive SEO methodology ensures your website ranks for keywords that actually drive business revenue. We audit your technical architecture, resolve crawl errors, optimize on-page content structures, build authoritative backlinks, and conquer local search maps.",
    keyBenefits: [
      "Sustainable high-intent buyer traffic without perpetual ad spend",
      "Elimination of technical indexing bottlenecks and slow load speeds",
      "Dominance in Google Search Results and Google Maps Local Pack",
      "Continuous ranking tracking against primary competitors"
    ],
    deliverables: [
      "Technical SEO Auditing & Core Web Vitals Fixes",
      "On-Page SEO (Meta tags, H1-H3 structures, schema markup)",
      "Off-Page Link Building & PR outreach strategies",
      "Local SEO (Google Business Profile optimization)",
      "High-intent Keyword Research & Semantic mapping",
      "SEO Content Strategy & Topical Authority clusters"
    ],
    channelsOrTech: ["Technical SEO", "On-Page SEO", "Off-Page SEO", "Local SEO", "Keyword Research", "SEO Content Strategy"],
    iconName: "Search"
  },
  {
    id: "paid-advertising",
    name: "Paid Advertising",
    category: "advertising",
    shortDescription: "High-ROI paid media campaigns across Meta, Google, TikTok, and LinkedIn engineered for qualified leads and direct sales.",
    longDescription: "We design, execute, and optimize multi-channel paid ad funnels. By combining compelling ad creatives, laser-targeted demographic segmentations, lookalike models, and precision retargeting, we minimize customer acquisition costs (CAC) while scaling revenue.",
    keyBenefits: [
      "Immediate influx of qualified leads and e-commerce transactions",
      "Rigorous A/B testing of angles, ad copy, and video hooks",
      "Pixel & Conversion API server-side tracking integrity",
      "Continuous budget allocation to top-performing ad sets"
    ],
    deliverables: [
      "Meta Ads (Facebook & Instagram Feed, Stories, Reels)",
      "Google Ads (Search, Shopping, Display & Performance Max)",
      "TikTok Ads (Native viral UGC hooks & catalog sales)",
      "LinkedIn Ads (B2B Account-Based Marketing & lead gen)",
      "Full Retargeting Matrix & Dynamic Product Ads (DPA)"
    ],
    channelsOrTech: ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads"],
    iconName: "Target"
  },
  {
    id: "content-marketing",
    name: "Content Marketing",
    category: "creative",
    shortDescription: "Persuasive copywriting, educational articles, and lead magnets that educate prospects and cement industry authority.",
    longDescription: "Content is the engine that fuels SEO, social media, and customer trust. We create customer-centric blog content, thought-leadership articles, whitepapers, and lead magnets that address buyer objections, answer core questions, and move prospects smoothly through your conversion funnel.",
    keyBenefits: [
      "Positions your brand as a recognized thought leader in your niche",
      "Nurtures cold visitors into educated, ready-to-buy prospects",
      "Provides long-term evergreen organic search assets",
      "Supplies compelling assets for sales enablement and emails"
    ],
    deliverables: [
      "Search-optimized blog posts and educational guides",
      "High-converting lead magnets (eBooks, checklists, guides)",
      "Landing page copy and brand storytelling scripts",
      "Case study writing and customer journey narratives"
    ],
    channelsOrTech: ["Long-form Articles", "Lead Magnets", "Brand Storytelling", "Copywriting"],
    iconName: "FileText"
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    category: "advertising",
    shortDescription: "Automated nurture sequences, promotional campaigns, and audience segmentation to maximize customer lifetime value.",
    longDescription: "Turn one-time buyers into repeat brand evangelists. We build automated lifecycle flows—including welcome series, abandoned cart recovery, browse abandonment, post-purchase check-ins, and VIP re-engagement—alongside scheduled promotional broadcasts.",
    keyBenefits: [
      "Highest ROI channel with zero reliance on third-party algorithms",
      "Recovers lost cart abandonment sales on autopilot",
      "Segments users by purchase history, interests, and behavior",
      "Guarantees inbox deliverability and spam compliance"
    ],
    deliverables: [
      "Klaviyo / Mailchimp automated flow architecture",
      "Abandoned Cart & Checkout recovery sequences",
      "Weekly or bi-weekly branded promotional newsletters",
      "List hygiene, SPF/DKIM/DMARC authentication setup"
    ],
    channelsOrTech: ["Klaviyo", "Mailchimp", "Brevo", "HubSpot"],
    iconName: "Mail"
  },
  {
    id: "website-development",
    name: "Website Development",
    category: "creative",
    shortDescription: "Lightning-fast, mobile-first websites and landing pages custom-built to convert clicks into paying customers.",
    longDescription: "A great marketing campaign falls flat if your website fails to convert. We design and build modern, high-speed, mobile-responsive websites and dedicated sales landing pages optimized for maximum user engagement, seamless navigation, and frictionless checkout or lead submission.",
    keyBenefits: [
      "Optimized for maximum mobile speed and 100% responsiveness",
      "Built with psychological conversion frameworks and clear CTAs",
      "Clean semantic code structure that Google crawlers favor",
      "Integrated analytics, event pixels, and lead capture forms"
    ],
    deliverables: [
      "Custom responsive landing pages & corporate websites",
      "Shopify & WooCommerce e-commerce storefront enhancements",
      "Mobile UX and speed optimization (under 2s load targets)",
      "CRM, WhatsApp, and email marketing integrations"
    ],
    channelsOrTech: ["React / Next.js", "WordPress / Webflow", "Shopify", "Tailwind CSS"],
    iconName: "Layout"
  },
  {
    id: "video-editing",
    name: "Video Editing",
    category: "creative",
    shortDescription: "Dynamic, scroll-stopping video edits, short-form reels, and ad creatives designed for peak retention.",
    longDescription: "Video is the highest-performing content format on modern digital channels. Our editing team turns raw footage into punchy, high-retention video creatives, Instagram Reels, TikToks, YouTube Shorts, and paid ad variations with rhythmic pacing, bold captions, and clear calls to action.",
    keyBenefits: [
      "Captures immediate attention within the critical first 3 seconds",
      "Dynamic typography, sound design, and color grading",
      "Tailored vertical (9:16) and horizontal (16:9) multi-platform formats",
      "Multi-hook iterations designed for paid advertising split-tests"
    ],
    deliverables: [
      "High-converting paid ad video creative iterations",
      "Instagram Reels, TikToks & YouTube Shorts editing",
      "Brand documentary, founder messages & product showcases",
      "Custom animated typography, captions, and sound effects"
    ],
    channelsOrTech: ["Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut Pro"],
    iconName: "Video"
  },
  {
    id: "marketing-analytics",
    name: "Marketing Analytics",
    category: "analytics",
    shortDescription: "Transparent data tracking, Google Analytics 4 configuration, and custom KPI dashboards to eliminate guesswork.",
    longDescription: "Never wonder where your marketing dollars are going. We establish rigorous attribution tracking across every channel, configure GA4 events, build custom Looker Studio dashboards, and provide straightforward monthly reports detailing customer acquisition costs, return on ad spend, and conversion bottlenecks.",
    keyBenefits: [
      "100% clarity on which campaigns produce real sales and revenue",
      "Elimination of double-counted conversions and tracking discrepancies",
      "Live 24/7 accessible client reporting dashboard",
      "Monthly strategic review with actionable growth takeaways"
    ],
    deliverables: [
      "Google Tag Manager (GTM) & GA4 custom event tracking",
      "Server-side Meta Conversions API (CAPI) configuration",
      "Custom Looker Studio live performance dashboard",
      "Comprehensive monthly written performance report & review"
    ],
    channelsOrTech: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "Meta CAPI"],
    iconName: "BarChart3"
  },
  {
    id: "cro",
    name: "Conversion Rate Optimization (CRO)",
    category: "analytics",
    shortDescription: "Systematic testing of headlines, layouts, and checkout flows to maximize the percentage of visitors who convert.",
    longDescription: "Scaling traffic without optimizing your conversion rate burns budget. Our CRO process utilizes qualitative user session replays, heatmaps, and systematic split-testing to identify friction points, refine value propositions, and double the conversion rate of existing visitors.",
    keyBenefits: [
      "Extracts significantly more revenue from your existing website traffic",
      "Lowers your overall blended customer acquisition cost (CAC)",
      "Uncovers real customer objections before they bounce",
      "Data-backed design and copy recommendations based on evidence"
    ],
    deliverables: [
      "Comprehensive Conversion Funnel & Heatmap audit",
      "A/B testing implementation on critical landing pages",
      "Checkout, cart, and lead form friction reduction",
      "Micro-copy refinement and psychological persuasion audits"
    ],
    channelsOrTech: ["Heatmap Analysis", "A/B Testing", "Friction Audits", "Funnel Diagnostics"],
    iconName: "TrendingUp"
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: "Customized Marketing Strategy",
    description: "Every business has unique economics, margins, and target personas. We build custom roadmaps rather than recycling rigid one-size-fits-all playbooks."
  },
  {
    title: "Data-Driven Decisions",
    description: "We don't guess what works. Every ad budget adjustment, content decision, and design tweak is backed by concrete analytics and behavioral data."
  },
  {
    title: "Complete Digital Marketing Under One Roof",
    description: "No more managing separate freelancers for SEO, Meta Ads, web design, and video editing. All your digital channels work in unified harmony."
  },
  {
    title: "Transparent Monthly Reporting",
    description: "Clear, jargon-free reports showing where every rupee or dollar was invested, what outcomes were generated, and the next strategic steps."
  },
  {
    title: "Dedicated Client Support",
    description: "Direct lines of communication with your assigned strategists. We treat your marketing budget with the same respect as our own."
  },
  {
    title: "Conversion-Focused Campaigns",
    description: "Vanity likes and empty impressions don't pay the bills. Every campaign is architected around generating qualified leads and sales."
  },
  {
    title: "Continuous Optimization",
    description: "Marketing isn't set-and-forget. We constantly split-test hooks, refine audience targeting, and eliminate underperforming assets."
  },
  {
    title: "Affordable Professional Solutions",
    description: "Enterprise-grade digital marketing quality made accessible and realistically priced for startups, growing businesses, and international brands."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    name: "Research",
    summary: "Understand the business, market, competitors and target audience.",
    details: "We start by auditing your existing digital footprint, studying your top competitors, identifying industry gaps, and profiling your ideal customer profile (ICP)."
  },
  {
    step: "02",
    name: "Strategy",
    summary: "Create a customized digital marketing strategy.",
    details: "We design a comprehensive roadmap selecting the right channels (SEO, Meta, Google, Content), establishing conversion benchmarks, and defining key messages."
  },
  {
    step: "03",
    name: "Execute",
    summary: "Launch campaigns, content, SEO, ads and other marketing activities.",
    details: "Our specialists produce high-converting creative assets, write persuasive copy, build technical tracking, and launch targeted campaigns across chosen channels."
  },
  {
    step: "04",
    name: "Optimize",
    summary: "Analyze performance and continuously improve campaigns.",
    details: "Through weekly data reviews and A/B testing, we trim unprofitable ad sets, double down on winning creatives, and fine-tune landing page conversion rates."
  },
  {
    step: "05",
    name: "Report & Grow",
    summary: "Provide transparent reporting and use insights to improve future growth.",
    details: "You receive transparent monthly reports detailing spent budget, generated leads, and revenue metrics, accompanied by a strategic blueprint for the upcoming month."
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "starter",
    name: "STARTER",
    tagline: "Essential digital marketing foundation for small businesses & emerging brands.",
    pricePKR: "95,000",
    priceUSD: "350",
    idealFor: "Startups and small businesses looking to establish a credible online presence and begin generating regular leads.",
    features: [
      "Social Media Management (12 Custom Posts / Month)",
      "Foundational On-Page & Technical SEO Setup",
      "1 Paid Ad Campaign Management (Meta or Google)",
      "Google Business Profile & Local Search Setup",
      "Basic Conversion Tracking & Google Analytics 4",
      "Monthly Performance PDF Report",
      "Standard Email & WhatsApp Support",
      "Bi-weekly campaign review"
    ],
    notIncluded: [
      "Multi-platform paid advertising",
      "Custom video creative production",
      "Advanced CRO split-testing"
    ],
    ctaLabel: "Get Started with Starter"
  },
  {
    id: "growth",
    name: "GROWTH",
    tagline: "Comprehensive multi-channel engine engineered for rapid revenue & lead scaling.",
    pricePKR: "195,000",
    priceUSD: "690",
    isPopular: true,
    idealFor: "Established small to medium businesses ready to accelerate leads, scale paid ads profitably, and dominate search results.",
    features: [
      "Full Social Media Strategy (20 Posts + 6 Short-form Reels / Month)",
      "Complete Technical, On-Page & Off-Page SEO with Keyword Strategy",
      "Multi-Channel Paid Advertising (Meta Ads + Google Ads)",
      "Content Marketing: 2 In-depth SEO Blog Articles / Month",
      "Email Marketing Setup & Automated Welcome Sequence",
      "Advanced Server-Side Conversion API & GA4 Tracking",
      "Conversion Rate Optimization (CRO) audits on primary pages",
      "Live Looker Studio 24/7 Performance Dashboard",
      "Bi-Weekly Strategy Call & Dedicated Account Manager",
      "Priority WhatsApp & Email Support"
    ],
    ctaLabel: "Get Started with Growth"
  },
  {
    id: "scale",
    name: "SCALE",
    tagline: "Full-scale dedicated marketing powerhouse for high-growth companies & e-commerce brands.",
    pricePKR: "360,000",
    priceUSD: "1,280",
    idealFor: "Medium businesses, e-commerce stores, and enterprise brands requiring end-to-end full-funnel dominance and rapid testing velocity.",
    features: [
      "Omni-Channel Social Media (Daily Posts + 12 High-Retention Reels)",
      "Aggressive SEO Strategy with Link Outreach & Topical Authority Cluster",
      "Full Paid Media Suite (Meta, Google, TikTok & LinkedIn Ads)",
      "Custom Video Editing & Creative Iteration Testing (10 Creatives/mo)",
      "Full Email Lifecycle Flows (Abandoned Cart, VIP, Post-Purchase)",
      "Dedicated Landing Page Development & Continuous A/B Split-Testing",
      "Deep-Funnel Conversion Rate Optimization (CRO) & Heatmap Diagnostics",
      "Custom Multi-Touch Attribution Modeling",
      "Weekly Strategic Execution Calls with Lead Strategist",
      "Direct VIP Slack/WhatsApp Channel with Same-Day Turnaround"
    ],
    ctaLabel: "Get Started with Scale"
  }
];

export const CONCEPT_CASE_STUDIES: CaseStudy[] = [
  {
    id: "pakistani-clothing-brand",
    title: "Pakistani Contemporary Clothing Brand",
    industry: "Fashion / Eastern & Contemporary Pret",
    market: "Pakistan Domestic & Overseas Pakistani Diaspora (USA, UK, UAE)",
    image: "/src/assets/images/clothing_brand_concept_1791273416179.jpg",
    summary: "A concept strategy designed to transform an emerging eastern apparel brand into a high-velocity direct-to-consumer digital powerhouse.",
    businessChallenge: "The brand struggled with high reliance on physical exhibitions, inconsistent seasonal website sales, rising customer acquisition costs on Facebook ads, and cart abandonment rates above 78% due to lack of trust and unclear shipping timelines.",
    targetAudience: "Urban Pakistani women aged 20–42 seeking chic, premium stitched pret and unstitched lawn, alongside overseas Pakistanis looking for authentic eastern wear delivered reliably abroad.",
    strategyOverview: "A unified full-funnel digital marketing approach combining influencer micro-collaborations, high-aesthetic vertical reels, catalog Meta ads with Dynamic Product Ads (DPA), and automated WhatsApp/email abandoned cart recoveries.",
    socialMediaStrategy: [
      "Transitioned feed from static mannequin flat-lays to lifestyle movement reels showcasing fabric drape and embroidery close-ups",
      "Implemented a structured weekly content pillar: Style Guides, Behind-the-Craft, Customer Unboxing, and Flash Drop previews",
      "Established an automated DM-to-order flow for Instagram followers inquiring about sizes and price"
    ],
    paidAdsStrategy: [
      "Top of Funnel: Broad audience video view campaigns featuring 15-second fabric movement reels targeting Tier-1 cities (Lahore, Karachi, Islamabad)",
      "Middle of Funnel: Carousel ads showcasing curated capsule collections to engaged profile visitors",
      "Bottom of Funnel: Dynamic Catalog Ads retargeting visitors who viewed products or added to cart within the past 14 days",
      "International Diaspora Campaigns: Dedicated ad sets targeting UK, US, and UAE with localized currency and DHL express shipping highlights"
    ],
    contentStrategy: [
      "Editorial lookbooks for seasonal collection launches (Eid, Summer Pret, Festive Velvet)",
      "Size guide and fabric care guides addressing common sizing hesitations",
      "Curated styling recommendations paired with matching dupattas and accessories"
    ],
    conversionStrategy: [
      "Redesigned the mobile product page with sticky 'Add to Cart / Buy via Cash on Delivery' buttons",
      "Added clear delivery timelines ('2-3 Working Days in Karachi & Lahore') and easy size exchange policies directly below checkout",
      "Automated automated WhatsApp abandoned checkout notifications offering instant agent assistance"
    ],
    illustrativeOutcomes: [
      { label: "Illustrative ROAS Target", value: "3.8x - 4.5x", context: "Target Return on Ad Spend across blended paid Meta campaigns" },
      { label: "Cart Abandonment Drop", value: "-22%", context: "Expected decrease through automated WhatsApp & email recovery flows" },
      { label: "Overseas Orders Share", value: "30%+", context: "Target contribution from overseas diaspora marketing funnels" }
    ],
    keyLearnings: [
      "In eastern fashion e-commerce, video texture demonstration outperforms high-gloss static photos by over 3x in click-through rates.",
      "Cash on Delivery (COD) clarity paired with instant WhatsApp confirmation drastically reduces return-to-origin (RTO) rates."
    ]
  },
  {
    id: "pakistani-skincare-brand",
    title: "Pakistani Botanical Skincare Brand",
    industry: "Health, Beauty & Organic Cosmetics",
    market: "Pakistan Nationwide (E-Commerce D2C)",
    image: "/src/assets/images/skincare_brand_concept_1791273427588.jpg",
    summary: "A concept strategy demonstrating how to build intense customer trust, solve ingredient skepticism, and scale monthly recurring orders for a clean skincare startup.",
    businessChallenge: "The organic cosmetics market is saturated with dubious 'whitening' claims. The brand needed to differentiate itself as clean, dermatologist-backed, and safe, while overcoming consumer skepticism regarding ingredient authenticity and product efficacy.",
    targetAudience: "Skin-conscious consumers aged 18–35 dealing with acne, hyperpigmentation, sun damage, and barrier repair, seeking non-toxic, cruelty-free local skincare alternatives.",
    strategyOverview: "An education-first marketing funnel focused on Google Search SEO for skincare concerns, transparent ingredient breakdown content, UGC (User-Generated Content) video reviews, and retention-focused email replenishment flows.",
    socialMediaStrategy: [
      "Launched 'Derm-Approved Breakdown' educational reels debunking skincare myths and explaining active ingredients like Niacinamide, Salicylic Acid, and Centella",
      "Shared unedited, raw before-and-after customer journeys with skin texture visible (no smoothing filters)",
      "Hosted weekly live Q&A sessions addressing seasonal skin challenges (monsoon oil control, winter hydration)"
    ],
    paidAdsStrategy: [
      "Problem-Solution Video Ads: Hooking viewers with common skin concerns before introducing gentle organic formulations",
      "Google Search Ads: Bidding on high-intent transactional queries ('best salicylic acid serum in Pakistan', 'organic sunscreen for oily skin')",
      "TikTok Spark Ads: Amplifying genuine customer review videos with creator-native pacing",
      "Replenishment Retargeting: Triggering gentle reminder ads 45 days after purchase when serums typically run out"
    ],
    contentStrategy: [
      "Topical SEO clusters targeting specific skin concerns (hyperpigmentation remedies, barrier repair routine)",
      "Interactive 60-second 'Skin Quiz' recommending customized product bundles based on skin type",
      "Transparent lab certificate showcases and ingredient origin stories"
    ],
    conversionStrategy: [
      "Bundle architecture: Offering 'Clear Skin Routine Bundles' (Cleanser + Serum + SPF) at a bundled discount to increase Average Order Value (AOV)",
      "Visible genuine customer photo reviews with verified buyer badges",
      "Guaranteed patch-test safety policy reducing purchase anxiety"
    ],
    illustrativeOutcomes: [
      { label: "Target AOV Increase", value: "+35%", context: "Anticipated lift in Average Order Value via routine bundling architecture" },
      { label: "Repeat Purchase Rate", value: "28%", context: "Projected 60-day repurchase rate via automated replenishment emails" },
      { label: "Organic Search Share", value: "40%+", context: "Target organic traffic share achieved within 6 months of topical SEO" }
    ],
    keyLearnings: [
      "Skincare customers convert on education and transparency, not hype. Showing realistic timelines (4-6 weeks for skin changes) builds sustainable lifetime loyalty.",
      "A customized skin quiz converts cold traffic at more than double the rate of standard category landing pages."
    ]
  }
];

export const AGENCY_FAQS: FaqItem[] = [
  {
    category: "Services",
    question: "What services does A.N Marketing Agency provide?",
    answer: "A.N Marketing Agency is a full-service digital marketing agency providing Social Media Marketing, Complete Search Engine Optimization (SEO), Paid Advertising (Meta, Google, TikTok, LinkedIn Ads), Content Marketing, Email Marketing, Website & Landing Page Development, Video Editing, Marketing Analytics, and Conversion Rate Optimization (CRO)."
  },
  {
    category: "Coverage",
    question: "Do you work with international clients?",
    answer: "Yes, absolutely. We work with clients worldwide, including businesses in the US, UK, UAE, Canada, Australia, and across Europe, in addition to Pakistan. All communication, reporting, and deliverables are managed seamlessly through dedicated virtual channels (Zoom, Google Meet, WhatsApp, and Slack)."
  },
  {
    category: "Clients",
    question: "Do you work with both B2B and B2C businesses?",
    answer: "Yes. We design tailored strategies for both B2B (lead generation, LinkedIn marketing, account-based ads, long-form content, email nurture) and B2C / E-commerce (direct sales, Meta & Google Shopping ads, high-retention video creatives, conversion rate optimization, and abandoned cart automations)."
  },
  {
    category: "Process",
    question: "How does your digital marketing process work?",
    answer: "We follow a structured 5-step process: 01. Research (deep analysis of your brand, audience, and competitors), 02. Strategy (customized multi-channel blueprint), 03. Execute (launching campaigns, SEO, creatives, and copy), 04. Optimize (weekly A/B testing and data-driven tweaks), and 05. Report & Grow (transparent monthly reporting and strategic expansion)."
  },
  {
    category: "Pricing",
    question: "How much do your services cost?",
    answer: "Our structured monthly retainers start from PKR 95,000 / month (or $350 / month for international clients) for our Starter package, PKR 195,000 / month ($690 / month) for Growth, and PKR 360,000 / month ($1,280 / month) for Scale. Custom scopes can also be tailored based on your specific requirements."
  },
  {
    category: "Pricing",
    question: "Do you offer monthly packages?",
    answer: "Yes, our core services are delivered through monthly retainer packages. This ensures continuous campaign optimization, content production, audience building, and SEO momentum rather than one-off, incomplete efforts."
  },
  {
    category: "Pricing",
    question: "Can I create a custom package?",
    answer: "Yes. While our Starter, Growth, and Scale packages fit most businesses, we frequently build bespoke packages for companies that only need specific services (e.g., SEO + Content only, or Paid Meta Ads + Video Creatives only). Contact us for a tailored quote."
  },
  {
    category: "Reporting",
    question: "Do you provide monthly reports?",
    answer: "Yes. Every client receives a comprehensive monthly report detailing campaign spend, generated impressions, clicks, qualified leads, sales revenue, and return on ad spend (ROAS). Growth and Scale clients also receive access to a 24/7 live Looker Studio performance dashboard."
  },
  {
    category: "Timeline",
    question: "How long does digital marketing take to show results?",
    answer: "Paid advertising (Meta and Google Ads) can generate initial traffic and leads within the first 7 to 14 days after campaigns launch and optimize. Organic channels like SEO and content marketing typically require 3 to 6 months to establish domain authority and compounding organic traffic."
  },
  {
    category: "Consultation",
    question: "Do you provide a free consultation?",
    answer: "Yes, 100% free with no obligation. In our free 30-minute discovery consultation, we review your current website, assess your competitors, and provide 3 to 5 actionable marketing recommendations tailored to your business."
  },
  {
    category: "Capabilities",
    question: "Can you manage multiple digital marketing channels?",
    answer: "Yes, that is our primary strength. Rather than hiring separate freelancers for SEO, social media, paid ads, and web development who never speak to one another, A.N Marketing Agency manages all your channels under one unified, synchronized strategy."
  }
];

export const FOUNDER_INFO = {
  name: "Abdullah Nasir",
  title: "Founder & Lead Marketing Strategist",
  agency: "A.N Marketing Agency",
  bio: "Abdullah Nasir founded A.N Marketing Agency with a single clear mission: to provide businesses of all sizes with access to high-caliber, end-to-end digital marketing solutions that combine strategic rigor, creative excellence, and uncompromising transparency. Abdullah believes sustainable business growth comes from aligning real consumer psychology with ruthless data tracking, rather than chasing fleeting vanity metrics.",
  avatarImage: "/src/assets/images/founder_abstract_badge_1791273438735.jpg",
  values: [
    { title: "Strategy", description: "Every action stems from a deliberate plan rooted in audience psychology and business economics." },
    { title: "Creativity", description: "In saturated feeds, memorable visual storytelling and authentic hooks are the ultimate competitive moat." },
    { title: "Transparency", description: "No smoke and mirrors. You always know where your budget went and what exact outcomes it created." },
    { title: "Growth", description: "We gauge our performance solely by the measurable business revenue and qualified pipeline we build for you." },
    { title: "Continuous Learning", description: "Digital algorithms evolve constantly. We stay relentlessly ahead of algorithm shifts and creative trends." }
  ]
};
