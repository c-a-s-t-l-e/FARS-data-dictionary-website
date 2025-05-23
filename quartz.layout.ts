import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"



// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head({
    custom: `
      <link rel="icon" href="https://github.com/c-a-s-t-l-e/FARS-data-dictionary-website/blob/8b133d856b75fb9ebe4c32e1eb9f39a761685538/quartz/static/icon.png">
    `,
  }),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/c-a-s-t-l-e/FARS-data-dictionary-website",
      "The FARS Data": "https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars",
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
    }),
  ],
  right: [],
}


// mod: define Explorer functions
import { Options } from "./quartz/components/Explorer"
 
export const mapFn: Options["mapFn"] = (node) => {
  return node
}
export const filterFn: Options["filterFn"] = (node) => {
  return node.slugSegment !== "tags"
}
export const sortFn: Options["sortFn"] = (a, b) => {
  // mod: sort folders and files based on folderOrder and noteOrder
  //      to find ways to retrieve folderOrder and noteOrder from frontmatter
  //      we now have to include frontmatter in ContentDetails and linkIndex.set()
 
  // extract order from frontmatter
  const orderA = a.isFolder
    ? a.data?.frontmatter?.folderOrder as number | undefined
    : a.data?.frontmatter?.noteOrder as number | undefined
  const orderB = b.isFolder
    ? b.data?.frontmatter?.folderOrder as number | undefined
    : b.data?.frontmatter?.noteOrder as number | undefined
 
  // method I: folders first, then files, sort folders and files separately
  // compare orderA and orderB, those undefined will be placed at the end
  /*if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
    if (orderA !== undefined && orderB !== undefined) {
      // compare based on the order
      return orderA - orderB;
    } else if (orderA !== undefined) {
      // move B to the back
      return -1;
    } else if (orderB !== undefined) {
      // move A to the back
      return 1;
    } else {
      // fall back to alphabetical order
      return a.displayName.localeCompare(b.displayName);
    }
  }
  // keep folders in front
  if (!a.isFolder && b.isFolder) {
    return 1
  } else {
    return -1
  }*/
 
  // method II: sort folders together with files, treat folders as files
  // compare orderA and orderB, those undefined will be placed at the end
  if (orderA !== undefined && orderB !== undefined) {
    return orderA - orderB
  } else if (orderA !== undefined) {
    return -1
  } else if (orderB !== undefined) {
    return 1
  } else {
    return a.displayName.localeCompare(b.displayName)
  }
}

/*
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
