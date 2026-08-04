import { ShaderBackground } from "@/components/ui/simplex-noise-spots";

export default function Home() {
  return (
    <>
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <ShaderBackground className="absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            İpek Ateş
          </h1>
          <p className="max-w-md text-lg text-white/80">
            Personal website — under construction
          </p>
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
