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
        expenses: "Other Costs",
        searchPlaceholder: "Search...",
        allVehicles: "All Vehicles",
        clear: "🔄 Clear",
        sortDefault: "Default",
        sortNameAsc: "Name (A-Z)",
        sortNameDesc: "Name (Z-A)",
        sortDateAsc: "Date (Old-New)",
        sortDateDesc: "Date (New-Old)",
        totalFuelCost: "Total Fuel Cost",
        totalMaintenanceCost: "Maintenance Cost",
        totalExpenses: "Other Costs",
        totalAllCosts: "Total All Costs",
        welcomeTitle: "🚗 AutoLog JSON Viewer",
        welcomeDesc: "View JSON backup files exported from AutoLog app.",
        webVersionNotice: "🌐 Web Browser Version - No installation required!",
        featureView: "✅ Complete Data View",
        featureViewDesc: "Vehicles, fuel logs, maintenance, other costs",
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
        close: "Close",
        // Additional fuel types
        hybridGasoline: "Gasoline Hybrid",
        hybridDiesel: "Diesel Hybrid",
        hydrogen: "Hydrogen",
        // Vehicle details
        tankCapacity: "Tank Capacity",
        purchaseOdometer: "Purchase Odometer",
        purchasePrice: "Purchase Price",
        saleDate: "Sale Date",
        saleOdometer: "Sale Odometer",
        salePrice: "Sale Price",
        vehicleNote: "Note",
        isCurrent: "Currently Owned",
        created: "Created",
        updated: "Updated",
        yes: "Yes",
        no: "No",
        // Fuel log details
        location: "Location",
        chargeRecord: "Charge Record",
        fuelRecord: "Fuel Record",
        receipt: "Receipt",
        chargingTime: "Charging Time",
        paymentMethod: "Payment Method",
        // Expense details
        title: "Title",
        recurring: "Recurring",
        period: "Period",
        nextDate: "Next Date",
        // Maintenance types
        maintenanceEngineOil: "Engine Oil",
        maintenanceOilFilter: "Oil Filter",
        maintenanceAirFilter: "Air Filter",
        maintenanceCabinFilter: "Cabin Filter",
        maintenanceFuelFilter: "Fuel Filter",
        maintenanceSparkPlug: "Spark Plug",
        maintenanceBrakePad: "Brake Pad",
        maintenanceBrakeDisc: "Brake Disc",
        maintenanceBrakeFluid: "Brake Fluid",
        maintenanceCoolant: "Coolant",
        maintenanceTransmissionFluid: "Transmission Fluid",
        maintenancePowerSteeringFluid: "Power Steering Fluid",
        maintenanceWiperBlade: "Wiper Blade",
        maintenanceTireRotation: "Tire Rotation",
        maintenanceTireReplacement: "Tire Replacement",
        maintenanceWheelAlignment: "Wheel Alignment",
        maintenanceBattery: "Battery",
        maintenanceTimingBelt: "Timing Belt",
        maintenanceSerpentineBelt: "Serpentine Belt",
        maintenanceSuspension: "Suspension",
        maintenanceGeneralInspection: "General Inspection",
        maintenanceOther: "Other",
        // Expense categories
        expenseFuel: "Fuel",
        expenseMaintenance: "Maintenance",
        expenseInsurance: "Insurance",
        expenseTax: "Tax",
        expenseToll: "Toll",
        expenseParking: "Parking",
        expenseWash: "Car Wash",
        expenseFine: "Fine",
        expenseAccessory: "Accessory",
        expenseOther: "Other",
        // Charger types
        chargerSlowAc: "Slow AC",
        chargerFastDc: "Fast DC",
        chargerSuperFastDc: "Super Fast DC (350kW+)",
        chargerHome: "Home Charger",
        // Recurring periods
        periodDaily: "Daily",
        periodWeekly: "Weekly",
        periodMonthly: "Monthly",
        periodYearly: "Yearly"
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
        expenses: "기타 비용",
        searchPlaceholder: "검색...",
        allVehicles: "전체 차량",
        clear: "🔄 초기화",
        sortDefault: "기본",
        sortNameAsc: "이름 (가-하)",
        sortNameDesc: "이름 (하-가)",
        sortDateAsc: "날짜 (과거-최신)",
        sortDateDesc: "날짜 (최신-과거)",
        totalFuelCost: "총 연료비",
        totalMaintenanceCost: "정비 비용",
        totalExpenses: "기타 비용",
        totalAllCosts: "총 비용",
        welcomeTitle: "🚗 AutoLog JSON 뷰어",
        welcomeDesc: "AutoLog 앱에서 내보낸 JSON 백업 파일을 확인하세요.",
        webVersionNotice: "🌐 웹 브라우저 버전 - 설치 불필요!",
        featureView: "✅ 완벽한 데이터 보기",
        featureViewDesc: "차량, 주유 기록, 정비, 기타 비용",
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
        close: "닫기",
        // Additional fuel types
        hybridGasoline: "가솔린 하이브리드",
        hybridDiesel: "디젤 하이브리드",
        hydrogen: "수소",
        // Vehicle details
        tankCapacity: "연료탱크 용량",
        purchaseOdometer: "구매 시 주행거리",
        purchasePrice: "구매 가격",
        saleDate: "판매 일자",
        saleOdometer: "판매 시 주행거리",
        salePrice: "판매 가격",
        vehicleNote: "메모",
        isCurrent: "현재 소유",
        created: "생성일",
        updated: "수정일",
        yes: "예",
        no: "아니오",
        // Fuel log details
        location: "위치",
        chargeRecord: "충전 기록",
        fuelRecord: "주유 기록",
        receipt: "영수증",
        chargingTime: "충전 시간",
        paymentMethod: "결제 수단",
        // Expense details
        title: "제목",
        recurring: "정기 결제",
        period: "반복 주기",
        nextDate: "다음 예정일",
        // Maintenance types
        maintenanceEngineOil: "엔진 오일",
        maintenanceOilFilter: "오일 필터",
        maintenanceAirFilter: "에어 필터",
        maintenanceCabinFilter: "에어컨 필터",
        maintenanceFuelFilter: "연료 필터",
        maintenanceSparkPlug: "점화 플러그",
        maintenanceBrakePad: "브레이크 패드",
        maintenanceBrakeDisc: "브레이크 디스크",
        maintenanceBrakeFluid: "브레이크 오일",
        maintenanceCoolant: "냉각수",
        maintenanceTransmissionFluid: "미션 오일",
        maintenancePowerSteeringFluid: "파워 스티어링 오일",
        maintenanceWiperBlade: "와이퍼 블레이드",
        maintenanceTireRotation: "타이어 로테이션",
        maintenanceTireReplacement: "타이어 교체",
        maintenanceWheelAlignment: "휠 얼라인먼트",
        maintenanceBattery: "배터리",
        maintenanceTimingBelt: "타이밍 벨트",
        maintenanceSerpentineBelt: "팬 벨트",
        maintenanceSuspension: "서스펜션",
        maintenanceGeneralInspection: "종합 검사",
        maintenanceOther: "기타",
        // Expense categories
        expenseFuel: "주유비",
        expenseMaintenance: "정비비",
        expenseInsurance: "보험료",
        expenseTax: "자동차세",
        expenseToll: "통행료",
        expenseParking: "주차비",
        expenseWash: "세차비",
        expenseFine: "과태료/범칙금",
        expenseAccessory: "용품 구입",
        expenseOther: "기타",
        // Charger types
        chargerSlowAc: "완속 충전 (AC)",
        chargerFastDc: "급속 충전 (DC)",
        chargerSuperFastDc: "초급속 충전 (DC 350kW+)",
        chargerHome: "가정용 충전기",
        // Recurring periods
        periodDaily: "매일",
        periodWeekly: "매주",
        periodMonthly: "매월",
        periodYearly: "매년"
    },
    de: {
        appTitle: "AutoLog JSON Viewer",
        openFile: "📂 JSON-Datei öffnen",
        exportCsv: "📊 CSV exportieren",
        fileName: "Dateiname:",
        exportDate: "Exportdatum:",
        appVersion: "App-Version:",
        backupNotice: "Alle Daten werden basierend auf dem Exportdatum angezeigt. Dies ist ein schreibgeschützter Viewer.",
        vehicles: "Fahrzeuge",
        fuelLogs: "Tanken/Laden",
        maintenance: "Wartung",
        expenses: "Sonstige Kosten",
        searchPlaceholder: "Suchen...",
        allVehicles: "Alle Fahrzeuge",
        clear: "🔄 Löschen",
        sortDefault: "Standard",
        sortNameAsc: "Name (A-Z)",
        sortNameDesc: "Name (Z-A)",
        sortDateAsc: "Datum (Alt-Neu)",
        sortDateDesc: "Datum (Neu-Alt)",
        totalFuelCost: "Gesamte Kraftstoffkosten",
        totalMaintenanceCost: "Wartungskosten",
        totalExpenses: "Sonstige Kosten",
        totalAllCosts: "Gesamtkosten",
        welcomeTitle: "🚗 AutoLog JSON Viewer",
        welcomeDesc: "JSON-Sicherungsdateien anzeigen, die aus der AutoLog-App exportiert wurden.",
        webVersionNotice: "🌐 Webbrowser-Version - Keine Installation erforderlich!",
        featureView: "✅ Vollständige Datenansicht",
        featureViewDesc: "Fahrzeuge, Tankprotokolle, Wartung, sonstige Kosten",
        featureSearch: "🔍 Suchen & Filtern",
        featureSearchDesc: "Nach Fahrzeug filtern und schnell suchen",
        featureStats: "📊 Statistiken",
        featureStatsDesc: "Kostenzusammenfassungen und Summen anzeigen",
        featurePrivacy: "🔒 Datenschutz zuerst",
        featurePrivacyDesc: "Alle Daten werden lokal in Ihrem Browser verarbeitet",
        vehicle: "Fahrzeug",
        manufacturer: "Hersteller",
        model: "Modell",
        year: "Jahr",
        plateNumber: "Zusatzinfo / Nr.",
        fuelType: "Kraftstoffart",
        odometer: "Kilometerstand",
        purchaseDate: "Kaufdatum",
        date: "Datum",
        station: "Tankstelle",
        pricePerUnit: "Preis/Einheit",
        quantity: "Menge",
        totalCost: "Gesamtkosten",
        efficiency: "Effizienz",
        fullTank: "Volltanken",
        chargerType: "Ladetyp",
        batteryLevel: "Batteriestand",
        type: "Typ",
        description: "Beschreibung",
        cost: "Kosten",
        shop: "Werkstatt",
        nextDue: "Nächste Fälligkeit",
        category: "Kategorie",
        amount: "Betrag",
        notes: "Notizen",
        details: "Details",
        noData: "Keine Daten verfügbar",
        noResults: "Keine Ergebnisse gefunden",
        gasoline: "Benzin",
        diesel: "Diesel",
        electric: "Elektrisch",
        hybrid: "Hybrid",
        lpg: "LPG",
        helpTitle: "📖 Hilfe",
        helpIntro: "AutoLog JSON Viewer ist ein webbasiertes Tool zum Anzeigen von Sicherungsdateien, die aus der AutoLog-App exportiert wurden.",
        helpHowToUse: "Verwendung",
        helpStep1: "1. Klicken Sie auf die Schaltfläche 'JSON-Datei öffnen'",
        helpStep2: "2. Wählen Sie Ihre AutoLog-Sicherungs-JSON-Datei aus",
        helpStep3: "3. Durchsuchen Sie Ihre Daten mithilfe der Registerkarten",
        helpStep4: "4. Verwenden Sie Suche und Filter, um bestimmte Datensätze zu finden",
        helpStep5: "5. Klicken Sie auf eine beliebige Zeile, um vollständige Details anzuzeigen",
        helpExport: "Nach CSV exportieren",
        helpExportDesc: "Klicken Sie auf 'CSV exportieren', um Ihre Daten im Tabellenformat herunterzuladen.",
        helpPrivacy: "Datenschutz",
        helpPrivacyDesc: "Alle Daten werden lokal in Ihrem Browser verarbeitet. Es werden niemals Daten an einen Server gesendet.",
        close: "Schließen",
        hybridGasoline: "Benzin-Hybrid",
        hybridDiesel: "Diesel-Hybrid",
        hydrogen: "Wasserstoff",
        tankCapacity: "Tankkapazität",
        purchaseOdometer: "Kilometerstand beim Kauf",
        purchasePrice: "Kaufpreis",
        saleDate: "Verkaufsdatum",
        saleOdometer: "Kilometerstand beim Verkauf",
        salePrice: "Verkaufspreis",
        vehicleNote: "Notiz",
        isCurrent: "Aktuell im Besitz",
        created: "Erstellt",
        updated: "Aktualisiert",
        yes: "Ja",
        no: "Nein",
        location: "Standort",
        chargeRecord: "Ladevorgang",
        fuelRecord: "Tankvorgang",
        receipt: "Quittung",
        chargingTime: "Ladezeit",
        paymentMethod: "Zahlungsmethode",
        title: "Titel",
        recurring: "Wiederkehrend",
        period: "Zeitraum",
        nextDate: "Nächstes Datum",
        maintenanceEngineOil: "Motoröl",
        maintenanceOilFilter: "Ölfilter",
        maintenanceAirFilter: "Luftfilter",
        maintenanceCabinFilter: "Innenraumfilter",
        maintenanceFuelFilter: "Kraftstofffilter",
        maintenanceSparkPlug: "Zündkerze",
        maintenanceBrakePad: "Bremsbelag",
        maintenanceBrakeDisc: "Bremsscheibe",
        maintenanceBrakeFluid: "Bremsflüssigkeit",
        maintenanceCoolant: "Kühlmittel",
        maintenanceTransmissionFluid: "Getriebeöl",
        maintenancePowerSteeringFluid: "Servolenkungsöl",
        maintenanceWiperBlade: "Scheibenwischerblatt",
        maintenanceTireRotation: "Reifenwechsel",
        maintenanceTireReplacement: "Reifenaustausch",
        maintenanceWheelAlignment: "Radausrichtung",
        maintenanceBattery: "Batterie",
        maintenanceTimingBelt: "Zahnriemen",
        maintenanceSerpentineBelt: "Keilriemen",
        maintenanceSuspension: "Aufhängung",
        maintenanceGeneralInspection: "Allgemeine Inspektion",
        maintenanceOther: "Sonstiges",
        expenseFuel: "Kraftstoff",
        expenseMaintenance: "Wartung",
        expenseInsurance: "Versicherung",
        expenseTax: "Steuer",
        expenseToll: "Maut",
        expenseParking: "Parken",
        expenseWash: "Autowäsche",
        expenseFine: "Bußgeld",
        expenseAccessory: "Zubehör",
        expenseOther: "Sonstiges",
        chargerSlowAc: "Langsames AC-Laden",
        chargerFastDc: "Schnelles DC-Laden",
        chargerSuperFastDc: "Ultraschnelles DC-Laden (350kW+)",
        chargerHome: "Heimladegerät",
        periodDaily: "Täglich",
        periodWeekly: "Wöchentlich",
        periodMonthly: "Monatlich",
        periodYearly: "Jährlich"
    },
    ja: {
        appTitle: "AutoLog JSON ビューア",
        openFile: "📂 JSONファイルを開く",
        exportCsv: "📊 CSVエクスポート",
        fileName: "ファイル名:",
        exportDate: "エクスポート日:",
        appVersion: "アプリバージョン:",
        backupNotice: "すべてのデータはエクスポート日に基づいて表示されます。これは読み取り専用ビューアです。",
        vehicles: "車両",
        fuelLogs: "給油/充電",
        maintenance: "メンテナンス",
        expenses: "その他の費用",
        searchPlaceholder: "検索...",
        allVehicles: "すべての車両",
        clear: "🔄 クリア",
        sortDefault: "デフォルト",
        sortNameAsc: "名前 (あ-ん)",
        sortNameDesc: "名前 (ん-あ)",
        sortDateAsc: "日付 (古い-新しい)",
        sortDateDesc: "日付 (新しい-古い)",
        totalFuelCost: "総燃料費",
        totalMaintenanceCost: "メンテナンス費用",
        totalExpenses: "その他の費用",
        totalAllCosts: "総費用",
        welcomeTitle: "🚗 AutoLog JSON ビューア",
        welcomeDesc: "AutoLogアプリからエクスポートされたJSONバックアップファイルを表示します。",
        webVersionNotice: "🌐 Webブラウザバージョン - インストール不要！",
        featureView: "✅ 完全なデータ表示",
        featureViewDesc: "車両、給油記録、メンテナンス、その他の費用",
        featureSearch: "🔍 検索とフィルタ",
        featureSearchDesc: "車両別フィルタとクイック検索",
        featureStats: "📊 統計",
        featureStatsDesc: "費用の概要と合計を表示",
        featurePrivacy: "🔒 プライバシー第一",
        featurePrivacyDesc: "すべてのデータはブラウザでローカル処理されます",
        vehicle: "車両",
        manufacturer: "メーカー",
        model: "モデル",
        year: "年式",
        plateNumber: "追加情報/番号",
        fuelType: "燃料タイプ",
        odometer: "走行距離",
        purchaseDate: "購入日",
        date: "日付",
        station: "ガソリンスタンド",
        pricePerUnit: "単価",
        quantity: "数量",
        totalCost: "総費用",
        efficiency: "燃費",
        fullTank: "満タン",
        chargerType: "充電器タイプ",
        batteryLevel: "バッテリーレベル",
        type: "タイプ",
        description: "説明",
        cost: "費用",
        shop: "整備工場",
        nextDue: "次回予定",
        category: "カテゴリ",
        amount: "金額",
        notes: "メモ",
        details: "詳細",
        noData: "データがありません",
        noResults: "結果が見つかりません",
        gasoline: "ガソリン",
        diesel: "ディーゼル",
        electric: "電気",
        hybrid: "ハイブリッド",
        lpg: "LPG",
        helpTitle: "📖 ヘルプ",
        helpIntro: "AutoLog JSON ビューアは、AutoLogアプリからエクスポートされたバックアップファイルを表示するWebベースのツールです。",
        helpHowToUse: "使い方",
        helpStep1: "1. 「JSONファイルを開く」ボタンをクリック",
        helpStep2: "2. AutoLogバックアップJSONファイルを選択",
        helpStep3: "3. タブを使用してデータを閲覧",
        helpStep4: "4. 検索とフィルタを使用して特定のレコードを検索",
        helpStep5: "5. 任意の行をクリックして詳細を表示",
        helpExport: "CSVエクスポート",
        helpExportDesc: "「CSVエクスポート」をクリックして、スプレッドシート形式でダウンロードします。",
        helpPrivacy: "プライバシー",
        helpPrivacyDesc: "すべてのデータはブラウザでローカルに処理されます。データがサーバーに送信されることはありません。",
        close: "閉じる",
        hybridGasoline: "ガソリンハイブリッド",
        hybridDiesel: "ディーゼルハイブリッド",
        hydrogen: "水素",
        tankCapacity: "タンク容量",
        purchaseOdometer: "購入時の走行距離",
        purchasePrice: "購入価格",
        saleDate: "売却日",
        saleOdometer: "売却時の走行距離",
        salePrice: "売却価格",
        vehicleNote: "メモ",
        isCurrent: "現在所有",
        created: "作成日",
        updated: "更新日",
        yes: "はい",
        no: "いいえ",
        location: "場所",
        chargeRecord: "充電記録",
        fuelRecord: "給油記録",
        receipt: "領収書",
        chargingTime: "充電時間",
        paymentMethod: "支払い方法",
        title: "タイトル",
        recurring: "定期的",
        period: "期間",
        nextDate: "次回日付",
        maintenanceEngineOil: "エンジンオイル",
        maintenanceOilFilter: "オイルフィルター",
        maintenanceAirFilter: "エアフィルター",
        maintenanceCabinFilter: "キャビンフィルター",
        maintenanceFuelFilter: "燃料フィルター",
        maintenanceSparkPlug: "スパークプラグ",
        maintenanceBrakePad: "ブレーキパッド",
        maintenanceBrakeDisc: "ブレーキディスク",
        maintenanceBrakeFluid: "ブレーキフルード",
        maintenanceCoolant: "冷却液",
        maintenanceTransmissionFluid: "トランスミッションフルード",
        maintenancePowerSteeringFluid: "パワーステアリングフルード",
        maintenanceWiperBlade: "ワイパーブレード",
        maintenanceTireRotation: "タイヤローテーション",
        maintenanceTireReplacement: "タイヤ交換",
        maintenanceWheelAlignment: "ホイールアライメント",
        maintenanceBattery: "バッテリー",
        maintenanceTimingBelt: "タイミングベルト",
        maintenanceSerpentineBelt: "ファンベルト",
        maintenanceSuspension: "サスペンション",
        maintenanceGeneralInspection: "一般点検",
        maintenanceOther: "その他",
        expenseFuel: "燃料",
        expenseMaintenance: "メンテナンス",
        expenseInsurance: "保険",
        expenseTax: "税金",
        expenseToll: "通行料",
        expenseParking: "駐車料金",
        expenseWash: "洗車",
        expenseFine: "罰金",
        expenseAccessory: "アクセサリー",
        expenseOther: "その他",
        chargerSlowAc: "低速AC充電",
        chargerFastDc: "高速DC充電",
        chargerSuperFastDc: "超高速DC充電 (350kW+)",
        chargerHome: "ホーム充電器",
        periodDaily: "毎日",
        periodWeekly: "毎週",
        periodMonthly: "毎月",
        periodYearly: "毎年"
    },
    es: {
        appTitle: "AutoLog JSON Viewer",
        openFile: "📂 Abrir archivo JSON",
        exportCsv: "📊 Exportar CSV",
        fileName: "Nombre del archivo:",
        exportDate: "Fecha de exportación:",
        appVersion: "Versión de la aplicación:",
        backupNotice: "Todos los datos se muestran según la fecha de exportación. Este es un visor de solo lectura.",
        vehicles: "Vehículos",
        fuelLogs: "Combustible/Carga",
        maintenance: "Mantenimiento",
        expenses: "Otros gastos",
        searchPlaceholder: "Buscar...",
        allVehicles: "Todos los vehículos",
        clear: "🔄 Limpiar",
        sortDefault: "Predeterminado",
        sortNameAsc: "Nombre (A-Z)",
        sortNameDesc: "Nombre (Z-A)",
        sortDateAsc: "Fecha (Antigua-Nueva)",
        sortDateDesc: "Fecha (Nueva-Antigua)",
        totalFuelCost: "Costo total de combustible",
        totalMaintenanceCost: "Costo de mantenimiento",
        totalExpenses: "Otros gastos",
        totalAllCosts: "Costos totales",
        welcomeTitle: "🚗 AutoLog JSON Viewer",
        welcomeDesc: "Ver archivos de respaldo JSON exportados desde la aplicación AutoLog.",
        webVersionNotice: "🌐 Versión del navegador web - ¡No requiere instalación!",
        featureView: "✅ Vista completa de datos",
        featureViewDesc: "Vehículos, registros de combustible, mantenimiento, otros gastos",
        featureSearch: "🔍 Buscar y filtrar",
        featureSearchDesc: "Filtrar por vehículo y búsqueda rápida",
        featureStats: "📊 Estadísticas",
        featureStatsDesc: "Ver resúmenes de costos y totales",
        featurePrivacy: "🔒 Privacidad primero",
        featurePrivacyDesc: "Todos los datos se procesan localmente en su navegador",
        vehicle: "Vehículo",
        manufacturer: "Fabricante",
        model: "Modelo",
        year: "Año",
        plateNumber: "Info adicional / N°",
        fuelType: "Tipo de combustible",
        odometer: "Odómetro",
        purchaseDate: "Fecha de compra",
        date: "Fecha",
        station: "Estación",
        pricePerUnit: "Precio/Unidad",
        quantity: "Cantidad",
        totalCost: "Costo total",
        efficiency: "Eficiencia",
        fullTank: "Tanque lleno",
        chargerType: "Tipo de cargador",
        batteryLevel: "Nivel de batería",
        type: "Tipo",
        description: "Descripción",
        cost: "Costo",
        shop: "Taller",
        nextDue: "Próximo vencimiento",
        category: "Categoría",
        amount: "Monto",
        notes: "Notas",
        details: "Detalles",
        noData: "No hay datos disponibles",
        noResults: "No se encontraron resultados",
        gasoline: "Gasolina",
        diesel: "Diésel",
        electric: "Eléctrico",
        hybrid: "Híbrido",
        lpg: "GLP",
        helpTitle: "📖 Ayuda",
        helpIntro: "AutoLog JSON Viewer es una herramienta basada en web para ver archivos de respaldo exportados desde la aplicación AutoLog.",
        helpHowToUse: "Cómo usar",
        helpStep1: "1. Haga clic en el botón 'Abrir archivo JSON'",
        helpStep2: "2. Seleccione su archivo JSON de respaldo de AutoLog",
        helpStep3: "3. Explore sus datos usando las pestañas",
        helpStep4: "4. Use búsqueda y filtros para encontrar registros específicos",
        helpStep5: "5. Haga clic en cualquier fila para ver detalles completos",
        helpExport: "Exportar a CSV",
        helpExportDesc: "Haga clic en 'Exportar CSV' para descargar sus datos en formato de hoja de cálculo.",
        helpPrivacy: "Privacidad",
        helpPrivacyDesc: "Todos los datos se procesan localmente en su navegador. Nunca se envían datos a ningún servidor.",
        close: "Cerrar",
        hybridGasoline: "Híbrido de gasolina",
        hybridDiesel: "Híbrido diésel",
        hydrogen: "Hidrógeno",
        tankCapacity: "Capacidad del tanque",
        purchaseOdometer: "Odómetro de compra",
        purchasePrice: "Precio de compra",
        saleDate: "Fecha de venta",
        saleOdometer: "Odómetro de venta",
        salePrice: "Precio de venta",
        vehicleNote: "Nota",
        isCurrent: "Actualmente en propiedad",
        created: "Creado",
        updated: "Actualizado",
        yes: "Sí",
        no: "No",
        location: "Ubicación",
        chargeRecord: "Registro de carga",
        fuelRecord: "Registro de combustible",
        receipt: "Recibo",
        chargingTime: "Tiempo de carga",
        paymentMethod: "Método de pago",
        title: "Título",
        recurring: "Recurrente",
        period: "Período",
        nextDate: "Próxima fecha",
        maintenanceEngineOil: "Aceite de motor",
        maintenanceOilFilter: "Filtro de aceite",
        maintenanceAirFilter: "Filtro de aire",
        maintenanceCabinFilter: "Filtro de cabina",
        maintenanceFuelFilter: "Filtro de combustible",
        maintenanceSparkPlug: "Bujía",
        maintenanceBrakePad: "Pastilla de freno",
        maintenanceBrakeDisc: "Disco de freno",
        maintenanceBrakeFluid: "Líquido de frenos",
        maintenanceCoolant: "Refrigerante",
        maintenanceTransmissionFluid: "Fluido de transmisión",
        maintenancePowerSteeringFluid: "Fluido de dirección asistida",
        maintenanceWiperBlade: "Escobilla limpiaparabrisas",
        maintenanceTireRotation: "Rotación de neumáticos",
        maintenanceTireReplacement: "Reemplazo de neumáticos",
        maintenanceWheelAlignment: "Alineación de ruedas",
        maintenanceBattery: "Batería",
        maintenanceTimingBelt: "Correa de distribución",
        maintenanceSerpentineBelt: "Correa serpentina",
        maintenanceSuspension: "Suspensión",
        maintenanceGeneralInspection: "Inspección general",
        maintenanceOther: "Otro",
        expenseFuel: "Combustible",
        expenseMaintenance: "Mantenimiento",
        expenseInsurance: "Seguro",
        expenseTax: "Impuesto",
        expenseToll: "Peaje",
        expenseParking: "Estacionamiento",
        expenseWash: "Lavado de auto",
        expenseFine: "Multa",
        expenseAccessory: "Accesorio",
        expenseOther: "Otro",
        chargerSlowAc: "Carga lenta AC",
        chargerFastDc: "Carga rápida DC",
        chargerSuperFastDc: "Carga ultra rápida DC (350kW+)",
        chargerHome: "Cargador doméstico",
        periodDaily: "Diario",
        periodWeekly: "Semanal",
        periodMonthly: "Mensual",
        periodYearly: "Anual"
    },
    fr: {
        appTitle: "AutoLog JSON Viewer",
        openFile: "📂 Ouvrir le fichier JSON",
        exportCsv: "📊 Exporter CSV",
        fileName: "Nom du fichier:",
        exportDate: "Date d'exportation:",
        appVersion: "Version de l'application:",
        backupNotice: "Toutes les données sont affichées en fonction de la date d'exportation. Ceci est un visualiseur en lecture seule.",
        vehicles: "Véhicules",
        fuelLogs: "Carburant/Charge",
        maintenance: "Entretien",
        expenses: "Autres frais",
        searchPlaceholder: "Rechercher...",
        allVehicles: "Tous les véhicules",
        clear: "🔄 Effacer",
        sortDefault: "Par défaut",
        sortNameAsc: "Nom (A-Z)",
        sortNameDesc: "Nom (Z-A)",
        sortDateAsc: "Date (Ancien-Récent)",
        sortDateDesc: "Date (Récent-Ancien)",
        totalFuelCost: "Coût total du carburant",
        totalMaintenanceCost: "Coût d'entretien",
        totalExpenses: "Autres frais",
        totalAllCosts: "Coûts totaux",
        welcomeTitle: "🚗 AutoLog JSON Viewer",
        welcomeDesc: "Afficher les fichiers de sauvegarde JSON exportés depuis l'application AutoLog.",
        webVersionNotice: "🌐 Version du navigateur Web - Aucune installation requise!",
        featureView: "✅ Vue complète des données",
        featureViewDesc: "Véhicules, journaux de carburant, entretien, autres frais",
        featureSearch: "🔍 Recherche et filtrage",
        featureSearchDesc: "Filtrer par véhicule et recherche rapide",
        featureStats: "📊 Statistiques",
        featureStatsDesc: "Afficher les résumés des coûts et les totaux",
        featurePrivacy: "🔒 Confidentialité d'abord",
        featurePrivacyDesc: "Toutes les données sont traitées localement dans votre navigateur",
        vehicle: "Véhicule",
        manufacturer: "Fabricant",
        model: "Modèle",
        year: "Année",
        plateNumber: "Info supplémentaire / N°",
        fuelType: "Type de carburant",
        odometer: "Odomètre",
        purchaseDate: "Date d'achat",
        date: "Date",
        station: "Station",
        pricePerUnit: "Prix/Unité",
        quantity: "Quantité",
        totalCost: "Coût total",
        efficiency: "Efficacité",
        fullTank: "Plein",
        chargerType: "Type de chargeur",
        batteryLevel: "Niveau de batterie",
        type: "Type",
        description: "Description",
        cost: "Coût",
        shop: "Atelier",
        nextDue: "Prochaine échéance",
        category: "Catégorie",
        amount: "Montant",
        notes: "Notes",
        details: "Détails",
        noData: "Aucune donnée disponible",
        noResults: "Aucun résultat trouvé",
        gasoline: "Essence",
        diesel: "Diesel",
        electric: "Électrique",
        hybrid: "Hybride",
        lpg: "GPL",
        helpTitle: "📖 Aide",
        helpIntro: "AutoLog JSON Viewer est un outil Web pour afficher les fichiers de sauvegarde exportés depuis l'application AutoLog.",
        helpHowToUse: "Comment utiliser",
        helpStep1: "1. Cliquez sur le bouton 'Ouvrir le fichier JSON'",
        helpStep2: "2. Sélectionnez votre fichier JSON de sauvegarde AutoLog",
        helpStep3: "3. Parcourez vos données à l'aide des onglets",
        helpStep4: "4. Utilisez la recherche et les filtres pour trouver des enregistrements spécifiques",
        helpStep5: "5. Cliquez sur n'importe quelle ligne pour voir les détails complets",
        helpExport: "Exporter vers CSV",
        helpExportDesc: "Cliquez sur 'Exporter CSV' pour télécharger vos données au format tableur.",
        helpPrivacy: "Confidentialité",
        helpPrivacyDesc: "Toutes les données sont traitées localement dans votre navigateur. Aucune donnée n'est jamais envoyée à un serveur.",
        close: "Fermer",
        hybridGasoline: "Hybride essence",
        hybridDiesel: "Hybride diesel",
        hydrogen: "Hydrogène",
        tankCapacity: "Capacité du réservoir",
        purchaseOdometer: "Odomètre à l'achat",
        purchasePrice: "Prix d'achat",
        saleDate: "Date de vente",
        saleOdometer: "Odomètre à la vente",
        salePrice: "Prix de vente",
        vehicleNote: "Note",
        isCurrent: "Actuellement possédé",
        created: "Créé",
        updated: "Mis à jour",
        yes: "Oui",
        no: "Non",
        location: "Emplacement",
        chargeRecord: "Enregistrement de charge",
        fuelRecord: "Enregistrement de carburant",
        receipt: "Reçu",
        chargingTime: "Temps de charge",
        paymentMethod: "Méthode de paiement",
        title: "Titre",
        recurring: "Récurrent",
        period: "Période",
        nextDate: "Prochaine date",
        maintenanceEngineOil: "Huile moteur",
        maintenanceOilFilter: "Filtre à huile",
        maintenanceAirFilter: "Filtre à air",
        maintenanceCabinFilter: "Filtre d'habitacle",
        maintenanceFuelFilter: "Filtre à carburant",
        maintenanceSparkPlug: "Bougie d'allumage",
        maintenanceBrakePad: "Plaquette de frein",
        maintenanceBrakeDisc: "Disque de frein",
        maintenanceBrakeFluid: "Liquide de frein",
        maintenanceCoolant: "Liquide de refroidissement",
        maintenanceTransmissionFluid: "Huile de transmission",
        maintenancePowerSteeringFluid: "Huile de direction assistée",
        maintenanceWiperBlade: "Balai d'essuie-glace",
        maintenanceTireRotation: "Rotation des pneus",
        maintenanceTireReplacement: "Remplacement des pneus",
        maintenanceWheelAlignment: "Alignement des roues",
        maintenanceBattery: "Batterie",
        maintenanceTimingBelt: "Courroie de distribution",
        maintenanceSerpentineBelt: "Courroie serpentine",
        maintenanceSuspension: "Suspension",
        maintenanceGeneralInspection: "Inspection générale",
        maintenanceOther: "Autre",
        expenseFuel: "Carburant",
        expenseMaintenance: "Entretien",
        expenseInsurance: "Assurance",
        expenseTax: "Taxe",
        expenseToll: "Péage",
        expenseParking: "Stationnement",
        expenseWash: "Lavage de voiture",
        expenseFine: "Amende",
        expenseAccessory: "Accessoire",
        expenseOther: "Autre",
        chargerSlowAc: "Charge lente AC",
        chargerFastDc: "Charge rapide DC",
        chargerSuperFastDc: "Charge ultra-rapide DC (350kW+)",
        chargerHome: "Chargeur domestique",
        periodDaily: "Quotidien",
        periodWeekly: "Hebdomadaire",
        periodMonthly: "Mensuel",
        periodYearly: "Annuel"
    }
};

