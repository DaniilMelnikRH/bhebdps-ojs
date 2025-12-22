const tooltips = document.querySelectorAll(".has-tooltip");
let activeTooltip = null;

tooltips.forEach(element => {
  element.addEventListener("click", event => {
    event.preventDefault();

    if (activeTooltip && activeTooltip.relatedElement === element){
      activeTooltip.tooltip.remove();
      activeTooltip = null;
      return;
    }

    if (activeTooltip){
      activeTooltip.tooltip.remove();
      activeTooltip = null;
    }

    const tooltip = document.createElement("div");
    tooltip.className = "tooltip tooltip_active";
    tooltip.textContent = element.title;

    document.body.appendChild(tooltip);

    const position = element.dataset.position || "bottom";
    const elementRect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    let top;
    let left;

    switch (position){
      case "top":
        top = elementRect.top - tooltipRect.height;
        left = elementRect.left + (elementRect.width - tooltipRect.width) / 2;
        break;

      case "left":
        top = elementRect.top + (elementRect.height - tooltipRect.height) / 2;
        left = elementRect.left - tooltipRect.width;
        break;

      case "right":
        top = elementRect.top + (elementRect.height - tooltipRect.height) / 2;
        left = elementRect.right;
        break;

      case "bottom":
      default:
        top = elementRect.bottom;
        left = elementRect.left + (elementRect.width - tooltipRect.width) / 2;
    }

    tooltip.style.top = `${top + window.scrollY}px`;
    tooltip.style.left = `${left + window.scrollX}px`;

    activeTooltip = {
      tooltip,
      relatedElement: element
    };
  });
  
});