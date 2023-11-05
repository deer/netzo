import {
  Cross2Icon,
  Pencil1Icon,
  PlusIcon,
  ReloadIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "netzo/components/ui/button.tsx";
import { Input } from "netzo/components/ui/input.tsx";
import { DataTableViewOptions } from "./data-table-view-options.tsx";
import { DataTableFacetedFilter } from "./data-table-faceted-filter.tsx";
import { DataTableProps } from "./data-table.tsx";
import { DialogDelete } from "@/components/tables/components/dialog-delete.tsx";
interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  options: DataTableProps<TData, unknown>["options"];
  SheetCreateComponent: () => JSX.Element;
  SheetBulkUpdateComponent: () => JSX.Element;
}

export function DataTableToolbar<TData>({
  table,
  options,
  SheetCreateComponent,
  SheetBulkUpdateComponent,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const selectedRows = table.getRowModel().rows.filter((row) =>
    row.getIsSelected()
  );
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.location.reload()}
          className="h-8 px-2 lg:px-3"
        >
          <ReloadIcon className="mr-2 h-4 w-4" />
          Refresh
        </Button>
        {options.search && (
          <Input
            placeholder={options.search.placeholder}
            value={(table.getColumn(options.search.column)
              ?.getFilterValue() as string) ?? ""}
            onChange={(invoice) =>
              table.getColumn(options.search.column)?.setFilterValue(
                invoice.target.value,
              )}
            className="h-8 w-[150px] lg:w-[250px]"
            autocomplete="off"
          />
        )}

        {options.filters?.map(({ column, title, options }) =>
          table.getColumn(column) && (
            <DataTableFacetedFilter
              column={table.getColumn(column)}
              title={title}
              options={options}
            />
          )
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />

      {selectedRows.length
        ? (
          <>
            {selectedRows.length > 1
              ? (
                <SheetBulkUpdateComponent
                  table={table}
                  options={options}
                  selectedRows={selectedRows}
                />
              )
              : (
                <>
                  <a
                    href={`${window.location.pathname}/${
                      selectedRows[0].original.id
                    }`}
                  >
                    <Button className="ml-3 h-8 px-2 lg:px-3">
                      <Pencil1Icon className="mr-2 h-4 w-4" /> Edit selected
                    </Button>
                  </a>
                </>
              )}
            <DialogDelete
              options={options}
              selectedRows={selectedRows}
            />
          </>
        )
        : <SheetCreateComponent table={table} options={options} />}
    </div>
  );
}