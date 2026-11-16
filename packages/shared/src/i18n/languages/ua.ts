import {
    EMAIL_MAX_LENGTH,
    PASSWORD_MAX_LENGTH,
    PASSWORD_MIN_LENGTH,
    CHANGE_PASSWORD_OTP_LENGTH,
    AVATAR_CONFIG,
    BLOG_VIDEO_CONFIG,
    BLOG_IMAGE_CONFIG,
    BLOG_TITLE_MIN_LENGTH,
    BLOG_TITLE_MAX_LENGTH,
    BLOG_SUBTITLE_MAX_LENGTH,
    BLOG_SUBTITLE_MIN_LENGTH,
    BLOG_BODY_MAX_LENGTH,
    BLOG_BODY_MIN_LENGTH,
    INVITATION_NOTE_MAX_LENGTH,
} from "../../form/constants";
import { formatBytes } from "../../utils";

export const ua = {
    form: {
        password: {
            min: `мінімум ${PASSWORD_MIN_LENGTH} символів`,
            max: `максимум ${PASSWORD_MAX_LENGTH} символів`,
            invalid: `Неправильний пароль`,
            label: `Пароль`,
        },
        currentPassword: {
            min: `мінімум ${PASSWORD_MIN_LENGTH} символів`,
            max: `максимум ${PASSWORD_MAX_LENGTH} символів`,
            invalid: `Неправильний пароль`,
            label: `Поточний пароль`,
        },
        newPassword: {
            min: `мінімум ${PASSWORD_MIN_LENGTH} символів`,
            max: `максимум ${PASSWORD_MAX_LENGTH} символів`,
            sameAsCurrent: "Новий пароль збігається з поточним",
            label: `Новий пароль`,
        },
        code: {
            length: `Код має містити ${CHANGE_PASSWORD_OTP_LENGTH} цифр`,
            digits: "Лише цифри",
            label: "Код підтвердження",
        },
        file: {
            avatar: {
                tooLarge: `Максимально допустимий розмір файлу: ${formatBytes(AVATAR_CONFIG.maxFileSizeBytes)}`,
            },
            blogVideo: {
                tooLarge: `Максимально допустимий розмір файлу: ${formatBytes(BLOG_VIDEO_CONFIG.maxFileSizeBytes)}`,
            },
            blogImage: {
                tooLarge: `Максимально допустимий розмір файлу: ${formatBytes(BLOG_IMAGE_CONFIG.maxFileSizeBytes)}`,
            },
            unsupportedType: "Цей формат не підтримується",
            unreadable: "Не вдалося прочитати файл",
        },
        email: {
            max: `максимум ${EMAIL_MAX_LENGTH} символів`,
            invalid: `некоректний формат пошти`,
            notFound: `пошту не знайдено`,
            unique: `email має бути унікальним`,
            label: `Пошта`,
        },
        rePassword: {
            label: `Пароль повторно`,
            same: "Паролі не збігаються",
            min: `мінімум ${PASSWORD_MIN_LENGTH} символів`,
            max: `максимум ${PASSWORD_MAX_LENGTH} символів`,
        },
        dropzone: {
            dropActive: "Відпустіть файл",
            dropIdle: "Перетягніть файл або натисніть",
        },
        invitation: {
            note: {
                max: `максимум ${INVITATION_NOTE_MAX_LENGTH} символів`,
            },
        },
        blog: {
            body: {
                min: `мінімум ${BLOG_BODY_MIN_LENGTH} символів`,
                max: `максимум ${BLOG_BODY_MAX_LENGTH} символів`,
            },
            title: {
                label: "Заголовок",
                min: `мінімум ${BLOG_TITLE_MIN_LENGTH} символів`,
                max: `максимум ${BLOG_TITLE_MAX_LENGTH} символів`,
            },
            subtitle: {
                label: "Підзаголовок",
                min: `мінімум ${BLOG_SUBTITLE_MIN_LENGTH} символів`,
                max: `максимум ${BLOG_SUBTITLE_MAX_LENGTH} символів`,
            },
        },
        optional: `*необов'язкове поле`,
        required: "обов'язкове поле",
        submit: "Підтвердити",
    },
    pages: {
        main: {
            name: "Головна",
        },
        register: {
            name: "Реєстрація",
            feedback: {
                success: {
                    registerSuccess: "Реєстрація успішна!",
                    mailSend:
                        "Реєстрація успішна! Посилання для активації надіслано на пошту. Час дії: {time}",
                },
            },
            login: "Вже є акаунт?",
        },
        login: {
            name: "Вхід",
            feedback: {
                success: {
                    loginSuccess: "Авторизація успішна!",
                },
                errors: {
                    notActive: "Акаунт не активовано.",
                    blocked: "Ваш акаунт заблоковано.",
                    passwordNotFound: `Пароль не задано! Натисніть: "{btn}"`,
                    sendMail:
                        "Акаунт не активовано. Надішліть листа для активації",
                    expire: "Акаунт не активовано. Термін дії посилання активації минув. Надішліть новий лист",
                    alreadySend:
                        "Акаунт не активовано. Лист для активації надіслано на пошту. Час дії: {time}",
                },
            },
            register: "Немає акаунту?",
        },
        admin: {
            name: "Головна",
            placeholder: "Тут незабаром з'явиться генерація",
            blog: {
                create: {
                    name: "Створити",
                },
                name: "Блог",
                filter: {
                    short: {
                        all: "Усі",
                        yes: "Короткі",
                        no: "Не короткі",
                        label: "Короткі",
                    },
                    important: {
                        all: "Усі",
                        yes: "Важливі",
                        no: "Не важливі",
                        label: "Важливі",
                    },
                    dateFrom: "Дата від",
                    dateTo: "Дата до",
                },
                actions: {
                    main: "Головний блог",
                    setMain: "Зробити головним",
                    unsetMain: "Прибрати з головних",
                    toggleImportant: "Позначити як важливу",
                    toggleImportantActive: "Зняти позначку «важлива»",
                    toggleShort: "Позначити як коротку",
                    toggleShortActive: "Зняти позначку «коротка»",
                },
                feedback: {
                    create: "Запис успішно створено",
                    update: "Запис успішно оновлено",
                    delete: "Запис успішно видалено",
                    deleteAll: "Усі записи видалено",
                    setMain: "Блог призначено головним",
                    unsetMain: "Блог прибрано з головних",
                    setImportant: "Блог позначено як важливий",
                    unsetImportant: "Блог знято з важливих",
                    setShort: "Блог позначено як короткий",
                    unsetShort: "Блог знято з коротких",
                    mediaImage: {
                        notFound:
                            "{count} зображень не знайдено або вже видалено",
                        linkedToBlog:
                            "Зображення використовується в блозі та не може бути видалено",
                        deleteAllSkipped:
                            "{count} зображень не видалено — використовуються в блогах",
                        deleteSuccess: "Зображення видалено",
                        deleteAllSuccess: "Усі зображення видалено",
                    },
                    mediaVideo: {
                        notFound: "{count} відео не знайдено або вже видалено",
                        linkedToBlog:
                            "Відео використовується в блозі та не може бути видалено",
                        deleteAllSkipped:
                            "{count} відео не видалено — використовуються в блогах",
                        deleteSuccess: "Відео видалено",
                        deleteAllSuccess: "Усі відео видалено",
                    },
                },
            },
            settings: {
                name: "Налаштування",
                groups: {
                    account: "Акаунт",
                    other: "Інше",
                },
                profile: {
                    name: "Профіль",
                },
                password: {
                    name: "Пароль",
                    subtitle: "Потрібне підтвердження по email",
                },
                sessions: {
                    name: "Сесії",
                },
            },
            admins: {
                name: "Адміністратори",
                status: {
                    all: "Усі",
                    active: "Активовано",
                    blocked: "Заблоковано",
                },
                filter: {
                    status: "Статус",
                    sortBy: "Сортування за",
                    createdAt: "Дата реєстрації",
                    lastLoginAt: "Дата входу",
                    lastSeenAt: "Остання активність",
                },
                empty: "Адміністраторів поки немає",
                noteLabel: "Нотатка",
                notePlaceholder: "Інформація про роль, завдання...",
                lastSeen: "Онлайн {time}",
                lastLogin: "Вхід {time}",
                joined: "Зареєстровано {time}",
                noSessions: "Немає активних сесій",
                actions: {
                    block: "Заблокувати",
                    unblock: "Розблокувати",
                    delete: "Видалити",
                    sessions: "Сесії",
                    updateNote: "Зберегти нотатку",
                    addNote: "Додати нотатку",
                    deleteSession: "Завершити сесію",
                    deleteAllSessions: "Завершити всі сесії",
                },
                feedback: {
                    blocked: "Адміністратора заблоковано",
                    unblocked: "Блокування знято",
                    deleted: "Адміністратора видалено",
                    noteUpdated: "Нотатку оновлено",
                    sessionDeleted: "Сесію завершено",
                    allSessionsDeleted: "Усі сесії завершено",
                },
                sessions: {
                    title: "Сесії",
                    empty: "Активних сесій немає",
                    deleteAll: "Завершити всі",
                },
            },
            users: {
                name: "Користувачі",
                status: {
                    all: "Усі",
                    active: "Активовано",
                    noactive: "Не активовано",
                    blocked: "Заблоковано",
                },
                filter: {
                    status: "Статус",
                    sortBy: "Сортування за",
                    createdAt: "Дата реєстрації",
                    lastLoginAt: "Дата входу",
                    lastSeenAt: "Остання активність",
                },
                empty: "Користувачів поки немає",
                noteLabel: "Нотатка",
                notePlaceholder: "Нотатки про користувача...",
                lastSeen: "Онлайн {time}",
                lastLogin: "Вхід {time}",
                joined: "Зареєстровано {time}",
                noSessions: "Немає активних сесій",
                actions: {
                    block: "Заблокувати",
                    activate: "Активувати",
                    delete: "Видалити",
                    updateNote: "Зберегти нотатку",
                    addNote: "Додати нотатку",
                    deleteSession: "Завершити сесію",
                    deleteAllSessions: "Завершити всі сесії",
                },
                feedback: {
                    blocked: "Користувача заблоковано",
                    activated: "Користувача активовано",
                    deleted: "Користувача видалено",
                    noteUpdated: "Нотатку оновлено",
                    sessionDeleted: "Сесію завершено",
                    allSessionsDeleted: "Усі сесії завершено",
                },
                sessions: {
                    title: "Сесії",
                    empty: "Активних сесій немає",
                    deleteAll: "Завершити всі",
                },
            },
            invitation: {
                name: "Запрошення",
                register: {
                    title: "Створення акаунту",
                    feedback: {
                        success: "Акаунт створено. Можете увійти.",
                        expired: "Посилання запрошення застаріло.",
                        revoked: "Посилання запрошення було відкликано.",
                    },
                },
                actions: {
                    create: "Створити запрошення",
                    delete: "Видалити",
                    revoke: "Відкликати",
                    unrevoke: "Відновити",
                    resend: "Надіслати повторно",
                    updateNote: "Зберегти нотатку",
                    addNote: "Додати нотатку",
                },
                status: {
                    all: "Усі",
                    active: "Активне",
                    expired: "Застаріло",
                    revoked: "Відкликано",
                },
                linkCopied: "Посилання скопійовано",
                linkLabel: "Посилання запрошення",
                noteLabel: "Нотатка",
                notePlaceholder: "Наприклад, кому і навіщо видано",
                expiresAt: "Спливає через {time}",
                expiredAt: "Застаріло {time}",
                revokedAt: "Відкликано {time}",
                empty: "Запрошень поки немає",
                form: {
                    title: "Нове запрошення",
                    email: "Email адміністратора",
                    note: "Нотатка",
                },
                feedback: {
                    created: "Запрошення надіслано на {email}",
                    deleted: "Запрошення видалено",
                    revoked: "Запрошення відкликано",
                    resent: "Запрошення повторно надіслано на {email}",
                    noteUpdated: "Нотатку оновлено",
                    alreadyExists: "Запрошення для цього email вже існує",
                    adminAlreadyExists: "Адміністратор з таким email вже існує",
                    alreadyRevoked: "Запрошення вже відкликано",
                    notRevoked: "Запрошення не відкликано",
                    isRevoked:
                        "Запрошення відкликано та не може бути надіслано повторно",
                    unrevoked: "Запрошення відновлено",
                },
            },
            login: {
                name: "Вхід",
                feedback: {
                    success: {
                        loginSuccess: "Авторизація успішна!",
                    },
                },
            },
            forgotPassword: {
                changePassword: {
                    name: "Зміна пароля",
                    feedback: {
                        success: {
                            changeSuccess: "Зміну пароля виконано успішно!",
                        },
                        errors: {
                            timeout:
                                "Термін дії посилання для відновлення минув! Пройдіть процедуру надсилання ще раз",
                            notFound:
                                "Посилання недійсне! Пройдіть процедуру надсилання ще раз",
                        },
                    },
                },
                name: "Забули пароль?",
                login: "Повернутися до входу",
                feedback: {
                    errors: {
                        alreadySent:
                            "Лист із посиланням для відновлення вже надіслано. Час дії посилання: {time}",
                    },
                    success:
                        "Лист із посиланням для відновлення надіслано. Час дії посилання: {time}",
                },
            },
        },

        activate: {
            feedback: {
                success: {
                    accountActivate: "Акаунт успішно активовано.",
                },
                errors: {
                    notValid: "Посилання недійсне!",
                    expired: "Термін дії посилання минув",
                },
            },
        },
        forgotPassword: {
            changePassword: {
                name: "Зміна пароля",
                feedback: {
                    success: {
                        changeSuccess: "Зміну пароля виконано успішно!",
                    },
                    errors: {
                        timeout:
                            "Термін дії посилання для відновлення минув! Пройдіть процедуру надсилання ще раз",
                        notFound:
                            "Посилання недійсне! Пройдіть процедуру надсилання ще раз",
                    },
                },
            },
            name: "Забули пароль?",
            login: "Повернутися до входу",
            feedback: {
                errors: {
                    alreadySent:
                        "Лист із посиланням для відновлення вже надіслано. Час дії посилання: {time}",
                },
                success:
                    "Лист із посиланням для відновлення надіслано. Час дії посилання: {time}",
            },
        },
        profile: {
            name: "Мій акаунт",
            settings: {
                name: "Налаштування",
                groups: {
                    account: "Акаунт",
                    other: "Інше",
                },
                profile: {
                    name: "Профіль",
                },
                password: {
                    name: "Пароль",
                    subtitle: "Потрібне підтвердження по email",
                },
                sessions: {
                    name: "Сесії",
                },
            },
        },
        notFound: {
            name: "404",
        },
    },
    api: {
        ERR_NETWORK: "Немає підключення до мережі. Спробуйте пізніше.",
        FALLBACK_ERR: "Упс! Щось пішло не так, спробуйте пізніше",
        FORBIDDEN: "Недостатньо прав",
        UNAUTHORIZED: "Ви не авторизовані! Увійдіть до акаунту",
        NOT_FOUND: "Помилка 404",
        ABORT_ERROR: "Запит скасовано",
        auth: "Помилка аутентифікації, перезавантажте сторінку або увійдіть заново до акаунту",
    },
    feedback: {
        empty: {
            title: "Тут поки що порожньо",
        },
        error: {
            network: {
                title: "Упс!",
                subtitle: "Немає підключення до мережі.",
                reload: "перезавантажити",
            },
            fallback: {
                title: "Упс!",
                subtitle: "Щось пішло не так",
                reload: "перезавантажити",
            },
            resetToken: {
                title: "Упс!",
                subtitle: "Щось пішло не так",
            },
            activate: {
                title: "Упс!",
                subtitle: "Щось пішло не так",
                reload: "надіслати лист",
            },
            forbidden: {
                title: "Упс!",
                subtitle: "Недостатньо прав",
                reload: "перезавантажити",
            },
            auth: {
                title: "Упс!",
                subtitle: "Не вдалося провести аутентифікацію",
                reload: "Запросити дані знову",
            },
            unauthorized: {
                title: "Упс!",
                subtitle: "ви не авторизовані",
                reload: "Запросити дані знову",
            },
        },
    },
    features: {
        theme: {
            name: "Тема",
        },
        language: {
            name: "Мова",
        },
        logout: {
            name: "Вийти",
            error: "Не вдалося вийти з акаунту! Спробуйте пізніше",
            success: "Ви успішно вийшли з акаунту",
        },
        logoutErr: {
            name: "Скинути сесію",
            error: "Не вдалося скинути сесію! Спробуйте пізніше",
            success: "Ви успішно скинули сесію",
        },
        activate: {
            name: "Надіслати лист",
            error: {
                alreadySend:
                    "Лист із посиланням вже надіслано на пошту. Час дії посилання: {time}",
                alreadyActive: "Користувача вже активовано",
                blocked: "Ваш акаунт заблоковано.",
            },
            success: {
                sendSuccess:
                    "Лист із посиланням надіслано на пошту. Час дії посилання: {time}",
            },
        },
        changePassword: {
            success: "Ви успішно змінили пароль! Авторизуйтесь заново",
            blocked: "Зміну пароля заборонено. Повторіть через: {time}",
            step1: "Введіть паролі",
            step2: "Підтвердіть по email",
            hint: "Код надіслано на {email}. Час дії коду: {time}",
            cancel: "Скасувати",
            changeCooldown:
                "Наступний запит зміни пароля доступний через: {time}",
            resend: {
                name: "Повторно",
                cooldown: "Повторно через: {time}",
                limit: "Вичерпано спроби повторного надсилання коду",
            },
            code: {
                invalid: "Невірний код. Залишилось спроб: {count}",
                blocked:
                    "Невірний код. Зміну пароля заборонено. Повторіть через: {time}",
            },
        },
        avatar: {
            change: "Змінити",
            upload: "Додати",
            delete: "Видалити",
        },
    },

    mail: {
        resetPassword: {
            title: "Відновлення пароля",
            text: "Відновлення пароля",
            button: "Відновити пароль",
            expires: "Час дії посилання: {time}",
        },
        activate: {
            title: "Активація акаунту",
            text: "Активація акаунту",
            button: "Активувати акаунт",
            expires: "Час дії посилання: {time}",
        },
        changePassword: {
            subject: "Зміна пароля",
            title: "Підтвердження зміни пароля",
            description: "Введіть цей код для підтвердження зміни пароля:",
            expires: "Код дійсний: {time}",
            ignore: "Якщо ви не запитували зміну пароля — проігноруйте цей лист.",
        },
        adminInvitation: {
            subject: "Запрошення адміністратора",
            title: "Вас запрошують стати адміністратором",
            description:
                "Натисніть на кнопку нижче, щоб прийняти запрошення та створити обліковий запис:",
            button: "Прийняти запрошення",
            expires: "Посилання дійсне: {time}",
            ignore: "Якщо ви не очікували цього запрошення — проігноруйте цей лист.",
        },
    },
    components: {
        sessionList: {
            currentSession: "Поточна сесія",
            otherSessions: "Інші сесії · {count}",
            thisDevice: "Цей пристрій",
            revokeSession: "Завершити сесію",
            revokeSuccess: "Сесію успішно завершено",
            empty: "Активних сесій не знайдено",
        },
        confirmDialog: {
            title: "Підтвердіть дію",
        },
    },
    common: {
        cancel: "Скасувати",
        update: "Редагувати",
        delete: "Видалити",
        deleteAll: "Видалити всі",
        confirm: "Підтвердити",
        refresh: "Оновити",
        search: "Пошук",
        filters: "Фільтри",
        resetFilters: "Скинути фільтри",
        sortNewest: "Спочатку нові",
        sortOldest: "Спочатку старі",
    },
    uploader: {
        openQueue: "Відкрити чергу завантаження",
        uploading: "Завантаження…",
        cancelAll: "Скасувати всі ({count})",
        queueTitle: "Черга ({count})",
        errorsCount: "{count} помилок",
        clear: "очистити",
        cancel: "Скасувати",
        statusWaiting: "У черзі",
        statusDone: "Готово",
        statusError: "Помилка",
        statusCancelled: "Скасовано",
        summaryUploading: "Завантажується {active} з {total}",
        summaryDone: "Готово · {done}",
        summaryPartial: "{done} з {total} · {errors} помилок",
        summaryProgress: "~{progress}% · залишилось {waiting} у черзі",
        summaryOpenHint: "натисніть, щоб відкрити",
    },
    video: {
        uploader: {
            trigger: "Завантажити відео",
            drawerTitle: "Завантаження відео",
            dropActive: "Відпустіть для завантаження",
            dropIdle: "Перетягніть відео або натисніть",
            multipleFiles: "кілька файлів",
            uploadSuccess: "{name} завантажено",
        },
        control: {
            add: "Вставити",
            delete: "Видалити",
            deleteConfirm: "Видалити відео?",
            deleteSuccess: "Відео видалено",
            deleteAll: "Видалити всі",
            deleteAllConfirm: "Видалити всі відео?",
        },
    },
    image: {
        uploader: {
            trigger: "Завантажити зображення",
            drawerTitle: "Завантаження зображень",
            dropActive: "Відпустіть для завантаження",
            dropIdle: "Перетягніть зображення або натисніть",
            multipleFiles: "кілька файлів",
            uploadSuccess: "{name} завантажено",
        },
        control: {
            add: "Вставити",
            delete: "Видалити",
            deleteConfirm: "Видалити зображення?",
            deleteSuccess: "Зображення видалено",
            deleteAll: "Видалити всі",
            deleteAllConfirm: "Видалити всі зображення?",
        },
    },
};

export type MessageStructure = typeof ua;
