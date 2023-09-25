#!/bin/bash

count=0
name='general'

for file in *.jpg 
do 
	((count++))
	`convert $file -resize 1024 -quality 50 $file`
	`mv $file $name$count.jpg`
done

for file in *.jpeg 
do 
	((count++))
	`convert $file -resize 1024 -quality 50 $file`
	`mv $file $name$count.jpeg`
done

for file in *.png
do 
	((count++))
	`convert $file -resize 1024 -quality 50 $file`
	`mv $file $name$count.png`
done
