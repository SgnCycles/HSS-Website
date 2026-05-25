import FooterMobile from "@/components/footer/FooterMobile";
import FooterDesktop from "@/components/footer/FooterDesktop";

const FooterHome = () => {
  return (
    <footer>
      <div className="hidden md:block">
        <FooterDesktop />
      </div>
      <div className="block md:hidden">
        <FooterMobile />
      </div>
    </footer>
  )
}

export default FooterHome