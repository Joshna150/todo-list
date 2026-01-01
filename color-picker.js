
document.addEventListener('DOMContentLoaded',function(){
  const colorPicker = document.querySelector('.color-picker');
  const colorDisplay = document.querySelector('.color-display');
  const colorcode=document.querySelector('.color-code');

  colorPicker.addEventListener('input',() => {
    const selectedcolor=colorPicker.value;
    colorDisplay.style.backgroundColor=selectedcolor;
    

    colorcode.textContent=selectedcolor;
  });
});