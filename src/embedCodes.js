export const question1 = `<iframe
  src="https://app.mycountrytalks.org/survey/739c30ba-79bb-4fb8-a510-06550dd6af47/participate?starting_question=77"
  height="300px"
  width="100%"
  id="mycountrytalks-embed">
</iframe>

<style>
  #mycountrytalks-embed {
    border-width: 0;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }
</style>
<script>
  window.addEventListener('message', function (evt){
    var embed = document.getElementById('mycountrytalks-embed');
    var currentScrollTop = 0, newScrollTop = 0;
    var additionalSafeSpace = 50;
    if (evt.origin === 'https://app.mycountrytalks.org') {
      if ("wasResized" in embed.dataset) {
        currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        newScrollTop = currentScrollTop + embed.getBoundingClientRect().top - additionalSafeSpace;
        window.scrollTo(0, newScrollTop);
      }
      embed.style.height = evt.data + 'px';
      embed.setAttribute('data-was-resized', 'true');
    }
  }, false);
</script>`
