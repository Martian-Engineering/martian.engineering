const urbitIds = document.querySelectorAll('.urbit-id');

urbitIds.forEach(urbitId => {
  urbitId.addEventListener('mouseover', () => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = 'This is an Urbit ID, a unique identifier for a node on the Urbit network.';
    tooltip.style.position = 'absolute';
    tooltip.style.top = `${urbitId.offsetTop + urbitId.offsetHeight}px`;
    tooltip.style.left = `${urbitId.offsetLeft}px`;
    tooltip.style.backgroundColor = 'white';
    tooltip.style.padding = '5px';
    tooltip.style.border = '1px solid black';
    document.body.appendChild(tooltip);
  });

  urbitId.addEventListener('mouseout', () => {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => tooltip.remove());
  });
});
