var langsList = ["en", "kr", "fr"];
var langs = {
    "fr": {
        "name": "Français",
        "buttons": {
            "downloadClip": "Télécharger",
            "addQueue": "Ajouter à la file d'attente",
            "removeQueue": "Retirer de la file d'attente",
            "manageQueue": "Gérer la file d'attente",
            "addAllQueue": "Ajouter tous les clips à la file d'attente",
            "removeAllQueue": "Retirer tous les clips de la file d'attente"
        },
        "options": {
            "name": "Options",
            "langue": "Langue",
            "author": " ",
            "format": {
                "description": "Choix des formats",
                "file": {
                    "description": "Format (Nom du fichier) du Clip: ",
                    "balise": "Balises disponibles:",
                    "nbInfos": "{NOMBRE}",
                    "nbInfosItalic": "Augmente de 1 à chaque téléchargement de clip, réinitialise lorsque le navigateur est relancé"
                },
                "date": {
                    "description": "Balise {DATE}: ",
                    "listeFormat": "Liste de mise en forme disponible pour la balise DATE"
                }
            },
            "boutons": {
                "save": "Sauvegarder",
                "change": "Changelog",
                "queue": "File d'attente"
            },
            "notif": {
                "error_caract": "Erreur ! Le(s) format(s) présente(nt) des caractères non autorisés",
                "error_size": "Erreur ! La taille de l'image et du titre doit être un nombre supérieur ou égal à 0",
                "save_param": "Paramètres sauvegardés !"
            },
            "queue": {
                "description": "Configuration de la page de file d'attente",
                "tips": "Astuce: désactivez dans les paramètres de votre navigateur la popup de téléchargement de fichiers",
                "previewType": {
                    "description": "Type des vignettes",
                    "picture": "Image",
                    "video": "Vidéo"
                },
                "removeDownloadClip": {
                    "description": "Retirer les clips téléchargés de la file d'attente",
                    "disable": "Désactivé",
                    "enable": "Activé"
                },
                "previewScale": {
                    "description": "Taille des vignettes des clips de la file d'attente"
                }
            }
        },
        "queue": {
            "import": "Importer",
            "export": "Exporter",
            "no_clip": "Votre file d'attente de clips est vide",
            "download_all": "Télécharger les clips de la file",
            "remove_all": "Vider la file",
            "back": "Retour",
            "notif": {
                "import_err": "Erreur ! Fichier invalide",
                "import_ok": "Importation effectuée"
            }
        },
        "formatFile": [
            "{CLIPEUR}",
            "{DATE}",
            "{JEU}",
            "{NOMBRE}",
            "{SLUG}",
            "{STREAMEUR}",
            "{TITRE}",
            "{VUES}"
        ]
    },
    "en": {
        "name": "English",
        "buttons": {
            "downloadClip": "Download",
            "addQueue": "Add to the queue",
            "removeQueue": "Remove from the queue",
            "manageQueue": "Manage the queue",
            "addAllQueue": "Add all clips to the queue",
            "removeAllQueue": "Remove all clips from the queue"
        },
        "options": {
            "name": "Settings",
            "langue": "Language",
            "author": " ",
            "format": {
                "description": "Choice of formats",
                "file": {
                    "description": "Format (File name) of the Clip: ",
                    "balise": "Available tags:",
                    "nbInfos": "{NUMBER}",
                    "nbInfosItalic": "Increases by 1 each time a clip is downloaded, resets when the browser is restarted"
                },
                "date": {
                    "description": "{DATE} tag: ",
                    "listeFormat": "Formatting list available for the DATE Tag"
                }
            },
            "boutons": {
                "save": "Save",
                "change": "Changelog",
                "queue": "Queue"
            },
            "notif": {
                "error_caract": "Error! The format(s) has/have unauthorized characters",
                "error_size": "Error! The size of the image and title must be a number greater than or equal to 0",
                "save_param": "Saved settings!"
            },
            "queue": {
                "description": "Configuring the queue page",
                "tips": "Tip: disable the file download popup in your browser settings",
                "previewType": {
                    "description": "Type of thumbnails",
                    "picture": "Picture",
                    "video": "Video"
                },
                "removeDownloadClip": {
                    "description": "Remove downloaded clips from the queue",
                    "disable": "Desactivate",
                    "enable": "Activate"
                },
                "previewScale": {
                    "description": "Size of the thumbnails of the clips in the queue"
                }
            }
        },
        "queue": {
            "import": "Import",
            "export": "Export",
            "no_clip": "Your clip queue is empty",
            "download_all": "Download all clips from the queue",
            "remove_all": "Empty the queue",
            "back": "Back",
            "notif": {
                "import_err": "Error ! Invalid file",
                "import_ok": "Import done"
            }
        },
        "formatFile": [
            "{CLIPPER}",
            "{DATE}",
            "{GAME}",
            "{NUMBER}",
            "{SLUG}",
            "{STREAMER}",
            "{TITLE}",
            "{VIEWS}"
        ]
    },
    "kr": {
        "name": "한국어",
        "buttons": {
            "downloadClip": "다운로드",
            "addQueue": "대기열에 추가",
            "removeQueue": "대기열에서 삭제",
            "manageQueue": "대기열 관리",
            "addAllQueue": "모든 클립을 대기열에 추가",
            "removeAllQueue": "대기열에서 모든 클립 제거"
        },
        "options": {
            "name": "설정",
            "langue": "언어",
            "author": "번역: Dustwo",
            "format": {
                "description": "여러 규칙을 선택하세요.",
                "file": {
                    "description": "형식(파일명) 클립의: ",
                    "balise": "가능한 태그들:",
                    "nbInfos": "{NUMBER}",
                    "nbInfosItalic": "는 각 클립을 1번 다운로드 할 때마다 1씩 증가하는 자동 증가 번호 입니다. 브라우저를 재시작 하면 초기화 됩니다."
                },
                "date": {
                    "description": "{DATE} 태그: ",
                    "listeFormat": "DATE 태그에서 가능한 규칙 목록"
                }
            },
            "boutons": {
                "save": "저장",
                "change": "변경사항",
                "queue": "대기열"
            },
            "notif": {
                "error_caract": "오류! 형식에 권한이없는 문자가 있습니다.",
                "error_size": "오류! 이미지 및 제목의 크기는 0보다 크거나 같은 숫자 여야합니다.",
                "save_param": "설정 저장!"
            },
            "queue": {
                "description": "대기열 페이지 설정",
                "tips": "팁: 브라우저 설정에서 파일 다운로드 팝업을 비활성화 하십시오.",
                "previewType": {
                    "description": "섬네일 종류",
                    "picture": "이미지",
                    "video": "비디오"
                },
                "removeDownloadClip": {
                    "description": "대기열에서 다운로드 끝난 클립들 삭제",
                    "disable": "비활성화",
                    "enable": "활성화"
                },
                "previewScale": {
                    "description": "대기열에 있는 클립의 섬네일 크기"
                }
            }
        },
        "queue": {
            "import": "가져오기",
            "export": "내보내기",
            "no_clip": "클립 대기열이 비어있습니다.",
            "download_all": "대기열의 모든 클립 다운로드",
            "remove_all": "대기열 비우기",
            "back": "뒤로",
            "notif": {
                "import_err": "오류! 유효하지 않은 파일",
                "import_ok": "가져오기 완료"
            }
        }
    }
};

function getLang(lang, id) {
    let list = id.split('.');
    let json = langs[lang];

    for (let i = 0; i < list.length + 1; i++) {
        if (!json)
            return getLang("en", id);

        if (i != list.length)
            json = json[list[i]];
    }

    return json;
}