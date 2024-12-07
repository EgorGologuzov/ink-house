export const publicPath = process.env.NODE_ENV === "production" ? "/ink-house/" : "/";

export function convertPath(list) {
  if (!publicPath || publicPath === "/")
    return;

  list.forEach(item => {
    if (!item.ava)
      return;
    
    let result = publicPath + item.ava;
    result = result.replace("//", "/");
    item.ava = result;
  });
}