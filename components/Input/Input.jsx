"use client";

import Styles from "./Input.module.css";
import Search from "@/icons/Search";
import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";

const Input = () => {
  const [query, setQuery] = useState("");
  const [deployed, setDeployed] = useState(false);
  const inputRef = useRef(null);
  const Router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      Router.push(`/search?s=${query}`);
    } else {
      input.placeholder = "Búsqueda vacía...";
      setTimeout(() => {
        input.placeholder = "Buscar...";
      }, 1000);
    }
  };

  const handleOpen = () => {
    setDeployed(true);
    setTimeout(() => {
      let input = inputRef.current;
      input.focus();
    }, 300);
  };

  return (
    <>
      {!deployed && (
        <button className={Styles.button} onClick={handleOpen}>
          <Search size={20} />
        </button>
      )}

      {deployed && (
        <form
          className={Styles.form}
          action={"/search"}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Buscar..."
            value={query}
            ref={inputRef}
            name="s"
            className={Styles.input}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={Styles.button} type="submit">
            <Search size={20} />
          </button>
          <div onClick={() => setDeployed(false)} className={Styles.cancel}>
            x
          </div>
        </form>
      )}
    </>
  );
};

export default Input;
