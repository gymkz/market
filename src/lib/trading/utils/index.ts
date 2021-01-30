/**
 * 
 */

// eslint-disable-next-line
export function bindChild(divId: string, options: any, scriptUrl: string): void {
  const body = document.getElementById(divId);
  if (body) {
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', scriptUrl);
    script.async = true;
    script.textContent = JSON.stringify(options);
    // script.onload = (e) => {
    //   console.log(e)
    // };
    // script.onratechange = func
    body.appendChild(script);
  } else {
    alert(`标签${divId}不存在！`)
  }
}

export function addScript(url: string): void {
  document.write("<script language=javascript src=" + url + "></script>");
}