"use client";

import Styles from "./MdxContent.module.css";
import { MDXRemote } from "next-mdx-remote";
import HeaderPost from "../headerPost/HeaderPost";
import IndiceContenido from "../indiceContenido/IndiceContenido";
import Link from "next/link";
import Image from "next/image";

const MDXcomponents = {
  li: (props) => <li {...props} className={Styles.text} />,
  ul: (props) => <ul {...props} style={{width: '100%', padding: "0"}} />,
  h1: (props) => <h1 {...props} className={Styles.title} />,
  p: (props) => <p {...props} className={Styles.text} />,
  a: (props) => <Link className={Styles.link} {...props} />,
  Subtitle: ({ text, index }) => (
    <h2 className={Styles.subTitle} id={index}>
      {text}
    </h2>
  ),
  img: (props) => (
    <>
    <div className={Styles.contImage}>
      <Image {...props} fill  className={Styles.image}/>
    </div>
    <p className={Styles.textImage}>{props.title ? props.title : ""}</p>
    </>
  ),
  Header: (props) => <HeaderPost {...props} />,
  Text: ({ children }) => <div className={Styles.textCont}>{children}</div>,
  IndiceContenido: (props) => <IndiceContenido {...props} />,
  Body: ({ children }) => <div className={Styles.container}>{children}</div>,
};

const MdxContent = ({ source }) => {
  return <MDXRemote {...source} components={MDXcomponents} />;
};

export default MdxContent;
