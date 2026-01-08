/**
 * AutoLog JSON Viewer
 * Web-based viewer for AutoLog app backup files
 */

// ============== 다국어 지원 ==============
const translations = {
    en: {
        appTitle: "AutoLog JSON Viewer",
        openFile: "📂 Open JSON File",
        exportCsv: "📊 Export CSV",
        fileName: "File Name:",
        exportDate: "Export Date:",
        appVersion: "App Version:",
        backupNotice: "All data is displayed based on the export date. This is a read-only viewer.",
        vehicles: "Vehicles",
        fuelLogs: "Fuel/Charge",
        maintenance: "Maintenance",
        expenses: "Expenses",
        searchPlaceholder: "Search...",
        allVehicles: "All Vehicles",
        clear: "🔄 Clear",
        totalFuelCost: "Total Fuel Cost",
        totalMaintenanceCost: "Maintenance Cost",
        totalExpenses: "Other Expenses",
        totalAllCosts: "Total All Costs",
        welcomeTitle: "🚗 AutoLog JSON Viewer",
        welcomeDesc: "View JSON backup files exported from AutoLog app.",
        webVersionNotice: "🌐 Web Browser Version - No installation required!",
        featureView: "✅ Complete Data View",
        featureViewDesc: "Vehicles, fuel logs, maintenance, expenses",
        featureSearch: "🔍 Search & Filter",
        featureSearchDesc: "Filter by vehicle and quick search",
        featureStats: "📊 Statistics",
        featureStatsDesc: "View cost summaries and totals",
        featurePrivacy: "🔒 Privacy First",
        featurePrivacyDesc: "All data processed locally in your browser",
        // Vehicle table
        vehicle: "Vehicle",
        manufacturer: "Manufacturer",
        model: "Model",
        year: "Year",
        plateNumber: "Add. Info / No. ",
        fuelType: "Fuel Type",
        odometer: "Odometer",
        purchaseDate: "Purchase Date",
        // Fuel logs table
        date: "Date",
        station: "Station",
        pricePerUnit: "Price/Unit",
        quantity: "Quantity",
        totalCost: "Total Cost",
        efficiency: "Efficiency",
        fullTank: "Full Tank",
        chargerType: "Charger Type",
        batteryLevel: "Battery Level",
        // Maintenance table
        type: "Type",
        description: "Description",
        cost: "Cost",
        shop: "Shop",
        nextDue: "Next Due",
        // Expenses table
        category: "Category",
        amount: "Amount",
        notes: "Notes",
        // Details
        details: "Details",
        noData: "No data available",
        noResults: "No results found",
        // Fuel types
        gasoline: "Gasoline",
        diesel: "Diesel",
        electric: "Electric",
        hybrid: "Hybrid",
        lpg: "LPG",
        // Help
        helpTitle: "📖 Help",
        helpIntro: "AutoLog JSON Viewer is a web-based tool for viewing backup files exported from the AutoLog app.",
        helpHowToUse: "How to Use",
        helpStep1: "1. Click 'Open JSON File' button",
        helpStep2: "2. Select your AutoLog backup JSON file",
        helpStep3: "3. Browse your data using the tabs",
        helpStep4: "4. Use search and filter to find specific records",
        helpStep5: "5. Click any row to see full details",
        helpExport: "Export to CSV",
        helpExportDesc: "Click 'Export CSV' to download your data in spreadsheet format.",
        helpPrivacy: "Privacy",
        helpPrivacyDesc: "All data is processed locally in your browser. No data is ever sent to any server.",
        close: "Close"
    },
    ko: {
        appTitle: "AutoLog JSON 뷰어",
        openFile: "📂 JSON 파일 열기",
        exportCsv: "📊 CSV 내보내기",
        fileName: "파일 이름:",
        exportDate: "내보내기 날짜:",
        appVersion: "앱 버전:",
        backupNotice: "모든 데이터는 내보내기 날짜 기준입니다. 읽기 전용 뷰어입니다.",
        vehicles: "차량",
        fuelLogs: "주유/충전",
        maintenance: "정비",
        expenses: "비용",
        searchPlaceholder: "검색...",
        allVehicles: "전체 차량",
        clear: "🔄 초기화",
        totalFuelCost: "총 연료비",
        totalMaintenanceCost: "정비 비용",
        totalExpenses: "기타 비용",
        totalAllCosts: "총 비용",
        welcomeTitle: "🚗 AutoLog JSON 뷰어",
        welcomeDesc: "AutoLog 앱에서 내보낸 JSON 백업 파일을 확인하세요.",
        webVersionNotice: "🌐 웹 브라우저 버전 - 설치 불필요!",
        featureView: "✅ 완벽한 데이터 보기",
        featureViewDesc: "차량, 주유 기록, 정비, 비용",
        featureSearch: "🔍 검색 및 필터",
        featureSearchDesc: "차량별 필터 및 빠른 검색",
        featureStats: "📊 통계",
        featureStatsDesc: "비용 요약 및 합계 보기",
        featurePrivacy: "🔒 개인정보 보호",
        featurePrivacyDesc: "모든 데이터는 브라우저에서 로컬 처리",
        // Vehicle table
        vehicle: "차량",
        manufacturer: "제조사",
        model: "모델",
        year: "연식",
        plateNumber: "추가 정보 / 번호",
        fuelType: "연료 유형",
        odometer: "주행거리",
        purchaseDate: "구매 일자",
        // Fuel logs table
        date: "날짜",
        station: "주유소/충전소",
        pricePerUnit: "단가",
        quantity: "수량",
        totalCost: "총액",
        efficiency: "연비",
        fullTank: "완충",
        chargerType: "충전기 유형",
        batteryLevel: "배터리 수준",
        // Maintenance table
        type: "유형",
        description: "설명",
        cost: "비용",
        shop: "정비소",
        nextDue: "다음 예정",
        // Expenses table
        category: "카테고리",
        amount: "금액",
        notes: "메모",
        // Details
        details: "상세 정보",
        noData: "데이터가 없습니다",
        noResults: "검색 결과가 없습니다",
        // Fuel types
        gasoline: "휘발유",
        diesel: "경유",
        electric: "전기",
        hybrid: "하이브리드",
        lpg: "LPG",
        // Help
        helpTitle: "📖 도움말",
        helpIntro: "AutoLog JSON 뷰어는 AutoLog 앱에서 내보낸 백업 파일을 보는 웹 기반 도구입니다.",
        helpHowToUse: "사용 방법",
        helpStep1: "1. 'JSON 파일 열기' 버튼 클릭",
        helpStep2: "2. AutoLog 백업 JSON 파일 선택",
        helpStep3: "3. 탭을 사용하여 데이터 탐색",
        helpStep4: "4. 검색 및 필터로 특정 기록 찾기",
        helpStep5: "5. 행을 클릭하여 상세 정보 보기",
        helpExport: "CSV로 내보내기",
        helpExportDesc: "'CSV 내보내기'를 클릭하여 스프레드시트 형식으로 다운로드하세요.",
        helpPrivacy: "개인정보 보호",
        helpPrivacyDesc: "모든 데이터는 브라우저에서 로컬로 처리됩니다. 어떤 데이터도 서버로 전송되지 않습니다.",
        close: "닫기"
    }
};

