/*Use this var to add new symbols to type name inputs*/
if (typeof initPull === 'object') {
    var locales = {
        writable: true,
        values: ['en']
    };
    initPull.Validation = function() {
        var locale = (function() {
            var validatorLang = $('meta[name=validator]').attr('content');
            var pageLang = $('html').attr('lang');
            var pageLocaleValues = pageLang.split('-');
            return ('' + (validatorLang || pageLocaleValues[0])).toLowerCase() || 'en_us';
        })();
        locales.writable && locales.values.push(locale);
        $('#jq-validator-localization').remove();

        $('.submit-btn').removeAttr('disabled'); //Wait for validator to initialize

        setTimeout(function() {
            if (typeof fbValidation === 'object') {
                fbValidation.overrideNameInputPattern(locales.values);
            }

            $.validator.addMethod('telMinLength', function(phone, element, test) {
                return this.optional(element) || phone.length >= test;
            }, $.validator.format('Wrong Phone number length'));

            $.validator.addMethod('telMaxLength', function(phone, element, test) {
                return this.optional(element) || phone.length <= test;
            }, $.validator.format('Wrong Phone number length'));

            //override jquery's default email validation pattern
            $.validator.methods.email = function(value, element) {
                return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            }; //racing conditions work-around


            setTimeout(function() {
                $(':input[type=tel], :input[type=tel]').each(function(i, item) {
                    $(item).rules('add', {
                        telMinLength: 5,
                        telMaxLength: 15
                    });
                });
                if (JQValidatorLocalization && JQValidatorLocalization.localize) {
                    JQValidatorLocalization.localize(locale);
                }
            }, 1); //Inset Timeout
        }, 1); //Outset Timeout
    }
}