import { NotionAPI } from "notion-client";
import NotionPageClient from "./NotionPage.client";

const notion = new NotionAPI();

interface Props {
  params: Promise<{ pageId: string }>;
}

export default async function NotionPage({ params }: Props) {
  const { pageId } = await params;
  const recordMap = await notion.getPage(pageId);
  return <NotionPageClient recordMap={recordMap} />;
}

export const revalidate = 60;