// ============== 전역 변수 ==============
let currentLang = 'en';
let jsonData = null;
let currentTab = 'vehicles';
let vehicleMap = {};

// ============== 초기화 ==============
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initEventListeners();
    loadPreviousData(); // Auto-load previous data if exists
});

function initLanguage() {
    const savedLang = localStorage.getItem('autolog-viewer-lang') || 'en';
    currentLang = savedLang;
    document.getElementById('languageSelect').value = savedLang;
    applyTranslations();
}

function applyTranslations() {
    const t = translations[currentLang];
    
    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // Update placeholders
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = t.searchPlaceholder;
    }
    
    // Update tab labels
    updateTabLabels();
    
    // Update stats labels
    updateStatsLabels();
    
    // Update welcome screen
    updateWelcomeScreen();
    
    // Update file info labels
    updateFileInfoLabels();
}

function updateTabLabels() {
    const t = translations[currentLang];
    const tabs = document.querySelectorAll('.tab');
    const tabNames = ['vehicles', 'fuelLogs', 'maintenance', 'expenses'];
    const icons = ['🚙', '⛽', '🔧', '💰'];
    
    tabs.forEach((tab, index) => {
        const countId = `${tabNames[index]}Count`;
        const countEl = document.getElementById(countId);
        const countValue = countEl ? countEl.textContent : '0';
        
        tab.innerHTML = `
            <span class="tab-icon">${icons[index]}</span> 
            <span>${t[tabNames[index]]}</span>
            <span class="badge badge-diesel" style="margin-left: auto; font-size: 10px;" id="${countId}">${countValue}</span>
        `;
    });
}

function updateStatsLabels() {
    const t = translations[currentLang];
    const labels = document.querySelectorAll('.stat-label');
    const keys = ['totalFuelCost', 'totalMaintenanceCost', 'totalExpenses', 'totalAllCosts'];
    
    labels.forEach((label, index) => {
        if (keys[index] && t[keys[index]]) {
            label.textContent = t[keys[index]];
        }
    });
}

function updateWelcomeScreen() {
    const t = translations[currentLang];
    const welcomeContent = document.querySelector('.welcome-content');
    if (!welcomeContent) return;
    
    welcomeContent.innerHTML = `
        <h2>${t.welcomeTitle}</h2>
        <p>${t.welcomeDesc}</p>
        <p class="web-version-notice">${t.webVersionNotice}</p>
        <button id="openFileBtn2" class="btn-primary btn-large">
            ${t.openFile}
        </button>
        <div class="features">
            <div class="feature">
                <h3>${t.featureView}</h3>
                <p>${t.featureViewDesc}</p>
            </div>
            <div class="feature">
                <h3>${t.featureSearch}</h3>
                <p>${t.featureSearchDesc}</p>
            </div>
            <div class="feature">
                <h3>${t.featureStats}</h3>
                <p>${t.featureStatsDesc}</p>
            </div>
            <div class="feature">
                <h3>${t.featurePrivacy}</h3>
                <p>${t.featurePrivacyDesc}</p>
            </div>
        </div>
    `;
}

function updateFileInfoLabels() {
    const t = translations[currentLang];
    const labels = document.querySelectorAll('.info-item .label');
    const keys = ['fileName', 'exportDate', 'appVersion'];
    
    labels.forEach((label, index) => {
        if (keys[index] && t[keys[index]]) {
            label.textContent = t[keys[index]];
        }
    });
    
    const noticeText = document.querySelector('.notice-text');
    if (noticeText) {
        noticeText.textContent = t.backupNotice;
    }
}

