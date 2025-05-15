import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { Options } from "./quartz/components/Explorer"



// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      sortFn,
    }),
  ],
  right: [],
}

// sorting just folders
export const sortFn: Options["sortFn"] = (a, b) => {
  // Only sort folders by folderOrder, files stay as is
  if (a.isFolder && b.isFolder) {
    const orderA = a.data?.frontmatter?.folderOrder ?? Number.MAX_SAFE_INTEGER;
    const orderB = b.data?.frontmatter?.folderOrder ?? Number.MAX_SAFE_INTEGER;
    return orderA - orderB;
  }
  
  // If one is folder and the other is file, keep folders first
  if (a.isFolder && !b.isFolder) {
    return -1; // folder before file
  }
  if (!a.isFolder && b.isFolder) {
    return 1; // file after folder
  }
  
  // If both are files, keep original order (or sort alphabetically if you want)
  return 0;
}

// sorting folders and notes
/*
export const sortFn: Options["sortFn"] = (a, b) => {
  const orderA = a.isFolder
    ? a.data?.frontmatter?.folderOrder as number | undefined
    : a.data?.frontmatter?.noteOrder as number | undefined;

  const orderB = b.isFolder
    ? b.data?.frontmatter?.folderOrder as number | undefined
    : b.data?.frontmatter?.noteOrder as number | undefined;

  if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
    if (orderA !== undefined && orderB !== undefined) {
      return orderA - orderB;
    } else if (orderA !== undefined) {
      return -1;
    } else if (orderB !== undefined) {
      return 1;
    } else {
      return a.displayName.localeCompare(b.displayName);
    }
  }

  return a.isFolder ? -1 : 1; // folders first
}
*/
