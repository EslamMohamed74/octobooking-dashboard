$(window).on('load', function () {
    $(".loader").fadeOut("slow");

    let theme = localStorage.getItem('theme');
    (theme === 'light')? enableLightMode():disableLightMode();
    
    $("#switchMode").on("click",()=>{
      theme = localStorage.getItem('theme');
      (theme === 'light')? disableLightMode():enableLightMode();
    })

    function enableLightMode() {
      $("#switchMode").removeClass("fa-sun").addClass("fa-moon")
      localStorage.setItem('theme', 'light');
      $("body").addClass("light-mode");
  }

  function disableLightMode() {
    $("#switchMode").removeClass("fa-moo").addClass("fa-sun")
    localStorage.setItem('theme', 'dark');
    $("body").removeClass("light-mode")
  }
  window
        .matchMedia('(prefers-color-scheme: dark)')
        .addListener((e) => (e.matches ? disableLightMode() : enableLightMode()));
  });