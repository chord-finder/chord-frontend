"use client";
import React, { useEffect, useState } from "react";

const Chords: React.FC = () => {
  const endPoint = "http://localhost:3000/";

  const [chordsList, setChordsList] = useState<object[]>([]);

  const handleGetChords = async () => {
    const chords = await fetch(endPoint + "/chords");
    const chordsJSON = await chords.json();
    console.log(chords);
    setChordsList(chordsJSON);
  };

  useEffect(() => {
    handleGetChords();
  }, []);

    return <div>{chordsList.map((item) => <p>item</p>))}</div>
//   return <></>;
};

export default Chords;
