import InnerAbout from "@/components/inner-pages/about";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "About CILF- Foundation",
};
const index = () => {
   return (
      <Wrapper>
         <InnerAbout />
      </Wrapper>
   )
}

export default index