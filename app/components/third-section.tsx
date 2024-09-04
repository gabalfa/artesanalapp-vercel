import React from "react";
import Image from "next/image";

function third() {
  return (
    <section className="body-font flex max-h-screen mt-1">
      <section className="mt-1 w-full md:flex justify-between">
        <Image
          height={900}
          width={450}
          alt="hero"
          src="/third-section-1.webp"
        />
        <Image
          height={900}
          width={450}
          alt="hero"
          src="/third-section-2.webp"
        />
        <Image
          height={900}
          width={450}
          alt="hero"
          src="/third-section-3.webp"
        />
      </section>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="flex text-center lg:w-2/3 w-full">
          <p className="mb-8">
            El trabajo manual artesanal permite la transmisión de conocimientos
            que hacen parte del patrimonio cultural inmaterial, fomenta la
            tradición, la sostenibilidad y la creación de comunidad.
          </p>
          <p className="mb-8">
            América Latina es conocida por su rica diversidad cultural y
            tradiciones artesanales. Hay una amplia variedad de técnicas,
            materiales y estilos artesanales en toda la región, lo que brinda
            una gran cantidad de productos únicos y auténticos para ofrecer.
          </p>
          <p className="mb-8">
            No obstante, nuestro sector se ve mediado por mucha precariedad,
            informalidad, autogestión que resta tiempo al creativo, carencia de
            canales, entre otras. Definir a un público resulta difícil,
            especialmente porque así como el creativo no tiene facilidad de
            acceso a canales de divulgación, el usuario no cuenta con suficiente
            información del creativo, su oficio y su producto.
          </p>
        </div>
      </div>
    </section>
  );
}

export default third;
