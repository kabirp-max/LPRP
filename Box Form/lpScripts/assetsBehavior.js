/* eslint-disable */

var submitFormData = null;
var lpHelpers = {};

$(function() {
    var ASSET_BEHAVIORS = {
        TY: 1,
        IGNORE_SUBMIT: 2,
        NOT_AUTO: 4,
        CQ: 8,
        WITHOUT_ASSETS: 16,
        BEHAVIOR_NOTIFICATIONS: 32,
    };
    var ASSET_TYPES = {
        file: 'file',
        url: 'url'
    };
    var AssetAccessTypes = {
        document: 1,
        video: 2,
        url: 3,
    };
    var assetModeTypes = {
        open: 1,
        download: 2
    };

    if (typeof lpHelpers.parsedUrlToString !== 'function') {
        lpHelpers.parsedUrlToString = function(parsedUrl, callback) {
            var url = parsedUrl.protocol + '://' + parsedUrl.hostname + parsedUrl.path
            return typeof callback === 'function' ? callback(parsedUrl, url) : url;
        }
    }

    if (typeof lpHelpers.downloadAsset !== 'function') {
        lpHelpers.downloadAsset = function(asset, assetId) {
            var frameId = 'download-asset-frame-' + assetId;
            var $iframe = $('<iframe id="' + frameId + '" width="1" height="1" frameborder="0" style="display: none;" src="' + asset.uri.toString() + '"></iframe>');
            var $body = $('body');
            $body.find('#' + frameId).remove();
            $body.append($iframe);
        };
    }

    if (typeof lpHelpers.openAsset !== 'function') {
        lpHelpers.openAsset = function(asset, assetId) {
            var _target = getIsIgnoreForm(asset.original.behavior) ? '_blank' : '_self';
            window.open(asset.uri.toString(), _target);
        };
    }

    if (typeof lpHelpers.getAssets !== 'function') {
        lpHelpers.getAssets = function(lp, isBeforeSubmit) {
            var openAssets = [];
            lp.assetsMap.forEach(function(asset, assetId) {
                if (assetId && lp.behavior.showAsset && !lp.isModeFile) {
                    if (asset.original.behavior.assetModeTypeId === assetModeTypes.download) {
                        getSingleAssetIfAllowed(lp, assetId, lpHelpers.downloadAsset, isBeforeSubmit);
                    } else {
                        openAssets.push({
                            asset: asset,
                            id: assetId
                        });
                    }
                }
            });
            if (openAssets.length) {
                openAssets.forEach(function(openAsset) {
                    getSingleAssetIfAllowed(lp, openAsset.id, lpHelpers.openAsset, isBeforeSubmit);
                });
            } else if (window.isSubmitByCqParams) {
                lp.closeTabTimeOut && clearTimeout(lp.closeTabTimeOut);
                var closeDelay = lp.behavior.delay ? (lp.behavior.delay + 1) : 0.01;
                lp.closeTabTimeOut = setTimeout(
                    function() {
                        if (!isIE() || isIE() === 12) {
                            $('body').trigger('asset:closeTab');
                        } else {
                            document.body.outerHTML = '';
                        }
                    },
                    closeDelay * 1000
                );
            }
        };
    }

    if (typeof lpHelpers.getLpSettings !== 'function') {
        lpHelpers.getLpSettings = function() {
            var parsedUrl = URI.parse(window.location.href.replace(/&amp;/g, '&'));
            var $lpHelperBlock = $('#lp-helper-block'),
                lpBehavior = $lpHelperBlock.data('behavior'),
                lpDelay = $lpHelperBlock.data('delay'),
                tyUri = $lpHelperBlock.data('ty-uri') || '',
                pathName = parsedUrl.path,
                assetId = getAssetIdFromPath(pathName),
                isAssetInUrl = Boolean(assetId),
                assetsData = $lpHelperBlock.data('assets') || {};
            var isGetAllAssetsOnSubmit = Boolean($lpHelperBlock.data('all-assets-on-submit'));

            var assetIds = (function() {
                if (assetId) {
                    return [assetId];
                }

                var keys = Object.keys(assetsData);
                assetId = keys[0];

                return isGetAllAssetsOnSubmit ? keys : [assetId];
            })();

            var asset = assetsData[assetId];
            var assetDataBehavior = asset ? asset.behavior : null;

            var lpSettings = {
                behavior: {
                    showTyp: assetDataBehavior ?
                        assetDataBehavior.showTyp :
                        Boolean(lpBehavior & ASSET_BEHAVIORS.TY),
                    showAsset: assetDataBehavior ?
                        assetDataBehavior.showAsset :
                        !(lpBehavior & ASSET_BEHAVIORS.WITHOUT_ASSETS),
                    ignoreForm: assetDataBehavior ?
                        assetDataBehavior.ignoreForm :
                        Boolean(lpBehavior & ASSET_BEHAVIORS.IGNORE_SUBMIT),
                    openWithoutCq: assetDataBehavior ?
                        assetDataBehavior.openWithoutCq :
                        Boolean(lpBehavior & ASSET_BEHAVIORS.CQ),
                    delay: (assetDataBehavior && assetDataBehavior.delay) || lpDelay || 0.01,
                    notifications: Boolean(lpBehavior & ASSET_BEHAVIORS.BEHAVIOR_NOTIFICATIONS),
                },
                assetId: assetId,
                tyUri: tyUri,
                isAssetInUrl: isAssetInUrl,
                closeTabTimeOut: null,
            }
            lpSettings.emptyBehavior = assetDataBehavior ?
                (!assetDataBehavior.showTyp &&
                    !assetDataBehavior.showAsset &&
                    !assetDataBehavior.ignoreForm &&
                    !assetDataBehavior.openWithoutCq
                ) :
                lpBehavior === 0;

            lpSettings.isModeFile = (function(url) {
                var query = URI.parseQuery(url.query);
                return query && query.mode && (query.mode + '').toLowerCase() === 'file';
            })(parsedUrl);

            if (!isAssetInUrl) {
                parsedUrl.path = setAssetIdToPath(parsedUrl.path, assetId);
            }

            lpSettings.parsedUrl = parsedUrl;


            var assetsMap = new Map;
            assetIds.forEach(function(id) {
                if (!id) {
                    return;
                }
                var data = assetsData[id];
                var assetType = data.contentType || null;
                var isURLAsset = (assetType + '').toLowerCase() === ASSET_TYPES.url;
                var isVideoAsset = getAssetAccessType(data) === AssetAccessTypes.video;
                var assetUri = new URI(lpHelpers.parsedUrlToString(parsedUrl));
                assetUri.path(setAssetIdToPath(assetUri.path(), id));
                var assetState = lpHelpers.pageState.get(id);
                assetsMap.set(id, ({
                    original: data,
                    uri: assetUri,
                    isURL: isURLAsset,
                    isVideo: isVideoAsset,
                    timeout: null,
                    type: assetType,
                    assetState: assetState || {},
                    isDownloaded: false,
                    behavior: {
                        delay: isGetAllAssetsOnSubmit && data.behavior.assetModeTypeId === assetModeTypes.open ?
                            parseFloat(lpSettings.behavior.delay) + 5 :
                            lpSettings.behavior.delay
                    }
                }));
            });

            lpSettings.assetsMap = assetsMap;

            return lpSettings;
        }
    }

    if (typeof lpHelpers.pageState.get !== 'function') {
        lpHelpers.pageState.get = function(id) {
            var storedAssetState = lpHelpers.pageState._.getStorage().getItem(id);
            return storedAssetState ? JSON.parse(storedAssetState) : {};
        }
    }

    if (typeof lpHelpers.pageState.set !== 'function') {
        lpHelpers.pageState.set = function(id, state) {

            if (typeof state != 'object') {
                state = {
                    state: state
                };
            }

            lpHelpers.pageState._.getStorage().setItem(id, JSON.stringify(state));
        }
    }

    if (typeof lpHelpers.pageState.assign !== 'function') {
        lpHelpers.pageState.assign = function(id, newState) {
            var oldState = lpHelpers.pageState.get(id);
            lpHelpers.pageState.set(id, Object.assign(oldState, newState));
        }
    }

    if (typeof lpHelpers.close !== 'function') {
        lpHelpers.close = function(lp) {
            var thisPageUrl = lpHelpers.parsedUrlToString(lp.parsedUrl);
            if (assetWasDownloadedOn(lp.assetId, thisPageUrl)) {
                window.close();
            } else {
                var closePageTO = null;
                $('body').on('asset:onUpload', function(e, data) {
                    var asset = data.asset;
                    var delay = asset ? (asset.behavior.delay * 1000) : 1000;
                    closePageTO = setTimeout(function() {
                        clearTimeout(closePageTO);
                        window.close();
                    }, delay);
                });
            }
        }
    }

    function getSingleAsset(asset, assetId, getMethod, lp) {
        if (assetId) {
            asset.timeout && clearTimeout(asset.timeout);
            asset.timeout = setTimeout(function() {
                var ts = Date.now();
                asset.uri.setQuery('mode', 'file');
                asset.uri.setQuery('t', ts);
                typeof getMethod === 'function' && getMethod(asset, assetId, lp);
                $('body').trigger('asset:onUpload', {
                    asset: asset
                });
                logAssetDownload(assetId, lp, ts);
                asset.downloaded = true;
            }, asset.behavior.delay * 1000);
        }
    }

    function logAsset(assetId, lp, log) {
        var assetState = lpHelpers.pageState.get(assetId) || {};
        assetState.downloads = assetState.downloads || {};
        var url = lpHelpers.parsedUrlToString(lp.parsedUrl);
        assetState.downloads[url] = assetState.downloads[url] || {}
        assetState.downloads[url] = Object.assign(assetState.downloads[url], log);
        lpHelpers.pageState.assign(assetId, assetState);
    }

    function logAssetDownload(assetId, lp, ts, ttl) {
        var downloadTS = ts || Date.now()
        var ttl = ttl || 60 * 1000;
        logAsset(assetId, lp, {
            downloadedAt: downloadTS,
            downloadExpiresAt: downloadTS + ttl,
            location: lp.parsedUrl
        });
    }

    function logPageLoad(lp, ts) {
        ts = ts || Date.now();
        lp.assetsMap.forEach(function(asset, id) {
            logAsset(id, lp, {
                pageLoadTS: ts
            });
        });
    }

    function getAssetDownloadLog(assetId, lp) {
        var assetState = lpHelpers.pageState.get(assetId);
        var url = lpHelpers.parsedUrlToString(lp.parsedUrl);
        return assetState && assetState.downloads && assetState.downloads[url] ? assetState.downloads[url] : {};
    }

    function assetWasDownloadedOn(assetId, url) {
        var assetSate = lpHelpers.pageState.get(assetId);
        return Boolean(
            Object.keys(assetSate.downloads).filter(function(itemUrl) {
                var itemState = assetSate.downloads[itemUrl];
                var isExpired = itemState.downloadExpiresAt && itemState.downloadExpiresAt < Date.now();
                var wasOtherLocation = itemUrl === url
                return itemState.downloadedAt && !isExpired && wasOtherLocation;
            }).length
        );
    }

    function getSingleAssetIfAllowed(lp, assetId, getMethod, isBeforeSubmit) {
        var asset = lp.assetsMap.get(assetId);
        var isIgnoreForm = getIsIgnoreForm(asset.original.behavior);
        var pageHasForm = document.querySelector('form');
        var thisPageUrl = lpHelpers.parsedUrlToString(lp.parsedUrl);

        var canBeDelivered = lp.behavior.showAsset && !lp.isModeFile && !asset.isDownloaded;
        var shouldImmediatelyDeliver = pageHasForm && isIgnoreForm && isBeforeSubmit;
        var shouldDeliverAfterSubmit = pageHasForm && !isBeforeSubmit;
        var shouldDeliverOnPageWithoutForm = !pageHasForm && !isIgnoreForm; //ex.: Thank You page
        var shouldDeliverOnEmptyBehavior = !pageHasForm && (lp.behavior.emptyBehavior || lp.behavior.notifications);

        if (
            canBeDelivered &&
            (
                shouldImmediatelyDeliver ||
                shouldDeliverAfterSubmit ||
                shouldDeliverOnPageWithoutForm ||
                shouldDeliverOnEmptyBehavior
            ) &&
            !assetWasDownloadedOn(assetId, thisPageUrl)
        ) {
            getSingleAsset(asset, assetId, getMethod, lp);
        }
    }

    var lp = lpHelpers.getLpSettings();
    logPageLoad(lp);

    var $form = $('form');

    function getIsIgnoreForm(behavior) {
        return !behavior.openWithoutCq && behavior.ignoreForm;
    }

    var hasForm = Boolean($form.length);
    var isIgnoreForm = getIsIgnoreForm(lp.behavior);

    lpHelpers.getAssets(lp, true);

    if (hasForm) {
        $form.attr('id', 'unique-form-id');
        var $emailOrUidInput = $form.find(':input[name="email_or_uid"]');
        if (!$emailOrUidInput.length) {
            $emailOrUidInput = $('<input type="hidden" name="email_or_uid" form="' + $form.attr('id') + '">');
            $form.append($emailOrUidInput);
        }
        $emailOrUidInput.val(getEmailOrUid(lp.parsedUrl));

        submitFormData = function(formData, onSuccess) {
            const emailTypeField = $form.find(':input[type="email"]');
            const emailValue = emailTypeField ? emailTypeField.val() : '';

            if (emailValue) {
                const email_or_uid_object = formData.find(obj => obj.name === 'email_or_uid');
                if (email_or_uid_object) {
                    email_or_uid_object.value = emailValue;
                }
            }

            if (window.SubmissionStats && window.submissionStats instanceof window.SubmissionStats) {
                formData.push({
                    name: 'stats',
                    value: JSON.stringify(window.submissionStats.getStats())
                });
            }
            var postUri = URI(lp.parsedUrl);
            var postConf = {
                url: postUri.toString(),
                type: 'post',
                data: formData,
                cache: false,
            };
            if (typeof onSuccess === 'function') {
                postConf.success = onSuccess;
            }

            if (!getAssetIdFromPath(postUri.pathname())) {
                return window.console.error('Can not submit form: Asset not found!');
            }

            $.ajax(postConf);
        }

        $form.validate({
            submitHandler: function(form, e) {
                var $emailOrUid = $('input[name="email_or_uid"]');
                if (!$emailOrUid.val()) {
                    var email = $('input[type="email"]').val();
                    if (email) {
                        $emailOrUid.val(email);
                    }
                }
                var formData = $(form).serializeArray().filter(function(item) {
                    return !item.name.includes('submit-fb');
                });
                submitFormData(formData, function() {
                    if (lp.behavior.showTyp) {
                        openTY(lp);
                    } else if (isIgnoreForm) {
                        lpHelpers.close(lp);
                    } else {
                        lpHelpers.getAssets(lp, false);
                    }
                });
            },
            errorPlacement: function(error, element) {
                var $container = $(element).closest('.fb-node');
                var $errorContainer = $container.find('.fb-error-node');
                if ($errorContainer.length) {
                    $errorContainer.html(error);
                } else {
                    $container.append($('<div class="fb-error-node">').append(error));
                }
            },
            highlight: function(element, errorClass) {
                $(element).closest('.fb-node[data-fb-element="wrapper"]')
                    .addClass(errorClass);
            },
            unhighlight: function(element, errorClass) {
                $(element).closest('.fb-node[data-fb-element="wrapper"]')
                    .removeClass(errorClass);
            }
        });

        if (typeof initPull === 'object') {
            [
                initPull.localizeJqValidator,
                initPull.Validation,
                initPull.CQParams,
                initPull.OtherInput,
                initPull.CQNoneOption,
                initPull.AutoSubmit,
                initPull.MultipageSlider,
                initPull.fbOptional,
                initPull.fbConditional,
                initPull.fbSmartAddress,
            ].forEach(function(initFunction) {
                (typeof initFunction === 'function') && initFunction();
            });
        }
    }

    if (typeof initPull === 'object') {
        [
            initPull.Timer
        ].forEach(function(initFunction) {
            (typeof initFunction === 'function') && initFunction();
        });
    }

    function openTY(lp) {
        if (lp.tyUri) {
            var typUri = new URI(lp.parsedUrl.protocol + '://' + lp.parsedUrl.hostname + '/' + lp.tyUri);
            if (lp.isAssetInUrl) {
                typUri.path(setAssetIdToPath(typUri.path(), lp.assetId));
            }
            var param = getEmailOrUidParam(lp.parsedUrl);
            if (param) {
                typUri.setQuery(param);
            }
            window.open(typUri.toString(), '_self');
        } else if (!lp.behavior.ignoreForm) {
            lpHelpers.getAssets(lp, true);
        }
    }

    function getEmailOrUid(parsedUrl) {
        var query = URI.parseQuery(parsedUrl.query);
        if (query.uid) {
            return query.uid;
        }
        if (query.email) {
            return query.email;
        }
        return '';
    }

    function getEmailOrUidParam(parsedUrl) {
        var query = URI.parseQuery(parsedUrl.query);
        if (query.uid) {
            return {
                uid: query.uid
            };
        }
        if (query.email) {
            return {
                email: query.email
            };
        }
        return {};
    }

    function getAssetIdFromPath(path) {
        var urlPart = path.slice(path.lastIndexOf('/') + 1, path.length);
        var num = parseInt(urlPart);
        var assetId = 0;
        if (num.toString().length === urlPart.length) {
            assetId = num;
        }
        return assetId;
    }

    function setAssetIdToPath(path, assetId) {
        var pathParts = path.split('/').filter(Boolean);
        var resultPath = isNaN(pathParts[pathParts.length - 1]) ? pathParts : pathParts.slice(0, -1);
        resultPath.push(assetId);
        return '/' + resultPath.join('/');
    }

    function isIE() {
        var myNav = navigator.userAgent.toLowerCase();
        var ie = (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;

        if (!ie && !!window.MSInputMethodContext && !!document.documentMode) {
            ie = 11;
        }
        if (!ie && /x64|x32/ig.test(myNav)) {
            ie = 12;
        }

        return ie;
    }

    function getAssetAccessType(asset) {
        if (!asset) {
            console.warn('No asset attached.');
            return null;
        }

        if (asset.contentType === ASSET_TYPES.url) {
            return AssetAccessTypes.url;
        }

        var filename = asset.content.split('/').pop();
        var fileExtention = filename.split('.').pop().toLowerCase();

        return ['mp4', 'mov', 'avi', 'wmv'].includes(fileExtention) ?
            AssetAccessTypes.video :
            AssetAccessTypes.document;
    }
});

lpHelpers.getAssets = null;
lpHelpers.downloadAsset = null;
lpHelpers.openAsset = null;
lpHelpers.getLpSettings = null;
lpHelpers.getLpSettings = null;
lpHelpers.behaviors = {
    ignoreForm: null,
    showTyp: null,
    openWithoutCq: null,
    delay: null,
    notifications: null
};
lpHelpers.close = null;
lpHelpers.pageState = {
    storage: 'session',
    get: null,
    set: null,
    assign: null,
    _: {
        getStorage: function() {
            return lpHelpers.pageState.storage === 'local' ? window.localStorage : window.sessionStorage;
        }
    }
}

//no jQuery JS
document.addEventListener('DOMContentLoaded', function(event) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var yearElements = document.querySelectorAll('.current-year-placeholder');
    if (yearElements) {
        yearElements.forEach(function(element) {
            element.outerHTML = currentYear;
        });
    }
    var yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.innerText = currentYear;
    }
});