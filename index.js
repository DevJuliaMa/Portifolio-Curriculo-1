document.addEventListener("DOMContentLoaded", () => {
    new TypeIt("#animate", {
        speed: 300,
        waitUntilVisible: true,
      }).type("OLÁ...")
      .go();
});
