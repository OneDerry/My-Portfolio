import { ArrowLeftToLine } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type TechStack = Record<string, string>;

type Project = {
  title: string;
  timeline: string;
  tagline: string;
  tech: string[];
  demoUrl: string;
  repoUrl: string;
  thumbnail: string;
  img1: string;
  img2: string;
  img3: string;
  overview: string;
  problem: string | string[];
  solution: string | string[];
  learning: string;
  keyFeatures: string[];
  techStack?: TechStack;
};

type Projects = {
  [key: string]: Project;
};

const projects: Projects = {
  "ecommerce-store": {
    title: "E-commerce storefront",
    timeline: "2024",
    tagline: "Fast, predictable storefront with a focused checkout path.",
    tech: ["React", "TypeScript", "Redux Toolkit"],
    demoUrl: "https://e-commerce-4idffu9cd-onederrys-projects.vercel.app/",
    repoUrl: "https://github.com/OneDerry/E-Commerce",
    thumbnail: "/thumbnail/ecommerce-thumbnail.png",
    img1: "/ecomm1.png",
    img2: "/ecomm2.png",
    img3: "/ecomm3.png",
    learning:
      "Improved understanding of React state management and Next.js routing patterns.",
    solution: [
      "Fixing the next/image redirect / weird behavior — I discovered that the real problem wasn't routing at all, it was layout. next/image with fill must have a parent with position: relative and explicit width/height (or Tailwind utilities like relative, w-…, h-…). Once every Image using fill was wrapped in a correctly sized, relatively positioned container (for example in ProductCard, the hero carousel and side cards in homeContent, and the cart thumbnails), the 'redirecting to home' and other weird behavior stopped.",
      "Structuring global state and API calls — I used Redux Toolkit slices for clear responsibilities: cartSlice for items, totals, and localStorage sync (loadCartFromStorage, addToCart, updateQuantity, etc.), and authSlice for user, token, and loading/error state with RTK Query matchers wired to login, signup, and getCurrentUser. All network logic lives in apiSlice (auth, products, orders, reviews, analytics) with a baseQueryWithReauth handler to deal with 401s and backend failures.",
      "Persistent cart and initial app setup — A small storage helper and calculateCartTotal keep cart items and totals in sync with localStorage. In the root Providers component, the app is wrapped with <Provider store={store}>, and an AppInitializer hydrates the cart from storage and triggers useGetCurrentUserQuery whenever a token exists, so the app boots with a consistent cart and auth state.",
      "Auth forms and validation — Login and signup pages use react-hook-form plus Zod schemas (loginSchema and signupSchema) together with shadcn form components. On submit, they call login or signup from useAuth, track loading and error states, and redirect to / on success, giving a smooth, validated auth flow on top of the Redux + RTK Query stack.",
    ],
    overview:
      "Aisle 3 is a modern e‑commerce web application built with the Next.js App Router.It focuses on selling gadgets and electronics, with a clean, product‑first UI and a smooth shopping experience.",
    problem: [
      "next/image causing unexpected navigation (redirecting to home) — Using the Next.js Image component (especially with fill) sometimes caused subtle, unexpected navigation. In a few layouts it behaved like an invisible link and would send me back to the home page, which at first looked like a routing bug rather than a layout issue.",
      "Layout and positioning issues with Image + fill — Across components like ProductCard (components/products/ProductCard.tsx), the hero carousel and side cards (app/homeContent.tsx), and cart thumbnails (app/cart/page.tsx), Image with fill depended heavily on a correctly sized, relatively positioned parent. When that wasn't set up, images would overflow, collapse, or render inconsistently.",
      "State and data flow complexity — Coordinating Redux slices (cartSlice, authSlice, productSlice, orderSlice), the RTK Query API layer (apiSlice), and custom hooks (useAuth, useProducts, useProduct) made data flow non-trivial. Tracking down wrong data or empty lists often meant debugging both the API layer and the slice logic at the same time.",
      "Auth flow and token persistence — Designing a reliable auth flow with validated login/sign-up forms (Zod + React Hook Form), localStorage-based token persistence, and auto-verifying the current user on app load (useGetCurrentUserQuery in Providers and authSlice extraReducers) took several iterations to avoid inconsistent or out-of-sync auth state.",
    ],
    keyFeatures: [
      "Product catalog with filtering, search, and category navigation.",
      "Persistent shopping cart synced with localStorage.",
      "Secure authentication with JWT tokens and auto-refresh.",
      "Responsive design optimized for mobile, tablet, and desktop.",
      "Order history and user account management.",
    ],
    techStack: {
      "UI layer": "React, TypeScript, Next.js",
      State: "Redux Toolkit, RTK Query",
      Styling: "Tailwind CSS, shadcn/ui",
    },
  },
  "admin-dashboard": {
    title: "Admin dashboard",
    timeline: "2024",
    tagline:
      "Operational dashboard with table-first layout and subtle analytics.",
    tech: ["React", "TypeScript"],
    demoUrl: "https://h-cube-dashboard.vercel.app/",
    repoUrl: "https://github.com/OneDerry/landing-dashboard",
    thumbnail: "/thumbnail/dashboard-thumbnail.png",
    img1: "/land1.png",
    img2: "/land2.png",
    img3: "/land3.png",
    learning:
      "Gained experience with dashboard design patterns and data visualization.",
    solution:
      "Designed a table-first layout with filtering and sorting capabilities for efficient data management.",
    overview:
      "A comprehensive admin interface for managing products, orders, and user accounts with real-time data visualization.",
    problem:
      "The client needed a centralized admin interface to efficiently manage their growing product catalog, process orders, and monitor user activity across multiple channels.",
    keyFeatures: [
      "Data tables with sorting, filtering, and pagination.",
      "Real-time analytics charts and KPI cards.",
      "User management with role-based access control.",
      "Responsive sidebar navigation with collapsible sections.",
      "Export functionality for reports and data.",
    ],
    techStack: {
      "UI layer": "React, TypeScript",
      "Data viz": "Charts, KPI cards",
      Layout: "Table-first, responsive sidebar",
    },
  },
  serverse: {
    title: "Serverse",
    timeline: "2026-Present",
    tagline: "The next generation marketplace for skilled services.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://www.serverse.co.uk",
    repoUrl: "",
    thumbnail: "/c1.png",
    img1: "/c2.png",
    img2: "/c3.png",
    img3: "/c4.png",

    overview:
      "Serverse connects skilled professionals with customers through one trusted digital platform — making it simple to discover, book, and pay for great local work.",

    problem: [
      "Skilled professionals often rely on word of mouth and social media to attract customers, limiting their growth and visibility.",
      "Customers struggle to find trusted local service providers, compare options, and book with confidence.",
      "The booking, payment, and communication process is fragmented across multiple platforms.",
      "Many independent professionals lack affordable digital tools to manage bookings, payments, and their online reputation.",
    ],

    solution: [
      "Designed and developed a full-stack marketplace connecting skilled professionals with customers through a single trusted platform.",
      "Built an end-to-end booking ecosystem with service discovery, appointment scheduling, secure payments, and user management.",
      "Created dedicated dashboards for professionals to manage services, bookings, payments, and customer interactions.",
      "Implemented a responsive, mobile-first architecture focused on performance, scalability, and an intuitive user experience.",
    ],

    learning:
      "Building Serverse from scratch strengthened my full-stack development skills, from designing scalable database structures and backend APIs to creating a performant, production-ready frontend. It also gave me practical experience translating a business idea into a complete marketplace platform while balancing usability, scalability, security, and maintainability.",

    keyFeatures: [
      "Marketplace for discovering trusted local professionals.",
      "Advanced search, filtering, and service categorization.",
      "Appointment booking and scheduling system.",
      "Secure online payment integration.",
      "Professional dashboard for managing services and bookings.",
      "Customer accounts with booking history.",
      "Verified reviews and reputation system.",
      "Responsive, mobile-first Progressive Web App (PWA).",
    ],
    techStack: {
      Frontend: "Next.js, TypeScript",
      Backend: "Laravel, PHP",
      Database: "MySQL",
      Styling: "Tailwind CSS",
      Architecture: "REST API, SSR, Mobile-first, PWA",
    },
  },

  "change-for-humanity": {
    title: "Change For Humanity",
    timeline: "2023-2025",
    tagline:
      "A nonprofit platform connecting donors with impactful humanitarian causes worldwide.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    demoUrl: "https://changeforhumanity.org",
    repoUrl: "",
    thumbnail: "/c1.png",
    img1: "/c2.png",
    img2: "/c3.png",
    img3: "/c4.png",

    overview:
      "Change For Humanity is a nonprofit web platform designed to connect donors with humanitarian causes. The site showcases ongoing initiatives, accepts donations, and provides transparency through impact stories and progress updates.",

    problem: [
      "The organization lacked a modern digital presence to reach potential donors effectively.",
      "Previous donation workflows were fragmented across multiple third-party platforms.",
      "Content updates required developer intervention, slowing down communication with supporters.",
      "Mobile users experienced poor usability on the legacy site.",
    ],

    solution: [
      "Built a responsive React SPA with Vite for fast load times and smooth navigation.",
      "Implemented a unified donation flow integrated with [payment provider] for seamless transactions.",
      "Created a content structure that allows easy updates to campaigns and impact stories.",
      "Designed mobile-first layouts ensuring accessibility across all device sizes.",
    ],

    learning:
      "Deepened my understanding of building for nonprofit audiences—balancing emotional storytelling with clear calls-to-action. Also gained experience coordinating with stakeholders who have non-technical backgrounds.",
    keyFeatures: [
      "Campaign pages with progress tracking and donation goals.",
      "Integrated donation flow with secure payment processing.",
      "Impact stories and testimonials section.",
      "Mobile-responsive design for on-the-go donors.",
      "Social sharing integration for campaign visibility.",
    ],
    techStack: {
      "UI layer": "React, TypeScript, Vite",
      Styling: "Tailwind CSS",
      Approach: "Mobile-first, SPA",
    },
  },
  "riser-school": {
    title: "Riser School",
    timeline: "2024-2025",
    tagline:
      "An educational platform with integrated payment processing for seamless tuition management.",
    tech: ["React", "TypeScript", "Vite", "Paystack"],
    demoUrl: "https://riserschool.com.ng/",
    repoUrl: "https://github.com/OneDerry/riser",
    thumbnail: "/riser.png",
    img1: "/riser2.png",
    img2: "/riser3.png",
    img3: "/riser4.png",
    learning:
      "Strengthened my skills in integrating third-party payment APIs (Paystack) and handling secure transaction flows. Also improved collaboration workflows through a multi-contributor project.",
    solution: [
      "Built a responsive React SPA with Vite for fast development and optimized production builds.",
      "Integrated Paystack for secure, reliable payment processing of tuition and fees.",
      "Designed an intuitive interface that simplifies enrollment and payment workflows for students and parents.",
      "Implemented TypeScript throughout for type safety and improved developer experience.",
    ],
    overview:
      "Riser School is an educational web platform that streamlines the enrollment and payment process for students. It provides a modern interface for browsing courses, managing registrations, and processing tuition payments securely via Paystack.",
    problem: [
      "Manual enrollment and payment processes created administrative overhead for the school.",
      "Parents and students lacked a centralized platform to view courses and make payments online.",
      "Existing solutions were either too complex or lacked local payment gateway support.",
      "The school needed a modern, mobile-friendly interface to attract and retain students.",
    ],
    keyFeatures: [
      "Course catalog with detailed program information.",
      "Secure Paystack integration for tuition payments.",
      "Student enrollment and registration system.",
      "Payment history and receipt generation.",
      "Mobile-friendly interface for parents and students.",
    ],
    techStack: {
      "UI layer": "React, TypeScript, Vite",
      Payments: "Paystack",
      Styling: "Tailwind CSS",
    },
  },
  "coffee-website": {
    title: "Coffee Haven",
    tagline:
      "A modern coffee shop website with e-commerce functionality and a warm, inviting design.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://coffee-shop-zeta-ruddy.vercel.app/",
    repoUrl: "https://github.com/OneDerry/coffee-shop",
    thumbnail: "/coffee.png",
    img1: "/coffee.png",
    img2: "/coffee1.png",
    img3: "/coffee2.png",
    learning:
      "Improved my skills in building visually appealing e-commerce interfaces and implementing shopping cart functionality. Gained experience balancing aesthetic design with usability for a retail audience.",
    solution: [
      "Built a Next.js application with server-side rendering for fast initial page loads and SEO benefits.",
      "Designed a warm, inviting UI that reflects the coffee shop brand with bestsellers and combo offers prominently displayed.",
      "Implemented a shopping cart system for browsing products and managing orders.",
      "Added customer reviews section to build trust and social proof for the brand.",
    ],
    overview:
      "Coffee Haven is an e-commerce website for a coffee shop, featuring a product catalog with bestsellers, special combo offers, customer reviews, and a shopping cart. The design emphasizes warmth and craftsmanship to match the brand's 'brewed with passion' identity.",
    problem: [
      "The coffee shop needed an online presence to reach customers beyond their physical location.",
      "Customers had no way to browse the menu or place orders online.",
      "The brand lacked a digital storefront that reflected its artisanal, passion-driven identity.",
      "No system existed to showcase customer reviews and build social proof.",
    ],
    keyFeatures: [
      "Product catalog with bestsellers and combo offers.",
      "Shopping cart with add/remove and quantity controls.",
      "Customer reviews and ratings section.",
      "Contact page with location and business hours.",
      "Warm, brand-aligned visual design throughout.",
    ],
    timeline: "2025",
    techStack: {
      "UI layer": "React, TypeScript, Next.js",
      Styling: "Tailwind CSS",
      Approach: "SSR, product-first layout",
    },
  },
  selas: {
    title: "Selas",
    timeline: "Ongoing",
    tagline:
      "A campus-first marketplace where students buy, sell, and trade items safely within their university community.",
    tech: ["React Native", "TypeScript"],
    demoUrl: "#",
    repoUrl: "https://github.com/OneDerry/SELAS",
    thumbnail: "/file.svg",
    img1: "/file.svg",
    img2: "/file.svg",
    img3: "/file.svg",
    overview:
      "Selas is a React Native mobile marketplace built for university students. It provides a trusted, campus-scoped environment where students can list items for sale, browse listings from peers, message sellers directly, and complete transactions — all without leaving the app. The platform is designed to replace scattered group chats and notice boards with a dedicated, searchable commerce experience.",
    problem: [
      "Students relied on fragmented channels — WhatsApp groups, Twitter threads, notice boards — to buy and sell items, making discovery unreliable.",
      "No trust layer existed for peer-to-peer transactions on campus, leading to scams and no-shows.",
      "Existing general-purpose marketplaces like Facebook Marketplace lacked campus-specific context, making it hard to find nearby, relevant listings.",
      "Sellers had no structured way to manage listings, track interest, or communicate with potential buyers in one place.",
    ],
    solution: [
      "Built a cross-platform React Native app with TypeScript for a native experience on both iOS and Android from a single codebase.",
      "Designed a campus-scoped feed so students only see listings from verified peers within their university community.",
      "Implemented in-app messaging so buyers and sellers can negotiate and coordinate handoffs without sharing personal contact details.",
      "Created a streamlined listing flow where sellers can photograph items, set prices, add descriptions, and publish in under a minute.",
    ],
    learning:
      "Deepened my React Native skills in building a marketplace with real-time messaging and image-heavy listing feeds. Learned to balance feature richness with mobile performance constraints, and gained experience designing trust and safety patterns for peer-to-peer platforms.",
    keyFeatures: [
      "Campus-scoped marketplace feed with category filtering and search.",
      "Listing creation with photo upload, pricing, and item descriptions.",
      "In-app messaging between buyers and sellers.",
      "User profiles with listing history and ratings.",
      "Push notifications for new messages and listing updates.",
      "Cross-platform support for iOS and Android.",
    ],
    techStack: {
      Framework: "React Native, TypeScript",
      Platform: "iOS, Android (Expo)",
      Features: "Real-time messaging, image uploads",
    },
  },
  "grey-auction": {
    title: "Grey Auction",
    timeline: "Ongoing",
    tagline:
      "A live auction marketplace connecting buyers and sellers through real-time bidding, with role-based dashboards and end-to-end transaction management.",
    tech: ["Next.js", "TypeScript", "Redux"],
    demoUrl: "",
    repoUrl: "",
    thumbnail: "/auction_home.png",
    img1: "/auction1.png",
    img2: "/auction2.png",
    img3: "/auction3.png",
    overview:
      "Grey Auctions is a full-featured online auction platform where buyers compete in real-time bidding and sellers list items to reach genuine buyers. The platform spans multiple product categories — art, construction, electronics, and transport & logistics — and includes dedicated dashboards for buyers, sellers, and administrators. Each role has tailored views for managing bids, listings, invoices, payments, and analytics.",
    problem: [
      "No centralised platform existed for sellers to list across multiple categories and reach a wide pool of competing buyers in real time.",
      "Buyers needed a way to track active bids, winning status, and auction timers across multiple items simultaneously.",
      "Sellers lacked visibility into revenue trends, buyer messages, and pending requests without switching between tools.",
      "Admins required a single surface to manage auctions, bids, users, banners, FAQs, and content policies without direct database access.",
    ],
    solution: [
      "Built a marketplace frontend with Next.js and TypeScript featuring category-based browsing, search, and featured auction carousels on the homepage.",
      "Implemented a buyer dashboard with KPI cards (active bids, winning, outbid, ending soon), an active auctions table with live status indicators, and a recent invoices view with payment tracking.",
      "Created a seller dashboard with revenue analytics (sales vs. expenses over 12 months), a messages inbox, listed auctions management, and a multi-step seller onboarding flow.",
      "Designed an admin dashboard with platform-wide KPIs, revenue charts, registered user breakdowns, auction activity tracking, and sidebar navigation for managing buyers, sellers, categories, banners, FAQs, and policies.",
    ],
    learning:
      "Gained deep experience architecting role-based interfaces where the same data (auctions, bids, invoices) is presented differently depending on user context. Improved my approach to building dashboard layouts with real-time status indicators and multi-panel views using Redux for cross-component state coordination.",
    keyFeatures: [
      "Real-time auction bidding with live countdown timers and status indicators.",
      "Category-based browsing across art, construction, electronics, and transport.",
      "Buyer dashboard with bid tracking, wishlist, purchase history, and auction alerts.",
      "Seller dashboard with revenue analytics, messages, and auction management.",
      "Admin panel with platform KPIs, user management, and content moderation.",
      "Multi-step seller onboarding with personal details and verification.",
      "Invoice and payment tracking with status labels across all roles.",
      "Internationalisation support with language switching.",
    ],
    techStack: {
      "UI layer": "Next.js, TypeScript",
      State: "Redux Toolkit",
      Features: "Role-based dashboards, real-time bidding",
    },
  },
  sero: {
    title: "Sero-revamp",
    timeline: "Completed",
    tagline:
      "A bold, zero-sugar soda brand brought to life with a modern e-commerce storefront and playful visual identity.",
    tech: ["Next.js", "TypeScript", "Redux"],
    demoUrl: "https://sero-creative.vercel.app/",
    repoUrl: "https://github.com/OneDerry/SERO-revamp",
    thumbnail: "/sero_home.png",
    img1: "/sero_home.png",
    img2: "/sero_home.png",
    img3: "/sero_home.png",
    overview:
      "Sero is a revamped e-commerce website for a zero-sugar soda brand. The site serves as both a marketing platform and storefront, showcasing four bold flavours with a clean, modern design. It features product browsing, a shopping cart, a store locator, wholesale purchasing options, and a flavour discovery quiz — all built on Next.js for fast, SEO-friendly performance.",
    problem: [
      "The original brand site lacked a cohesive visual identity and failed to communicate the product's value proposition clearly.",
      "There was no integrated shopping experience — users had to navigate away to purchase products.",
      "Mobile usability was poor, resulting in high bounce rates from the brand's primary audience.",
      "Content updates and product launches required manual developer intervention each time.",
    ],
    solution: [
      "Rebuilt the site from scratch with Next.js and TypeScript for server-rendered performance and type safety across the codebase.",
      "Designed a product-first layout with a hero section, flavour showcase, and inline cart flow so users can browse and buy without friction.",
      "Implemented a mobile-first responsive design with smooth section transitions using wavy SVG dividers and gradient accents.",
      "Structured the content and product data to support easy updates for new flavours, blog posts, and promotional campaigns.",
    ],
    learning:
      "Strengthened my ability to build brand-driven e-commerce experiences where visual storytelling and conversion flow need to work together. Gained experience managing product state with Redux alongside Next.js server-side rendering.",
    keyFeatures: [
      "Product catalog showcasing four bold zero-sugar soda flavours.",
      "Integrated shopping cart with add/remove and checkout flow.",
      "Flavour discovery quiz to guide users to their ideal product.",
      "Store locator for finding physical retail locations.",
      "Wholesale purchasing flow for bulk orders.",
      "Newsletter signup with discount incentive integration.",
      "Blog section for brand storytelling and content marketing.",
    ],
    techStack: {
      "UI layer": "Next.js, TypeScript",
      State: "Redux Toolkit",
      Styling: "CSS Modules, SVG transitions",
    },
  },
  nsimis: {
    title: "NSIMIS",
    timeline: "2024–2025",
    tagline:
      "Multi-role government monitoring platform with offline-first field reporting and a dynamic scoring engine.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://nsimis.com",
    repoUrl: "",
    thumbnail: "/simis1.png",
    img1: "/simis2.png",
    img2: "/simis3.png",
    img3: "/simis4.png",
    overview:
      "NSIMIS (Social Intervention Monitoring Information System) is a Nigerian government platform built to oversee national social programs like GEEP and N-Power. It connects three tiers of users — National Coordinators who own the whole system, Program Managers who run individual programs, and Independent Monitors collecting data in the field — into a single workflow for assignment, reporting, review, and performance tracking.",
    problem: [
      "Social programs span every Nigerian state and LGA, but there was no unified system to assign field workers, capture beneficiary visits, and roll those reports up into a national performance view.",
      "Independent Monitors operate in low-connectivity rural areas, so reports needed to be capturable offline and synced opportunistically without losing GPS or photo evidence.",
      "Each program defines its own assessment criteria — questions, scoring weights, answer types — so the platform needed a dynamic program/category/question builder rather than hard-coded forms.",
      "The chain of accountability (submit → review → query → resubmit, plus query/removal requests raised against personnel) required clear role-based permissions and an audit trail across two layers of approval.",
    ],
    solution: [
      "Built a role-aware web app with three permission tiers — NC, NPM, IM — each scoped to what they're allowed to see: NC sees every program and state, NPM sees only their program, IM sees only their assigned LGA.",
      "Designed a dynamic program model: a National Coordinator creates a Program, then Categories, then Questions with answer types (Yes/No, Number, Text, Date, Multichoice) and point weights, so each program ships with its own scorecard.",
      "Implemented an offline-first IM flow — reports queue locally with captured GPS coordinates and a beneficiary photo, then auto-sync once the device regains connectivity, with per-report success/failure feedback on resync.",
      "Wired the full review lifecycle: IM submits → Pending → NPM approves or queries → if queried, IM resubmits → back to Pending. NPM can also raise Query or Removal requests against an IM, which the NC adjudicates with required justification notes; both parties are notified automatically.",
      "Added bulk beneficiary onboarding via .xlsx upload with per-row validation feedback, and rolled-up dashboards that grade State (≥80% top / 50–79% average / <50% off-track) and LGA performance against tiered thresholds.",
    ],
    learning:
      "Designing for three distinct personas under a single data model — and making sure offline field workers, mid-tier reviewers, and national administrators all see a coherent, properly scoped slice of the same system — pushed me to think carefully about permissions, data scoping, and graceful degradation when the network isn't there.",
    keyFeatures: [
      "Three-role access control: National Coordinator, Program Manager, Independent Monitor — each with its own scoped views.",
      "Dynamic program builder: Programs → Categories → weighted Questions with five answer types.",
      "Offline-first field reports with GPS capture, beneficiary photo, and queued sync when connectivity returns.",
      "Report review lifecycle: Approve / Query / Resubmit, with per-report status (Pending, Approved, Queried).",
      "Approval-request system for personnel actions (Query or Removal) with NC adjudication and required notes.",
      "Bulk beneficiary import via Excel (.xlsx) with per-row validation and error feedback.",
      "Performance dashboards rating State and LGA results against tiered thresholds (top / average / off-track).",
      "Self-serve auth: login by email, username, or SIMIS ID; OTP-based password reset; in-app profile updates.",
    ],
    techStack: {
      "UI layer": "Next.js, TypeScript",
      Styling: "Tailwind CSS",
      "Offline sync": "Client-side queue with auto-resync",
    },
  },
} as const;

