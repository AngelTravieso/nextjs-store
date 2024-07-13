"use client"

import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
import { useEffect } from "react";

// Un template si se vuelve a montar cada vez cque cambiamos de segmento de ruta, el layout no se vuelve a montar
const HomeTemplate = ({ children }: { children: React.ReactNode }) => {

  console.log('HomeTemplate')

  /**
   * El template es ideal también si cada vez que navegamos necesitamos enviar métricas de manera manual, como con google analytics, etc
   */

  // useEffect(() => {
  //   console.log('envio de metricas')
  // }, [])

  return (
    <>
      <Hero />
      <Description />
      {children}
    </>
  );
};

export default HomeTemplate;
