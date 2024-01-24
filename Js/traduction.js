$("select").click(function () { francais(); });
$("#fr").click(function () {
    $("select").val("Français").change();
    francais();
});
$("#en").click(function () {
    $("select").val("English").change();
    francais();
});
$("#ar").click(function () {
    $("select").val("Arabe").change();
    francais();
});


function francais() {
    if ($("select").val() == "Français") {
        $("#studiobtn").text('STUDIO');
        $(".alaune").text('A LA UNE');
        $(".politique").text('POLITIQUE');
        $(".economie").text('ECONOMIE');
        $(".internationale").text('INTERNATIONAL');
        $(".sports").text('SPORTS');
        $(".communiques").text('COMMUNIQUÉS');
        $("#clubmbtn").text('CLUB M');
        $(".title-studio h2").text('LE STUDIO');
        $(".soustitre-studio").text('ÉMISSIONS, TALKSHOWS & PODCASTS');
        $(".btn-studio").text('REGARDER L’ÉMISSION');
        $(".blog-header h3").text('BLOGS');
        $(".blog-header p").text('OPINIONS, CONTRIBUTIONS');
        $(".lire-article").text('Lire Article');
        $(".voirplus").text('VOIR PLUS');
        $(".autres").text('AUTRES');
        $(".culture").text('CULTURE');
        $(".societe").text('SOCIÉTÉ');
        $(".technologie").text('TECHNOLOGIE');
        $(".magazine").text('MAGAZINE');
        $(".blogs").text('BLOGS')
        $(".actualiter").text('actualité');
        $(".alire").text('A LIRE...');

    }
    if ($("select").val() == "English") {
        $("#studiobtn").text('STUDIO');
        $(".alaune").text('FEATURED');
        $(".politique").text('POLITICS');
        $(".economie").text('ECONOMY');
        $(".internationale").text('INTERNATIONAL');
        $(".sports").text('SPORTS');
        $(".communiques").text('NEWS RELEASES');
        $("#clubmbtn").text('CLUB M');
        $(".title-studio h2").text('THE STUDIO');
        $(".soustitre-studio").text('SHOW, TALKSHOWS & PODCASTS');
        $(".btn-studio").text('WATCH THE SHOW');
        $(".blog-header h3").text('BLOGS');
        $(".blog-header p").text('OPINIONS, CONTRIBUTIONS');
        $(".lire-article").text('Read Article');
        $(".voirplus").text('SEE MORE');
        $(".autres").text('OTHERS');
        $(".culture").text('CULTURE');
        $(".societe").text('SOCITY');
        $(".technologie").text('TECHNOLOGY');
        $(".magazine").text('MAGAZINE');
        $(".blogs").text('BLOGS')
        $(".actualiter").text('NEWS');
        $(".alire").text('TO READ...');

    }
    if ($("select").val() == "Arabe") {
        $("#studiobtn").text('استوديو');
        $(".alaune").text('الرئيسية');
        $(".politique").text('سياسة');
        $(".economie").text('اقتصاد');
        $(".internationale").text('دولي');
        $(".sports").text('رياضة ');
        $(".communiques").text('نشرات الأخبار');
        $("#clubmbtn").text('نادي م');
        $(".title-studio h2").text('الأستوديو');
        $(".soustitre-studio").text('العرض والحوارات والملفات');
        $(".btn-studio").text('شاهد الحصة');
        $(".blog-header h3").text('تدوينة');
        $(".blogs").text('تدوينة');
        $(".blog-header p").text('رأي، مساهمة');
        $(".lire-article").text('قراءة المقال');
        $(".voirplus").text('مشاهدة المزيد');
        $(".autres").text('الآخرين');
        $(".culture").text(' الثقافة');
        $(".societe").text('مجتمع');
        $(".technologie").text('تكنولوجيا');
        $(".magazine").text('مجلة');
        $(".actualiter").text('أخبار');
        $(".alire").text('...للقراءة');

    }
}