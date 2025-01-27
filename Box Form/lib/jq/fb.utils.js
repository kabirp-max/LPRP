window.initPull = {}

function getFbRootElement() {
    return window.document.getElementById('fb-root');
}

function getFbRoot() {
    return $('#fb-root').first();
}

function getSubmit($rootNode) {
    var $submit = $rootNode.find('[type=submit]');
    if (!$submit.length) {
        $submit = $('<input type="submit" style="display: none" data-fb-autosubmit="1">');
        $rootNode.find('form').append($submit);
    }
    return $submit;
}

/**
 * @param {Array} optionalNames
 * @returns {string}
 * */
function getOptionalChildrenSelector(optionalNames) {
    var childrenSelector = [];
    optionalNames.forEach(function(name) {
        name && (childrenSelector.push('[name="' + name + '"]'));
    });
    return childrenSelector.join(',');
}

/**
 * @param {Array} elements
 * @returns {Array}
 * */
function getOptionalNames(elements) {
    var selected = [];
    elements.forEach(function(element) {
        if (!element.dataset.fbOptional) {
            return;
        }
        element.dataset.fbOptional.split(',').forEach(function(name) {
            name && selected.push(name);
        });
    });
    return selected;
}

if (typeof window.fbForm === 'undefined') {
    window.fbForm = {
        params: {
            isValid: function isValid(value) {
                return value && (!isNaN(Number(value.trim())) || value.split(',').every(function(item) {
                    return !isNaN(Number(item.trim()));
                }));
            },
            get: function get(value) {
                return !isNaN(Number(value)) ? [value] : value.split(',');
            }
        },
        input: {
            select: function select(paramValue, inputs) {
                var $options = $(inputs).first().find('option').filter(function(i, item) {
                    return !!$(item).val();
                });
                $options.removeAttr('selected');
                $($options.get(fbForm.params.get(paramValue)[0] - 1)).attr('selected', true);
            },
            radio: function radio(paramValue, inputs) {
                if (paramValue === '') {
                    return;
                }

                var $radios = $(inputs);
                $radios.prop('checked', false);
                $($radios.get(fbForm.params.get(paramValue)[0] - 1)).prop('checked', true);
            },
            checkbox: function checkbox(paramValue, inputs) {
                if (paramValue === '') {
                    return;
                }

                var $checkboxes = $(inputs);
                $checkboxes.prop('checked', false);
                fbForm.params.get(paramValue).map(function(i) {
                    return i - 1;
                }).forEach(function(i) {
                    $($checkboxes.get(i)).prop('checked', true);
                });
            },
            isChecked: {
                radio: function radio($radio) {
                    var check = true;
                    $radio.each(function() {
                        if (getFbRoot().find('[name="' + $(this).attr('name') + '"]:checked').length !== 1) {
                            check = false;
                        }
                    });
                    return check;
                },
                checkbox: function checkbox($checkbox) {
                    var check = true;
                    $checkbox.each(function() {
                        if (!getFbRoot().find('[name="' + $(this).attr('name') + '"]:checked').length) {
                            check = false;
                        }
                    });
                    return check;
                }
            }
        },
        //requires validation
        isFilledInput: function($input) {
            if ($input.is(':radio')) {
                return fbForm.input.isChecked.radio($input);
            } else if ($input.is(':checkbox')) {
                return fbForm.input.isChecked.checkbox($input);
            } else {
                return $input.valid();
            }
        },
        canSubmit: function($form, ignoreNotRequired, ignoreHidden) {
            var $formInputs = $form.find(':input:not([type=submit])');
            ignoreNotRequired && ($formInputs = $formInputs.filter('[required]'));
            ignoreHidden && ($formInputs = $formInputs.not(':hidden'));

            if (!$formInputs.length) {
                return true;
            }

            if ($formInputs.filter('.input-other').length) {
                return false;
            }

            var canSubmit = true;
            $formInputs.each(function(i, item) {
                return (canSubmit = fbForm.isFilledInput($(item)));
            });
            return canSubmit;
        }
    }
}

