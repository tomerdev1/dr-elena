import styles from "./accessibilityStatementPage.module.scss";

const AccessibilityStatementPage = () => {
  const header1 = "הצהרת נגישות";
  const body1 = "הצהרת הנגישות עודכנה בתאריך 31.10.24";
  const header2 =
    "לאתר מוצמד תפריט נגישות בחלקו הימני או השמאלי של האתר הנפתח בלחיצה על האייקון נגישות";
  const body2 =
    "במרפאת שיניים ד״ר ילנה סקליארוק, אנו פועלים רבות על מנת להנגיש את הארגון ואת אתר האינטרנט שלנו לאנשים עם מוגבלות על מנת לקדם שוויון זכויות ושקיפות כלפי אנשים עם מוגבלות.";
  const header3 = "מהות אתר אינטרנט נגיש";
  const body3 =
    "אתר אינטרנט נגיש, הינו אתר המאפשר לאדם עם מוגבלות, לגלוש באותה רמת יעילות והנאה כגולשים אחרים, תוך שימוש ביכולות המערכת עליה הוא פועל ובאמצעות טכנולוגיות מסייעות לנגישות .";
  const header4 = "ביצוע התאמות הנגישות באתר האינטרנט";
  const body4 =
    "התאמות הנגישות באתר בוצעו בהתאם לסימן ג': שירותי האינטרנט בתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות) התשע''ג 2013, לתקן הישראלי תי 5568 המבוסס על הנחיות 2.0 WCAG , האתר הונגש לרמה AA ובכפוף לשינויים והתאמות שבוצעו במסמך התקן הישראלי. האתר תומך בשימוש בטכנולוגיות מסייעות כגון תוכנות הקראת מסך, בגלישה בעזרת מקלדת על ידי שימוש במקשי ה-Tab וה-Shift+Tab למעבר בין קישורים, מקשי החיצים, מקש ה-Enter לבחירה, מקש ה-Esc ליציאה מתפריטים וחלונות,לחיצה על H או על מספר למעבר בין כותרות. האתר נבדק באופן קבוע כדי להבטיח את תחזוקת נגישות האתר";
  const header5 = "ישימות מיטבית לנגישות באתר האינטרנט";
  const body5 =
    "באתר אינטרנט זה, ניתן לגלוש בצורה מיטבית ונגישה באמצעות הדפדפנים הנפוצים ומומלץ להשתמש בדפדפנים הבאים:  Firefox / Opera / Safari / Lynx / Chrome \n ובתוכנות קוראות מסך: NVDA / Jaws / Voiceover";

  const header6 = "דרכי פניה לבקשות, תקלות נגישות והצעות לשיפור:";
  const body6 =
    "במידה ומצאתם באתר האינטרנט בעיה בנושא הנגישות או שהנכם זקוקים עזרה,אתם מוזמנים לפנות אלינו דרך רכז הנגישות של הארגון:\n\nתומר עבאדי \n 0523941417 \n tomer.abady@icloud.com";
  const { page, container, header, body } = styles;
  return (
    <div className={page}>
      <div className={container}>
        <h2 className={header}>{header1}</h2>
        <span className={body}>{body1}</span>
        <h2 className={header}>{header2}</h2>
        <span className={body}>{body2}</span>
        <h2 className={header}>{header3}</h2>
        <span className={body}>{body3}</span>
        <h2 className={header}>{header4}</h2>
        <span className={body}>{body4}</span>
        <h2 className={header}>{header5}</h2>
        <span className={body}>{body5}</span>
        <h2 className={header}>{header6}</h2>
        <span className={body}>{body6}</span>
      </div>
    </div>
  );
};

export default AccessibilityStatementPage;
