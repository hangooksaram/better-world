import { SectionLayout } from "@/components/Ui/Template";

interface ISectionProps {
  id: number;
  name: string;
  pageRefs: React.MutableRefObject<HTMLDivElement[]>;
}

const PageSection = ({ id, name, pageRefs }: ISectionProps) => {
  return (
    <SectionLayout id={`page-${id}`} key={`layout-${id}`}>
      <div
        ref={(element) => {
          pageRefs.current[id] = element!;
        }}
      >
        <h1>Page - {name}</h1>
      </div>
    </SectionLayout>
  );
};

export default PageSection;
