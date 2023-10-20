import React, { FC } from "react";
import { Notes, InoxTnC } from "./Data/bites-Disclamer";
import "./Disclaimer.scss";

interface DisclaimerProps {}

const Disclamer: FC<DisclaimerProps> = () => {
  return (
    <div className="bite-disclaimer">
      <div className="bite-note">
        Note:
        <ol>
          {Notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ol>
      </div>
      <div className="bite-terms">
        Inox T&C:
        <ol>
          {InoxTnC.map((tnc, index) => (
            <li key={index}>{tnc}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Disclamer;
