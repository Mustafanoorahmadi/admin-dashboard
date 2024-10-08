import ChangeLanguage from "../../components/change-language";
import ChangeTheme from "../../components/change-theme";
import { useAppContext } from "../../context/app/app-context";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TopNav = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { language } = useAppContext();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const { toggleSidebar } = useAppContext();
  return (
    <nav className="navbar">
      <a className="sidebar-toggle" onClick={toggleSidebar}>
        <i className="hamburger align-self-center"></i>
      </a>
      <div className="d-flex align-items-center gap-3  me-3">
        <ChangeLanguage />
        <ChangeTheme />
      </div>
      <div className={`${language === "fa" ? "me-auto" : "ms-auto"}`}>
        <button
          className="btn ms-2 btn-outline-danger fw-bolder "
          onClick={logout}
        >
          {t("categoryList.LogOut")}
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
