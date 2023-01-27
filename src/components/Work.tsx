import Components from "@/components";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import Firebase from "firebaseConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "@/hooks/useWindowSize";
import { EffectCards } from "swiper";
import Image from "next/image";
import { Work as WorkType } from "@/types";
import { ExternalLink, Image as ImageIcon } from "react-feather";

interface WorkItemProps {
  work: WorkType;
}

function WorkItem({ work }: WorkItemProps) {
  return (
    <div
      key={"#"}
      className="flex flex-col overflow-hidden rounded-lg lg:shadow-lg lg:w-72 h-[500px] my-8"
    >
      <div className="flex-shrink-0">
        {work.image ? (
          <Image
            className="h-48 w-full object-cover"
            src={work.image}
            alt="Image"
            width={240}
            height={240}
          />
        ) : (
          <div className="h-48 w-full object-cover bg-zinc-300 flex items-center justify-center text-zinc-700">
            <ImageIcon />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <div className="hover:underline">{work.associate}</div>
          </p>
          <div className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">{work.name}</p>
            <p className="mt-3 text-base text-gray-500 text-ellipsis line-clamp-3 h-min">
              {work.description}
            </p>
          </div>
        </div>
        <div>
          {work.url && (
            <Components.Button
              href={work.url}
              target="_blank"
              variant="outline"
            >
              <div className="mr-2">Visit Link</div>
              <ExternalLink size={18} />
            </Components.Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const windowWidth = useWindowSize()?.width ?? 0;

  const [snapshot, loading, error] = useCollection(
    collection(Firebase.firestore, "works"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <section
      id="Work"
      className="flex flex-col px-8 py-24 lg:p-24 mx-0 lg:mx-24"
    >
      <div className="flex items-center text-3xl pb-8 font-semibold after:relative after:content-[''] after:w-[350px] after:h-[1px] after:ml-[20px] after:bg-zinc-900">
        What I&apos;ve Contributed
      </div>
      {(snapshot?.docs.length ?? 0) > 0 ? (
        <div className="portfolio">
          <Swiper
            className="sites hidden lg:block"
            spaceBetween={windowWidth < 960 ? 20 : 50}
            centeredSlides
            loop
            slidesPerView={windowWidth < 960 ? 1.5 : 2}
            loopedSlides={snapshot?.docs.length}
            mousewheel={{ forceToAxis: true }}
            autoplay={{ delay: 0 }}
            speed={windowWidth * 10}
          >
            {snapshot?.docs.map((doc) => (
              <SwiperSlide key={doc.id}>
                <WorkItem
                  work={{
                    name: doc.data().name,
                    description: doc.data().description,
                    associate: doc.data().associate,
                    image: doc.data().image,
                    url: doc.data().url,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            className="sites block lg:hidden"
            effect="cards"
            loop
            modules={[EffectCards]}
          >
            {snapshot?.docs.map((doc) => (
              <SwiperSlide key={doc.id}>
                <WorkItem
                  work={{
                    name: doc.data().name,
                    description: doc.data().description,
                    associate: doc.data().associate,
                    image: doc.data().image,
                    url: doc.data().url,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <Components.Alert
          type="warning"
          label="This section hasn't been uploaded yet."
        />
      )}
    </section>
  );
}
