/* eslint-disable arrow-parens */
/* eslint-disable no-console */
import { createFromIconfontCN } from '@ant-design/icons';
/**
 * iconUrl
 */
export const iconUrl = '//at.alicdn.com/t/c/font_3520199_pheco7nb3xf.js';
/**
 * icon
 */
export const Icon = createFromIconfontCN({
  scriptUrl: iconUrl,
});

export const getBreadcrumbByMenus = (menus = [], path: string[] = []) => {
  let target = '';
  let children: any = menus;
  const breadcrumb: string[] = [];
  path.forEach(p => {
    target += `/${p}`;
    const item = children.find((i) => i.path === target);
    if (item) {
      breadcrumb.push(item.label);
      children = item.children;
    }
  });
  return {
    title: breadcrumb[breadcrumb.length - 1],
    breadcrumb,
  };
};
