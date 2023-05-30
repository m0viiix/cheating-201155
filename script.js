    function replaceRussianChars(str) {
      const russianChars = {
        'а': 'a',
        'б': 'b',
        'в': 'v',
        'г': 'g',
        'д': 'd',
        'е': 'e',
        'ё': 'e',
        'ж': 'zh',
        'з': 'z',
        'и': 'i',
        'й': 'y',
        'к': 'k',
        'л': 'l',
        'м': 'm',
        'н': 'n',
        'о': 'o',
        'п': 'p',
        'р': 'r',
        'с': 's',
        'т': 't',
        'у': 'u',
        'ф': 'f',
        'х': 'h',
        'ц': 'ts',
        'ч': 'ch',
        'ш': 'sh',
        'щ': 'sch',
        'ъ': 'SS',
        'ы': 'y',
        'ь': 'DD',
        'э': 'e',
        'ю': 'yu',
        'я': 'ya'
      };

      let result = '';
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const replacement = russianChars[char.toLowerCase()] || char;
        result += char === char.toUpperCase() ? replacement.toUpperCase() : replacement;
      }
      return result.replace(/(\r\n|\n|\r)/gm, " ");
    }
    

    var notfull = replaceRussianChars("Для приостановки артериального кровотечения необходимо зажать кровоточащую артерию пальцами")
    var full = replaceRussianChars("Для приостановки артериального кровотечения необходимо зажать кровоточащую артерию пальцами .... места повреждения:")
    console.log(full.includes(notfull))

    const Questions = {
        // "1": "1",
        // "2": "1",
        // "3": "1",
        // "4": "1",
      "Кроме переохлаждения причинами несчастных случаев могут быть": "1",
      "Для приостановки артериального кровотечения необходимо зажать кровоточащую артерию пальцами": "2",
      "В холодной воде раздеваться полностью не рекомендуется, так как одежда предохраняет от охлаждения": "3",
      "Уставший пловец должен держаться за спасателя одним из следующих приемов": "1M",
      "Уставший пловец должен держаться за спасателя одним из следующих": "находясь спереди от него, вытянувшись на груди и держась одной рукой за ближайшее к нему плечо спасателя",
      "Test for": "1M",
    };
    
    setTimeout(() => {
      const qtexts = $(".qtext");
        qtexts.each(function() {
            var qContent = $(this).text()
            var full = replaceRussianChars(qContent).toLowerCase()
            console.log(full)
            // console.log(translatedContent)
            for (const key in Questions) {
                notfull = replaceRussianChars(key).toLowerCase()
                console.log(notfull)
                // var isMatch = new RegExp('\\b'+translatedQuestion+'\\b', 'i').test(translatedContent)
                if (full.includes(notfull)) {
                    console.log("FoundAnswer")
                    $(this).text(`${qContent} (${Questions[key]})`)
                }
            }
        });
    }, 5000);
