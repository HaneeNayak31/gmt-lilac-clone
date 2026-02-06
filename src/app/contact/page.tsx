import ContactForm from "@/components/contact/ContactForm";
import FooterSection from "@/components/footer/FooterSection";
import FindMeSection from "@/components/findme/FindMeSection";
import MyOfficeSection from "@/components/myoffice/MyOfficeSection";
import LetsConnect from "@/components/letsconnect/LetsConnect";
import BookAppointmentSection from "@/components/bookappointment/BookAppointmentSection";

export default function ContactPage() {
  return (
    <section className="">
      <LetsConnect />
      <ContactForm />
      <BookAppointmentSection />
      <MyOfficeSection />
      <FindMeSection />
    </section>
  );
}
