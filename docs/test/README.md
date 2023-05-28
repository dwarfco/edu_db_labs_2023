# Тестування працездатності системи

## Взаємодія з RESTful сервером запитами HTTP


### *Вхідні дані згенеровані mySQL скриптом*

![Таблиця дій](./actions_get.png)
![Таблиця користувачів](./users_get.png)
![Таблиця файлів](./datafiles_get.png)
![Таблиця ролей](./roles_get.png)

### *Відсилання запитів HTTP на INSERT до таблиць*

![Додавання користувача](./users_post.png)
![Додавання файлу даних](./datafile_post.png)

### *Результат відсилання запитів HTTP до INSERT до таблиць*

![Доданий користувач](./users_get_new.png)
![Доданий файл даних](./datafiles_get_after_post.png)

### *Відсилання запитів HTTP на DELETE до таблиць*

![Видалення користувача](./user_delete.png)
![Видалення файлу даних](./datafiles_delete.png)

### *Результат відсилання запитів HTTP до DELETE до таблиць*

![Доданий користувач](./user_get_delete.png)
![Доданий файл даних](./datafiles_get_after_delete.png)
