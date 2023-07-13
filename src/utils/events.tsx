function on(eventType: string, listener: any) {
  document.addEventListener(eventType, listener);
}

function off(eventType: string, listener: any) {
  document.removeEventListener(eventType, listener);
}

function once(eventType: string, listener: any) {
  on(eventType, handleEventOnce);

  function handleEventOnce(event: Event) {
    listener(event);
    off(eventType, handleEventOnce);
  }
}

function trigger(eventType: string, data: any = null) {
  // console.log('trigger', eventType);
  const event = new CustomEvent(eventType, { detail: data });
  document.dispatchEvent(event);
}

export { on, once, off, trigger };