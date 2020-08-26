import React, { FormEvent, ChangeEvent, useState } from "react";
import "./GithubUsernameForm.css";

type GithubUsernameFormprops = {
  onSubmitUsername: (username: string) => void;
};

function GithubUsernameForm({ onSubmitUsername }: GithubUsernameFormprops) {
  const [input, setInpput] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(input);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInpput(e.target.value);
  };

  return (
    <form className="GithubUsernameForm" onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={input}
        placeholder="Github 계정명을 입력해주세요"
      />
      <button type="submit">조회</button>
    </form>
  );
}

export default GithubUsernameForm;
