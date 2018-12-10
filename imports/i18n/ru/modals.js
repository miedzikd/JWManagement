const modal = {
  close: 'Закрыть',
  addParticipant: {
    title: 'Добавить участника',
    noUsers: 'Не найдено подходящих участников',
    description: 'Выбери участника, который будет добавлен в смену',
    submit: 'Добавить',
    alreadyRequested: 'Этот возвещатель уже подал заявку на участие.',
    alreadyParticipating: 'Этот возвещатель уже принимает участие в смене.',
    available_users: 'Возможные участники',
    all_users: 'Все участники',
    select: 'Выбрать участника'
  },
  addVessel: {
    title: 'Добавить новый корабль',
    action: 'Добавить корабль'
  },
  addWeek: {
    title: 'Создать новую неделю',
    noTemplate: 'Пожалуйста, сначала создай шаблон недели',
    defineTemplate: 'Создать шаблон',
    action: 'Создать неделю',
    text: {
      top: 'Выбери неделю, к которой хочешь применить шаблон:',
      bottom: 'Выбери шаблон недели:'
    }
  },
  cancelTeam: {
    title: 'Отменить группу',
    text: 'Объясните, почему эта группа должна была быть отменена. Каждый из участников группы получит этот текст в сообщении об отказе.',
    action: 'Отменить группу'
  },
  copyShift: {
    title: 'Копировать смену',
    text: 'Выбери дни, в которые ты хочешь копировать смену.',
    action: 'Cкопировать смену'
  },
  editShift: {
    title: 'Изменить данные смены',
    mainData: 'Общие данные',
    tag: 'Тег',
    team: 'Группа',
    teams: 'Группа это смены',
    helpText: {
      tag: 'Выбери Тег, к которому ты хочешь добавить смену. Все участники с разрешением на этот Тег могут видеть эту смену.',
      scheduling: 'При настройке "Автоматически", заявления возвещателей будут подтверждены автоматически как только наберётся минимальное число участников и как минимум один зам. или руководитель смены'
    },
    addTeam: 'Создать новую группу',
    teamMin: 'Мин. число участников:',
    teamMax: 'Макс. число участников:',
    teamStart: 'Начало:',
    teamEnd: 'Конец:',
    teamPlace: 'Место:',
    removeTeam: 'Удалить эту группу',
    noMeeting: 'Нет места встречи',
    action: 'Действие:',
    delete: 'Удалить',
    switch: 'Распределить смену',
    copyShift: 'Копировать смену'
  },
  editTeamPicture: {
    title: 'Изменить изображение/карту группы',
    currentPicture: 'Т"екущее изображение/картa:"',
    hints: 'Возможно что у возвещателей это изображение будет показанно крупнее.',
    noPictureUploaded: 'Ты еще не загрузил никакого изображения',
    upload: 'Загрузить',
    delete: 'Удалить'
  },
  editMeetingPicture: {
    title: 'Изменить изображение/карту ВПС',
    currentPicture: 'Текущее изображение/картa:',
    hints: 'Возможно что у возвещателей это изображение будет показанно крупнее.',
    noPictureUploaded: 'Ты еще не загрузил никакого изображения',
    upload: 'Загрузить',
    delete: 'Удалить'
  },
  editVessel: {
    title: 'Изменение данных судна/корабля',
    action: 'Сохранить изменения'
  },
  inviteUser: {
    title: 'Пригласить новых участников',
    key: '<span class="text-warning">Имя оранжевым цветом</span> означает, что участник уже был приглашен.',
    selectAll: 'Выбрать всех',
    noUsers: 'Новых участников не найдено',
    invite: 'Пригласить'
  },
  position: {
    title: 'Выделение позиции левой кнопкой мыши'
  },
  shift: {
    collapseTeam: 'Скрыть информацию о группе и месте встречи/ВПС',
    expandTeam: 'Показать информацию о группе и месте встречи/ВПС',
    noParticipants: 'Нет участников',
    requestTeam: 'Записаться',
    requestTeamAgain: 'Ещё раз записаться',
    requests: 'Заявления',
    cancelRequest: 'Отозвать заявку',
    cancelParticipation: 'Отменить участие',
    addParticipant: 'Добавить участника',
    unknownAge: 'Неизвестный возраст',
    closedTeam: 'Эта группа уже закрыта. Ты не можете в неё записаться.',
    maximumReached: 'Максимальное ограничение для группы уже достигнуто',
    noPermission: 'У тебя нет разрешения вносить других пользователей',
    noTeamleader: 'Этому участнику ещё не разрешили быть руководителем группы',
    alreadyTeamleader: 'Этот участник уже назначен руководителем группы',
    openTeam: 'Открыть группу',
    closeTeam: 'Закрыть группу',
    switch: 'Изменить смену',
    existingTeamleaders: 'Руководитель группы назначен',
    noExistingTeamleader: 'Нужен руководитель группы'
  },
  shiftReport: {
    title: 'Отчёт',
    teamleader: 'Руководитель группы',
    substituteTeamleader: 'Зам-Руководитель группы',
    publications: 'Публикации',
    occurrences: 'Дополнительный отчёт',
    store: 'Депо/Склад/Стенды',
    experiences: 'Случаи',
    present: 'Присутствует',
    sick: 'Болеет',
    missing: 'Отсутствует без предупреждения',
    name: 'Название',
    language: 'Язык',
    count: 'Количество',
    action: 'Удалить',
    noPublications: 'Не внесенно никаких публикаций',
    select_publication: 'Выбор публикации',
    selectPublicationFirst: 'Сначала выбери публикацию',
    addItem: 'Добавить эту публикацию',
    removeItem: 'Удалить эту публикацию',
    texts: 'Зачитанные места Писания',
    speaks: 'Разговоры',
    videos: 'Показы видео',
    website: 'Показы сайта jw.org',
    returnVisits: 'Повторное посещение/разговор',
    bibleStudies: 'Предложили/Начали изучение Библии',
    time: 'Время служения',
    trolleysFilled: 'Стенды были пополнены',
    neatnessLast: 'Состояние депо и стендов',
    bad: 'Плохое',
    normal: 'Нормальное',
    good: 'Хорошее',
    yes: 'Да',
    no: 'Нет',
    expRoute: 'По поводу маршрута',
    expGood: 'Хороший случай',
    expProblems: 'Проблемы / Трудности',
    date: 'Дата',
    toShift: 'К смене',
    pages: {
      publisher: 'Участники',
      items: 'Распространённые Публикации',
      occurrences: 'Что было достигнуто',
      store: 'Депо/Склад',
      experiences: 'Случаи из служения / Примечания',
      prevPage: 'Переход к предыдущей странице',
      nextPage: 'Переход на следующую страницу',
      finish: 'Отправить отчёт'
    }
  },
  route: {
    title: 'Создать/добавить маршрут',
    routeMarkers: 'Разметчик маршрута',
    addRouteMarkers: 'Нажмите на карту, чтобы добавить новые разметки маршрута'
  },
  uploadUserFile: {
    title: 'Загрузить user-файл',
    helpText: 'Порядок данных (* поля обязательны): <br> E-Mail*, *, Фамилия*, Пол(м или ж)*, Телефон, Назначения в служении(Возможны только: \'publisher\', \'auxiliary\', \'regular\', \'special\', \'circuit\', \'bethelite\' oder \'ldc\'), Назначение в собрании(Возможны только: \'publisher\', \'servant\', \'elder\', \'coordinator\', \'secretary\' oder \'serviceOverseer\'), Собрание',
    helpEncoding: 'Чтобы все знаки были правильно отображены, CSV-файл должен быть сохранён в формате UTF-8 !',
    uploadFile: 'Загрузить CSV-Файл',
    new: 'Новые участники',
    existing: 'Участники у которых уже есть аккаунт на JW Management',
    name: 'Имя',
    email: 'E-Mail',
    add: 'Добавить участника'
  },
  mergeAccounts: {
    title: 'Объединить аккаунты',
    description: 'Введите учетные данные твоего аккаунта, на который ты желаешь передать права текущей учетной записи. Твои аккаунты будут обьеденины. Твой новый логин будет тем на который ты переносишь права актуального аккаунта.',
    username: 'Логин',
    password: 'Пароль',
    merge: 'Перенести права и объединить аккаунты'
  }
}

export default modal