![meronsoda](melon.png)

melonsoda is a unblocked games hub with unblockers, games, etc.

<br>

we have a small set of games, but i am planning to add more in the future

# singlefile
melonsoda has a variety of single file versions of the website in the `offline/` folder

here’s a single table with all files in the folder:


| file                             | description                                                              | pros                                                                                     | cons                                                                                            | download                                                                                                             |
| -------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| index.html                       | bundled version of the website (static)                                  | works offline<br>fast load (no external requests)<br>simple deployment                   | does not update automatically<br>requires manual redownload for changes                         | [index.html](https://raw.githubusercontent.com/linuxfandudeguy/melonsoda/refs/heads/main/offline/index.html)                                |
| selfupdating.html                | dynamically updates using axios                       | always fetches latest version<br>no external cdn dependency                              | large file size (unminified axios)<br>needs internet connection                                      | [selfupdating.html](https://raw.githubusercontent.com/linuxfandudeguy/melonsoda/refs/heads/main/offline/selfupdating.html)                     |
| selfupdating (axios on cdn).html | self-updating version using multiple cdn fallbacks for axios             | smaller file size<br>cdn redundancy (tries multiple sources)<br>faster load if cdn works | depends on external cdns<br>some cdns may fail<br>requires internet connection                  |  [selfupdating (axios on cdn).html](https://raw.githubusercontent.com/linuxfandudeguy/melonsoda/refs/heads/main/offline/selfupdating%20(axios%20on%20cdn).html)          |
| selfupdating-protected.html      | self-updating version with password protection (**password: homeworksucks**) | restricts access from admins/teachers<br>still updates dynamically                    | uses unminified axios (large size)<br>viewer-cli does not work<br> | [selfupdating-protected.html](https://raw.githubusercontent.com/linuxfandudeguy/melonsoda/refs/heads/main/offline/selfupdating-protected.html) |

