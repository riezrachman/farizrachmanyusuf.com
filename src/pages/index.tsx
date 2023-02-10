import {
  Layout,
  Introduction,
  About,
  Experience,
  Work,
  Contact,
} from "@/components";

export default function Home() {
  return (
    <Layout>
      <Introduction />
      <About />
      <Experience />
      <Work />
      <Contact />
    </Layout>
  );
}
