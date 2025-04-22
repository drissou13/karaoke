// Liste complète des karaokés avec leurs titres, artistes et URLs vidéo
const karaokeData = [
  { 
    title: "je suis un homme", 
    artist: "zazie", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/tB-zasOL29Y?si=ySnsApoUzbh7C9e4?autoplay=1" 
  },
  { 
    title: "Sous le vent", 
    artist: "Garou & Celine dion", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/6p0-U6InJK8?si=srxcrjOPgwEdSRAl" 
  },
  { 
      title: "Femme liberee ", 
    artist: "cookie dingler ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/itoanREganQ?si=Cg9eBWnWYUlQYy89" 
  },
  { 
    title: "Femme like you ", 
    artist: "k-maro", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/SC3BXHGcJCI?si=uGhJ4qq-XqSSYjdY" 
  },
  { 
    title: "Big Bisou", 
    artist: "Carlos", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/2THR0OeiXmY?si=ywQaeJbYCCRfP4IS" 
  },
   { 
    title: "Bande Organisée ", 
    artist: "Bande organisee", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/pKMAWRo9qGQ?si=ZcTRY9ahtwn5gRR5" 
  },
   { 
    title: "Don't be shy ", 
    artist: "Imany", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/6dR2LSGdiK4?si=hAAeAnKnnqtZOgHe" 
  },
   { 
    title: "Cherche pas à Comprendre", 
    artist: "Fonky Family", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/urQmu_JQWEI?si=D8OCoqkKjhMA1VBO" 
  },
   { 
    title: "petit frere", 
    artist: "Iam", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/-anxUF756qI?si=hNwFaYCFivi_83nM"  
  }, { 
    title: "Awa", 
    artist: "Lacrim", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/gkpoCH4CTHk?si=QGD39nh_ys6cT_Ki" 
  }, { 
    title: "est-ce que tu m aime", 
    artist: "gims", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/K1iANopVspc?si=7kIY02vzYtvqql3C" 
  }, { 
    title: "spider", 
    artist: "gims", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/G7F049wg8bc?si=Efx2Vcbo5PwyZ_Gh" 
  }, { 
    title: "besoin de rien envie de toi", 
    artist: "peter et sloane", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/y467isK-E-A?si=ObmqKuN0JFr5rpDe" 
  }, { 
    title: "drogasta in tei ", 
    artist: "o-zone", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/rhLnMstOSSg?si=I8DELwC_osU4c2RH" 
  }, { 
    title: "voyage voyage ", 
    artist: "desirless", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/Vqqut8wcKgg?si=TEYQe0JKNJR3RMfW" 
  }, { 
    title: "simca 1000", 
    artist: "les chevalier du fiel", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/IbA_XuGdqRg?si=FoLbV11PftauS3k6" 
  }, { 
    title: "cette année la ", 
    artist: "claude françois ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/4rYJfBfeY0g?si=KwpA-TC-5_qlOFqC" 
  }, { 
    title: "la zoubida", 
    artist: "lagaf", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/gN5fYrKy_vc?si=XjIRDJqhjAAK668I" 
  }, { 
    title: "bo le lavabo", 
    artist: "lagaf", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/SvNfZjDZbzk?si=g6t-IDHzoRIrPdBP" 
  }, { 
    title: "ah c est dommage ", 
    artist: "big flo & oli ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/F_esa-CozoM?si=xHi3NPXoyU8T8inF" 
  }, { 
    title: "DUO:confession nocturne", 
    artist: "Diam's & Vitaa ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/FVAzztlvWjE?si=JaSbsI2CngrhUn4V" 
  }, { 
    title: "la boulette ", 
    artist: "diam's", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/wGSO-68f3Nk?si=N-Rbujn7sl1JXEY6" 
  }, { 
    title: "basique ", 
    artist: "orelsan ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/hcVsbsDJGGA?si=i5PLRSQ4rXkp8g-Y" 
  }, { 
    title: "ma quale idea", 
    artist: "pino d'angio", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/OulsY7UaTic?si=hjMdPMHtz1H_-gKF" 
  }, { 
    title: "stach stach", 
    artist: "bratisla boyz", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/FeJugHj8zUE?si=xvwnzJPqLv57ZvdY" 
  }, { 
    title: "staying alive", 
    artist: "bee gees ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/w-bGMo4q-aA?si=9XUcRzAPwOG6aHkv" 
  }, { 
    title: "j'irais ou tu iras ", 
    artist: "celine dion ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/UkwYU-nHKvQ?si=3mu5NoIPLqlVysRZ" 
  }, { 
    title: "40%", 
    artist: "aya nakamura", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/1tmrAuhTXkI?si=0xO5GLvqKz_eqoBt" 
  }, { 
    title: "pookie ", 
    artist: "aya nakamura", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/kIdGdwE-qrM?si=xdGVQhQtf5ph-dpu" 
  }, { 
    title: "comme un dream ", 
    artist: "guirri mafia ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/XAfSKNC2Ro8?si=mZMjM0tcjA2TpbOD" 
  }, { 
    title: "someone like you ", 
    artist: "adele ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/rMSQwIp4Jg8?si=lQwP33wp013TkFTh" 
  }, { 
    title: "les sardines ", 
    artist: "patrick sebastien ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/AYApbE7Umys?si=fCTeboVB97GVcVtf" 
  }, { 
    title: "je danse le mia ", 
    artist: "iam", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/7BQemwGEvjo?si=LsZ-9dBpQVl7U1QS" 
  }, { 
    title: "a la queuleuleue", 
    artist: "bezu", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/DHQVRp6_PPY?si=7kPZXqTQygtvGG7w" 
  }, { 
    title: "Barbie girl", 
    artist: "aqua", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/ozn8o_U2sE4?si=u8zCSGV63blwwVX4" 
  }, { 
    title: "wa zebi", 
    artist: "capuccino", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/jR-HIPgG-9s?si=QezGpZD1tOsrSkrQ" 
  }, { 
    title: "espresso", 
    artist: "sabrina carpenter", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/2I9eC2MRhto?si=HLgDYFWXKVRMQxTA" 
  }, { 
    title: "heres comes stepper ", 
    artist: "ini kamoze", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/_nT-MnyVxXE?si=7jJtUOr3Gk4Za2tl" 
  }, { 
    title: "a la bien ", 
    artist: "soprano", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/BstiVz0aZxM?si=XdtrulEm48nTVxl3" 
  }, { 
    title: "araba", 
    artist: "mustafa sandal ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/7uzT-7ubJ3M?si=A_KJUxg12DAfNJG0" 
  }, { 
    title: "superstar", 
    artist: "jamelia", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/s-QD_xbXmHM?si=_tHxcDLwD2EBq1mB" 
  }, { 
    title: "La seine ", 
    artist: "vanessa paradis & M", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/ky2U4r-XFvw?si=tIx91thcmIZQLhnR" 
  }, { 
    title: "work it ", 
    artist: "missy elliot", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/mDL5f-3XOV0?si=NR_VZh-9iWZrsHP1" 
  }, { 
    title: "get busy ", 
    artist: "sean paul ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/758yJcRcNPk?si=PnTnvk0eZNrLYwsY" 
  }, { 
    title: "move ya body ", 
    artist: "nina sky ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/YbfvK0MPgC4?si=T2BR1wrEQchb4u49" 
  }, { 
    title: "murder she wrote ", 
    artist: "CHAKA DEMUS AND PLIERS", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/yZ2__k8Ts_I?si=W4eOBdiDT4CZ4tUO" 
  }, { 
    title: "ya du soleil et des nanas", 
    artist: "les bronzés", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/D_en2dCBOjA?si=hqnv58doh4jMjVhY" 
  }, { 
    title: "etoiles des neiges ", 
    artist: "line renaud ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/3WxV9BL6ihw?si=faTEaf_5tfPz_Q2R" 
  }, { 
    title: "bouge de la ", 
    artist: "mc solaar", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/-TgqHx1uAVM?si=AVttt6m3W5NHFSKe" 
  }, { 
    title: "la surprise ", 
    artist: "ivan saf", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/FubhSdIe0rY?si=ByJcpI8_9btRt4xn" 
  }, { 
    title: "cane canebiere", 
    artist: "vincent scotto (pas le lycee)", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/ZVrSkZbA2dQ?si=w47By3Q_-YnefW9p" 
  }, { 
    title: "Belsunce breakdown", 
    artist: "bouga", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/ApE3vpCM28M?si=aYSbY02wZmQtj7s_" 
  }, { 
    title: "ya rayah", 
    artist: "rachid taha", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/PLwVQ92K0no?si=7EZgal6KKhYYOsEq" 
  }, { 
    title: "celibataire ", 
    artist: "cheba maria ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/E_fzGQFNi0k?si=zslCKbggxHb2vKeC" 
  }, { 
    title: "dallas", 
    artist: "tv", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/BTLYlashfDM?si=-qaLvrG-LZVPAt_9" 
  }, { 
    title: "starsky & hutch", 
    artist: "tv", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/HhswTjwntNg?si=f3_oUPBCxOswfb2A" 
  }, { 
    title: "tomber la chemise", 
    artist: "zebda", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/Aeef3BmfrCI?si=TkTwrKP-Dsr36ucI" 
  }, { 
    title: "les ptit papiers", 
    artist: "regine", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/k-1k6Z5amnk?si=s_UirqOiArFRcKl2" 
  }, { 
    title: "fais pas ci fais pas sa", 
    artist: "jacques dutronc", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/W0esY79C2mA?si=DdnGTiakpmF_aOhc" 
  }, { 
    title: "christine", 
    artist: "christine&the queen", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/9_e5B723QwY?si=VAgf7zpR1dYVWk4S" 
  }, { 
    title: "imagine", 
    artist: "carbonne", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/hAl6-3f5aNc?si=YLX0ZyN9njqw5ijO" 
  }, { 
    title: "dans ma paranoïa", 
    artist: "jul", 
    source: "YouTube", 
    videoUrl: "hhttps://www.youtube.com/embed/t3IZu_mXqgk?si=Z8seYVxa1ntpxOk" 
  }, { 
    title: "born to be alive", 
    artist: "patrick hernandez", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/c-frIAhOUSI?si=VJ3qD2uZup-XSlsX" 
  }, { 
    title: "belle demoiselle ", 
    artist: "christophe maé", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/L9204CR43qI?si=DYke2tRIW4UVPtdd" 
  }, { 
    title: "recommence moi", 
    artist: "santa", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/-iFmRBauPmE?si=yLx9W2xZ2IRCkBr7" 
  }, { 
    title: "la memoire et la mer", 
    artist: "léo férré", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/kQr48SlmQuo?si=KYq0aY_OSoVWaQ1-" 
  }, { 
    title: "demain c'est loin", 
    artist: "iam", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/Oysld7rpEU4?si=MtFKajHdkscrMedM" 
  }, { 
    title: "nés sous la meme etoile", 
    artist: "iam", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/DeNce5eYB_0?si=On8EYG5zDhE8LPkV" 
  }, { 
    title: "Magic in the Air", 
    artist: "Magic System & Ahmed Chawki ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/nAmwDaRaz9M?si=w93e8aKwxObsnLHP" 
  }, { 
    title: "dance monkey", 
    artist: "tones & i", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/Gdd_ktJlq64?si=T7dJBiik4tHfbnpJ" 
  }, { 
    title: "wati by night", 
    artist: "sexion d assaut", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/RqpVVWmFxJU?si=uPu8gjUiA4dwqc41" 
  }, { 
    title: "Freed from desire", 
    artist: "gala", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/SrxJO6FgOtg?si=GwDx17n6lkaqrUif" 
  }, { 
    title: "mes emmerdes", 
    artist: "charles aznavour", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/RjUOpDUkTrU?si=0U0l6v4vm-8Y3Ra3" 
  }, { 
    title: "You're the One That I Want", 
    artist: "grease", 
    source: "Youtube", 
    videoUrl: "https://www.youtube.com/embed/X0Eazz_T_1s?si=qv86tZ_Je5UBi1ar" 
  }, { 
    title: "under pressure", 
    artist: "Queen & David Bowie ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/7FO1aGmV7tU?si=T8NaD1tTT5pDeI5Q" 
  }, { 
    title: "paroles paroles", 
    artist: "Dalida & Alain Delon", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/bZQhSfkE6G8?si=znOSdIIwPLRv8utN" 
  }, { 
    title: "nous on sait ", 
    artist: "pierre garnier", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/R7NbkgToO8M?si=FzPEUfRoA75Vu2Zq" 
  }, { 
    title: "la vie ne m'apprends rien ", 
    artist: "daniel balavoine", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/KC4grfH-Deo?si=Ia7rzCu8TFNgSGpr" 
  }, { 
    title: "deconnecter", 
    artist: "DJ Hamida & Kayna Samet, Rim'K & Lartiste", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/_oNic-DiEDM?si=q36RwzCOmwuGDanp" 
  }, { 
    title: "pop corn salé", 
    artist: "santa", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/ytdMOCYooBE?si=64He5hnpyvMb-2Xa" 
  }, { 
    title: "poupee de cire poupee de son", 
    artist: "france gall", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/6LVH7TWAB_U?si=tJbXe4IH4vL11mo_" 
  }, { 
    title: "Bohemian Rhapsody", 
    artist: "Queen", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/xyF04rAhHaQ?si=m3hfI3dPrFOQGFEv" 
  }, { 
    title: "lambada", 
    artist: "kaoma ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/nhfuYWFsdec?si=BQabtyVSvEYlVRGs" 
  }, { 
    title: "antisocial", 
    artist: "trust", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/OCqDhn6epr0?si=j25mA9MuO7pLWBux" 
  }, { 
    title: "another one bites the dust", 
    artist: "Queen", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/xyF04rAhHaQ?si=m3hfI3dPrFOQGFEv" 
  }, { 
    title: "Bamboleo", 
    artist: "the gipsy king", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/STkjb5nMwek?si=44x5Kw8XFeAs7BFw" 
  }, { 
    title: "dis moi ", 
    artist: "bb brunes", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/VtSmtUUnni0?si=5nwAYf4vly5VLX82" 
  }, { 
    title: "Comme d'habitude", 
    artist: "claude françois", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/eQ1yQnXUICA?si=yaLtOkPYMLIn9rSK" 
  }, { 
    title: "je t'aime", 
    artist: "lara fabian", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/N4tVb-hvojA?si=stLIhBM6JoQ9oAZt" 
  }, { 
    title: "coup de vieux", 
    artist: "Bigflo & Oli & Julien Doré", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/KbqAIUujoOs?si=O-KU4GrQxrkuYnaP" 
  }, { 
    title: "richard ", 
    artist: "leo ferré", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/hnj-pNHzFlM?si=RDvG1T-gwSm-ol5q" 
  }, { 
    title: "Ça fait rire les oiseaux", 
    artist: "la compagnie créole", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/pbops2dY8RE?si=PMzOIMXKk5NJ_Q6f" 
  }, { 
    title: "au summum", 
    artist: "113", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/7JyWBR-RUsE?si=SJJu2iGe4EkUam4L" 
  }, { 
    title: "generique plus belle la vie ", 
    artist: "eva", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/dGYwy4Zskc0?si=RrdN5z5_xrc3UhRM" 
  }, { 
    title: "hypnotize", 
    artist: "the notorious big ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/Ok1oa3ak4rc?si=x5JjLoXMPp9-KNSg" 
  },
   { 
    title: "les lac du conemarra", 
    artist: "michel sardou ", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/bpEmjxobvbY?si=IH9O-foRqmsQExXD" 
  },
   { 
    title: "Allumer le feu", 
    artist: "johnny hallyday", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/My0XsvgLSb8?si=MUQBg5vGPA11CUdf" 
  },
    { 
    title: "l'encre de tes yeux ", 
    artist: "francis cabrel", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/cK7s0LdpFfI?si=Zo7quXYwACnUROEy" 
  },
  { 
    title: "dj", 
    artist: "diam's", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/l2TY97II2TM?si=TLE0R06kjP5zVLIE" 
  },{ 
    title: "tout doucement ", 
    artist: "bibie", 
    source: "YouTube", 
    videoUrl: "https://www.youtube.com/embed/l2TY97II2TM?si=TLE0R06kjP5zVLIE" 
     }, { 
    title: "Amstrong", 
    artist: "Claude Nougaro", 
    source:"YouTube", 
    videoUrl: "https://www.youtube.com/embed/fg5YtmxZGZ4?si=CpezLV1FqKOEia2f" 
  }, { 
    title: "la boheme", 
    artist: "charles aznavour", 
    source:"YouTube", 
    videoUrl: "https://www.youtube.com/embed/5aqvhsUW6B8?si=TtKKmNLCs1-9gP8z"
     }, { 
    title: "Tous les garçons et les filles", 
    artist: "Françoise Hardy", 
    source:"YouTube", 
    videoUrl: "https://www.youtube.com/embed/R74i4AWyAIY?si=YcqhMs0hZPQjZxsi"
      }, { 
    title: "Aline ", 
    artist: "Christophe", 
    source:"YouTube", 
    videoUrl: "https://www.youtube.com/embed/EJa0OSwuvEA?si=kBvsJghbRTgZ0GhV"
       }, { 
    title: " Last Christmas ", 
    artist: "wham", 
    source:"YouTube", 
    videoUrl: "https://www.youtube.com/embed/02CVRyygf6Q?si=tPE2j5VKD7P1VaBJ"
  },
  
  // Ajoutez d'autres titres avec leurs vidéos ici
];

