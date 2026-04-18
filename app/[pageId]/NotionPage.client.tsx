"use client";

import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import type { ExtendedRecordMap } from "notion-types";

export default function NotionPageClient({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      darkMode={false}
    />
  );
}
