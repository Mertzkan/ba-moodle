define(['jquery'], function($) {
    const wwwroot = 'http://localhost/moodle';
    var canvasInnerColor = '#fff';
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.font = '30px Tahoma';
    ctx.textAlign = 'center';

    /**
     * Fuegt den Titelnamen als Halbkreis auf den Bagde in Großbuchstaben
     * @param text Titelname
     * @param x Koordinaten auf der X-Achse
     * @param y Koordinaten auf der Y-Achse
     * @param radius Radius des Kreises
     * @param startRotation Platzierung der Buchstaben
     */
    CanvasRenderingContext2D.prototype.fillTextCircle = function(text, x, y, radius, startRotation) {
        text = text.toUpperCase();
        const numRadsPerLetter = (0.75 * Math.PI) / text.length;
        this.save();
        this.translate(x, y);
        this.rotate(startRotation);

        for (var i = 0; i < text.length; i++) {
            this.save();
            this.rotate(i * numRadsPerLetter);
            this.fillText(text[i], 0, -radius);
            this.restore();
        }
        this.restore();
    };

    /**
     * Fuegt den Coursenamen auf den Badge in Großbuchstaben
     * @param text Coursename
     * @param x Koordinaten auf der X-Achse
     * @param y Koordinaten auf der Y-Achse
     * @param radius Radius des Kreises
     * @param startRotation Platzierung der Buchstaben
     */
    CanvasRenderingContext2D.prototype.fillCourseTitle = function(text, x, y, radius, startRotation) {
        var courseTitleInput = text.toUpperCase().concat();
        courseTitleInput = courseTitleInput.split('').reverse().join('');
        var numRotation = 0.0;
        var numRads = 0.0;
        if (courseTitleInput.length <= 5 && courseTitleInput.length > 2) {
            numRotation = 0.8;
            numRads = 0.3;
        } else if (courseTitleInput.length < 3) {
            numRotation = 0.9;
            numRads = 0.2;
        } else {
            numRotation = 0.0;
            numRads = 0.75;
        }

        const numRadsPerLetter = (numRads * Math.PI) / courseTitleInput.length;
        this.save();
        this.translate(x, y);
        this.rotate(startRotation + numRotation);

        for (var i = 0; i < courseTitleInput.length; i++) {
            this.save();
            this.rotate(i * numRadsPerLetter);
            this.fillText(courseTitleInput[i], 0, radius);
            this.restore();
        }
        this.restore();
    };

    /**
     * Zeichnet den Badge unbearbeitet
     * aeusserer Kreis
     * tech Kreis
     * digital-basic Kreis
     * classic Kreis
     * innerer Kreis
     */
    function circle() {
        ctx.beginPath();
        ctx.arc(172, 175, 170, 0.25, 1.9 * Math.PI, false);
        ctx.strokeStyle = '#000';
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.fillStyle = '#000';
        ctx.fillTextCircle('Future Skills', 172, 175, 140, Math.PI / 0.61);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(349, 140);
        ctx.arc(334, 139, 15, 0, Math.PI * 2); // Tech Kreis
        ctx.strokeStyle = '#7770ae';
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(349, 170);
        ctx.arc(334, 170, 15, 0, Math.PI * 2); // Digital-basic Kreis
        ctx.strokeStyle = '#149fa8';
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(349, 200);
        ctx.arc(334, 201, 15, 0, Math.PI * 2); // Classic Kreis
        ctx.strokeStyle = '#1989ca';
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(300, 175);
        ctx.arc(175, 175, 125, 0, Math.PI * 2); // Innerer Kreis
        ctx.strokeStyle = '#000';
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    /**
     * tech Kreis
     * fuellt den tech Kreis, bei slider Aenderung
     */
    $('.techBadge').change(function() {
        ctx.beginPath();
        ctx.moveTo(349, 140);
        if (!$(this).prop('checked')) {
            ctx.arc(334, 139, 15, 0, Math.PI * 2); // Oben Kreis
            ctx.strokeStyle = '#7770ae';
            ctx.fillStyle = '#fff';
        }
        if ($(this).prop('checked')) {
            ctx.arc(334, 139, 15, 0, Math.PI * 2); // Oben Kreis
            ctx.strokeStyle = '#7770ae';
            ctx.fillStyle = '#7770ae';
        }
        ctx.fill();
        ctx.stroke();
        ctx.save();
    });
    ctx.stroke();
    ctx.closePath();

    /**
     * digital-basic Kreis
     * fuellt den digital-basic Kreis, bei slider Aenderung
     */
    $('.digitalBadge').change(function() {
        ctx.beginPath();
        ctx.moveTo(349, 170);
        if (!$(this).prop('checked')) {
            ctx.arc(334, 170, 15, 0, Math.PI * 2); // Mitte Auge
            ctx.strokeStyle = '#149fa8';
            ctx.fillStyle = '#fff';
        }
        if ($(this).prop('checked')) {
            ctx.arc(334, 170, 15, 0, Math.PI * 2); // Mitte Auge
            ctx.strokeStyle = '#149fa8';
            ctx.fillStyle = '#149fa8';
        }
        ctx.fill();
        ctx.stroke();
        ctx.save();
    });
    ctx.stroke();
    ctx.closePath();

    /**
     * classic Kreis
     * fuellt den classic Kreis, bei slider Aenderung
     */
    $('.classicBadge').click(function() {
        ctx.beginPath();
        ctx.moveTo(349, 200);
        if (!$(this).prop('checked')) {
            ctx.arc(334, 201, 15, 0, Math.PI * 2); // Unten Auge
            ctx.strokeStyle = '#1989ca';
            ctx.fillStyle = '#fff';
        }
        if ($(this).prop('checked')) {
            ctx.arc(334, 201, 15, 0, Math.PI * 2); // Unten Auge
            ctx.strokeStyle = '#1989ca';
            ctx.fillStyle = '#1989ca';
        }
        ctx.fill();
        ctx.stroke();
        ctx.save();
    });
    ctx.stroke();
    ctx.closePath();

    function saveBadge(img) {
        $.ajax({
            type: 'POST',
            url: wwwroot + '/blocks/badgegenerator/savebadge.php',
            data: {
                imgBase64: img
            }
        }).done(function() {
            window.console.log('saved');
        });
    }

    /**
     * Fragt nach 2 Sekunden, ob die Seite neu geladen werden soll.
     */
    function pageReload() {
        setTimeout(function() {
            if (confirm('Neuen Badge erstellen?')) {
                window.location.reload();
            }
        }, 2000);
    }

    /**
     * Konvertiert Canvas in Image und startet Download
     */
    $('.downloadBtn').click(function() {
        let img = new Image();
        let img2;
        img.src = canvas.toDataURL();
        img.onload = function() {
            if (!$('.badgeSize').prop('checked')) {
                img2 = resizeImage(img, 220, 220);
                //window.console.log(img2);
            } else {
                img2 = resizeImage(img, 512, 512);
                //window.console.log(typeof img2);
            }
            let link = document.createElement('a');
            img2.onload = function() {
                link.href = img2.src;
                link.download = 'future-skills_badge_' + $('.courseTitleInput').val() + '.png';
                link.click();
                link.remove();
                pageReload();
            };
        };
    });

    /**
     * Erzeugt ein neues Canvas und zeichnet es in veraenderter groesse nach
     * @param img Bild das veraendert werden soll
     * @param w Breite des Bildes
     * @param h Hoehe des Bildes
     * @returns {HTMLImageElement} gibt das veraenderte Bild zurueck
     */
    function resizeImage(img, w, h) {
        let result = new Image();
        let can = document.createElement('canvas');
        let tmp;
        can.width = w;
        can.height = h;
        can.getContext('2d').drawImage(img, 0, 0, w, h);
        result.src = can.toDataURL();
        tmp = can.toDataURL();
        saveBadge(tmp);
        return result;
    }

    /**
     * fuegt den gewuenschten Fortschritt des Courses in den Badge ein
     * Bei dunklen Farben, Schriftfarbe Weiß
     */
    $('.badgeNumberSettings').on('input', '', function() {
        var inputVal = $('.badgeNumberInput').val();
        var sndInputVal = $('.badgeNumberInput-nd').val();
        ctx.beginPath();
        ctx.moveTo(300, 175);
        ctx.fillStyle = canvasInnerColor;
        ctx.fillRect(230 / 2, 242, 120, 44);
        ctx.fill();
        if (canvasInnerColor === '#000000' || canvasInnerColor === '#424242' ||
            canvasInnerColor === '#062e0c' || canvasInnerColor === '#011e4a' ||
            canvasInnerColor === '#003063') {
            ctx.fillStyle = '#fff';
        } else {
            ctx.fillStyle = '#000';
        }
        if (inputVal.length === 1) {
            ctx.fillText(inputVal, 300 / 2, 350 / 1.25);
            ctx.fillText('/', 345 / 2, 350 / 1.25);

        } else if (inputVal.length === 2) {
            ctx.fillText(inputVal, 300 / 2, 350 / 1.25);
            ctx.fillText('/', 345 / 2, 350 / 1.25);
        } else {
            ctx.fillText(inputVal, 280 / 2, 350 / 1.25);
            ctx.fillText('/', 345 / 2, 350 / 1.25);
        }
        if (sndInputVal.length > 0) {
            ctx.fillText(sndInputVal, 400 / 2, 350 / 1.25);
        }
        window.console.log(inputVal.length);
        ctx.stroke();
        ctx.save();
        ctx.closePath();
    });

    /**
     * fuellt den inneren Badge Kreis nach der gewuenschten Farbe
     */
    $('.colorBtn').click(function() {
        canvasInnerColor = $(this).val();
        ctx.beginPath();
        ctx.moveTo(300, 175);
        ctx.arc(175, 175, 125, 0, Math.PI * 2);  // innerer Kreis
        ctx.strokeStyle = '#000';
        ctx.fillStyle = canvasInnerColor;
        ctx.fill();
        ctx.stroke();
        ctx.save();
        ctx.closePath();
    });

    /**
     * fuegt das Ausgewaehlte Icon in das Badge ein
     */
    $('.iconBtn01').click(function() {
        ctx.fillStyle = canvasInnerColor;
        ctx.fill();
        ctx.fillRect(90, 100, 170, 150);
        var img = $('.iconBtn img')[0];
        ctx.drawImage(img, 90, 100, 170, 150);
        ctx.save();
    });

    $('.iconBtn02').click(function() {
        ctx.fillStyle = canvasInnerColor;
        ctx.fill();
        ctx.fillRect(90, 100, 170, 150);
        var img = $('.iconBtn img')[1];
        ctx.drawImage(img, 90, 100, 170, 150);
        ctx.save();
    });

    $('.iconBtn03').click(function() {
        ctx.fillStyle = canvasInnerColor;
        ctx.fill();
        ctx.fillRect(90, 100, 170, 150);
        var img = $('.iconBtn img')[2];
        ctx.drawImage(img, 90, 100, 170, 150);
        ctx.save();
    });

    $('.iconBtn04').click(function() {
        ctx.fillStyle = canvasInnerColor;
        ctx.fill();
        ctx.fillRect(90, 100, 170, 150);
        var img = $('.iconBtn img')[3];
        ctx.drawImage(img, 90, 100, 170, 150);
        ctx.save();
    });

    $('.iconBtn05').click(function() {
        ctx.fillStyle = canvasInnerColor;
        ctx.fill();
        ctx.fillRect(90, 100, 170, 150);
        var img = $('.iconBtn img')[4];
        ctx.drawImage(img, 90, 100, 170, 150);
        ctx.save();
    });

    /**
     * fuegt den gewuenschten Course Titel in das Badge ein
     */
    $('.courseTitleSettingsBadge').on('input', '.courseTitleInput', function() {
        var inputVal = $('.courseTitleInput').val();
        var chars = 15 - inputVal.length;
        $('.noteBadge').text('Noch ' + chars + ' Zeichen übrig...');
        circle();
        ctx.fillStyle = '#000';
        ctx.fillCourseTitle($('.courseTitleInput').val(), 172, 175, 160, Math.PI / 0.61);
    });

    /**
     * fuegt das Hochgeladene Icon in das Badge ein und speichert es auf dem Server
     */
    $('.iconButtonBadge').click(function(e) {
        e.preventDefault();

        let form_data = new FormData();
        let img = $('.inputFileBadge')[0].files;

        if (img.length > 0) {
            form_data.append('my_image', img[0]);
            $.ajax({
                url: wwwroot + '/blocks/badgegenerator/upload_badge.php',
                method: 'POST',
                data: form_data,
                processData: false,
                contentType: false,
                success: function(res) {
                    const data = JSON.parse(res);
                    if (data.error !== 1) {
                        let path = wwwroot + '/blocks/badgegenerator/pix/uploads/' + data.src;
                        document.getElementById('previewBadge').setAttribute('src', path);
                        document.getElementById('previewBadge').style.visibility = 'visible';
                    } else {
                        $('.errorMSG').text('failed!');
                    }
                }
            });
        } else {
            $('.errorMSG').text('Please select an image!');
        }
    });
    /**
     * fügt das Hochgeladene Icon in das Badge(Lokal)
     */
    // function get_badge_images() {
    // $('.inputFileBadge').change(function() {

    // var reader = new FileReader();
    // reader.onload = function(e) {
    //     document.getElementById('previewBadge').setAttribute('src', e.target.result);
    //     document.getElementById('previewBadge').style.visibility = 'visible';
    // };
    // reader.readAsDataURL(this.files[0]);
//});
    return {
        init: function() {
            $(document).ready(function() {
                circle();
                $('.courseTitle').click(function() {
                    $(this).css({'backgroundColor': 'rgb(0, 48, 100)', 'borderTopLeftRadius': '20px'});
                    $('.courseTitleSettingsBadge').css({'display': 'unset'});
                    $('.courseProgramm').css({'backgroundColor': 'rgb(0, 30, 73)'});
                    $('.courseProgrammSettings').css({'display': 'none'});
                    $('.badgenumber').css({'backgroundColor': 'rgb(0, 30, 73)'});
                    $('.badgeNumberSettings').css({'display': 'none'});
                    $('.badgeColor').css({'backgroundColor': 'rgb(0, 30, 73)'});
                    $('.badgeColorSettings').css({'display': 'none'});
                    $('.badgeIcon').css({'backgroundColor': 'rgb(0, 30, 73)'});
                    $('.badgeIconSettings').css({'display': 'none'});
                });
                $('.courseProgramm').click(function() {
                    $(this).css({'backgroundColor': 'rgb(0, 48, 100)'});
                    $('.courseProgrammSettings').css({'display': 'unset'});
                    $('.courseTitle').css({'backgroundColor': 'rgb(0, 30, 73)', 'borderTopLeftRadius': '20px'});
                    $('.courseTitleSettingsBadge').css({'display': 'none'});
                    $('.badgenumber').css({'backgroundColor': 'rgb(0, 30, 73)'});
                    $('.badgeNumberSettings').css({'display': 'none'});
                    $('.badgeColor').css({'backgroundColor': 'rgb(0, 30, 73)'});
                    $('.badgeColorSettings').css({'display': 'none'});
                    $('.badgeIcon').css({'backgroundColor': 'rgb(0, 30, 73)'});
                    $('.badgeIconSettings').css({'display': 'none'});
                });
                $('.badgenumber').click(function() {
                    $(this).css({'backgroundColor': 'rgb(0, 48, 100)'});
                    $('.badgeNumberSettings').css({'display': 'unset'});
                    $('.courseTitle').css({'backgroundColor': 'rgb(0, 30, 73)', 'borderTopLeftRadius': '20px'});
                    $('.courseTitleSettingsBadge').css({'display': 'none'});
                    $('.courseProgramm').css({'backgroundColor': 'rgb(0, 30, 73)'});
                    $('.courseProgrammSettings').css({'display': 'none'});
                    $('.badgeColor').css({'backgroundColor': 'rgb(0, 30, 73)'});
                    $('.badgeColorSettings').css({'display': 'none'});
                    $('.badgeIcon').css({'backgroundColor': 'rgb(0, 30, 73)'});
                    $('.badgeIconSettings').css({'display': 'none'});
                });
                $('.badgeColor').click(function() {
                    $(this).css({'backgroundColor': 'rgb(0, 48, 100)'});
                    $('.badgeColorSettings').css({'display': 'unset'});
                    $('.badgeIcon').css({'backgroundColor': 'rgb(0, 30, 73)'});
                    $('.badgeIconSettings').css({'display': 'none'});
                    $('.badgenumber').css({'backgroundColor': 'rgb(0, 30, 73)'});
                    $('.badgeNumberSettings').css({'display': 'none'});
                    $('.courseTitle').css({'backgroundColor': 'rgb(0, 30, 73)', 'borderTopLeftRadius': '20px'});
                    $('.courseTitleSettingsBadge').css({'display': 'none'});
                    $('.courseProgramm').css({'backgroundColor': 'rgb(0, 30, 73)'});
                    $('.courseProgrammSettings').css({'display': 'none'});
                });
                $('.badgeIcon').click(function() {
                    $(this).css({'backgroundColor': 'rgb(0, 48, 100)'});
                    $('.badgeIconSettings').css({'display': 'unset'});
                    $('.badgenumber').css({'backgroundColor': 'rgb(0, 30, 73)'});
                    $('.badgeNumberSettings').css({'display': 'none'});
                    $('.courseTitle').css({'backgroundColor': 'rgb(0, 30, 73)', 'borderTopLeftRadius': '20px'});
                    $('.courseTitleSettingsBadge').css({'display': 'none'});
                    $('.courseProgramm').css({'backgroundColor': 'rgb(0, 30, 73)'});
                    $('.courseProgrammSettings').css({'display': 'none'});
                    $('.badgeColor').css({'backgroundColor': 'rgb(0, 30, 73)'});
                    $('.badgeColorSettings').css({'display': 'none'});
                });
            });
        }
    };
});
