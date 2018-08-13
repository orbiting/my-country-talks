const stylesAndScripts = `<style>
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

export const question1 = {
  question:
    'Soll sich die Schweiz stärker der EU annähern?',
  embed: `${stylesAndScripts}
  <iframe
    src="https://app.mycountrytalks.org/survey/739c30ba-79bb-4fb8-a510-06550dd6af47/participate?starting_question=76"
    height="300px"
    width="100%"
    id="mycountrytalks-embed">
  </iframe>
  `
}

export const question2 = {
  question:
    'Soll die Schweiz mehr Flüchtlinge aufnehmen?',
  embed: `${stylesAndScripts}
  <iframe
    src="https://app.mycountrytalks.org/survey/739c30ba-79bb-4fb8-a510-06550dd6af47/participate?starting_question=77"
    height="300px"
    width="100%"
    id="mycountrytalks-embed">
  </iframe>`
}

export const question3 = {
  question:
    'Wird in der Schweiz zu viel Land überbaut?',
  embed: `${stylesAndScripts}
  <iframe
    src="https://app.mycountrytalks.org/survey/739c30ba-79bb-4fb8-a510-06550dd6af47/participate?starting_question=78"
    height="300px"
    width="100%"
    id="mycountrytalks-embed">
  </iframe>
  `
}

export const question4 = {
  question:
    'Sollten homosexuelle Paare Kinder adoptieren dürfen?',
  embed: `${stylesAndScripts}
  <iframe
    src="https://app.mycountrytalks.org/survey/739c30ba-79bb-4fb8-a510-06550dd6af47/participate?starting_question=79"
    height="300px"
    width="100%"
    id="mycountrytalks-embed">
  </iframe>
  `
}

export const question5 = {
  question:
    'Braucht es eine Frauenquote in den Chefetagen grosser Unternehmen?',
  embed: `${stylesAndScripts}
  <iframe
    src="https://app.mycountrytalks.org/survey/739c30ba-79bb-4fb8-a510-06550dd6af47/participate?starting_question=80"
    height="300px"
    width="100%"
    id="mycountrytalks-embed">
  </iframe>
  `
}

export const question6 = {
  question:
    'Geht es den Einwohnerinnen und Einwohnern in der Schweiz heute schlechter als vor zehn Jahren?',
  embed: `${stylesAndScripts}
  <iframe
    src="https://app.mycountrytalks.org/survey/739c30ba-79bb-4fb8-a510-06550dd6af47/participate?starting_question=81"
    height="300px"
    width="100%"
    id="mycountrytalks-embed">
  </iframe>
  `
}
