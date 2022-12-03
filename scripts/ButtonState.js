let isChanged = false;

if (localStorage.getItem('engine_type') == 'yandex') {
  RestyleYandex()
} else if (localStorage.getItem('engine_type') == 'google') {
  RestyleGoogle()
} else if (localStorage.getItem('engine_type') == 'bing') {
  RestyleBing()
} else if (localStorage.getItem('engine_type') == 'duckduckgo') {
  RestyleDuckDuckGo()
}else if (localStorage.getItem('engine_type') == 'onion') {
  RestyleOnion()
}else if (localStorage.getItem('engine_type') == 'youtube') {
  RestyleYouTube()
}

changable_button_yandex.addEventListener('click', RestyleYandex);
changable_button_google.addEventListener('click', RestyleGoogle);
changable_button_bing.addEventListener('click', RestyleBing);
changable_button_onion.addEventListener('click', RestyleOnion);
changable_button_youtube.addEventListener('click', RestyleYouTube);
changable_button_duckduckgo.addEventListener('click', RestyleDuckDuckGo)

function ResetAll() {
  changable_button_yandex.style.backgroundColor = '#F2F2F2';
  changable_button_yandex.style.color = '#B7B7B7';

  changable_button_google.style.backgroundColor = '#F2F2F2';
  changable_button_google.style.color = '#B7B7B7';

  changable_button_bing.style.backgroundColor = '#F2F2F2';
  changable_button_bing.style.color = '#B7B7B7';

  changable_button_duckduckgo.style.backgroundColor = '#F2F2F2';
  changable_button_duckduckgo.style.color = '#B7B7B7';

  changable_button_onion.style.backgroundColor = '#F2F2F2';
  changable_button_onion.style.color = '#B7B7B7';

  changable_button_youtube.style.backgroundColor = '#F2F2F2';
  changable_button_youtube.style.color = '#B7B7B7';

  console.log('All states are reseted.')
}

function RestyleYandex() {
  if (isChanged != false) {
    ResetAll()
  }

  changable_button_yandex.style.backgroundColor = '#FFC0C0';
  changable_button_yandex.style.color = '#EF3636';
  console.log('Changed state for: Yandex [Active]')


  isChanged = true;
}

function RestyleGoogle() {
  if (isChanged != false) {
    ResetAll()
  }

  changable_button_google.style.backgroundColor = '#D9FFC8';
  changable_button_google.style.color = '#50E338';
  console.log('Changed state for: Google [Active]')

  isChanged = true;
}

function RestyleBing() {
  if (isChanged != false) {
    ResetAll()
  }

  changable_button_bing.style.backgroundColor = '#C5DFFF';
  changable_button_bing.style.color = '#256CF6';
  console.log('Changed state for: Bing [Active]')

  isChanged = true;
}

function RestyleDuckDuckGo() {
  if (isChanged != false) {
    ResetAll()
  }

  changable_button_duckduckgo.style.backgroundColor = '#ffdd98';
  changable_button_duckduckgo.style.color = '#FF9315';
  console.log('Changed state for: DuckDuckGo [Active]')

  isChanged = true;
}

function RestyleOnion() {
  if (isChanged != false) {
    ResetAll()
  }

  changable_button_onion.style.backgroundColor = '#FFC0C0';
  changable_button_onion.style.color = '#EF3636';
  console.log('Changed state for: Onion [Active]')


  isChanged = true;
}

function RestyleYouTube() {
  if (isChanged != false) {
    ResetAll()
  }

  changable_button_youtube.style.backgroundColor = '#FFC0C0';
  changable_button_youtube.style.color = '#EF3636';
  console.log('Changed state for: YouTube [Active]')


  isChanged = true;
}


