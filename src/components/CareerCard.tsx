import React from "react";
import { motion } from "framer-motion";

const CareerCard = ({
  title,
  body,
  initDate,
  finishDate,
}: {
  title: string;
  body: string;
  initDate: Date | null;
  finishDate: Date | null;
}) => {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const formatMonthYear = (d: Date | null) =>
    d ? `${months[d.getMonth()]} ${d.getFullYear()}` : "";

  const diffMonths = (start: Date, end: Date) => {
    const years = end.getFullYear() - start.getFullYear();
    const monthsDiff = end.getMonth() - start.getMonth();
    return years * 12 + monthsDiff;
  };

  const formatDuration = (start: Date | null, end: Date | null) => {
    if (!start) return "";
    const finish = end ?? new Date();
    const totalMonths = diffMonths(start, finish);
    if (totalMonths < 12)
      return `${totalMonths} ${totalMonths === 1 ? "mês" : "meses"}`;
    const years = Math.floor(totalMonths / 12);
    const monthsLeft = totalMonths % 12;
    if (monthsLeft === 0) return `${years} ${years === 1 ? "ano" : "anos"}`;
    return `${years} ${years === 1 ? "ano" : "anos"} e ${monthsLeft} ${
      monthsLeft === 1 ? "mês" : "meses"
    }`;
  };

  return (
    <motion.div
      className="w-100 border border-purple-700 flex flex-col p-6 items-start gap-2 rounded-lg"
      whileHover={{ scale: 1.02 }}
    >
      <h4 className="font-bold">{title}</h4>
      <p className="text-gray-500 text-left">{body}</p>

      <div className="flex justify-between w-90">
        <h4 className="font-bold text-purple-700">
          {formatDuration(initDate, finishDate)}
        </h4>
        <p className="text-purple-700">
          {formatMonthYear(initDate)} —{" "}
          {finishDate ? formatMonthYear(finishDate) : "Atualmente"}
        </p>
      </div>
    </motion.div>
  );
};

export default CareerCard;
