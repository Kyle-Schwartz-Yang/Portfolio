#!/bin/bash

# Warn: Цей файл є виконуючим скриптом. Переконайтеся, що ви розумієте його вміст перед запуском.
# Щоб запустити його, використовуйте команду: bash update.sh

#git checkout main - Начинаем с $currentBranch
cp -R dist /tmp/dist_temp  # Копируем dist во временную папку
#ls /tmp/dist_temp #Посмотреть содержимое 
#git restore . # Может понадобиться если создан gulp/version 
git checkout gh-pages
rm -rf dist  # Удаляем старую папку dist, если она существует
cp -R /tmp/dist_temp dist  # Копируем новую dist
rm -rf /tmp/dist_temp  # Удаляем временную папку


git add dist # Добавляем dist в индекс
git commit -m "Update build files" # Коммитим изменения
git push origin gh-pages # Отправляем изменения на удаленный репозиторий
#git checkout main # Возвращаемся на ветку main






















