if (typeof window.fbSlider === 'undefined') {
    window.fbSlider = {
        canPrev: true,
        ignoreValidation: false,
        root: '',
        pages: '',
        nav: {
            next: '',
            prev: '',
            submit: ''
        },
        currentPage: 0,
        totalPages: 0,
        firstPage: 0,
        lastPage: 0,
        progressBar: {
            hooks: {},
            firstPage: 0,
            container: null,
            progress: {
                container: null,
                fill: null
            },
            counter: {
                total: null,
                current: null,
                container: null,
            },
            setup: function(current, total) {
                fbSlider.progressBar.container = document.querySelector('.fb-node-progress');
                if (!fbSlider.progressBar.container) {
                    return;
                }
                fbSlider.progressBar.progress.container = document.querySelector('.fb-node-progress-bar');
                fbSlider.progressBar.progress.fill = document.querySelector('.fb-node-progress-bar .fb-node-progress-fill');
                fbSlider.progressBar.counter.container = document.querySelector('.fb-node-counter');
                fbSlider.progressBar.counter.current = document.querySelector('.fb-node-counter .counter-current-step');
                fbSlider.progressBar.counter.total = document.querySelector('.fb-node-counter .counter-total-steps');
                fbSlider.progressBar.firstPage = (parseInt(fbSlider.progressBar.container.dataset.fbFirstPage) || fbSlider.firstPage) + 1;
                var isSetupCustomized = typeof fbSlider.progressBar.hooks.afterSetup === 'function';
                if (typeof fbSlider.progressBar.hooks.beforeSetup === 'function') {
                    fbSlider.progressBar.hooks.beforeSetup(current, total);
                }
                try {
                    fbSlider.progressBar.update();
                } catch (e) {
                    !isSetupCustomized && console.warn('Progress bar run into issues. Custom code is required!');
                }
                if (isSetupCustomized) {
                    fbSlider.progressBar.hooks.afterSetup(current, total);
                }
            },
            update: function() {
                if (!fbSlider.progressBar.container) {
                    return;
                }
                var totalPages = (fbSlider.totalPages - fbSlider.progressBar.firstPage + 1) || 1;
                var currentPage = Math.min(
                    totalPages,
                    Math.max(
                        fbSlider.progressBar.firstPage,
                        fbSlider.currentPage - fbSlider.progressBar.firstPage + 2
                    )
                );
                var singleStep = Math.round(10000 / totalPages) / 100;
                fbSlider.progressBar.setFill(singleStep * currentPage);
                fbSlider.progressBar.setCounter(currentPage, totalPages);
                if (fbSlider.progressBar.firstPage <= currentPage) {
                    fbSlider.progressBar.container.classList.remove('progress-is-hidden');
                } else {
                    fbSlider.progressBar.container.classList.add('progress-is-hidden');
                }
            },
            setFill: function(value) {
                if (!fbSlider.progressBar.progress.fill) {
                    return;
                }
                fbSlider.progressBar.progress.fill.style.width = value + '%';
                if (typeof fbSlider.progressBar.hooks.setFill === 'function') {
                    fbSlider.progressBar.hooks.setFill(value);
                }
            },
            setCounter: function(current, total) {
                if (!fbSlider.progressBar.counter.current) {
                    return;
                }
                fbSlider.progressBar.counter.current.innerHTML = current;
                fbSlider.progressBar.counter.total.innerHTML = total;
                if (typeof fbSlider.progressBar.hooks.setCounter === 'function') {
                    fbSlider.progressBar.hooks.setCounter(current, total);
                }
            }
        },
        indexPages: function() {
            this.totalPages = this.pages.length;
            this.lastPage = this.totalPages - 1;
        },
        /**
         * second parameter expects callback = { beforeSet: function, afterSet: function }
         * use callbacks to customize setPage logic
         * */
        setPage: function(val, callback) {
            if (callback && typeof callback.beforeSet == 'function') {
                if (callback.beforeSet(val) === false) {
                    return false;
                }
            }
            var pageNum = fbSlider.parsePageNum(val);
            var pageToShow = this.pages.eq(pageNum);
            var pagesToHide = this.pages.not(pageToShow);
            pageToShow.show();
            pagesToHide.hide();
            fbSlider.currentPage = pageNum;
            this.updateNavBar();
            if (callback && typeof callback.afterSet == 'function') {
                callback.afterSet(val);
            }
            fbSlider.progressBar.update();
        },
        parsePageNum: function(value) {
            return Math.max(0, Math.min(this.lastPage, Math.floor(value)));
        },
        nextPage: function(e) {
            e.preventDefault();
            var $inputs = fbSlider.pages.eq(fbSlider.currentPage).find(':input');
            var disqualified = false;
            $inputs.filter(':checked').each(function(index, input) {
                if (parseInt($(input).attr('data-fb-disqualified'), 10) === 1) {
                    disqualified = true;
                    return false;
                }
            });
            if (disqualified) {
                fbSlider.disqualified(e);
                return;
            }
            var page = fbSlider.parsePageNum(fbSlider.currentPage + 1);
            if (page !== fbSlider.currentPage &&
                (fbSlider.ignoreValidation || $inputs.valid())
            ) {
                fbSlider.setPage(page);
            }
        },
        prevPage: function(e) {
            e.preventDefault();
            var page = fbSlider.parsePageNum(fbSlider.currentPage - 1);
            if (page !== fbSlider.currentPage) {
                fbSlider.setPage(page);
            }
        },
        submitForm: function(e) {
            e.preventDefault();
            var $inputs = fbSlider.pages.find(':input');
            /*var disqualified = false;
            $inputs.filter(':checked').each(function (index, input) {
                if(parseInt($(input).attr('data-fb-disqualified'), 10) === 1) {
                    disqualified = true;
                    return false;
                }
            });*/
            var $submit = getSubmit(fbSlider.root);
            if (!$submit.length) {
                $submit = $('<input style="display: none;" type="submit" class="btn btn-primary" value="Submit">');
                fbSlider.root.find('form').first().append(
                    $submit
                );
            }
            if (fbSlider.ignoreValidation) {
                $inputs.not(':checked').each(function(index, input) {
                    if (!$(input).valid()) {
                        $(input).remove();
                    }
                });
            }
            $submit.click();
        },
        updateNavBar: function() {
            switch (this.currentPage) {
                case 0:
                    this.nav.submit.hide();
                    this.nav.next.show();
                    this.nav.prev.hide();
                    break;
                case this.lastPage:
                    this.nav.submit.show();
                    this.nav.next.hide();
                    if (this.canPrev) {
                        this.nav.prev.show();
                    }
                    break;
                default:
                    this.nav.submit.hide();
                    this.nav.next.show();
                    if (this.canPrev) {
                        this.nav.prev.show();
                    }
                    break;
            }
        },
        init: function(config, callback) {
            var configIsObject = typeof config === 'object';
            this.root = configIsObject && config.root ? config.root : getFbRoot();
            this.pages = configIsObject && config.pages ? config.pages : this.root.find('.fb-node-page');
            this.nav.submit = configIsObject && config.nav.submit ? config.nav.submit : this.root.find('.fb-node-page-nav .fb-controls.submit');
            this.nav.prev = configIsObject && config.nav.prev ? config.nav.prev : this.root.find('.fb-node-page-nav .fb-controls.prev');
            this.nav.next = configIsObject && config.nav.next ? config.nav.next : this.root.find('.fb-node-page-nav .fb-controls.next');

            if (typeof config === 'function') {
                config();
            }

            this.indexPages();
            if (this.nav.prev.length) {
                this.nav.prev.click(this.prevPage);
            }
            if (this.nav.next.length) {
                this.nav.next.click(this.nextPage);
            }
            if (this.nav.submit.length) {
                this.nav.submit.click(this.submitForm);
            }

            //Handle auto progress
            if (!this.nav.next.length) {
                !this.pages.find(':input').not('[type=submit]').change(function(e) {
                    if (fbSlider.currentPage === fbSlider.lastPage && !fbSlider.nav.submit) {
                        fbSlider.submitForm(e);
                    } else {
                        fbSlider.nextPage(e);
                    }
                });
            }

            if (typeof callback === 'function') {
                callback();
            }

            fbSlider.progressBar.setup(fbSlider.currentPage + 1, fbSlider.totalPages);
            return this;
        },
        disqualified: function(e) {
            this.ignoreValidation = true;
            this.submitForm(e);
        }
    }
}

