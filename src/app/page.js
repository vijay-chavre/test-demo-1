import Features from "@/components/Home/features/features";
import Testimonials from "@/components/Home/testimonials/testimonials";
import TopBanner from "@/components/Home/topBanner";
import Header from "@/components/header/header";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen px-8 md:px-40 ">
      <TopBanner/>
      <Features/>
      <Testimonials/>
    </main>
  )
}

