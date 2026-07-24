import OffCanvasMenu from "@src/components/organisms/OffCanvasMenu";
import FooterSection from "@src/components/organisms/FooterSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainLayout({ children }) {
  return (
    <>
      <OffCanvasMenu />
      <main>{children}</main>
      <FooterSection />
      <ToastContainer />
    </>
  );
}
