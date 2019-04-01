var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            // f sound
            var replaceText = text.replace(/ff/, 'p');
            replaceText = text.replace(/f/, 'p');
            replaceText = replaceText.replace(/F/, 'P');
            replaceText = replaceText.replace(/ph/, 'p');
            replaceText = replaceText.replace(/Ph/, 'P');
            replaceText = replaceText.replace(/cough/, 'cop');

            // th sound
            replaceText = replaceText.replace(/(?<=[^a-z])th|th(?![a-z])/, 'd');
            replaceText = replaceText.replace(/(?<=[aeiou])th|th(?=[aeiou])/, 'd');
            replaceText = replaceText.replace(/Th/, 'D');
            replaceText = replaceText.replace(/athe/, 'ate');

            // sion/tion sound
            replaceText = replaceText.replace(/sion/, 'shun');
            replaceText = replaceText.replace(/tion/, 'shun');

            replaceText = replaceText.replace(/ing/, 'en');
            replaceText = replaceText.replace(/in/, 'en');
            replaceText = replaceText.replace(/In/, 'En');

            // ex
            replaceText = replaceText.replace(/ex/, 'ec');
            // sk, sc
            replaceText = replaceText.replace(/sch/, 'sk');
            replaceText = replaceText.replace(/Sch/, 'Sk');


            replaceText = replaceText.replace(/ can(?![\w])/, 'ken');
            replaceText = replaceText.replace(/can(?![aeiou])/, 'ken');

            replaceText = replaceText.replace(/(?<=[^a-z])not(?![a-z])/, 'nut');

            replaceText = replaceText.replace(/sh/, 'ch');
            replaceText = replaceText.replace(/Sh/, 'Ch');

            replaceText = replaceText.replace(/v/, 'b');
            replaceText = replaceText.replace(/V/, 'B');

            // and/end => en
            replaceText = replaceText.replace(/(?<=[aeiou]) and(?![a-z])/, ' en');
            replaceText = replaceText.replace(/ and(?![\w])/, 'en');
            replaceText = replaceText.replace(/end/, 'en');

            replaceText = replaceText.replace(/eese/, 'is');
            replaceText = replaceText.replace(/ease/, 'is');
            replaceText = replaceText.replace(/eek/, 'ick');

            //air
            replaceText = replaceText.replace(/dere/, 'der');
            replaceText = replaceText.replace(/deir/, 'der');

            replaceText = replaceText.replace(/ath(?![aeiou])/, 'ut');
            replaceText = replaceText.replace(/ool/, 'aul');
            replaceText = replaceText.replace(/ull/, 'aul');
            replaceText = replaceText.replace(/uck/, 'aq');
            replaceText = replaceText.replace(/some/, 'sun');

            // whole words
            replaceText = replaceText.replace(/(?<=[^a-z])has(?![a-z])/, 'hab');
            replaceText = replaceText.replace(/(?<=[^a-z])but(?![a-z])/, 'pero');
            replaceText = replaceText.replace(/(?<=[^a-z])to(?![a-z])/, 'tu');
            replaceText = replaceText.replace(/(?<=[^a-z])have(?![a-z])/, 'hab');


            if (replaceText !== text) {
                element.replaceChild(document.createTextNode(replaceText), node);
            }
        }
    }
}
