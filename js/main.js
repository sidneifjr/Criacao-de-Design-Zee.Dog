var modal = document.getElementById('modal'),
    btn = document.getElementById('btn');

btn.addEventListener("click", function(){
  if(modal.className === ""){
    modal.classList.add('active');
  } else {
    modal.classList.remove('active');
  }
  
  window.setTimeout(function(){
    modal.style.display = 'none';
  }, 3000);
}); 
