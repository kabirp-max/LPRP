//Include file after jq validation core
if (typeof initPull === 'object') {
    var JQValidatorLocalization = {};
    initPull.localizeJqValidator = function() {
        var locale = {};
        JQValidatorLocalization.locales = {};

        /**
         * @param { string } code
         * @returns { string }
         * */
        function getLangCode(code) {
            return (code || '').trim().toLowerCase();
        }

        function mapLocales() {
            var mappedLocales = Object.keys(locale).reduce(function(result, langCode) {
                var code = getLangCode(langCode);

                if (code) {
                    result[code] = locale[langCode];
                }

                return result;
            }, {});

            JQValidatorLocalization.locales = mappedLocales;
        }

        /*
         * Locale: AR (Arabic; العربية)
         */
        locale.ar = {
            required: 'هذا الحقل إلزامي',
            remote: 'يرجى تصحيح هذا الحقل للمتابعة',
            email: 'رجاء إدخال عنوان بريد إلكتروني صحيح',
            url: 'رجاء إدخال عنوان موقع إلكتروني صحيح',
            date: 'رجاء إدخال تاريخ صحيح',
            dateISO: 'رجاء إدخال تاريخ صحيح (ISO)',
            number: 'رجاء إدخال عدد بطريقة صحيحة',
            digits: 'رجاء إدخال أرقام فقط',
            creditcard: 'رجاء إدخال رقم بطاقة ائتمان صحيح',
            equalTo: 'رجاء إدخال نفس القيمة',
            extension: 'رجاء إدخال ملف بامتداد موافق عليه',
            maxlength: $.validator.format('الحد الأقصى لعدد الحروف هو {0}'),
            minlength: $.validator.format('الحد الأدنى لعدد الحروف هو {0}'),
            rangelength: $.validator.format('عدد الحروف يجب أن يكون بين {0} و {1}'),
            range: $.validator.format('رجاء إدخال عدد قيمته بين {0} و {1}'),
            max: $.validator.format('رجاء إدخال عدد أقل من أو يساوي {0}'),
            min: $.validator.format('رجاء إدخال عدد أكبر من أو يساوي {0}'),
            telMinLength: $.validator.format('يجب أن يحتوي رقم الهاتف على {0} رقم على الأقل'),
            pattern: 'تنسيق غير صالح.'
        };

        /*
         * Locale: Az (Azeri; azərbaycan dili)
         */
        locale.az = {
            required: 'Bu xana mütləq doldurulmalıdır.',
            remote: 'Zəhmət olmasa, düzgün məna daxil edin.',
            email: 'Zəhmət olmasa, düzgün elektron poçt daxil edin.',
            url: 'Zəhmət olmasa, düzgün URL daxil edin.',
            date: 'Zəhmət olmasa, düzgün tarix daxil edin.',
            dateISO: 'Zəhmət olmasa, düzgün ISO formatlı tarix daxil edin.',
            number: 'Zəhmət olmasa, düzgün rəqəm daxil edin.',
            digits: 'Zəhmət olmasa, yalnız rəqəm daxil edin.',
            creditcard: 'Zəhmət olmasa, düzgün kredit kart nömrəsini daxil edin.',
            equalTo: 'Zəhmət olmasa, eyni mənanı bir daha daxil edin.',
            extension: 'Zəhmət olmasa, düzgün genişlənməyə malik faylı seçin.',
            maxlength: $.validator.format('Zəhmət olmasa, {0} simvoldan çox olmayaraq daxil edin.'),
            minlength: $.validator.format('Zəhmət olmasa, {0} simvoldan az olmayaraq daxil edin.'),
            rangelength: $.validator.format('Zəhmət olmasa, {0} - {1} aralığında uzunluğa malik simvol daxil edin.'),
            range: $.validator.format('Zəhmət olmasa, {0} - {1} aralığında rəqəm daxil edin.'),
            max: $.validator.format('Zəhmət olmasa, {0} və ondan kiçik rəqəm daxil edin.'),
            min: $.validator.format('Zəhmət olmasa, {0} və ondan böyük rəqəm daxil edin'),
            telMinLength: $.validator.format('Telefon nömrəsi ən azı {0} rəqəmdən ibarət olmalıdır'),
            pattern: 'Yeni format.'
        }

        /*
         * Locale: BG (Bulgarian; български език)
         */
        locale.bg = {
            required: 'Полето е задължително.',
            remote: 'Моля, въведете правилната стойност.',
            email: 'Моля, въведете валиден email.',
            url: 'Моля, въведете валидно URL.',
            date: 'Моля, въведете валидна дата.',
            dateISO: 'Моля, въведете валидна дата (ISO).',
            number: 'Моля, въведете валиден номер.',
            digits: 'Моля, въведете само цифри.',
            creditcard: 'Моля, въведете валиден номер на кредитна карта.',
            equalTo: 'Моля, въведете същата стойност отново.',
            extension: 'Моля, въведете стойност с валидно разширение.',
            maxlength: $.validator.format('Моля, въведете не повече от {0} символа.'),
            minlength: $.validator.format('Моля, въведете поне {0} символа.'),
            rangelength: $.validator.format('Моля, въведете стойност с дължина между {0} и {1} символа.'),
            range: $.validator.format('Моля, въведете стойност между {0} и {1}.'),
            max: $.validator.format('Моля, въведете стойност по-малка или равна на {0}.'),
            min: $.validator.format('Моля, въведете стойност по-голяма или равна на {0}.'),
            telMinLength: $.validator.format('Телефонният номер трябва да съдържа поне {0} цифри'),
            pattern: 'Невалиден формат.'
        }

        /*
         * Locale: bn_BD (Bengali, Bangladesh)
         */
        locale.bn_BD = {
            required: 'এই তথ্যটি আবশ্যক।',
            remote: 'এই তথ্যটি ঠিক করুন।',
            email: 'অনুগ্রহ করে একটি সঠিক মেইল ঠিকানা লিখুন।',
            url: 'অনুগ্রহ করে একটি সঠিক লিঙ্ক দিন।',
            date: 'তারিখ সঠিক নয়।',
            dateISO: 'অনুগ্রহ করে একটি সঠিক (ISO) তারিখ লিখুন।',
            number: 'অনুগ্রহ করে একটি সঠিক নম্বর লিখুন।',
            digits: 'এখানে শুধু সংখ্যা ব্যবহার করা যাবে।',
            creditcard: 'অনুগ্রহ করে একটি ক্রেডিট কার্ডের সঠিক নম্বর লিখুন।',
            equalTo: 'একই মান আবার লিখুন।',
            extension: 'সঠিক ধরনের ফাইল আপলোড করুন।',
            maxlength: $.validator.format('{0}টির বেশি অক্ষর লেখা যাবে না।'),
            minlength: $.validator.format('{0}টির কম অক্ষর লেখা যাবে না।'),
            rangelength: $.validator.format('{0} থেকে {1} টি অক্ষর সম্বলিত মান লিখুন।'),
            range: $.validator.format('{0} থেকে {1} এর মধ্যে একটি মান ব্যবহার করুন।'),
            max: $.validator.format('অনুগ্রহ করে {0} বা তার চাইতে কম মান ব্যবহার করুন।'),
            min: $.validator.format('অনুগ্রহ করে {0} বা তার চাইতে বেশি মান ব্যবহার করুন।'),
            telMinLength: $.validator.format('ফোন নম্বরটিতে কমপক্ষে {0} সংখ্যা থাকতে হবে'),
            pattern: 'ভুল ফরম্যাট.'
        }

        /*
         * Locale: CA (Catalan; català)
         */
        locale.ca = {
            required: 'Aquest camp és obligatori.',
            remote: 'Si us plau, omple aquest camp.',
            email: 'Si us plau, escriu una adreça de correu-e vàlida',
            url: 'Si us plau, escriu una URL vàlida.',
            date: 'Si us plau, escriu una data vàlida.',
            dateISO: 'Si us plau, escriu una data (ISO) vàlida.',
            number: 'Si us plau, escriu un número enter vàlid.',
            digits: 'Si us plau, escriu només dígits.',
            creditcard: 'Si us plau, escriu un número de tarjeta vàlid.',
            equalTo: 'Si us plau, escriu el mateix valor de nou.',
            extension: 'Si us plau, escriu un valor amb una extensió acceptada.',
            maxlength: $.validator.format('Si us plau, no escriguis més de {0} caracters.'),
            minlength: $.validator.format('Si us plau, no escriguis menys de {0} caracters.'),
            rangelength: $.validator.format('Si us plau, escriu un valor entre {0} i {1} caracters.'),
            range: $.validator.format('Si us plau, escriu un valor entre {0} i {1}.'),
            max: $.validator.format('Si us plau, escriu un valor menor o igual a {0}.'),
            min: $.validator.format('Si us plau, escriu un valor major o igual a {0}.'),
            telMinLength: $.validator.format('El número de telèfon ha de contenir com a mínim {0} dígits'),
            pattern: 'Format no vàlid'
        }

        /*
         * Locale: CS (Czech; čeština, český jazyk)
         */
        locale.cs = {
            required: 'Tato hodnota je povinná.',
            remote: 'Prosím, opravte tento údaj.',
            email: 'Touto hodnotou by měl být platný e-mail.',
            url: 'Prosím, zadejte platné URL.',
            date: 'Prosím, zadejte platné datum.',
            dateISO: 'Prosím, zadejte platné datum (ISO).',
            number: 'Prosím, zadejte číslo.',
            digits: 'Prosím, zadávejte pouze číslice.',
            creditcard: 'Prosím, zadejte číslo kreditní karty.',
            equalTo: 'Prosím, zadejte znovu stejnou hodnotu.',
            extension: 'Prosím, zadejte soubor se správnou příponou.',
            maxlength: $.validator.format('Prosím, zadejte nejvíce {0} znaků.'),
            minlength: $.validator.format('Prosím, zadejte nejméně {0} znaků.'),
            rangelength: $.validator.format('Prosím, zadejte od {0} do {1} znaků.'),
            range: $.validator.format('Prosím, zadejte hodnotu od {0} do {1}.'),
            max: $.validator.format('Prosím, zadejte hodnotu menší nebo rovnu {0}.'),
            min: $.validator.format('Prosím, zadejte hodnotu větší nebo rovnu {0}.'),
            step: $.validator.format('Musí být násobkem čísla {0}.'),
            telMinLength: 'Prosím uveďte platné telefonní číslo.',
            telMaxLength: 'Prosím uveďte platné telefonní číslo.',
            pattern: 'Tato hodnota se zdá být neplatná. '
        }

        /*
         * Locale: DA (Danish; dansk)
         */
        locale.da = {
            required: 'Denne værdi er påkrævet.',
            remote: 'Ret venligst dette felt',
            email: 'Denne værdi skal være en gyldig email.',
            url: 'Indtast en gyldig URL.',
            date: 'Indtast en gyldig dato.',
            number: 'Indtast et tal.',
            digits: 'Indtast kun cifre.',
            creditcard: 'Indtast et gyldigt kreditkortnummer.',
            equalTo: 'Indtast den samme værdi igen.',
            time: 'Angiv en gyldig tid mellem kl. 00:00 og 23:59.',
            ipv4: 'Angiv venligst en gyldig IPv4-adresse.',
            ipv6: 'Angiv venligst en gyldig IPv6-adresse.',
            require_from_group: $.validator.format('Angiv mindst {0} af disse felter.'),
            extension: 'Indtast venligst en værdi med en gyldig endelse',
            lettersonly: 'Angiv venligst kun bogstaver.',
            nowhitespace: 'Må ikke indholde mellemrum',
            maxlength: $.validator.format('Indtast højst {0} tegn.'),
            minlength: $.validator.format('Indtast mindst {0} tegn.'),
            rangelength: $.validator.format('Indtast mindst {0} og højst {1} tegn.'),
            range: $.validator.format('Angiv en værdi mellem {0} og {1}.'),
            max: $.validator.format('Angiv en værdi der højst er {0}.'),
            min: $.validator.format('Angiv en værdi der mindst er {0}.'),
            minWords: $.validator.format('Indtast venligst mindst {0} ord'),
            maxWords: $.validator.format('Indtast venligst højst {0} ord'),
            step: $.validator.format('Angiv en værdi gange {0}.'),
            notEqualTo: 'Angiv en anden værdi, værdierne må ikke være det samme.',
            integer: 'Angiv et ikke-decimaltal, der er positivt eller negativt.',
            telMinLength: 'Angiv venligst et gyldigt telefonnummer',
            pattern: 'Denne værdi er ugyldig.'
        }

        /*
         * Locale: DE (German, Deutsch)
         */
        locale.de = {
            required: 'Dieser Eintrag ist erforderlich.',
            maxlength: $.validator.format('Geben Sie bitte maximal {0} Zeichen ein.'),
            minlength: $.validator.format('Geben Sie bitte mindestens {0} Zeichen ein.'),
            rangelength: $.validator.format('Geben Sie bitte mindestens {0} und maximal {1} Zeichen ein.'),
            email: 'Dieser Eintrag sollte eine gültige E-Mail sein.',
            url: 'Geben Sie bitte eine gültige URL ein.',
            date: 'Geben Sie bitte ein gültiges Datum ein.',
            number: 'Geben Sie bitte eine Nummer ein.',
            digits: 'Geben Sie bitte nur Ziffern ein.',
            equalTo: 'Wiederholen Sie bitte denselben Wert.',
            range: $.validator.format('Geben Sie bitte einen Wert zwischen {0} und {1} ein.'),
            max: $.validator.format('Geben Sie bitte einen Wert kleiner oder gleich {0} ein.'),
            min: $.validator.format('Geben Sie bitte einen Wert größer oder gleich {0} ein.'),
            creditcard: 'Geben Sie bitte eine gültige Kreditkarten-Nummer ein.',
            remote: 'Korrigieren Sie bitte dieses Feld.',
            dateISO: 'Geben Sie bitte ein gültiges Datum ein (ISO-Format).',
            step: $.validator.format('Geben Sie bitte ein Vielfaches von {0} ein.'),
            maxWords: $.validator.format('Geben Sie bitte {0} Wörter oder weniger ein.'),
            minWords: $.validator.format('Geben Sie bitte mindestens {0} Wörter ein.'),
            rangeWords: $.validator.format('Geben Sie bitte zwischen {0} und {1} Wörtern ein.'),
            accept: 'Geben Sie bitte einen Wert mit einem gültigen MIME-Typ ein.',
            alphanumeric: 'Geben Sie bitte nur Buchstaben (keine Umlaute), Zahlen oder Unterstriche ein.',
            bankaccountNL: 'Geben Sie bitte eine gültige Kontonummer ein.',
            bankorgiroaccountNL: 'Geben Sie bitte eine gültige Bank- oder Girokontonummer ein.',
            bic: 'Geben Sie bitte einen gültigen BIC-Code ein.',
            cifES: 'Geben Sie bitte eine gültige CIF-Nummer ein.',
            cpfBR: 'Geben Sie bitte eine gültige CPF-Nummer ein.',
            creditcardtypes: 'Geben Sie bitte eine gültige Kreditkarten-Nummer ein.',
            currency: 'Geben Sie bitte eine gültige Währung ein.',
            extension: 'Geben Sie bitte einen Wert mit einer gültigen Erweiterung ein.',
            giroaccountNL: 'Geben Sie bitte eine gültige Girokontonummer ein.',
            iban: 'Geben Sie bitte eine gültige IBAN ein.',
            integer: 'Geben Sie bitte eine positive oder negative Nicht-Dezimalzahl ein.',
            ipv4: 'Geben Sie bitte eine gültige IPv4-Adresse ein.',
            ipv6: 'Geben Sie bitte eine gültige IPv6-Adresse ein.',
            lettersonly: 'Geben Sie bitte nur Buchstaben ein.',
            letterswithbasicpunc: 'Geben Sie bitte nur Buchstaben oder Interpunktion ein.',
            mobileNL: 'Geben Sie bitte eine gültige Handynummer ein.',
            mobileUK: 'Geben Sie bitte eine gültige Handynummer ein.',
            netmask: 'Geben Sie bitte eine gültige Netzmaske ein.',
            nieES: 'Geben Sie bitte eine gültige NIE-Nummer ein.',
            nifES: 'Geben Sie bitte eine gültige NIF-Nummer ein.',
            nipPL: 'Geben Sie bitte eine gültige NIP-Nummer ein.',
            notEqualTo: 'Geben Sie bitte einen anderen Wert ein. Die Werte dürfen nicht gleich sein.',
            nowhitespace: 'Kein Leerzeichen bitte.',
            phoneNL: 'Geben Sie bitte eine gültige Telefonnummer ein.',
            phonesUK: 'Geben Sie bitte eine gültige britische Telefonnummer ein.',
            phoneUK: 'Geben Sie bitte eine gültige Telefonnummer ein.',
            phoneUS: 'Geben Sie bitte eine gültige Telefonnummer ein.',
            postalcodeBR: 'Geben Sie bitte eine gültige brasilianische Postleitzahl ein.',
            postalCodeCA: 'Geben Sie bitte eine gültige kanadische Postleitzahl ein.',
            postalcodeIT: 'Geben Sie bitte eine gültige italienische Postleitzahl ein.',
            postalcodeNL: 'Geben Sie bitte eine gültige niederländische Postleitzahl ein.',
            postcodeUK: 'Geben Sie bitte eine gültige britische Postleitzahl ein.',
            require_from_group: $.validator.format('Füllen Sie bitte mindestens {0} dieser Felder aus.'),
            skip_or_fill_minimum: $.validator.format('Überspringen Sie bitte diese Felder oder füllen Sie mindestens {0} von ihnen aus.'),
            stateUS: 'Geben Sie bitte einen gültigen US-Bundesstaat ein.',
            strippedminlength: $.validator.format('Geben Sie bitte mindestens {0} Zeichen ein.'),
            time: 'Geben Sie bitte eine gültige Uhrzeit zwischen 00:00 und 23:59 ein.',
            time12h: 'Geben Sie bitte eine gültige Uhrzeit im 12-Stunden-Format ein.',
            vinUS: 'Die angegebene Fahrzeugidentifikationsnummer (VIN) ist ungültig.',
            zipcodeUS: 'Die angegebene US-Postleitzahl ist ungültig.',
            ziprange: 'Ihre Postleitzahl muss im Bereich 902xx-xxxx bis 905xx-xxxx liegen.',
            telMinLength: $.validator.format('Bitte geben Sie eine gültige Telefonnummer an'),
            telMaxLength: $.validator.format('Bitte geben Sie eine gültige Telefonnummer an'),
            pattern: 'Dieser Eintrag scheint ungültig zu sein.'
        }

        /*
         * Locale: EL (Greek; ελληνικά)
         */
        locale.el = {
            required: 'Αυτό το πεδίο είναι υποχρεωτικό.',
            remote: 'Παρακαλώ διορθώστε αυτό το πεδίο.',
            email: 'Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email.',
            url: 'Παρακαλώ εισάγετε ένα έγκυρο URL.',
            date: 'Παρακαλώ εισάγετε μια έγκυρη ημερομηνία.',
            dateISO: 'Παρακαλώ εισάγετε μια έγκυρη ημερομηνία (ISO).',
            number: 'Παρακαλώ εισάγετε έναν έγκυρο αριθμό.',
            digits: 'Παρακαλώ εισάγετε μόνο αριθμητικά ψηφία.',
            creditcard: 'Παρακαλώ εισάγετε έναν έγκυρο αριθμό πιστωτικής κάρτας.',
            equalTo: 'Παρακαλώ εισάγετε την ίδια τιμή ξανά.',
            extension: 'Παρακαλώ εισάγετε μια τιμή με έγκυρη επέκταση αρχείου.',
            maxlength: $.validator.format('Παρακαλώ εισάγετε μέχρι και {0} χαρακτήρες.'),
            minlength: $.validator.format('Παρακαλώ εισάγετε τουλάχιστον {0} χαρακτήρες.'),
            rangelength: $.validator.format('Παρακαλώ εισάγετε μια τιμή με μήκος μεταξύ {0} και {1} χαρακτήρων.'),
            range: $.validator.format('Παρακαλώ εισάγετε μια τιμή μεταξύ {0} και {1}.'),
            max: $.validator.format('Παρακαλώ εισάγετε μια τιμή μικρότερη ή ίση του {0}.'),
            min: $.validator.format('Παρακαλώ εισάγετε μια τιμή μεγαλύτερη ή ίση του {0}.'),
            telMinLength: $.validator.format('Ο αριθμός τηλεφώνου πρέπει να περιέχει τουλάχιστον {0} ψηφία'),
            pattern: 'Ακυρη μορφή.'
        }

        /*
         * Locale: ES (Spanish; Español)
         */
        locale.es = {
            required: 'Este valor es obligatorio.',
            remote: 'Por favor, rellena este campo.',
            email: 'Este valor debe ser un correo electrónico válido.',
            url: 'Por favor, escribe una URL válida.',
            date: 'Por favor, escribe una fecha válida.',
            dateISO: 'Por favor, escribe una fecha (ISO) válida.',
            number: 'Por favor, escribe un número válido.',
            digits: 'Por favor, escribe sólo dígitos.',
            creditcard: 'Por favor, escribe un número de tarjeta válido.',
            equalTo: 'Por favor, escribe el mismo valor de nuevo.',
            extension: 'Por favor, escribe un valor con una extensión aceptada.',
            maxlength: $.validator.format('Por favor, no escribas más de {0} caracteres.'),
            minlength: $.validator.format('Por favor, no escribas menos de {0} caracteres.'),
            rangelength: $.validator.format('Por favor, escribe un valor entre {0} y {1} caracteres.'),
            range: $.validator.format('Por favor, escribe un valor entre {0} y {1}.'),
            max: $.validator.format('Por favor, escribe un valor menor o igual a {0}.'),
            min: $.validator.format('Por favor, escribe un valor mayor o igual a {0}.'),
            nifES: 'Por favor, escribe un NIF válido.',
            nieES: 'Por favor, escribe un NIE válido.',
            cifES: 'Por favor, escribe un CIF válido.',
            telMinLength: $.validator.format('Por favor, introduce un número de teléfono válido.'),
            telMaxLength: $.validator.format('Por favor, introduce un número de teléfono válido.'),
            pattern: 'Este valor parece no ser válido.'
        }

        /*
         * Locale: ES (Spanish; Español)
         * Region: AR (Argentina)
         */
        locale.es_AR = {
            required: 'Este campo es obligatorio.',
            remote: 'Por favor, completá este campo.',
            email: 'Por favor, escribí una dirección de correo válida.',
            url: 'Por favor, escribí una URL válida.',
            date: 'Por favor, escribí una fecha válida.',
            dateISO: 'Por favor, escribí una fecha (ISO) válida.',
            number: 'Por favor, escribí un número entero válido.',
            digits: 'Por favor, escribí sólo dígitos.',
            creditcard: 'Por favor, escribí un número de tarjeta válido.',
            equalTo: 'Por favor, escribí el mismo valor de nuevo.',
            extension: 'Por favor, escribí un valor con una extensión aceptada.',
            maxlength: $.validator.format('Por favor, no escribas más de {0} caracteres.'),
            minlength: $.validator.format('Por favor, no escribas menos de {0} caracteres.'),
            rangelength: $.validator.format('Por favor, escribí un valor entre {0} y {1} caracteres.'),
            range: $.validator.format('Por favor, escribí un valor entre {0} y {1}.'),
            max: $.validator.format('Por favor, escribí un valor menor o igual a {0}.'),
            min: $.validator.format('Por favor, escribí un valor mayor o igual a {0}.'),
            nifES: 'Por favor, escribí un NIF válido.',
            nieES: 'Por favor, escribí un NIE válido.',
            cifES: 'Por favor, escribí un CIF válido.',
            telMinLength: $.validator.format('El número de teléfono debe contener al menos {0} dígitos'),
            pattern: 'Formato inválido.'
        }

        /*
         * Locale: ES (Spanish; Español)
         * Region: MX (Mexico)
         */
        locale.es_MX = {
            required: 'Este valor es obligatorio.',
            remote: 'Por favor, rellena este campo.',
            email: 'Este valor debe contener una dirección de correo electrónico válida.',
            url: 'Por favor, escribe una URL válida.',
            date: 'Por favor, escribe una fecha válida.',
            dateISO: 'Por favor, escribe una fecha (ISO) válida.',
            number: 'Por favor, escribe un número válido.',
            digits: 'Por favor, escribe sólo dígitos.',
            creditcard: 'Por favor, escribe un número de tarjeta válido.',
            equalTo: 'Por favor, escribe el mismo valor de nuevo.',
            extension: 'Por favor, escribe un valor con una extensión aceptada.',
            maxlength: $.validator.format('Por favor, no escribas más de {0} caracteres.'),
            minlength: $.validator.format('Por favor, no escribas menos de {0} caracteres.'),
            rangelength: $.validator.format('Por favor, escribe un valor entre {0} y {1} caracteres.'),
            range: $.validator.format('Por favor, escribe un valor entre {0} y {1}.'),
            max: $.validator.format('Por favor, escribe un valor menor o igual a {0}.'),
            min: $.validator.format('Por favor, escribe un valor mayor o igual a {0}.'),
            nifES: 'Por favor, escribe un NIF válido.',
            nieES: 'Por favor, escribe un NIE válido.',
            cifES: 'Por favor, escribe un CIF válido.',
            telMinLength: $.validator.format('Por favor, especifique un número de teléfono válido.'),
            telMaxLength: $.validator.format('Por favor, especifique un número de teléfono válido.'),
            pattern: 'Este valor no parece ser válido.'
        }

        /*
         * Locale: ES (Spanish; Español)
         * Region: PE (Perú)
         */
        locale.es_Pe = {
            required: 'Este campo es obligatorio.',
            remote: 'Por favor, llene este campo.',
            email: 'Por favor, escriba un correo electrónico válido.',
            url: 'Por favor, escriba una URL válida.',
            date: 'Por favor, escriba una fecha válida.',
            dateISO: 'Por favor, escriba una fecha (ISO) válida.',
            number: 'Por favor, escriba un número válido.',
            digits: 'Por favor, escriba sólo dígitos.',
            creditcard: 'Por favor, escriba un número de tarjeta válido.',
            equalTo: 'Por favor, escriba el mismo valor de nuevo.',
            extension: 'Por favor, escriba un valor con una extensión permitida.',
            maxlength: $.validator.format('Por favor, no escriba más de {0} caracteres.'),
            minlength: $.validator.format('Por favor, no escriba menos de {0} caracteres.'),
            rangelength: $.validator.format('Por favor, escriba un valor entre {0} y {1} caracteres.'),
            range: $.validator.format('Por favor, escriba un valor entre {0} y {1}.'),
            max: $.validator.format('Por favor, escriba un valor menor o igual a {0}.'),
            min: $.validator.format('Por favor, escriba un valor mayor o igual a {0}.'),
            nifES: 'Por favor, escriba un NIF válido.',
            nieES: 'Por favor, escriba un NIE válido.',
            cifES: 'Por favor, escriba un CIF válido.',
            telMinLength: $.validator.format('El número de teléfono debe tener al menos {0} dígitos'),
            pattern: 'Formato inválido'
        }

        /*
         * Locale: ET (Estonian; eesti, eesti keel)
         */
        locale.et = {
            required: 'See väli peab olema täidetud.',
            maxlength: $.validator.format('Palun sisestage vähem kui {0} tähemärki.'),
            minlength: $.validator.format('Palun sisestage vähemalt {0} tähemärki.'),
            rangelength: $.validator.format('Palun sisestage väärtus vahemikus {0} kuni {1} tähemärki.'),
            email: 'Palun sisestage korrektne e-maili aadress.',
            url: 'Palun sisestage korrektne URL.',
            date: 'Palun sisestage korrektne kuupäev.',
            dateISO: 'Palun sisestage korrektne kuupäev (YYYY-MM-DD).',
            number: 'Palun sisestage korrektne number.',
            digits: 'Palun sisestage ainult numbreid.',
            equalTo: 'Palun sisestage sama väärtus uuesti.',
            range: $.validator.format('Palun sisestage väärtus vahemikus {0} kuni {1}.'),
            max: $.validator.format('Palun sisestage väärtus, mis on väiksem või võrdne arvuga {0}.'),
            min: $.validator.format('Palun sisestage väärtus, mis on suurem või võrdne arvuga {0}.'),
            creditcard: 'Palun sisestage korrektne krediitkaardi number.',
            telMinLength: $.validator.format('Telefoninumber peab olema vähemalt {0} numbrit'),
            pattern: 'Vale vorming'
        }

        /*
         * Locale: EU (Basque; euskara, euskera)
         */
        locale.eu = {
            required: 'Eremu hau beharrezkoa da.',
            remote: 'Mesedez, bete eremu hau.',
            email: 'Mesedez, idatzi baliozko posta helbide bat.',
            url: 'Mesedez, idatzi baliozko URL bat.',
            date: 'Mesedez, idatzi baliozko data bat.',
            dateISO: 'Mesedez, idatzi baliozko (ISO) data bat.',
            number: 'Mesedez, idatzi baliozko zenbaki oso bat.',
            digits: 'Mesedez, idatzi digituak soilik.',
            creditcard: 'Mesedez, idatzi baliozko txartel zenbaki bat.',
            equalTo: 'Mesedez, idatzi berdina berriro ere.',
            extension: 'Mesedez, idatzi onartutako luzapena duen balio bat.',
            maxlength: $.validator.format('Mesedez, ez idatzi {0} karaktere baino gehiago.'),
            minlength: $.validator.format('Mesedez, ez idatzi {0} karaktere baino gutxiago.'),
            rangelength: $.validator.format('Mesedez, idatzi {0} eta {1} karaktere arteko balio bat.'),
            range: $.validator.format('Mesedez, idatzi {0} eta {1} arteko balio bat.'),
            max: $.validator.format('Mesedez, idatzi {0} edo txikiagoa den balio bat.'),
            min: $.validator.format('Mesedez, idatzi {0} edo handiagoa den balio bat.'),
            telMinLength: $.validator.format('Telefono zenbakiak gutxienez {0} digitu izan behar ditu'),
            pattern: 'Formatu baliogabea'
        }

        /*
         * Locale: FA (Persian; فارسی)
         */
        locale.fa = {
            required: 'تکمیل این فیلد اجباری است.',
            remote: 'لطفا این فیلد را تصحیح کنید.',
            email: 'لطفا یک ایمیل صحیح وارد کنید.',
            url: 'لطفا آدرس صحیح وارد کنید.',
            date: 'لطفا تاریخ صحیح وارد کنید.',
            dateFA: 'لطفا یک تاریخ صحیح وارد کنید.',
            dateISO: 'لطفا تاریخ صحیح وارد کنید (ISO).',
            number: 'لطفا عدد صحیح وارد کنید.',
            digits: 'لطفا تنها رقم وارد کنید.',
            creditcard: 'لطفا کریدیت کارت صحیح وارد کنید.',
            equalTo: 'لطفا مقدار برابری وارد کنید.',
            extension: 'لطفا مقداری وارد کنید که',
            alphanumeric: 'لطفا مقدار را عدد (انگلیسی) وارد کنید.',
            maxlength: $.validator.format('لطفا بیشتر از {0} حرف وارد نکنید.'),
            minlength: $.validator.format('لطفا کمتر از {0} حرف وارد نکنید.'),
            rangelength: $.validator.format('لطفا مقداری بین {0} تا {1} حرف وارد کنید.'),
            range: $.validator.format('لطفا مقداری بین {0} تا {1} حرف وارد کنید.'),
            max: $.validator.format('لطفا مقداری کمتر از {0} وارد کنید.'),
            min: $.validator.format('لطفا مقداری بیشتر از {0} وارد کنید.'),
            minWords: $.validator.format('لطفا حداقل {0} کلمه وارد کنید.'),
            maxWords: $.validator.format('لطفا حداکثر {0} کلمه وارد کنید.'),
            telMinLength: $.validator.format('شماره تلفن باید حداقل {0} رقم باشد'),
            pattern: 'قالب نامعتبر است'
        }

        /*
         * Locale: FI (Finnish; suomi, suomen kieli)
         */
        locale.fi = {
            required: 'Tämä arvo vaaditaan.',
            email: 'Tämän arvon täytyy olla käytössä oleva sähköpostiosoite.',
            url: 'Sy&ouml;t&auml; oikea URL-osoite.',
            date: 'Sy&ouml;t&auml; oikea p&auml;iv&auml;m&auml;&auml;r&auml;.',
            dateISO: 'Sy&ouml;t&auml; oikea p&auml;iv&auml;m&auml;&auml;r&auml; muodossa VVVV-KK-PP.',
            number: 'Sy&ouml;t&auml; luku.',
            creditcard: 'Sy&ouml;t&auml; voimassa oleva luottokorttinumero.',
            digits: 'Sy&ouml;t&auml; pelk&auml;st&auml;&auml;n numeroita.',
            equalTo: 'Sy&ouml;t&auml; sama arvo uudestaan.',
            maxlength: $.validator.format('Voit sy&ouml;tt&auml;&auml; enint&auml;&auml;n {0} merkki&auml;.'),
            minlength: $.validator.format('V&auml;hint&auml;&auml;n {0} merkki&auml;.'),
            rangelength: $.validator.format('Sy&ouml;t&auml; v&auml;hint&auml;&auml;n {0} ja enint&auml;&auml;n {1} merkki&auml;.'),
            range: $.validator.format('Sy&ouml;t&auml; arvo v&auml;lilt&auml; {0}&ndash;{1}.'),
            max: $.validator.format('Sy&ouml;t&auml; arvo, joka on enint&auml;&auml;n {0}.'),
            min: $.validator.format('Sy&ouml;t&auml; arvo, joka on v&auml;hint&auml;&auml;n {0}.'),
            telMinLength: 'Ole hyvä ja kirjoita kelvollinen puhelinnumero',
            pattern: 'Tämä arvo vaikuttaa olevan virheellinen.'
        }

        /*
         * Locale: FR (French; français)
         */
        locale.fr = {
            required: 'Cette information est requise.',
            remote: 'Veuillez corriger ce champ.',
            email: 'Vous devez renseigner une adresse e-mail valide.',
            url: 'Veuillez fournir une adresse URL valide.',
            date: 'Veuillez fournir une date valide.',
            dateISO: 'Veuillez fournir une date valide (ISO).',
            number: 'Veuillez fournir un numéro valide.',
            digits: 'Veuillez fournir seulement des chiffres.',
            creditcard: 'Veuillez fournir un numéro de carte de crédit valide.',
            equalTo: 'Veuillez fournir encore la même valeur.',
            notEqualTo: 'Veuillez fournir une valeur différente, les valeurs ne doivent pas être identiques.',
            extension: 'Veuillez fournir une valeur avec une extension valide.',
            maxlength: $.validator.format('Veuillez fournir au plus {0} caractères.'),
            minlength: $.validator.format('Veuillez fournir au moins {0} caractères.'),
            rangelength: $.validator.format('Veuillez fournir une valeur qui contient entre {0} et {1} caractères.'),
            range: $.validator.format('Veuillez fournir une valeur entre {0} et {1}.'),
            max: $.validator.format('Veuillez fournir une valeur inférieure ou égale à {0}.'),
            min: $.validator.format('Veuillez fournir une valeur supérieure ou égale à {0}.'),
            step: $.validator.format('Veuillez fournir une valeur multiple de {0}.'),
            maxWords: $.validator.format('Veuillez fournir au plus {0} mots.'),
            minWords: $.validator.format('Veuillez fournir au moins {0} mots.'),
            rangeWords: $.validator.format('Veuillez fournir entre {0} et {1} mots.'),
            letterswithbasicpunc: 'Veuillez fournir seulement des lettres et des signes de ponctuation.',
            alphanumeric: 'Veuillez fournir seulement des lettres, nombres, espaces et soulignages.',
            lettersonly: 'Veuillez fournir seulement des lettres.',
            nowhitespace: 'Veuillez ne pas inscrire d\'espaces blancs.',
            ziprange: 'Veuillez fournir un code postal entre 902xx-xxxx et 905-xx-xxxx.',
            integer: 'Veuillez fournir un nombre non décimal qui est positif ou négatif.',
            vinUS: 'Veuillez fournir un numéro d\'identification du véhicule (VIN).',
            dateITA: 'Veuillez fournir une date valide.',
            time: 'Veuillez fournir une heure valide entre 00:00 et 23:59.',
            phoneUS: 'Veuillez fournir un numéro de téléphone valide.',
            phoneUK: 'Veuillez fournir un numéro de téléphone valide.',
            mobileUK: 'Veuillez fournir un numéro de téléphone mobile valide.',
            strippedminlength: $.validator.format('Veuillez fournir au moins {0} caractères.'),
            email2: 'Veuillez fournir une adresse électronique valide.',
            url2: 'Veuillez fournir une adresse URL valide.',
            creditcardtypes: 'Veuillez fournir un numéro de carte de crédit valide.',
            ipv4: 'Veuillez fournir une adresse IP v4 valide.',
            ipv6: 'Veuillez fournir une adresse IP v6 valide.',
            require_from_group: $.validator.format('Veuillez fournir au moins {0} de ces champs.'),
            nifES: 'Veuillez fournir un numéro NIF valide.',
            nieES: 'Veuillez fournir un numéro NIE valide.',
            cifES: 'Veuillez fournir un numéro CIF valide.',
            postalCodeCA: 'Veuillez fournir un code postal valide.',
            telMinLength: $.validator.format('Vous devez renseigner un numéro de téléphone valide'),
            telMaxLength: $.validator.format('Vous devez renseigner un numéro de téléphone valide'),
            pattern: 'Cette information semble être invalide.'
        }

        /**
         * Locale: GE (Georgian; ქართული)
         */
        locale.ge = {
            required: 'ეს ველი სავალდებულოა',
            remote: 'გთხოვთ შეასწოროთ.',
            email: 'გთხოვთ შეიყვანოთ სწორი ფორმატით.',
            url: 'გთხოვთ შეიყვანოთ სწორი ფორმატით.',
            date: 'გთხოვთ შეიყვანოთ სწორი თარიღი.',
            dateISO: 'გთხოვთ შეიყვანოთ სწორი ფორმატით (ISO).',
            number: 'გთხოვთ შეიყვანოთ რიცხვი.',
            digits: 'დაშვებულია მხოლოდ ციფრები.',
            creditcard: 'გთხოვთ შეიყვანოთ სწორი ფორმატის ბარათის კოდი.',
            equalTo: 'გთხოვთ შეიყვანოთ იგივე მნიშვნელობა.',
            maxlength: $.validator.format('გთხოვთ შეიყვანოთ არა უმეტეს {0} სიმბოლოსი.'),
            minlength: $.validator.format('შეიყვანეთ მინიმუმ {0} სიმბოლო.'),
            rangelength: $.validator.format('გთხოვთ შეიყვანოთ {0} -დან {1} -მდე რაოდენობის სიმბოლოები.'),
            range: $.validator.format('შეიყვანეთ {0} -სა {1} -ს შორის.'),
            max: $.validator.format('გთხოვთ შეიყვანოთ მნიშვნელობა ნაკლები ან ტოლი {0} -ს.'),
            min: $.validator.format('გთხოვთ შეიყვანოთ მნიშვნელობა მეტი ან ტოლი {0} -ს.'),
            telMinLength: $.validator.format('ტელეფონის ნომერი უნდა იყოს მინიმუმ {0} ციფრი'),
            pattern: 'Არასწორი ფორმატი'
        }

        /*
         * Locale: GL (Galician; Galego)
         */
        locale.gl = {
            required: 'Este campo é obrigatorio.',
            remote: 'Por favor, cubre este campo.',
            email: 'Por favor, escribe unha dirección de correo válida.',
            url: 'Por favor, escribe unha URL válida.',
            date: 'Por favor, escribe unha data válida.',
            dateISO: 'Por favor, escribe unha data (ISO) válida.',
            number: 'Por favor, escribe un número válido.',
            digits: 'Por favor, escribe só díxitos.',
            creditcard: 'Por favor, escribe un número de tarxeta válido.',
            equalTo: 'Por favor, escribe o mesmo valor de novo.',
            extension: 'Por favor, escribe un valor cunha extensión aceptada.',
            maxlength: $.validator.format('Por favor, non escribas máis de {0} caracteres.'),
            minlength: $.validator.format('Por favor, non escribas menos de {0} caracteres.'),
            rangelength: $.validator.format('Por favor, escribe un valor entre {0} e {1} caracteres.'),
            range: $.validator.format('Por favor, escribe un valor entre {0} e {1}.'),
            max: $.validator.format('Por favor, escribe un valor menor ou igual a {0}.'),
            min: $.validator.format('Por favor, escribe un valor maior ou igual a {0}.'),
            nifES: 'Por favor, escribe un NIF válido.',
            nieES: 'Por favor, escribe un NIE válido.',
            cifES: 'Por favor, escribe un CIF válido.'
            //telMinLength: '',
            //pattern: ''
        }

        /*
         * Locale: HE (Hebrew; עברית)
         */
        locale.he = {
            required: 'השדה הזה הינו שדה חובה',
            remote: 'נא לתקן שדה זה',
            email: 'נא למלא כתובת דוא"ל חוקית',
            url: 'נא למלא כתובת אינטרנט חוקית',
            date: 'נא למלא תאריך חוקי',
            dateISO: 'נא למלא תאריך חוקי (ISO)',
            number: 'נא למלא מספר',
            digits: 'נא למלא רק מספרים',
            creditcard: 'נא למלא מספר כרטיס אשראי חוקי',
            equalTo: 'נא למלא את אותו ערך שוב',
            extension: 'נא למלא ערך עם סיומת חוקית',
            maxlength: $.validator.format('.נא לא למלא יותר מ- {0} תווים'),
            minlength: $.validator.format('נא למלא לפחות {0} תווים'),
            rangelength: $.validator.format('נא למלא ערך בין {0} ל- {1} תווים'),
            range: $.validator.format('נא למלא ערך בין {0} ל- {1}'),
            max: $.validator.format('נא למלא ערך קטן או שווה ל- {0}'),
            min: $.validator.format('נא למלא ערך גדול או שווה ל- {0}'),
            telMinLength: $.validator.format('מספר הטלפון חייב להיות לפחות {0} ספרות'),
            pattern: 'פורמט לא חוקי'
        }

        /*
         * Locale: HR (Croatia; hrvatski jezik)
         */
        locale.hr = {
            required: 'Ovo polje je obavezno.',
            remote: 'Ovo polje treba popraviti.',
            email: 'Unesite ispravnu e-mail adresu.',
            url: 'Unesite ispravan URL.',
            date: 'Unesite ispravan datum.',
            dateISO: 'Unesite ispravan datum (ISO).',
            number: 'Unesite ispravan broj.',
            digits: 'Unesite samo brojeve.',
            creditcard: 'Unesite ispravan broj kreditne kartice.',
            equalTo: 'Unesite ponovo istu vrijednost.',
            extension: 'Unesite vrijednost sa ispravnom ekstenzijom.',
            maxlength: $.validator.format('Maksimalni broj znakova je {0} .'),
            minlength: $.validator.format('Minimalni broj znakova je {0} .'),
            rangelength: $.validator.format('Unesite vrijednost između {0} i {1} znakova.'),
            range: $.validator.format('Unesite vrijednost između {0} i {1}.'),
            max: $.validator.format('Unesite vrijednost manju ili jednaku {0}.'),
            min: $.validator.format('Unesite vrijednost veću ili jednaku {0}.'),
            telMinLength: $.validator.format('Telefonski broj mora sadržavati najmanje {0} znamenki'),
            pattern: 'Nevažeći format'
        }

        /*
         * Locale: HU (Hungarian; Magyar)
         */
        locale.hu = {
            required: 'Ez a válasz kötelező.',
            maxlength: $.validator.format('Legfeljebb {0} karakter hosszú legyen.'),
            minlength: $.validator.format('Legalább {0} karakter hosszú legyen.'),
            rangelength: $.validator.format('Legalább {0} és legfeljebb {1} karakter hosszú legyen.'),
            email: 'Adjon meg egy érvényes email címet.',
            phone: 'Rossz telefonszám hossz',
            url: 'Érvényes URL-nek kell lennie.',
            date: 'Dátumnak kell lennie.',
            number: 'Számnak kell lennie.',
            digits: 'Csak számjegyek lehetnek.',
            equalTo: 'Meg kell egyeznie a két értéknek.',
            range: $.validator.format('{0} és {1} közé kell esnie.'),
            max: $.validator.format('Nem lehet nagyobb, mint {0}.'),
            min: $.validator.format('Nem lehet kisebb, mint {0}.'),
            creditcard: 'Érvényes hitelkártyaszámnak kell lennie.',
            remote: 'Kérem javítsa ki ezt a mezőt.',
            dateISO: 'Kérem írjon be egy érvényes dátumot (ISO).',
            step: $.validator.format('A {0} egyik többszörösét adja meg.'),
            telMinLength: $.validator.format('Rossz telefonszám hossz'),
            telMaxLength: $.validator.format('Rossz telefonszám hossz'),
            pattern: 'Érvénytelen formátum.'
        }

        /*
         * Locale: HY_AM (Armenian; հայերեն լեզու)
         */
        locale.hy_AM = {
            required: 'Պարտադիր լրացման դաշտ',
            remote: 'Ներմուծեք ճիշտ արժեքը',
            email: 'Ներմուծեք վավեր էլեկտրոնային փոստի հասցե',
            url: 'Ներմուծեք վավեր URL',
            date: 'Ներմուծեք վավեր ամսաթիվ',
            dateISO: 'Ներմուծեք ISO ֆորմատով վավեր ամսաթիվ։',
            number: 'Ներմուծեք թիվ',
            digits: 'Ներմուծեք միայն թվեր',
            creditcard: 'Ներմուծեք ճիշտ բանկային քարտի համար',
            equalTo: 'Ներմուծեք միևնուն արժեքը ևս մեկ անգամ',
            extension: 'Ընտրեք ճիշտ ընդլանումով ֆայլ',
            maxlength: $.validator.format('Ներմուծեք ոչ ավել քան {0} նիշ'),
            minlength: $.validator.format('Ներմուծեք ոչ պակաս քան {0} նիշ'),
            rangelength: $.validator.format('Ներմուծեք {0}֊ից {1} երկարությամբ արժեք'),
            range: $.validator.format('Ներմուծեք թիվ {0}֊ից {1} միջակայքում'),
            max: $.validator.format('Ներմուծեք թիվ, որը փոքր կամ հավասար է {0}֊ին'),
            min: $.validator.format('Ներմուծեք թիվ, որը մեծ կամ հավասար է {0}֊ին'),
            telMinLength: $.validator.format('Հեռախոսահամարը պետք է լինի առնվազն {0} նիշ'),
            pattern: 'Անվավեր ձևաչափ'
        }

        /*
         * Locale: ID (Indonesia; Indonesian)
         */
        locale.id = {
            required: 'Kolom ini diperlukan.',
            remote: 'Harap benarkan kolom ini.',
            email: 'Silakan masukkan format email yang benar.',
            url: 'Silakan masukkan format URL yang benar.',
            date: 'Silakan masukkan format tanggal yang benar.',
            dateISO: 'Silakan masukkan format tanggal(ISO) yang benar.',
            number: 'Silakan masukkan angka yang benar.',
            digits: 'Harap masukan angka saja.',
            creditcard: 'Harap masukkan format kartu kredit yang benar.',
            equalTo: 'Harap masukkan nilai yg sama dengan sebelumnya.',
            maxlength: $.validator.format('Input dibatasi hanya {0} karakter.'),
            minlength: $.validator.format('Input tidak kurang dari {0} karakter.'),
            rangelength: $.validator.format('Panjang karakter yg diizinkan antara {0} dan {1} karakter.'),
            range: $.validator.format('Harap masukkan nilai antara {0} dan {1}.'),
            max: $.validator.format('Harap masukkan nilai lebih kecil atau sama dengan {0}.'),
            min: $.validator.format('Harap masukkan nilai lebih besar atau sama dengan {0}.'),
            telMinLength: $.validator.format('Nomor telepon minimal harus {0} digit'),
            pattern: 'Format yang tidak valid'
        }

        /*
         * Locale: IS (Icelandic; íslenska)
         */
        locale.is = {
            required: 'Þessi reitur er nauðsynlegur.',
            remote: 'Lagaðu þennan reit.',
            maxlength: $.validator.format('Sláðu inn mest {0} stafi.'),
            minlength: $.validator.format('Sláðu inn minnst {0} stafi.'),
            rangelength: $.validator.format('Sláðu inn minnst {0} og mest {1} stafi.'),
            email: 'Sláðu inn gilt netfang.',
            url: 'Sláðu inn gilda vefslóð.',
            date: 'Sláðu inn gilda dagsetningu.',
            number: 'Sláðu inn tölu.',
            digits: 'Sláðu inn tölustafi eingöngu.',
            equalTo: 'Sláðu sama gildi inn aftur.',
            range: $.validator.format('Sláðu inn gildi milli {0} og {1}.'),
            max: $.validator.format('Sláðu inn gildi sem er minna en eða jafnt og {0}.'),
            min: $.validator.format('Sláðu inn gildi sem er stærra en eða jafnt og {0}.'),
            creditcard: 'Sláðu inn gilt greiðslukortanúmer.',
            telMinLength: $.validator.format('Símanúmer verður að innihalda að minnsta kosti {0} tölustafi'),
            pattern: 'Ógilt snið'
        }

        /*
         * Locale: IT (Italian; Italiano)
         */
        locale.it = {
            required: 'Questo valore è obbligatorio.',
            remote: 'Controlla questo campo',
            email: 'Questo valore dovrebbe essere un indirizzo e-mail valido.',
            url: 'Inserisci un indirizzo web valido',
            date: 'Inserisci una data valida',
            dateISO: 'Inserisci una data valida (ISO)',
            number: 'Inserisci un numero valido',
            digits: 'Inserisci solo numeri',
            creditcard: 'Inserisci un numero di carta di credito valido',
            equalTo: 'Il valore non corrisponde',
            extension: 'Inserisci un valore con un&apos;estensione valida',
            maxlength: $.validator.format('Non inserire pi&ugrave; di {0} caratteri'),
            minlength: $.validator.format('Inserisci almeno {0} caratteri'),
            rangelength: $.validator.format('Inserisci un valore compreso tra {0} e {1} caratteri'),
            range: $.validator.format('Inserisci un valore compreso tra {0} e {1}'),
            max: $.validator.format('Inserisci un valore minore o uguale a {0}'),
            min: $.validator.format('Inserisci un valore maggiore o uguale a {0}'),
            nifES: 'Inserisci un NIF valido',
            nieES: 'Inserisci un NIE valido',
            cifES: 'Inserisci un CIF valido',
            currency: 'Inserisci una valuta valida',
            telMinLength: $.validator.format('Inserisci un numero di telefono valido'),
            telMaxLength: $.validator.format('Inserisci un numero di telefono valido'),
            pattern: 'Questo valore sembra essere errato.'
        }

        /*
         * Locale: JA (Japanese; 日本語)
         */
        locale.ja = {
            required: 'この値は必須です。',
            remote: 'このフィールドを修正してください。',
            email: 'メールアドレスを正しく入力してください。',
            url: '有効なURLを入力してください。',
            date: '有効な日付を入力してください。',
            dateISO: '有効な日付（ISO）を入力してください。',
            number: '有効な数字を入力してください。',
            digits: '数字のみを入力してください。',
            creditcard: '有効なクレジットカード番号を入力してください。',
            equalTo: '同じ値をもう一度入力してください。',
            extension: '有効な拡張子を含む値を入力してください。',
            maxlength: $.validator.format('{0} 文字以内で入力してください。'),
            minlength: $.validator.format('{0} 文字以上で入力してください。'),
            rangelength: $.validator.format('{0} 文字から {1} 文字までの値を入力してください。'),
            range: $.validator.format('{0} から {1} までの値を入力してください。'),
            step: $.validator.format('{0} の倍数を入力してください。'),
            max: $.validator.format('{0} 以下の値を入力してください。'),
            min: $.validator.format('{0} 以上の値を入力してください。'),
            telMinLength: '有効な電話番号を入力してください',
            telMaxLength: '有効な電話番号を入力してください',
            pattern: 'この値は無効のようです。'
        }

        /*
         * Locale: KA (Georgian; ქართული)
         */
        locale.ka = {
            required: 'ამ ველის შევსება აუცილებელია.',
            remote: 'გთხოვთ მიუთითოთ სწორი მნიშვნელობა.',
            email: 'გთხოვთ მიუთითოთ ელ-ფოსტის კორექტული მისამართი.',
            url: 'გთხოვთ მიუთითოთ კორექტული URL.',
            date: 'გთხოვთ მიუთითოთ კორექტული თარიღი.',
            dateISO: 'გთხოვთ მიუთითოთ კორექტული თარიღი ISO ფორმატში.',
            number: 'გთხოვთ მიუთითოთ ციფრი.',
            digits: 'გთხოვთ მიუთითოთ მხოლოდ ციფრები.',
            creditcard: 'გთხოვთ მიუთითოთ საკრედიტო ბარათის კორექტული ნომერი.',
            equalTo: 'გთხოვთ მიუთითოთ ასეთივე მნიშვნელობა კიდევ ერთხელ.',
            extension: 'გთხოვთ აირჩიოთ ფაილი კორექტული გაფართოებით.',
            maxlength: $.validator.format('დასაშვებია არაუმეტეს {0} სიმბოლო.'),
            minlength: $.validator.format('აუცილებელია შეიყვანოთ მინიმუმ {0} სიმბოლო.'),
            rangelength: $.validator.format('ტექსტში სიმბოლოების რაოდენობა უნდა იყოს {0}-დან {1}-მდე.'),
            range: $.validator.format('გთხოვთ შეიყვანოთ ციფრი {0}-დან {1}-მდე.'),
            max: $.validator.format('გთხოვთ შეიყვანოთ ციფრი რომელიც ნაკლებია ან უდრის {0}-ს.'),
            min: $.validator.format('გთხოვთ შეიყვანოთ ციფრი რომელიც მეტია ან უდრის {0}-ს.'),
            telMinLength: $.validator.format('ტელეფონის ნომერი უნდა შეიცავდეს მინიმუმ {0} ციფრს'),
            pattern: 'Არასწორი ფორმატი'
        }

        /*
         * Locale: KK (Kazakh; қазақ тілі)
         */
        locale.kk = {
            required: 'Бұл өрісті міндетті түрде толтырыңыз.',
            remote: 'Дұрыс мағына енгізуіңізді сұраймыз.',
            email: 'Нақты электронды поштаңызды енгізуіңізді сұраймыз.',
            url: 'Нақты URL-ды енгізуіңізді сұраймыз.',
            date: 'Нақты URL-ды енгізуіңізді сұраймыз.',
            dateISO: 'Нақты ISO форматымен сәйкес датасын енгізуіңізді сұраймыз.',
            number: 'Күнді енгізуіңізді сұраймыз.',
            digits: 'Тек қана сандарды енгізуіңізді сұраймыз.',
            creditcard: 'Несие картасының нөмірін дұрыс енгізуіңізді сұраймыз.',
            equalTo: 'Осы мәнді қайта енгізуіңізді сұраймыз.',
            extension: 'Файлдың кеңейтуін дұрыс таңдаңыз.',
            maxlength: $.validator.format('Ұзындығы {0} символдан көр болмасын.'),
            minlength: $.validator.format('Ұзындығы {0} символдан аз болмасын.'),
            rangelength: $.validator.format('Ұзындығы {0}-{1} дейін мән енгізуіңізді сұраймыз.'),
            range: $.validator.format('Пожалуйста, введите число от {0} до {1}. - {0} - {1} санын енгізуіңізді сұраймыз.'),
            max: $.validator.format('{0} аз немесе тең санын енгізуіңіді сұраймыз.'),
            min: $.validator.format('{0} көп немесе тең санын енгізуіңізді сұраймыз.'),
            telMinLength: $.validator.format('Телефон нөмірінде кем дегенде {0} сан болуы керек'),
            pattern: 'Пішім жарамсыз'
        }

        /*
         * Locale: KO (Korean; 한국어)
         */
        locale.ko = {
            required: '해당 값이 필요합니다.',
            remote: '항목을 수정하세요.',
            email: '해당 값은 유효한 이메일이어야 합니다.',
            url: '유효하지 않은 URL입니다.',
            date: '올바른 날짜를 입력하세요.',
            dateISO: '올바른 날짜(ISO)를 입력하세요.',
            number: '유효한 숫자가 아닙니다.',
            digits: '숫자만 입력 가능합니다.',
            creditcard: '신용카드 번호가 바르지 않습니다.',
            equalTo: '같은 값을 다시 입력하세요.',
            extension: '올바른 확장자가 아닙니다.',
            maxlength: $.validator.format('{0}자를 넘을 수 없습니다. '),
            minlength: $.validator.format('{0}자 이상 입력하세요.'),
            rangelength: $.validator.format('문자 길이가 {0} 에서 {1} 사이의 값을 입력하세요.'),
            range: $.validator.format('{0} 에서 {1} 사이의 값을 입력하세요.'),
            max: $.validator.format('{0} 이하의 값을 입력하세요.'),
            min: $.validator.format('{0} 이상의 값을 입력하세요.'),
            telMinLength: '유효한 전화번호를 지정해 주세요',
            telMaxLength: '유효한 전화번호를 지정해 주세요',
            pattern: '해당 값이 유효하지 않습니다. '
        }

        /*
         * Locale: LT (Lithuanian; lietuvių kalba)
         */
        locale.lt = {
            required: 'Šis laukas yra privalomas.',
            remote: 'Prašau pataisyti šį lauką.',
            email: 'Prašau įvesti teisingą elektroninio pašto adresą.',
            url: 'Prašau įvesti teisingą URL.',
            date: 'Prašau įvesti teisingą datą.',
            dateISO: 'Prašau įvesti teisingą datą (ISO).',
            number: 'Prašau įvesti teisingą skaičių.',
            digits: 'Prašau naudoti tik skaitmenis.',
            creditcard: 'Prašau įvesti teisingą kreditinės kortelės numerį.',
            equalTo: 'Prašau įvestį tą pačią reikšmę dar kartą.',
            extension: 'Prašau įvesti reikšmę su teisingu plėtiniu.',
            maxlength: $.validator.format('Prašau įvesti ne daugiau kaip {0} simbolių.'),
            minlength: $.validator.format('Prašau įvesti bent {0} simbolius.'),
            rangelength: $.validator.format('Prašau įvesti reikšmes, kurių ilgis nuo {0} iki {1} simbolių.'),
            range: $.validator.format('Prašau įvesti reikšmę intervale nuo {0} iki {1}.'),
            max: $.validator.format('Prašau įvesti reikšmę mažesnę arba lygią {0}.'),
            min: $.validator.format('Prašau įvesti reikšmę didesnę arba lygią {0}.')
            //telMinLength: '',
            //pattern: ''
        }

        /*
         * Locale: LV (Latvian; latviešu valoda)
         */
        locale.lv = {
            required: 'Šis lauks ir obligāts.',
            remote: 'Lūdzu, pārbaudiet šo lauku.',
            email: 'Lūdzu, ievadiet derīgu e-pasta adresi.',
            url: 'Lūdzu, ievadiet derīgu URL adresi.',
            date: 'Lūdzu, ievadiet derīgu datumu.',
            dateISO: 'Lūdzu, ievadiet derīgu datumu (ISO).',
            number: 'Lūdzu, ievadiet derīgu numuru.',
            digits: 'Lūdzu, ievadiet tikai ciparus.',
            creditcard: 'Lūdzu, ievadiet derīgu kredītkartes numuru.',
            equalTo: 'Lūdzu, ievadiet to pašu vēlreiz.',
            extension: 'Lūdzu, ievadiet vērtību ar derīgu paplašinājumu.',
            maxlength: $.validator.format('Lūdzu, ievadiet ne vairāk kā {0} rakstzīmes.'),
            minlength: $.validator.format('Lūdzu, ievadiet vismaz {0} rakstzīmes.'),
            rangelength: $.validator.format('Lūdzu ievadiet {0} līdz {1} rakstzīmes.'),
            range: $.validator.format('Lūdzu, ievadiet skaitli no {0} līdz {1}.'),
            max: $.validator.format('Lūdzu, ievadiet skaitli, kurš ir mazāks vai vienāds ar {0}.'),
            min: $.validator.format('Lūdzu, ievadiet skaitli, kurš ir lielāks vai vienāds ar {0}.'),
            telMinLength: $.validator.format('Telefono numeryje turi būti bent {0} skaitmenų'),
            pattern: 'Netinkamas formatas'
        }

        /*
         * Locale: MK (Macedonian; македонски јазик)
         */
        locale.mk = {
            required: 'Полето е задолжително.',
            remote: 'Поправете го ова поле',
            email: 'Внесете правилна e-mail адреса',
            url: 'Внесете правилен URL.',
            date: 'Внесете правилен датум',
            dateISO: 'Внесете правилен датум (ISO).',
            number: 'Внесете правилен број.',
            digits: 'Внесете само бројки.',
            creditcard: 'Внесете правилен број на кредитната картичка.',
            equalTo: 'Внесете ја истата вредност повторно.',
            extension: 'Внесете вредност со соодветна екстензија.',
            maxlength: $.validator.format('Внесете максимално {0} знаци.'),
            minlength: $.validator.format('Внесете барем {0} знаци.'),
            rangelength: $.validator.format('Внесете вредност со должина помеѓу {0} и {1} знаци.'),
            range: $.validator.format('Внесете вредност помеѓу {0} и {1}.'),
            max: $.validator.format('Внесете вредност помала или еднаква на {0}.'),
            min: $.validator.format('Внесете вредност поголема или еднаква на {0}'),
            telMinLength: $.validator.format('Телефонскиот број мора да содржи најмалку {0} цифри'),
            pattern: 'Невалиден формат'
        }

        /*
         * Locale: MY (Malay; Melayu)
         */
        locale.my = {
            required: 'Medan ini diperlukan.',
            remote: 'Sila betulkan medan ini.',
            email: 'Sila masukkan alamat emel yang betul.',
            url: 'Sila masukkan URL yang betul.',
            date: 'Sila masukkan tarikh yang betul.',
            dateISO: 'Sila masukkan tarikh(ISO) yang betul.',
            number: 'Sila masukkan nombor yang betul.',
            digits: 'Sila masukkan nilai digit sahaja.',
            creditcard: 'Sila masukkan nombor kredit kad yang betul.',
            equalTo: 'Sila masukkan nilai yang sama semula.',
            extension: 'Sila masukkan nilai yang telah diterima.',
            maxlength: $.validator.format('Sila masukkan tidak lebih dari {0} aksara.'),
            minlength: $.validator.format('Sila masukkan sekurang-kurangnya {0} aksara.'),
            rangelength: $.validator.format('Sila masukkan antara {0} dan {1} panjang aksara.'),
            range: $.validator.format('Sila masukkan nilai antara {0} dan {1} aksara.'),
            max: $.validator.format('Sila masukkan nilai yang kurang atau sama dengan {0}.'),
            min: $.validator.format('Sila masukkan nilai yang lebih atau sama dengan {0}.')
            //telMinLength: '',
            //pattern: ''
        }

        /*
         * Locale: NL (Dutch; Nederlands, Vlaams)
         */
        locale.nl = {
            required: 'Deze waarde is vereist.',
            remote: 'Controleer dit veld.',
            email: 'Deze waarde moet een geldig e-mailadres zijn.',
            url: 'Vul hier een geldige URL in.',
            date: 'Vul hier een geldige datum in.',
            dateISO: 'Vul hier een geldige datum in (ISO-formaat).',
            number: 'Vul hier een geldig getal in.',
            digits: 'Vul hier alleen getallen in.',
            creditcard: 'Vul hier een geldig creditcardnummer in.',
            equalTo: 'Vul hier dezelfde waarde in.',
            extension: 'Vul hier een waarde in met een geldige extensie.',
            maxlength: $.validator.format('Vul hier maximaal {0} tekens in.'),
            minlength: $.validator.format('Vul hier minimaal {0} tekens in.'),
            rangelength: $.validator.format('Vul hier een waarde in van minimaal {0} en maximaal {1} tekens.'),
            range: $.validator.format('Vul hier een waarde in van minimaal {0} en maximaal {1}.'),
            max: $.validator.format('Vul hier een waarde in kleiner dan of gelijk aan {0}.'),
            min: $.validator.format('Vul hier een waarde in groter dan of gelijk aan {0}.'),
            step: $.validator.format('Vul hier een veelvoud van {0} in.'),
            telMinLength: 'Voer een geldig telefoonnummer in alstublieft..',
            telMaxLength: 'Voer een geldig telefoonnummer in alstublieft.',
            pattern: 'Deze waarde lijkt ongeldig te zijn.',

            // For validations in additional-methods.js
            iban: 'Vul hier een geldig IBAN in.',
            dateNL: 'Vul hier een geldige datum in.',
            phoneNL: 'Vul hier een geldig Nederlands telefoonnummer in.',
            mobileNL: 'Vul hier een geldig Nederlands mobiel telefoonnummer in.',
            postalcodeNL: 'Vul hier een geldige postcode in.',
            bankaccountNL: 'Vul hier een geldig bankrekeningnummer in.',
            giroaccountNL: 'Vul hier een geldig gironummer in.',
            bankorgiroaccountNL: 'Vul hier een geldig bank- of gironummer in.'
        }

        /*
         * Locale: NO (Norwegian; Norsk)
         */
        locale.no = {
            required: 'Dette feltet er obligatorisk.',
            remote: 'Ugyldig verdi.',
            email: 'Vennligst skriv inn en gyldig e-post adresse.',
            url: 'Angi en gyldig URL.',
            date: 'Angi en gyldig dato.',
            dateISO: 'Angi en gyldig dato (&ARING;&ARING;&ARING;&ARING;-MM-DD).',
            number: 'Angi et gyldig tall.',
            digits: 'Skriv kun tall.',
            equalTo: 'Skriv samme verdi igjen.',
            maxlength: $.validator.format('Maksimalt {0} tegn.'),
            minlength: $.validator.format('Minimum {0} tegn.'),
            rangelength: $.validator.format('Angi minimum {0} og maksimum {1} tegn.'),
            range: $.validator.format('Angi en verdi mellom {0} og {1}.'),
            max: $.validator.format('Angi en verdi som er mindre eller lik {0}.'),
            min: $.validator.format('Angi en verdi som er st&oslash;rre eller lik {0}.'),
            step: $.validator.format('Angi en verdi ganger {0}.'),
            creditcard: 'Angi et gyldig kredittkortnummer.',
            telMinLength: $.validator.format('Telefonnummeret må inneholde minst 5 sifre'),
            pattern: 'Ugyldig format'
        }

        /*
         * Locale: PL (Polish; język polski, polszczyzna)
         */
        locale.pl = {
            required: 'To pole jest wymagane.',
            remote: 'Proszę o wypełnienie tego pola.',
            email: 'Proszę o podanie prawidłowego adresu email.',
            url: 'Proszę o podanie prawidłowego URL.',
            date: 'Proszę o podanie prawidłowej daty.',
            dateISO: 'Proszę o podanie prawidłowej daty (ISO).',
            number: 'Proszę o podanie prawidłowej liczby.',
            digits: 'Proszę o podanie samych cyfr.',
            creditcard: 'Proszę o podanie prawidłowej karty kredytowej.',
            equalTo: 'Proszę o podanie tej samej wartości ponownie.',
            extension: 'Proszę o podanie wartości z prawidłowym rozszerzeniem.',
            nipPL: 'Proszę o podanie prawidłowego numeru NIP.',
            phonePL: 'Proszę o podanie prawidłowego numeru telefonu',
            maxlength: $.validator.format('Proszę o podanie nie więcej niż {0} znaków.'),
            minlength: $.validator.format('Proszę o podanie przynajmniej {0} znaków.'),
            rangelength: $.validator.format('Proszę o podanie wartości o długości od {0} do {1} znaków.'),
            range: $.validator.format('Proszę o podanie wartości z przedziału od {0} do {1}.'),
            max: $.validator.format('Proszę o podanie wartości mniejszej bądź równej {0}.'),
            min: $.validator.format('Proszę o podanie wartości większej bądź równej {0}.'),
            telMinLength: $.validator.format('Numer telefonu musi zawierać co najmniej 5 cyfr'),
            pattern: 'Pole zawiera niedozwolone znaki.'
        }

        /*
         * Locale: PT (Portuguese; português)
         * Region: BR (Brazil)
         */
        locale.pt_BR = {

            // Core
            required: 'Este valor é obrigatório.',
            remote: 'Por favor, corrija este campo.',
            email: 'Este valor tem de ser um e-mail válido.',
            url: 'Por favor, forne&ccedil;a uma URL v&aacute;lida.',
            date: 'Por favor, forne&ccedil;a uma data v&aacute;lida.',
            dateISO: 'Por favor, forne&ccedil;a uma data v&aacute;lida (ISO).',
            number: 'Por favor, forne&ccedil;a um n&uacute;mero v&aacute;lido.',
            digits: 'Por favor, forne&ccedil;a somente d&iacute;gitos.',
            creditcard: 'Por favor, forne&ccedil;a um cart&atilde;o de cr&eacute;dito v&aacute;lido.',
            equalTo: 'Por favor, forne&ccedil;a o mesmo valor novamente.',
            maxlength: $.validator.format('Por favor, forne&ccedil;a n&atilde;o mais que {0} caracteres.'),
            minlength: $.validator.format('Por favor, forne&ccedil;a ao menos {0} caracteres.'),
            rangelength: $.validator.format('Por favor, forne&ccedil;a um valor entre {0} e {1} caracteres de comprimento.'),
            range: $.validator.format('Por favor, forne&ccedil;a um valor entre {0} e {1}.'),
            max: $.validator.format('Por favor, forne&ccedil;a um valor menor ou igual a {0}.'),
            min: $.validator.format('Por favor, forne&ccedil;a um valor maior ou igual a {0}.'),
            step: $.validator.format('Por favor, forne&ccedil;a um valor m&uacute;ltiplo de {0}.'),

            // Metodos Adicionais
            maxWords: $.validator.format('Por favor, forne&ccedil;a com {0} palavras ou menos.'),
            minWords: $.validator.format('Por favor, forne&ccedil;a pelo menos {0} palavras.'),
            rangeWords: $.validator.format('Por favor, forne&ccedil;a entre {0} e {1} palavras.'),
            accept: 'Por favor, forne&ccedil;a um tipo v&aacute;lido.',
            alphanumeric: 'Por favor, forne&ccedil;a somente com letras, n&uacute;meros e sublinhados.',
            bankaccountNL: 'Por favor, forne&ccedil;a com um n&uacute;mero de conta banc&aacute;ria v&aacute;lida.',
            bankorgiroaccountNL: 'Por favor, forne&ccedil;a um banco v&aacute;lido ou n&uacute;mero de conta.',
            bic: 'Por favor, forne&ccedil;a um c&oacute;digo BIC v&aacute;lido.',
            cifES: 'Por favor, forne&ccedil;a um c&oacute;digo CIF v&aacute;lido.',
            creditcardtypes: 'Por favor, forne&ccedil;a um n&uacute;mero de cart&atilde;o de cr&eacute;dito v&aacute;lido.',
            currency: 'Por favor, forne&ccedil;a uma moeda v&aacute;lida.',
            dateFA: 'Por favor, forne&ccedil;a uma data correta.',
            dateITA: 'Por favor, forne&ccedil;a uma data correta.',
            dateNL: 'Por favor, forne&ccedil;a uma data correta.',
            extension: 'Por favor, forne&ccedil;a um valor com uma extens&atilde;o v&aacute;lida.',
            giroaccountNL: 'Por favor, forne&ccedil;a um n&uacute;mero de conta corrente v&aacute;lido.',
            iban: 'Por favor, forne&ccedil;a um c&oacute;digo IBAN v&aacute;lido.',
            integer: 'Por favor, forne&ccedil;a um n&uacute;mero n&atilde;o decimal.',
            ipv4: 'Por favor, forne&ccedil;a um IPv4 v&aacute;lido.',
            ipv6: 'Por favor, forne&ccedil;a um IPv6 v&aacute;lido.',
            lettersonly: 'Por favor, forne&ccedil;a apenas com letras.',
            letterswithbasicpunc: 'Por favor, forne&ccedil;a apenas letras ou pontua&ccedil;ões.',
            mobileNL: 'Por favor, fornece&ccedil;a um n&uacute;mero v&aacute;lido de telefone.',
            mobileUK: 'Por favor, fornece&ccedil;a um n&uacute;mero v&aacute;lido de telefone.',
            nieES: 'Por favor, forne&ccedil;a um NIE v&aacute;lido.',
            nifES: 'Por favor, forne&ccedil;a um NIF v&aacute;lido.',
            nowhitespace: 'Por favor, n&atilde;o utilize espa&ccedil;os em branco.',
            phoneNL: 'Por favor, forne&ccedil;a um n&uacute;mero de telefone v&aacute;lido.',
            phoneUK: 'Por favor, forne&ccedil;a um n&uacute;mero de telefone v&aacute;lido.',
            phoneUS: 'Por favor, forne&ccedil;a um n&uacute;mero de telefone v&aacute;lido.',
            phonesUK: 'Por favor, forne&ccedil;a um n&uacute;mero de telefone v&aacute;lido.',
            postalCodeCA: 'Por favor, forne&ccedil;a um n&uacute;mero de c&oacute;digo postal v&aacute;lido.',
            postalcodeIT: 'Por favor, forne&ccedil;a um n&uacute;mero de c&oacute;digo postal v&aacute;lido.',
            postalcodeNL: 'Por favor, forne&ccedil;a um n&uacute;mero de c&oacute;digo postal v&aacute;lido.',
            postcodeUK: 'Por favor, forne&ccedil;a um n&uacute;mero de c&oacute;digo postal v&aacute;lido.',
            postalcodeBR: 'Por favor, forne&ccedil;a um CEP v&aacute;lido.',
            require_from_group: $.validator.format('Por favor, forne&ccedil;a pelo menos {0} destes campos.'),
            skip_or_fill_minimum: $.validator.format('Por favor, optar entre ignorar esses campos ou preencher pelo menos {0} deles.'),
            stateUS: 'Por favor, forne&ccedil;a um estado v&aacute;lido.',
            strippedminlength: $.validator.format('Por favor, forne&ccedil;a pelo menos {0} caracteres.'),
            time: 'Por favor, forne&ccedil;a um hor&aacute;rio v&aacute;lido, no intervado de 00:00 a 23:59.',
            time12h: 'Por favor, forne&ccedil;a um hor&aacute;rio v&aacute;lido, no intervado de 01:00 a 12:59 am/pm.',
            url2: 'Por favor, forne&ccedil;a uma URL v&aacute;lida.',
            vinUS: 'O n&uacute;mero de identifica&ccedil;&atilde;o de ve&iacute;culo informado (VIN) &eacute; inv&aacute;lido.',
            zipcodeUS: 'Por favor, forne&ccedil;a um c&oacute;digo postal americano v&aacute;lido.',
            ziprange: 'O c&oacute;digo postal deve estar entre 902xx-xxxx e 905xx-xxxx',
            cpfBR: 'Por favor, forne&ccedil;a um CPF v&aacute;lido.',
            nisBR: 'Por favor, forne&ccedil;a um NIS/PIS v&aacute;lido',
            cnhBR: 'Por favor, forne&ccedil;a um CNH v&aacute;lido.',
            cnpjBR: 'Por favor, forne&ccedil;a um CNPJ v&aacute;lido.',
            telMinLength: 'Por favor especifique um número de telefone válido',
            telMaxLength: 'Por favor especifique um número de telefone válido',
            phone: 'O número de telefone é inválido. Por favor insira um número de telefone corporativo',
            pattern: 'Este valor parece ser inválido.'
        }

        /*
         * Locale: PT (Portuguese; português)
         * Region: PT (Portugal)
         */
        locale.pt_PT = {
            required: 'Este campo é obrigatório.',
            remote: 'Por favor, corrija este campo.',
            email: 'Este valor tem de ser um e-mail válido.',
            url: 'Por favor, introduza um URL v&aacute;lido.',
            date: 'Por favor, introduza uma data v&aacute;lida.',
            dateISO: 'Por favor, introduza uma data v&aacute;lida (ISO).',
            number: 'Por favor, introduza um n&uacute;mero v&aacute;lido.',
            digits: 'Por favor, introduza apenas d&iacute;gitos.',
            creditcard: 'Por favor, introduza um n&uacute;mero de cart&atilde;o de cr&eacute;dito v&aacute;lido.',
            equalTo: 'Por favor, introduza de novo o mesmo valor.',
            extension: 'Por favor, introduza um ficheiro com uma extens&atilde;o v&aacute;lida.',
            maxlength: $.validator.format('Por favor, n&atilde;o introduza mais do que {0} caracteres.'),
            minlength: $.validator.format('Por favor, introduza pelo menos {0} caracteres.'),
            rangelength: $.validator.format('Por favor, introduza entre {0} e {1} caracteres.'),
            range: $.validator.format('Por favor, introduza um valor entre {0} e {1}.'),
            max: $.validator.format('Por favor, introduza um valor menor ou igual a {0}.'),
            min: $.validator.format('Por favor, introduza um valor maior ou igual a {0}.'),
            nifES: 'Por favor, introduza um NIF v&aacute;lido.',
            nieES: 'Por favor, introduza um NIE v&aacute;lido.',
            cifES: 'Por favor, introduza um CIF v&aacute;lido.',
            telMinLength: 'Por favor, especifique um número de telefone válido',
            telMaxLength: 'Por favor, especifique um número de telefone válido',
            pattern: 'Este valor parece não ser válido.'
        }

        /*
         * Locale: RO (Romanian, limba română)
         */
        locale.ro = {
            required: 'Acest câmp este obligatoriu.',
            remote: 'Te rugăm să completezi acest câmp.',
            email: 'Te rugăm să introduci o adresă de email validă',
            url: 'Te rugăm sa introduci o adresă URL validă.',
            date: 'Te rugăm să introduci o dată corectă.',
            dateISO: 'Te rugăm să introduci o dată (ISO) corectă.',
            number: 'Te rugăm să introduci un număr întreg valid.',
            digits: 'Te rugăm să introduci doar cifre.',
            creditcard: 'Te rugăm să introduci un numar de carte de credit valid.',
            equalTo: 'Te rugăm să reintroduci valoarea.',
            extension: 'Te rugăm să introduci o valoare cu o extensie validă.',
            maxlength: $.validator.format('Te rugăm să nu introduci mai mult de {0} caractere.'),
            minlength: $.validator.format('Te rugăm să introduci cel puțin {0} caractere.'),
            rangelength: $.validator.format('Te rugăm să introduci o valoare între {0} și {1} caractere.'),
            range: $.validator.format('Te rugăm să introduci o valoare între {0} și {1}.'),
            max: $.validator.format('Te rugăm să introduci o valoare egal sau mai mică decât {0}.'),
            min: $.validator.format('Te rugăm să introduci o valoare egal sau mai mare decât {0}.')
            //telMinLength: '',
            //pattern: ''
        }

        /*
         * Locale: RU (Russian; русский язык)
         */
        locale.ru = {
            required: 'Это обязательное значение.',
            remote: 'Пожалуйста, введите правильное значение.',
            email: 'Это значение должно быть действительным адресом электронной почты.',
            url: 'Пожалуйста, введите корректный URL.',
            date: 'Пожалуйста, введите корректную дату.',
            dateISO: 'Пожалуйста, введите корректную дату в формате ISO.',
            number: 'Пожалуйста, введите число.',
            digits: 'Пожалуйста, вводите только цифры.',
            creditcard: 'Пожалуйста, введите правильный номер кредитной карты.',
            equalTo: 'Пожалуйста, введите такое же значение ещё раз.',
            extension: 'Пожалуйста, выберите файл с правильным расширением.',
            maxlength: $.validator.format('Пожалуйста, введите не больше {0} символов.'),
            minlength: $.validator.format('Пожалуйста, введите не меньше {0} символов.'),
            rangelength: $.validator.format('Пожалуйста, введите значение длиной от {0} до {1} символов.'),
            range: $.validator.format('Пожалуйста, введите число от {0} до {1}.'),
            max: $.validator.format('Пожалуйста, введите число, меньшее или равное {0}.'),
            min: $.validator.format('Пожалуйста, введите число, большее или равное {0}.'),
            telMinLength: 'Пожалуйста, укажите действительный номер мобильного телефона.',
            telMaxLength: 'Пожалуйста, укажите действительный номер мобильного телефона.',
            pattern: 'Похоже, это неверное значение.'
        }

        /*
         * Locale: SD (Sindhi; سنڌي)
         */
        locale.sd = {
            required: 'هنن جاين جي ضرورت آهي',
            remote: 'هنن جاين جي ضرورت آهي',
            email: 'لکيل اي ميل غلط آهي',
            url: 'لکيل ايڊريس غلط آهي',
            date: 'لکيل تاريخ غلط آهي',
            dateISO: 'جي معيار جي مطابق نه آهي (ISO) لکيل تاريخ',
            number: 'لکيل انگ صحيح ناهي',
            digits: 'رڳو انگ داخل ڪري سگهجي ٿو',
            creditcard: 'لکيل ڪارڊ نمبر صحيح نه آهي',
            equalTo: 'داخل ٿيل ڀيٽ صحيح نه آهي',
            extension: 'لکيل غلط آهي',
            maxlength: $.validator.format('وڌ کان وڌ {0} جي داخلا ڪري سگهجي ٿي'),
            minlength: $.validator.format('گهٽ ۾ گهٽ {0} جي داخلا ڪرڻ ضروري آهي'),
            rangelength: $.validator.format('داخلا جو {0} ۽ {1}جي وچ ۾ هجڻ ضروري آهي'),
            range: $.validator.format('داخلا جو {0} ۽ {1}جي وچ ۾ هجڻ ضروري آهي'),
            max: $.validator.format('وڌ کان وڌ {0} جي داخلا ڪري سگهجي ٿي'),
            min: $.validator.format('گهٽ ۾ گهٽ {0} جي داخلا ڪرڻ ضروري آهي')
            //telMinLength: '',
            //pattern: ''
        }

        /*
         * Locale: SI (Slovenian)
         */
        locale.si = {
            required: 'To polje je obvezno.',
            remote: 'Vpis v tem polju ni v pravi obliki.',
            email: 'Prosimo, vnesite pravi email naslov.',
            url: 'Prosimo, vnesite pravi URL.',
            date: 'Prosimo, vnesite pravi datum.',
            dateISO: 'Prosimo, vnesite pravi datum (ISO).',
            number: 'Prosimo, vnesite pravo številko.',
            digits: 'Prosimo, vnesite samo številke.',
            creditcard: 'Prosimo, vnesite pravo številko kreditne kartice.',
            equalTo: 'Prosimo, ponovno vnesite enako vsebino.',
            extension: 'Prosimo, vnesite vsebino z pravo končnico.',
            maxlength: $.validator.format('Prosimo, da ne vnašate več kot {0} znakov.'),
            minlength: $.validator.format('Prosimo, vnesite vsaj {0} znakov.'),
            rangelength: $.validator.format('Prosimo, vnesite od {0} do {1} znakov.'),
            range: $.validator.format('Prosimo, vnesite vrednost med {0} in {1}.'),
            max: $.validator.format('Prosimo, vnesite vrednost manjšo ali enako {0}.'),
            min: $.validator.format('Prosimo, vnesite vrednost večjo ali enako {0}.')
            //telMinLength: '',
            //pattern: ''
        }

        /*
         * Locale: SK (Slovak; slovenčina, slovenský jazyk)
         */
        locale.sk = {
            required: 'Povinné zadať.',
            maxlength: $.validator.format('Maximálne {0} znakov.'),
            minlength: $.validator.format('Minimálne {0} znakov.'),
            rangelength: $.validator.format('Minimálne {0} a maximálne {1} znakov.'),
            email: 'E-mailová adresa musí byť platná.',
            url: 'URL musí byť platná.',
            date: 'Musí byť dátum.',
            number: 'Musí byť číslo.',
            digits: 'Môže obsahovať iba číslice.',
            equalTo: 'Dve hodnoty sa musia rovnať.',
            range: $.validator.format('Musí byť medzi {0} a {1}.'),
            max: $.validator.format('Nemôže byť viac ako {0}.'),
            min: $.validator.format('Nemôže byť menej ako {0}.'),
            creditcard: 'Číslo platobnej karty musí byť platné.',
            step: $.validator.format('Musí byť násobkom čísla {0}.')
            //telMinLength: '',
            //pattern: ''
        }

        /*
         * Language: SL (Slovenian; slovenski jezik)
         */
        locale.sl = {
            required: 'To polje je obvezno.',
            remote: 'Prosimo popravite to polje.',
            email: 'Prosimo vnesite veljaven email naslov.',
            url: 'Prosimo vnesite veljaven URL naslov.',
            date: 'Prosimo vnesite veljaven datum.',
            dateISO: 'Prosimo vnesite veljaven ISO datum.',
            number: 'Prosimo vnesite veljavno število.',
            digits: 'Prosimo vnesite samo števila.',
            creditcard: 'Prosimo vnesite veljavno številko kreditne kartice.',
            equalTo: 'Prosimo ponovno vnesite vrednost.',
            extension: 'Prosimo vnesite vrednost z veljavno končnico.',
            maxlength: $.validator.format('Prosimo vnesite največ {0} znakov.'),
            minlength: $.validator.format('Prosimo vnesite najmanj {0} znakov.'),
            rangelength: $.validator.format('Prosimo vnesite najmanj {0} in največ {1} znakov.'),
            range: $.validator.format('Prosimo vnesite vrednost med {0} in {1}.'),
            max: $.validator.format('Prosimo vnesite vrednost manjše ali enako {0}.'),
            min: $.validator.format('Prosimo vnesite vrednost večje ali enako {0}.')
            //telMinLength: '',
            //pattern: ''
        }

        /*
         * Locale: SR (Serbian; српски језик)
         */
        locale.sr = {
            required: 'Поље је обавезно.',
            remote: 'Средите ово поље.',
            email: 'Унесите исправну и-мејл адресу.',
            url: 'Унесите исправан URL.',
            date: 'Унесите исправан датум.',
            dateISO: 'Унесите исправан датум (ISO).',
            number: 'Унесите исправан број.',
            digits: 'Унесите само цифе.',
            creditcard: 'Унесите исправан број кредитне картице.',
            equalTo: 'Унесите исту вредност поново.',
            extension: 'Унесите вредност са одговарајућом екстензијом.',
            maxlength: $.validator.format('Унесите мање од {0} карактера.'),
            minlength: $.validator.format('Унесите барем {0} карактера.'),
            rangelength: $.validator.format('Унесите вредност дугачку између {0} и {1} карактера.'),
            range: $.validator.format('Унесите вредност између {0} и {1}.'),
            max: $.validator.format('Унесите вредност мању или једнаку {0}.'),
            min: $.validator.format('Унесите вредност већу или једнаку {0}.'),
            step: $.validator.format('Унесите вредност која је умножак броја {0}.')
            //telMinLength: '',
            //pattern: ''
        }

        /*
         * Locale: SR (Serbian - Latin alphabet; srpski jezik - latinica)
         */
        locale.sr_lat = {
            required: 'Polje je obavezno.',
            remote: 'Sredite ovo polje.',
            email: 'Unesite ispravnu e-mail adresu',
            url: 'Unesite ispravan URL.',
            date: 'Unesite ispravan datum.',
            dateISO: 'Unesite ispravan datum (ISO).',
            number: 'Unesite ispravan broj.',
            digits: 'Unesite samo cifre.',
            creditcard: 'Unesite ispravan broj kreditne kartice.',
            equalTo: 'Unesite istu vrednost ponovo.',
            extension: 'Unesite vrednost sa odgovarajućom ekstenzijom.',
            maxlength: $.validator.format('Unesite manje od {0} karaktera.'),
            minlength: $.validator.format('Unesite barem {0} karaktera.'),
            rangelength: $.validator.format('Unesite vrednost dugačku između {0} i {1} karaktera.'),
            range: $.validator.format('Unesite vrednost između {0} i {1}.'),
            max: $.validator.format('Unesite vrednost manju ili jednaku {0}.'),
            min: $.validator.format('Unesite vrednost veću ili jednaku {0}.'),
            step: $.validator.format('Unesite vrednost koja je umnožak broja {0}.')
            //telMinLength: '',
            //pattern: ''
        }

        /*
         * Locale: SV (Swedish; Svenska)
         */
        locale.sv = {
            required: 'Detta f&auml;lt kr&auml;vs.',
            remote: 'Var snäll och åtgärda detta fält.',
            maxlength: $.validator.format('Du f&aring;r ange h&ouml;gst {0} tecken.'),
            minlength: $.validator.format('Du m&aring;ste ange minst {0} tecken.'),
            rangelength: $.validator.format('Ange minst {0} och max {1} tecken.'),
            email: 'Var god ange en giltlig e-postadress',
            url: 'Ange en korrekt URL.',
            date: 'Ange ett korrekt datum.',
            dateISO: 'Ange ett korrekt datum (&Aring;&Aring;&Aring;&Aring;-MM-DD).',
            number: 'Ange ett korrekt nummer.',
            digits: 'Ange endast siffror.',
            equalTo: 'Ange samma v&auml;rde igen.',
            range: $.validator.format('Ange ett v&auml;rde mellan {0} och {1}.'),
            max: $.validator.format('Ange ett v&auml;rde som &auml;r mindre eller lika med {0}.'),
            min: $.validator.format('Ange ett v&auml;rde som &auml;r st&ouml;rre eller lika med {0}.'),
            creditcard: 'Ange ett korrekt kreditkortsnummer.',
            telMinLength: 'Ange ett giltigt telefonnummer.',
            telMaxLength: 'Ange ett giltigt telefonnummer.',
            pattern: 'Ogiltigt format'
        }

        /*
         * Locale: TH (Thai; ไทย)
         */
        locale.th = {
            required: 'โปรดระบุ',
            remote: 'โปรดแก้ไขให้ถูกต้อง',
            email: 'โปรดระบุที่อยู่อีเมล์ที่ถูกต้อง',
            url: 'โปรดระบุ URL ที่ถูกต้อง',
            date: 'โปรดระบุวันที่ ที่ถูกต้อง',
            dateISO: 'โปรดระบุวันที่ ที่ถูกต้อง (ระบบ ISO).',
            number: 'โปรดระบุทศนิยมที่ถูกต้อง',
            digits: 'โปรดระบุจำนวนเต็มที่ถูกต้อง',
            creditcard: 'โปรดระบุรหัสบัตรเครดิตที่ถูกต้อง',
            equalTo: 'โปรดระบุค่าเดิมอีกครั้ง',
            extension: 'โปรดระบุค่าที่มีส่วนขยายที่ถูกต้อง',
            maxlength: $.validator.format('โปรดอย่าระบุค่าที่ยาวกว่า {0} อักขระ'),
            minlength: $.validator.format('โปรดอย่าระบุค่าที่สั้นกว่า {0} อักขระ'),
            rangelength: $.validator.format('โปรดอย่าระบุค่าความยาวระหว่าง {0} ถึง {1} อักขระ'),
            range: $.validator.format('โปรดระบุค่าระหว่าง {0} และ {1}'),
            max: $.validator.format('โปรดระบุค่าน้อยกว่าหรือเท่ากับ {0}'),
            min: $.validator.format('โปรดระบุค่ามากกว่าหรือเท่ากับ {0}'),
            telMinLength: 'โปรดระบุหมายเลขโทรศัพท์ที่ถูกต้อง',
            telMaxLength: 'โปรดระบุหมายเลขโทรศัพท์ที่ถูกต้อง.',
            pattern: 'ค่านี้เหมือนจะไม่ถูกต้อง'
        }

        /*
         * Locale: TJ (Tajikistan; Забони тоҷикӣ)
         */
        locale.tj = {
            required: 'Ворид кардани ин филд маҷбури аст.',
            remote: 'Илтимос, маълумоти саҳеҳ ворид кунед.',
            email: 'Илтимос, почтаи электронии саҳеҳ ворид кунед.',
            url: 'Илтимос, URL адреси саҳеҳ ворид кунед.',
            date: 'Илтимос, таърихи саҳеҳ ворид кунед.',
            dateISO: 'Илтимос, таърихи саҳеҳи (ISO)ӣ ворид кунед.',
            number: 'Илтимос, рақамҳои саҳеҳ ворид кунед.',
            digits: 'Илтимос, танҳо рақам ворид кунед.',
            creditcard: 'Илтимос, кредит карди саҳеҳ ворид кунед.',
            equalTo: 'Илтимос, миқдори баробар ворид кунед.',
            extension: 'Илтимос, қофияи файлро дуруст интихоб кунед',
            maxlength: $.validator.format('Илтимос, бештар аз {0} рамз ворид накунед.'),
            minlength: $.validator.format('Илтимос, камтар аз {0} рамз ворид накунед.'),
            rangelength: $.validator.format('Илтимос, камтар аз {0} ва зиёда аз {1} рамз ворид кунед.'),
            range: $.validator.format('Илтимос, аз {0} то {1} рақам зиёд ворид кунед.'),
            max: $.validator.format('Илтимос, бештар аз {0} рақам ворид накунед.'),
            min: $.validator.format('Илтимос, камтар аз {0} рақам ворид накунед.')
            //telMinLength: '',
            //pattern: ''
        }

        /*
         * Locale: TR (Turkish; Türkçe)
         */
        locale.tr = {
            required: 'Bu alanın doldurulması zorunludur.',
            remote: 'Lütfen bu alanı düzeltin.',
            email: 'Lütfen geçerli bir e-posta adresi giriniz.',
            url: 'Lütfen geçerli bir web adresi (URL) giriniz.',
            date: 'Lütfen geçerli bir tarih giriniz.',
            dateISO: 'Lütfen geçerli bir tarih giriniz(ISO formatında)',
            number: 'Lütfen geçerli bir sayı giriniz.',
            digits: 'Lütfen sadece sayısal karakterler giriniz.',
            creditcard: 'Lütfen geçerli bir kredi kartı giriniz.',
            equalTo: 'Lütfen aynı değeri tekrar giriniz.',
            extension: 'Lütfen geçerli uzantıya sahip bir değer giriniz.',
            phone: 'Lütfen geçerli bir telefon numarası giriniz.',
            maxlength: $.validator.format('Lütfen en fazla {0} karakter uzunluğunda bir değer giriniz.'),
            minlength: $.validator.format('Lütfen en az {0} karakter uzunluğunda bir değer giriniz.'),
            rangelength: $.validator.format('Lütfen en az {0} ve en fazla {1} uzunluğunda bir değer giriniz.'),
            range: $.validator.format('Lütfen {0} ile {1} arasında bir değer giriniz.'),
            max: $.validator.format('Lütfen {0} değerine eşit ya da daha küçük bir değer giriniz.'),
            min: $.validator.format('Lütfen {0} değerine eşit ya da daha büyük bir değer giriniz.'),
            require_from_group: $.validator.format('Lütfen bu alanların en az {0} tanesini doldurunuz.'),
            telMinLength: $.validator.format('Telefon numarası en az {0} rakam içermelidir'),
            pattern: 'Geçersiz format'
        }

        /*
         * Locale: UK (Ukrainian; українська мова)
         */
        locale.uk = {
            required: 'Це поле необхідно заповнити.',
            remote: 'Будь ласка, введіть правильне значення.',
            email: 'Будь ласка, введіть коректну адресу електронної пошти.',
            url: 'Будь ласка, введіть коректний URL.',
            date: 'Будь ласка, введіть коректну дату.',
            dateISO: 'Будь ласка, введіть коректну дату у форматі ISO.',
            number: 'Будь ласка, введіть число.',
            digits: 'Вводите потрібно лише цифри.',
            creditcard: 'Будь ласка, введіть правильний номер кредитної карти.',
            equalTo: 'Будь ласка, введіть таке ж значення ще раз.',
            extension: 'Будь ласка, виберіть файл з правильним розширенням.',
            maxlength: $.validator.format('Будь ласка, введіть не більше {0} символів.'),
            minlength: $.validator.format('Будь ласка, введіть не менше {0} символів.'),
            rangelength: $.validator.format('Будь ласка, введіть значення довжиною від {0} до {1} символів.'),
            range: $.validator.format('Будь ласка, введіть число від {0} до {1}.'),
            max: $.validator.format('Будь ласка, введіть число, менше або рівно {0}.'),
            min: $.validator.format('Будь ласка, введіть число, більше або рівно {0}.'),
            telMinLength: $.validator.format('Номер телефону повинен містити не менш, ніж {0} цифр'),
            pattern: 'Невірний формат.'
        }

        /*
         * Locale: UR (Urdu; اردو)
         */
        locale.ur = {
            required: 'ان معلومات کا اندراج ضروری ہے',
            remote: 'ان معلومات کا اندراج ضروری ہے',
            email: 'درج کی ہوئی ای میل درست نہیں ہے',
            url: 'درج کیا گیا پتہ درست نہیں ہے',
            date: 'درج کی گئی تاریخ درست نہیں ہے',
            dateISO: 'معیار کے مطابق نہیں ہے (ISO) درج کی گئی تاریخ',
            number: 'درج کیےگئے ہندسے درست نہیں ہیں',
            digits: 'صرف ہندسے اندراج کئے جاسکتے ہیں',
            creditcard: 'درج کیا گیا کارڈ نمبر درست نہیں ہے',
            equalTo: 'اندراج کا موازنہ درست نہیں ہے',
            extension: 'اندراج درست نہیں ہے',
            maxlength: $.validator.format('زیادہ سے زیادہ {0} کا اندراج کر سکتے ہیں'),
            minlength: $.validator.format('کم سے کم {0} کا اندراج کرنا ضروری ہے'),
            rangelength: $.validator.format('اندراج کا {0} اور {1}کے درمیان ہونا ضروری ہے'),
            range: $.validator.format('اندراج کا {0} اور {1} کے درمیان ہونا ضروری ہے'),
            max: $.validator.format('زیادہ سے زیادہ {0} کا اندراج کر سکتے ہیں'),
            min: $.validator.format('کم سے کم {0} کا اندراج کرنا ضروری ہے')
            //telMinLength: '',
            //pattern: ''
        }

        /*
         * Locale: VI (Vietnamese; Tiếng Việt)
         */
        locale.vi = {
            required: 'Hãy nhập.',
            remote: 'Hãy sửa cho đúng.',
            email: 'Hãy nhập email.',
            url: 'Hãy nhập URL.',
            date: 'Hãy nhập ngày.',
            dateISO: 'Hãy nhập ngày (ISO).',
            number: 'Hãy nhập số.',
            digits: 'Hãy nhập chữ số.',
            creditcard: 'Hãy nhập số thẻ tín dụng.',
            equalTo: 'Hãy nhập thêm lần nữa.',
            extension: 'Phần mở rộng không đúng.',
            maxlength: $.validator.format('Hãy nhập từ {0} kí tự trở xuống.'),
            minlength: $.validator.format('Hãy nhập từ {0} kí tự trở lên.'),
            rangelength: $.validator.format('Hãy nhập từ {0} đến {1} kí tự.'),
            range: $.validator.format('Hãy nhập từ {0} đến {1}.'),
            max: $.validator.format('Hãy nhập từ {0} trở xuống.'),
            min: $.validator.format('Hãy nhập từ {0} trở lên.')
            //telMinLength: '',
            //pattern: ''
        }

        /*
         * Locale: ZH (Chinese Traditional, 中文 (Zhōngwén), 汉语, 漢語)
         */
        locale.zh = {
            required: '請輸入內容。',
            remote: '请修正此字段',
            email: '請輸入有效的電子郵件。',
            url: '请输入有效的网址',
            date: '请输入有效的日期',
            dateISO: '请输入有效的日期 (YYYY-MM-DD)',
            number: '请输入有效的数字',
            digits: '只能输入数字',
            creditcard: '请输入有效的信用卡号码',
            equalTo: '你的输入不相同',
            extension: '请输入有效的后缀',
            maxlength: $.validator.format('最多可以输入 {0} 个字符'),
            minlength: $.validator.format('最少要输入 {0} 个字符'),
            rangelength: $.validator.format('请输入长度在 {0} 到 {1} 之间的字符串'),
            range: $.validator.format('请输入范围在 {0} 到 {1} 之间的数值'),
            step: $.validator.format('请输入 {0} 的整数倍值'),
            max: $.validator.format('请输入不大于 {0} 的数值'),
            min: $.validator.format('请输入不小于 {0} 的数值'),
            telMinLength: '請填寫有效的電話號碼。',
            telMaxLength: '請填寫有效的電話號碼。',
            pattern: '此內容無效。'
        }

        /*
         * Locale: ZH (Chinese Simplified, 中文 (Zhōngwén), 汉语, 漢語)
         */
        locale.zh_cn = {
            required: '此项为必填项',
            remote: '此内容无效。',
            email: '请输入有效的电子邮件。',
            url: '请输入有效的网址',
            date: '请输入有效的日期',
            dateISO: '请输入有效的日期 (YYYY-MM-DD)',
            number: '请输入有效的数字',
            digits: '只能输入数字',
            creditcard: '请输入有效的信用卡号码',
            equalTo: '你的输入不相同',
            extension: '请输入有效的后缀',
            maxlength: $.validator.format('最多可以输入 {0} 个字符'),
            minlength: $.validator.format('最少要输入 {0} 个字符'),
            rangelength: $.validator.format('请输入长度在 {0} 到 {1} 之间的字符串'),
            range: $.validator.format('请输入范围在 {0} 到 {1} 之间的数值'),
            step: $.validator.format('请输入 {0} 的整数倍值'),
            max: $.validator.format('请输入不大于 {0} 的数值'),
            min: $.validator.format('请输入不小于 {0} 的数值'),
            telMinLength: '请填写有效的电话号码。',
            telMaxLength: '请填写有效的电话号码。',
            pattern: '此内容无效。'
        }

        /*
         * Locale: ZH (Chinese; 中文 (Zhōngwén), 汉语, 漢語)
         * Region: TW (Taiwan)
         */
        locale.zh_TW = {
            required: '請輸入內容。',
            remote: '請修正此欄位',
            email: '請輸入有效的電子郵件。',
            url: '請輸入有效的網址',
            date: '請輸入有效的日期',
            dateISO: '請輸入有效的日期 (YYYY-MM-DD)',
            number: '請輸入正確的數值',
            digits: '只可輸入數字',
            creditcard: '請輸入有效的信用卡號碼',
            equalTo: '請重複輸入一次',
            extension: '請輸入有效的後綴',
            maxlength: $.validator.format('最多 {0} 個字'),
            minlength: $.validator.format('最少 {0} 個字'),
            rangelength: $.validator.format('請輸入長度為 {0} 至 {1} 之間的字串'),
            range: $.validator.format('請輸入 {0} 至 {1} 之間的數值'),
            step: $.validator.format('請輸入 {0} 的整數倍值'),
            max: $.validator.format('請輸入不大於 {0} 的數值'),
            min: $.validator.format('請輸入不小於 {0} 的數值'),
            telMinLength: $.validator.format('電話號碼至少應包含{0}位數字'),
            pattern: '此內容無效。'
        }

        /**
         * @param { string } langCode
         * @param { {} } localeStrings
         * */
        JQValidatorLocalization.addLocale = function(langCode, localeStrings) {
            var code = getLangCode(langCode);
            var currentLocaleStrings = JQValidatorLocalization.locales[code] || {};

            JQValidatorLocalization.locales[code] = Object.assign(currentLocaleStrings, localeStrings);

            return JQValidatorLocalization.locales[code];
        }

        /**
         * @param { string } lang
         * @returns { string }
         * */
        JQValidatorLocalization.getLangCode = function(lang) {

            if (typeof lang !== 'string' || lang === '') {
                window.console.error('Invalid lang key', lang, );
            }

            var langCode = getLangCode(lang);
            var langKey = 'en';
            Object.keys(JQValidatorLocalization.locales).forEach(function(localeKey) {

                if (localeKey === langCode) {
                    langKey = localeKey;
                    return false;
                }

            });

            return langKey;
        }

        /**
         * @param { string } lang
         * @returns { {} }
         * */
        JQValidatorLocalization.getLocaleStrings = function(lang) {
            var code = JQValidatorLocalization.getLangCode(lang);
            return JQValidatorLocalization.locales[code];
        }

        /**
         * @param { string } lang
         * @param { {} } overrideMessages
         * */
        JQValidatorLocalization.localize = function(lang, overrideMessages) {

            //en_us is default messages language
            if (lang && !['en', 'en_us'].includes(lang)) {
                var localeStrings = JQValidatorLocalization.getLocaleStrings(lang);
                $.extend($.validator.messages, localeStrings);
            }

            if ($.isPlainObject(overrideMessages) && !$.isEmptyObject(overrideMessages)) {
                $.extend($.validator.messages, overrideMessages);
            }

        }

        mapLocales();
    }
}