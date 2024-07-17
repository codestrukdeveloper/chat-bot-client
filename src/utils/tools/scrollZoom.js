export function scrollZoom(element, maxScale, factor, bubbleTarget, minScale) {
  const target = element.current;
  // let zoomTarget = {
  //   x: 0,
  //   y: 0,
  // };
  let zoomPoint = {
    x: 0,
    y: 0,
  };
  let scale = 1;

  target.addEventListener("wheel", scrolled);

  function scrolled(e) {
    e.preventDefault();
    const { pageX, pageY } = e;

    zoomPoint.x = pageX - target.offsetLeft;
    zoomPoint.y = pageY - target.offsetTop;

    let delta = e.deltaY;
    delta = Math.max(-1, Math.min(1, delta));

    if (delta >= 1) {
      scale -= delta * factor * scale;
      console.log(scale);
      scale = Math.max(0.2, Math.min(minScale, scale));
      update();
      return;
    }

    scale += delta * factor * scale;
    scale = Math.max(1, Math.min(maxScale, scale));

    update();
  }

  function update() {
    if (bubbleTarget) {
      bubbleTarget.forEach((target) => {
        target.current.style.transform = `scale(${scale})`;
      });

      return;
    }

    target.style.transform = `scale(${scale})`;
  }
}
