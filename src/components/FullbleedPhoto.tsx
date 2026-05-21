export default function FullbleedPhoto() {
  return (
    <section className="w-full h-[565px] lg:h-[900px] overflow-hidden relative">
      <img
        src="/fullbleed-photo.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[32%_50%] lg:object-center"
      />
    </section>
  );
}
