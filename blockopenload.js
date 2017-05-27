if (location.href.indexOf("https://openload.co/embed") > -1) {
            function newappend(a, b, c, d) {
                debugger;
                function newappendiF(a, b, c, d) {
                    if (a.localName === "script") {
                        return;
                    }
                    return e.body.appendChildcopy(a, b, c, d);
                }
                if (a.localName === "iframe") {
                    document.getElementsByClassName("vjs-big-play-button")[0].style.backgroundColor=(document.getElementsByClassName("vjs-big-play-button")[0].style.backgroundColor=="red"?"orange":"red");
                    var t = document.body.appendChildcopy(a, b, c, d);
                    var e = t["contentDocument"] || t["contentWindow"]["document"];
                    e.body.appendChildcopy = e.body.appendChild;
                    e.body.appendChild = newappendiF;
                    return t;
                }
                return document.body.appendChildcopy(a, b, c, d);
            }
            document.body.appendChildcopy = document.body.appendChild;
            document.body.appendChild = newappend;
        }