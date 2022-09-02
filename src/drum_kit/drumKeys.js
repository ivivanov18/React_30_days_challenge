import clap from "./sounds/clap.wav";
import hihat from "./sounds/hihat.wav";
import kick from "./sounds/kick.wav";
import openhat from "./sounds/openhat.wav";
import boom from "./sounds/boom.wav";
import ride from "./sounds/ride.wav";
import snare from "./sounds/snare.wav";
import tom from "./sounds/tom.wav";
import tink from "./sounds/tink.wav";

export const keys = [
  {
    keyCode: 65,
    letter: "A",
    soundName: "clap",
    sound: clap,
  },
  {
    keyCode: 83,
    letter: "S",
    soundName: "hihat",
    sound: hihat,
  },
  {
    keyCode: 68,
    letter: "D",
    soundName: "kick",
    sound: kick,
  },
  {
    keyCode: 70,
    letter: "F",
    soundName: "openhat",
    sound: openhat,
  },
  {
    keyCode: 71,
    letter: "G",
    soundName: "boom",
    sound: boom,
  },
  {
    keyCode: 72,
    letter: "H",
    soundName: "ride",
    sound: ride,
  },
  {
    keyCode: 74,
    letter: "J",
    soundName: "snare",
    sound: snare,
  },
  {
    keyCode: 75,
    letter: "K",
    soundName: "tom",
    sound: tom,
  },
  {
    keyCode: 76,
    letter: "L",
    soundName: "tink",
    sound: tink,
  },
];

export default keys.reduce((acc, key) => {
  acc[key.keyCode] = key;
  return acc;
}, {});