if (typeof window.fbValidation === 'undefined') {
    window.fbValidation = {
        charMap: {
            'ko': ['korean'],
            'ar': ['arabic'],
            'ru': ['cyrylic'],
            'uk': ['cyrylic', 'cyrylicUk'],
            'zh': ['latin', 'chinese'],
            'zh_tw': ['latin', 'chinese'],
            'zh_cn': ['latin', 'chinese'],
            'fr': ['latin', 'french'],
            'fr-fr': ['latin', 'french'],
            'de': ['latin', 'german'],
            'en_us': ['latin'],
            'en': ['latin'],
            'es': ['latin', 'spanish'],
            'es-es': ['latin', 'spanish'],
            'ja': ['japanese'],
            'ja-jp': ['japanese'],
            'cs': ['latin', 'czech'],
            'cz': ['latin', 'czech'],
            'da': ['latin', 'danish'],
            'nl': ['latin', 'dutch'],
            'nl-nl': ['latin', 'dutch'],
            'fi': ['latin', 'finnish'],
            'sv': ['latin', 'swedish'],
            'sv-se': ['latin', 'swedish'],
            'he': ['latin', 'hebrew'],
            'he-il': ['latin', 'hebrew']
        },
        langSymbols: {
            japanese: '一-龠ぁ-ゔァ-ヴー々〆〤',
            latin: 'a-zA-Zａ-ｚＡ-Ｚ',
            cyrylic: 'А-Яа-я',
            cyrylicUk: 'ҐІЇЄґіїє',
            korean: '\u3131-\uD79D',
            arabic: '\u0600-\u06FF',
            french: 'ÉéÂâÊêÎîÔôÛûÀàÈèÙùËëÏïÜüŸÿÇçÆæŒœ',
            german: 'ÄäÖöÜüß',
            chinese: '\u3000\u3400-\u4DBF\u4E00-\u9FFF',
            hebrew: '\u0590-\u05fe',
            czech: 'ěščřžýáíéóúůďťňĎŇŤŠČŘŽÝÁÍÉÚŮĚÓ',
            danish: 'ÆæØøÅå',
            dutch: 'áéíóúàèëïöüĳÁÉÍÓÚÀÈËÏÖÜĲ',
            finnish: 'ÄäÖöÅåŠšŽž',
            swedish: 'ÅåÄäÖö',
            spanish: 'áéíóúñÁÉÍÓÚÑ'
        },
        getLangSymbols: function(locales) {
            locales = locales.filter(function(val, index, self) {
                return self.indexOf(val) === index;
            });
            var selectedLangKeys = [];
            ((function(locales) {
                if (Array.isArray(locales)) {
                    return locales;
                }
                if (typeof locales === 'string') {
                    return locales.split(',')
                        .map(function(locale) {
                            return locale.trim();
                        })
                        .filter(function(locale) {
                            return !!locale;
                        });
                }
                return ['en'];
            })(locales)).forEach(function(locale) {
                if (Object.keys(fbValidation.charMap).includes(locale)) {
                    selectedLangKeys = selectedLangKeys.concat(fbValidation.charMap[locale]);
                }
            });

            return (selectedLangKeys.length ? selectedLangKeys : Object.keys(fbValidation.langSymbols))
                .map(function(key) {
                    return fbValidation.langSymbols[key];
                }).join('');
        },
        getOverriddenPattern: function(locales) {
            var includedLangSymbols = fbValidation.getLangSymbols(locales);
            var param = '^[' + includedLangSymbols + ']{1}[' + includedLangSymbols + '.\\-\'\\s]*$';
            return new RegExp('^(?:' + param + ')$', 'g');
        },
        /* If this rules are changed please update accordingly at jquery.chatbot.js -> validateInput */
        overrideNameInputPattern: function(locales) {
            $.validator.addMethod('pattern', function(value, element, param) {
                if (this.optional(element)) {
                    return true;
                }

                /**Forced pattern override for Name inputs**/
                if ($(element).attr('data-fb-type') === 'name') {
                    param = fbValidation.getOverriddenPattern(locales);
                }

                if (typeof param === 'string') {
                    param = new RegExp('^(?:' + param + ')$', 'g');
                }

                return param.test(value);
            }, 'Invalid format.');
        }
    }
}

