import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TokenData({ number, title, text }) {
  const tokenRef = useRef(null); // Ref for each TokenData element

  useEffect(() => {
    gsap.fromTo(
      tokenRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tokenRef.current,
          start: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="token-data" ref={tokenRef}>
        <button className="btn-token">{number}</button>
        <div>
          <h2 className="title-token">{title}</h2>
          <p className="gray-text">{text}</p>
        </div>
      </div>
      <hr />
    </>
  );
}

function Tokenomics() {
  return (
    <section className="bg-color" id="tokenomics">
      <div className="container">
        <div>
          <h1 className="Tokenomics-title">Tokenomics</h1>
          <div>
            <TokenData
              number="01"
              title="Total Supply"
              text="100% (1 billion) - Actively in circulation to support the community, liquidity, and organic ecosystem growth. Available for trading and use within the ecosystem to ensure stability and accessibility."
            />
            <TokenData
              number="02"
              title="LP"
              text="100% token to LP and LP Burnt"
            />
            <TokenData
              number="03"
              title="Zero Tax"
              text="0% Buying/Selling Tax"
            />
            <TokenData
              number="04"
              title="Renounce"
              text="Ownership Renounced"
            />
            <TokenData
              number="05"
              title="CA"
              text="0x2d8c2e053cbb4c9aa416902e78168fd4770e7712"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
