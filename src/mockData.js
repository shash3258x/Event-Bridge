export const MOCK_EVENTS = [
  {
    eventId: "e1",
    organizerId: "org-daiict",
    title: "Tarang",
    description: "The spectacular signature cultural Garba night celebrating rhythm and campus tradition.",
    category: "FESTIVAL",
    city: "Gandhinagar",
    venue: "DAIICT Campus",
    startDate: "11 OCT 2026",
    poster: "T",
  },
  {
    eventId: "e2",
    organizerId: "org-daiict",
    title: "Synapse",
    description: "An explosive, multi-stage music concert experience bringing massive student energy.",
    category: "CONCERT",
    city: "Gandhinagar",
    venue: "DAIICT Campus",
    startDate: "20 FEB 2027",
    poster: "S",
  },
  {
    eventId: "e3",
    organizerId: "org-daiict",
    title: "i.Fest",
    description: "The premier technical festival showcasing cutting-edge development, hackathons, and designs.",
    category: "HACKATHON",
    city: "Gandhinagar",
    venue: "DAIICT Campus",
    startDate: "06 NOV 2026",
    poster: "I",
  },
  {
    eventId: "e4",
    organizerId: "org-daiict",
    title: "Concours",
    description: "The high-intensity multi-sport championship arena testing skill, speed, and strategy.",
    category: "SPORTS",
    city: "Gandhinagar",
    venue: "DAIICT Campus",
    startDate: "26 OCT 2026",
    poster: "C",
  },
  {
    eventId: "e5",
    organizerId: "org-ittm",
    title: "Mood Indigo",
    description: "A monumental live concert production presenting world-class musical talent.",
    category: "CONCERT",
    city: "Mumbai",
    venue: "IIT Bombay",
    startDate: "15 DEC 2026",
    poster: "M",
  },
  {
    eventId: "e6",
    organizerId: "org-iitgn",
    title: "Amalthea",
    description: "An annual pinnacle concert gathering student crowds for an immersive auditory experience.",
    category: "CONCERT",
    city: "Gandhinagar",
    venue: "IIT Gandhinagar",
    startDate: "20 MAR 2027",
    poster: "A",
  },
  {
    eventId: "e7",
    organizerId: "org-iima",
    title: "Chaos",
    description: "The legendary, high-octane cultural concert featuring top-tier live entertainment performance setups.",
    category: "CONCERT",
    city: "Ahmedabad",
    venue: "IIM Ahmedabad",
    startDate: "10 MAR 2027",
    poster: "C",
  },
  {
    eventId: "e8",
    organizerId: "org-bitsg",
    title: "Waves",
    description: "The iconic beachfront musical main-stage weekend highlighting elite indie performance lineups.",
    category: "CONCERT",
    city: "Goa",
    venue: "BITS Goa Campus",
    startDate: "01 NOV 2026",
    poster: "W",
  }
];