if (typeof window.initPull.CQNoneOption !== 'function') {
    window.initPull.CQNoneOption = function() {
        var $root = getFbRoot();
        var $noneOptions = $root.find(':input[data-fb-none]');
        var root = getFbRootElement();

        $noneOptions.change(function(event) {
            var $input = $(event.currentTarget);
            if (parseInt($input.attr('data-fb-none')) === 1) {
                var inputName = $input.attr('name');
                var isChecked = $input.is(':checked');
                var $siblingInputs = $root.find(':input[name="' + inputName + '"]').not($input);
                $siblingInputs.prop('disabled', isChecked);

                disableSubFields(inputName, isChecked, $input);
            }
        });

        function disableSubFields(inputName, isChecked, $input) {
            var $optionalInputs = $root.find(':input[name="' + inputName + '"][data-fb-optional]');
            var $otherInputs = $root.find(':input[name="' + inputName + '"][data-fb-other]');
            if ($input) {
                $optionalInputs = $optionalInputs.not($input);
                $otherInputs = $otherInputs.not($input);
            }

            $optionalInputs.each(function() {
                if (this.checked) {
                    var optionalNames = getOptionalNames([this]);
                    var optionalChildrenSelector = getOptionalChildrenSelector(optionalNames);
                    var optionalChildren = root.querySelectorAll(optionalChildrenSelector);
                    for (var i = 0; i < optionalNames.length; i++) {
                        disableSubFields(optionalNames[i], isChecked);
                    }
                    updateDisabledAfterNone(optionalChildren, isChecked);
                }
            });

            $otherInputs.each(function() {
                if (this.checked) {
                    var otherChildren = root.querySelectorAll('[name="' + inputName + '-other"]');
                    updateDisabledAfterNone(otherChildren, isChecked);
                }
            });
        }

        function updateDisabledAfterNone(elements, isDisable) {
            elements.forEach(function(element) {
                var disabilityDepth = element.disabilityDepth || 0;
                if (isDisable) {
                    if (!disabilityDepth) {
                        element.wasDisabledBeforeNone = element.disabled;
                    }
                    element.disabilityDepth = disabilityDepth + 1;
                    element.disabled = true;
                } else {
                    if (disabilityDepth) {
                        disabilityDepth--;
                        element.disabilityDepth = disabilityDepth;
                    }

                    if (!disabilityDepth) {
                        element.disabled = element.wasDisabledBeforeNone;
                        element.wasDisabledBeforeNone = false;
                    }
                }
            });
        }
    }
}

