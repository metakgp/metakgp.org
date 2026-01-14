import LogoDark from "../assets/metakgp_logo_one_line-cropped.svg";
import LogoLight from "../assets/one-line-light.svg";

type MetaKgpLogoProps = {
    theme: "light" | "dark";
    className?: string;
};

export const MetaKGPLogo = ({ theme, className }: MetaKgpLogoProps) => {
  return (
    <img
      src={theme === "dark" ? LogoDark : LogoLight}
      alt="metaKGP Logo"
      className={className}
    />
  );
};