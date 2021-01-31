/**
 * Create By Meng
 * Desc: 
 */

export * from './market';
export * from './currency';
export * from './target';

export function clearChild(vId: string) {
  const body = document.getElementById(vId);
  if (body) {
    while (body.hasChildNodes()) {
      if (body.firstChild)
        body.removeChild(body.firstChild)
    }
  }
}