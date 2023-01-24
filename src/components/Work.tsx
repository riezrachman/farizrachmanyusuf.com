import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Components from "@/components";

export default function Work() {
  return (
    <div id="Experience" className="flex flex-col p-8 lg:p-24 mx-0 lg:mx-24">
      <div className="flex items-center text-3xl pb-8 font-semibold after:relative after:content-[''] after:w-[350px] after:h-[1px] after:ml-[20px] after:bg-zinc-900">
        What I&apos;ve Contributed
      </div>
      <Components.Alert
        type="warning"
        label="This section hasn't been uploaded yet."
      />
      <div className="grid grid-cols-3 gap-4">
        <div className=""></div>
      </div>
    </div>
  );
}
