"use client";
import React, { useEffect, useState } from "react";
import SelectedChord from "./SelectedChords";

interface Chords {
  id: number;
  strings: string;
  fingering: string;
  chordName: string;
  enharmonicChordName: string;
  voicingID: number;
  tones: string;
}

const Chords: React.FC = () => {
  const endPoint = "http://localhost:8080/";

  const [chordsList, setChordsList] = useState<object[]>([]);
  // const [selectedChords, setSelectedChords] = useState<object>({});
  const [selectedChords, setSelectedChords] = useState<object[]>([]);

  const handleGetChords = async () => {
    const chords = await fetch(endPoint + "chord");
    const chordsJSON = await chords.json();
    // console.log(chordsJSON);
    setChordsList(chordsJSON);
  };
  const handleChosenChord = (id: number) => {
    const returnArr = selectedChords;
    if (selectedChords.length === 4) {
      alert("Click clear to create a new chord progression!");
      return;
    } else {
      returnArr.push(chordsList[id - 1]);
    }
    console.log(returnArr);
    setSelectedChords(returnArr);
  };

  useEffect(() => {
    handleGetChords();
  }, []);

  return (
    <>
      <div className="border rounded p-5 m-2 flex flex-wrap items-center justify-center">
        {chordsList.map((item) => (
          <div
            key={item.id}
            className="border m-2 w-1/12 items-center"
            onClick={() => {
              handleChosenChord(item.id);
            }}
          >
            <a href="" className="hover:text-grey">
              {item.chordName.replaceAll(",", "")}
            </a>
          </div>
        ))}
      </div>
      <div className="border rounded p-2 m-2 w-1/3 flex direction-row">
        <h2>Progression</h2>
        {Object.keys(selectedChords).length === 0 ? (
          <>
            <div className="w-1/6 h-20 border rounded m-2">
              <h1>Chord 1</h1>
            </div>
            <div className="w-1/6 h-20 border rounded m-2">
              <h1>Chord 2</h1>
            </div>
            <div className="w-1/6 h-20 border rounded m-2">
              <h1>Chord 3</h1>
            </div>
            <div className="w-1/6 h-20 border rounded m-2">
              <h1>Chord 4</h1>
            </div>
          </>
        ) : (
          selectedChords.map((chord) => {
            return (
              <SelectedChord
                key={chord.id}
                chordName={chord.chordName}
                strings={chord.strings}
                voicingID={chord.voicingID}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Chords;
