import { z } from "netzo/deps/zod/mod.ts";

// schemas:

export const invoiceSchema = z.object({
  id: z.string(),
  status: z.union([
    z.literal("pending"),
    z.literal("paid"),
    z.literal("cancelled"),
  ]),
  xml: z.string(),
  pdf: z.string().url(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

// types:

export type Invoice = z.infer<typeof invoiceSchema>;

// data:

export const invoices: Invoice[] = [
  {
    id: "invoice_1",
    status: "paid",
    xml:
      '<?xml version="10" encoding="utf-8"?><cfdi:Comprobante xmlns:xsi="http://wwww3org/2001/XMLSchema-instance" Version="40" Serie="B" Folio="5752" Fecha="2023-03-17T13:56:07" Sello="VAOm8HdwTGTLZzb9NFMek9728JnjzV2mqHcVQETC5lFw2SEuu5EjonZxu+maupuybrsuzRvHRq+8KXKDWhC1LdQKKCAjr+Oje4Ai57pd5V5+GQwTzGGiCy3Q+60zWZNunOuWxuKW/Gr8WFSYPXqu1rVIsgWnanmcIeZZblBDJB9+CVmue7+kDfb0bJkVpDMGNE9No85n01ZYPUcW5AlWFkwJmi/EC+OO1CAKjZzAflbvW0AgPLz/h1/pgGbtMA5CZHGKASewkODkJFq+H+m8j9PXtApay3WwpL/FNoS01Uot0yURGNomFUy4I+SvvqnXgLJVBp4IvwbjcbPW3EmZMA==" FormaPago="99" NoCertificado="00001000000510783851" Certificado="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" CondicionesDePago="120 días neto" SubTotal="1606080" Moneda="MXN" Total="1863053" TipoDeComprobante="I" MePago="PPD" Exportacion="01" LugarExpedicion="66023" xsi:schemaLocation="http://wwwsatgobmx/cfd/4 http://wwwsatgobmx/sitio_internet/cfd/4/cfdv40xsd" xmlns:cfdi="http://wwwsatgobmx/cfd/4"><cfdi:Emisor Rfc="EGR890713BK5" Nombre="ESPECIALIDADES DE GRAFITO" RegimenFiscal="626" /><cfdi:Receptor Rfc="SME9502015F6" Nombre="SAINT-GOBAIN MEXICO" DomicilioFiscalReceptor="62715" RegimenFiscalReceptor="601" UsoCFDI="G03" /><cfdi:Conceptos><cfdi:Concepto ClaveProdServ="15121513" Cantidad="60" ClaveUnidad="E4" Unidad="Kilo bruto" Descripcion="LUBRICHAIN II&#xA;No ORDEN DE COMPRA: 4531999955/MC1/2023&#xA;LIN: 00010" ValorUnitario="26768" Importe="1606080" ObjetoImp="02"><cfdi:Impuestos><cfdi:Traslados><cfdi:Traslado Base="1606080" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0160000" Importe="256973" /></cfdi:Traslados></cfdi:Impuestos></cfdi:Concepto></cfdi:Conceptos><cfdi:Impuestos TotalImpuestosTrasladados="256973"><cfdi:Traslados><cfdi:Traslado Base="160608" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0160000" Importe="256973" /></cfdi:Traslados></cfdi:Impuestos><cfdi:Complemento><tfd:TimbreFiscalDigital xsi:schemaLocation="http://wwwsatgobmx/TimbreFiscalDigital http://wwwsatgobmx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigitalv11xsd" Version="11" UUID="916c4cee-fda8-4eca-9738-ebf6e4f716a3" FechaTimbrado="2023-03-17T13:56:07" RfcProvCertif="LSO1306189R5" SelloCFD="VAOm8HdwTGTLZzb9NFMek9728JnjzV2mqHcVQETC5lFw2SEuu5EjonZxu+maupuybrsuzRvHRq+8KXKDWhC1LdQKKCAjr+Oje4Ai57pd5V5+GQwTzGGiCy3Q+60zWZNunOuWxuKW/Gr8WFSYPXqu1rVIsgWnanmcIeZZblBDJB9+CVmue7+kDfb0bJkVpDMGNE9No85n01ZYPUcW5AlWFkwJmi/EC+OO1CAKjZzAflbvW0AgPLz/h1/pgGbtMA5CZHGKASewkODkJFq+H+m8j9PXtApay3WwpL/FNoS01Uot0yURGNomFUy4I+SvvqnXgLJVBp4IvwbjcbPW3EmZMA==" NoCertificadoSAT="00001000000509846663" SelloSAT="C/c3nZDh6e9U7NJS8brP0uGxjjZwoB7yOwFlVHObCErYE4rEwMBasOy9BK0/Qbs5PEIP45vzTviv27YuqkmrHjbZtmSnqLZhKb6oiUy4GwfaalO7sapWFVL4gaGIS7VPOZrDsImzo/NepRW6kPkpJj2t/RP0h5Gu4MmQYx2Ix/NY0hcaOH8ISdUoJjcati3J4nqKSrUXlLAYVulAxEsfaaqmIomOYaK5JHsB3rLKYaQF/NYvE2Rb9M6+/9MZFB+74C5rNriLFl+oRx9bI3T2ALgEPielbPpxR/r6Sw4unmj3DqDqaH7b7AicR1ZtKB4lu+Jcd4mByKS4vL+unf0oCw==" xmlns:tfd="http://wwwsatgobmx/TimbreFiscalDigital" xmlns:xsi="http://wwww3org/2001/XMLSchema-instance" /></cfdi:Complemento></cfdi:Comprobante>',
    pdf: "PDF",
    createdAt: "2021-01-01T10:00:00.000Z",
    updatedAt: "2021-01-01T10:00:00.000Z",
  },
  {
    id: "invoice_2",
    status: "paid",
    xml:
      '<?xml version="10" encoding="utf-8"?><cfdi:Comprobante xmlns:xsi="http://wwww3org/2001/XMLSchema-instance" Version="40" Serie="B" Folio="5752" Fecha="2023-03-17T13:56:07" Sello="VAOm8HdwTGTLZzb9NFMek9728JnjzV2mqHcVQETC5lFw2SEuu5EjonZxu+maupuybrsuzRvHRq+8KXKDWhC1LdQKKCAjr+Oje4Ai57pd5V5+GQwTzGGiCy3Q+60zWZNunOuWxuKW/Gr8WFSYPXqu1rVIsgWnanmcIeZZblBDJB9+CVmue7+kDfb0bJkVpDMGNE9No85n01ZYPUcW5AlWFkwJmi/EC+OO1CAKjZzAflbvW0AgPLz/h1/pgGbtMA5CZHGKASewkODkJFq+H+m8j9PXtApay3WwpL/FNoS01Uot0yURGNomFUy4I+SvvqnXgLJVBp4IvwbjcbPW3EmZMA==" FormaPago="99" NoCertificado="00001000000510783851" Certificado="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" CondicionesDePago="120 días neto" SubTotal="1606080" Moneda="MXN" Total="1863053" TipoDeComprobante="I" MePago="PPD" Exportacion="01" LugarExpedicion="66023" xsi:schemaLocation="http://wwwsatgobmx/cfd/4 http://wwwsatgobmx/sitio_internet/cfd/4/cfdv40xsd" xmlns:cfdi="http://wwwsatgobmx/cfd/4"><cfdi:Emisor Rfc="EGR890713BK5" Nombre="ESPECIALIDADES DE GRAFITO" RegimenFiscal="626" /><cfdi:Receptor Rfc="SME9502015F6" Nombre="SAINT-GOBAIN MEXICO" DomicilioFiscalReceptor="62715" RegimenFiscalReceptor="601" UsoCFDI="G03" /><cfdi:Conceptos><cfdi:Concepto ClaveProdServ="15121513" Cantidad="60" ClaveUnidad="E4" Unidad="Kilo bruto" Descripcion="LUBRICHAIN II&#xA;No ORDEN DE COMPRA: 4531999955/MC1/2023&#xA;LIN: 00010" ValorUnitario="26768" Importe="1606080" ObjetoImp="02"><cfdi:Impuestos><cfdi:Traslados><cfdi:Traslado Base="1606080" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0160000" Importe="256973" /></cfdi:Traslados></cfdi:Impuestos></cfdi:Concepto></cfdi:Conceptos><cfdi:Impuestos TotalImpuestosTrasladados="256973"><cfdi:Traslados><cfdi:Traslado Base="160608" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0160000" Importe="256973" /></cfdi:Traslados></cfdi:Impuestos><cfdi:Complemento><tfd:TimbreFiscalDigital xsi:schemaLocation="http://wwwsatgobmx/TimbreFiscalDigital http://wwwsatgobmx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigitalv11xsd" Version="11" UUID="916c4cee-fda8-4eca-9738-ebf6e4f716a3" FechaTimbrado="2023-03-17T13:56:07" RfcProvCertif="LSO1306189R5" SelloCFD="VAOm8HdwTGTLZzb9NFMek9728JnjzV2mqHcVQETC5lFw2SEuu5EjonZxu+maupuybrsuzRvHRq+8KXKDWhC1LdQKKCAjr+Oje4Ai57pd5V5+GQwTzGGiCy3Q+60zWZNunOuWxuKW/Gr8WFSYPXqu1rVIsgWnanmcIeZZblBDJB9+CVmue7+kDfb0bJkVpDMGNE9No85n01ZYPUcW5AlWFkwJmi/EC+OO1CAKjZzAflbvW0AgPLz/h1/pgGbtMA5CZHGKASewkODkJFq+H+m8j9PXtApay3WwpL/FNoS01Uot0yURGNomFUy4I+SvvqnXgLJVBp4IvwbjcbPW3EmZMA==" NoCertificadoSAT="00001000000509846663" SelloSAT="C/c3nZDh6e9U7NJS8brP0uGxjjZwoB7yOwFlVHObCErYE4rEwMBasOy9BK0/Qbs5PEIP45vzTviv27YuqkmrHjbZtmSnqLZhKb6oiUy4GwfaalO7sapWFVL4gaGIS7VPOZrDsImzo/NepRW6kPkpJj2t/RP0h5Gu4MmQYx2Ix/NY0hcaOH8ISdUoJjcati3J4nqKSrUXlLAYVulAxEsfaaqmIomOYaK5JHsB3rLKYaQF/NYvE2Rb9M6+/9MZFB+74C5rNriLFl+oRx9bI3T2ALgEPielbPpxR/r6Sw4unmj3DqDqaH7b7AicR1ZtKB4lu+Jcd4mByKS4vL+unf0oCw==" xmlns:tfd="http://wwwsatgobmx/TimbreFiscalDigital" xmlns:xsi="http://wwww3org/2001/XMLSchema-instance" /></cfdi:Complemento></cfdi:Comprobante>',
    pdf: "PDF",
    createdAt: "2021-01-01T10:00:00.000Z",
    updatedAt: "2021-01-01T10:00:00.000Z",
  },
  {
    id: "invoice_3",
    status: "cancelled",
    xml:
      '<?xml version="10" encoding="utf-8"?><cfdi:Comprobante xmlns:xsi="http://wwww3org/2001/XMLSchema-instance" Version="40" Serie="B" Folio="5752" Fecha="2023-03-17T13:56:07" Sello="VAOm8HdwTGTLZzb9NFMek9728JnjzV2mqHcVQETC5lFw2SEuu5EjonZxu+maupuybrsuzRvHRq+8KXKDWhC1LdQKKCAjr+Oje4Ai57pd5V5+GQwTzGGiCy3Q+60zWZNunOuWxuKW/Gr8WFSYPXqu1rVIsgWnanmcIeZZblBDJB9+CVmue7+kDfb0bJkVpDMGNE9No85n01ZYPUcW5AlWFkwJmi/EC+OO1CAKjZzAflbvW0AgPLz/h1/pgGbtMA5CZHGKASewkODkJFq+H+m8j9PXtApay3WwpL/FNoS01Uot0yURGNomFUy4I+SvvqnXgLJVBp4IvwbjcbPW3EmZMA==" FormaPago="99" NoCertificado="00001000000510783851" Certificado="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" CondicionesDePago="120 días neto" SubTotal="1606080" Moneda="MXN" Total="1863053" TipoDeComprobante="I" MePago="PPD" Exportacion="01" LugarExpedicion="66023" xsi:schemaLocation="http://wwwsatgobmx/cfd/4 http://wwwsatgobmx/sitio_internet/cfd/4/cfdv40xsd" xmlns:cfdi="http://wwwsatgobmx/cfd/4"><cfdi:Emisor Rfc="EGR890713BK5" Nombre="ESPECIALIDADES DE GRAFITO" RegimenFiscal="626" /><cfdi:Receptor Rfc="SME9502015F6" Nombre="SAINT-GOBAIN MEXICO" DomicilioFiscalReceptor="62715" RegimenFiscalReceptor="601" UsoCFDI="G03" /><cfdi:Conceptos><cfdi:Concepto ClaveProdServ="15121513" Cantidad="60" ClaveUnidad="E4" Unidad="Kilo bruto" Descripcion="LUBRICHAIN II&#xA;No ORDEN DE COMPRA: 4531999955/MC1/2023&#xA;LIN: 00010" ValorUnitario="26768" Importe="1606080" ObjetoImp="02"><cfdi:Impuestos><cfdi:Traslados><cfdi:Traslado Base="1606080" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0160000" Importe="256973" /></cfdi:Traslados></cfdi:Impuestos></cfdi:Concepto></cfdi:Conceptos><cfdi:Impuestos TotalImpuestosTrasladados="256973"><cfdi:Traslados><cfdi:Traslado Base="160608" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0160000" Importe="256973" /></cfdi:Traslados></cfdi:Impuestos><cfdi:Complemento><tfd:TimbreFiscalDigital xsi:schemaLocation="http://wwwsatgobmx/TimbreFiscalDigital http://wwwsatgobmx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigitalv11xsd" Version="11" UUID="916c4cee-fda8-4eca-9738-ebf6e4f716a3" FechaTimbrado="2023-03-17T13:56:07" RfcProvCertif="LSO1306189R5" SelloCFD="VAOm8HdwTGTLZzb9NFMek9728JnjzV2mqHcVQETC5lFw2SEuu5EjonZxu+maupuybrsuzRvHRq+8KXKDWhC1LdQKKCAjr+Oje4Ai57pd5V5+GQwTzGGiCy3Q+60zWZNunOuWxuKW/Gr8WFSYPXqu1rVIsgWnanmcIeZZblBDJB9+CVmue7+kDfb0bJkVpDMGNE9No85n01ZYPUcW5AlWFkwJmi/EC+OO1CAKjZzAflbvW0AgPLz/h1/pgGbtMA5CZHGKASewkODkJFq+H+m8j9PXtApay3WwpL/FNoS01Uot0yURGNomFUy4I+SvvqnXgLJVBp4IvwbjcbPW3EmZMA==" NoCertificadoSAT="00001000000509846663" SelloSAT="C/c3nZDh6e9U7NJS8brP0uGxjjZwoB7yOwFlVHObCErYE4rEwMBasOy9BK0/Qbs5PEIP45vzTviv27YuqkmrHjbZtmSnqLZhKb6oiUy4GwfaalO7sapWFVL4gaGIS7VPOZrDsImzo/NepRW6kPkpJj2t/RP0h5Gu4MmQYx2Ix/NY0hcaOH8ISdUoJjcati3J4nqKSrUXlLAYVulAxEsfaaqmIomOYaK5JHsB3rLKYaQF/NYvE2Rb9M6+/9MZFB+74C5rNriLFl+oRx9bI3T2ALgEPielbPpxR/r6Sw4unmj3DqDqaH7b7AicR1ZtKB4lu+Jcd4mByKS4vL+unf0oCw==" xmlns:tfd="http://wwwsatgobmx/TimbreFiscalDigital" xmlns:xsi="http://wwww3org/2001/XMLSchema-instance" /></cfdi:Complemento></cfdi:Comprobante>',
    pdf: "PDF",
    createdAt: "2021-01-01T10:00:00.000Z",
    updatedAt: "2021-01-01T10:00:00.000Z",
  },
  {
    id: "invoice_4",
    status: "pending",
    xml:
      '<?xml version="10" encoding="utf-8"?><cfdi:Comprobante xmlns:xsi="http://wwww3org/2001/XMLSchema-instance" Version="40" Serie="B" Folio="5752" Fecha="2023-03-17T13:56:07" Sello="VAOm8HdwTGTLZzb9NFMek9728JnjzV2mqHcVQETC5lFw2SEuu5EjonZxu+maupuybrsuzRvHRq+8KXKDWhC1LdQKKCAjr+Oje4Ai57pd5V5+GQwTzGGiCy3Q+60zWZNunOuWxuKW/Gr8WFSYPXqu1rVIsgWnanmcIeZZblBDJB9+CVmue7+kDfb0bJkVpDMGNE9No85n01ZYPUcW5AlWFkwJmi/EC+OO1CAKjZzAflbvW0AgPLz/h1/pgGbtMA5CZHGKASewkODkJFq+H+m8j9PXtApay3WwpL/FNoS01Uot0yURGNomFUy4I+SvvqnXgLJVBp4IvwbjcbPW3EmZMA==" FormaPago="99" NoCertificado="00001000000510783851" Certificado="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" CondicionesDePago="120 días neto" SubTotal="1606080" Moneda="MXN" Total="1863053" TipoDeComprobante="I" MePago="PPD" Exportacion="01" LugarExpedicion="66023" xsi:schemaLocation="http://wwwsatgobmx/cfd/4 http://wwwsatgobmx/sitio_internet/cfd/4/cfdv40xsd" xmlns:cfdi="http://wwwsatgobmx/cfd/4"><cfdi:Emisor Rfc="EGR890713BK5" Nombre="ESPECIALIDADES DE GRAFITO" RegimenFiscal="626" /><cfdi:Receptor Rfc="SME9502015F6" Nombre="SAINT-GOBAIN MEXICO" DomicilioFiscalReceptor="62715" RegimenFiscalReceptor="601" UsoCFDI="G03" /><cfdi:Conceptos><cfdi:Concepto ClaveProdServ="15121513" Cantidad="60" ClaveUnidad="E4" Unidad="Kilo bruto" Descripcion="LUBRICHAIN II&#xA;No ORDEN DE COMPRA: 4531999955/MC1/2023&#xA;LIN: 00010" ValorUnitario="26768" Importe="1606080" ObjetoImp="02"><cfdi:Impuestos><cfdi:Traslados><cfdi:Traslado Base="1606080" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0160000" Importe="256973" /></cfdi:Traslados></cfdi:Impuestos></cfdi:Concepto></cfdi:Conceptos><cfdi:Impuestos TotalImpuestosTrasladados="256973"><cfdi:Traslados><cfdi:Traslado Base="160608" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0160000" Importe="256973" /></cfdi:Traslados></cfdi:Impuestos><cfdi:Complemento><tfd:TimbreFiscalDigital xsi:schemaLocation="http://wwwsatgobmx/TimbreFiscalDigital http://wwwsatgobmx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigitalv11xsd" Version="11" UUID="916c4cee-fda8-4eca-9738-ebf6e4f716a3" FechaTimbrado="2023-03-17T13:56:07" RfcProvCertif="LSO1306189R5" SelloCFD="VAOm8HdwTGTLZzb9NFMek9728JnjzV2mqHcVQETC5lFw2SEuu5EjonZxu+maupuybrsuzRvHRq+8KXKDWhC1LdQKKCAjr+Oje4Ai57pd5V5+GQwTzGGiCy3Q+60zWZNunOuWxuKW/Gr8WFSYPXqu1rVIsgWnanmcIeZZblBDJB9+CVmue7+kDfb0bJkVpDMGNE9No85n01ZYPUcW5AlWFkwJmi/EC+OO1CAKjZzAflbvW0AgPLz/h1/pgGbtMA5CZHGKASewkODkJFq+H+m8j9PXtApay3WwpL/FNoS01Uot0yURGNomFUy4I+SvvqnXgLJVBp4IvwbjcbPW3EmZMA==" NoCertificadoSAT="00001000000509846663" SelloSAT="C/c3nZDh6e9U7NJS8brP0uGxjjZwoB7yOwFlVHObCErYE4rEwMBasOy9BK0/Qbs5PEIP45vzTviv27YuqkmrHjbZtmSnqLZhKb6oiUy4GwfaalO7sapWFVL4gaGIS7VPOZrDsImzo/NepRW6kPkpJj2t/RP0h5Gu4MmQYx2Ix/NY0hcaOH8ISdUoJjcati3J4nqKSrUXlLAYVulAxEsfaaqmIomOYaK5JHsB3rLKYaQF/NYvE2Rb9M6+/9MZFB+74C5rNriLFl+oRx9bI3T2ALgEPielbPpxR/r6Sw4unmj3DqDqaH7b7AicR1ZtKB4lu+Jcd4mByKS4vL+unf0oCw==" xmlns:tfd="http://wwwsatgobmx/TimbreFiscalDigital" xmlns:xsi="http://wwww3org/2001/XMLSchema-instance" /></cfdi:Complemento></cfdi:Comprobante>',
    pdf: "PDF",
    createdAt: "2021-01-01T10:00:00.000Z",
    updatedAt: "2021-01-01T10:00:00.000Z",
  },
];

// i18n:

export const ALIASES = {
  id: "Invoice Id",
  status: "Status",
  xml: "XML",
  pdf: "PDF",
  createdAt: "Created At",
  updatedAt: "Updated At",
};