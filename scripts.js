function displayImage(event) {
  const files = event.target.files;
  const container = document.getElementById("imageContainer");

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = `Uploaded Image ${i + 1}`;
      img.onclick = function () {
        previewImage(img);
      };
      container.appendChild(img);
    };

    reader.readAsDataURL(file);
  }
}

function previewImage(imgElement) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "flex";
  modalImage.src = imgElement.src;
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
