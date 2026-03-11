        const IMG_BASE = 'images/';
        const IMG_EXT = '.webp';
        const STORAGE_BASE = 'storage/';
        const STORAGE_EXT = '.zip';
        const STORAGE_EXT_EXE = '.exe';

        export const softData = [
            {
                id: 1,
                title: 'Symantec Endpoint Protection',
                description: 'З теки Install встановити проукт. Після встановлення запустити конфігурацію conf.ps1',
                image: IMG_BASE + 'symantec' + IMG_EXT,
                tech: ['Встановлення', 'Налаштування'],
                download: STORAGE_BASE + "Symantec" + STORAGE_EXT,
            },
            {
                id: 2,
                title: 'Microsoft Office 365',
                description: 'Microsoft Office 365 використовується для комплексної роботи у офісі. Word, Excel, Outlook...',
                image: IMG_BASE + 'office365'  + IMG_EXT,
                tech: ['Встановлення', 'Вхід'],
                download: STORAGE_BASE + "Office365" + STORAGE_EXT,
            },
            {
                id: 3,
                title: '7-zip',
                description: '7zip - безкоштовний та кращий архіватор для використання у домашніх чи корпоративних мережах.',
                image: IMG_BASE + '7zip' + IMG_EXT,
                tech: ['Встановлення'],
                download: STORAGE_BASE + "7z" + STORAGE_EXT_EXE,
            },
            {
                id: 4,
                title: 'Adobe Services',
                description: 'Використання сервісів Adobe, зокрема Adobe Reader є важливою частиною робочого процесу.',
                image: IMG_BASE + 'adobe'  + IMG_EXT,
                tech: ['Встановлення', 'Acrobat Reader'],
                download: STORAGE_BASE + "Acrobat" + STORAGE_EXT,
            },
            {
                id: 5,
                title: 'FortiClient VPN',
                description: 'Для створення безпечних підключень чи доступу до закритих ресурсів важливо використовувати VPN.',
                image: IMG_BASE + 'forticlientvpn' + IMG_EXT,
                tech: ['Встановлення', 'Інструктаж'],
                download: STORAGE_BASE + "FortiClientVPN"+ STORAGE_EXT,
            },
            {
                id: 6,
                title: 'AnyDesk',
                description: 'Дистанційно допомагати користувачам та спостерігати за їх діями можна за допомогою даного продукту.',
                image: IMG_BASE + 'anydesk' + IMG_EXT,
                tech: ['Встановлення', 'Інструктаж'],
                download: STORAGE_BASE + "AnyDesk" + STORAGE_EXT,
            },
            {
                id: 7,
                title: 'Microsoft Teams',
                description: 'Назначення зустрічей, проведення семінарів, нарад та інших типів конференсій допомагає Microsoft Teams.',
                image: IMG_BASE + 'teams' + IMG_EXT,
                tech: ['Встановлення', 'Вхід'],
                download: STORAGE_BASE + "MSTeams" + STORAGE_EXT, 
            },
            {
                id: 8,
                title: 'Принтери',
                description: 'Налаштувати принтери можна використовуючи дану збірку драйверів, тут збережені драйвери для підключення пристроїв.',
                image: IMG_BASE + 'printers' + IMG_EXT,
                tech: ['Встановлення', '*Налаштування'],
                download: STORAGE_BASE + "Printers" + STORAGE_EXT, 
            },
            {
                id: 9,
                title: 'Доступ до Інтернету',
                description: 'Один з важливих моментів - доступ до інтернету, на вибір є Google Chrome та Mozilla Firefox.',
                image: IMG_BASE + 'browsers' + IMG_EXT,
                tech: ['Встановлення', '*Налаштування'],
                download: STORAGE_BASE + "Browsers" + STORAGE_EXT,
            },
        ];