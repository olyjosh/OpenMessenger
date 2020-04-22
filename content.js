addDomChangesListeners();

function addDomChangesListeners() {
  // alert('READ: '+window.stampx);

  // alert('READ: '+window.stampx);

  MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

  var observer = new MutationObserver(function (mutations, observer) {
    for (let mutation of mutations) {
      if (mutation.type === 'childList') {
        // console.log('A child node has been added or removed.');
        for (let i = 0; i < mutation.addedNodes.length; i++) {
          console.log('Added::: ',
              mutation.addedNodes[0].textContent + ' text.');
          let txt = mutation.addedNodes[0].textContent;

          var phone = hasMatch(txt);
          if(phone !=null){
            alert(phone);
            addLinkToParent(mutation.addedNodes[0])
          }
        }
      }
      else if (mutation.type === 'attributes') {
        console.log(
            'The ' + mutation.attributeName + ' attribute was modified.');
      }
    }
    // ...
  });

  observer.observe(document, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
  });

}

function hasMatch(txt) {

  const regex = /(^[0]\d{10}$)|(^[234]\d{12}$)/gm;
  const str = `dua aiosdgas 2348061662025 suaiha adsuiasd siasb asuas a`;
  let m
  // m = regex.exec(str)

  // if (m !== null) {
  //   return m[0];
  // }
  //
  // return null;
  while ((m = regex.exec(txt)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
      console.log(`Found match, group ${groupIndex}: ${match}`);
      alert(match)
    });
  }
}

function addLinkToParent(phoneNode){

  // alert(phoneNode.tagName+' '+phoneNode.textContent);

  var node = document.createElement("span"); // Create a <li> node
  var textnode = document.createTextNode("Water"); // Create a text node
  node.appendChild(textnode); // Append the text to <li>
  //document.getElementById("myList").appendChild(node);

  if(phoneNode.tagName === 'DIV'){
    phoneNode.appendChild(node);
    return;
  }

  // phoneNode
}