// Références HTML
const karaokeList = document.getElementById('karaokeList');
const searchBar = document.getElementById('searchBar');
const videoPlayerContainer = document.getElementById('videoPlayerContainer');
const videoPlayer = document.getElementById('videoPlayer');
const closePlayer = document.getElementById('closePlayer');

// Fonction pour afficher les karaokés
function displayKaraokes(data) {
  karaokeList.innerHTML = '';
  data.forEach(karaoke => {
    const item = document.createElement('div');
    item.className = 'karaoke-item';

    // Affiche le titre, l'artiste et la source
    item.innerHTML = `
      <strong>${karaoke.title}</strong><br>
      <small>Artiste : ${karaoke.artist}</small><br>
      <small>Source : ${karaoke.source}</small>
    `;

    // Action sur clic : ouvrir le lecteur vidéo
    item.onclick = () => {
      openVideoPlayer(karaoke.videoUrl);
    };

    karaokeList.appendChild(item);
  });
}

// Fonction pour ouvrir le lecteur vidéo
function openVideoPlayer(videoUrl) {
  videoPlayer.src = videoUrl; // Charger la vidéo
  videoPlayerContainer.classList.remove('hidden'); // Afficher le lecteur
}

// Fermer le lecteur vidéo
closePlayer.addEventListener('click', () => {
  videoPlayer.src = ''; // Arrêter la vidéo
  videoPlayerContainer.classList.add('hidden'); // Cacher le lecteur
});

