var modal = document.getElementById('modal'),
    btn = document.getElementById('btn');

btn.addEventListener("click", function(){
  modal.classList.add('active');
  
  window.setTimeout(function(){
    modal.style.display = 'none';
  }, 3000);
}); 