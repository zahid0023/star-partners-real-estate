import { ProfileImage } from './components/ProfileImage';
import { Introduction } from './components/Introduction';
import { CallSadghuru } from './components/CallSadghuru';
import { Instruction } from './components/Instruction';
import './App.css';

const AGENT_ID = "56b60dc4-c1d4-460a-b749-903cc084a03f";

export default function App() {
  return (
    <>
      <dev className="main">
        <ProfileImage />
        <Introduction />
        <CallSadghuru AGENT_ID={AGENT_ID} />
        <Instruction />
      </dev>
    </>
  );
}