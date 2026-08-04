import Image from "next/image";
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
        className="flex min-h-screen w-full items-center justify-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight">Hobbies</h2>
      </section>

      <section
        id="success"
        className="flex min-h-screen w-full items-center justify-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight">Success</h2>
      </section>
    </>
  );
}
