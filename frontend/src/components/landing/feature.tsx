import {
  FaUsers,
  FaLock,
  FaMagic,
  FaCloudUploadAlt,
  FaMobileAlt,
  FaSearch,
} from "react-icons/fa";

const features = [
  {
    title: "Private & Secure",
    description:
      "Your photos are protected with end-to-end encryption. Only you control who sees your memories",
    icon: <FaLock size={48} className="mb-6" />,
    testimonial: "“I feel safe sharing my family moments.”",
  },
  {
    title: "Collaboration",
    description:
      "Work together with friends and family to create beautiful albums. Share your favorite moments and make new memories.",
    icon: <FaUsers size={48} className="mb-6" />,
    testimonial:
      "“I love the collaboration features! They make sharing so easy.”",
  },
  {
    title: "Magic Effects",
    description:
      "Apply stunning filters and effects to your photos with a single tap. Transform your memories into works of art.",
    icon: <FaMagic size={48} className="mb-6" />,
    testimonial: "“I love the magic effects! They make my photos pop.”",
  },
  {
    title: "Cloud Upload",
    description:
      "Effortlessly upload and store your photos in the cloud. Access them from anywhere, anytime.",
    icon: <FaCloudUploadAlt size={48} className="mb-6" />,
    testimonial: "“Uploading my photos has never been easier!”",
  },
  {
    title: "Mobile Access",
    description:
      "Enjoy seamless access to your photos on the go. Our mobile app keeps your memories at your fingertips.",
    icon: <FaMobileAlt size={48} className="mb-6" />,
    testimonial: "“I love being able to access my photos from anywhere!”",
  },
  {
    title: "Smart Search",
    description:
      "Instantly find photos by people, places, or events. Our intelligent search makes organizing and discovering memories effortless.",
    icon: <FaSearch size={48} className="mb-6" />,
    testimonial: "“I found my favorite vacation photos in seconds!”",
  },
];

export default function Feature() {
  return (
    <section className="w-full py-32 font-dm">
      <div className="flex justify-center items-end flex-col px-5">
        <h1 className="text-6xl font-light">What we made</h1>
        <div className="w-full overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`mt-20 flex flex-row md:flex-row items-center md:items-start gap-10 md:gap-20 ${
                index % 2 === 0 ? "md:flex-col" : "md:flex-row-reverse"
              }`}
            >
              <div className="bg-gray-200 rounded-4xl p-1">
                <div className="py-16 px-10 border rounded-4xl bg-[url('src/assets/landing/bg3.png')] text-white flex flex-col items-center w-xs">
                  {feature.icon}
                  <h2 className="text-2xl font-semibold mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-center mb-6 ">
                    {feature.description}
                  </p>
                  <span className="italic text-sm opacity-70 ">
                    {feature.testimonial}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 w-full overflow-hidden mx-auto">
  <div className="bg-gray-200 rounded-4xl p-1 rotate-45">
    <div className="py-16 px-10 border rounded-4xl bg-[url('src/assets/landing/bg3.png')] text-white flex flex-col items-center">
      <FaLock size={48} className="mb-6" />
      <h2 className="text-2xl font-semibold mb-4">Private & Secure</h2>
      <p className="text-lg text-center mb-6">
        Your photos are protected with end-to-end encryption. Only you control
        who sees your memories. This ensures that your private moments remain
        confidential and secure.
      </p>
      <span className="italic text-sm opacity-70">
        “I feel safe sharing my family moments.”
      </span>
    </div>
  </div>

  <div className="bg-gray-200 rounded-4xl p-1 -rotate-45">
    <div className="py-16 px-10 border rounded-4xl bg-[url('src/assets/landing/bg3.png')] text-white flex flex-col items-center">
      <FaUsers size={48} className="mb-6" />
      <h2 className="text-2xl font-semibold mb-4">Collaboration</h2>
      <p className="text-lg text-center mb-6">
        Work together with friends and family to create beautiful albums. Share
        your favorite moments and make new memories.
      </p>
      <span className="italic text-sm opacity-70">
        “I love the collaboration features! They make sharing so easy.”
      </span>
    </div>
  </div>
  <div className="bg-gray-200 rounded-4xl p-1 rotate-45">
    <div className="py-16 px-10 border rounded-4xl bg-[url('src/assets/landing/bg3.png')] text-white flex flex-col items-center">
      <FaMagic size={48} className="mb-6" />
      <h2 className="text-2xl font-semibold mb-4">Magic Effects</h2>
      <p className="text-lg text-center mb-6">
        Apply stunning filters and effects to your photos with a single tap.
        Transform your memories into works of art.
      </p>
      <span className="italic text-sm opacity-70">
        “I love the magic effects! They make my photos pop.”
      </span>
    </div>
  </div>
  <div className="bg-gray-200 rounded-4xl p-1 -rotate-45">
    <div className="py-16 px-10 border rounded-4xl bg-[url('src/assets/landing/bg3.png')] text-white flex flex-col items-center">
      <FaCloudUploadAlt size={48} className="mb-6" />
      <h2 className="text-2xl font-semibold mb-4">Cloud Upload</h2>
      <p className="text-lg text-center mb-6">
        Effortlessly upload and store your photos in the cloud. Access them from
        anywhere, anytime. No more worries about losing your precious memories.
        This ensures that your photos are always safe and accessible.
      </p>
      <span className="italic text-sm opacity-70">
        “Uploading my photos has never been easier!”
      </span>
    </div>
  </div>

  <div className="bg-gray-200 rounded-4xl p-1 rotate-45">
    <div className="py-16 px-10 border rounded-4xl bg-[url('src/assets/landing/bg3.png')] text-white flex flex-col items-center">
      <FaMobileAlt size={48} className="mb-6" />
      <h2 className="text-2xl font-semibold mb-4">Mobile Access</h2>
      <p className="text-lg text-center mb-6">
        Enjoy seamless access to your photos on the go. Our mobile app keeps
        your memories at your fingertips. You can easily share your photos from
        anywhere.
      </p>
      <span className="italic text-sm opacity-70">
        “I love being able to access my photos from anywhere!”
      </span>
    </div>
  </div>

  <div className="bg-gray-200 rounded-4xl p-1 -rotate-45">
    <div className="py-16 px-10 border rounded-4xl bg-[url('src/assets/landing/bg3.png')] text-white flex flex-col items-center">
      <FaSearch size={48} className="mb-6" />
      <h2 className="text-2xl font-semibold mb-4">Smart Search</h2>
      <p className="text-lg text-center mb-6">
        Instantly find photos by people, places, or events. Our intelligent
        search makes organizing and discovering memories effortless. I can
        quickly locate specific images without scrolling through endless albums.
      </p>
      <span className="italic text-sm opacity-70">
        “I found my favorite vacation photos in seconds!”
      </span>
    </div>
  </div>
</div>; */
}
