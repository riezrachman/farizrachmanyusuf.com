import { collection } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useCollection } from "react-firebase-hooks/firestore";
import Firebase from "firebaseConfig";

export default function About() {
  const [snapshot, loading, error] = useCollection(
    collection(Firebase.firestore, "profile"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div
      id="About"
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 p-8 lg:p-24 lg:mx-24"
    >
      <div>
        <div className="flex items-center text-3xl pb-8 font-semibold after:relative after:content-[''] after:w-[350px] after:h-[1px] after:ml-[20px] after:bg-zinc-900">
          About Me
        </div>
        <div>
          <p className="pb-4">
            Hi there, my name is Fariz. I first start my journey back in 2010
            when I tried to contribute on Android commnunity - turns out it
            taught me a lot of coding experience.
          </p>
          <p className="pb-4">
            Fast-forward to today, I have a privilege of working with other devs
            at{" "}
            <Link href="https://otterdev.io" className="underline">
              Otterdev
            </Link>{" "}
            as a Senior Fullstack Developer. Beside of working, I&apos;m
            currenty learning Go language which I really loved.
          </p>
          <p className="pb-4">
            Here&apos;s a technologies I&apos;ve been working recently:
          </p>
          <ul className="grid grid-cols-2">
            {snapshot?.docs
              .at(0)
              ?.data()
              .technologies.map((tech: string) => (
                <li
                  key={tech}
                  className="before:content-['▹'] before:text-xs before:mr-2 before:text-zinc-400"
                >
                  {tech}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="relative group h-[300px] w-[300px]">
        <div className="h-[300px] w-[300px] border border-zinc-900 absolute top-8 left-8 rounded transform group-hover:top-4 group-hover:left-4 duration-300"></div>
        <Image
          src="/assets/images/profile.png"
          alt="Profile Image"
          width={300}
          height={300}
          className="absolute top-0 left-0 rounded brightness-50 group-hover:brightness-100 duration-300"
        />
      </div>
    </div>
  );
}
