function openModal() {
    document.getElementById('my-modal').style.display = "block";
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    document.getElementById('my-modal').style.display = "none";
    document.body.classList.remove('modal-open');
  }


  window.addEventListener('click', function(event) {
      if (event.target == document.getElementById('my-modal')) {
          document.getElementById('my-modal').style.display = "none";
      }
  });

  function IncreaseLikes(event) {
      event.stopPropagation();
      var likesCountElement = event.target.nextElementSibling;
      var likesCount = parseInt(likesCountElement.textContent);
      likesCount++;
      likesCountElement.textContent = likesCount;
  }
