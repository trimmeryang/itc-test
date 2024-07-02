import { Meta, MetaProps } from "components/meta";

export default function AboutLayout({
  meta,
  children,
}: {
  meta: MetaProps;
  children: React.ReactNode;
}) {
  return (
    <>
      <Meta {...meta} />
      <header></header>
      <div className="container min-h-screen mt-[120px] mb-0 mx-auto bg-white border-y-transparent">
        {children}
      </div>
      <footer></footer>
    </>
  );
}
