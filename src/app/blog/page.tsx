import Blog from "@/components/blogs/blog";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Blog CILF- Foundation",
};
const index = () => {
   return (
      <Wrapper>
         <Blog />
      </Wrapper>
   )
}

export default index