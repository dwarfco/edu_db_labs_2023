# Тестування працездатності системи

## Взаємодія з RESTful сервером запитами HTTP

*Вхідні дані згенеровані mySQL скриптом*
![Таблиця дій](./actions_get.PNG)
![Таблиця користувачів](./users_get.PNG)
![Таблиця файлів](./datafiles_get.PNG)
![Таблиця ролей](./roles_get.PNG)

*Відсилання запитів HTTP на INSERT до таблиць*
![Додавання користувача](./users_post.PNG)
![Додавання файлу даних](./datafile_post.PNG)

*Результат відсилання запитів HTTP до INSERT до таблиць*
![Доданий користувач](./users_get_new.PNG)
![Доданий файл даних](./datafiles_get_after_post.PNG)

*Відсилання запитів HTTP на DELETE до таблиць*
![Видалення користувача](./users_delete.PNG)
![Видалення файлу даних](./datafiles_delete.PNG)

*Результат відсилання запитів HTTP до DELETE до таблиць*
![Доданий користувач](./user_get_after_delete.PNG)
![Доданий файл даних](./datafiles_get_after_delete.PNG)
