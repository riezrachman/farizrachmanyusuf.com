import React from "react";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";

import { ExternalLink, Menu, X } from "react-feather";

import Firebase from "firebase_config";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import { Button, NavBarMenu } from "@/components";
import { usePreload } from "@/hooks";

export function NavBar() {
  const { loading: preloading } = usePreload();
  const [snapshot, loading] = useCollection(
    collection(Firebase.firestore, "profile"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <>
      <Disclosure
        as="nav"
        className="bg-[#fbfaf9]/20 backdrop-filter backdrop-blur z-50 shadow fixed w-full duration-300"
      >
        {({ open }) => (
          <>
            <div className="mx-8 lg:mx-[50px] max-w-none lg:max-w-full px-0 lg:px-2">
              <div className="relative flex h-16 justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-500">
                    <span className="sr-only">Open Menu</span>
                    {open ? (
                      <X className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Menu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="lg:flex flex-shrink-0 items-center hidden">
                    <Image
                      className="block h-16 w-16 lg:hidden"
                      src={
                        preloading
                          ? "/assets/images/logo-animated-transparent.gif"
                          : "/assets/images/logo-transparent.png"
                      }
                      alt="FRY"
                      width={120}
                      height={120}
                    />
                    <Image
                      className="hidden h-16 w-16 lg:block"
                      src={
                        preloading
                          ? "/assets/images/logo-animated-transparent.gif"
                          : "/assets/images/logo-transparent.png"
                      }
                      alt="FRY"
                      width={120}
                      height={120}
                    />
                  </div>
                  <NavBarMenu.Desktop />
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Transition
                    show={!loading}
                    enter={`transition-all ease-in-out duration-500`}
                    enterFrom="opacity-0 translate-x-10"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition-all ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Button
                      variant="outline"
                      href={snapshot?.docs.at(0)?.data().resume_url}
                      target="_blank"
                    >
                      <div className="mr-2">Resume</div>
                      <ExternalLink size={18} />
                    </Button>
                  </Transition>
                </div>
              </div>
            </div>

            <NavBarMenu.Mobile />
          </>
        )}
      </Disclosure>
    </>
  );
}