if (typeof window.initPull.fbOptional !== 'function') {
    window.initPull.fbOptional = function() {
        var root = getFbRootElement();
        var masterElements = root.querySelectorAll('[data-fb-optional]');
        /**
         * @param {Element} element
         * */
        masterElements.forEach(function(element) {
            element.tagName === 'OPTION' ?
                listenToSelect(element.parentNode) :
                listenToInputs(Array.from(root.querySelectorAll('[name="' + element.name + '"]')));
        });

        function listenToSelect(master) {
            var optionalNames = getOptionalNames(Array.from(master.options));
            var selector = getOptionalChildrenSelector(optionalNames);
            var children = root.querySelectorAll(selector);


            children.forEach(hideOptionalElement);

            function handler() {
                var selected = getOptionalNames(Array.from(master.selectedOptions));
                children.forEach(function(child) {
                    selected.includes(child.name) ?
                        showOptionalElement(child) :
                        hideOptionalElement(child);
                });
            }

            $(master).on('change', handler);

            initPull.fbOptional.hooks.listenToSelect.forEach(function(hook) {
                typeof hook === 'function' && hook(children, [master]);
            });
        }

        function listenToInputs(masters) {
            var optionalNames = getOptionalNames(masters);
            var selector = getOptionalChildrenSelector(optionalNames);
            var children = root.querySelectorAll(selector);

            children.forEach(hideOptionalElement);

            masters.forEach(function(master) {
                $(master).on('change', function() {
                    var checkedMasters = [];
                    masters.forEach(function(master) {
                        master.checked && checkedMasters.push(master);
                    });
                    var optionalChecked = getOptionalNames(checkedMasters);
                    children.forEach(function(child) {
                        optionalChecked.includes(child.name) ?
                            showOptionalElement(child) :
                            hideOptionalElement(child);
                    });
                });
            })

            initPull.fbOptional.hooks.listenToInputs.forEach(function(hook) {
                typeof hook === 'function' && hook(children, masters);
            });
        }

        function hideOptionalElement(element) {

            if (typeof element.isFbRequired === 'undefined') {
                element.isFbRequired = element.required;
            }

            element.closest('.fb-node').style.display = 'none';
            element.required = false;
            initPull.fbOptional.hooks.hideOptionalElement.forEach(function(hook) {
                typeof hook === 'function' && hook(element);
            });
        }

        function showOptionalElement(element) {
            element.closest('.fb-node').style.display = null;
            element.required = element.isFbRequired;
            initPull.fbOptional.hooks.showOptionalElement.forEach(function(hook) {
                typeof hook === 'function' && hook(element);
            });
        }
    }

    window.initPull.fbOptional.hooks = {
        hideOptionalElement: [],
        showOptionalElement: [],
        listenToSelect: [],
        listenToInputs: [],
    }
}

