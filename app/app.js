const screenshotModal = document.getElementById("screenshot-dialog");
const closeModal = document.getElementById("close-dialog"),
  fullsizeScreenshot = document.getElementById("screenshot-fullsize-img");

document.querySelectorAll(".project-screen-thumb").forEach((thumb) => {
  thumb.addEventListener("click", (e) => {
    fullsizeScreenshot.src = thumb.src.replace("-thumb", "");
    screenshotModal.showModal();
    console.log(fullsizeScreenshot.src);
    console.log(thumb.src);
    // fullsizeScreenshot.src = thumb.src.replace("thumb", "fullsize");
  });
});

closeModal.addEventListener("click", (e) => {
  screenshotModal.close();
});
