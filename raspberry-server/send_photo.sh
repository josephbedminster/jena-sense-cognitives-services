#!/bin/bash
curl -X GET http://13.69.10.180/photoSend
photo_path=/home/pi/Documents/SDC-WIND/photo.jpg
raspistill -n -w 1200 -h 900 -t 1 -o $photo_path
#SSH way :
#sshpass -p "Ggz8#e97hdp0gz" scp $photo_path jena@52.166.147.209:/var/www/html/uploads/photo.jpg && echo "File sent" + $(date)
#AZURE blob upload way :
python upload_photo.py