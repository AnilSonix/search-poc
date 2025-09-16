import React, { type ReactNode } from "react";

type Props<T> = {
  data: Array<T>;
  renderItem: (item: T, i: number) => ReactNode;
  keyExtractor: (item: T) => string;
};

export default function List<T>({ data, renderItem, keyExtractor }: Props<T>) {
  return (
    <>
      {data.map((item, index) => (
        <React.Fragment key={keyExtractor(item)}>
          {renderItem(item, index)}
          {index + 1 < data.length && <hr />}
        </React.Fragment>
      ))}
    </>
  );
}
