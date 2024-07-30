import { RemixServer } from "@remix-run/react";
import { handleRequest, type EntryContext } from "@vercel/remix";

import { addDocumentResponseHeaders } from "./shopify.server";

export default async function (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  addDocumentResponseHeaders(request, responseHeaders);
  let remixServer = <RemixServer context={remixContext} url={request.url} />;

  return handleRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixServer,
  );
}
