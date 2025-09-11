import React from "react";
import ContentSummary from "./ContentSummary";
import fotoPessoal from "../assets/fotoPessoal.jpg";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-3 h-screen gap-5">
      <div className="flex items-center justify-content-center">
        <img
          src={fotoPessoal}
          alt="Foto de Davi Conrado Neto no espelho"
          className="object-cover rounded-full w-80 h-80 mx-auto"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-center gap-5">
        <ContentSummary emoji="🧐" content="Sobre mim" />
        <h2 className="font-extrabold text-4xl">Davi Conrado Neto</h2>
        <p>
          👋 Me chamo Davi Conrado Neto mas pode me chamar apenas de Davi.
          Prazer!
        </p>
        <p>
          👨‍💻 Há mais de 1 ano desenvolvendo e programando interfaces com
          Typescript, Java, React.js, Node.js.
          <br /> 🎓 Acadêmico de Engenharia de Software na UTFPR em Dois
          Vizinhos - PR. <br />
          💡Interesses em desenvolvimento Front-end com React.js e Back-end com
          Spring Boot e Node.js
        </p>
        <p>🚀 Tentando ser um pouquinho melhor do que ontem todos dias.</p>
      </div>
    </div>
  );
};

export default AboutMe;
