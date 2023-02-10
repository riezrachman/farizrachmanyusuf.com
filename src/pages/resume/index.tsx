import Components from "@/components";

export default function Resume() {
  return (
    <div className="!cursor-default">
      <Components.Introduction />
      <Components.About />
      <Components.Experience />
      <Components.Work />
      <Components.Contact />
    </div>
  );
}