if (typeof window.initPull.fbConditional !== 'function') {
    window.initPull.fbConditional = function() {
        var root = getFbRootElement();
        var $root = getFbRoot();
        var $conditionalElements = $root.find('[data-fb-conditional="1"]');
        var conditionsMap = {};

        $conditionalElements.each(function() {
            var conditionsData = {
                selector: '#' + this.id,
                type: +this.dataset.fbConditionalType,
                values: (this.dataset.fbConditionalValues || '').split(','),
            };

            hideConditionalElement(this);

            var parentFieldNames = (this.dataset.fbConditionalParentField || '').split(',');
            parentFieldNames.forEach(function(parentFieldName) {
                conditionsMap[parentFieldName] = conditionsMap[parentFieldName] || [];
                conditionsMap[parentFieldName].push(conditionsData);
            });
        });

        Object.keys(conditionsMap).forEach(function(parentFieldName) {
            var $input = $root.find('[name="' + parentFieldName + '"]');
            $input.on('change', function() {
                onChangeHandler(this);
            });
        });

        function onChangeHandler(element) {
            var value = $(element).val();
            var conditions = conditionsMap[element.name];
            if (!conditions) {
                return;
            }

            conditions.forEach(function(condition) {
                var conditionalInput = root.querySelector(condition.selector);
                var isVisible = (condition.type === 1) === !condition.values.includes(value);
                if (isVisible) {
                    showConditionalElement(conditionalInput);
                } else {
                    hideConditionalElement(conditionalInput);
                }
            });
        }

        function showConditionalElement(element) {
            element.closest('.fb-node').style.display = null;
            element.required = element.isFbRequired;

            initPull.fbConditional.hooks.showConditionalElement.forEach(function(hook) {
                typeof hook === 'function' && hook(element);
            });
        }

        function hideConditionalElement(element) {
            if (typeof element.isFbRequired === 'undefined') {
                element.isFbRequired = element.required;
            }

            element.closest('.fb-node').style.display = 'none';
            element.required = false;

            initPull.fbConditional.hooks.hideConditionalElement.forEach(function(hook) {
                typeof hook === 'function' && hook(element);
            });
        }
    }

    window.initPull.fbConditional.hooks = {
        hideConditionalElement: [],
        showConditionalElement: [],
    };
}

