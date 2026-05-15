import {
  AboutUs,
  BottomCTA,
  Hero,
  Leadership,
  MissionVision,
  Partners,
  Timeline,
} from "@/app/about/_components";

export default function About() {
  return (
    <main className="min-h-screen bg-[#050810]">
      <Hero />
      <AboutUs />
      <MissionVision />
      <Leadership />
      <Timeline />
      <Partners />
      <BottomCTA />
    </main>
  );
}
