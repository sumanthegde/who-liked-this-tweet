chrome:
pwd === wholikedthistweet
root/manifest.json
  version++
  ensure chrome (manifest v3, service_worker)
/usr/bin/zip -vr chrome.1.0.zip root -X

firefox:
pwd === root
manifest.json
  version++
  ensure firefox (manifest v2, scripts[], geckoid) // consult ../manifest.firefox.json
/usr/bin/zip -vr kridantaclient_firefox_2_0_x.zip ./* -X
