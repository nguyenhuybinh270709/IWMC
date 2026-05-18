import {
  Hero,
  CategoryFilter,
  NewsGrid,
  Sidebar,
  ExpertPerspectives,
  Newsletter,
} from "@/app/news/_components";

export default function News() {
  return (
    <main className="min-h-screen bg-[#050810]">
      <Hero />
      <main className="container mx-auto px-4 md:px-8 py-10">
        <CategoryFilter />
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-8">
          <div className="lg:col-span-5">
            <NewsGrid />
          </div>
          <aside className="lg:col-span-2">
            <Sidebar />
          </aside>
        </div>
        <ExpertPerspectives />
      </main>
      <Newsletter />
    </main>
  );
}
