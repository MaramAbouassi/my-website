
        // بيانات الفعاليات
        const eventsData = [
            {
                id: 1,
                title: "حفلة ساجرادا فاميليا السنوية",
                description: "احتفال سنوي عند أشهر معلم في برشلونة مع عروض ضوئية وموسيقية رائعة تجذب الزوار من جميع أنحاء العالم.",
                category: "culture",
                location: "center",
                date: "2026-10-12",
                price: "26€",
                image: "IMG_0907.WEBP",
                status: "today"
            },
            {
                id: 2,
                title: "ملاهي بورت أفنتشر بارك",
                description: "تعرف على واحدة من أفضل مدن الملاهي في أوروبا",
                category: "family",
                location: "salou",
                date: "2026-07-05",
                price: "22€",
                image: "IMG_0997.JPG",
                status: "upcoming"
            },
            {
                id: 3,
                title: "مهرجان الأضواء الساحر",
                description: "عرض ضوئي مذهل يغطي شوارع غراسيا بألوان قوس قزح. تجربة سحرية للكبار والصغار في أحياء برشلونة.",
                category: "family",
                location: "gracia",
                date: "2026-09-24",
                price: "15€",
                image: "IMG_0904.JPG",
                status: "upcoming"
            },
            {
                id: 4,
                title: "مباراة برشلونة وريال مدريد",
                description: "مواجهة كلاسيكية بين قطبي الكرة الإسبانية في بطولة الدوري المحلي. لا تفوت فرصة مشاهدة هذه المباراة التاريخية.",
                category: "sports",
                location: "Camp Nou",
                date: "2025-10-26",
                price: "50€",
                image: "IMG_1047.WEBP",
                status: "upcoming"
            },
            {
                id: 5,
                title: "مهرجان المأكولات البحرية",
                description: "معرض رائد لمحترفي المأكلات البحرية",
                category: "food",
                location: "barceloneta",
                date: "2026-04-21",
                price: "20€",
                image: "IMG_0971.JPG",
                status: "upcoming"
            },
            {
                id: 6,
                title: "زيارة متحف نادي برشلونة",
                description: "التعرف على ماضي وحاضر ومستقبل نادي برشلونةالمميز",
                category: "sports",
                location: "Camp Nou",
                date: "2026-01-2",
                price: "28€",
                image: "IMG_0919.PNG",
                status: "upcoming"
            },
            {
                id: 7,
                title: "منتزه جويل",
                description: "حديقة خيالية, من الأماكن المدهشة التي يجب ألا تفوتها",
                category: "family",
                location: "garcia",
                date: "2026-01-2",
                price: "30€",
                image: "IMG_0913.WEBP",
                status: "past"
            },
            {
                id: 8,
                title: "مهرجان برشلونة للجاز",
                description: "أفضل عازفي الجاز العالميين في حفلات ليالية ساحرة في الهواء الطلق.",
                category: "music",
                location: "center",
                date: "2025-10-10",
                price: "14€",
                image: "IMG_1048.JPG",
                status: "past"
            },
            {
                id: 9,
                title: "مهرجان برشلونة للموسيقى",
                description: "احتفال موسيقي يجمع أفضل الفنانين المحليين والدوليين في أجواء لا تُنسى.",
                category: "music",
                location: "Seotadella",
                date: "2026-04-31",
                price: "مجاني",
                image: "IMG_E0915.JPG",
                status: "past"
            }
        ];

        // خرائط الترجمة
        const categoryMap = {
            'culture': 'ثقافة',
            'sports': 'رياضة',
            'music': 'موسيقى',
            'food': 'طعام',
            'family': 'عائلي'
        };

        const locationMap = {
            'center': 'وسط المدينة',
            'gothic': 'الحي القوطي',
            'gracia': 'غراسيا',
            'barceloneta': 'بارسلونيتا',
            'eixample': 'ايكسامبل',
            'Camp Nou':'كامب نو ',
            'salou':'سالو,جنوب كاتالونيا',
            'barcelona':'تحت القصر الوطني',
            'Seotadella':'حديقة سيوتاديلا'
        };

        const statusMap = {
            'today': { text: 'اليوم', color: 'var(--success-color)' },
            'upcoming': { text: 'قادم', color: 'var(--primary-color)' },
            'past': { text: 'منتهي', color: 'var(--danger-color)' }
        };

        // كود JavaScript للتحكم في العرض والتصفية
        document.addEventListener('DOMContentLoaded', function () {
            // عناصر DOM
            const gridView = document.getElementById('grid-view');
            const listView = document.getElementById('list-view');
            const searchInput = document.getElementById('search-input');
            const searchBtn = document.getElementById('search-btn');
            const categorySelect = document.getElementById('category');
            const locationSelect = document.getElementById('location');
            const dateSelect = document.getElementById('date');
            const sortSelect = document.getElementById('sort');
            const quickSort = document.getElementById('quick-sort');
            const resetBtn = document.getElementById('reset-btn');
            const resultsCount = document.getElementById('results-count');
            const displayedEvents = document.getElementById('displayed-events');

            // تهيئة البيانات
            let filteredEvents = [...eventsData];
            renderEvents();

            // التحكم في طريقة العرض (شبكة/قائمة)
            const viewBtns = document.querySelectorAll('.view-btn');
            viewBtns.forEach(btn => {
                btn.addEventListener('click', function () {
                    const viewType = this.getAttribute('data-view');

                    // تحديث الأزرار النشطة
                    viewBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');

                    // تبديل العرض
                    if (viewType === 'grid') {
                        gridView.style.display = 'grid';
                        listView.style.display = 'none';
                    } else {
                        gridView.style.display = 'none';
                        listView.style.display = 'block';
                    }
                });
            });

            // تطبيق الفلاتر
            function applyFilters() {
                const searchTerm = searchInput.value.toLowerCase();
                const categoryValue = categorySelect.value;
                const locationValue = locationSelect.value;
                const dateValue = dateSelect.value;
                const sortValue = sortSelect.value;

                // تصفية حسب البحث
                filteredEvents = eventsData.filter(event => {
                    const matchesSearch = !searchTerm ||
                        event.title.toLowerCase().includes(searchTerm) ||
                        event.description.toLowerCase().includes(searchTerm);

                    const matchesCategory = categoryValue === 'all' || event.category === categoryValue;
                    const matchesLocation = locationValue === 'all' || event.location === locationValue;

                    // تصفية حسب التاريخ
                    let matchesDate = true;
                    const eventDate = new Date(event.date);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);

                    if (dateValue !== 'all') {
                        switch (dateValue) {
                            case 'today':
                                matchesDate = event.date === today.toISOString().split('T')[0];
                                break;
                            case 'week':
                                const weekEnd = new Date(today);
                                weekEnd.setDate(today.getDate() + 7);
                                matchesDate = eventDate >= today && eventDate <= weekEnd;
                                break;
                            case 'month':
                                const monthEnd = new Date(today);
                                monthEnd.setMonth(today.getMonth() + 1);
                                matchesDate = eventDate >= today && eventDate <= monthEnd;
                                break;
                            case 'upcoming':
                                matchesDate = eventDate >= today;
                                break;
                            case 'past':
                                matchesDate = eventDate < today;
                                break;
                        }
                    }

                    return matchesSearch && matchesCategory && matchesLocation && matchesDate;
                });

                // تطبيق الترتيب
                applySorting(sortValue);

                // إعادة العرض
                renderEvents();
            }

            // تطبيق الترتيب
            function applySorting(sortValue) {
                filteredEvents.sort((a, b) => {
                    switch (sortValue) {
                        case 'date_asc':
                            return new Date(a.date) - new Date(b.date);
                        case 'date_desc':
                            return new Date(b.date) - new Date(a.date);
                        case 'title_asc':
                            return a.title.localeCompare(b.title, 'ar');
                        case 'title_desc':
                            return b.title.localeCompare(a.title, 'ar');
                        default:
                            return 0;
                    }
                });
            }

            // عرض الفعاليات
            function renderEvents() {
                // تحديث الإحصائيات
                resultsCount.textContent = `عرض ${filteredEvents.length} من أصل ${eventsData.length} فعالية`;
                displayedEvents.textContent = filteredEvents.length;

                // عرض الشبكة
                gridView.innerHTML = '';
                if (filteredEvents.length === 0) {
                    gridView.innerHTML = `
                        <div class="no-results">
                            <i class="fas fa-search"></i>
                            <h3>لم نعثر على أي فعاليات</h3>
                            <p>جرب تعديل عوامل التصفية أو البحث بكلمات أخرى</p>
                            <button class="details-btn" onclick="resetFilters()">إعادة تعيين الفلاتر</button>
                        </div>
                    `;
                } else {
                    filteredEvents.forEach(event => {
                        const eventElement = createEventCard(event);
                        gridView.appendChild(eventElement);
                    });
                }

                // عرض القائمة
                listView.innerHTML = '';
                if (filteredEvents.length === 0) {
                    listView.innerHTML = `
                        <div class="no-results">
                            <i class="fas fa-search"></i>
                            <h3>لم نعثر على أي فعاليات</h3>
                            <p>جرب تعديل عوامل التصفية أو البحث بكلمات أخرى</p>
                            <button class="details-btn" onclick="resetFilters()">إعادة تعيين الفلاتر</button>
                        </div>
                    `;
                } else {
                    filteredEvents.forEach(event => {
                        const listElement = createEventListItem(event);
                        listView.appendChild(listElement);
                    });
                }
            }

            // إنشاء بطاقة فعالية للشبكة
            function createEventCard(event) {
                const eventDate = new Date(event.date);
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                let status = 'upcoming';
                if (event.date === today.toISOString().split('T')[0]) {
                    status = 'today';
                } else if (eventDate < today) {
                    status = 'past';
                }

                const div = document.createElement('div');
                div.className = 'event-card';
                div.innerHTML = `
                    <div class="event-image">
                        <img src="${event.image}" alt="${event.title}" onload="this.style.opacity='1'">
                        <span class="event-badge" style="background: ${statusMap[status].color};">${statusMap[status].text}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-date">
                            <i class="far fa-calendar-alt"></i>
                            ${formatDate(event.date)}
                        </div>
                        <h3 class="event-title">${event.title}</h3>
                        <div class="event-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${locationMap[event.location]}
                        </div>
                        <span class="event-category">${categoryMap[event.category]}</span>
                        <p class="event-description">${event.description}</p>
                        <div class="event-meta">
                            <div class="event-price">${event.price}</div>
                            <div class="event-actions">
                                <button class="favorite-btn" title="إضافة إلى المفضلة">
                                    <i class="far fa-heart"></i>
                                </button>
                                <a href="event.html?id=${event.id}" class="details-btn">
                                    <i class="fas fa-eye"></i> التفاصيل
                                </a>
                            </div>
                        </div>
                    </div>
                `;
                return div;
            }

            // إنشاء عنصر فعالية للقائمة
            function createEventListItem(event) {
                const eventDate = new Date(event.date);
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                let status = 'upcoming';
                if (event.date === today.toISOString().split('T')[0]) {
                    status = 'today';
                } else if (eventDate < today) {
                    status = 'past';
                }

                const div = document.createElement('div');
                div.className = 'event-list-item';
                div.innerHTML = `
                    <img src="${event.image}" alt="${event.title}" class="list-event-image" onload="this.style.opacity='1'">
                    <div class="list-event-content">
                        <div class="list-event-header">
                            <div>
                                <h3 class="list-event-title">${event.title}</h3>
                                <div class="list-event-meta">
                                    <span class="event-date">
                                        <i class="far fa-calendar-alt"></i>
                                        ${formatDate(event.date)}
                                    </span>
                                    <span class="event-location">
                                        <i class="fas fa-map-marker-alt"></i>
                                        ${locationMap[event.location]}
                                    </span>
                                    <span class="event-category">
                                        ${categoryMap[event.category]}
                                    </span>
                                </div>
                            </div>
                            <div class="event-price">${event.price}</div>
                        </div>
                        <p class="list-event-description">${event.description}</p>
                        <div class="event-actions" style="margin-top: 15px;">
                            <button class="favorite-btn" title="إضافة إلى المفضلة">
                                <i class="far fa-heart"></i>
                            </button>
                            <a href="event.html?id=${event.id}" class="details-btn">
                                <i class="fas fa-eye"></i> عرض التفاصيل
                            </a>
                        </div>
                    </div>
                `;
                return div;
            }

            // تنسيق التاريخ
            function formatDate(dateString) {
                const date = new Date(dateString);
                const options = { day: 'numeric', month: 'long', year: 'numeric' };
                return date.toLocaleDateString('ar-EG', options);
            }

            // إعادة تعيين الفلاتر
            function resetFilters() {
                searchInput.value = '';
                categorySelect.value = 'all';
                locationSelect.value = 'all';
                dateSelect.value = 'all';
                sortSelect.value = 'date_asc';
                quickSort.value = 'date_asc';
                applyFilters();
            }

            // إضافة مستمعي الأحداث
            searchBtn.addEventListener('click', applyFilters);
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') applyFilters();
            });
            categorySelect.addEventListener('change', applyFilters);
            locationSelect.addEventListener('change', applyFilters);
            dateSelect.addEventListener('change', applyFilters);
            sortSelect.addEventListener('change', applyFilters);
            quickSort.addEventListener('change', function () {
                sortSelect.value = this.value;
                applyFilters();
            });
            resetBtn.addEventListener('click', resetFilters);

            // إضافة إلى المفضلة
            document.addEventListener('click', function (e) {
                if (e.target.closest('.favorite-btn')) {
                    const btn = e.target.closest('.favorite-btn');
                    const icon = btn.querySelector('i');
                    if (icon.classList.contains('far')) {
                        icon.classList.remove('far');
                        icon.classList.add('fas');
                        btn.style.background = 'var(--danger-color)';
                        btn.style.color = 'white';
                    } else {
                        icon.classList.remove('fas');
                        icon.classList.add('far');
                        btn.style.background = 'var(--secondary-color)';
                        btn.style.color = 'var(--dark-color)';
                    }
                }
            });

            // جعل resetFilters متاحة globally
            window.resetFilters = resetFilters;
        });