if (typeof window.initPull.fbFvIcon !== 'function') {
    window.initPull.fbFvIcon = function() {
        document.head = document.head || document.getElementsByTagName('head')[0];
        initPull.fbFvIcon.changeFavicon = function(src) {
            var link = document.createElement('link'),
                oldLink = document.getElementById('dynamic-favicon');
            link.id = 'dynamic-favicon';
            link.rel = 'shortcut icon';
            link.href = src;
            if (oldLink) {
                document.head.removeChild(oldLink);
            }
            document.head.appendChild(link);
        }
    }
}

if (typeof window.initPull.fbSmartAddress !== 'function') {
    if (typeof window.LPGoogleMapApiAutocompleteUserConfig === 'undefined') {
        window.LPGoogleMapApiAutocompleteUserConfig = {};
    }
    window.initAutoComplete = null;
    window.fillInAddress = null;
    window.geolocate = null;
    window.placeSearch = null;

    window.prepareLPAddressAutocomplete = function(config) {
        var autocomplete = null;
        var defaultConfig = {
            componentForm: {
                street_number: 'short_name',
                route: 'long_name',
                locality: 'long_name',
                administrative_area_level_1: 'short_name',
                country: 'long_name',
                postal_code: 'short_name',
            },
            fieldSelectors: [
                ':input[name="smart_address"]',
                ':input[data-fb-type="smart_address"]',
                ':input.smart-address-input',
            ],
            apiKey: 'AIzaSyA_qYJOTGfkODSqc1BqP4y6-56264djNhc'
        };

        if (Boolean(config) && Boolean(config.fieldSelectors)) {
            if (!Array.isArray(config.fieldSelectors)) {
                console.warn('FB Smart Address: field selectors must be placed into an array');
            } else if (config.fieldSelectors.length > 0) {
                config.fieldSelectors.forEach(function(selector) {
                    defaultConfig.fieldSelectors.push(selector);
                });
            }
            delete config.fieldSelectors;
        }

        var autocompleteConfig = Object.assign(defaultConfig, config || {});

        var $fbRoot = getFbRoot();
        var $autocompleteField = $fbRoot.find(autocompleteConfig.fieldSelectors.join(', ')).first();
        if (!$autocompleteField.length) {
            return null;
        }

        var $autocompleteFieldParentContainer = $autocompleteField.parent();

        [
            'street_number',
            'route',
            'locality',
            'administrative_area_level_1',
            'postal_code',
            'country',
        ].forEach(function(id) {
            if (!$fbRoot.find('#' + id).length) {
                $autocompleteFieldParentContainer.append('<input type="hidden" id="' + id + '" name="address_' + id + '">');
            }
        });

        window.initAutoComplete = function() {
            // Create the autocomplete object, restricting the search to geographical
            // location types.
            autocomplete = new google.maps.places.Autocomplete(
                $autocompleteField.get(0), {
                    types: ['geocode']
                }
            );
            // When the user selects an address from the dropdown, populate the address
            // fields in the form.
            autocomplete.addListener('place_changed', window.fillInAddress);
        }

        window.fillInAddress = function() {
            var place = autocomplete.getPlace();
            place.address_components.forEach(function(addressComponent) {
                var addressType = addressComponent.types[0];
                if (autocompleteConfig.componentForm[addressType]) {
                    var val = addressComponent[autocompleteConfig.componentForm[addressType]];
                    //console.log(val);
                    $('#' + addressType).val(val);
                }
            });
        }

        window.geolocate = function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var geolocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    var circle = new google.maps.Circle({
                        center: geolocation,
                        radius: position.coords.accuracy
                    });

                    autocomplete.setBounds(circle.getBounds());
                });
            }
        }

        $('body').append('<script src="https://maps.googleapis.com/maps/api/js?key=' + autocompleteConfig.apiKey + '&libraries=places&callback=window.initAutoComplete" async defer>');

        $autocompleteField.on('keydown', function(e) {
            if (e.which == 13) return false;
            if (e.which == 13) e.preventDefault();
        });
    }

    window.initPull.fbSmartAddress = function() {
        var root = getFbRoot();
        if (!root) {
            return;
        }
        setTimeout(function() {
            window.prepareLPAddressAutocomplete(window.LPGoogleMapApiAutocompleteUserConfig);
        }, 10);
    }
}