import { _get } from "netzo/deps/lodash.get.ts";
import { Checkbox } from "netzo/components/ui/checkbox.tsx";
import { DataTableColumnHeader } from "@/components/tables/components/data-table-column-header.tsx";

export const toInteger = (num: number) =>
  Math.round(Number(num)).toLocaleString("es-ES");

export const toFixed = (num: number) =>
  Number(num).toLocaleString("es-ES", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

export const toPercent = (num: number) =>
  Number(num).toLocaleString("es-ES", {
    style: "percent",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

export const toEuro = (num: number) =>
  Number(num).toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

export const toMxn = (num: number) =>
  Number(num).toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

export const toDate = (date: string) =>
  new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

export const toDateTime = (dateTime: string) =>
  new Date(dateTime).toLocaleString("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

// render:
export const renderHeader = (title: string) => ({ column }) => {
  return <DataTableColumnHeader column={column} title={title} />;
};

export const renderCell =
  (formatter = (v: unknown) => v) => ({ column, row }) => {
    const value = _get(row.original, column.id.replaceAll("_", "."));
    const isNegativeNumber = typeof value === "number" && value < 0;
    return (
      <div className={isNegativeNumber ? `text-left text-red7` : "text-left"}>
        {formatter(value)}
      </div>
    );
  };

export const renderCellCheckbox = () => ({ column, row }) => {
  const stringValue = _get(row.original, column.id.replaceAll("_", "."));
  const value = ["TRUE", "true", true].includes(stringValue)
    ? true
    : ["FALSE", "false", false].includes(stringValue)
    ? false
    : undefined;
  return (
    // WORKAROUND: add "ml-8" to somewhat center checkbox since
    // cannot center using "text-center" nor "mx-auto" on checkbox
    <Checkbox
      checked={value}
      disabled={true}
      aria-label="Select row"
      className="translate-y-[2px] ml-8"
    />
  );
};

export const renderFormCheckbox = (value: string | boolean) => {
  if (typeof value === "boolean") {
    return value;
  } else {
    const boolValue = ["TRUE", "true"].includes(value)
      ? true
      : ["FALSE", "false"].includes(value)
      ? false
      : undefined;
    return boolValue;
  }
};

export const getQueryParams = (url: URL): Record<string, string | never> => {
  const query = url.searchParams;
  const queryObject: Record<string, string> = {};
  for (const p of query) {
    queryObject[p[0]] = p[1];
  }
  return queryObject;
};

export async function handleFormSubmit<TData>(
  destination: string,
  inputValues: TData,
  data?: TData,
  ids?: string[],
) {
  let result;
  if (data) {
    console.log("updateData PUT");
    result = await updatePut(
      destination,
      inputValues,
      data.id,
    );
  } else if (ids) {
    console.log("Update multiple - PATCH");
    const promises = ids.map((id) => {
      updatePatch(
        destination,
        inputValues,
        id,
      );
    });
    result = await Promise.all(promises);
  } else {
    console.log("Create new");
    result = await create(
      destination,
      inputValues,
    );
  }

  if (result) {
    window.alert("Saved");
    return window.location.reload();
  } else {
    window.alert("Error");
    return;
  }
}