// ============== 이벤트 리스너 ==============
function initEventListeners() {
    // File input
    const fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', handleFileSelect);
    
    // Use event delegation for file open buttons
    document.body.addEventListener('click', (e) => {
        if (e.target.id === 'openFileBtn' || e.target.id === 'openFileBtn2' || 
            e.target.closest('#openFileBtn') || e.target.closest('#openFileBtn2')) {
            fileInput.value = ''; // Reset file input to allow selecting the same file again
            fileInput.click();
        }
    });
    
    // Language select
    document.getElementById('languageSelect').addEventListener('change', (e) => {
        currentLang = e.target.value;
        localStorage.setItem('autolog-viewer-lang', currentLang);
        applyTranslations();
        if (jsonData) {
            renderCurrentTab();
        }
    });
    
    // Export CSV
    document.getElementById('exportCsvBtn').addEventListener('click', exportToCsv);
    
    // Tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.dataset.tab);
        });
    });
    
    // Search and filter
    document.getElementById('searchInput').addEventListener('input', debounce(handleSearch, 300));
    document.getElementById('vehicleFilter').addEventListener('change', handleSearch);
    document.getElementById('clearSearch').addEventListener('click', clearSearch);
    
    // Modal close
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', closeModals);
    });
    
    // Click outside modal to close
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModals();
            }
        });
    });
    
    // Help button
    document.getElementById('helpBtn').addEventListener('click', showHelp);
}

// ============== 파일 처리 ==============
function handleFileSelect(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            jsonData = JSON.parse(event.target.result);
            processData(file.name);
        } catch (error) {
            alert('Invalid JSON file. Please select a valid AutoLog backup file.');
            console.error('JSON parse error:', error);
        }
    };
    reader.readAsText(file);
}

function processData(fileName) {
    // Create vehicle map for quick lookup
    vehicleMap = {};
    if (jsonData.vehicles) {
        jsonData.vehicles.forEach(v => {
            vehicleMap[v.id] = v;
        });
    }
    
    // Update file info
    document.getElementById('fileName').textContent = fileName;
    document.getElementById('exportDate').textContent = formatDateTime(jsonData.exportDate);
    document.getElementById('appVersion').textContent = jsonData.appVersion || 'N/A';
    
    // Update counts
    document.getElementById('vehiclesCount').textContent = jsonData.vehicles?.length || 0;
    document.getElementById('fuelLogsCount').textContent = jsonData.fuelLogs?.length || 0;
    document.getElementById('maintenanceCount').textContent = jsonData.maintenance?.length || 0;
    document.getElementById('expensesCount').textContent = jsonData.expenses?.length || 0;
    
    // Update vehicle filter
    updateVehicleFilter();
    
    // Calculate and show stats
    calculateStats();
    
    // Save to localStorage for auto-load on next visit
    saveToLocalStorage(fileName);
    
    // Show main content
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('fileInfo').classList.remove('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
    document.getElementById('exportCsvBtn').classList.remove('hidden');
    document.getElementById('summaryStats').classList.remove('hidden');
    
    // Render tables
    renderCurrentTab();
}

function saveToLocalStorage(fileName) {
    try {
        const dataToSave = {
            fileName: fileName,
            jsonData: jsonData,
            savedAt: new Date().toISOString()
        };
        localStorage.setItem('autolog-viewer-data', JSON.stringify(dataToSave));
    } catch (error) {
        console.error('Failed to save data to localStorage:', error);
        // If storage is full or blocked, silently fail
    }
}

function loadPreviousData() {
    try {
        const savedData = localStorage.getItem('autolog-viewer-data');
        if (savedData) {
            const parsed = JSON.parse(savedData);
            jsonData = parsed.jsonData;
            processData(parsed.fileName);
        }
    } catch (error) {
        console.error('Failed to load previous data:', error);
        // If data is corrupted, clear it
        localStorage.removeItem('autolog-viewer-data');
    }
}

function updateVehicleFilter() {
    const select = document.getElementById('vehicleFilter');
    const t = translations[currentLang];
    
    select.innerHTML = `<option value="">${t.allVehicles}</option>`;
    
    if (jsonData.vehicles) {
        jsonData.vehicles.forEach(v => {
            const option = document.createElement('option');
            option.value = v.id;
            option.textContent = `${v.nickname || v.model} (${v.plateNumber || 'N/A'})`;
            select.appendChild(option);
        });
    }
}

function calculateStats() {
    let totalFuel = 0;
    let totalMaintenance = 0;
    let totalExpenses = 0;
    
    if (jsonData.fuelLogs) {
        jsonData.fuelLogs.forEach(log => {
            totalFuel += log.totalCost || 0;
        });
    }
    
    if (jsonData.maintenance) {
        jsonData.maintenance.forEach(m => {
            totalMaintenance += m.cost || 0;
        });
    }
    
    if (jsonData.expenses) {
        jsonData.expenses.forEach(e => {
            totalExpenses += e.amount || 0;
        });
    }
    
    const totalAll = totalFuel + totalMaintenance + totalExpenses;
    
    document.getElementById('totalFuelCost').textContent = formatCurrency(totalFuel);
    document.getElementById('totalMaintenanceCost').textContent = formatCurrency(totalMaintenance);
    document.getElementById('totalExpenses').textContent = formatCurrency(totalExpenses);
    document.getElementById('totalAllCosts').textContent = formatCurrency(totalAll);
}

// ============== 탭 관리 ==============
function switchTab(tabName) {
    currentTab = tabName;
    
    // Update tab buttons
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === `${tabName}Tab`);
    });
    
    renderCurrentTab();
}

