const cloudLayer = document.getElementById("cloudLayer");

if (cloudLayer) {
  for (let i = 0; i < 20; i++) {
    const cloud = document.createElement("div");
    cloud.classList.add("cloud");

    const size = Math.random() * 300 + 200;
    const top = Math.random() * 60;
    const duration = Math.random() * 40 + 30;
    const delay = Math.random() * -60;

    cloud.style.width = size + "px";
    cloud.style.height = size * 0.6 + "px";
    cloud.style.top = top + "%";
    cloud.style.animationDuration = duration + "s";
    cloud.style.animationDelay = delay + "s";
    cloud.style.zIndex = Math.floor(size);

    cloudLayer.appendChild(cloud);
  }
}
