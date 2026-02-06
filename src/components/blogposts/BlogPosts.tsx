import React from "react";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "Understanding High-Functioning Anxiety",
    date: "10/24/23",
    image: "https://images.unsplash.com/photo-1618616191524-a9721186cbe4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Navigating Relationship Dynamics",
    date: "11/15/23",
    image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Role of Mindfulness in Healing",
    date: "12/02/23",
    image: "https://plus.unsplash.com/premium_photo-1713720411896-795853998a58?q=80&w=1088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Breaking the Cycle of Burnout",
    date: "01/10/24",
    image: "https://plus.unsplash.com/premium_photo-1665203618989-e04554a539b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            <div className="flex flex-col items-start text-[var(--color-surface)]">
              {/* Date */}
              <span className="text-sm font-semibold mb-4 block tracking-wide">{post.date}</span>
              
              {/* Title - Text 6xl to match reference impact */}
              <h3 className="text-6xl font-medium mb-8 tracking-tight leading-tight !text-[var(--color-success)]">{post.title}</h3>
              
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
