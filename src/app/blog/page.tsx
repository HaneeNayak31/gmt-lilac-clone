import Image from "next/image";
import ContactSection from "@/components/contact/ContactSection";
import FooterSection from "@/components/footer/FooterSection";
import HeroBlog from "@/components/heroblog/HeroBlog";
import BlogPosts from "@/components/blogposts/BlogPosts";
import SubscribeSection  from "@/components/subscribe/SubscribeSection";
export default function BlogPage() {
  return (
    <>
    <HeroBlog />
    <BlogPosts />
    <SubscribeSection />
    </>
  );
}
