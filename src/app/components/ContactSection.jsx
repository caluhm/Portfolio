import SectionContainer from "./SectionContainer";

export default function ContactSection() {
  return (
    <SectionContainer
      id="contact"
      customHeight={"min-h-screen sm:min-h-[75vh]"}
      colouredBg
    >
      <h3 className="section-header">Contact</h3>
    </SectionContainer>
  );
};
