const regions = {
    imishli: { name: "İmişli", lat: 39.87, lon: 48.06 },
    baku: { name: "Bakı", lat: 40.4093, lon: 49.8671 },
    ganja: { name: "Gəncə", lat: 40.6828, lon: 46.3606 },
    sumqayit: { name: "Sumqayıt", lat: 40.5897, lon: 49.6686 },
    mingachevir: { name: "Mingəçevir", lat: 40.7693, lon: 47.0494 },
    shirvan: { name: "Şirvan", lat: 39.9547, lon: 48.9258 },
    nakhchivan: { name: "Naxçıvan", lat: 39.2088, lon: 45.4122 },
    lankaran: { name: "Lənkəran", lat: 38.7529, lon: 48.8505 },
    sheki: { name: "Şəki", lat: 41.1919, lon: 47.1706 },
    guba: { name: "Quba", lat: 41.3653, lon: 48.5147 },
    gusar: { name: "Qusar", lat: 41.4239, lon: 48.4302 },
    khachmaz: { name: "Xaçmaz", lat: 41.4678, lon: 48.8031 },
    gabala: { name: "Qəbələ", lat: 40.9814, lon: 47.8453 },
    ismayilli: { name: "İsmayıllı", lat: 40.7836, lon: 48.1511 },
    shamakhi: { name: "Şamaxı", lat: 40.6303, lon: 48.6344 },
    agdam: { name: "Ağdam", lat: 39.9929, lon: 46.9276 },
    agjabadi: { name: "Ağcabədi", lat: 40.0489, lon: 47.4622 },
    barda: { name: "Bərdə", lat: 40.3708, lon: 47.1267 },
    tartar: { name: "Tərtər", lat: 40.3411, lon: 46.9281 },
    fuzuli: { name: "Füzuli", lat: 39.6003, lon: 47.1419 },
    jabrayil: { name: "Cəbrayıl", lat: 39.3975, lon: 47.0286 },
    zangilan: { name: "Zəngilan", lat: 39.0864, lon: 46.6633 },
    gubadli: { name: "Qubadlı", lat: 39.2294, lon: 46.5847 },
    lachin: { name: "Laçın", lat: 39.6386, lon: 46.5461 },
    kalbajar: { name: "Kəlbəcər", lat: 40.1044, lon: 46.0358 },
    shusha: { name: "Şuşa", lat: 39.7558, lon: 46.7461 },
    khankendi: { name: "Xankəndi", lat: 39.8258, lon: 46.7622 },
    khojaly: { name: "Xocalı", lat: 39.9133, lon: 46.7936 },
    agstafa: { name: "Ağstafa", lat: 41.1219, lon: 45.4561 },
    gazakh: { name: "Qazax", lat: 41.0928, lon: 45.3672 },
    Tovuz: { name: "Tovuz", lat: 40.9922, lon: 45.6294 },
    shamkir: { name: "Şəmkir", lat: 40.8694, lon: 46.0153 },
    dashkasan: { name: "Daşkəsən", lat: 40.5217, lon: 46.0786 },
    gadabay: { name: "Gədəbəy", lat: 40.5694, lon: 45.8153 },
    geygel: { name: "Göygöl", lat: 40.5858, lon: 46.3242 },
    goranboy: { name: "Goranboy", lat: 40.6128, lon: 46.7869 },
    naftalan: { name: "Naftalan", lat: 40.5114, lon: 46.8208 },
    yevlakh: { name: "Yevlax", lat: 40.6178, lon: 47.1506 },
    agdash: { name: "Ağdaş", lat: 40.6489, lon: 47.4764 },
    goychay: { name: "Göyçay", lat: 40.6506, lon: 47.7408 },
    kurdamir: { name: "Kürdəmir", lat: 40.3692, lon: 48.3589 },
    uajar: { name: "Ucar", lat: 40.5186, lon: 47.6533 },
    zardab: { name: "Zərdab", lat: 40.2178, lon: 47.7122 },
    salyan: { name: "Salyan", lat: 39.5961, lon: 48.9853 },
    neftchala: { name: "Neftçala", lat: 39.3581, lon: 48.4736 },
    bilasuvar: { name: "Biləsuvar", lat: 39.4597, lon: 48.5456 },
    jalilabad: { name: "Cəlilabad", lat: 39.2089, lon: 48.5097 },
    masalli: { name: "Masallı", lat: 39.0331, lon: 48.6656 },
    yardimli: { name: "Yardımlı", lat: 38.6997, lon: 48.2475 },
    lerik: { name: "Lerik", lat: 38.7736, lon: 48.4153 },
    astara: { name: "Astara", lat: 38.4589, lon: 48.8753 },
    ojuz: { name: "Oğuz", lat: 41.0722, lon: 47.4667 },
    gah: { name: "Qax", lat: 41.4194, lon: 46.9208 },
    zagatala: { name: "Zaqatala", lat: 41.6328, lon: 46.6475 },
    balaken: { name: "Balakən", lat: 41.7297, lon: 46.4031 },
    khizi: { name: "Xızı", lat: 40.7114, lon: 49.0708 },
    siyazan: { name: "Siyəzən", lat: 40.9994, lon: 49.1158 },
    shabran: { name: "Şabran", lat: 41.0208, lon: 48.9792 },
    hajigabul: { name: "Hacıqabul", lat: 40.0333, lon: 48.9417 },
    beylagan: { name: "Beyləqan", lat: 39.7761, lon: 47.6186 }
};

