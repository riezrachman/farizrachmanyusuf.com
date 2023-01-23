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
      show={!loading}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 pt-2 pb-4">
          {snapshot?.docs.map((doc) => (
            <Components.NavBarMenuItem.Mobile
              key={doc.id}
              href={doc.data().href}
              label={doc.data().label}
            />
          ))}
        </div>
      </Disclosure.Panel>
    </Transition>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Desktop,
  Mobile,
};
