/**
 * Qrcode.js with preview. Perfect for sending urls to mobile phones.
 * Ubiquity 0.5+ compatible
 */


CmdUtils.CreateCommand({
  names: ["qrcode","qr"],
  arguments: [{role:"object",label:"input",nountype:noun_arb_text}],
  description: "Generates a QR Code with the specified text encoded.",
  preview: function(pblock, input) {
    pblock.innerHTML = "<img src='http://chart.apis.google.com/chart?cht=qr&chld=M|4&chs=350x350&chl=" + input.object.text+"'></img>"+"<br/>" + input.object.text
  },
  execute: function(args) {
    var input = args.object;
    var url = "http://chart.apis.google.com/chart?cht=qr&chld=M|4&chs=350x350&chl={QUERY}"
    var urlString = url.replace("{QUERY}", encodeURIComponent(input.text));
    Utils.openUrlInBrowser(urlString);
  }
});

