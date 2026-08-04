import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import { ShaderBackground } from "@/components/ui/simplex-noise-spots";

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
              <p className="text-sm text-[#999999] sm:text-base">
                Student at Koç University
              </p>
            </div>
          </div>

          <h2 className="mt-10 text-sm font-semibold tracking-wide text-black uppercase">
            About
          </h2>
          <div className="mt-3 space-y-6 font-serif text-lg italic font-light text-[#999999] sm:text-xl">
            <p>
              Hi there, I&apos;m <Bold>İpek</Bold> 😏. I study{" "}
              <Bold>Industrial Engineering</Bold> and <Bold>Economics</Bold>{" "}
              at <Bold>Koç University</Bold>. I&apos;m passionate about{" "}
              <Bold>building</Bold> things and turning ideas into real{" "}
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
        id="social-media"
        className="flex min-h-screen w-full items-center justify-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight">
          Social Media
        </h2>
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
              &ldquo;Yoga, Pranayama, and Meditation are at the heart of my
              daily routine. My ultimate goal is to build an inclusive and
              accessible yoga community—a safe space where movement,
              breath, and mindfulness are approachable for everyone,
              regardless of their background or level.&rdquo;
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
        id="career"
        className="flex min-h-screen w-full items-center justify-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight">Career</h2>
      </section>
    </>
  );
}
