import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === "bn" ? "en" : "bn";
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 text-white transition border rounded-md hover:bg-gray-100 hover:text-black bangla"
    >
      {i18n.language === "bn" ? "English" : "বাংলা"}
    </button>
  );
}
