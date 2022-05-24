import Image from "next/image";

export default function DecorationImg({ img, className, style, dataAos }) {
  return (
    <div data-aos={dataAos} style={style} className={`hidden xl:block absolute z-[0] ${className}`}>
      <Image
        src={img}
        alt="decoration shape"
        width={img?.width}
        height={img?.height}
        objectFit="contain"
      />
    </div>
  );
}