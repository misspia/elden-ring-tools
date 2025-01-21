import React from "react";

/**
 * Table header grid will display either a string label
 * or an image.
 */
type TableHeaderItemDisplay =
  | {
      type: "label";
      label: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
    };
type TableHeaderItem = {
  key: string | number;
  display: TableHeaderItemDisplay;
  onSort?: VoidFunction;
};

type TableHeader = TableHeaderItem[];

type Props = {
  caption?: string;
  header: TableHeader;
};

export const Table: React.FC<Props> = ({ caption, header }) => {
  return (
    <table>
      {caption && <caption>{caption}</caption>}
      <thead>
        <tr>
          {header.map((item) => (
            <th key={item.key}>
              {item.display.type === "label" ? (
                <div>{item.display.label}</div>
              ) : (
                <img src={item.display.src} alt={item.display.alt} />
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th></th>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};