// ============== 전역 변수 ==============
let currentLang = 'en';
let jsonData = null;
let currentTab = 'vehicles';
let vehicleMap = {};
let currentCurrency = { code: 'USD', locale: 'en-US' };

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
    
    // Update vehicle filter default option
    const vehicleFilter = document.getElementById('vehicleFilter');
    if (vehicleFilter && vehicleFilter.options[0]) {
        vehicleFilter.options[0].textContent = t.allVehicles;
    }
    
    // Update sort filter options
    updateSortFilterOptions();
    
    // Update tab labels
    updateTabLabels();
    
    // Update stats labels
    updateStatsLabels();
    
    // Update welcome screen
    updateWelcomeScreen();
    
    // Update file info labels
    updateFileInfoLabels();
}

function updateSortFilterOptions() {
    const t = translations[currentLang];
    const sortFilter = document.getElementById('sortFilter');
    if (!sortFilter) return;
    
    const currentValue = sortFilter.value;
    const options = [
        { value: 'default', text: t.sortDefault },
        { value: 'name-asc', text: t.sortNameAsc },
        { value: 'name-desc', text: t.sortNameDesc },
        { value: 'date-asc', text: t.sortDateAsc },
        { value: 'date-desc', text: t.sortDateDesc }
    ];
    
    sortFilter.innerHTML = options.map(opt => 
        `<option value="${opt.value}">${opt.text}</option>`
    ).join('');
    
    sortFilter.value = currentValue;
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
            calculateStats();
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
    document.getElementById('sortFilter').addEventListener('change', handleSearch);
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

    // Detect currency from the loaded backup so values render with the right symbol
    currentCurrency = detectCurrencyFromData(jsonData, currentLang);
    
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
            option.textContent = `${v.nickname || v.model} (${v.plateNumber || v.additionalInfo || 'N/A'})`;
            select.appendChild(option);
        });
    }
}

