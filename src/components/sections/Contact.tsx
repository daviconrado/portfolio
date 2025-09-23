import ContentSummary from "../ContentSummary";
import CopyButton from "../CopyButton";
import { RotateWords } from "../textAnimations/RotateWords";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <div className="flex flex-col justify-center items-center gap-4 mb-3">
        <ContentSummary emoji="📬" content="Contatos" />
        <RotateWords
          text="Vamos"
          words={[
            "conversar",
            "trabalhar juntos",
            "construir algo legal",
            "nos conectar",
          ]}
        />
      </div>
      <div className="flex flex-col gap-5 max-w-4xl text-center">
        <p>
          Estou sempre aberto a novas oportunidades e conexões. Sinta-se à
          vontade para entrar em contato comigo através do e-mail ou do LinkedIn
          😊.
        </p>
        <p className="flex justify-center items-center gap-2">
          📧 Email:{" "}
          <a
            href="mailto:daviconradoneto@gmail.com"
            type="email"
            className="text-purple-400"
          >
            daviconradoneto@gmail.com
          </a>
          <CopyButton
            text={"daviconradoneto@gmail.com"}
            size={18}
            className="hover:bg-gray-700 cursor-pointer"
            tooltip="Copiar código"
          />
        </p>
        <p className="flex justify-center items-center gap-2">
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/daviconrado"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400"
          >
            linkedin.com/in/daviconrado
          </a>
          <CopyButton
            text={"https://www.linkedin.com/in/daviconrado"}
            size={18}
            className="hover:bg-gray-700 cursor-pointer"
            tooltip="Copiar código"
          />
        </p>
      </div>
    </div>
  );
};

export default Contact;
