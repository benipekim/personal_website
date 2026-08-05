import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon, Lightbulb, Target } from "lucide-react";
import { ShaderBackground } from "@/components/ui/simplex-noise-spots";
import { SiteDock } from "@/components/site-dock";

function Bold({ children }: { children: React.ReactNode }) {
  return (
    <span className="not-italic font-semibold text-black">{children}</span>
  );
}

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-screen w-full items-center overflow-hidden">
        <ShaderBackground className="absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-xl px-6 py-24">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-white/60">
              <Image
                src="/profile.png"
                alt="İpek Ateş"
                fill
                sizes="80px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-semibold text-black sm:text-3xl">
                İpek Ateş
              </h1>
              <p className="text-sm text-white sm:text-base">
                Student at Koç University
              </p>
            </div>
          </div>

          <h2 className="mt-10 text-sm font-semibold tracking-wide text-black uppercase">
            About
          </h2>
          <div className="mt-3 space-y-6 font-serif text-lg italic font-light text-[#999999] sm:text-xl">
            <p>
              Hi there, I&apos;m <Bold>İpek</Bold> ☀️. 
            </p>
            <p>
              I study{" "}
              <Bold>Industrial Engineering</Bold> and <Bold>Economics</Bold>{" "}
              at <Bold>Koç University</Bold>. I&apos;m passionate about{" "}
              <Bold>building</Bold> systems and turning ideas into real{" "}
              <Bold>products</Bold>.
            </p>
            <p>
              Beyond my career, <Bold>dance</Bold> and <Bold>yoga</Bold> fill
              my world. Nothing brings me more joy than letting my body{" "}
              <Bold>move</Bold> to the rhythm.
            </p>
            <p>
              I also make time for <Bold>reading</Bold> and{" "}
              <Bold>content creation</Bold>. I&apos;m still at the beginning
              of this journey, but I believe I&apos;ll soon be{" "}
              <Bold>sharing my story</Bold> with the world.
            </p>
          </div>
        </div>
      </div>

      <section
        id="career"
        className="relative min-h-screen w-full overflow-hidden"
      >
        <Image
          src="/section-background.png"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
        <div className="relative z-10 flex min-h-screen w-full flex-col justify-start gap-6 px-6 pt-20 pb-4 sm:px-16 sm:pt-24">
        <h2 className="font-serif text-2xl font-light lowercase tracking-tight text-black sm:text-4xl">
          career.
        </h2>

        <div className="mx-auto w-full max-w-3xl">
          <h3 className="text-sm font-semibold tracking-wide text-black uppercase">
            Highlights &amp; Academic Milestones
          </h3>
          <ul className="mt-3 space-y-3 font-serif text-base italic font-light text-[#999999] sm:text-lg">
            <li>
              <Bold>National 10th Place in YKS (2023):</Bold> Ranked 10th
              nationwide among over 3.5 million candidates in
              Türkiye&apos;s Higher Education Institutions Exam.
            </li>
            <li>
              <Bold>Koç University Teaching &amp; Mentorship:</Bold> Selected
              as Section Leader for COMP125: Introduction to
              Programming(Python), guiding students through lab hours and
              complex core concepts.
            </li>
            <li>
              <Bold>Academic Excellence &amp; Merit Scholarships:</Bold>{" "}
              Recipient of the Koç University Full Scholarship (KUDEB), Vehbi
              Koç Honor Award, and Cahit Arf Scholarship.
            </li>
            <li>
              <Bold>Corporate Relations at Koç University Business Club:</Bold> Managed
              corporate communications and event operations for the
              Networking Night Committee.
            </li>
            <li>
              <Bold>Engineering &amp; Tech Projects:</Bold> Contributed to
              fixed-wing UAV design and electronics (2022), as well as
              research on non-chemical pest control (2021).
            </li>
          </ul>
        </div>

        <div className="mx-auto flex w-full max-w-3xl gap-3">
          <div className="flex flex-col items-center pt-0.5">
            <Lightbulb className="size-4 shrink-0 text-black" />
            <div className="mt-2 w-px flex-1 bg-black/15" />
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-black uppercase">
              Current Focus &amp; AI Research
            </h3>
            <div className="mt-3 space-y-3 font-serif text-base italic font-light text-[#999999] sm:text-lg">
              <p>
                I am currently completing <Bold>online courses</Bold> to
                deepen my core knowledge of machine learning and deep
                learning.
              </p>
              <p>
                Parallel to this, I am actively exploring{" "}
                <Bold>&quot;vibe coding&quot; workflows</Bold> in{" "}
                <Bold>VS Code with GitHub</Bold>—leveraging
                AI-assisted development tools to rapidly prototype web
                applications and streamline engineering processes.
              </p>
              <p>
                To apply these skills in an academic setting, I am
                preparing to collaborate with a faculty member at Koç
                University on an <Bold>AI/ML research project</Bold> in the
                near future.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section
        id="hobbies"
        className="flex h-screen w-full flex-col justify-center gap-8 overflow-hidden px-6 py-4 sm:px-16"
      >
        <h2 className="font-serif text-2xl font-light lowercase tracking-tight text-black sm:text-4xl">
          hobbies.
        </h2>

        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-8 sm:grid-cols-2">
          <div className="relative h-[30vh] w-full sm:h-[38vh]">
            <Image
              src="/dance-v3.png"
              alt="Dance performances and competitions"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              unoptimized
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-semibold text-black sm:text-3xl">
              Dance
            </h3>
            <div className="mt-2 space-y-3 font-serif text-sm font-light italic text-[#999999] sm:text-lg">
              <p>
                Became a member of KUDANS Swing Dance Team and got up on
                stage in various festivals and organizations, performing a
                few branches of Jazz Dance: Lindy Hop, Authentic Solo Jazz,
                Rhythm&amp;Blues, Blues and Hip Hop.{" "}
                <Link
                  href="https://youtu.be/4GmiFfbBGio?si=SQihp1RlnXGIjO2u"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch dance performance video"
                  className="not-italic inline-flex align-middle text-black/60 hover:text-black"
                >
                  <LinkIcon className="inline size-4" />
                </Link>
              </p>
              <p>
                Competed with our Authentic Solo Jazz team at ILHC
                (International Lindy Hop Championships) and achieved third
                place in Europe.{" "}
                <Link
                  href="https://youtu.be/PGaycGv2TzY?si=3aB2T_nEdbj7jsdY"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch ILHC competition video"
                  className="not-italic inline-flex align-middle text-black/60 hover:text-black"
                >
                  <LinkIcon className="inline size-4" />
                </Link>
              </p>
              <p>
                Attended many dance festivals as a dancer, competitor and
                volunteer.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-black sm:text-3xl">
              Yoga &amp; Mindfulness
            </h3>
            <p className="mt-2 font-serif text-sm font-light italic text-[#999999] sm:text-lg">
              Yoga, Pranayama, and Meditation are at the heart of my
              daily routine. My ultimate goal is to build an inclusive and
              accessible yoga community—a safe space where movement,
              breath, and mindfulness are approachable for everyone,
              regardless of their background or level.
            </p>
          </div>
          <div className="relative h-[30vh] w-full sm:h-[38vh]">
            <Image
              src="/yoga-v3.png"
              alt="Yoga and handstand practice"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              unoptimized
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section
        id="social-media"
        className="relative flex min-h-screen w-full flex-col overflow-hidden px-6 pt-20 pb-4 sm:px-16 sm:pt-24"
      >
        <Image
          src="/section-background.png"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
        <h2 className="relative z-10 font-serif text-2xl font-light lowercase tracking-tight text-black sm:text-4xl">
          connect &amp; beyond.
        </h2>

        <div className="relative z-10 flex flex-1 items-center justify-center">
          <div className="flex w-full max-w-xl flex-col items-center gap-8 text-center">
            <a
              href="/İpekAteş_CV.docx"
              download
              className="rounded-2xl bg-black px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-black/80"
            >
              CV
            </a>

            <div className="flex gap-3 text-left">
              <div className="flex flex-col items-center pt-0.5">
                <Target className="size-4 shrink-0 text-black" />
                <div className="mt-2 w-px flex-1 bg-black/15" />
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-black uppercase">
                  Pivoting My Path
                </h3>
                <p className="mt-3 font-serif text-lg italic font-light text-[#999999] sm:text-xl">
                  &quot;Originally admitted to Koç University School of
                  Medicine, I pivoted to Industrial Engineering and Economics
                  to fully focus on quantitative optimization, data systems,
                  and technology—aligning my academic foundation with my
                  passion for analytical problem-solving.&quot;
                </p>
              </div>
            </div>

            <SiteDock />
          </div>
        </div>
      </section>
    </>
  );
}
