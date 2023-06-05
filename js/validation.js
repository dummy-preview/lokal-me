var current_slide, next_slide, previous_slide;
var left, opacity, scale;
var animation;

var error = false;

// Data Diri
$("#nama").keyup(function() {
    var address = $("#nama").val();
    if (address != address) {
        $("#error-nama").text('Enter your nama.');
        $("#nama").addClass("box_error");
        error = true;
    } else {
        $("#error-nama").text('');
        error = false;
        $("#nama").removeClass("box_error");
    }
});
$("#telepon").keyup(function() {
    var address = $("#telepon").val();
    if (address != address) {
        $("#error-telepon").text('Enter your Telepon.');
        $("#telepon").addClass("box_error");
        error = true;
    } else {
        $("#error-telepon").text('');
        error = false;
        $("#telepon").removeClass("box_error");
    }
});
$("#email").keyup(function() {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test($("#email").val())) {
        $("#error-email").text('Please enter an Email addres.');
        $("#email").addClass("box_error");
        error = true;
    } else {
        $("#error-email").text('');
        error = false;
        $("#email").removeClass("box_error");
    }
});
$("#kota").keyup(function() {
    var address = $("#kota").val();
    if (address != address) {
        $("#error-kota").text('Enter your kota.');
        $("#kota").addClass("box_error");
        error = true;
    } else {
        $("#error-kota").text('');
        error = false;
        $("#kota").removeClass("box_error");
    }
});
$("#provinsi").keyup(function() {
    var address = $("#provinsi").val();
    if (address != address) {
        $("#error-provinsi").text('Enter your Provinsi.');
        $("#provinsi").addClass("box_error");
        error = true;
    } else {
        $("#error-provinsi").text('');
        error = false;
        $("#provinsi").removeClass("box_error");
    }
});
$("#alamat").keyup(function() {
    var address = $("#alamat").val();
    if (address != address) {
        $("#error-alamat").text('Enter your Address.');
        $("#alamat").addClass("box_error");
        error = true;
    } else {
        $("#error-alamat").text('');
        error = false;
        $("#alamat").removeClass("box_error");
    }
});
// Detail Perusahaan Anda
$("#nama-p").keyup(function() {
    var address = $("#nama-p").val();
    if (address != address) {
        $("#error-nama-p").text('Enter your Nama Perusahaan.');
        $("#nama-p").addClass("box_error");
        error = true;
    } else {
        $("#error-nama-p").text('');
        error = false;
        $("#nama-p").removeClass("box_error");
    }
});
$("#provinsi-p").keyup(function() {
    var address = $("#provinsi-p").val();
    if (address != address) {
        $("#error-provinsi-p").text('Enter your Provinsi Perusahaan.');
        $("#provinsi-p").addClass("box_error");
        error = true;
    } else {
        $("#error-provinsi-p").text('');
        error = false;
        $("#provinsi-p").removeClass("box_error");
    }
});
$("#kota-p").keyup(function() {
    var address = $("#kota-p").val();
    if (address != address) {
        $("#error-kota-p").text('Enter your Kota Perusahaan.');
        $("#kota-p").addClass("box_error");
        error = true;
    } else {
        $("#error-kota-p").text('');
        error = false;
        $("#kota-p").removeClass("box_error");
    }
});
$("#alamat-p").keyup(function() {
    var address = $("#alamat-p").val();
    if (address != address) {
        $("#error-alamat-p").text('Enter your Alamat Perusahaan.');
        $("#alamat-p").addClass("box_error");
        error = true;
    } else {
        $("#error-alamat-p").text('');
        error = false;
        $("#alamat-p").removeClass("box_error");
    }
});
$("#linkedIn-p").keyup(function() {
    var address = $("#linkedIn-p").val();
    if (address != address) {
        $("#error-linkedIn-p").text('Enter your LinkedIn Perusahaan.');
        $("#linkedIn-p").addClass("box_error");
        error = true;
    } else {
        $("#error-linkedIn-p").text('');
        error = false;
        $("#linkedIn-p").removeClass("box_error");
    }
});
$("#ig-p").keyup(function() {
    var address = $("#ig-p").val();
    if (address != address) {
        $("#error-ig-p").text('Enter your Instagram Perusahaan.');
        $("#ig-p").addClass("box_error");
        error = true;
    } else {
        $("#error-ig-p").text('');
        error = false;
        $("#ig-p").removeClass("box_error");
    }
});
// Detail Kontak Alternatif
$("#nama-k").keyup(function() {
    var address = $("#nama-k").val();
    if (address != address) {
        $("#error-nama-k").text('Enter your nama.');
        $("#nama-k").addClass("box_error");
        error = true;
    } else {
        $("#error-nama-k").text('');
        error = false;
        $("#nama-k").removeClass("box_error");
    }
});
$("#telepon-k").keyup(function() {
    var address = $("#telepon-k").val();
    if (address != address) {
        $("#error-telepon-k").text('Enter your Telepon.');
        $("#telepon-k").addClass("box_error");
        error = true;
    } else {
        $("#error-telepon-k").text('');
        error = false;
        $("#telepon-k").removeClass("box_error");
    }
});
$("#email-k").keyup(function() {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test($("#email-k").val())) {
        $("#error-email-k").text('Please enter an Email addres.');
        $("#email-k").addClass("box_error");
        error = true;
    } else {
        $("#error-email-k").text('');
        error = false;
        $("#email-k").removeClass("box_error");
    }
});
$("#kota-k").keyup(function() {
    var address = $("#kota-k").val();
    if (address != address) {
        $("#error-kota-k").text('Enter your kota.');
        $("#kota-k").addClass("box_error");
        error = true;
    } else {
        $("#error-kota-k").text('');
        error = false;
        $("#kota-k").removeClass("box_error");
    }
});
$("#provinsi-k").keyup(function() {
    var address = $("#provinsi-k").val();
    if (address != address) {
        $("#error-provinsi-k").text('Enter your Provinsi.');
        $("#provinsi-k").addClass("box_error");
        error = true;
    } else {
        $("#error-provinsi-k").text('');
        error = false;
        $("#provinsi-k").removeClass("box_error");
    }
});
$("#alamat-k").keyup(function() {
    var address = $("#alamat-k").val();
    if (address != address) {
        $("#error-alamat-k").text('Enter your Address.');
        $("#alamat-k").addClass("box_error");
        error = true;
    } else {
        $("#error-alamat-k").text('');
        error = false;
        $("#alamat-k").removeClass("box_error");
    }
});
// Detail Kampanye / Program / Konten Anda
$("#judul").keyup(function() {
    var address = $("#judul").val();
    if (address != address) {
        $("#error-judul").text('Enter your Judul.');
        $("#judul").addClass("box_error");
        error = true;
    } else {
        $("#error-judul").text('');
        error = false;
        $("#judul").removeClass("box_error");
    }
});
$("#brand").keyup(function() {
    var address = $("#brand").val();
    if (address != address) {
        $("#error-brand").text('Enter your Brand.');
        $("#brand").addClass("box_error");
        error = true;
    } else {
        $("#error-brand").text('');
        error = false;
        $("#brand").removeClass("box_error");
    }
});
$("#pbrand").keyup(function() {
    var address = $("#pbrand").val();
    if (address != address) {
        $("#error-pbrand").text('Enter your Pemilik Brand.');
        $("#pbrand").addClass("box_error");
        error = true;
    } else {
        $("#error-pbrand").text('');
        error = false;
        $("#pbrand").removeClass("box_error");
    }
});
$("#oleh").keyup(function() {
    var address = $("#oleh").val();
    if (address != address) {
        $("#error-oleh").text('Enter your Didaftarkan oleh (Nama Perusahaan).');
        $("#oleh").addClass("box_error");
        error = true;
    } else {
        $("#error-oleh").text('');
        error = false;
        $("#oleh").removeClass("box_error");
    }
});
$("#kategori-d").keyup(function() {
    var address = $("#kategori-d").val();
    if (address != address) {
        $("#error-kategori-d").text('Enter your Kategori Pendaftar');
        $("#kategori-d").addClass("box_error");
        error = true;
    } else {
        $("#error-kategori-d").text('');
        error = false;
        $("#kategori-d").removeClass("box_error");
    }
});
$("#materi").keyup(function() {
    var address = $("#materi").val();
    if (address != address) {
        $("#error-materi").text('Enter your Kategori Materi');
        $("#materi").addClass("box_error");
        error = true;
    } else {
        $("#error-materi").text('');
        error = false;
        $("#materi").removeClass("box_error");
    }
});
$("#materi-p").keyup(function() {
    var address = $("#materi-p").val();
    if (address != address) {
        $("#error-materi-p").text('Enter your Kategori Materi Pendukung');
        $("#materi-p").addClass("box_error");
        error = true;
    } else {
        $("#error-materi-p").text('');
        error = false;
        $("#materi-p").removeClass("box_error");
    }
});

