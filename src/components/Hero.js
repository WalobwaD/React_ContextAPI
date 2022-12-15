import React from "react";
import { Controls } from "./Controls";
import { SongList } from "./SongList";

const Hero = () => {
  return (
    <main>
      <p
        style={{
          fontWeight: 300,
          transition: "all 1s ease",
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      >
        🎶{" "}
        <span>
          Enjoy our <strong>premium mixtapes</strong>
        </span>
      </p>
      <Controls />
      <SongList />
    </main>
  );
};

export default Hero;
