document.addEventListener('DOMContentLoaded',function(){var a=Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'),0),b=document.querySelector('nav');a.length>0&&a.forEach(function(a){a.addEventListener('click',function(){var c=a.dataset.target,d=document.getElementById(c);a.classList.toggle('is-active'),d.classList.toggle('is-active'),b.classList.toggle('is-active')})})})