import { Tab, Transition } from "@headlessui/react";
import clsx from "clsx";
import { compareAsc, format } from "date-fns";
import {
  collection,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import Link from "next/link";
import React, { Fragment } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Firebase from "firebaseConfig";

interface ExperienceTabProps {
  label: string;
}

function ExperienceTab({ label }: ExperienceTabProps) {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button
          className={clsx(
            "p-4 border-l-2 hover:bg-zinc-100/50 hover:border-zinc-900 hover:text-zinc-900 focus:outline-none focus:ring-0 duration-300",
            selected
              ? "bg-zinc-100/50 border-zinc-900 text-zinc-900"
              : "border-transparent text-zinc-400"
          )}
        >
          {label}
        </button>
      )}
    </Tab>
  );
}

interface ExperienceContentProps {
  company: string;
  position: string;
  startAt: Date;
  endAt?: Date;
  jobDescription: string[];
}

function ExperienceContent({
  company,
  position,
  startAt,
  endAt,
  jobDescription,
}: ExperienceContentProps) {
  return (
    <Tab.Panel>
      <div className="flex gap-1 text-xl font-semibold mb-2">
        <div className="font-light">{position}</div>
        <div>{" @ "}</div>
        <Link href="/" className="underline">
          {company}
        </Link>
      </div>
      <div className="flex gap-1 mb-4 text-sm">
        <div>{format(startAt, "MMM yyyy")}</div>
        <div>{" - "}</div>
        <div>{endAt ? format(endAt, "MMM yyyy") : "Present"}</div>
      </div>
      <div>
        <ul className="flex flex-col gap-2">
          {jobDescription.map((desc) => (
            <li
              key={desc}
              className="before:content-['▹'] before:text-xs before:mr-2 before:text-zinc-400"
            >
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </Tab.Panel>
  );
}

export default function Experience() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [snapshot, loading, error] = useCollection(
    collection(Firebase.firestore, "experiences"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const compare = (
    a: QueryDocumentSnapshot<DocumentData>,
    b: QueryDocumentSnapshot<DocumentData>
  ) => {
    return compareAsc(b.data().startAt.toDate(), a.data().startAt.toDate());
  };

  const docs = snapshot?.docs.sort(compare);

  return (
    <div id="Experience" className="flex flex-col items-center p-24 mx-60">
      <div className="flex items-center justify-start w-full text-3xl pb-8 font-semibold after:relative after:content-[''] after:w-[350px] after:h-[1px] after:ml-[20px] after:bg-zinc-900">
        Where I&apos;ve Worked
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <Tab.Group
          vertical={true}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          <Tab.List className="flex flex-col">
            {docs?.map((doc) => (
              <ExperienceTab key={doc.id} label={doc.data().company} />
            ))}
          </Tab.List>
          <Tab.Panels className="col-span-2">
            {docs?.map((doc, index) => (
              <ExperienceContent
                key={doc.id}
                company={doc.data().company}
                position={doc.data().position}
                startAt={doc.data().startAt.toDate()}
                endAt={doc.data().endAt?.toDate()}
                jobDescription={doc.data().jobDescription}
              />
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
