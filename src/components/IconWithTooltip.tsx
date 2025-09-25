import { useMediaQuery } from "./hooks/useMediaQuery";

const IconWithTooltip = ({ Icon, label }: { Icon: any; label: string }) => {
  const mobileSize = 35;
  const desktopSize = 45;
  const isMobile = useMediaQuery("(max-width: 767px)");
  const size = isMobile ? mobileSize : desktopSize;
  return (
    <div className="relative group flex items-center justify-center">
      <Icon
        size={size}
        className="text-[#7b4ae2] hover:translate-y-0.5 transition-transform"
        aria-hidden="true"
      />

      <div
        role="tooltip"
        className="pointer-events-none absolute bottom-full mb-2 opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-all text-xs whitespace-nowrap bg-gray-800 text-white px-2 py-1 rounded-lg shadow-lg"
      >
        {label}
      </div>
    </div>
  );
};

export default IconWithTooltip;
