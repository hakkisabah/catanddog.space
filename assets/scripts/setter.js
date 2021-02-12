const setter = (function () {
  const _getter = getter;
  // on main image arrow button
  // parentElementThis from animals sound button
  // $reverseDown created button element
  const _bindReverseDown = (parentElementThis, $reverseDown) => {
    $reverseDown.addEventListener("click", function () {
      const tempedAnimalLineElement = _getter.getLineInclusiveElement(
        parentElementThis
      );
      window.location.hash = "#lastpoint";
      setTimeout(() => {
        history.pushState(
          "",
          "",
          window.location.href.substr(0, window.location.href.indexOf("#"))
        );
        // window.location.hash = "";
        actions.flashElement(tempedAnimalLineElement);
        $reverseDown.remove();
        tempedAnimalLineElement.classList.add("animal-line");
        tempedAnimalLineElement.removeAttribute("id");
      }, 200);
    });
  };
  // if user not select to table row for any pet
  // modal show for asking question while working _addListenerToModalButton function
  const _addListenerToModalButton = (
    $myModal,
    soundButtonThis,
    $reverseDown
  ) => {
    // Select no
    const notImage = document.getElementById("not-show-main-image");
    notImage.addEventListener("click", function () {
      actions.playAudio(soundButtonThis, $reverseDown, false, _bindReverseDown);
      $myModal.hide();
      $reverseDown.remove();
      document.getElementById($myModal._element.id).remove();
    });
    // Select yes
    const Image = document.getElementById("show-main-image");
    Image.addEventListener("click", function () {
      _getter.getMainImage().src = _getter.getLineInclusiveElement(
        soundButtonThis
      ).children[0].childNodes[0].currentSrc;
      actions.playAudio(soundButtonThis, $reverseDown, true, _bindReverseDown);
      _getter
        .getLineInclusiveElement(soundButtonThis)
        .classList.toggle("animal-line");
      $myModal.hide();
      document.getElementById($myModal._element.id).remove();
    });
  };

  const _removeAllLastPointBeforeClick = () => {
    const buttons = _getter.getButtons();
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].parentElement.previousSibling.parentElement.removeAttribute(
        "id"
      );
    }
  };

  const _bindHelper = (listenerBind) => {
    // we need clear while every sound call
    _removeAllLastPointBeforeClick();
    const $reverseDown = elementCreator.$createReturnButton(); // create and return reverseDown Element's DOM
    // We must check main-image for question of modal
    if (
      _getter.getMainImage().src !==
      _getter.getLineInclusiveElement(listenerBind).children[0].childNodes[0]
        .currentSrc
    ) {
      // _addListenerToModalButton sending as a callback and we ask to user => "Do you want to display main image ?"
      actions.isImageWantToDisplay(
        listenerBind,
        $reverseDown,
        _addListenerToModalButton
      );
    } else {
      // if user selected a row anyway we can only audio and return process with _bindReverseDown sending as a callback
      actions.playAudio(listenerBind, $reverseDown, true, _bindReverseDown);
    }
    _getter.getLineInclusiveElement(listenerBind).id = "lastpoint";
  };

  // bind click event for all sound buttons
  const bindButtons = () => {
    const buttons = _getter.getButtons();
    document.body.addEventListener("keyup", function (event) {
      event.stopPropagation();
      if (event.code === "KeyB" || event.code === "KeyM") {
        const isBark = event.code === "KeyB" ? "bark" : "meow";
        document.getElementById(isBark).play();
        const isBarkImage =
          isBark == "bark"
            ? "assets/images/dog_for_key_b.jpg"
            : "assets/images/cat_for_key_m.jpeg";
        if (_getter.getMainImage().src !== isBarkImage) {
          _getter.getMainImage().src = isBarkImage;
          window.location.hash = "#main-image";
          history.pushState(
            "",
            "",
            window.location.href.substr(0, window.location.href.indexOf("#"))
          );
          // window.location.hash = "";
        }
      }
    });
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (event) {
        event.stopPropagation();
        _bindHelper(this);
      });
    }
  };

  // "animal lines" = "rows" and if user clicking any row we know this so we can change main-image and color toggling related row
  const bindAnimalLines = () => {
    const animalLines = _getter.getAnimalLines();
    for (let i = 0; i < animalLines.length; i++) {
      animalLines[i].addEventListener("click", function (event) {
        event.stopPropagation();
        _getter.getMainImage().src = this.children[0].childNodes[0].currentSrc;
        this.classList.toggle("animal-line");
      });
    }
  };

  // trigger all bind events
  const bindEvents = function () {
    bindButtons();
    bindAnimalLines();
  };

  // initialization
  const init = function (_data) {
    elementCreator.createAnimalLines(_data);
    bindEvents();
  };

  return {
    init,
  };
})();
