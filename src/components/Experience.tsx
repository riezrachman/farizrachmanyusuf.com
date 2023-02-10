import React from "react";
import { Tab } from "@headlessui/react";
import { compareAsc, format } from "date-fns";
import clsx from "clsx";

import Firebase from "firebase_config";
import {
  collection,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import { MouseContext } from "@/context/mouse-context";
import { Experience as ExperienceType } from "@/types";

interface ExperienceTabProps {
  label: string;
}

function ExperienceTab({ label }: ExperienceTabProps) {
  const { cursorChangeHandler } = React.useContext(MouseContext);
  return (
    <Tab as={React.Fragment}>
      {({ selected }) => (
        <button
          className={clsx(
            "p-4 text-center lg:text-left border-b-2 lg:border-b-0 lg:border-l-2 hover:bg-zinc-100/50 hover:border-zinc-900 hover:text-zinc-900 focus:outline-none focus:ring-0 duration-300",
            selected
              ? "bg-zinc-100/50 border-zinc-900 text-zinc-900"
              : "border-transparent text-zinc-400"
          )}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          {label}
        </button>
      )}
    </Tab>
  );
}

interface ExperienceContentProps {
  experience: ExperienceType;
}

function ExperienceContent({ experience }: ExperienceContentProps) {
  return (
    <Tab.Panel>
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-1 text-xl font-semibold mb-2">
        <div className="font-light">{experience.position}</div>
        <div className="">@ {experience.company}</div>
      </div>
      <div className="flex gap-1 mb-4 text-sm">
        <div>{format(experience.startAt, "MMM yyyy")}</div>
        <div>{" - "}</div>
        <div>
          {experience.endAt ? format(experience.endAt, "MMM yyyy") : "Present"}
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-2">
          {experience.jobDescription.map((desc) => (
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

export function Experience() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [snapshot] = useCollection(
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
    <section
      id="Experience"
      className="flex flex-col items-center px-8 py-24 lg:p-24"
    >
      <div className="flex items-center justify-start w-full text-3xl pb-8 font-semibold after:relative after:content-[''] after:w-[350px] after:h-[1px] after:ml-[20px] after:bg-zinc-900">
        Where I&apos;ve Worked
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <Tab.Group
          vertical={true}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          <Tab.List className="flex lg:flex-col w-full overflow-scroll lg:overflow-hidden whitespace-nowrap lg:whitespace-normal">
            {docs?.map((doc) => (
              <ExperienceTab key={doc.id} label={doc.data().company} />
            ))}
          </Tab.List>
          <Tab.Panels className="col-span-1 lg:col-span-2">
            {docs?.map((doc) => (
              <ExperienceContent
                key={doc.id}
                experience={{
                  company: doc.data().company,
                  position: doc.data().position,
                  startAt: doc.data().startAt.toDate(),
                  endAt: doc.data().endAt?.toDate(),
                  jobDescription: doc.data().jobDescription,
                }}
              />
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}
