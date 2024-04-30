const screenshotModal = document.getElementById("screenshot-dialog");
const closeModal = document.getElementById("close-dialog"),
  fullsizeScreenshot = document.getElementById("screenshot-fullsize");

document.querySelectorAll(".project-screen-thumb").forEach((thumb) => {
  thumb.addEventListener("click", (e) => {
    screenshotModal.showModal();
    fullsizeScreenshot.src = thumb.src.replace("thumb", "fullsize");
  });
});

closeModal.addEventListener("click", (e) => {
  screenshotModal.close();
});
