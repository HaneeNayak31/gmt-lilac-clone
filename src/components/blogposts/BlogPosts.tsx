import React from "react";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "Blog Post One",
    date: "3/11/19",
    image: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=2500w",
  },
  {
    title: "Blog Post Two",
    date: "3/11/19",
    image: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=2500w",
  },
  {
    title: "Blog Post Three",
    date: "3/11/19",
    image: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w",
  },
  {
    title: "Blog Post Four",
    date: "3/11/19",
    image: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w",
  },
];

const BlogPosts = () => {
  return (
    <section className="w-full bg-[var(--color-accent)] px-6 py-24">
      {/* Grid container with large vertical gap */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 px-4 lg:px-20">
        {posts.map((post, index) => (
          <div key={index} className="flex flex-col mb-0">
            {/* Image Card - Height 630px, mt-10 as requested */}
            <div className="relative w-full overflow-hidden bg-gray-200 mb-4 mt-10" style={{ height: '430px' }}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col items-start text-[#223614]">
              {/* Date */}
              <span className="text-sm font-semibold mb-4 block tracking-wide">{post.date}</span>
              
              {/* Title - Text 6xl to match reference impact */}
              <h3 className="text-6xl font-medium mb-8 tracking-tight leading-tight">{post.title}</h3>
              
              {/* Read More Link */}
              <Link href="#" className="text-lg font-medium underline underline-offset-4 decoration-1 hover:text-opacity-80 inline-block pb-2">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
