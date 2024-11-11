document.querySelector('.hamburger input').addEventListener('change', function () {
      document.querySelector('.contenedor_header').style.top = this.checked ? '0%' : '-100%';
      document.querySelector('.line').style.stroke = this.checked ? '#fff' : '#5f5f5f';
      document.getElementById('line__two').style.stroke = this.checked ? '#fff' : '#5f5f5f';
});
