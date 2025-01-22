import React from "react";
import c from "classnames";
import {
  TableData,
  TableDataProps,
  TableHead,
  TableHeadProps,
} from "@/components/TableCell";
import { PickRename } from "@/utils/types";

export type CellAlign = "center" | "left" | "right";

type TableHead = Omit<
  PickRename<TableHeadProps, "children", "display">,
  "scope"
> & {
  key: React.Key;
  type: "head";
};

type TableData = PickRename<TableDataProps, "children", "display"> & {
  key: React.Key;
  type: "data";
};

type TableBodyRow = {
  key: string;
  items: (TableHead | TableData)[];
};

export type TableHeader = TableHead[];

export type TableBody = TableBodyRow[];

export type TableCaption = {
  text: React.ReactNode;
  side: "top" | "bottom";
};

export type TableProps = {
  body: TableBody;
  /**
   * Horizontal text alignment for cells
   */
  align?: CellAlign;
  caption?: TableCaption;
  header?: TableHeader;
  className?: string;
};

export const Table: React.FC<TableProps> = ({
  body,
  align = "left",
  caption,
  header,
  className,
}) => {
  return (
    <table
      className={c(
        "w-full align-middle",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        },
        className,
      )}
    >
      {caption && (
        <caption
          className={c({
            "caption-top": caption.side === "top",
            "caption-bottom": caption.side === "bottom",
          })}
        >
          {caption.text}
        </caption>
      )}
      {header && (
        <thead>
          <tr>
            {header.map((item) => (
              <TableHead key={item.key} scope="col" onSort={item.onSort}>
                {item.display}
              </TableHead>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {body.map((row) => (
          <tr key={row.key}>
            {row.items.map((item) =>
              item.type === "head" ? (
                <TableHead key={item.key} scope="row" onSort={item.onSort}>
                  {item.display}
                </TableHead>
              ) : (
                <TableData key={item.key}>{item.display}</TableData>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
