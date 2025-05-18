---
layout: post
title:  "My take on implementing authentication with the school card"
date:   2025-05-13 23:00:00 +0800
categories: tech-related
permalink: "/blog/:title"
top-image: "/assets/images/2025-05/teamcollab.png"
image-description: > 
  A group of people sit around an office conference table discussing a manuscript. Credits to National Cancer Institute (US).
image-source: https://commons.wikimedia.org/wiki/File:Staff_meeting_(3).jpg
---

One of my common frustrations was logging in to my school account for everything, ranging from accessing the coursework to selecting courses. This is how the process looks like:
- Enter NUSNet id and password
- Open phone and copy the number on the screen into the authenticator app. 
- The authenticator app requests for a fingerprint verification (my device is fingerprint enabled) before allowing me to proceed.

Sometimes, this happens:

| ![alt text](/assets/images/2025-05/nusauth.png) |
| :-: |
| Especially when I cannot get my phone in time |

Furthermore, based on the [authenticator app documentation](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-authenticator-app), copying the number on the screen is supposed to be for a passwordless login. Certainly the implementation doesn't match the documentation!

There is an alternative method:
- Open phone and open the school app. 
- Now tap a few buttons to scan the QR code on the login page.

This requires that I hold my phone up and point at my screen and pray that the lighting is not too bad for the camera to capture the QR code.

## Considerations to make
Firstly, completely relying on the student card for authentication is extremely foolish. Anyone who is part of the lost-and-found group knows that student cards go missing frequently, and therefore can be taken by someone else. That is the equivalent of losing your notebook that contains your usernames and passwords. Hopefully your handwriting is horrible enough for them to read a 1 as an l. 

| ![lost matric cards](/assets/images/2025-05/lostmatriccards.png) |
| :-: |
| So many lost cards. I made sure to censor the faces and personal information. |

This also means that the student card should not be the sole method for authentication, and other alternatives should be considered.

Next, it would be beneficial to consider that NFC cards are not only readable, but also writable. This means that one can write a refresh token that is exchanged every time the card is used for authentication - This is akin to changing passwords every time you login. However, for the NUS student card, it is impossible as I do not want to risk damaging the card. Imagine not being able to access the facilities and you tell them "I rm -rf the card".

The last thing to consider is that the process, while remaining secure, should be more convenient than the existing one, otherwise there is no point to this.

## The proposal

I therefore would like to propose another way to do 2FA: Using the student card.

It turns out that the NUS student card can also be read by an NFC reader. 

| ![Results](/assets/images/2025-05/nfcNUS.png) |
| :-: |
| Results from using the NFC tools app to read the NUS student card. NUS might want to change its card given that [MiFare Classic has been cracked since 2008](https://www.computerworld.com/article/1565026/how-they-hacked-it-the-mifare-rfid-crack-explained.html). How I know? I tried cloning my UWaterloo card on my phone but couldn't do it as it was MiFare DESFire. |

While I can't get all the data from the card, I can at least use the serial number and hope that it is unique for every student. 

