import { Disclosure, Transition } from "@headlessui/react";
import { useCollection } from "react-firebase-hooks/firestore";
import Firebase from "firebaseConfig";

import Components from "@/components";
import { collection } from "firebase/firestore";
import React from "react";

export function Desktop() {
  const [snapshot, loading, error] = useCollection(
    collection(Firebase.firestore, "menus"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <Transition.Root
      as="div"
      show={!loading}
      className="hidden sm:ml-6 sm:flex sm:space-x-8"
    >
      {snapshot?.docs
        .sort((a, b) => a.data().order - b.data().order)
        .map((doc, index) => (
          <Components.NavBarMenuItem.Desktop
            key={doc.id}
            delay={`delay-[${index * 200}ms]`}
            href={doc.data().href}
            label={doc.data().label}
          />
        ))}
    </Transition.Root>
  );
}

export function Mobile() {
  const [snapshot, loading, error] = useCollection(
    collection(Firebase.firestore, "menus"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <Transition
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      className="sm:hidden"
    >
      <Disclosure.Panel>
        {snapshot?.docs
          .sort((a, b) => a.data().order - b.data().order)
          .map((doc) => (
            <Components.NavBarMenuItem.Mobile
              key={doc.id}
              href={doc.data().href}
              label={doc.data().label}
            />
          ))}
      </Disclosure.Panel>
    </Transition>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Desktop,
  Mobile,
};
