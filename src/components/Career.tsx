import { div } from "motion/react-client";
import ContentSummary from "./ContentSummary";
import CareerCard from "./CareerCard";

const Career = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-7 my-10">
      <ContentSummary emoji="💼" content="Carreira" />
      <h2 className="font-extrabold text-3xl">Minha trajetoria até aqui</h2>
      <div className="grid grid-cols-2 h-screen w-screen text-center">
        <div className="flex flex-col items-center gap-8">
          <h3 className="font-extrabold text-xl">Área profissional</h3>
          <CareerCard
            title="Scolarship Full-Stack - Compass Uol"
            body="Desenvolvimento de aplicações escaláveis e robustas com React.js, Spring Boot e Typescript. Além do conhecimento em outras tecnologias e metodologias como Scrum, Git/Github e AWS."
            initDate={new Date(2025, 3)}
            finishDate={null}
          />
          <CareerCard
            title="Aluno monitor - UTFPR"
            body="Atuei como monitor na matéria de Algoritmos na UTFPR. Foi de grande valia para aprimorar meus conhecimentos em lógica de computação e algoritmos."
            initDate={new Date(2024, 8)}
            finishDate={new Date(2025, 2)}
          />
        </div>
        <div className="flex flex-col items-center gap-8">
          <h3 className="font-extrabold text-xl">Área acadêmica</h3>
          <CareerCard
            title="Graduação em Engenharia de Software - UTFPR"
            body="Acadêmico de Engenharia de Software na UTFPR campus Dois Vizinhos."
            initDate={new Date(2024, 2)}
            finishDate={null}
          />
          <CareerCard
            title="Ensino médio completo"
            body="Finalizei meu ensino médio integral no Colégio Estadual José de Anchieta em Santa Maria do Oeste - PR"
            initDate={null}
            finishDate={new Date(2023, 11)}
          />
        </div>
      </div>
    </div>
  );
};

export default Career;
