import Image from "next/image";
import { SlideSection } from "../ui/slide_section";

export function About() {
  return (
    <SlideSection
      id="about"
      className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:items-start"
    >
      <div className="relative h-56 md:h-96 rounded-md border border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.3)] bg-background/40 overflow-hidden">
        <Image
          src="/MyProfilePic.JPG"
          alt="Mesiri Olomu"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
          About
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          Professional code is what I do, and that comes with turning product
          requirements into small, predictable UI building blocks. My work leans
          on TypeScript, React, Redux, and modern CSS utilities to keep
          codebases readable and scalable. You should see how I arrange my code.
          <br />
          I&apos;m a Frontend Developer. I code with my brain and use AI to
          speed up what I already have — I think of AI as a multiplier. Frontend
          is interesting, and I picked up interest in 2020. I started learning
          the basics and soon found myself writing React. I asked a lot of
          questions, met a lot of friends who gave me tips here and there, and
          one I&apos;ll never forget is a friend of mine telling me &quot;In
          CSS, everything is a box.&quot; The moment I heard that, I looked at
          CSS differently from then on, and styling just stuck. There&apos;s
          nothing I can&apos;t build. JavaScript, TypeScript — what&apos;s the
          difference? It&apos;s in the name: it&apos;s scripting with types. I
          call TypeScript a safe JavaScript. If anyone asks me, I prefer React
          to Next. I understand React may come with more boilerplate, but I just
          love the flexibility. I understood the structure of frontend better
          with React — the why&apos;s and how&apos;s. I picked up my first
          full-time job in 2024 after finishing uni in 2023. Yes, I studied
          Economics, but tech said &quot;no, come my way.&quot; So here I am.
          Come, let&apos;s build.
        </p>
      </div>
    </SlideSection>
  );
}
