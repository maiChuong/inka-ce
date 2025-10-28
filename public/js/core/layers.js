// Layer Management for Inka-CE
let layerCounter = 0;

window.addEventListener("DOMContentLoaded", () => {
  const canvas = window.canvas;
  const layerList = document.getElementById("layer-list");

  if (!canvas || !layerList) return;

  // === Add Layer ===
  document.getElementById("addLayerBtn")?.addEventListener("click", () => {
    const rect = new fabric.Rect({
      left: 100 + layerCounter * 10,
      top: 100 + layerCounter * 10,
      fill: "#ccc",
      width: 100,
      height: 100,
      selectable: true,
      name: `Layer ${layerCounter + 1}`
    });
    canvas.add(rect);
    canvas.setActiveObject(rect);
    addLayerToPanel(rect);
    layerCounter++;
  });

  // === Toggle Visibility ===
  document.getElementById("toggleLayerVisibilityBtn")?.addEventListener("click", () => {
    const obj = canvas.getActiveObject();
    if (obj) {
      obj.visible = !obj.visible;
      canvas.requestRenderAll();
    }
  });

  // === Lock/Unlock Layer ===
  document.getElementById("lockLayerBtn")?.addEventListener("click", () => {
    const obj = canvas.getActiveObject();
    if (obj) {
      obj.selectable = !obj.selectable;
      obj.evented = obj.selectable;
      canvas.requestRenderAll();
    }
  });

  // === Delete Layer ===
  document.getElementById("deleteLayerBtn")?.addEventListener("click", () => {
    const obj = canvas.getActiveObject();
    if (obj) {
      canvas.remove(obj);
      removeLayerFromPanel(obj);
      canvas.discardActiveObject();
      canvas.requestRenderAll();
    }
  });

  // === Add Layer to Panel ===
  function addLayerToPanel(obj) {
    const item = document.createElement("div");
    item.className = "layer-item";
    item.textContent = obj.name || `Layer ${layerCounter}`;
    item.addEventListener("click", () => {
      canvas.setActiveObject(obj);
      canvas.requestRenderAll();
    });
    item.dataset.layerId = obj.__uid;
    layerList.appendChild(item);
  }

  // === Remove Layer from Panel ===
  function removeLayerFromPanel(obj) {
    const items = layerList.querySelectorAll(".layer-item");
    items.forEach(item => {
      if (item.dataset.layerId == obj.__uid) {
        item.remove();
      }
    });
  }
});
