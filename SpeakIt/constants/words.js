const words = [
    [
        {
         "word": "agree",
         "image": "files/01_0001.jpg",
         "audio": "files/01_0001.mp3",
         "audioMeaning": "files/01_0001_meaning.mp3",
         "audioExample": "files/01_0001_example.mp3",
         "textMeaning": "To <i>agree</i> is to have the same opinion or belief as another person.",
         "textExample": "The students <b>agree</b> they have too much homework.",
         "transcription": "[əgríː]"
        },
        {
         "word": "alcohol",
         "image": "files/01_0002.jpg",
         "audio": "files/01_0002.mp3",
         "audioMeaning": "files/01_0002_meaning.mp3",
         "audioExample": "files/01_0002_example.mp3",
         "textMeaning": "<i>Alcohol</i> is a type of drink that can make people drunk.",
         "textExample": "A person should not drive a car after he or she has been drinking <b>alcohol</b>.",
         "transcription": "[ǽlkəhɔ̀ːl]"
        },
        {
         "word": "boat",
         "image": "files/01_0005.jpg",
         "audio": "files/01_0005.mp3",
         "audioMeaning": "files/01_0005_meaning.mp3",
         "audioExample": "files/01_0005_example.mp3",
         "textMeaning": "A <i>boat</i> is a vehicle that moves across water.",
         "textExample": "There is a small <b>boat</b> on the lake.",
         "transcription": "[bout]"
        },
        {
         "word": "arrive",
         "image": "files/01_0003.jpg",
         "audio": "files/01_0003.mp3",
         "audioMeaning": "files/01_0003_meaning.mp3",
         "audioExample": "files/01_0003_example.mp3",
         "textMeaning": "To <i>arrive</i> is to get somewhere.",
         "textExample": "They <b>arrived</b> at school at 7 a.m.",
         "transcription": "[əráiv]"
        },
        {
         "word": "August",
         "image": "files/01_0004.jpg",
         "audio": "files/01_0004.mp3",
         "audioMeaning": "files/01_0004_meaning.mp3",
         "audioExample": "files/01_0004_example.mp3",
         "textMeaning": "<i>August</i> is the eighth month of the year.",
         "textExample": "Is your birthday in <b>August</b>?",
         "transcription": "[ɔ́ːgəst]"
        },
        {
         "word": "breakfast",
         "image": "files/01_0006.jpg",
         "audio": "files/01_0006.mp3",
         "audioMeaning": "files/01_0006_meaning.mp3",
         "audioExample": "files/01_0006_example.mp3",
         "textMeaning": "<i>Breakfast</i> is the morning meal.",
         "textExample": "I ate eggs for <b>breakfast</b>.",
         "transcription": "[brekfəst]"
        },
        {
         "word": "camera",
         "image": "files/01_0007.jpg",
         "audio": "files/01_0007.mp3",
         "audioMeaning": "files/01_0007_meaning.mp3",
         "audioExample": "files/01_0007_example.mp3",
         "textMeaning": "A <i>camera</i> is a piece of equipment that takes pictures.",
         "textExample": "I brought my <b>camera</b> on my vacation.",
         "transcription": "[kǽmərə]"
        },
        {
         "word": "capital",
         "image": "files/01_0008.jpg",
         "audio": "files/01_0008.mp3",
         "audioMeaning": "files/01_0008_meaning.mp3",
         "audioExample": "files/01_0008_example.mp3",
         "textMeaning": "A <i>capital</i> is a city where a country’s government is based.",
         "textExample": "The <b>capital</b> of the United States is Washington, D.C.",
         "transcription": "[kæpətl]"
        },
        {
         "word": "catch",
         "image": "files/01_0009.jpg",
         "audio": "files/01_0009.mp3",
         "audioMeaning": "files/01_0009_meaning.mp3",
         "audioExample": "files/01_0009_example.mp3",
         "textMeaning": "To <i>catch</i> is to grab or get something.",
         "textExample": "Did you <b>catch</b> the ball during the baseball game?",
         "transcription": "[kætʃ]"
        },
        {
         "word": "duck",
         "image": "files/01_0010.jpg",
         "audio": "files/01_0010.mp3",
         "audioMeaning": "files/01_0010_meaning.mp3",
         "audioExample": "files/01_0010_example.mp3",
         "textMeaning": "A <i>duck</i> is a small water bird.",
         "textExample": "People feed <b>ducks</b> at the lake.",
         "transcription": "[dʌk]"
        },
        {
         "word": "enjoy",
         "image": "files/01_0011.jpg",
         "audio": "files/01_0011.mp3",
         "audioMeaning": "files/01_0011_meaning.mp3",
         "audioExample": "files/01_0011_example.mp3",
         "textMeaning": "To <i>enjoy</i> is to like something.",
         "textExample": "The woman <b>enjoys</b> riding her bicycle.",
         "transcription": "[indʒɔ́i]"
        },
        {
         "word": "invite",
         "image": "files/01_0012.jpg",
         "audio": "files/01_0012.mp3",
         "audioMeaning": "files/01_0012_meaning.mp3",
         "audioExample": "files/01_0012_example.mp3",
         "textMeaning": "To <i>invite</i> is to ask someone to come to a place or event.",
         "textExample": "I will <b>invite</b> my friends to my birthday party.",
         "transcription": "[inváit]"
        },
        {
         "word": "month",
         "image": "files/01_0014.jpg",
         "audio": "files/01_0014.mp3",
         "audioMeaning": "files/01_0014_meaning.mp3",
         "audioExample": "files/01_0014_example.mp3",
         "textMeaning": "A <i>month</i> is one of 12 periods of time in one year.",
         "textExample": "January is the first <b>month</b> of the year.",
         "transcription": "[mʌnθ]"
        },
        {
         "word": "travel",
         "image": "files/01_0015.jpg",
         "audio": "files/01_0015.mp3",
         "audioMeaning": "files/01_0015_meaning.mp3",
         "audioExample": "files/01_0015_example.mp3",
         "textMeaning": "To <i>travel</i> is to go to a faraway place on vacation or business.",
         "textExample": "They will <b>travel</b> to Argentina this summer.",
         "transcription": "[trǽvəl]"
        },
        {
         "word": "love",
         "image": "files/01_0013.jpg",
         "audio": "files/01_0013.mp3",
         "audioMeaning": "files/01_0013_meaning.mp3",
         "audioExample": "files/01_0013_example.mp3",
         "textMeaning": "To <i>love</i> is to like something or someone a lot.",
         "textExample": "I <b>love</b> my family very much.",
         "transcription": "[lʌv]"
        },
        {
         "word": "typical",
         "image": "files/01_0016.jpg",
         "audio": "files/01_0016.mp3",
         "audioMeaning": "files/01_0016_meaning.mp3",
         "audioExample": "files/01_0016_example.mp3",
         "textMeaning": "If something is <i>typical</i>, it is normal, or something that usually happens.",
         "textExample": "My <b>typical</b> breakfast is toast and eggs.",
         "transcription": "[típikəl]"
        },
        {
         "word": "visit",
         "image": "files/01_0017.jpg",
         "audio": "files/01_0017.mp3",
         "audioMeaning": "files/01_0017_meaning.mp3",
         "audioExample": "files/01_0017_example.mp3",
         "textMeaning": "To <i>visit</i> is to go and spend time in another place or see another person.",
         "textExample": "She wants to <b>visit</b> her grandmother.",
         "transcription": "[vízit]"
        },
        {
         "word": "weather",
         "image": "files/01_0018.jpg",
         "audio": "files/01_0018.mp3",
         "audioMeaning": "files/01_0018_meaning.mp3",
         "audioExample": "files/01_0018_example.mp3",
         "textMeaning": "<i>Weather</i> is the temperature and the state of the outdoors.",
         "textExample": "Today’s <b>weather</b> is rainy and cloudy.",
         "transcription": "[weðər]"
        },
        {
         "word": "wine",
         "image": "files/01_0020.jpg",
         "audio": "files/01_0020.mp3",
         "audioMeaning": "files/01_0020_meaning.mp3",
         "audioExample": "files/01_0020_example.mp3",
         "textMeaning": "<i>Wine</i> is an alcoholic drink made from grapes.",
         "textExample": "The store carried both red and white <b>wine</b>.",
         "transcription": "[wain]"
        },
        {
         "word": "week",
         "image": "files/01_0019.jpg",
         "audio": "files/01_0019.mp3",
         "audioMeaning": "files/01_0019_meaning.mp3",
         "audioExample": "files/01_0019_example.mp3",
         "textMeaning": "A <i>week</i> is a period of time that is seven days long.",
         "textExample": "What are you doing next <b>week</b>?",
         "transcription": "[wiːk]"
        }
    ],
    [
        {
         "word": "Adventure",
         "image": "files/02_0021.jpg",
         "audio": "files/02_0021.mp3",
         "audioMeaning": "files/02_0021_meaning.mp3",
         "audioExample": "files/02_0021_example.mp3",
         "textMeaning": "An <i>adventure</i> is a fun or exciting thing that you do.",
         "textExample": "Riding in the rough water was an <b>adventure</b>.",
         "transcription": "[ədvéntʃər]"
        },
        {
         "word": "approach",
         "image": "files/02_0022.jpg",
         "audio": "files/02_0022.mp3",
         "audioMeaning": "files/02_0022_meaning.mp3",
         "audioExample": "files/02_0022_example.mp3",
         "textMeaning": "To <i>approach</i> something means to move close to it.",
         "textExample": "The boy <b>approached</b> his school.",
         "transcription": "[əpróutʃ]"
        },
        {
         "word": "chemical",
         "image": "files/02_0024.jpg",
         "audio": "files/02_0024.mp3",
         "audioMeaning": "files/02_0024_meaning.mp3",
         "audioExample": "files/02_0024_example.mp3",
         "textMeaning": "A <i>chemical</i> is something that scientists use in chemistry.",
         "textExample": "The scientist mixed the <b>chemicals</b>.",
         "transcription": "[kémikəl]"
        },
        {
         "word": "carefully",
         "image": "files/02_0023.jpg",
         "audio": "files/02_0023.mp3",
         "audioMeaning": "files/02_0023_meaning.mp3",
         "audioExample": "files/02_0023_example.mp3",
         "textMeaning": "<i>Carefully</i> means with great attention, especially to detail or safety.",
         "textExample": "The baby <b>carefully</b> climbed down the stairs.",
         "transcription": "[kɛ́ərfəli]"
        },
        {
         "word": "create",
         "image": "files/02_0025.jpg",
         "audio": "files/02_0025.mp3",
         "audioMeaning": "files/02_0025_meaning.mp3",
         "audioExample": "files/02_0025_example.mp3",
         "textMeaning": "To <i>create</i> means to make something new.",
         "textExample": "She <b>created</b> an igloo from blocks of snow.",
         "transcription": "[kriéit]"
        },
        {
         "word": "evil",
         "image": "files/02_0026.jpg",
         "audio": "files/02_0026.mp3",
         "audioMeaning": "files/02_0026_meaning.mp3",
         "audioExample": "files/02_0026_example.mp3",
         "textMeaning": "<i>Evil</i> describes something or someone bad or cruel, not good.",
         "textExample": "They felt a strange, <b>evil</b> presence as they got closer to the house.",
         "transcription": "[íːvəl]"
        },
        {
         "word": "experiment",
         "image": "files/02_0027.jpg",
         "audio": "files/02_0027.mp3",
         "audioMeaning": "files/02_0027_meaning.mp3",
         "audioExample": "files/02_0027_example.mp3",
         "textMeaning": "An <i>experiment</i> is a test that you do to see what will happen.",
         "textExample": "The student did an <b>experiment</b> in science class.",
         "transcription": "[ikspérəmənt]"
        },
        {
         "word": "laboratory",
         "image": "files/02_0029.jpg",
         "audio": "files/02_0029.mp3",
         "audioMeaning": "files/02_0029_meaning.mp3",
         "audioExample": "files/02_0029_example.mp3",
         "textMeaning": "A <i>laboratory</i> is a room where a scientist works.",
         "textExample": "My mother works in a <b>laboratory</b>.",
         "transcription": "[lǽbərətɔ̀ːri]"
        },
        {
         "word": "kill",
         "image": "files/02_0028.jpg",
         "audio": "files/02_0028.mp3",
         "audioMeaning": "files/02_0028_meaning.mp3",
         "audioExample": "files/02_0028_example.mp3",
         "textMeaning": "To <i>kill</i> someone or something is to make them die.",
         "textExample": "I <b>killed</b> the fly.",
         "transcription": "[kil]"
        },
        {
         "word": "laugh",
         "image": "files/02_0030.jpg",
         "audio": "files/02_0030.mp3",
         "audioMeaning": "files/02_0030_meaning.mp3",
         "audioExample": "files/02_0030_example.mp3",
         "textMeaning": "<i>Laugh</i> is the sound made when someone is happy or a funny thing occurs.",
         "textExample": "The sound of her <b>laugh</b> filled the room.",
         "transcription": "[læf]"
        },
        {
         "word": "loud",
         "image": "files/02_0031.jpg",
         "audio": "files/02_0031.mp3",
         "audioMeaning": "files/02_0031_meaning.mp3",
         "audioExample": "files/02_0031_example.mp3",
         "textMeaning": "If a sound is <i>loud</i>, it is strong and very easy to hear.",
         "textExample": "The man’s voice was so <b>loud</b> that we all could hear him.",
         "transcription": "[laud]"
        },
        {
         "word": "nervous",
         "image": "files/02_0032.jpg",
         "audio": "files/02_0032.mp3",
         "audioMeaning": "files/02_0032_meaning.mp3",
         "audioExample": "files/02_0032_example.mp3",
         "textMeaning": "When a person is <i>nervous</i>, they think something bad will happen.",
         "textExample": "The boy became <b>nervous</b> when he heard the news.",
         "transcription": "[nə́ːrvəs]"
        },
        {
         "word": "noise",
         "image": "files/02_0033.jpg",
         "audio": "files/02_0033.mp3",
         "audioMeaning": "files/02_0033_meaning.mp3",
         "audioExample": "files/02_0033_example.mp3",
         "textMeaning": "A <i>noise</i> is an unpleasant sound.",
         "textExample": "The crying baby made a loud <b>noise</b>.",
         "transcription": "[nɔiz]"
        },
        {
         "word": "scare",
         "image": "files/02_0035.jpg",
         "audio": "files/02_0035.mp3",
         "audioMeaning": "files/02_0035_meaning.mp3",
         "audioExample": "files/02_0035_example.mp3",
         "textMeaning": "To <i>scare</i> someone is to make them feel afraid.",
         "textExample": "My uncle was <b>scared</b> by what he saw in the room.",
         "transcription": "[skɛəːr]"
        },
        {
         "word": "project",
         "image": "files/02_0034.jpg",
         "audio": "files/02_0034.mp3",
         "audioMeaning": "files/02_0034_meaning.mp3",
         "audioExample": "files/02_0034_example.mp3",
         "textMeaning": "A <i>project</i> is a type of work that you do for school or a job.",
         "textExample": "His afternoon work <b>project</b> was to paint the room green.",
         "transcription": "[prάdʒekt]"
        },
        {
         "word": "secret",
         "image": "files/02_0036.jpg",
         "audio": "files/02_0036.mp3",
         "audioMeaning": "files/02_0036_meaning.mp3",
         "audioExample": "files/02_0036_example.mp3",
         "textMeaning": "A <i>secret</i> is something that you do not tell other people.",
         "textExample": "The two boys were sharing a <b>secret</b>.",
         "transcription": "[síːkrit]"
        },
        {
         "word": "shout",
         "image": "files/02_0037.jpg",
         "audio": "files/02_0037.mp3",
         "audioMeaning": "files/02_0037_meaning.mp3",
         "audioExample": "files/02_0037_example.mp3",
         "textMeaning": "To <i>shout</i> is to say something loudly.",
         "textExample": "My boss <b>shouted</b> at me because I was late for work.",
         "transcription": "[ʃaut]"
        },
        {
         "word": "smell",
         "image": "files/02_0038.jpg",
         "audio": "files/02_0038.mp3",
         "audioMeaning": "files/02_0038_meaning.mp3",
         "audioExample": "files/02_0038_example.mp3",
         "textMeaning": "To <i>smell</i> something means to use your nose to sense it.",
         "textExample": "The two friends <b>smelled</b> the flower.",
         "transcription": "[smel]"
        },
        {
         "word": "terrible",
         "image": "files/02_0039.jpg",
         "audio": "files/02_0039.mp3",
         "audioMeaning": "files/02_0039_meaning.mp3",
         "audioExample": "files/02_0039_example.mp3",
         "textMeaning": "If something is <i>terrible</i>, it is very bad.",
         "textExample": "The way he treated his classmate was <b>terrible</b>.",
         "transcription": "[térəbəl]"
        },
        {
         "word": "worse",
         "image": "files/02_0040.jpg",
         "audio": "files/02_0040.mp3",
         "audioMeaning": "files/02_0040_meaning.mp3",
         "audioExample": "files/02_0040_example.mp3",
         "textMeaning": "If something is <i>worse</i>, it is of poorer quality than another thing.",
         "textExample": "Business was <b>worse</b> this month than last month.",
         "transcription": "[wəːrs]"
        }
    ],
    [
        {
         "word": "alien",
         "image": "files/03_0041.jpg",
         "audio": "files/03_0041.mp3",
         "audioMeaning": "files/03_0041_meaning.mp3",
         "audioExample": "files/03_0041_example.mp3",
         "textMeaning": "An <i>alien</i> is a creature from a different world.",
         "textExample": "The <b>alien</b> came in peace.",
         "transcription": "[éiljən]"
        },
        {
         "word": "among",
         "image": "files/03_0042.jpg",
         "audio": "files/03_0042.mp3",
         "audioMeaning": "files/03_0042_meaning.mp3",
         "audioExample": "files/03_0042_example.mp3",
         "textMeaning": "If you are <i>among</i> certain things, they are all around you.",
         "textExample": "There was a red apple <b>among</b> the green ones.",
         "transcription": "[əmʌ̀ŋ]"
        },
        {
         "word": "chart",
         "image": "files/03_0043.jpg",
         "audio": "files/03_0043.mp3",
         "audioMeaning": "files/03_0043_meaning.mp3",
         "audioExample": "files/03_0043_example.mp3",
         "textMeaning": "A <i>chart</i> is a list of information.",
         "textExample": "We used a <b>chart</b> to see how we had improved.",
         "transcription": "[tʃɑːrt]"
        },
        {
         "word": "cloud",
         "image": "files/03_0044.jpg",
         "audio": "files/03_0044.mp3",
         "audioMeaning": "files/03_0044_meaning.mp3",
         "audioExample": "files/03_0044_example.mp3",
         "textMeaning": "A <i>cloud</i> is a group of water drops in the sky.",
         "textExample": "The sky was filled with white <b>clouds</b>.",
         "transcription": "[klaud]"
        },
        {
         "word": "describe",
         "image": "files/03_0045.jpg",
         "audio": "files/03_0045.mp3",
         "audioMeaning": "files/03_0045_meaning.mp3",
         "audioExample": "files/03_0045_example.mp3",
         "textMeaning": "To <i>describe</i> is to say or write what someone or something is like.",
         "textExample": "They <b>described</b> their tree as colorful, with gold ribbon and a star.",
         "transcription": "[diskráib]"
        },
        {
         "word": "ever",
         "image": "files/03_0046.jpg",
         "audio": "files/03_0046.mp3",
         "audioMeaning": "files/03_0046_meaning.mp3",
         "audioExample": "files/03_0046_example.mp3",
         "textMeaning": "<i>Ever</i> means at any time.",
         "textExample": "Going skiing last winter was the most fun I’ve <b>ever</b> had.",
         "transcription": "[évər]"
        },
        {
         "word": "fail",
         "image": "files/03_0047.jpg",
         "audio": "files/03_0047.mp3",
         "audioMeaning": "files/03_0047_meaning.mp3",
         "audioExample": "files/03_0047_example.mp3",
         "textMeaning": "To <i>fail</i> means you do not succeed in what you try to do.",
         "textExample": "Since he <b>failed</b> to get the job, he was sad.",
         "transcription": "[feil]"
        },
        {
         "word": "grade",
         "image": "files/03_0048.jpg",
         "audio": "files/03_0048.mp3",
         "audioMeaning": "files/03_0048_meaning.mp3",
         "audioExample": "files/03_0048_example.mp3",
         "textMeaning": "A <i>grade</i> is a score or mark given to someone’s work.",
         "textExample": "I managed to get good <b>grades</b> on my report card.",
         "transcription": "[greid]"
        },
        {
         "word": "instead",
         "image": "files/03_0049.jpg",
         "audio": "files/03_0049.mp3",
         "audioMeaning": "files/03_0049_meaning.mp3",
         "audioExample": "files/03_0049_example.mp3",
         "textMeaning": "<i>Instead</i> means in place of.",
         "textExample": "He ate the carrot <b>instead</b> of the ice cream.",
         "transcription": "[instéd]"
        },
        {
         "word": "library",
         "image": "files/03_0050.jpg",
         "audio": "files/03_0050.mp3",
         "audioMeaning": "files/03_0050_meaning.mp3",
         "audioExample": "files/03_0050_example.mp3",
         "textMeaning": "A <i>library</i> is a place where you go to read books.",
         "textExample": "The <b>library</b> at school is full of books.",
         "transcription": "[láibrèri]"
        },
        {
         "word": "photograph",
         "image": "files/03_0051.jpg",
         "audio": "files/03_0051.mp3",
         "audioMeaning": "files/03_0051_meaning.mp3",
         "audioExample": "files/03_0051_example.mp3",
         "textMeaning": "I like taking <i>photographs</i>.",
         "textExample": "I took this <b>photograph</b> with my cell phone.",
         "transcription": "[fóutəgrӕf]"
        },
        {
         "word": "planet",
         "image": "files/03_0052.jpg",
         "audio": "files/03_0052.mp3",
         "audioMeaning": "files/03_0052_meaning.mp3",
         "audioExample": "files/03_0052_example.mp3",
         "textMeaning": "A <i>planet</i> is a large round thing in space.",
         "textExample": "Saturn is the <b>planet</b> with the ring around it.",
         "transcription": "[plǽnət]"
        },
        {
         "word": "report",
         "image": "files/03_0053.jpg",
         "audio": "files/03_0053.mp3",
         "audioMeaning": "files/03_0053_meaning.mp3",
         "audioExample": "files/03_0053_example.mp3",
         "textMeaning": "A <i>report</i> is something someone writes for school or work.",
         "textExample": "Karen had trouble writing her <b>report</b>.",
         "transcription": "[ripɔ́ːrt]"
        },
        {
         "word": "several",
         "image": "files/03_0054.jpg",
         "audio": "files/03_0054.mp3",
         "audioMeaning": "files/03_0054_meaning.mp3",
         "audioExample": "files/03_0054_example.mp3",
         "textMeaning": "<i>Several</i> is more than two but not many.",
         "textExample": "He had to read <b>several</b> books for class.",
         "transcription": "[sévərəl]"
        },
        {
         "word": "shape",
         "image": "files/03_0055.jpg",
         "audio": "files/03_0055.mp3",
         "audioMeaning": "files/03_0055_meaning.mp3",
         "audioExample": "files/03_0055_example.mp3",
         "textMeaning": "An object’s <i>shape</i> is the arrangement of its sides and surfaces.",
         "textExample": "Even with your eyes closed you can feel the <b>shape</b> of it.",
         "transcription": "[ʃeip]"
        },
        {
         "word": "solve",
         "image": "files/03_0056.jpg",
         "audio": "files/03_0056.mp3",
         "audioMeaning": "files/03_0056_meaning.mp3",
         "audioExample": "files/03_0056_example.mp3",
         "textMeaning": "To <i>solve</i> something is to find an answer to it.",
         "textExample": "All the students could easily <b>solve</b> the math problem.",
         "transcription": "[sɑlv]"
        },
        {
         "word": "suddenly",
         "image": "files/03_0057.jpg",
         "audio": "files/03_0057.mp3",
         "audioMeaning": "files/03_0057_meaning.mp3",
         "audioExample": "files/03_0057_example.mp3",
         "textMeaning": "If something happens <i>suddenly</i>, it happens quickly and unexpectedly.",
         "textExample": "I was surprised when my friends <b>suddenly</b> shouted, “Happy birthday!”",
         "transcription": "[sʌ́dnli]"
        },
        {
         "word": "suppose",
         "image": "files/03_0058.jpg",
         "audio": "files/03_0058.mp3",
         "audioMeaning": "files/03_0058_meaning.mp3",
         "audioExample": "files/03_0058_example.mp3",
         "textMeaning": "To <i>suppose</i> is to guess.",
         "textExample": "I <b>suppose</b> I should go home now.",
         "transcription": "[səpóuz]"
        },
        {
         "word": "understand",
         "image": "files/03_0059.jpg",
         "audio": "files/03_0059.mp3",
         "audioMeaning": "files/03_0059_meaning.mp3",
         "audioExample": "files/03_0059_example.mp3",
         "textMeaning": "To <i>understand</i> something you need to know what it means.",
         "textExample": "Henry could not <b>understand</b> the message.",
         "transcription": "[Λndərstǽnd]"
        },
        {
         "word": "view",
         "image": "files/03_0060.jpg",
         "audio": "files/03_0060.mp3",
         "audioMeaning": "files/03_0060_meaning.mp3",
         "audioExample": "files/03_0060_example.mp3",
         "textMeaning": "To <i>view</i> is to look at something.",
         "textExample": "Michael likes to <b>view</b> himself in the mirror.",
         "transcription": "[vjuː]"
        }
    ],
    [
        {
         "word": "appropriate",
         "image": "files/04_0061.jpg",
         "audio": "files/04_0061.mp3",
         "audioMeaning": "files/04_0061_meaning.mp3",
         "audioExample": "files/04_0061_example.mp3",
         "textMeaning": "When a thing is <i>appropriate</i>, it is right or normal.",
         "textExample": "It’s <b>appropriate</b> to wear a suit when you go to the office.",
         "transcription": "[əpróuprièit]"
        },
        {
         "word": "avoid",
         "image": "files/04_0062.jpg",
         "audio": "files/04_0062.mp3",
         "audioMeaning": "files/04_0062_meaning.mp3",
         "audioExample": "files/04_0062_example.mp3",
         "textMeaning": "To <i>avoid</i> something is to stay away from it.",
         "textExample": "<b>Avoid</b> the broken bottle on the floor.",
         "transcription": "[əvɔ́id]"
        },
        {
         "word": "behave",
         "image": "files/04_0063.jpg",
         "audio": "files/04_0063.mp3",
         "audioMeaning": "files/04_0063_meaning.mp3",
         "audioExample": "files/04_0063_example.mp3",
         "textMeaning": "To <i>behave</i> is to act in a particular way, especially to be good.",
         "textExample": "She always <b>behaves</b> well when her father is around.",
         "transcription": "[bihéiv]"
        },
        {
         "word": "calm",
         "image": "files/04_0064.jpg",
         "audio": "files/04_0064.mp3",
         "audioMeaning": "files/04_0064_meaning.mp3",
         "audioExample": "files/04_0064_example.mp3",
         "textMeaning": "When someone is <i>calm</i>, they do not get excited or upset.",
         "textExample": "A nice warm bath makes me feel so <b>calm</b>.",
         "transcription": "[kɑːm]"
        },
        {
         "word": "concern",
         "image": "files/04_0065.jpg",
         "audio": "files/04_0065.mp3",
         "audioMeaning": "files/04_0065_meaning.mp3",
         "audioExample": "files/04_0065_example.mp3",
         "textMeaning": "<i>Concern</i> is a feeling of worry.",
         "textExample": "I was filled with <b>concern</b> after reading the newspaper.",
         "transcription": "[kənsə́ːrn]"
        },
        {
         "word": "content",
         "image": "files/04_0066.jpg",
         "audio": "files/04_0066.mp3",
         "audioMeaning": "files/04_0066_meaning.mp3",
         "audioExample": "files/04_0066_example.mp3",
         "textMeaning": "To be <i>content</i> is to be happy and not want more.",
         "textExample": "The baby looked very <b>content</b> sitting on the floor.",
         "transcription": "[kəntént]"
        },
        {
         "word": "expect",
         "image": "files/04_0067.jpg",
         "audio": "files/04_0067.mp3",
         "audioMeaning": "files/04_0067_meaning.mp3",
         "audioExample": "files/04_0067_example.mp3",
         "textMeaning": "If you <i>expect</i> something to happen, you believe it will happen.",
         "textExample": "I <b>expect</b> the bus to be here very soon.",
         "transcription": "[ikspékt]"
        },
        {
         "word": "frequently",
         "image": "files/04_0068.jpg",
         "audio": "files/04_0068.mp3",
         "audioMeaning": "files/04_0068_meaning.mp3",
         "audioExample": "files/04_0068_example.mp3",
         "textMeaning": "When something happens <i>frequently</i>, it happens often.",
         "textExample": "We meet <b>frequently</b>, either at the beginning or end of the week.",
         "transcription": "[fríːkwəntli]"
        },
        {
         "word": "habit",
         "image": "files/04_0069.jpg",
         "audio": "files/04_0069.mp3",
         "audioMeaning": "files/04_0069_meaning.mp3",
         "audioExample": "files/04_0069_example.mp3",
         "textMeaning": "A <i>habit</i> is a thing that you do often.",
         "textExample": "Smoking is a bad <b>habit</b> that can kill you.",
         "transcription": "[hǽbit]"
        },
        {
         "word": "instruct",
         "image": "files/04_0070.jpg",
         "audio": "files/04_0070.mp3",
         "audioMeaning": "files/04_0070_meaning.mp3",
         "audioExample": "files/04_0070_example.mp3",
         "textMeaning": "To <i>instruct</i> is to teach.",
         "textExample": "My teacher <b>instructs</b> us in several subjects.",
         "transcription": "[instrʌ́kt]"
        },
        {
         "word": "issue",
         "image": "files/04_0071.jpg",
         "audio": "files/04_0071.mp3",
         "audioMeaning": "files/04_0071_meaning.mp3",
         "audioExample": "files/04_0071_example.mp3",
         "textMeaning": "An <i>issue</i> is an important topic.",
         "textExample": "The men spoke about <b>issues</b> that were important to the people.",
         "transcription": "[íʃuː]"
        },
        {
         "word": "none",
         "image": "files/04_0072.jpg",
         "audio": "files/04_0072.mp3",
         "audioMeaning": "files/04_0072_meaning.mp3",
         "audioExample": "files/04_0072_example.mp3",
         "textMeaning": "<i>None</i> means not any of something.",
         "textExample": "He spent all his money. There is <b>none</b> left.",
         "transcription": "[nʌn]"
        },
        {
         "word": "patient",
         "image": "files/04_0073.jpg",
         "audio": "files/04_0073.mp3",
         "audioMeaning": "files/04_0073_meaning.mp3",
         "audioExample": "files/04_0073_example.mp3",
         "textMeaning": "If people are <i>patient</i>, they don’t become angry or upset easily.",
         "textExample": "I had to be <b>patient</b> and wait until 5 o’clock to leave.",
         "transcription": "[péiʃənt]"
        },
        {
         "word": "positive",
         "image": "files/04_0074.jpg",
         "audio": "files/04_0074.mp3",
         "audioMeaning": "files/04_0074_meaning.mp3",
         "audioExample": "files/04_0074_example.mp3",
         "textMeaning": "If something is <i>positive</i>, it is good.",
         "textExample": "She has a <b>positive</b> future ahead of her after finishing college.",
         "transcription": "[pɑ́zətiv]"
        },
        {
         "word": "punish",
         "image": "files/04_0075.jpg",
         "audio": "files/04_0075.mp3",
         "audioMeaning": "files/04_0075_meaning.mp3",
         "audioExample": "files/04_0075_example.mp3",
         "textMeaning": "To <i>punish</i> means to make someone suffer for breaking the rules or laws.",
         "textExample": "To <b>punish</b> me, my teacher had me stand in the corner.",
         "transcription": "[pʌ́niʃ]"
        },
        {
         "word": "represent",
         "image": "files/04_0076.jpg",
         "audio": "files/04_0076.mp3",
         "audioMeaning": "files/04_0076_meaning.mp3",
         "audioExample": "files/04_0076_example.mp3",
         "textMeaning": "To <i>represent</i> is to speak or act for a person or group.",
         "textExample": "My lawyer will <b>represent</b> me in court.",
         "transcription": "[rèprizént]"
        },
        {
         "word": "shake",
         "image": "files/04_0077.jpg",
         "audio": "files/04_0077.mp3",
         "audioMeaning": "files/04_0077_meaning.mp3",
         "audioExample": "files/04_0077_example.mp3",
         "textMeaning": "To <i>shake</i> is to move back and forth or up and down quickly.",
         "textExample": "When people <b>shake</b> hands, it usually means they agree.",
         "transcription": "[ʃeik]"
        },
        {
         "word": "spread",
         "image": "files/04_0078.jpg",
         "audio": "files/04_0078.mp3",
         "audioMeaning": "files/04_0078_meaning.mp3",
         "audioExample": "files/04_0078_example.mp3",
         "textMeaning": "To <i>spread</i> is to move out to cover a larger area.",
         "textExample": "I like to <b>spread</b> butter on my toast.",
         "transcription": "[spred]"
        },
        {
         "word": "stroll",
         "image": "files/04_0079.jpg",
         "audio": "files/04_0079.mp3",
         "audioMeaning": "files/04_0079_meaning.mp3",
         "audioExample": "files/04_0079_example.mp3",
         "textMeaning": "To <i>stroll</i> means to walk slowly and calmly.",
         "textExample": "My dog and I <b>strolled</b> through the park today.",
         "transcription": "[stroul]"
        },
        {
         "word": "village",
         "image": "files/04_0080.jpg",
         "audio": "files/04_0080.mp3",
         "audioMeaning": "files/04_0080_meaning.mp3",
         "audioExample": "files/04_0080_example.mp3",
         "textMeaning": "A <i>village</i> is a very small town.",
         "textExample": "There are only a few houses in my <b>village</b>.",
         "transcription": "[vílidʒ]"
        }
    ],
    [
        {
         "word": "active",
         "image": "files/05_0081.jpg",
         "audio": "files/05_0081.mp3",
         "audioMeaning": "files/05_0081_meaning.mp3",
         "audioExample": "files/05_0081_example.mp3",
         "textMeaning": "When someone is <i>active</i>, they move a lot or have a lot of things to do.",
         "textExample": "It is important to be <b>active</b> and not sit around all the time.",
         "transcription": "[ǽktiv]"
        },
        {
         "word": "adult",
         "image": "files/05_0082.jpg",
         "audio": "files/05_0082.mp3",
         "audioMeaning": "files/05_0082_meaning.mp3",
         "audioExample": "files/05_0082_example.mp3",
         "textMeaning": "An <i>adult</i> is a person who is more than 18 years old.",
         "textExample": "My mom and dad are <b>adults</b>.",
         "transcription": "[ədΛlt]"
        },
        {
         "word": "balance",
         "image": "files/05_0085.jpg",
         "audio": "files/05_0085.mp3",
         "audioMeaning": "files/05_0085_meaning.mp3",
         "audioExample": "files/05_0085_example.mp3",
         "textMeaning": "<i>Balance</i> is when two or more things are equal.",
         "textExample": "A good <b>balance</b> between work and fun helps keep you healthy.",
         "transcription": "[bǽləns]"
        },
        {
         "word": "bad",
         "image": "files/05_0084.jpg",
         "audio": "files/05_0084.mp3",
         "audioMeaning": "files/05_0084_meaning.mp3",
         "audioExample": "files/05_0084_example.mp3",
         "textMeaning": "When something is <i>bad</i>, it is not good.",
         "textExample": "She is unhappy because she had a <b>bad</b> day.",
         "transcription": "[bæd]"
        },
        {
         "word": "age",
         "image": "files/05_0083.jpg",
         "audio": "files/05_0083.mp3",
         "audioMeaning": "files/05_0083_meaning.mp3",
         "audioExample": "files/05_0083_example.mp3",
         "textMeaning": "<i>Age</i> is how many years someone has lived.",
         "textExample": "She died at the <b>age</b> of 80.",
         "transcription": "[eidʒ]"
        },
        {
         "word": "bike",
         "image": "files/05_0086.jpg",
         "audio": "files/05_0086.mp3",
         "audioMeaning": "files/05_0086_meaning.mp3",
         "audioExample": "files/05_0086_example.mp3",
         "textMeaning": "A <i>bike</i> is a vehicle with two wheels powered by a human.",
         "textExample": "He rides his <b>bike</b> to school every day.",
         "transcription": "[baik]"
        },
        {
         "word": "choose",
         "image": "files/05_0087.jpg",
         "audio": "files/05_0087.mp3",
         "audioMeaning": "files/05_0087_meaning.mp3",
         "audioExample": "files/05_0087_example.mp3",
         "textMeaning": "To <i>choose</i> is to pick something or make a decision.",
         "textExample": "I have to <b>choose</b> between taking art classes and sports lessons.",
         "transcription": "[tʃuːz]"
        },
        {
         "word": "doctor",
         "image": "files/05_0088.jpg",
         "audio": "files/05_0088.mp3",
         "audioMeaning": "files/05_0088_meaning.mp3",
         "audioExample": "files/05_0088_example.mp3",
         "textMeaning": "A <i>doctor</i> is a person who studies medicine and helps sick people.",
         "textExample": "You should go to the <b>doctor</b> when you are sick.",
         "transcription": "[dάktər]"
        },
        {
         "word": "during",
         "image": "files/05_0089.jpg",
         "audio": "files/05_0089.mp3",
         "audioMeaning": "files/05_0089_meaning.mp3",
         "audioExample": "files/05_0089_example.mp3",
         "textMeaning": "<i>During</i> an event means while the event was happening.",
         "textExample": "Did you sleep <b>during</b> the movie?",
         "transcription": "[djúəriŋ]"
        },
        {
         "word": "football",
         "image": "files/05_0090.jpg",
         "audio": "files/05_0090.mp3",
         "audioMeaning": "files/05_0090_meaning.mp3",
         "audioExample": "files/05_0090_example.mp3",
         "textMeaning": "<i>Football</i> is a sport with eleven members and an oval-shaped ball.",
         "textExample": "<b>Football</b> is a popular sport in the United States.",
         "transcription": "[fʊtbɒːl]"
        },
        {
         "word": "fun",
         "image": "files/05_0091.jpg",
         "audio": "files/05_0091.mp3",
         "audioMeaning": "files/05_0091_meaning.mp3",
         "audioExample": "files/05_0091_example.mp3",
         "textMeaning": "When something is <i>fun</i>, it is enjoyable.",
         "textExample": "We had a <b>fun</b> time at the birthday party.",
         "transcription": "[fʌn]"
        },
        {
         "word": "game",
         "image": "files/05_0092.jpg",
         "audio": "files/05_0092.mp3",
         "audioMeaning": "files/05_0092_meaning.mp3",
         "audioExample": "files/05_0092_example.mp3",
         "textMeaning": "A <i>game</i> is an activity where people compete against each other.",
         "textExample": "Let’s play a board <b>game</b> tonight.",
         "transcription": "[geim]"
        },
        {
         "word": "heart",
         "image": "files/05_0093.jpg",
         "audio": "files/05_0093.mp3",
         "audioMeaning": "files/05_0093_meaning.mp3",
         "audioExample": "files/05_0093_example.mp3",
         "textMeaning": "A <i>heart</i> is an organ that keeps the body alive.",
         "textExample": "My <b>heart</b> beats fast when I am nervous.",
         "transcription": "[hɑːrt]"
        },
        {
         "word": "golf",
         "image": "files/05_0094.jpg",
         "audio": "files/05_0094.mp3",
         "audioMeaning": "files/05_0094_meaning.mp3",
         "audioExample": "files/05_0094_example.mp3",
         "textMeaning": "<i>Golf</i> is a sport with clubs and a small white ball.",
         "textExample": "People play <b>golf</b> in nice weather.",
         "transcription": "[galf]"
        },
        {
         "word": "increase",
         "image": "files/05_0095.jpg",
         "audio": "files/05_0095.mp3",
         "audioMeaning": "files/05_0095_meaning.mp3",
         "audioExample": "files/05_0095_example.mp3",
         "textMeaning": "To <i>increase</i> is to make something larger.",
         "textExample": "I will <b>increase</b> my score if I study for the test.",
         "transcription": "[inkríːs]"
        },
        {
         "word": "life",
         "image": "files/05_0096.jpg",
         "audio": "files/05_0096.mp3",
         "audioMeaning": "files/05_0096_meaning.mp3",
         "audioExample": "files/05_0096_example.mp3",
         "textMeaning": "<i>Life</i> is the time when a person is alive.",
         "textExample": "My grandfather had a long <b>life</b>.",
         "transcription": "[laif]"
        },
        {
         "word": "kilometer",
         "image": "files/05_0097.jpg",
         "audio": "files/05_0097.mp3",
         "audioMeaning": "files/05_0097_meaning.mp3",
         "audioExample": "files/05_0097_example.mp3",
         "textMeaning": "A <i>kilometer</i> is a unit of measurement that is 1,000 meters.",
         "textExample": "A marathon is 42.2 <b>kilometers</b>.",
         "transcription": "[kilάmətər]"
        },
        {
         "word": "often",
         "image": "files/05_0098.jpg",
         "audio": "files/05_0098.mp3",
         "audioMeaning": "files/05_0098_meaning.mp3",
         "audioExample": "files/05_0098_example.mp3",
         "textMeaning": "<i>Often</i> is when something happens many times.",
         "textExample": "He <b>often</b> goes to bed early during the week.",
         "transcription": "[ɔ́ːfən]"
        },
        {
         "word": "plenty",
         "image": "files/05_0099.jpg",
         "audio": "files/05_0099.mp3",
         "audioMeaning": "files/05_0099_meaning.mp3",
         "audioExample": "files/05_0099_example.mp3",
         "textMeaning": "If you have <i>plenty</i> of something, there is a lot of it.",
         "textExample": "We have <b>plenty</b> of fruit, so help yourself.",
         "transcription": "[plenti]"
        },
        {
         "word": "weight",
         "image": "files/05_0100.jpg",
         "audio": "files/05_0100.mp3",
         "audioMeaning": "files/05_0100_meaning.mp3",
         "audioExample": "files/05_0100_example.mp3",
         "textMeaning": "<i>Weight</i> is how heavy something or someone is.",
         "textExample": "I gained <b>weight</b> because I ate a lot of pizza.",
         "transcription": "[weit]"
        }
    ],  
    [
        {
         "word": "apart",
         "image": "files/06_0101.jpg",
         "audio": "files/06_0101.mp3",
         "audioMeaning": "files/06_0101_meaning.mp3",
         "audioExample": "files/06_0101_example.mp3",
         "textMeaning": "When people or things are <i>apart</i>, they are not next to each other.",
         "textExample": "They moved <b>apart</b> and then came back together.",
         "transcription": "[əpάːrt]"
        },
        {
         "word": "attribute",
         "image": "files/06_0102.jpg",
         "audio": "files/06_0102.mp3",
         "audioMeaning": "files/06_0102_meaning.mp3",
         "audioExample": "files/06_0102_example.mp3",
         "textMeaning": "An <i>attribute</i> is a characteristic of a person or thing.",
         "textExample": "He isn’t very clever, but he does have some other positive <b>attributes</b>.",
         "transcription": "[ǽtribjùːt]"
        },
        {
         "word": "bilingual",
         "image": "files/06_0103.jpg",
         "audio": "files/06_0103.mp3",
         "audioMeaning": "files/06_0103_meaning.mp3",
         "audioExample": "files/06_0103_example.mp3",
         "textMeaning": "A <i>bilingual</i> person can speak two languages.",
         "textExample": "Since you already know English, after learning French you’ll be <b>bilingual</b>.",
         "transcription": "[bailíŋgwəl]"
        },
        {
         "word": "completely",
         "image": "files/06_0104.jpg",
         "audio": "files/06_0104.mp3",
         "audioMeaning": "files/06_0104_meaning.mp3",
         "audioExample": "files/06_0104_example.mp3",
         "textMeaning": "Something <i>completely</i> different is very, very different from before.",
         "textExample": "I was <b>completely</b> wrong.",
         "transcription": "[kəmplíːtli]"
        },
        {
         "word": "dash",
         "image": "files/06_0105.jpg",
         "audio": "files/06_0105.mp3",
         "audioMeaning": "files/06_0105_meaning.mp3",
         "audioExample": "files/06_0105_example.mp3",
         "textMeaning": "To <i>dash</i> means to run or move quickly.",
         "textExample": "Helen <b>dashed</b> up the stairs so she wouldn’t be late for her appointment.",
         "transcription": "[dæʃ]"
        },
        {
         "word": "disgust",
         "image": "files/06_0106.jpg",
         "audio": "files/06_0106.mp3",
         "audioMeaning": "files/06_0106_meaning.mp3",
         "audioExample": "files/06_0106_example.mp3",
         "textMeaning": "<i>Disgust</i> is a feeling of distaste and anger caused by something rude or unpleasant.",
         "textExample": "He felt <b>disgust</b> toward his date because she had such terrible eating habits.",
         "transcription": "[disgʌ́st]"
        },
        {
         "word": "fashionable",
         "image": "files/06_0107.jpg",
         "audio": "files/06_0107.mp3",
         "audioMeaning": "files/06_0107_meaning.mp3",
         "audioExample": "files/06_0107_example.mp3",
         "textMeaning": "Something <i>fashionable</i> is what people like to wear and do now.",
         "textExample": "It is very <b>fashionable</b> to wear a hat.",
         "transcription": "[fǽʃənəbl]"
        },
        {
         "word": "foreign",
         "image": "files/06_0108.jpg",
         "audio": "files/06_0108.mp3",
         "audioMeaning": "files/06_0108_meaning.mp3",
         "audioExample": "files/06_0108_example.mp3",
         "textMeaning": "Something <i>foreign</i> is something we are not used to.",
         "textExample": "He has travelled widely in <b>foreign</b> countries.",
         "transcription": "[fάrən]"
        },
        {
         "word": "mirror",
         "image": "files/06_0110.jpg",
         "audio": "files/06_0110.mp3",
         "audioMeaning": "files/06_0110_meaning.mp3",
         "audioExample": "files/06_0110_example.mp3",
         "textMeaning": "A <i>mirror</i> is usually made of glass, and you can see yourself in it.",
         "textExample": "He used the <b>mirror</b> to shine light in their eyes.",
         "transcription": "[mírə(r)]"
        },
        {
         "word": "gulf",
         "image": "files/06_0109.jpg",
         "audio": "files/06_0109.mp3",
         "audioMeaning": "files/06_0109_meaning.mp3",
         "audioExample": "files/06_0109_example.mp3",
         "textMeaning": "A <i>gulf</i> is a gap between people who do not understand each other.",
         "textExample": "There has been a <b>gulf</b> between James and Tony since their parents died.",
         "transcription": "[gʌlf]"
        },
        {
         "word": "natural",
         "image": "files/06_0111.jpg",
         "audio": "files/06_0111.mp3",
         "audioMeaning": "files/06_0111_meaning.mp3",
         "audioExample": "files/06_0111_example.mp3",
         "textMeaning": "Things that are <i>natural</i> are not made by people.",
         "textExample": "We need to take care of the <b>natural</b> world.",
         "transcription": "[nǽʧərəl]"
        },
        {
         "word": "nowadays",
         "image": "files/06_0112.jpg",
         "audio": "files/06_0112.mp3",
         "audioMeaning": "files/06_0112_meaning.mp3",
         "audioExample": "files/06_0112_example.mp3",
         "textMeaning": "<i>Nowadays</i> means at the present time.",
         "textExample": "<b>Nowadays</b>, not so many people smoke.",
         "transcription": "[náuədèiz]"
        },
        {
         "word": "participant",
         "image": "files/06_0113.jpg",
         "audio": "files/06_0113.mp3",
         "audioMeaning": "files/06_0113_meaning.mp3",
         "audioExample": "files/06_0113_example.mp3",
         "textMeaning": "A <i>participant</i> is someone who joins in a social event or competition.",
         "textExample": "There were thousands of <b>participants</b> in this year’s marathon.",
         "transcription": "[pɑːrtísəpənt]"
        },
        {
         "word": "ritual",
         "image": "files/06_0114.jpg",
         "audio": "files/06_0114.mp3",
         "audioMeaning": "files/06_0114_meaning.mp3",
         "audioExample": "files/06_0114_example.mp3",
         "textMeaning": "A <i>ritual</i> is a formal custom that people do regularly.",
         "textExample": "Ken was very interested to learn about the religious <b>rituals</b> of the natives.",
         "transcription": "[rítʃuəl]"
        },
        {
         "word": "sport",
         "image": "files/06_0116.jpg",
         "audio": "files/06_0116.mp3",
         "audioMeaning": "files/06_0116_meaning.mp3",
         "audioExample": "files/06_0116_example.mp3",
         "textMeaning": "<i>Sport</i> involves games like running, jumping, football, and tennis.",
         "textExample": "She loves watching <b>sport</b> on TV.",
         "transcription": "[spɔːrt]"
        },
        {
         "word": "spoken",
         "image": "files/06_0115.jpg",
         "audio": "files/06_0115.mp3",
         "audioMeaning": "files/06_0115_meaning.mp3",
         "audioExample": "files/06_0115_example.mp3",
         "textMeaning": "<i>Spoken</i> language is what we say.",
         "textExample": "We cannot take back what has been <b>spoken</b>.",
         "transcription": "[spóukən]"
        },
        {
         "word": "surprised",
         "image": "files/06_0117.jpg",
         "audio": "files/06_0117.mp3",
         "audioMeaning": "files/06_0117_meaning.mp3",
         "audioExample": "files/06_0117_example.mp3",
         "textMeaning": "You are <i>surprised</i> when something unexpected happens.",
         "textExample": "He didn’t appear at all <b>surprised</b> when he read the article.",
         "transcription": "[sərpráizd]"
        },
        {
         "word": "tense",
         "image": "files/06_0118.jpg",
         "audio": "files/06_0118.mp3",
         "audioMeaning": "files/06_0118_meaning.mp3",
         "audioExample": "files/06_0118_example.mp3",
         "textMeaning": "When you are <i>tense</i>, you are not comfortable and feel unhappy.",
         "textExample": "I felt very <b>tense</b> waiting to hear the result of the vote.",
         "transcription": "[tens]"
        },
        {
         "word": "totally",
         "image": "files/06_0119.jpg",
         "audio": "files/06_0119.mp3",
         "audioMeaning": "files/06_0119_meaning.mp3",
         "audioExample": "files/06_0119_example.mp3",
         "textMeaning": "If you <i>totally</i> agree, you agree with everything just said.",
         "textExample": "I am <b>totally</b> against that.",
         "transcription": "[tóutəli]"
        },
        {
         "word": "vague",
         "image": "files/06_0120.jpg",
         "audio": "files/06_0120.mp3",
         "audioMeaning": "files/06_0120_meaning.mp3",
         "audioExample": "files/06_0120_example.mp3",
         "textMeaning": "If something is <i>vague</i>, it is not clear and gives very few details.",
         "textExample": "I asked him about his mother’s health, but he was very <b>vague</b> about it.",
         "transcription": "[veig]"
        }
    ]
]