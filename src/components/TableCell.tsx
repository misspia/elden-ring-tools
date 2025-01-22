import React from "react";
import c from "classnames";
import { IconButton } from "@/components/IconButton";

type TableCellProps = {
  children: React.ReactNode;
  /**
   * Horizontal alignment for cell content
   */
  className?: string;
};

export type TableDataProps = TableCellProps & {};

export const TableData: React.FC<TableDataProps> = ({
  children,
  className,
}) => {
  return <td className={c(className)}>{children}</td>;
};

export type TableHeadProps = TableCellProps & {
  scope: HTMLTableCellElement["scope"];
  onSort?: React.MouseEventHandler<HTMLTableCellElement>;
};

export const TableHead: React.FC<TableHeadProps> = ({
  scope,
  onSort,
  children,
  className,
}) => {
  return (
    <th scope={scope} onClick={onSort} className={c(className)}>
      <div>{children}</div>
      {onSort && <IconButton iconName="icon" />}
    </th>
  );
};
