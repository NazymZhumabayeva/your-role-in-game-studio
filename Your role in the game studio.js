var storyContent={inkVersion:20,root:[[{"->":"first"},["done",{"#f":5,"#n":"g-0"}],null],"done",{first:[["^Вы решили поиграть во что-то. Как будете выбирать игру?","\n",["ev",{"^->":"first.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0",flg:18},{s:["^Сюжет обязателен! Буду читать каждый диалог и каждую газетку (даже если не надо)",{"->":"$r",var:!0},null]},],["ev",{"^->":"first.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1",flg:18},{s:["^Без графики никуда… обязательно визуально приятное ",{"->":"$r",var:!0},null]},],["ev",{"^->":"first.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2",flg:18},{s:["^Чем больше я могу делать в игре, тем лучше! Летать, строить, общаться, хочу все!",{"->":"$r",var:!0},null]},],["ev",{"^->":"first.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3",flg:18},{s:["^Посмотрю на оценки и мнение большинства игроков и критиков, меньше шанс ошибиться",{"->":"$r",var:!0},null]},],["ev",{"^->":"first.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4",flg:18},{s:["^Посмотрю летсплей, беспроигрышный вариант",{"->":"$r",var:!0},null]},],{"c-0":["ev",{"^->":"first.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"NARR"},1,"+",{"VAR=":"NARR",re:!0},"/ev",{"->":"second"},{"#f":5},],"c-1":["ev",{"^->":"first.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"ART"},1,"+",{"VAR=":"ART",re:!0},"/ev",{"->":"second"},{"#f":5},],"c-2":["ev",{"^->":"first.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GAME"},1,"+",{"VAR=":"GAME",re:!0},"/ev",{"->":"second"},{"#f":5},],"c-3":["ev",{"^->":"first.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"PROD"},1,"+",{"VAR=":"PROD",re:!0},"/ev",{"->":"second"},{"#f":5},],"c-4":["ev",{"^->":"first.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"DEV"},1,"+",{"VAR=":"DEV",re:!0},"/ev",{"->":"second"},{"#f":5},],},],{"#f":1},],second:[["^Выбрали игру, начали выбирать персонажа. Как тут будете выбирать?","\n",["ev",{"^->":"second.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0",flg:18},{s:["^Все просто. Поглазею на всех внимательно и выберу… красивого!",{"->":"$r",var:!0},null]},],["ev",{"^->":"second.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1",flg:18},{s:["^Залезу в характеристики, буду искать самого сильного ",{"->":"$r",var:!0},null]},],["ev",{"^->":"second.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2",flg:18},{s:["^Прочту описания персонажей, нужен самый прописанный и с хорошей историей",{"->":"$r",var:!0},null]},],["ev",{"^->":"second.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3",flg:18},{s:["^Возьму рандомного: неважно, за кого ты играешь, важно, как",{"->":"$r",var:!0},null]},],["ev",{"^->":"second.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4",flg:18},{s:["^Оценю все параметры (визуал, история, навыки) и выберу… кого захочу :D",{"->":"$r",var:!0},null]},],{"c-0":["ev",{"^->":"second.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"ART"},1,"+",{"VAR=":"ART",re:!0},"/ev",{"->":"third"},{"#f":5},],"c-1":["ev",{"^->":"second.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GAME"},1,"+",{"VAR=":"GAME",re:!0},"/ev",{"->":"third"},{"#f":5},],"c-2":["ev",{"^->":"second.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"NARR"},1,"+",{"VAR=":"NARR",re:!0},"/ev",{"->":"third"},{"#f":5},],"c-3":["ev",{"^->":"second.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"DEV"},1,"+",{"VAR=":"DEV",re:!0},"/ev",{"->":"third"},{"#f":5},],"c-4":["ev",{"^->":"second.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"PROD"},1,"+",{"VAR=":"PROD",re:!0},"/ev",{"->":"third"},{"#f":5},],},],{"#f":1},],third:[["^Определились с игрой и персонажем. С чего начнете свое прохождение?","\n",["ev",{"^->":"third.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0",flg:18},{s:["^Разумеется, сюжет. Я ради этого сюда и зашел",{"->":"$r",var:!0},null]},],["ev",{"^->":"third.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1",flg:18},{s:["^Залезу в каждую норку, в какую можно. Буду изучать мир ",{"->":"$r",var:!0},null]},],["ev",{"^->":"third.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2",flg:18},{s:["^Пообщаюсь с NPC",{"->":"$r",var:!0},null]}],["ev",{"^->":"third.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3",flg:18},{s:["^Буду мирно искать самые красивые места",{"->":"$r",var:!0},null]},],["ev",{"^->":"third.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4",flg:18},{s:["^Пойду искать самого сильного босса… и плевать, если у него уровень 50, а у меня -1",{"->":"$r",var:!0},null]},],{"c-0":["ev",{"^->":"third.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"NARR"},1,"+",{"VAR=":"NARR",re:!0},"/ev",{"->":"fourth"},{"#f":5},],"c-1":["ev",{"^->":"third.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GAME"},1,"+",{"VAR=":"GAME",re:!0},"/ev",{"->":"fourth"},{"#f":5},],"c-2":["ev",{"^->":"third.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"PROD"},1,"+",{"VAR=":"PROD",re:!0},"/ev",{"->":"fourth"},{"#f":5},],"c-3":["ev",{"^->":"third.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"ART"},1,"+",{"VAR=":"ART",re:!0},"/ev",{"->":"fourth"},{"#f":5},],"c-4":["ev",{"^->":"third.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"DEV"},1,"+",{"VAR=":"DEV",re:!0},"/ev",{"->":"fourth"},{"#f":5},],},],{"#f":1},],fifth:[["^Монстр остался позади… вы встретили разных существ. Кого выберете в качестве компаньона?","\n",["ev",{"^->":"fifth.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0",flg:18},{s:["^Пчела",{"->":"$r",var:!0},null]}],["ev",{"^->":"fifth.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1",flg:18},{s:["^Сова",{"->":"$r",var:!0},null]}],["ev",{"^->":"fifth.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2",flg:18},{s:["^Паук",{"->":"$r",var:!0},null]}],["ev",{"^->":"fifth.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3",flg:18},{s:["^Муравей",{"->":"$r",var:!0},null]}],["ev",{"^->":"fifth.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4",flg:18},{s:["^Орел",{"->":"$r",var:!0},null]}],{"c-0":["ev",{"^->":"fifth.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"GAME"},1,"+",{"VAR=":"GAME",re:!0},"/ev","ev",!0,"/ev",{"VAR=":"isG",re:!0},{"->":"final"},{"#f":5},],"c-1":["ev",{"^->":"fifth.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"NARR"},1,"+",{"VAR=":"NARR",re:!0},"/ev","ev",!0,"/ev",{"VAR=":"isN",re:!0},{"->":"final"},{"#f":5},],"c-2":["ev",{"^->":"fifth.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"ART"},1,"+",{"VAR=":"ART",re:!0},"/ev","ev",!0,"/ev",{"VAR=":"isA",re:!0},{"->":"final"},{"#f":5},],"c-3":["ev",{"^->":"fifth.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"DEV"},1,"+",{"VAR=":"DEV",re:!0},"/ev","ev",!0,"/ev",{"VAR=":"isD",re:!0},{"->":"final"},{"#f":5},],"c-4":["ev",{"^->":"fifth.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"PROD"},1,"+",{"VAR=":"PROD",re:!0},"/ev","ev",!0,"/ev",{"VAR=":"isP",re:!0},{"->":"final"},{"#f":5},],},],{"#f":1},],fourth:[["^На вашем пути монстр. Что будете делать?","\n",["ev",{"^->":"fourth.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0",flg:18},{s:["^Сбегу незаметно, как нинздя.. или как получится. Дайте мне мирно походить и посмотреть мир!",{"->":"$r",var:!0},null]},],["ev",{"^->":"fourth.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1",flg:18},{s:["^Драться, нажимая на все кнопки! Скорее всего умру 1045 раз и придется все припасы израсходовать, но буду драться!",{"->":"$r",var:!0},null]},],["ev",{"^->":"fourth.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2",flg:18},{s:["^Если его надо победить для сюжета, придется драться…",{"->":"$r",var:!0},null]},],["ev",{"^->":"fourth.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3",flg:18},{s:["^Постараюсь максимально эффективно свои силы использовать. Если получится победить - отлично, если нет - сбегаю",{"->":"$r",var:!0},null]},],{"c-0":["ev",{"^->":"fourth.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"ART"},1,"+",{"VAR=":"ART",re:!0},"/ev",{"->":"fifth"},{"#f":5},],"c-1":["ev",{"^->":"fourth.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"DEV"},1,"+",{"VAR=":"DEV",re:!0},"/ev",{"->":"fifth"},{"#f":5},],"c-2":["ev",{"^->":"fourth.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"NARR"},1,"+",{"VAR=":"NARR",re:!0},"/ev",{"->":"fifth"},{"#f":5},],"c-3":["ev",{"^->":"fourth.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"PROD"},1,"+",{"VAR=":"PROD",re:!0},"/ev","ev",{"VAR?":"GAME"},1,"+",{"VAR=":"GAME",re:!0},"/ev",{"->":"fifth"},{"#f":5},],},],{"#f":1},],final:[["ev",{"VAR?":"NARR"},{"VAR?":"DEV"},">",{"VAR?":"NARR"},{"VAR?":"ART"},">","&&",{"VAR?":"NARR"},{"VAR?":"PROD"},">","&&",{"VAR?":"NARR"},{"VAR?":"GAME"},">","&&","/ev",{"->":".^.b",c:!0},{b:["\n","^Учитывая, какое вы внимание уделяете сюжету... осознанно или нет, можно сказать, что вы... нарративный дизайнер! И, как удивительно сложилось.. у нас есть <a href=’https://gamelab.kbtu.kz/#programms’>курс Нарративного Дизайна</a>!","\n",{"#":"IMAGE: https://cdn.jsdelivr.net/gh/NazymZhumabayeva/your-role-in-game-studio@tilda/narrative.png"},{"->":"final.7"},null,],},],["ev",{"VAR?":"ART"},{"VAR?":"DEV"},">",{"VAR?":"ART"},{"VAR?":"NARR"},">","&&",{"VAR?":"ART"},{"VAR?":"PROD"},">","&&",{"VAR?":"ART"},{"VAR?":"GAME"},">","&&","/ev",{"->":".^.b",c:!0},{b:["\n","^Красивую графику любят все... но по-настоящему залипают на нее художники! А учитывая, как вы играете, можно сказать, что вы именно он. Вам подойдут <a href='https://gamelab.kbtu.kz/#programms'>курсы по компьютерной графике</a>. И они как раз у нас есть! Почему бы не попробовать курсы Object Modeling, 3D Character design или VFX?","\n",{"#":"IMAGE: https://cdn.jsdelivr.net/gh/NazymZhumabayeva/your-role-in-game-studio@tilda/artist.png"},{"->":"final.7"},null,],},],["ev",{"VAR?":"GAME"},{"VAR?":"ART"},">",{"VAR?":"GAME"},{"VAR?":"NARR"},">","&&",{"VAR?":"GAME"},{"VAR?":"DEV"},">","&&",{"VAR?":"GAME"},{"VAR?":"PROD"},">","&&","/ev",{"->":".^.b",c:!0},{b:["\n","^Такую любовь к механикам, характеристикам, балансу в играх можно встретить только у... гейм дизайнеров! И всему этому можно научиться на <a href = ‘https://gamelab.kbtu.kz/#programms’>курсе Game Design & Development</a>! Ну, а если вы мечтаете превратить в игру любой процесс, не пропустите <a href=’https://gamelab.kbtu.kz/#programms’>наш курс Gamification and game studies</a>!","\n",{"#":"IMAGE: https://cdn.jsdelivr.net/gh/NazymZhumabayeva/your-role-in-game-studio@tilda/gamedesigner.png"},{"->":"final.7"},null,],},],["ev",{"VAR?":"DEV"},{"VAR?":"ART"},">",{"VAR?":"DEV"},{"VAR?":"NARR"},">","&&",{"VAR?":"DEV"},{"VAR?":"ART"},">","&&",{"VAR?":"DEV"},{"VAR?":"PROD"},">","&&","/ev",{"->":".^.b",c:!0},{b:["\n","^Тот, без кого буквально не будет самой игры... разработчик! Именно им вы и являетесь. Можем вам предложить <a href=’https://gamelab.kbtu.kz/#programms’>курсы по движкам Unity и Unreal Engine</a>!","\n",{"#":"IMAGE: https://cdn.jsdelivr.net/gh/NazymZhumabayeva/your-role-in-game-studio@tilda/developer.png"},{"->":"final.7"},null,],},],["ev",{"VAR?":"PROD"},{"VAR?":"DEV"},">",{"VAR?":"PROD"},{"VAR?":"GAME"},">","&&",{"VAR?":"PROD"},{"VAR?":"NARR"},">","&&",{"VAR?":"PROD"},{"VAR?":"ART"},">","&&","/ev",{"->":".^.b",c:!0},{b:["\n","^Такая заинтересованность во всех сферах и желание все анализировать для наилучшего результата... Вы продюсер игры! Из наших курсов вам больше всего подойдет <a href=’’https://gamelab.kbtu.kz/#programms>курс Game Design & Development</a>.","\n",{"#":"IMAGE: https://cdn.jsdelivr.net/gh/NazymZhumabayeva/your-role-in-game-studio@tilda/producer.png"},{"->":"final.7"},null,],},],["ev",{"VAR?":"NARR"},1,"==",{"VAR?":"GAME"},1,"==","&&",{"VAR?":"DEV"},1,"==","&&",{"VAR?":"PROD"},1,"==","&&",{"VAR?":"ART"},1,"==","&&",{"VAR?":"NARR"},2,"==",{"VAR?":"GAME"},2,"==","&&",{"VAR?":"DEV"},2,"==","&&",{"VAR?":"PROD"},2,"==","&&",{"VAR?":"ART"},2,"==","&&","||","/ev",{"->":".^.b",c:!0},{b:["\n","^Вы самый редкий (или нет..) тип людей... Инди разработчик! Вы можете делать всё по чуть-чуть. Можете выбрать себе <a href=’https://gamelab.kbtu.kz/#programms’>курс по душе</a>. Благо, у нас есть из чего выбрать! :)","\n",{"#":"IMAGE: https://cdn.jsdelivr.net/gh/NazymZhumabayeva/your-role-in-game-studio@tilda/unique.png"},{"->":"final.7"},null,],},],["ev",{"VAR?":"NARR"},2,"==",{"VAR?":"GAME"},2,"==","&&",{"VAR?":"NARR"},2,"==",{"VAR?":"DEV"},2,"==","&&","||",{"VAR?":"NARR"},2,"==",{"VAR?":"ART"},2,"==","&&","||",{"VAR?":"NARR"},2,"==",{"VAR?":"PROD"},2,"==","&&","||",{"VAR?":"GAME"},2,"==",{"VAR?":"DEV"},2,"==","&&","||",{"VAR?":"GAME"},2,"==",{"VAR?":"ART"},2,"==","&&","||",{"VAR?":"GAME"},2,"==",{"VAR?":"PROD"},2,"==","&&","||",{"VAR?":"DEV"},2,"==",{"VAR?":"ART"},2,"==","&&","||",{"VAR?":"DEV"},2,"==",{"VAR?":"PROD"},2,"==","&&","||",{"VAR?":"ART"},2,"==",{"VAR?":"PROD"},2,"==","&&","||","/ev",{"->":".^.b",c:!0},{b:["\n","ev",{"VAR?":"isA"},"_","/ev",[{"->":".^.b",c:!0},{b:["\n","^Красивую графику любят все... но по-настоящему залипают на нее художники! А учитывая, как вы играете, можно сказать, что вы именно он. Вам подойдут <a href='https://gamelab.kbtu.kz/#programms'>курсы по компьютерной графике</a>. И они как раз у нас есть! Почему бы не попробовать курсы Object Modeling, 3D Character design или VFX?","\n",{"#":"IMAGE: https://cdn.jsdelivr.net/gh/NazymZhumabayeva/your-role-in-game-studio@tilda/artist.png"},{"->":".^.^.^.6"},null,],},],"nop","\n","ev",{"VAR?":"isD"},"_","/ev",[{"->":".^.b",c:!0},{b:["\n","^Тот, без кого буквально не будет самой игры... разработчик! Именно им вы и являетесь. Можем вам предложить <a href=’https://gamelab.kbtu.kz/#programms’>курсы по движкам Unity и Unreal Engine</a>!","\n",{"#":"IMAGE: https://cdn.jsdelivr.net/gh/NazymZhumabayeva/your-role-in-game-studio@tilda/developer.png"},{"->":".^.^.^.13"},null,],},],"nop","\n","ev",{"VAR?":"isP"},"_","/ev",[{"->":".^.b",c:!0},{b:["\n","^Такая заинтересованность во всех сферах и желание все анализировать для наилучшего результата... Вы продюсер игры! Из наших курсов вам больше всего подойдет <a href=’’https://gamelab.kbtu.kz/#programms>курс Game Design & Development</a>.","\n",{"#":"IMAGE: https://cdn.jsdelivr.net/gh/NazymZhumabayeva/your-role-in-game-studio@tilda/producer.png"},{"->":".^.^.^.20"},null,],},],"nop","\n","ev",{"VAR?":"isN"},"_","/ev",[{"->":".^.b",c:!0},{b:["\n","^Учитывая, какое вы внимание уделяете сюжету... осознанно или нет, можно сказать, что вы... нарративный дизайнер! И, как удивительно сложилось.. у нас есть <a href=’https://gamelab.kbtu.kz/#programms’>курс Нарративного Дизайна</a>!","\n",{"#":"IMAGE: https://cdn.jsdelivr.net/gh/NazymZhumabayeva/your-role-in-game-studio@tilda/narrative.png"},{"->":".^.^.^.27"},null,],},],"nop","\n","ev",{"VAR?":"isG"},"_","/ev",[{"->":".^.b",c:!0},{b:["\n","^Такую любовь к механикам, характеристикам, балансу в играх можно встретить только у... гейм дизайнеров! И всему этому можно научиться на <a href = ‘https://gamelab.kbtu.kz/#programms’>курсе Game Design & Development</a>! Ну, а если вы мечтаете превратить в игру любой процесс, не пропустите <a href=’https://gamelab.kbtu.kz/#programms’>наш курс Gamification and game studies</a>!","\n",{"#":"IMAGE: https://cdn.jsdelivr.net/gh/NazymZhumabayeva/your-role-in-game-studio@tilda/gamedesigner.png"},{"->":".^.^.^.34"},null,],},],"nop","\n",{"->":"final.7"},null,],},],"nop","\n","end",{"#f":1},],"global decl":["ev",0,{"VAR=":"NARR"},0,{"VAR=":"GAME"},0,{"VAR=":"ART"},0,{"VAR=":"PROD"},0,{"VAR=":"DEV"},!1,{"VAR=":"isN"},!1,{"VAR=":"isG"},!1,{"VAR=":"isA"},!1,{"VAR=":"isP"},!1,{"VAR=":"isD"},"/ev","end",null,],"#f":1,},],listDefs:{},}