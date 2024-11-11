import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import MdxContent from "./components/mdxContent/MdxContent";

import { getPost } from "@/utils/articuloUtils";
import { serialize } from "next-mdx-remote/serialize";

const Testing = async ({ params }) => {
  let uri = decodeURI(params.uri);
  let { serialized } = await getPost(uri, serialize);

  if (serialized) {
    return (
      <>
        <Nav />
        <MdxContent source={serialized} />
        <Footer />
      </>
    );
  } else {
    return <div>there are no result for {uri}</div>;
  }
};

export async function generateMetadata({ params }) {
  let { frontMatter } = await getPost(decodeURI(params.uri), serialize);
  if (frontMatter) {
    // Luego agregar og:Meta
    return {
      title: frontMatter.title,
    };
  } else {
    return {
      title: "Artículo no disponible",
    };
  }
}

export async function generateStaticParams() {
  return [{uri: "bGhfqHVd"}, {uri: "kaegjg"}, {uri: "akjgbkajeg"}];
}

export default Testing;