const weatherCodes = {
    0: { text: "Açıq səma", icon: "☀️" },
    1: { text: "Əsasən açıq", icon: "🌤️" },
    2: { text: "Qismən buludlu", icon: "⛅" },
    3: { text: "Buludlu", icon: "☁️" },
    45: { text: "Dumanlı", icon: "🌫️" },
    48: { text: "Qırovlu duman", icon: "🌫️" },
    51: { text: "Yüngül çiskin", icon: "🌦️" },
    53: { text: "Orta çiskin", icon: "🌦️" },
    55: { text: "Sıx çiskin", icon: "🌧️" },
    61: { text: "Yüngül yağış", icon: "🌦️" },
    63: { text: "Yağışlı", icon: "🌧️" },
    65: { text: "Güclü yağış", icon: "⛈️" },
    71: { text: "Yüngül qar", icon: "🌨️" },
    73: { text: "Qarlı", icon: "❄️" },
    75: { text: "Güclü qar", icon: "❄️" },
    80: { text: "Leysan yağışı", icon: "🌦️" },
    81: { text: "Güclü leysan", icon: "⛈️" },
    95: { text: "Şimşəkli tufan", icon: "⛈️" }
};

const daysAz = ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"];

function getWeatherInfo(code) {
    return weatherCodes[code] || { text: "Dəyişkən", icon: "🌡️" };
}

async function fetchWeather() {
    const select = document.getElementById('regionSelect');
    const key = select.value;
    const region = regions[key];
    const content = document.getElementById('content');

    content.className = 'loading';
    content.innerHTML = region.name + ' üçün hava məlumatları yüklənir...';

    try {
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${region.lat}&longitude=${region.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,surface_pressure,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;
        
        const res = await fetch(apiUrl);
        const data = await res.json();
        
        const current = data.current;
        const daily = data.daily;
        const info = getWeatherInfo(current.weather_code);

        const now = new Date();
        document.getElementById('current-date').innerText = 
            daysAz[now.getDay()] + ", " + now.toLocaleTimeString('az-AZ', { hour: '2-digit', minute: '2-digit' });

        let forecastHTML = '';
        for (let i = 1; i <= 5; i++) {
            const dateObj = new Date(daily.time[i]);
            const dayName = daysAz[dateObj.getDay()];
            const dInfo = getWeatherInfo(daily.weather_code[i]);
            const maxT = Math.round(daily.temperature_2m_max[i]);
            const minT = Math.round(daily.temperature_2m_min[i]);

            forecastHTML += `
                <div class="forecast-item">
                    <span class="f-day">${dayName}</span>
                    <span class="f-icon">${dInfo.icon}</span>
                    <span class="f-temps">${maxT}° <span class="f-min">${minT}°</span></span>
                </div>
            `;
        }

        content.className = '';
        content.innerHTML = `
            <div class="main-weather">
                <div class="weather-icon">${info.icon}</div>
                <div class="temp">${Math.round(current.temperature_2m)}°</div>
                <div class="condition">${info.text}</div>
            </div>

            <div class="details-grid">
                <div class="detail-card">
                    <span class="detail-label">Hiss olunur</span>
                    <span class="detail-value">${Math.round(current.apparent_temperature)}°C</span>
                </div>
                <div class="detail-card">
                    <span class="detail-label">Rütubət</span>
                    <span class="detail-value">${current.relative_humidity_2m}%</span>
                </div>
                <div class="detail-card">
                    <span class="detail-label">Külək</span>
                    <span class="detail-value">${current.wind_speed_10m} km/s</span>
                </div>
                <div class="detail-card">
                    <span class="detail-label">Təzyiq</span>
                    <span class="detail-value">${Math.round(current.surface_pressure)} hPa</span>
                </div>
            </div>

            <div class="forecast-title">5 Günlük Proqnoz</div>
            <div class="forecast-list">
                ${forecastHTML}
            </div>
        `;
    } catch (err) {
        content.innerHTML = '<p style="color:#fca5a5; text-align:center;">Məlumat alınarkən xəta baş verdi. İnterneti yoxlayın.</p>';
    }
}

function changeRegion() {
    fetchWeather();
}

// Səhifə yüklənən kimi işə düşür
fetchWeather();
