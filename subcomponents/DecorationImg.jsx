import Image from "next/image";

export default function DecorationImg({ img, className, style }) {
  return (
    <div style={style} className={`hidden xl:block absolute z-[0] ${className}`}>
      <Image
        src={img}
        alt="shape"
        width={img?.width}
        height={img?.height}
        objectFit="contain"
      />
    </div>
  );
}