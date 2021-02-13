const elementCreator = (function () {
  const $htmls = {
    $loading: {
      html:
        '          <div class="modal-body text-center">\n' +
        '            <div class="container-fluid">\n' +
        '              <div class="row">\n' +
        '                <div class="col-md-4">\n' +
        '                  <div class="spinner-grow m-5" role="status"></div>\n' +
        "                </div>\n" +
        '                <div class="col-md-4">\n' +
        '                  <div class="spinner-grow m-5" role="status"></div>\n' +
        "                </div>\n" +
        '                <div class="col-md-4">\n' +
        '                  <div class="spinner-grow m-5" role="status"></div>\n' +
        "                </div>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "            </div>\n",
      title: "Loading...",
    },
    $dismiss: {
      html:
        '          <div class="modal-body">\n' +
        '            <div class="container-fluid">\n' +
        '              <div class="row">\n' +
        '                <div class="col-md-12 text-center">\n Do you want to display main image ?' +
        "                </div>\n" +
        "              </div>\n" +
        "            </div>\n" +
        '           <div class="modal-footer">\n' +
        '             <button id="not-show-main-image" type="button" class="btn btn-secondary">No Thank\'s</button>\n' +
        '             <button id="show-main-image" type="button" class="btn btn-primary">Show and Go</button>\n' +
        "           </div>" +
        "          </div>\n",
      title: "Display Image",
    },
  };

  const $myModalHTML = (inModalHTML) => {
    return (
      "    <!-- Modal -->\n" +
      '      <div class="modal-dialog">\n' +
      '        <div class="modal-content tight-shadow">\n' +
      ' <div class="modal-header text-center">\n' +
      '        <h5 class="modal-title" id="staticBackdropLabel">' +
      inModalHTML.title +
      "</h5>\n" +
      "      </div>" +
      inModalHTML.html +
      "        </div>\n" +
      "      </div>\n"
    );
  };

  const $createReturnButton = () => {
    const buttonInner = "<p><a>More</a></p>";
    const reverseDownButton = document.createElement("button");
    const reference = document.querySelector(".img-container");
    reference.append(reverseDownButton);
    reverseDownButton.id = "reversedown";
    reverseDownButton.type = "button";
    reverseDownButton.classList.add("scroll-down");
    reverseDownButton.innerHTML = buttonInner;
    return document.getElementById(reverseDownButton.id);
  };

  const createModal = (whichHTML) => {
    const whichElementBeforeCreate = document.querySelector(
      "main[role='main']"
    );
    const myModalElement = document.createElement("div");
    document.body.insertBefore(myModalElement, whichElementBeforeCreate);
    myModalElement.id = "myModal";
    myModalElement.tabIndex = -1;
    myModalElement.setAttribute("data-bs-backdrop", "static");
    myModalElement.setAttribute("data-bs-keyboard", "false");
    myModalElement.setAttribute("aria-hidden", "true");
    myModalElement.classList.add("modal");
    myModalElement.classList.add("fade");
    myModalElement.innerHTML = $myModalHTML($htmls[whichHTML]);
    return myModalElement.id;
  };

  const createAnimalLines = (_data) => {
    const $inclusiveElement = document.querySelector("tbody");
    const _addToInclusiveElement = (content) => {
      $inclusiveElement.innerHTML += content;
    };
    const _createReadyPetHtmlElement = (pet) => {
      return `<tr><th scope="row"><img  alt="Your cat or dog" class='pet-image card-image rounded tight-shadow mt-1' src='${pet.image}' /></th><td class="text-break">${pet.name}</td><td class="text-break">${pet.type}</td><td><button data-sound='${pet.sound}' class="btn btn-sm btn-secondary fw-bold">${pet.soundText}</button></td></tr>`;
    };
    const _writeToHtml = function (data) {
      for (let i = 0; i < data.length; i++) {
        _addToInclusiveElement(_createReadyPetHtmlElement(data[i]));
      }
    };
    _writeToHtml(_data);
  };
  return {
    $createReturnButton,
    createAnimalLines,
    createModal,
  };
})();
