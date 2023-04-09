
export default function handler(req, res) {
  res.status(200).json({
    "country": "ES",
    "display_name": "tamskyspot",
    "email": "tamskyeune@hotmail.com",
    "explicit_content": {
      "filter_enabled": false,
      "filter_locked": false
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/user/2wgdcxjwg5r7mh4tmzio0fe70"
    },
    "followers": {
      "href": null,
      "total": 2
    },
    "href": "https://api.spotify.com/v1/users/2wgdcxjwg5r7mh4tmzio0fe70",
    "id": "2wgdcxjwg5r7mh4tmzio0fe70",
    "images": [
      {
        "url": "https://i.scdn.co/image/ab6775700000ee8536a92214993aeb6b17ee8e6f",
        "height": null,
        "width": null
      }
    ],
    "product": "free",
    "type": "user",
    "uri": "spotify:user:2wgdcxjwg5r7mh4tmzio0fe70"
  })
}


