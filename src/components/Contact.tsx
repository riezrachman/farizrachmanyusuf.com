import Components from "@/components";

export default function Contact() {
  return (
    <div
      id="Contact"
      className="flex flex-col items-center p-8 lg:p-24 mx-0 lg:mx-24"
    >
      <div className="flex items-center text-3xl pb-4 font-semibold">
        Get In Touch
      </div>
      <div className="max-w-md text-center mb-8">
        Although I&apos;m not currently looking for any new opportunities, my
        inbox is always open. Whether you have a question or just want to say
        hello, I&apos;ll try my best to get back to you!
      </div>
      <Components.Button
        size="lg"
        variant="outline"
        href="mailto:farizrachmanyusuf@gmail.com"
      >
        Say Hello 👋🏻
      </Components.Button>
    </div>
  );
}
