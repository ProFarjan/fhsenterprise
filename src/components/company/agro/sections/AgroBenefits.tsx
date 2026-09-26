import Image from "next/image";
import AgroIcon from "@/components/company/agro/AgroIcon";
import type { AgroBenefitBlock } from "@/types/agro";

// One benefit block: a photo panel beside a colored card holding a 2x2 grid of
// icon features. `tone` picks the farmers (forest green) vs buyers (cream)
// treatment; `imageSide` flips which side the photo sits on.
export default function AgroBenefits({
  id,
  block,
  tone,
  imageSide,
}: {
  id: string;
  block: AgroBenefitBlock;
  tone: "green" | "cream";
  imageSide: "left" | "right";
}) {
  const isGreen = tone === "green";
  const card = isGreen ? "bg-agro-green text-white" : "bg-agro-cream text-agro-forest";
  const introColor = isGreen ? "text-green-100" : "text-agro-forest/75";
  const iconWrap = isGreen ? "bg-white/10 text-agro-gold" : "bg-agro-leaf/10 text-agro-leaf";
  const bodyColor = isGreen ? "text-green-100/85" : "text-agro-forest/70";

  const photo = (
    <div className="relative min-h-[320px] overflow-hidden rounded-3xl lg:min-h-full">
      <Image src={block.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
    </div>
  );

  const panel = (
    <div className={`flex flex-col justify-center rounded-3xl p-8 sm:p-12 ${card}`}>
      <h2 className="font-display text-3xl font-normal leading-tight sm:text-4xl">
        {block.headingLead}{" "}
        <span className={isGreen ? "text-agro-gold" : "text-agro-leaf"}>{block.headingEmphasis}</span>
      </h2>
      <p className={`mt-4 max-w-md text-base leading-7 ${introColor}`}>{block.intro}</p>

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
        {block.features.map((feature) => (
          <div key={feature.title} className="flex flex-col gap-3">
            <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconWrap}`}>
              <AgroIcon name={feature.icon} className="h-6 w-6" />
            </span>
            <h3 className="text-base font-semibold">{feature.title}</h3>
            <p className={`text-sm leading-6 ${bodyColor}`}>{feature.body}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id={id} className="scroll-mt-20 bg-white py-14">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
        {imageSide === "left" ? (
          <>
            {photo}
            {panel}
          </>
        ) : (
          <>
            {panel}
            {photo}
          </>
        )}
      </div>
    </section>
  );
}
