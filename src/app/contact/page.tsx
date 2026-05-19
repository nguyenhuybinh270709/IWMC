import {
  ContactForm,
  Hero,
  Map,
  Faq,
  BottomCTA,
} from "@/app/contact/_components";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#050810]">
      <Hero />
      <ContactForm />
      <Map />
      <Faq />
      <BottomCTA />
    </main>
  );
}
