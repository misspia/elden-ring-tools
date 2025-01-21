import React from "react";

type Props = {
  message?: string;
};

export const Loading: React.FC<Props> = ({ message }) => {
  return (
    <div className="flex-col gap-2">
      <h1>loading</h1>
      {message && <div>{message}</div>}
    </div>
  );
};
