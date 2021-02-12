const getter = (function () {
  const getButtons = function () {
    return document.querySelectorAll("button");
  };

  const getAnimalLines = () => {
    return document.querySelectorAll("tr");
  };

  const getMainImage = () => {
    return document.getElementById("image-box");
  };

  const getLineInclusiveElement = (parentElementThis) => {
    const inclusiveElement =
      parentElementThis.parentElement.previousSibling.previousSibling
        .previousSibling.parentElement;
    return inclusiveElement;
  };
  return {
    getButtons,
    getAnimalLines,
    getMainImage,
    getLineInclusiveElement,
  };
})();