// first step validation
$(".fs_next_btn").click(function() {
    // nama
    if ($("#nama").val() == '') {
        $("#error-nama").text('Enter your Nama.');
        $("#nama").addClass("box_error");
        error = true;
    } else {
        var address = $("#nama").val();
        if (address != address) {
            $("#error-nama").text('Address is required.');
            error = true;
        } else {
            $("#error-nama").text('');
            $("#nama").removeClass("box_error");
            error = false;
        }
    }
    // telepon
    if ($("#telepon").val() == '') {
        $("#error-telepon").text('Enter your telepon.');
        $("#telepon").addClass("box_error");
        error = true;
    } else {
        var address = $("#telepon").val();
        if (address != address) {
            $("#error-telepon").text('Address is required.');
            error = true;
        } else {
            $("#error-telepon").text('');
            $("#telepon").removeClass("box_error");
            error = false;
        }
    }
    // email
    if ($("#email").val() == '') {
        $("#error-email").text('Please enter an email address.');
        $("#email").addClass("box_error");
        error = true;
    } else {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!emailReg.test($("#email").val())) {
            $("#error-email").text('Please insert a valid email address.');
            error = true;
        } else {
            $("#error-email").text('');
            $("#email").removeClass("box_error");
        }
    }
    // kota
    if ($("#kota").val() == '') {
        $("#error-kota").text('Enter your kota.');
        $("#kota").addClass("box_error");
        error = true;
    } else {
        var address = $("#kota").val();
        if (address != address) {
            $("#error-kota").text('Address is required.');
            error = true;
        } else {
            $("#error-kota").text('');
            $("#kota").removeClass("box_error");
            error = false;
        }
    }
    // provinsi
    if ($("#provinsi").val() == '') {
        $("#error-provinsi").text('Enter your provinsi.');
        $("#provinsi").addClass("box_error");
        error = true;
    } else {
        var address = $("#provinsi").val();
        if (address != address) {
            $("#error-provinsi").text('Address is required.');
            error = true;
        } else {
            $("#error-provinsi").text('');
            $("#provinsi").removeClass("box_error");
            error = false;
        }
    }
    // alamat
    if ($("#alamat").val() == '') {
        $("#error-alamat").text('Enter your Alamat.');
        $("#alamat").addClass("box_error");
        error = true;
    } else {
        var address = $("#alamat").val();
        if (address != address) {
            $("#error-alamat").text('Address is required.');
            error = true;
        } else {
            $("#error-alamat").text('');
            $("#alamat").removeClass("box_error");
            error = false;
        }
    }
    // animation
    if (!error) {
        if (animation) return false;
        animation = true;

        current_slide = $(this).parent().parent();
        next_slide = $(this).parent().parent().next();

        $("#progress_header li").eq($(".multistep-box").index(next_slide)).addClass("active");

        next_slide.show();
        current_slide.animate({
            opacity: 0
        }, {
            step: function(now, mx) {
                scale = 1 - (1 - now) * 0.2;
                left = now * 50 + "%";
                opacity = 1 - now;
                current_slide.css({
                    'transform': 'scale(' + scale + ')'
                });
                next_slide.css({
                    'left': left,
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function() {
                current_slide.hide();
                animation = false;
            },
            easing: 'easeInOutBack'
        });
    }
});
// second step validation
$(".ss_next_btn").click(function() {
    if ($("#nama-p").val() == '') {
        $("#error-nama-p").text('Enter your Nama Perusahaan.');
        $("#nama-p").addClass("box_error");
        error = true;
    } else {
        var address = $("#nama-p").val();
        if (address != address) {
            $("#error-nama-p").text('Address is required.');
            error = true;
        } else {
            $("#error-nama-p").text('');
            $("#nama-p").removeClass("box_error");
            error = false;
        }
    }
    if ($("#provinsi-p").val() == '') {
        $("#error-provinsi-p").text('Enter your Provinsi Perusahaan.');
        $("#provinsi-p").addClass("box_error");
        error = true;
    } else {
        var address = $("#provinsi-p").val();
        if (address != address) {
            $("#error-provinsi-p").text('Address is required.');
            error = true;
        } else {
            $("#error-provinsi-p").text('');
            $("#provinsi-p").removeClass("box_error");
            error = false;
        }
    }
    if ($("#kota-p").val() == '') {
        $("#error-kota-p").text('Enter your Kota Perusahaan.');
        $("#kota-p").addClass("box_error");
        error = true;
    } else {
        var address = $("#kota-p").val();
        if (address != address) {
            $("#error-kota-p").text('Address is required.');
            error = true;
        } else {
            $("#error-kota-p").text('');
            $("#kota-p").removeClass("box_error");
            error = false;
        }
    }
    if ($("#alamat-p").val() == '') {
        $("#error-alamat-p").text('Enter your Kota Perusahaan.');
        $("#alamat-p").addClass("box_error");
        error = true;
    } else {
        var address = $("#alamat-p").val();
        if (address != address) {
            $("#error-alamat-p").text('Address is required.');
            error = true;
        } else {
            $("#error-alamat-p").text('');
            $("#alamat-p").removeClass("box_error");
            error = false;
        }
    }
    if ($("#linkedIn-p").val() == '') {
        $("#error-linkedIn-p").text('Enter your linkedIn Perusahaan.');
        $("#linkedIn-p").addClass("box_error");
        error = true;
    } else {
        var address = $("#linkedIn-p").val();
        if (address != address) {
            $("#error-linkedIn-p").text('Address is required.');
            error = true;
        } else {
            $("#error-linkedIn-p").text('');
            $("#linkedIn-p").removeClass("box_error");
            error = false;
        }
    }
    if ($("#ig-p").val() == '') {
        $("#error-ig-p").text('Enter your Instagram Perusahaan.');
        $("#ig-p").addClass("box_error");
        error = true;
    } else {
        var address = $("#ig-p").val();
        if (address != address) {
            $("#error-ig-p").text('Address is required.');
            error = true;
        } else {
            $("#error-ig-p").text('');
            $("#ig-p").removeClass("box_error");
            error = false;
        }
    }
    if (!error) {
        if (animation) return false;
        animation = true;

        current_slide = $(this).parent().parent();
        next_slide = $(this).parent().parent().next();

        $("#progress_header li").eq($(".multistep-box").index(next_slide)).addClass("active");

        next_slide.show();
        current_slide.animate({
            opacity: 0
        }, {
            step: function(now, mx) {
                scale = 1 - (1 - now) * 0.2;
                left = now * 50 + "%";
                opacity = 1 - now;
                current_slide.css({
                    'transform': 'scale(' + scale + ')'
                });

                next_slide.css({
                    'left': left,
                    'opacity': opacity
                });

            },
            duration: 800,
            complete: function() {
                current_slide.hide();
                animation = false;
            },
            easing: 'easeInOutBack'
        });

    }

});
// third step validation
$(".ts_next_btn").click(function() {
    // nama
    if ($("#nama-k").val() == '') {
        $("#error-nama-k").text('Enter your Nama.');
        $("#nama-k").addClass("box_error");
        error = true;
    } else {
        var address = $("#nama-k").val();
        if (address != address) {
            $("#error-nama-k").text('Address is required.');
            error = true;
        } else {
            $("#error-nama-k").text('');
            $("#nama-k").removeClass("box_error");
            error = false;
        }
    }
    // telepon
    if ($("#telepon-k").val() == '') {
        $("#error-telepon-k").text('Enter your telepon.');
        $("#telepon-k").addClass("box_error");
        error = true;
    } else {
        var address = $("#telepon-k").val();
        if (address != address) {
            $("#error-telepon-k").text('Address is required.');
            error = true;
        } else {
            $("#error-telepon-k").text('');
            $("#telepon-k").removeClass("box_error");
            error = false;
        }
    }
    // email
    if ($("#email-k").val() == '') {
        $("#error-email-k").text('Please enter an email address.');
        $("#email-k").addClass("box_error");
        error = true;
    } else {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!emailReg.test($("#email-k").val())) {
            $("#error-email-k").text('Please insert a valid email address.');
            error = true;
        } else {
            $("#error-email-k").text('');
            $("#email-k").removeClass("box_error");
        }
    }
    // kota
    if ($("#kota-k").val() == '') {
        $("#error-kota-k").text('Enter your kota.');
        $("#kota-k").addClass("box_error");
        error = true;
    } else {
        var address = $("#kota-k").val();
        if (address != address) {
            $("#error-kota-k").text('Address is required.');
            error = true;
        } else {
            $("#error-kota-k").text('');
            $("#kota-k").removeClass("box_error");
            error = false;
        }
    }
    // provinsi
    if ($("#provinsi-k").val() == '') {
        $("#error-provinsi-k").text('Enter your provinsi.');
        $("#provinsi-k").addClass("box_error");
        error = true;
    } else {
        var address = $("#provinsi-k").val();
        if (address != address) {
            $("#error-provinsi-k").text('Address is required.');
            error = true;
        } else {
            $("#error-provinsi-k").text('');
            $("#provinsi-k").removeClass("box_error");
            error = false;
        }
    }
    // alamat
    if ($("#alamat-k").val() == '') {
        $("#error-alamat-k").text('Enter your Alamat.');
        $("#alamat-k").addClass("box_error");
        error = true;
    } else {
        var address = $("#alamat-k").val();
        if (address != address) {
            $("#error-alamat-k").text('Address is required.');
            error = true;
        } else {
            $("#error-alamat-k").text('');
            $("#alamat-k").removeClass("box_error");
            error = false;
        }
    }
    if (!error) {
        if (animation) return false;
        animation = true;

        current_slide = $(this).parent().parent();
        next_slide = $(this).parent().parent().next();

        $("#progress_header li").eq($(".multistep-box").index(next_slide)).addClass("active");

        next_slide.show();
        current_slide.animate({
            opacity: 0
        }, {
            step: function(now, mx) {
                scale = 1 - (1 - now) * 0.2;
                left = now * 50 + "%";
                opacity = 1 - now;
                current_slide.css({
                    'transform': 'scale(' + scale + ')'
                });

                next_slide.css({
                    'left': left,
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function() {
                current_slide.hide();
                animation = false;
            },
            easing: 'easeInOutBack'
        });
    }
});
// third step validation
$(".fo_next_btn").click(function() {
    if ($("#judul").val() == '') {
        $("#error-judul").text('Enter your Judul.');
        $("#judul").addClass("box_error");
        error = true;
    } else {
        var address = $("#judul").val();
        if (address != address) {
            $("#error-judul").text('Address is required.');
            error = true;
        } else {
            $("#error-judul").text('');
            $("#judul").removeClass("box_error");
            error = false;
        }
    }
    if ($("#brand").val() == '') {
        $("#error-brand").text('Enter your Brand.');
        $("#brand").addClass("box_error");
        error = true;
    } else {
        var address = $("#brand").val();
        if (address != address) {
            $("#error-brand").text('Address is required.');
            error = true;
        } else {
            $("#error-brand").text('');
            $("#brand").removeClass("box_error");
            error = false;
        }
    }
    if ($("#pbrand").val() == '') {
        $("#error-pbrand").text('Enter your P Brand.');
        $("#pbrand").addClass("box_error");
        error = true;
    } else {
        var address = $("#pbrand").val();
        if (address != address) {
            $("#error-pbrand").text('Address is required.');
            error = true;
        } else {
            $("#error-pbrand").text('');
            $("#pbrand").removeClass("box_error");
            error = false;
        }
    }
    if ($("#oleh").val() == '') {
        $("#error-oleh").text('Enter your Oleh.');
        $("#oleh").addClass("box_error");
        error = true;
    } else {
        var address = $("#oleh").val();
        if (address != address) {
            $("#error-oleh").text('Address is required.');
            error = true;
        } else {
            $("#error-oleh").text('');
            $("#oleh").removeClass("box_error");
            error = false;
        }
    }
    if ($("#kategori-d").val() == '') {
        $("#error-kategori-d").text('Enter your kategori.');
        $("#kategori-d").addClass("box_error");
        error = true;
    } else {
        var address = $("#kategori-d").val();
        if (address != address) {
            $("#error-kategori-d").text('Address is required.');
            error = true;
        } else {
            $("#error-kategori-d").text('');
            $("#kategori-d").removeClass("box_error");
            error = false;
        }
    }
    if ($("#materi").val() == '') {
        $("#error-materi").text('Enter your materi.');
        $("#materi").addClass("box_error");
        error = true;
    } else {
        var address = $("#materi").val();
        if (address != address) {
            $("#error-materi").text('Address is required.');
            error = true;
        } else {
            $("#error-materi").text('');
            $("#materi").removeClass("box_error");
            error = false;
        }
    }
    if ($("#materi-p").val() == '') {
        $("#error-materi-p").text('Enter your Materi Pendukung.');
        $("#materi-p").addClass("box_error");
        error = true;
    } else {
        var address = $("#materi-p").val();
        if (address != address) {
            $("#error-materi-p").text('Address is required.');
            error = true;
        } else {
            $("#error-materi-p").text('');
            $("#materi-p").removeClass("box_error");
            error = false;
        }
    }

    if (!error) {
        if (animation) return false;
        animation = true;

        current_slide = $(this).parent().parent();
        next_slide = $(this).parent().parent().next();

        $("#progress_header li").eq($(".multistep-box").index(next_slide)).addClass("active");

        next_slide.show();
        current_slide.animate({
            opacity: 0
        }, {
            step: function(now, mx) {
                scale = 1 - (1 - now) * 0.2;
                left = now * 50 + "%";
                opacity = 1 - now;
                current_slide.css({
                    'transform': 'scale(' + scale + ')'
                });

                next_slide.css({
                    'left': left,
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function() {
                current_slide.hide();
                animation = false;
            },
            easing: 'easeInOutBack'
        });
    }
});
// previous
$(".previous").click(function() {
    if (animation) return false;
    animation = true;

    current_slide = $(this).parent().parent();
    previous_slide = $(this).parent().parent().prev();

    $("#progress_header li").eq($(".multistep-box").index(current_slide)).removeClass("active");

    previous_slide.show();
    current_slide.animate({
        opacity: 0
    }, {
        step: function(now, mx) {
            scale = 0.8 + (1 - now) * 0.2;
            left = (1 - now) * 50 + "%";
            opacity = 1 - now;
            current_slide.css({
                'left': left
            });

            previous_slide.css({
                'transform': 'scale(' + scale + ')',
                'opacity': opacity
            });

        },
        duration: 800,
        complete: function() {
            current_slide.hide();
            animation = false;
        },
        easing: 'easeInOutBack'
    });
});

$(".submit_btn").click(function() {
    if (!error) {
        $(".main-form").addClass("form_submited");
        $(".pendaftaran__succes").addClass("showsucces");
    }
    return false;
});