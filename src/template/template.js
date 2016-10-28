module.exports = (props) => {
  const body = props && props.body ? props.body : '';
  const template = `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
      <title>portal</title>
      <!-- stylesheets -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/font-kopub/1.0/kopubdotum.css"/>
      <link rel="stylesheet" href="/portal/src/css/style.css"/>
    </head>
    <body>
      <div id="root">
        ${body}
      </div>
      <script src="/portal/static/bundle.js"></script>
    </body>
  </html>`;
  return template.trim();
};
