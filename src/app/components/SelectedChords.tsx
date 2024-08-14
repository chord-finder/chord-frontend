"use client";
import React, { useEffect, useState } from "react";

interface Props {
  key: number;
  chordName: string;
  strings: string;
  voicingID: number;
}

const SelectedChord: React.FC<Props> = (props) => {
  const { key, chordName, strings, voicingID } = props;

  return (
    <div className="w-1/6 h-20 border rounded m-2" key={key}>
      <h2>{chordName}</h2>
      <p>{strings}</p>
    </div>
  );
};
export default SelectedChord;
