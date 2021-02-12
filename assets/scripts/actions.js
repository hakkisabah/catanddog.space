const actions = (function () {
  const flashElement = (parentElementThis) => {
    setTimeout(() => {
      parentElementThis.style.backgroundColor = "black";
    }, 500);
    setTimeout(() => {
      parentElementThis.style.backgroundColor = "";
    }, 700);
  };
  const isImageWantToDisplay = (soundButtonThis, $reverseDown, callback) => {
    const createdModalAndId = elementCreator.createModal("$dismiss");
    const $myModal = new bootstrap.Modal(
      document.getElementById(createdModalAndId),
      {
        keyboard: false,
        backdrop: "static",
      }
    );
    $myModal.toggle();
    callback($myModal, soundButtonThis, $reverseDown);
  };

  const playAudio = (
    soundButtonThis,
    $reverseDown,
    isHashOk = true,
    callback
  ) => {
    const soundId = soundButtonThis.dataset.sound;
    const soundElement = document.getElementById(soundId);
    if (isHashOk) {
      window.location.hash = "#main-image";
    }
    setTimeout(() => {
      history.pushState(
        "",
        "",
        window.location.href.substr(0, window.location.href.indexOf("#"))
      );
      // window.location.hash = "";
      callback(soundButtonThis, $reverseDown);
      soundElement.play();
    }, 500);
  };
  return {
    flashElement,
    isImageWantToDisplay,
    playAudio,
  };
})();
