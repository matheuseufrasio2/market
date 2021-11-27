/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "./styles";
import { useState, useEffect, FormEvent } from "react";
import { FiSearch } from "react-icons/fi";
import useDebounce from "hooks/useDebounce";
import { useDispatch } from "react-redux";
import { searchByName } from "store/modules/catalog/actions";

export function InputFilters() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const debouncedValue = useDebounce<string>(text, 1000);

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setText(event.currentTarget.value);
  }

  useEffect(() => {
    console.log(text);
    dispatch(searchByName(text));
  }, [debouncedValue]);

  return (
    <Container>
      <input type="search" value={text} onChange={handleChange} />
      <FiSearch />
    </Container>
  );
}
