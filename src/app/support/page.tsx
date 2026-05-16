import {
  Hero,
  IpoSteps,
  Knowledge,
  Services,
  Stat,
  WhyChoose,
  Workflow,
} from "@/app/support/_components";

export default function Support() {
  return (
    <main className="min-h-screen bg-[#000d16]">
      <Hero />
      <div className="px-8">
        <Stat />
        <IpoSteps />
        <Services />
        <Workflow />
        <WhyChoose />
        <Knowledge />
      </div>
    </main>
  );
}
