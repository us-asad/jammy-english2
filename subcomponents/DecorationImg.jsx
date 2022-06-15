export default function DecorationImg({ img, className, style, dataAos }) {
  return (
    <div data-aos={dataAos} style={style} className={`hidden xl:block absolute z-[0] ${className}`}>
      <img
        src={img?.src}
        alt="decoration shape"
        width={img?.width}
        height={img?.height}
        objectFit="contain"
      />
    </div>
  );
}