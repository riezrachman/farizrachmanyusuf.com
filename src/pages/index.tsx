import Components from "@/components";

export default function Home() {
  return (
    <Components.Layout>
      <Components.Introduction />
      <Components.About />
      <Components.Experience />
      <Components.Work />
      <Components.Contact />
    </Components.Layout>
  );
}
