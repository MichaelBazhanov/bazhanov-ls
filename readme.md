# Учебный шаблон проекта Portfolio

> Перед установкой зависимостей и запуском проекта убедитесь, что у вас установлена [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/), а так же
[последняя версия Yarn](https://yarnpkg.com/ru/docs/install)

##  Чтобы развернуть проект необходимо:
```sh
$ git clone git@github.com:loftschool/ls-advanced-portfolio.git
$ cd ls-advanced-portfolio
$ yarn
```

## Скрипты package.json:

| Скрипт | Назначение |
| ------ | ------ |
| dev | Запустит webpack-dev-server с _горячей_ заменой модулей |
| build | Соберет проект для **production** (проект готов к загрузке на сервер) |
| reg | Консольная утилита для регистрации. Использовать перед началом работы над **админ-панелью**. |

#### Чтобы запустить скрипт:
```sh
$ npm run имя_скрипта
```

##### Либо:
```sh
$ yarn имя_скрипта
```

##### доступ к панели администрирования:
```sh
name: Bazhanov082020
password: Bazhanov
token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM3NiwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTkxNDU0NTEsImV4cCI6MTU5OTE2MzQ1MSwibmJmIjoxNTk5MTQ1NDUxLCJqdGkiOiJ5VnIzd2l0a2pKek80UUZJIn0.OVMBkTxtd-q78s2YSU6oO_qwwS7l3SXgMdM-6gGHGVc
```
Создание категории
	data:
	category: "111"
	created_at: "2020-09-01 07:06:05"
	id: 6977
	updated_at: "2020-09-01 07:06:05"
	user_id: 376