export const MOCK_PROFILES = {
  "org-codex": {
    id: "org-codex",
    display_name: "CodeX Club",
    role: "COMMITTEE",
    sub_role: "Technical Student Society",
    city: "Gandhinagar",
    bio: "The premier software development and systems programming community at DAIICT. Powering annual flagship hackathons, algorithms arenas, and low-level engineering sandboxes.",
    email: "codex@daiict.ac.in",
    created_at: "2024-08-12T00:00:00.000Z",
    metrics: { units: "Fests Hosted", units_val: "8", benchmark: "Rating", benchmark_val: "4.9", pipeline: "Active Crew", pipeline_val: "64" },
    dossier: [
      { label: "Affiliated Institution", value: "DAIICT Campus" },
      { label: "Core Verticals", value: "Systems Hackathons · Algorithmic Bootcamps · Dev Ops" },
      { label: "Flagship Platforms", value: "Synapse 2026 · i.Fest · Conflux Code Carnival" },
      { label: "Average Footfall", value: "2,500+ Qualified Engineers" }
    ],
    timeline: [
      "Conflux Code Carnival tracks have officially been verified. Cash pool locked at ₹1,50,000.",
      "Opening applications for infrastructure volunteer crews for our winter staging phases.",
      "Shoutout to the systems engineering squads who pulled off our 36-hour concurrency sprint."
    ],
    reviews: [
      { id: "rev-1", rating: 5, comment: "Exceptional logistical execution. CodeX manages corporate sponsor branding zones flawlessly.", date: "14 APR 2026" },
      { id: "rev-2", rating: 5, comment: "Brilliant tech crowd management. High engagement levels throughout our title sponsor slot.", date: "10 FEB 2026" }
    ]
  },
  "spon-microsoft": {
    id: "spon-microsoft",
    display_name: "Microsoft India",
    role: "COMPANY",
    sub_role: "Global Technology Partner",
    city: "Bangalore",
    bio: "Empowering every student and academic developer on the planet to achieve more. Scouting high-impact university tech fests, open-source sandboxes, and developer pipelines across India.",
    email: "university-relations@microsoft.com",
    created_at: "2023-01-15T00:00:00.000Z",
    metrics: { units: "Fests Sponsored", units_val: "42", benchmark: "Scout Score", benchmark_val: "5.0", pipeline: "Grants Disbursed", pipeline_val: "₹18L" },
    dossier: [
      { label: "Corporate Bracket", value: "Enterprise Software & Cloud Infrastructure" },
      { label: "Target Demographics", value: "Computer Science Majors · Product Designers · Builders" },
      { label: "Preferred Pillars", value: "Generative AI Hackathons · Systems Programming Challenges" },
      { label: "Sponsorship Caps", value: "Up to ₹2,00,000 per Tier-1 Campus Event" }
    ],
    timeline: [
      "Actively reviewing sponsorship decks for late-2026 technical fests in western zones.",
      "Congratulations to the DAIICT i.Fest organizers for a world-class production run.",
      "Looking for regional student ambassadors to scale Azure developer communities."
    ],
    reviews: [
      { id: "rev-3", rating: 5, comment: "On-time financial disbursements and outstanding technical mentoring infrastructure support.", date: "22 MAY 2026" }
    ]
  },
  "vend-vibesonic": {
    id: "vend-vibesonic",
    display_name: "VibeSonic AV Solutions",
    role: "AGENCY / VENDOR",
    sub_role: "Concert Touring & Production Crew",
    city: "Ahmedabad",
    bio: "Elite audio, concert arena truss systems, and multi-tier lighting architecture for massive university footprints and indie rock night setups.",
    email: "ops@vibesonic.in",
    created_at: "2025-05-10T00:00:00.000Z",
    metrics: { units: "Arenas Staged", units_val: "28", benchmark: "AV Rating", benchmark_val: "4.8", pipeline: "Rigging Setup Time", pipeline_val: "4.5 hrs" },
    dossier: [
      { label: "Equipment Inventory", value: "L-Acoustics Sound Systems · Martin Lighting Arrays" },
      { label: "Regional Coverage", value: "Gujarat · Maharashtra · Rajasthan" },
      { label: "Marquee Clients", value: "Synapse Main Stage · Mood Indigo EDM Arc · Waves Goa Arena" },
      { label: "Operational Safety", value: "Certified Mechanical Rigging & Independent Power Lines" }
    ],
    timeline: [
      "Now booking outdoor concert staging packages for the upcoming 2027 spring festival loop.",
      "Just upgraded our inventory with state-of-the-art P2 modular outdoor LED matrix blocks.",
      "Staged three major arenas back-to-back across Ahmedabad last weekend. Shoutout to the technical crews."
    ],
    reviews: [
      { id: "rev-4", rating: 5, comment: "The sound engineering setup for our festival headliner was absolutely world-class.", date: "18 MAR 2026" }
    ]
  }
};