function calculateStats() {
    const cutoff = endOfToday();
    const fuelLogs = (jsonData.fuelLogs || []).filter(log => isOnOrBefore(log.dateTime || log.date, cutoff));
    const maintenanceLogs = (jsonData.maintenance || []).filter(m => isOnOrBefore(m.date || m.dateTime, cutoff));
    const expenseLogs = (jsonData.expenses || []).filter(e => isOnOrBefore(e.date || e.dateTime, cutoff));

    let totalFuel = 0;
    let totalMaintenance = 0;
    let totalExpenses = 0;
    
    fuelLogs.forEach(log => {
        totalFuel += normalizeAmount(log.totalCost);
    });
    
    maintenanceLogs.forEach(m => {
        totalMaintenance += normalizeAmount(m.cost);
    });
    
    expenseLogs.forEach(e => {
        totalExpenses += normalizeAmount(e.amount);
    });
    
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
    
    // Apply sorting
    const sortValue = document.getElementById('sortFilter')?.value || 'default';
    vehicles = applySorting(vehicles, sortValue, 'vehicle');
    
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
    
    // Apply sorting
    const sortValue = document.getElementById('sortFilter')?.value || 'default';
    logs = applySorting(logs, sortValue, 'fuelLog');
    
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
    
    // Apply sorting
    const sortValue = document.getElementById('sortFilter')?.value || 'default';
    records = applySorting(records, sortValue, 'maintenance');
    
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
            (e.title?.toLowerCase().includes(searchTerm)) ||
            (e.description?.toLowerCase().includes(searchTerm)) ||
            (e.notes?.toLowerCase().includes(searchTerm)) ||
            (vehicleMap[e.vehicleId]?.nickname?.toLowerCase().includes(searchTerm))
        );
    }
    
    // Apply sorting
    const sortValue = document.getElementById('sortFilter')?.value || 'default';
    expenses = applySorting(expenses, sortValue, 'expense');
    
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
                    <th>${t.title}</th>
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
                        <td>${escapeHtml(e.title || '-')}</td>
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
        ${v.tankCapacity ? `<p><strong>${t.tankCapacity}:</strong> ${v.tankCapacity} L</p>` : ''}
        ${v.purchaseDate ? `<p><strong>${t.purchaseDate}:</strong> ${formatDate(v.purchaseDate)}</p>` : ''}
        ${v.purchaseOdometer != null ? `<p><strong>${t.purchaseOdometer}:</strong> ${formatNumber(v.purchaseOdometer)} km</p>` : ''}
        ${v.purchasePrice != null ? `<p><strong>${t.purchasePrice}:</strong> ${formatCurrency(v.purchasePrice)}</p>` : ''}
        ${v.saleDate ? `<p><strong>${t.saleDate}:</strong> ${formatDate(v.saleDate)}</p>` : ''}
        ${v.saleOdometer != null ? `<p><strong>${t.saleOdometer}:</strong> ${formatNumber(v.saleOdometer)} km</p>` : ''}
        ${v.salePrice != null ? `<p><strong>${t.salePrice}:</strong> ${formatCurrency(v.salePrice)}</p>` : ''}
        <p><strong>${t.isCurrent}:</strong> ${v.isCurrent ? (t.yes || 'Yes') : (t.no || 'No')}</p>
        ${v.note ? `<p><strong>${t.vehicleNote}:</strong> ${escapeHtml(v.note)}</p>` : ''}
        <p><strong>${t.created}:</strong> ${formatDateTime(v.createdAt)}</p>
        <p><strong>${t.updated}:</strong> ${formatDateTime(v.updatedAt)}</p>
    `;
}

function renderFuelLogDetail(l) {
    const t = translations[currentLang];
    const vehicle = vehicleMap[l.vehicleId];
    const isElectric = l.fuelType === 'ELECTRIC';
    const qtyUnit = isElectric ? 'kWh' : 'L';
    const efficiencyUnit = isElectric ? 'km/kWh' : 'km/L';
    
    return `
        <h3>⛽ ${isElectric ? (t.chargeRecord || 'Charge Record') : (t.fuelRecord || 'Fuel Record')}</h3>
        <p><strong>${t.date}:</strong> ${formatDateTime(l.dateTime)}</p>
        <p><strong>${t.vehicle}:</strong> ${escapeHtml(vehicle?.nickname || vehicle?.model || 'Unknown')}</p>
        <p><strong>${t.station}:</strong> ${escapeHtml(l.stationName || '-')}</p>
        <p><strong>${t.location}:</strong> ${escapeHtml(l.stationLocation || '-')}</p>
        <p><strong>${t.fuelType}:</strong> ${getFuelTypeLabel(l.fuelType)}</p>
        ${isElectric ? `
            <p><strong>${t.chargerType}:</strong> ${formatChargerType(l.chargerType)}</p>
            <p><strong>${t.batteryLevel}:</strong> ${l.batteryBefore ?? '-'}% → ${l.batteryAfter ?? '-'}%</p>
            <p><strong>${t.pricePerUnit}:</strong> ${formatCurrency(l.pricePerUnit)}/${qtyUnit}</p>
            <p><strong>${t.quantity}:</strong> ${l.quantity?.toFixed(2) || '-'} ${qtyUnit}</p>
            ${l.chargingTime != null ? `<p><strong>${t.chargingTime}:</strong> ${l.chargingTime} ${currentLang === 'ko' ? '분' : 'min'}</p>` : ''}
        ` : `
            <p><strong>${t.pricePerUnit}:</strong> ${formatCurrency(l.pricePerUnit)}/L</p>
            <p><strong>${t.quantity}:</strong> ${l.quantity?.toFixed(2) || '-'} L</p>
            <p><strong>${t.fullTank}:</strong> ${l.isFullTank ? (t.yes || 'Yes') : (t.no || 'No')}</p>
        `}
        <p><strong>${t.totalCost}:</strong> ${formatCurrency(l.totalCost)}</p>
        <p><strong>${t.odometer}:</strong> ${formatNumber(l.odometerReading)} km</p>
        ${l.calculatedEfficiency ? `<p><strong>${t.efficiency}:</strong> ${l.calculatedEfficiency.toFixed(2)} ${efficiencyUnit}</p>` : ''}
        ${l.paymentMethod ? `<p><strong>${t.paymentMethod}:</strong> ${formatPaymentMethod(l.paymentMethod)}</p>` : ''}
        ${l.notes ? `<p><strong>${t.notes}:</strong> ${escapeHtml(l.notes)}</p>` : ''}
        ${l.receiptImageUri ? `<p><strong>${t.receipt}:</strong> ${escapeHtml(l.receiptImageUri)}</p>` : ''}
        <p><strong>${t.created}:</strong> ${formatDateTime(l.createdAt)}</p>
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
        <p><strong>${t.odometer}:</strong> ${formatNumber(m.odometerReading)} km</p>
        ${m.nextDueOdometer != null ? `<p><strong>${t.nextDue} (${t.odometer}):</strong> ${formatNumber(m.nextDueOdometer)} km</p>` : ''}
        ${m.nextDueDate ? `<p><strong>${t.nextDue} (${t.date}):</strong> ${formatDate(m.nextDueDate)}</p>` : ''}
        ${m.notes ? `<p><strong>${t.notes}:</strong> ${escapeHtml(m.notes)}</p>` : ''}
        ${m.receiptImageUri ? `<p><strong>${t.receipt}:</strong> ${escapeHtml(m.receiptImageUri)}</p>` : ''}
        <p><strong>${t.created}:</strong> ${formatDateTime(m.createdAt)}</p>
    `;
}

function renderExpenseDetail(e) {
    const t = translations[currentLang];
    const vehicle = vehicleMap[e.vehicleId];
    
    return `
        <h3>💰 ${escapeHtml(e.title || formatExpenseCategory(e.category))}</h3>
        <p><strong>${t.date}:</strong> ${formatDate(e.date)}</p>
        <p><strong>${t.vehicle}:</strong> ${escapeHtml(vehicle?.nickname || vehicle?.model || 'Unknown')}</p>
        <p><strong>${t.category}:</strong> ${escapeHtml(formatExpenseCategory(e.category))}</p>
        ${e.title ? `<p><strong>${t.title}:</strong> ${escapeHtml(e.title)}</p>` : ''}
        <p><strong>${t.description}:</strong> ${escapeHtml(e.description || '-')}</p>
        <p><strong>${t.amount}:</strong> ${formatCurrency(e.amount)}</p>
        <p><strong>${t.paymentMethod}:</strong> ${formatPaymentMethod(e.paymentMethod)}</p>
        <p><strong>${t.recurring}:</strong> ${e.isRecurring ? (t.yes || 'Yes') : (t.no || 'No')}</p>
        ${e.isRecurring && e.recurringPeriod ? `<p><strong>${t.period}:</strong> ${formatRecurringPeriod(e.recurringPeriod)}</p>` : ''}
        ${e.isRecurring && e.nextRecurringDate ? `<p><strong>${t.nextDate}:</strong> ${formatDate(e.nextRecurringDate)}</p>` : ''}
        ${e.notes ? `<p><strong>${t.notes}:</strong> ${escapeHtml(e.notes)}</p>` : ''}
        ${e.receiptImageUri ? `<p><strong>${t.receipt}:</strong> ${escapeHtml(e.receiptImageUri)}</p>` : ''}
        <p><strong>${t.created}:</strong> ${formatDateTime(e.createdAt)}</p>
    `;
}

// ============== 검색 및 필터 ==============
function handleSearch() {
    renderCurrentTab();
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('vehicleFilter').value = '';
    document.getElementById('sortFilter').value = 'default';
    renderCurrentTab();
}

function applySorting(items, sortValue, itemType) {
    if (!items || items.length === 0) return items;
    
    const sorted = [...items]; // Create a copy to avoid mutating original
    
    switch (sortValue) {
        case 'name-asc':
            if (itemType === 'vehicle') {
                sorted.sort((a, b) => {
                    const nameA = (a.nickname || a.model || '').toLowerCase();
                    const nameB = (b.nickname || b.model || '').toLowerCase();
                    return nameA.localeCompare(nameB);
                });
            } else if (itemType === 'fuelLog') {
                sorted.sort((a, b) => {
                    const nameA = (a.stationName || '').toLowerCase();
                    const nameB = (b.stationName || '').toLowerCase();
                    return nameA.localeCompare(nameB);
                });
            } else if (itemType === 'maintenance') {
                sorted.sort((a, b) => {
                    const nameA = (a.maintenanceType || '').toLowerCase();
                    const nameB = (b.maintenanceType || '').toLowerCase();
                    return nameA.localeCompare(nameB);
                });
            } else if (itemType === 'expense') {
                sorted.sort((a, b) => {
                    const nameA = (a.title || a.category || '').toLowerCase();
                    const nameB = (b.title || b.category || '').toLowerCase();
                    return nameA.localeCompare(nameB);
                });
            }
            break;
            
        case 'name-desc':
            if (itemType === 'vehicle') {
                sorted.sort((a, b) => {
                    const nameA = (a.nickname || a.model || '').toLowerCase();
                    const nameB = (b.nickname || b.model || '').toLowerCase();
                    return nameB.localeCompare(nameA);
                });
            } else if (itemType === 'fuelLog') {
                sorted.sort((a, b) => {
                    const nameA = (a.stationName || '').toLowerCase();
                    const nameB = (b.stationName || '').toLowerCase();
                    return nameB.localeCompare(nameA);
                });
            } else if (itemType === 'maintenance') {
                sorted.sort((a, b) => {
                    const nameA = (a.maintenanceType || '').toLowerCase();
                    const nameB = (b.maintenanceType || '').toLowerCase();
                    return nameB.localeCompare(nameA);
                });
            } else if (itemType === 'expense') {
                sorted.sort((a, b) => {
                    const nameA = (a.title || a.category || '').toLowerCase();
                    const nameB = (b.title || b.category || '').toLowerCase();
                    return nameB.localeCompare(nameA);
                });
            }
            break;
            
        case 'date-asc':
            if (itemType === 'vehicle') {
                sorted.sort((a, b) => {
                    const dateA = new Date(a.purchaseDate || a.createdAt || 0);
                    const dateB = new Date(b.purchaseDate || b.createdAt || 0);
                    return dateA - dateB;
                });
            } else if (itemType === 'fuelLog') {
                sorted.sort((a, b) => {
                    const dateA = new Date(a.dateTime || 0);
                    const dateB = new Date(b.dateTime || 0);
                    return dateA - dateB;
                });
            } else if (itemType === 'maintenance') {
                sorted.sort((a, b) => {
                    const dateA = new Date(a.date || 0);
                    const dateB = new Date(b.date || 0);
                    return dateA - dateB;
                });
            } else if (itemType === 'expense') {
                sorted.sort((a, b) => {
                    const dateA = new Date(a.date || 0);
                    const dateB = new Date(b.date || 0);
                    return dateA - dateB;
                });
            }
            break;
            
        case 'date-desc':
            if (itemType === 'vehicle') {
                sorted.sort((a, b) => {
                    const dateA = new Date(a.purchaseDate || a.createdAt || 0);
                    const dateB = new Date(b.purchaseDate || b.createdAt || 0);
                    return dateB - dateA;
                });
            } else if (itemType === 'fuelLog') {
                sorted.sort((a, b) => {
                    const dateA = new Date(a.dateTime || 0);
                    const dateB = new Date(b.dateTime || 0);
                    return dateB - dateA;
                });
            } else if (itemType === 'maintenance') {
                sorted.sort((a, b) => {
                    const dateA = new Date(a.date || 0);
                    const dateB = new Date(b.date || 0);
                    return dateB - dateA;
                });
            } else if (itemType === 'expense') {
                sorted.sort((a, b) => {
                    const dateA = new Date(a.date || 0);
                    const dateB = new Date(b.date || 0);
                    return dateB - dateA;
                });
            }
            break;
            
        case 'default':
        default:
            // Default sorting: date descending for logs, default order for vehicles
            if (itemType === 'fuelLog') {
                sorted.sort((a, b) => new Date(b.dateTime || 0) - new Date(a.dateTime || 0));
            } else if (itemType === 'maintenance') {
                sorted.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
            } else if (itemType === 'expense') {
                sorted.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
            }
            break;
    }
    
    return sorted;
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
        ? ['차량명', '제조사', '모델', '연식', '번호/추가정보', '연료 타입', '연료탱크 용량(L)', '현재 주행거리(km)', '구매일', '구매 시 주행거리(km)', '구매 가격', '판매일', '판매 시 주행거리(km)', '판매 가격', '현재 소유', '메모']
        : ['Vehicle Name', 'Manufacturer', 'Model', 'Year', 'Plate / Info', 'Fuel Type', 'Tank Capacity (L)', 'Current Odometer (km)', 'Purchase Date', 'Purchase Odometer (km)', 'Purchase Price', 'Sale Date', 'Sale Odometer (km)', 'Sale Price', 'Currently Owned', 'Note'];
    const rows = jsonData.vehicles.map(v => [
        getVehicleName(v.id),
        v.manufacturer || '',
        v.model || '',
        v.year || '',
        v.plateNumber || v.additionalInfo || '',
        getFuelTypeLabel(v.fuelType),
        v.tankCapacity ?? '',
        v.currentOdometer ?? '',
        v.purchaseDate || '',
        v.purchaseOdometer ?? '',
        v.purchasePrice ?? '',
        v.saleDate || '',
        v.saleOdometer ?? '',
        v.salePrice ?? '',
        v.isCurrent ? (currentLang === 'ko' ? '예' : 'Yes') : (currentLang === 'ko' ? '아니오' : 'No'),
        v.note || ''
    ]);
    return toCsvString(title, headers, rows);
}

function fuelLogsToCsv() {
    const t = translations[currentLang];
    const title = t.fuelLogs || 'Fuel Logs';
    const headers = currentLang === 'ko'
        ? ['차량', '날짜/시간', '주유/충전소', '위치', '연료 타입', '단가', '주유/충전량', '총액', '주행거리(km)', '가득 주유', '연비/효율', '충전기 타입', '충전 전 배터리(%)', '충전 후 배터리(%)', '충전 시간(분)', '결제 수단', '메모']
        : ['Vehicle', 'Date/Time', 'Station', 'Location', 'Fuel Type', 'Price Per Unit', 'Quantity', 'Total Cost', 'Odometer (km)', 'Full Tank', 'Efficiency', 'Charger Type', 'Battery Before (%)', 'Battery After (%)', 'Charging Time (min)', 'Payment Method', 'Notes'];
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
        formatChargerType(l.chargerType),
        l.batteryBefore ?? '',
        l.batteryAfter ?? '',
        l.chargingTime ?? '',
        formatPaymentMethod(l.paymentMethod),
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
        formatPaymentMethod(e.paymentMethod) || '',
        formatRecurringPeriod(e.recurringPeriod) || '',
        e.nextRecurringDate || '',
        e.notes || ''
    ]);
    return toCsvString(title, headers, rows);
}

function formatPaymentMethod(method) {
    if (!method) return '-';
    const mapEn = {
        CASH: 'Cash',
        CREDIT_CARD: 'Credit Card',
        DEBIT_CARD: 'Debit Card',
        BANK_TRANSFER: 'Bank Transfer',
        MOBILE_PAYMENT: 'Mobile Payment',
        OTHER: 'Other'
    };
    const mapKo = {
        CASH: '현금',
        CREDIT_CARD: '신용카드',
        DEBIT_CARD: '체크카드',
        BANK_TRANSFER: '계좌이체',
        MOBILE_PAYMENT: '모바일 결제',
        OTHER: '기타'
    };
    const lookup = currentLang === 'ko' ? mapKo : mapEn;
    return lookup[method] || method;
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
    const numericAmount = normalizeAmount(amount);
    if (!Number.isFinite(numericAmount)) return '-';
    const localeToUse = currentCurrency.locale || (currentLang === 'ko' ? 'ko-KR' : 'en-US');
    try {
        return new Intl.NumberFormat(localeToUse, {
            style: 'currency',
            currency: currentCurrency.code || 'USD'
        }).format(numericAmount);
    } catch (error) {
        console.warn('Failed to format currency, falling back to plain number:', error);
        return new Intl.NumberFormat(localeToUse).format(numericAmount);
    }
}

function normalizeAmount(value) {
    if (value === null || value === undefined) return 0;
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    if (typeof value === 'string') {
        const cleaned = value.replace(/[^0-9.-]/g, '');
        const parsed = parseFloat(cleaned);
        return Number.isFinite(parsed) ? parsed : 0;
    }
    return 0;
}

function detectCurrencyFromData(data, langFallback = 'en') {
    const fallback = langFallback === 'ko'
        ? { code: 'KRW', locale: 'ko-KR' }
        : { code: 'USD', locale: 'en-US' };
    if (!data) return fallback;

    const candidates = [
        data.currency,
        data.currencyCode,
        data.currency_code,
        data.userCurrency,
        data.settings?.currency,
        data.settings?.currencyCode,
        data.settings?.currency_code,
        data.meta?.currency,
        data.meta?.currencyCode,
        data.preferences?.currency,
        data.preferences?.currencyCode
    ];

    // Check item-level currency codes if present
    const itemLevel = [
        ...(data.fuelLogs || []),
        ...(data.maintenance || []),
        ...(data.expenses || [])
    ];
    const itemCurrency = itemLevel.find(item => item?.currency || item?.currencyCode || item?.currency_code);
    if (itemCurrency) {
        candidates.push(itemCurrency.currency || itemCurrency.currencyCode || itemCurrency.currency_code);
    }

    const symbolMap = {
        '₩': 'KRW',
        '$': 'USD',
        '€': 'EUR',
        '¥': 'JPY',
        '£': 'GBP',
        '₹': 'INR',
        '₫': 'VND',
        '₱': 'PHP',
        '₦': 'NGN',
        '₺': 'TRY',
        'R$': 'BRL',
        '₽': 'RUB'
    };

    // Try to detect from formatted amount strings that include a symbol
    const sampleAmount = itemLevel.find(item => typeof item?.totalCost === 'string' || typeof item?.amount === 'string');
    if (sampleAmount) {
        const str = String(sampleAmount.totalCost || sampleAmount.amount || '');
        const matchedSymbol = Object.keys(symbolMap).find(sym => str.includes(sym));
        if (matchedSymbol) {
            candidates.push(symbolMap[matchedSymbol]);
        }
    }

    const code = candidates
        .filter(Boolean)
        .map(c => String(c).trim().toUpperCase())
        .find(c => /^[A-Z]{3}$/.test(c));
    if (code) {
        return { code, locale: fallback.locale };
    }
    return fallback;
}

function endOfToday() {
    const now = new Date();
    now.setHours(23, 59, 59, 999);
    return now;
}

function isOnOrBefore(dateLike, cutoff) {
    if (!dateLike) return true;
    const d = new Date(dateLike);
    if (Number.isNaN(d.getTime())) return true;
    return d.getTime() <= cutoff.getTime();
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
        case 'HYBRID_GASOLINE':
            return t.hybridGasoline || t.hybrid;
        case 'HYBRID_DIESEL':
            return t.hybridDiesel || t.hybrid;
        case 'LPG':
            return t.lpg;
        case 'HYDROGEN':
            return t.hydrogen || 'Hydrogen';
        default:
            return fuelType || '-';
    }
}

function formatMaintenanceType(type) {
    if (!type) return '-';
    const t = translations[currentLang];
    const typeMap = {
        ENGINE_OIL: t.maintenanceEngineOil,
        OIL_FILTER: t.maintenanceOilFilter,
        AIR_FILTER: t.maintenanceAirFilter,
        CABIN_FILTER: t.maintenanceCabinFilter,
        FUEL_FILTER: t.maintenanceFuelFilter,
        SPARK_PLUG: t.maintenanceSparkPlug,
        BRAKE_PAD: t.maintenanceBrakePad,
        BRAKE_DISC: t.maintenanceBrakeDisc,
        BRAKE_FLUID: t.maintenanceBrakeFluid,
        COOLANT: t.maintenanceCoolant,
        TRANSMISSION_FLUID: t.maintenanceTransmissionFluid,
        POWER_STEERING_FLUID: t.maintenancePowerSteeringFluid,
        WIPER_BLADE: t.maintenanceWiperBlade,
        TIRE_ROTATION: t.maintenanceTireRotation,
        TIRE_REPLACEMENT: t.maintenanceTireReplacement,
        WHEEL_ALIGNMENT: t.maintenanceWheelAlignment,
        BATTERY: t.maintenanceBattery,
        TIMING_BELT: t.maintenanceTimingBelt,
        SERPENTINE_BELT: t.maintenanceSerpentineBelt,
        SUSPENSION: t.maintenanceSuspension,
        GENERAL_INSPECTION: t.maintenanceGeneralInspection,
        OTHER: t.maintenanceOther
    };
    return typeMap[type] || type.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

function formatExpenseCategory(category) {
    if (!category) return '-';
    const t = translations[currentLang];
    const categoryMap = {
        FUEL: t.expenseFuel,
        MAINTENANCE: t.expenseMaintenance,
        INSURANCE: t.expenseInsurance,
        TAX: t.expenseTax,
        TOLL: t.expenseToll,
        PARKING: t.expenseParking,
        WASH: t.expenseWash,
        FINE: t.expenseFine,
        ACCESSORY: t.expenseAccessory,
        OTHER: t.expenseOther
    };
    return categoryMap[category] || category.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

function formatChargerType(chargerType) {
    if (!chargerType) return '-';
    const t = translations[currentLang];
    const chargerMap = {
        SLOW_AC: t.chargerSlowAc,
        FAST_DC: t.chargerFastDc,
        SUPER_FAST_DC: t.chargerSuperFastDc,
        HOME_CHARGER: t.chargerHome
    };
    return chargerMap[chargerType] || chargerType.replace(/_/g, ' ');
}

function formatRecurringPeriod(period) {
    if (!period) return '-';
    const t = translations[currentLang];
    const periodMap = {
        DAILY: t.periodDaily,
        WEEKLY: t.periodWeekly,
        MONTHLY: t.periodMonthly,
        YEARLY: t.periodYearly
    };
    return periodMap[period] || period;
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