function renderCurrentTab() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const vehicleId = document.getElementById('vehicleFilter').value;
    
    switch (currentTab) {
        case 'vehicles':
            renderVehiclesTable(searchTerm);
            break;
        case 'fuelLogs':
            renderFuelLogsTable(searchTerm, vehicleId);
            break;
        case 'maintenance':
            renderMaintenanceTable(searchTerm, vehicleId);
            break;
        case 'expenses':
            renderExpensesTable(searchTerm, vehicleId);
            break;
    }
}

// ============== 테이블 렌더링 ==============
function renderVehiclesTable(searchTerm = '') {
    const t = translations[currentLang];
    const container = document.getElementById('vehiclesTable');
    
    if (!jsonData?.vehicles?.length) {
        container.innerHTML = `<p style="padding: 24px; text-align: center; color: #7f8c8d;">${t.noData}</p>`;
        return;
    }
    
    let vehicles = jsonData.vehicles;
    
    // Filter by search term
    if (searchTerm) {
        vehicles = vehicles.filter(v => 
            (v.nickname?.toLowerCase().includes(searchTerm)) ||
            (v.manufacturer?.toLowerCase().includes(searchTerm)) ||
            (v.model?.toLowerCase().includes(searchTerm)) ||
            (v.plateNumber?.toLowerCase().includes(searchTerm))
        );
    }
    
    if (!vehicles.length) {
        container.innerHTML = `<p style="padding: 24px; text-align: center; color: #7f8c8d;">${t.noResults}</p>`;
        return;
    }
    
    const html = `
        <table>
            <thead>
                <tr>
                    <th>${t.vehicle}</th>
                    <th>${t.manufacturer}</th>
                    <th>${t.model}</th>
                    <th>${t.year}</th>
                    <th>${t.plateNumber}</th>
                    <th>${t.fuelType}</th>
                    <th>${t.odometer}</th>
                    <th>${t.purchaseDate}</th>
                </tr>
            </thead>
            <tbody>
                ${vehicles.map(v => `
                    <tr data-id="${v.id}" data-type="vehicle">
                        <td>
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <div class="vehicle-icon-cell">${getVehicleIcon(v.fuelType)}</div>
                                <strong>${escapeHtml(v.nickname || v.model)}</strong>
                            </div>
                        </td>
                        <td>${escapeHtml(v.manufacturer || '-')}</td>
                        <td>${escapeHtml(v.model || '-')}</td>
                        <td>${v.year || '-'}</td>
                        <td><span class="plate-chip">${escapeHtml(v.plateNumber || v.additionalInfo || '-')}</span></td>
                        <td><span class="badge badge-${getFuelTypeBadge(v.fuelType)}">${getFuelTypeLabel(v.fuelType)}</span></td>
                        <td>${formatNumber(v.currentOdometer)} km</td>
                        <td>${formatDate(v.purchaseDate)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    
    container.innerHTML = html;
    attachRowClickHandlers();
}

function renderFuelLogsTable(searchTerm = '', vehicleId = '') {
    const t = translations[currentLang];
    const container = document.getElementById('fuelLogsTable');
    
    if (!jsonData?.fuelLogs?.length) {
        container.innerHTML = `<p style="padding: 24px; text-align: center; color: #7f8c8d;">${t.noData}</p>`;
        return;
    }
    
    let logs = jsonData.fuelLogs;
    
    // Filter by vehicle
    if (vehicleId) {
        logs = logs.filter(l => l.vehicleId == vehicleId);
    }
    
    // Filter by search term
    if (searchTerm) {
        logs = logs.filter(l => 
            (l.stationName?.toLowerCase().includes(searchTerm)) ||
            (l.stationLocation?.toLowerCase().includes(searchTerm)) ||
            (l.notes?.toLowerCase().includes(searchTerm)) ||
            (vehicleMap[l.vehicleId]?.nickname?.toLowerCase().includes(searchTerm))
        );
    }
    
    // Sort by date descending
    logs = logs.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
    
    if (!logs.length) {
        container.innerHTML = `<p style="padding: 24px; text-align: center; color: #7f8c8d;">${t.noResults}</p>`;
        return;
    }
    
    const html = `
        <table>
            <thead>
                <tr>
                    <th>${t.date}</th>
                    <th>${t.vehicle}</th>
                    <th>${t.station}</th>
                    <th>${t.fuelType}</th>
                    <th>${t.pricePerUnit}</th>
                    <th>${t.quantity}</th>
                    <th>${t.totalCost}</th>
                    <th>${t.efficiency}</th>
                </tr>
            </thead>
            <tbody>
                ${logs.map(l => `
                    <tr data-id="${l.id}" data-type="fuelLog">
                        <td>${formatDate(l.dateTime)}</td>
                        <td>${escapeHtml(getVehicleName(l.vehicleId))}</td>
                        <td>${escapeHtml(l.stationName || '-')}</td>
                        <td><span class="badge badge-${getFuelTypeBadge(l.fuelType)}">${getFuelTypeLabel(l.fuelType)}</span></td>
                        <td>${formatCurrency(l.pricePerUnit)}</td>
                        <td>${l.fuelType === 'ELECTRIC' ? `${l.batteryAfter - l.batteryBefore}%` : `${l.quantity?.toFixed(1) || '-'} L`}</td>
                        <td><strong>${formatCurrency(l.totalCost)}</strong></td>
                        <td>${l.calculatedEfficiency ? `${l.calculatedEfficiency.toFixed(1)} km/L` : '-'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    
    container.innerHTML = html;
    attachRowClickHandlers();
}

function renderMaintenanceTable(searchTerm = '', vehicleId = '') {
    const t = translations[currentLang];
    const container = document.getElementById('maintenanceTable');
    
    if (!jsonData?.maintenance?.length) {
        container.innerHTML = `<p style="padding: 24px; text-align: center; color: #7f8c8d;">${t.noData}</p>`;
        return;
    }
    
    let records = jsonData.maintenance;
    
    // Filter by vehicle
    if (vehicleId) {
        records = records.filter(m => m.vehicleId == vehicleId);
    }
    
    // Filter by search term
    if (searchTerm) {
        records = records.filter(m => 
            (m.maintenanceType?.toLowerCase().includes(searchTerm)) ||
            (m.description?.toLowerCase().includes(searchTerm)) ||
            (m.shopName?.toLowerCase().includes(searchTerm)) ||
            (vehicleMap[m.vehicleId]?.nickname?.toLowerCase().includes(searchTerm))
        );
    }
    
    // Sort by date descending
    records = records.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    if (!records.length) {
        container.innerHTML = `<p style="padding: 24px; text-align: center; color: #7f8c8d;">${t.noResults}</p>`;
        return;
    }
    
    const html = `
        <table>
            <thead>
                <tr>
                    <th>${t.date}</th>
                    <th>${t.vehicle}</th>
                    <th>${t.type}</th>
                    <th>${t.description}</th>
                    <th>${t.cost}</th>
                    <th>${t.shop}</th>
                    <th>${t.odometer}</th>
                    <th>${t.nextDue}</th>
                </tr>
            </thead>
            <tbody>
                ${records.map(m => `
                    <tr data-id="${m.id}" data-type="maintenance">
                        <td>${formatDate(m.date)}</td>
                        <td>${escapeHtml(getVehicleName(m.vehicleId))}</td>
                        <td><span class="badge badge-info">${escapeHtml(formatMaintenanceType(m.maintenanceType))}</span></td>
                        <td>${escapeHtml(m.description || '-')}</td>
                        <td><strong>${formatCurrency(m.cost)}</strong></td>
                        <td>${escapeHtml(m.shopName || '-')}</td>
                        <td>${formatNumber(m.odometerReading)} km</td>
                        <td>${m.nextDueOdometer ? `${formatNumber(m.nextDueOdometer)} km` : (m.nextDueDate ? formatDate(m.nextDueDate) : '-')}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    
    container.innerHTML = html;
    attachRowClickHandlers();
}

function renderExpensesTable(searchTerm = '', vehicleId = '') {
    const t = translations[currentLang];
    const container = document.getElementById('expensesTable');
    
    if (!jsonData?.expenses?.length) {
        container.innerHTML = `<p style="padding: 24px; text-align: center; color: #7f8c8d;">${t.noData}</p>`;
        return;
    }
    
    let expenses = jsonData.expenses;
    
    // Filter by vehicle
    if (vehicleId) {
        expenses = expenses.filter(e => e.vehicleId == vehicleId);
    }
    
    // Filter by search term
    if (searchTerm) {
        expenses = expenses.filter(e => 
            (e.category?.toLowerCase().includes(searchTerm)) ||
            (e.description?.toLowerCase().includes(searchTerm)) ||
            (e.notes?.toLowerCase().includes(searchTerm)) ||
            (vehicleMap[e.vehicleId]?.nickname?.toLowerCase().includes(searchTerm))
        );
    }
    
    // Sort by date descending
    expenses = expenses.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    if (!expenses.length) {
        container.innerHTML = `<p style="padding: 24px; text-align: center; color: #7f8c8d;">${t.noResults}</p>`;
        return;
    }
    
    const html = `
        <table>
            <thead>
                <tr>
                    <th>${t.date}</th>
                    <th>${t.vehicle}</th>
                    <th>${t.category}</th>
                    <th>${t.description}</th>
                    <th>${t.amount}</th>
                    <th>${t.notes}</th>
                </tr>
            </thead>
            <tbody>
                ${expenses.map(e => `
                    <tr data-id="${e.id}" data-type="expense">
                        <td>${formatDate(e.date)}</td>
                        <td>${escapeHtml(getVehicleName(e.vehicleId))}</td>
                        <td><span class="badge badge-primary">${escapeHtml(formatExpenseCategory(e.category))}</span></td>
                        <td>${escapeHtml(e.description || '-')}</td>
                        <td><strong>${formatCurrency(e.amount)}</strong></td>
                        <td>${escapeHtml(truncateText(e.notes, 50) || '-')}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    
    container.innerHTML = html;
    attachRowClickHandlers();
}

// ============== 상세보기 ==============
function attachRowClickHandlers() {
    document.querySelectorAll('tbody tr[data-id]').forEach(row => {
        row.addEventListener('click', () => {
            const id = row.dataset.id;
            const type = row.dataset.type;
            showDetail(id, type);
        });
    });
}

function showDetail(id, type) {
    let data = null;
    
    switch (type) {
        case 'vehicle':
            data = jsonData.vehicles.find(v => v.id == id);
            break;
        case 'fuelLog':
            data = jsonData.fuelLogs.find(l => l.id == id);
            break;
        case 'maintenance':
            data = jsonData.maintenance.find(m => m.id == id);
            break;
        case 'expense':
            data = jsonData.expenses.find(e => e.id == id);
            break;
    }
    
    if (!data) return;
    
    const t = translations[currentLang];
    const content = document.getElementById('detailContent');
    
    let html = `<h2 style="margin-bottom: 20px;">${t.details}</h2>`;
    
    switch (type) {
        case 'vehicle':
            html += renderVehicleDetail(data);
            break;
        case 'fuelLog':
            html += renderFuelLogDetail(data);
            break;
        case 'maintenance':
            html += renderMaintenanceDetail(data);
            break;
        case 'expense':
            html += renderExpenseDetail(data);
            break;
    }
    
    content.innerHTML = html;
    document.getElementById('detailModal').classList.remove('hidden');
}

function renderVehicleDetail(v) {
    const t = translations[currentLang];
    return `
        <h3>🚗 ${escapeHtml(v.nickname || v.model)}</h3>
        <p><strong>${t.manufacturer}:</strong> ${escapeHtml(v.manufacturer || '-')}</p>
        <p><strong>${t.model}:</strong> ${escapeHtml(v.model || '-')}</p>
        <p><strong>${t.year}:</strong> ${v.year || '-'}</p>
        <p><strong>${t.plateNumber}:</strong> ${escapeHtml(v.plateNumber || v.additionalInfo || '-')}</p>
        <p><strong>${t.fuelType}:</strong> ${getFuelTypeLabel(v.fuelType)}</p>
        <p><strong>${t.odometer}:</strong> ${formatNumber(v.currentOdometer)} km</p>
        ${v.tankCapacity ? `<p><strong>Tank Capacity:</strong> ${v.tankCapacity} L</p>` : ''}
        ${v.purchaseDate ? `<p><strong>${t.purchaseDate}:</strong> ${formatDate(v.purchaseDate)}</p>` : ''}
        <p><strong>Created:</strong> ${formatDateTime(v.createdAt)}</p>
        <p><strong>Updated:</strong> ${formatDateTime(v.updatedAt)}</p>
    `;
}

function renderFuelLogDetail(l) {
    const t = translations[currentLang];
    const vehicle = vehicleMap[l.vehicleId];
    const isElectric = l.fuelType === 'ELECTRIC';
    
    return `
        <h3>⛽ ${isElectric ? 'Charge Record' : 'Fuel Record'}</h3>
        <p><strong>${t.date}:</strong> ${formatDateTime(l.dateTime)}</p>
        <p><strong>${t.vehicle}:</strong> ${escapeHtml(vehicle?.nickname || vehicle?.model || 'Unknown')}</p>
        <p><strong>${t.station}:</strong> ${escapeHtml(l.stationName || '-')}</p>
        <p><strong>Location:</strong> ${escapeHtml(l.stationLocation || '-')}</p>
        <p><strong>${t.fuelType}:</strong> ${getFuelTypeLabel(l.fuelType)}</p>
        ${isElectric ? `
            <p><strong>${t.chargerType}:</strong> ${escapeHtml(l.chargerType || '-')}</p>
            <p><strong>${t.batteryLevel}:</strong> ${l.batteryBefore}% → ${l.batteryAfter}%</p>
        ` : `
            <p><strong>${t.pricePerUnit}:</strong> ${formatCurrency(l.pricePerUnit)}/L</p>
            <p><strong>${t.quantity}:</strong> ${l.quantity?.toFixed(2) || '-'} L</p>
            <p><strong>${t.fullTank}:</strong> ${l.isFullTank ? 'Yes' : 'No'}</p>
        `}
        <p><strong>${t.totalCost}:</strong> ${formatCurrency(l.totalCost)}</p>
        <p><strong>${t.odometer}:</strong> ${formatNumber(l.odometerReading)} km</p>
        ${l.calculatedEfficiency ? `<p><strong>${t.efficiency}:</strong> ${l.calculatedEfficiency.toFixed(2)} km/L</p>` : ''}
        ${l.notes ? `<p><strong>${t.notes}:</strong> ${escapeHtml(l.notes)}</p>` : ''}
        <p><strong>Created:</strong> ${formatDateTime(l.createdAt)}</p>
    `;
}

function renderMaintenanceDetail(m) {
    const t = translations[currentLang];
    const vehicle = vehicleMap[m.vehicleId];
    
    return `
        <h3>🔧 ${escapeHtml(formatMaintenanceType(m.maintenanceType))}</h3>
        <p><strong>${t.date}:</strong> ${formatDate(m.date)}</p>
        <p><strong>${t.vehicle}:</strong> ${escapeHtml(vehicle?.nickname || vehicle?.model || 'Unknown')}</p>
        <p><strong>${t.type}:</strong> ${escapeHtml(formatMaintenanceType(m.maintenanceType))}</p>
        <p><strong>${t.description}:</strong> ${escapeHtml(m.description || '-')}</p>
        <p><strong>${t.cost}:</strong> ${formatCurrency(m.cost)}</p>
        <p><strong>${t.shop}:</strong> ${escapeHtml(m.shopName || '-')}</p>
        ${m.shopLocation ? `<p><strong>Shop Location:</strong> ${escapeHtml(m.shopLocation)}</p>` : ''}
        <p><strong>${t.odometer}:</strong> ${formatNumber(m.odometerReading)} km</p>
        ${m.nextDueOdometer ? `<p><strong>${t.nextDue} (Odometer):</strong> ${formatNumber(m.nextDueOdometer)} km</p>` : ''}
        ${m.nextDueDate ? `<p><strong>${t.nextDue} (Date):</strong> ${formatDate(m.nextDueDate)}</p>` : ''}
        ${m.notes ? `<p><strong>${t.notes}:</strong> ${escapeHtml(m.notes)}</p>` : ''}
        <p><strong>Created:</strong> ${formatDateTime(m.createdAt)}</p>
    `;
}

function renderExpenseDetail(e) {
    const t = translations[currentLang];
    const vehicle = vehicleMap[e.vehicleId];
    
    return `
        <h3>💰 ${escapeHtml(formatExpenseCategory(e.category))}</h3>
        <p><strong>${t.date}:</strong> ${formatDate(e.date)}</p>
        <p><strong>${t.vehicle}:</strong> ${escapeHtml(vehicle?.nickname || vehicle?.model || 'Unknown')}</p>
        <p><strong>${t.category}:</strong> ${escapeHtml(formatExpenseCategory(e.category))}</p>
        <p><strong>${t.description}:</strong> ${escapeHtml(e.description || '-')}</p>
        <p><strong>${t.amount}:</strong> ${formatCurrency(e.amount)}</p>
        ${e.notes ? `<p><strong>${t.notes}:</strong> ${escapeHtml(e.notes)}</p>` : ''}
        <p><strong>Created:</strong> ${formatDateTime(e.createdAt)}</p>
    `;
}

// ============== 검색 및 필터 ==============
function handleSearch() {
    renderCurrentTab();
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('vehicleFilter').value = '';
    renderCurrentTab();
}

// ============== CSV 내보내기 ==============
function exportToCsv() {
    if (!jsonData) return;
    
    const timestamp = new Date().toISOString().slice(0, 10);
    
    // Export all data types
    if (jsonData.vehicles?.length) {
        downloadCsv(vehiclesToCsv(), `autolog_vehicles_${timestamp}.csv`);
    }
    if (jsonData.fuelLogs?.length) {
        downloadCsv(fuelLogsToCsv(), `autolog_fuel_logs_${timestamp}.csv`);
    }
    if (jsonData.maintenance?.length) {
        downloadCsv(maintenanceToCsv(), `autolog_maintenance_${timestamp}.csv`);
    }
    if (jsonData.expenses?.length) {
        downloadCsv(expensesToCsv(), `autolog_expenses_${timestamp}.csv`);
    }
}

function vehiclesToCsv() {
    const t = translations[currentLang];
    const title = t.vehicles || 'Vehicles';
    const headers = currentLang === 'ko'
        ? ['차량명', '제조사', '모델', '연식', '번호/추가정보', '연료 타입', '연료탱크 용량(L)', '현재 주행거리(km)', '구매일']
        : ['Vehicle Name', 'Manufacturer', 'Model', 'Year', 'Plate / Info', 'Fuel Type', 'Tank Capacity (L)', 'Current Odometer (km)', 'Purchase Date'];
    const rows = jsonData.vehicles.map(v => [
        getVehicleName(v.id),
        v.manufacturer || '',
        v.model || '',
        v.year || '',
        v.plateNumber || '',
        getFuelTypeLabel(v.fuelType),
        v.tankCapacity ?? '',
        v.currentOdometer ?? '',
        v.purchaseDate || ''
    ]);
    return toCsvString(title, headers, rows);
}

function fuelLogsToCsv() {
    const t = translations[currentLang];
    const title = t.fuelLogs || 'Fuel Logs';
    const headers = currentLang === 'ko'
        ? ['차량', '날짜/시간', '주유/충전소', '위치', '연료 타입', '단가', '주유/충전량', '총액', '주행거리(km)', '가득 주유', '연비/효율', '충전기 타입', '충전 전 배터리(%)', '충전 후 배터리(%)', '메모']
        : ['Vehicle', 'Date/Time', 'Station', 'Location', 'Fuel Type', 'Price Per Unit', 'Quantity', 'Total Cost', 'Odometer (km)', 'Full Tank', 'Efficiency', 'Charger Type', 'Battery Before (%)', 'Battery After (%)', 'Notes'];
    const rows = jsonData.fuelLogs.map(l => [
        getVehicleName(l.vehicleId),
        l.dateTime || '',
        l.stationName || '',
        l.stationLocation || '',
        getFuelTypeLabel(l.fuelType),
        l.pricePerUnit ?? '',
        l.quantity ?? '',
        l.totalCost ?? '',
        l.odometerReading ?? '',
        l.isFullTank ? 'Y' : 'N',
        l.calculatedEfficiency ?? '',
        l.chargerType || '',
        l.batteryBefore ?? '',
        l.batteryAfter ?? '',
        l.notes || ''
    ]);
    return toCsvString(title, headers, rows);
}

function maintenanceToCsv() {
    const t = translations[currentLang];
    const title = t.maintenance || 'Maintenance';
    const headers = currentLang === 'ko'
        ? ['차량', '날짜', '정비 유형', '정비소', '설명', '비용', '주행거리(km)', '다음 정비 주행거리(km)', '다음 정비 예정일', '메모']
        : ['Vehicle', 'Date', 'Maintenance Type', 'Shop', 'Description', 'Cost', 'Odometer (km)', 'Next Due Odometer (km)', 'Next Due Date', 'Notes'];
    const rows = jsonData.maintenance.map(m => [
        getVehicleName(m.vehicleId),
        m.date || m.dateTime || '',
        formatMaintenanceType(m.maintenanceType) || '',
        m.shopName || '',
        m.description || '',
        m.cost ?? '',
        m.odometerReading ?? '',
        m.nextDueOdometer ?? '',
        m.nextDueDate || '',
        m.notes || ''
    ]);
    return toCsvString(title, headers, rows);
}

function expensesToCsv() {
    const t = translations[currentLang];
    const title = t.expenses || 'Expenses';
    const headers = currentLang === 'ko'
        ? ['차량', '날짜', '카테고리', '제목', '설명', '금액', '결제 수단', '반복 주기', '다음 결제 예정일', '메모']
        : ['Vehicle', 'Date', 'Category', 'Title', 'Description', 'Amount', 'Payment Method', 'Recurring Period', 'Next Payment Due', 'Notes'];
    const rows = jsonData.expenses.map(e => [
        getVehicleName(e.vehicleId),
        e.date || e.dateTime || '',
        formatExpenseCategory(e.category) || '',
        e.title || '',
        e.description || '',
        e.amount ?? '',
        e.paymentMethod || '',
        e.recurringPeriod || '',
        e.nextRecurringDate || '',
        e.notes || ''
    ]);
    return toCsvString(title, headers, rows);
}

function toCsvString(title, headers, rows) {
    const escapeCell = (cell) => `"${String(cell ?? '').replace(/"/g, '""')}"`;
    const headerLine = headers.map(escapeCell).join(',');
    const rowLines = rows.map(r => r.map(escapeCell).join(',')).join('\n');
    return [title, headerLine, rowLines].filter(Boolean).join('\n');
}

function downloadCsv(content, filename) {
    const BOM = '\uFEFF';
    const blob = new Blob([BOM + content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
}

// ============== 도움말 ==============
function showHelp() {
    const t = translations[currentLang];
    const content = document.getElementById('helpContent');
    
    content.innerHTML = `
        <h2>${t.helpTitle}</h2>
        <p style="margin: 16px 0;">${t.helpIntro}</p>
        
        <h3 style="margin-top: 24px; color: #2e7d5b;">${t.helpHowToUse}</h3>
        <ul style="margin: 12px 0; padding-left: 20px; line-height: 2;">
            <li>${t.helpStep1}</li>
            <li>${t.helpStep2}</li>
            <li>${t.helpStep3}</li>
            <li>${t.helpStep4}</li>
            <li>${t.helpStep5}</li>
        </ul>
        
        <h3 style="margin-top: 24px; color: #2e7d5b;">${t.helpExport}</h3>
        <p style="margin: 12px 0;">${t.helpExportDesc}</p>
        
        <h3 style="margin-top: 24px; color: #2e7d5b;">${t.helpPrivacy}</h3>
        <p style="margin: 12px 0;">${t.helpPrivacyDesc}</p>
    `;
    
    document.getElementById('helpModal').classList.remove('hidden');
}

function closeModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.add('hidden');
    });
}

// ============== 유틸리티 함수 ==============
function formatDate(dateStr) {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    return date.toLocaleDateString(currentLang === 'ko' ? 'ko-KR' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function formatDateTime(dateStr) {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    return date.toLocaleString(currentLang === 'ko' ? 'ko-KR' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function formatCurrency(amount) {
    if (amount === null || amount === undefined) return '-';
    return new Intl.NumberFormat(currentLang === 'ko' ? 'ko-KR' : 'en-US', {
        style: 'currency',
        currency: currentLang === 'ko' ? 'KRW' : 'USD',
        minimumFractionDigits: currentLang === 'ko' ? 0 : 2,
        maximumFractionDigits: 2
    }).format(amount);
}

function formatNumber(num) {
    if (num === null || num === undefined) return '0';
    return new Intl.NumberFormat().format(num);
}

function getVehicleName(vehicleId) {
    const vehicle = vehicleMap[vehicleId];
    return vehicle ? (vehicle.nickname || vehicle.model) : 'Unknown';
}

function getVehicleIcon(fuelType) {
    switch (fuelType?.toUpperCase()) {
        case 'ELECTRIC':
            return '⚡';
        case 'HYBRID':
            return '🔋';
        case 'DIESEL':
            return '🛢️';
        default:
            return '🚗';
    }
}

function getFuelTypeBadge(fuelType) {
    switch (fuelType?.toUpperCase()) {
        case 'ELECTRIC':
            return 'electric';
        case 'GASOLINE':
            return 'gasoline';
        case 'DIESEL':
            return 'diesel';
        default:
            return 'primary';
    }
}

function getFuelTypeLabel(fuelType) {
    const t = translations[currentLang];
    switch (fuelType?.toUpperCase()) {
        case 'GASOLINE':
            return t.gasoline;
        case 'DIESEL':
            return t.diesel;
        case 'ELECTRIC':
            return t.electric;
        case 'HYBRID':
            return t.hybrid;
        case 'LPG':
            return t.lpg;
        default:
            return fuelType || '-';
    }
}

function formatMaintenanceType(type) {
    if (!type) return '-';
    // Convert SNAKE_CASE to Title Case
    return type.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

function formatExpenseCategory(category) {
    if (!category) return '-';
    return category.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function truncateText(text, maxLength) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