type Slug = keyof typeof projects;

interface CaseStudyPageProps {
  params: Promise<{ slug: Slug }>;
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return {
      title: "Project · Frontend case study",
    };
  }

  return {
    title: `${project.title} · Frontend case study`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} · Frontend case study`,
      description: project.tagline,
      images: [{ url: project.thumbnail }],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects[slug];

  // Get all project slugs in order
  const projectSlugs: string[] = Object.keys(projects);
  const currentIndex = projectSlugs.indexOf(String(slug));
  const nextIndex = (currentIndex + 1) % projectSlugs.length;
  const nextSlug = projectSlugs[nextIndex];
  const nextProject = projects[nextSlug];

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-20 md:px-8 md:py-24 lg:py-28">
          <h1 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            Project not found
          </h1>
          <p className="text-sm text-muted-foreground">
            This slug is not wired to a case study yet. Replace the placeholder
            data or add a new entry to the map.
          </p>
          <Link
            href="/projects"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-[90%] sm:max-w-[70%] flex-col gap-16 px-6 py-20 md:px-8 md:py-24 lg:py-28">
        {/* Navigation footer */}
        <div className="flex items-center justify-between border-b border-border pb-6 text-sm text-muted-foreground">
          <Link
            href="/projects"
            className="text-sm font-medium text-primary flex items-center gap-2 group underline-offset-4 hover:underline"
          >
            <ArrowLeftToLine className="group-hover:-translate-x-1 transition-all" />{" "}
            Back to projects
          </Link>
          <Link
            href={`/projects/${nextSlug}`}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
          >
            Next project · {nextProject.title}
            <ArrowLeftToLine className="w-3 h-3 rotate-180 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
        {/* Header */}
        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Case study
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {project.title}
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] text-muted-foreground">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="relative h-40 md:h-96 rounded-md border border-border bg-background/40 overflow-hidden">
            <Image
              src={project?.thumbnail || "/file.svg"}
              alt={`${project?.title || "Project"} thumbnail`}
              fill
              className="object-cover"
            />
          </div>
        </header>

        {/* Overview */}
        <section className="space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
            Overview
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.overview}
          </p>
        </section>

        {/* Problem */}
        <section className="space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
            Problem
          </h2>
          {Array.isArray(project.problem) ? (
            <ul className="grid max-w-3xl gap-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.problem.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.problem ||
                "No problem statement available for this project."}
            </p>
          )}
        </section>

        {/* Solution */}
        <section className="space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
            Solution
          </h2>
          {Array.isArray(project.solution) ? (
            <ul className="grid max-w-3xl gap-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.solution.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.solution ||
                "No solution details available for this project."}
            </p>
          )}
        </section>

        {/* Key features */}
        {"keyFeatures" in project && project.keyFeatures && (
          <section className="space-y-3">
            <h2 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
              Key features
            </h2>
            <ul className="grid gap-2 text-sm text-muted-foreground md:text-base">
              {project.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Tech stack */}
        <section className="space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
            Tech stack
          </h2>
          {project.techStack ? (
            <div className="grid gap-3 md:grid-cols-3">
              {Object.entries(project.techStack).map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground"
                >
                  {label}: {value}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2 text-[11px] text-muted-foreground">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </section>

        {/* Screenshots */}
        <section className="space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
            Screenshots
          </h2>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="relative h-40 md:h-56 rounded-md border border-border bg-background/40 overflow-hidden">
              <Image
                src={project?.img1 || "/file.svg"}
                alt={`${project?.title || "Project"} thumbnail`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 md:h-56 rounded-md border border-border bg-background/40 overflow-hidden">
              <Image
                src={project?.img2 || "/file.svg"}
                alt={`${project?.title || "Project"} thumbnail`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 md:h-56 rounded-md border border-border bg-background/40 overflow-hidden">
              <Image
                src={project?.img3 || "/file.svg"}
                alt={`${project?.title || "Project"} thumbnail`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* What I learned */}
        <section className="space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
            What I learned
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.learning ||
              "No learning reflections available for this project."}
          </p>
        </section>

        {/* Links */}
        {(project.demoUrl &&
          project.demoUrl !== "#" &&
          project.demoUrl !== "") ||
        (project.repoUrl &&
          project.repoUrl !== "#" &&
          project.repoUrl !== "") ? (
          <section className="space-y-3">
            <h2 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
              Links
            </h2>
            <div className="flex flex-wrap gap-3 text-sm">
              {project.demoUrl &&
                project.demoUrl !== "#" &&
                project.demoUrl !== "" && (
                  <Link
                    href={project.demoUrl}
                    className="rounded-md border border-border px-4 py-2 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Live Build
                  </Link>
                )}
              {project.repoUrl &&
                project.repoUrl !== "#" &&
                project.repoUrl !== "" && (
                  <Link
                    href={project.repoUrl}
                    className="rounded-md border border-border px-4 py-2 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    GitHub repo
                  </Link>
                )}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
