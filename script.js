// Rayonlar və onların daxilindəki əsas kəndlər/qəsəbələr verilənlər bazası
const regionData = {
    imishli: {
        name: "İmişli rayonu",
        desc: "Aran zonasında yerləşən, kənd təsərrüfatı və pambıqçılığı ilə tanınan mühüm bölgə.",
        villages: [
            "Bəhrəmtəpə qəsəbəsi", 
            "Qaradolaq kəndi", 
            "Mamedli kəndi", 
            "Oruclu kəndi", 
            "Bəydilli kəndi", 
            "Aşağı Qaralar", 
            "Qaraqaşlı kəndi",
            "Yalavac kəndi",
            "Bəcirəvan kəndi"
        ]
    },
    baku: {
        name: "Bakı şəhəri",
        desc: "Azərbaycanın paytaxtı, Xəzər dənizinin sahilində yerləşən iri iqtisadi və mədəniyyət mərkəzi.",
        villages: [
            "Mərdəkan qəsəbəsi", 
            "Şüvəlan qəsəbəsi", 
            "Bilgəh qəsəbəsi", 
            "Nardaran qəsəbəsi", 
            "Buzovna qəsəbəsi", 
            "Pirşağı qəsəbəsi", 
            "Sahil qəsəbəsi",
            "Lökbatan qəsəbəsi"
        ]
    },
    ganja: {
        name: "Gəncə şəhəri",
        desc: "Ölkənin ikinci böyük şəhəridir, qədim tarixi abidələri və mədəni irsi ilə seçilir.",
        villages: [
            "Hacıkənd qəsəbəsi", 
            "Sevinc qəsəbəsi", 
            "Natəvan qəsəbəsi", 
            "Məhsəti qəsəbəsi", 
            "Şıxhlı kəndi"
        ]
    },
    gabala: {
        name: "Qəbələ rayonu",
        desc: "Böyük Qafqaz dağlarının ətəyində yerləşən, turizm və təbiəti ilə məşhur rayon.",
        villages: [
            "Vəndam qəsəbəsi", 
            "Nij kəndi", 
            "Bum qəsəbəsi", 
            "Həmzəli kəndi", 
            "Zalam kəndi", 
            "Tikanlı kəndi"
        ]
    }
};

// SVG xəritədəki bütün rayon elementlərini seçirik
const regions = document.querySelectorAll('.region');

regions.forEach(region => {
    // Üzərinə gələndə (hover) məlumatları yenilə
    region.addEventListener('mouseenter', (e) => {
        const regionId = e.target.getAttribute('data-id');
        updatePanel(regionId);
    });

    // Toxunanda (Mobil cihazlar üçün)
    region.addEventListener('click', (e) => {
        const regionId = e.target.getAttribute('data-id');
        updatePanel(regionId);
    });
});

function updatePanel(id) {
    const data = regionData[id];
    if (!data) return;

    document.getElementById('regionTitle').innerText = data.name;
    document.getElementById('regionDesc').innerText = data.desc;
    
    const listEl = document.getElementById('villagesList');
    listEl.innerHTML = '';

    data.villages.forEach(village => {
        const li = document.createElement('li');
        li.innerText = '📍 ' + village;
        listEl.appendChild(li);
    });
}
