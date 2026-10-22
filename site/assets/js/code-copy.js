(() => {
  "use strict";

  const copyWithFallback = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.append(textArea);
    textArea.select();

    const copied = document.execCommand("copy");
    textArea.remove();

    if (!copied) {
      throw new Error("Nie udało się skopiować kodu.");
    }
  };

  document.querySelectorAll("pre.code-block").forEach((codeBlock, index) => {
    const code = codeBlock.querySelector("code");

    if (!code) {
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "code-block-wrap";
    codeBlock.before(wrapper);
    wrapper.append(codeBlock);

    const button = document.createElement("button");
    button.className = "code-copy-button";
    button.type = "button";
    button.textContent = "Kopiuj kod";
    button.setAttribute("aria-label", `Skopiuj kod z przykładu ${index + 1}`);
    wrapper.prepend(button);

    let resetTimer;

    button.addEventListener("click", async () => {
      window.clearTimeout(resetTimer);

      try {
        await copyWithFallback(code.textContent);
        button.textContent = "Skopiowano";
        button.classList.remove("is-error");
        button.classList.add("is-copied");
      } catch (error) {
        button.textContent = "Błąd kopiowania";
        button.classList.remove("is-copied");
        button.classList.add("is-error");
      }

      resetTimer = window.setTimeout(() => {
        button.textContent = "Kopiuj kod";
        button.classList.remove("is-copied", "is-error");
      }, 2000);
    });
  });
})();
