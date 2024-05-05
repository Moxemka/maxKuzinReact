export default function applyPreferredColorScheme(scheme) {
        
    for (var s = 0; s < document.styleSheets.length; s++) {

        for (var i = 0; i < document.styleSheets[s].cssRules.length; i++) {
            let rule = document.styleSheets[s].cssRules[i];


            if (rule && rule.media && rule.media.mediaText.includes("prefers-color-scheme")) {

                switch (scheme) {
                    case "light":
                        window.localStorage.setItem('theme', 'light')
                        window.dispatchEvent(new CustomEvent("onThemeChange"), {detail: {theme: 'light'}})
                        rule.media.appendMedium("original-prefers-color-scheme");
                        if (rule.media.mediaText.includes("light")) rule.media.deleteMedium("(prefers-color-scheme: light)");
                        if (rule.media.mediaText.includes("dark")) rule.media.deleteMedium("(prefers-color-scheme: dark)");
                        break;
                    case "dark":
                        window.localStorage.setItem('theme', 'dark')
                        window.dispatchEvent(new CustomEvent("onThemeChange", {detail: {theme: 'dark'}}))
                        rule.media.appendMedium("(prefers-color-scheme: light)");
                        rule.media.appendMedium("(prefers-color-scheme: dark)");
                        if (rule.media.mediaText.includes("original")) rule.media.deleteMedium("original-prefers-color-scheme");
                        break;
                    default:
                        rule.media.appendMedium("(prefers-color-scheme: dark)");
                        if (rule.media.mediaText.includes("light")) rule.media.deleteMedium("(prefers-color-scheme: light)");
                        if (rule.media.mediaText.includes("original")) rule.media.deleteMedium("original-prefers-color-scheme");
                        break;
                }
            }
        }


    }  } 