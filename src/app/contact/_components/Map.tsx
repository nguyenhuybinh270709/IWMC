export function Map() {
  return (
    <section className="bg-[#050810] px-6 md:px-12">
      <div className="mx-auto relative h-65 w-full rounded-2xl overflow-hidden border border-white/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3991799845307!2d106.6859968!3d10.780707699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2fbcf40655%3A0x442f04b78adf859e!2zMTIzIFRyxrDGoW5nIMSQ4buLbmgsIFh1w6JuIEjDsmEsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1779193912164!5m2!1svi!2s"
          className="w-full h-full border-0 absolute inset-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        />
      </div>
    </section>
  );
}