// Filtrer les karaokés en fonction de la recherche
searchBar.addEventListener('input', e => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredKaraokes = karaokeData.filter(karaoke =>
    karaoke.title.toLowerCase().includes(searchTerm) ||
    karaoke.artist.toLowerCase().includes(searchTerm) ||
    karaoke.source.toLowerCase().includes(searchTerm)
  );
  displayKaraokes(filteredKaraokes);
});

// Initialisation : affiche tous les karaokés au départ
displayKaraokes(karaokeData);
document.addEventListener("DOMContentLoaded", () => {
    // Easter Egg 1: Thème Noël
    const christmasButton = document.createElement("button");
    christmasButton.textContent = "Activer la magie de Noël 🎄";
    christmasButton.style = `
        padding: 15px 30px;
        font-size: 20px;
        background: #e74c3c;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        position: fixed;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
    `;
    document.body.appendChild(christmasButton);

    const christmasMusic = new Audio("https://www.cjoint.com/doc/24_12/NLjl0sNiOm1_santa-papa-noel-risa-127498.mp3");

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.textContent = "❄";
        snowflake.style.position = "fixed";
        snowflake.style.top = "-50px";
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
        snowflake.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite, sway 2s ease-in-out infinite alternate`;
        snowflake.style.color = "white";
        document.body.appendChild(snowflake);
        setTimeout(() => snowflake.remove(), 5000);
    }

    christmasButton.addEventListener("click", () => {
        setInterval(createSnowflake, 300);
        christmasMusic.play();
        christmasButton.remove();
        document.body.style.background = "linear-gradient(to bottom, #1e1e2f, #4b79a1)";
    });

    // Easter Egg 2: Konami Code
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;

    document.addEventListener("keydown", (e) => {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                alert("Konami Code Activé : 🎮 Super secret débloqué !");
                document.body.style.backgroundColor = "gold";
                konamiIndex = 0; // Reset
            }
        } else {
            konamiIndex = 0; // Reset si une mauvaise touche est pressée
        }
    });

    // Easter Egg 3: Double-clic sur le logo
    const logo = document.createElement("div");
    logo.textContent = "🎅";
    logo.style = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        font-size: 50px;
        cursor: pointer;
    `;
    document.body.appendChild(logo);

    logo.addEventListener("dblclick", () => {
        alert("Vous avez double-cliqué sur le Père Noël !");
        document.body.style.transform = "rotate(180deg)";
        setTimeout(() => (document.body.style.transform = ""), 3000);
    });

    // Easter Egg 5: Clics répétés
    let clickCount = 0;
    document.addEventListener("click", () => {
        clickCount++;
        if (clickCount === 10) {
            alert("10 clics ! Voici un feu d'artifice virtuel 🎆 !");
            document.body.style.background = "black";
            clickCount = 0;
        }
    });

    // Animation CSS pour les flocons de neige
    const style = document.createElement("style");
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(110vh);
            }
        }
        @keyframes sway {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(20px);
            }
        }
    `;
    document.head.appendChild(style);
});
// Référence à l'élément audio de l'easter egg
const music = document.getElementById('christmasMusic');

// Référence au bouton pour activer la musique de l'easter egg
const btn = document.getElementById('easterEggBtn');

// Référence à toutes les miniatures ou boutons vidéo
const videoThumbnails = document.querySelectorAll('.video-thumbnail');

// Activer la musique de Noël
btn.addEventListener('click', () => {
    music.play();
    alert("🎅 La musique de Noël est activée !");
});

// Arrêter la musique lorsqu'une vidéo est sélectionnée
videoThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        if (!music.paused) {
            music.pause();
            music.currentTime = 0; // Réinitialiser la musique
            alert(`🎥 Lecture de ${thumbnail.dataset.videoId}, musique arrêtée.`);
        }
    });
});
// Crée le tableau et l'ajoute au document
const table = document.createElement('table');
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.margin = '0';
document.body.style.backgroundColor = '#222';

const cells = []; // Pour suivre toutes les cellules du tableau

for (let i = 0; i < 3; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 3; j++) {
        const cell = document.createElement('td');
        cell.style.width = '50px';
        cell.style.height = '50px';
        cell.style.border = '1px solid #444';
        cell.style.backgroundColor = '#333';
        cell.style.textAlign = 'center';
        cell.style.transition = 'box-shadow 0.3s, transform 0.3s';
        cell.style.cursor = 'pointer';

        // Ajoute des effets lumineux au survol
        cell.addEventListener('mouseover', () => {
            cell.style.boxShadow = '0 0 10px 2px #0ff, inset 0 0 10px 2px #0ff';
            cell.style.transform = 'scale(1.1)';
        });

        // Enlève les effets lumineux quand la souris quitte la case
        cell.addEventListener('mouseout', () => {
            cell.style.boxShadow = 'none';
            cell.style.transform = 'scale(1)';
        });

        // Ajoute un effet au clic et rend les autres cases noires
        cell.addEventListener('click', () => {
            cells.forEach(c => {
                c.style.boxShadow = 'none';
                c.style.backgroundColor = '#000';
            });
            cell.style.boxShadow = '0 0 15px 5px #ff0, inset 0 0 15px 5px #ff0';
            cell.style.backgroundColor = '#333'; // Garde la couleur normale pour la case active
        });

        cells.push(cell); // Ajoute la cellule à la liste
        row.appendChild(cell);
    }
    table.appendChild(row);
}

// Ajoute le tableau au corps de la page
document.body.appendChild(table);

// Applique les styles au tableau
table.style.borderCollapse = 'collapse';
table.style.margin = 'auto';
